import { Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthenticatedRequest } from '../middleware/auth';
import { createError } from '../middleware/errorHandler';

const prisma = new PrismaClient();

export class AnalyticsController {

  async trackEvent(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { event, data } = req.body;

      if (!req.user) {
        return next(createError('Authentication required', 401));
      }

      await prisma.userAnalytics.create({
        data: {
          userId: req.user.id,
          event,
          data: data || null,
        },
      });

      res.json({ message: 'Event tracked successfully' });
    } catch (error) {
      next(error);
    }
  }

  async getDashboardData(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const [
        totalUsers,
        totalPosts,
        recentEvents,
        userGrowth,
        postActivity,
      ] = await Promise.all([
        // Total users
        prisma.user.count(),
        
        // Total posts
        prisma.post.count(),
        
        // Recent events (last 24 hours)
        prisma.userAnalytics.findMany({
          where: {
            timestamp: {
              gte: new Date(Date.now() - 24 * 60 * 60 * 1000),
            },
          },
          take: 100,
          orderBy: { timestamp: 'desc' },
          select: {
            event: true,
            timestamp: true,
            user: {
              select: {
                username: true,
              },
            },
          },
        }),
        
        // User growth (last 30 days)
        prisma.user.groupBy({
          by: ['createdAt'],
          where: {
            createdAt: {
              gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
            },
          },
          _count: {
            id: true,
          },
        }),
        
        // Post activity (last 7 days)
        prisma.post.groupBy({
          by: ['createdAt'],
          where: {
            createdAt: {
              gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
            },
          },
          _count: {
            id: true,
          },
        }),
      ]);

      // Process data for charts
      const dashboardData = {
        overview: {
          totalUsers,
          totalPosts,
          totalEvents: recentEvents.length,
          activeUsers: new Set(recentEvents.map(e => e.user.username)).size,
        },
        recentActivity: recentEvents.slice(0, 10),
        charts: {
          userGrowth: this.processTimeSeriesData(userGrowth),
          postActivity: this.processTimeSeriesData(postActivity),
        },
      };

      res.json(dashboardData);
    } catch (error) {
      next(error);
    }
  }

  private processTimeSeriesData(data: any[]) {
    // Group by date and sum counts
    const grouped = data.reduce((acc, item) => {
      const date = new Date(item.createdAt).toISOString().split('T')[0];
      acc[date] = (acc[date] || 0) + item._count.id;
      return acc;
    }, {});

    // Convert to array format
    return Object.entries(grouped).map(([date, count]) => ({
      date,
      count,
    }));
  }
}