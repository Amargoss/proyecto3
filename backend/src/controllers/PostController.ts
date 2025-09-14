import { Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { AuthenticatedRequest } from '../middleware/auth';
import { createError } from '../middleware/errorHandler';

const prisma = new PrismaClient();

export class PostController {

  async getPosts(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const [posts, total] = await Promise.all([
        prisma.post.findMany({
          where: { published: true },
          skip,
          take: limit,
          select: {
            id: true,
            title: true,
            content: true,
            slug: true,
            createdAt: true,
            updatedAt: true,
            author: {
              select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
                avatar: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        }),
        prisma.post.count({ where: { published: true } }),
      ]);

      res.json({
        posts,
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

  async getPostBySlug(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { slug } = req.params;

      const post = await prisma.post.findUnique({
        where: { slug },
        select: {
          id: true,
          title: true,
          content: true,
          slug: true,
          published: true,
          createdAt: true,
          updatedAt: true,
          author: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
              avatar: true,
            },
          },
        },
      });

      if (!post) {
        return next(createError('Post not found', 404));
      }

      // Only show unpublished posts to the author or admin
      if (!post.published && 
          req.user?.id !== post.author.id && 
          req.user?.role !== 'ADMIN') {
        return next(createError('Post not found', 404));
      }

      res.json({ post });
    } catch (error) {
      next(error);
    }
  }

  async createPost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { title, content, published = false } = req.body;

      if (!req.user) {
        return next(createError('Authentication required', 401));
      }

      // Generate slug from title
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-');

      // Check if slug already exists
      const existingPost = await prisma.post.findUnique({
        where: { slug },
      });

      if (existingPost) {
        return next(createError('Post with this title already exists', 409));
      }

      const post = await prisma.post.create({
        data: {
          title,
          content,
          slug,
          published,
          authorId: req.user.id,
        },
        select: {
          id: true,
          title: true,
          content: true,
          slug: true,
          published: true,
          createdAt: true,
          author: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      });

      res.status(201).json({
        message: 'Post created successfully',
        post,
      });
    } catch (error) {
      next(error);
    }
  }

  async updatePost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, content, published } = req.body;

      const existingPost = await prisma.post.findUnique({
        where: { id },
        select: { authorId: true },
      });

      if (!existingPost) {
        return next(createError('Post not found', 404));
      }

      // Only author or admin can update
      if (req.user?.id !== existingPost.authorId && req.user?.role !== 'ADMIN') {
        return next(createError('Insufficient permissions', 403));
      }

      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          title: title || undefined,
          content: content || undefined,
          published: published !== undefined ? published : undefined,
        },
        select: {
          id: true,
          title: true,
          content: true,
          slug: true,
          published: true,
          updatedAt: true,
          author: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
            },
          },
        },
      });

      res.json({
        message: 'Post updated successfully',
        post: updatedPost,
      });
    } catch (error) {
      next(error);
    }
  }

  async deletePost(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const existingPost = await prisma.post.findUnique({
        where: { id },
        select: { authorId: true },
      });

      if (!existingPost) {
        return next(createError('Post not found', 404));
      }

      // Only author or admin can delete
      if (req.user?.id !== existingPost.authorId && req.user?.role !== 'ADMIN') {
        return next(createError('Insufficient permissions', 403));
      }

      await prisma.post.delete({
        where: { id },
      });

      res.json({ message: 'Post deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}