'use client';
import { useAuth } from '../context/AuthContext';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <div className="space-y-8">
        
        <div className="text-center bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back, {user.full_name}</h1>
          <p className="text-lg text-gray-600">Here's your profile information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-indigo-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white">Your Profile</h2>
          </div>
          
          {/* Card Content */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Full Name</p>
                <p className="text-lg font-medium text-gray-900">{user.full_name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Username</p>
                <p className="text-lg font-medium text-gray-900">{user.username}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</p>
                <p className="text-lg font-medium text-gray-900 break-all">{user.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Status</p>
                <p className={`text-lg font-medium ${user.is_approved ? 'text-green-600' : 'text-yellow-600'}`}>
                  {user.is_approved ? 'Approved' : 'Pending Approval'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}