export interface User {
  id: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: 'USER' | 'ADMIN' | 'MODERATOR';
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    username: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
  };
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: {
    message: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface DashboardData {
  overview: {
    totalUsers: number;
    totalPosts: number;
    totalEvents: number;
    activeUsers: number;
  };
  recentActivity: Array<{
    event: string;
    timestamp: string;
    user: {
      username: string;
    };
  }>;
  charts: {
    userGrowth: Array<{
      date: string;
      count: number;
    }>;
    postActivity: Array<{
      date: string;
      count: number;
    }>;
  };
}