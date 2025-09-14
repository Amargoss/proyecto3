import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/slices/postsSlice';
import { RootState, AppDispatch } from '../store';
import { formatDistanceToNow } from 'date-fns';

const Posts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, isLoading, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner w-8 h-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Posts</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Latest Posts</h1>
        <p className="mt-2 text-gray-600">
          Discover the latest insights and updates from our community.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h2>
          <p className="text-gray-600">Be the first to create a post!</p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="card hover:shadow-md transition-shadow">
              <div className="card-body">
                <div className="flex items-center mb-4">
                  {post.author.avatar ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={post.author.avatar}
                      alt={post.author.username}
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-700">
                        {post.author.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author.firstName && post.author.lastName
                        ? `${post.author.firstName} ${post.author.lastName}`
                        : post.author.username}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  <a
                    href={`/posts/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </h2>
                
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                </p>
                
                <div className="flex items-center justify-between">
                  <a
                    href={`/posts/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Read more →
                  </a>
                  <time className="text-xs text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;