import api from './api';
import { AuthResponse, User } from '../types';

export const authService = {
  async login(credentials: { email: string; password: string }): Promise<AuthResponse> {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  async register(userData: {
    email: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
  }): Promise<{ message: string; user: User }> {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  async logout(): Promise<void> {
    await api.post('/auth/logout');
  },

  async getProfile(): Promise<{ user: User }> {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async refreshToken(): Promise<{ token: string }> {
    const response = await api.post('/auth/refresh');
    return response.data;
  },
};