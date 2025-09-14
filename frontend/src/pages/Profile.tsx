import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Profile: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Information */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
          </div>
          <div className="card-body space-y-4">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                {user?.avatar ? (
                  <img
                    className="w-20 h-20 rounded-full"
                    src={user.avatar}
                    alt={user.username}
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-2xl font-medium text-gray-700">
                      {user?.username.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <button className="btn-outline">
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="input"
                  value={user?.firstName || ''}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="input"
                  value={user?.lastName || ''}
                  readOnly
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                className="input"
                value={user?.username || ''}
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="input"
                value={user?.email || ''}
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {user?.role}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Member Since
              </label>
              <p className="text-sm text-gray-600">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </p>
            </div>

            <div className="flex justify-end">
              <button className="btn-primary">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="card">
          <div className="card-header">
            <h3 className="text-lg font-medium text-gray-900">Account Settings</h3>
          </div>
          <div className="card-body space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                <p className="text-sm text-gray-500">Receive email updates about your account activity</p>
              </div>
              <button className="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 bg-primary-600">
                <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <button className="btn-outline">
                Enable
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">Privacy Settings</h4>
                <p className="text-sm text-gray-500">Control how your information is shared</p>
              </div>
              <button className="btn-outline">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="card border-red-200">
          <div className="card-header border-red-200">
            <h3 className="text-lg font-medium text-red-900">Danger Zone</h3>
          </div>
          <div className="card-body space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-red-900">Change Password</h4>
                <p className="text-sm text-red-600">Update your account password</p>
              </div>
              <button className="btn bg-red-600 text-white hover:bg-red-700">
                Change Password
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-red-900">Delete Account</h4>
                <p className="text-sm text-red-600">Permanently delete your account and all data</p>
              </div>
              <button className="btn bg-red-600 text-white hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;