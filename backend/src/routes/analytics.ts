import { Router } from 'express';
import { AnalyticsController } from '../controllers/AnalyticsController';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();
const analyticsController = new AnalyticsController();

/**
 * @swagger
 * /api/analytics/track:
 *   post:
 *     summary: Track user event
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Event tracked successfully
 */
router.post('/track', authenticate, analyticsController.trackEvent);

/**
 * @swagger
 * /api/analytics/dashboard:
 *   get:
 *     summary: Get analytics dashboard data
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics data retrieved successfully
 *       403:
 *         description: Insufficient permissions
 */
router.get('/dashboard', authenticate, authorize('ADMIN'), analyticsController.getDashboardData);

export default router;