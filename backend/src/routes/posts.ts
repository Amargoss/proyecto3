import { Router } from 'express';
import { PostController } from '../controllers/PostController';
import { authenticate } from '../middleware/auth';

const router = Router();
const postController = new PostController();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get all published posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 */
router.get('/', postController.getPosts);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Post created successfully
 *       401:
 *         description: Authentication required
 */
router.post('/', authenticate, postController.createPost);

/**
 * @swagger
 * /api/posts/{slug}:
 *   get:
 *     summary: Get post by slug
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *       404:
 *         description: Post not found
 */
router.get('/:slug', postController.getPostBySlug);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       403:
 *         description: Insufficient permissions
 */
router.put('/:id', authenticate, postController.updatePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       403:
 *         description: Insufficient permissions
 */
router.delete('/:id', authenticate, postController.deletePost);

export default router;