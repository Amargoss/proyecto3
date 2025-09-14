import { Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthenticatedRequest } from '../middleware/auth';
import { createError } from '../middleware/errorHandler';

const prisma = new PrismaClient();

export class UserController {
  
  async getUsers(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const [users, total] = await Promise.all([
        prisma.user.findMany({
          skip,
          take: limit,
          select: {
            id: true,
            email: true,
            username: true,
            firstName: true,
            lastName: true,
            role: true,
            isActive: true,
            createdAt: true,
          },
          orderBy: { createdAt: 'desc' },
        }),
        prisma.user.count(),
      ]);

      res.json({
        users,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      // Users can only view their own profile unless they're admin
      if (req.user?.id !== id && req.user?.role !== 'ADMIN') {
        return next(createError('Insufficient permissions', 403));
      }

      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          username: true,
          firstName: true,
          lastName: true,
          avatar: true,
          role: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
          posts: {
            select: {
              id: true,
              title: true,
              slug: true,
              published: true,
              createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
          },
        },
      });

      if (!user) {
        return next(createError('User not found', 404));
      }

      res.json({ user });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { firstName, lastName, avatar } = req.body;

      // Users can only update their own profile unless they're admin
      if (req.user?.id !== id && req.user?.role !== 'ADMIN') {
        return next(createError('Insufficient permissions', 403));
      }

      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          firstName: firstName || undefined,
          lastName: lastName || undefined,
          avatar: avatar || undefined,
        },
        select: {
          id: true,
          email: true,
          username: true,
          firstName: true,
          lastName: true,
          avatar: true,
          role: true,
          updatedAt: true,
        },
      });

      res.json({
        message: 'User updated successfully',
        user: updatedUser,
      });
    } catch (error) {
      next(error);
    }
  }
}