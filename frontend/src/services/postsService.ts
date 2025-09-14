import api from './api';
import { Post, PaginatedResponse } from '../types';

export const postsService = {
  async getPosts(params: { page?: number; limit?: number } = {}): Promise<PaginatedResponse<Post>> {
    const response = await api.get('/posts', { params });
    return response.data;
  },

  async getPostBySlug(slug: string): Promise<{ post: Post }> {
    const response = await api.get(`/posts/${slug}`);
    return response.data;
  },

  async createPost(postData: {
    title: string;
    content: string;
    published?: boolean;
  }): Promise<{ message: string; post: Post }> {
    const response = await api.post('/posts', postData);
    return response.data;
  },

  async updatePost(id: string, postData: {
    title?: string;
    content?: string;
    published?: boolean;
  }): Promise<{ message: string; post: Post }> {
    const response = await api.put(`/posts/${id}`, postData);
    return response.data;
  },

  async deletePost(id: string): Promise<{ message: string }> {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  },
};