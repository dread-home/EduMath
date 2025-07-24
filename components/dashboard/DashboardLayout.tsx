'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  LayoutDashboard, 
  BookOpen, 
  ClipboardCheck, 
  TrendingUp, 
  HelpCircle, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, userData, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: LayoutDashboard,
      current: pathname === '/dashboard'
    },
    {
      name: 'My Lessons',
      href: '/dashboard/lessons',
      icon: BookOpen,
      current: pathname.startsWith('/dashboard/lessons')
    },
    {
      name: 'Assignments',
      href: '/dashboard/assignments',
      icon: ClipboardCheck,
      current: pathname.startsWith('/dashboard/assignments')
    },
    {
      name: 'Progress Reports',
      href: '/dashboard/progress',
      icon: TrendingUp,
      current: pathname.startsWith('/dashboard/progress')
    },
    {
      name: 'WAEC Prep',
      href: '/dashboard/waec-prep',
      icon: HelpCircle,
      current: pathname.startsWith('/dashboard/waec-prep')
    },
    {
      name: 'Account Settings',
      href: '/dashboard/settings',
      icon: Settings,
      current: pathname.startsWith('/dashboard/settings')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ghana Flag Bar */}
      <div className="h-2 bg-gradient-to-r from-green-600 via-yellow-400 to-red-600"></div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 text-lg font-bold text-gray-900">EduMath GH</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
              <Link href="/courses" className="text-gray-700 hover:text-blue-500">Courses</Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-500">Resources</Link>
              <Link href="/students" className="text-gray-700 hover:text-blue-500">For Students</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-500">About Us</Link>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {userData?.firstName?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {userData?.firstName || 'User'}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-64 bg-white shadow-sm border-r min-h-screen`}>
          <div className="p-6">
            {/* User Profile */}
            <div className="flex items-center mb-6 pb-6 border-b">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold">
                  {userData?.firstName?.charAt(0) || 'U'}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {userData?.fullName || 'User'}
                </h3>
                <p className="text-sm text-gray-600 capitalize">{userData?.role || 'Student'}</p>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.current
                        ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </div>
  );
}