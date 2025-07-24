'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { GraduationCap, TrendingUp, BookOpen, ClipboardCheck, Award, Play, HelpCircle, FileText, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function DashboardPage() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    // Animate progress on load
    const timer = setTimeout(() => {
      setOverallProgress(0); // Start with 0% for new users
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!user || !userData) {
    return null;
  }

  const quickActions = [
    {
      icon: <Play className="w-8 h-8 text-blue-500" />,
      title: "Start Learning",
      href: "/dashboard/lessons"
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-500" />,
      title: "Ask a Tutor",
      href: "/dashboard/tutor"
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: "Past Questions",
      href: "/dashboard/resources"
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-500" />,
      title: "View Progress",
      href: "/dashboard/progress"
    }
  ];

  const upcomingTopics = [
    {
      title: "Linear Equations",
      subject: "Algebra",
      duration: "45 min",
      badge: "Today",
      badgeColor: "bg-blue-500",
      href: "/dashboard/lessons/linear-equations"
    },
    {
      title: "Angles in Polygons",
      subject: "Geometry",
      duration: "45 min",
      badge: "Tomorrow",
      badgeColor: "bg-gray-500"
    },
    {
      title: "Quadratic Equations",
      subject: "Algebra",
      duration: "1 hr",
      badge: "Wed",
      badgeColor: "bg-gray-500"
    }
  ];

  const recentActivity = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-500" />,
      title: "Started: Linear Equations",
      time: "Today",
      score: "0%",
      bgColor: "bg-blue-100"
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-orange-500" />,
      title: "Assignment Due: Algebra Practice",
      time: "Tomorrow",
      score: "",
      bgColor: "bg-orange-100"
    },
    {
      icon: <Award className="w-5 h-5 text-green-500" />,
      title: "Welcome to EduMath GH!",
      time: "Today",
      score: "",
      bgColor: "bg-green-100"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back, {userData.firstName}!
            </h1>
            <p className="text-lg text-gray-600 mt-1">Ready for today's maths session?</p>
          </div>
        </div>

        {/* Progress Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overall Mastery */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#f0f0f0"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#3b82f6"
                    strokeWidth="10"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    strokeDashoffset={`${2 * Math.PI * 50 * (1 - overallProgress / 100)}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{overallProgress}%</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Overall Mastery</h3>
              <p className="text-gray-600">You're just getting started!</p>
            </CardContent>
          </Card>

          {/* Current Focus */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Current Focus</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-medium">Linear Equations</h4>
                  <p className="text-sm text-gray-600">Algebra</p>
                </div>
              </div>
              <Progress value={0} className="mb-2" />
              <p className="text-sm text-gray-600 mb-4">0% mastered</p>
              <Button asChild className="w-full">
                <Link href="/dashboard/lessons/linear-equations">
                  <Play className="w-4 h-4 mr-2" />
                  Start Lesson
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* WAEC Readiness */}
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">WAEC Readiness</h3>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-medium">Practice Test Score</h4>
                  <p className="text-sm text-gray-600">Last attempt: Not taken</p>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-orange-800">
                  <span className="font-medium">Ready to start?</span> Take your first practice test!
                </p>
              </div>
              <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                <TrendingUp className="w-4 h-4 mr-2" />
                Take Practice Test
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  href={action.href}
                  className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium text-center">{action.title}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Topics & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Topics */}
          <Card className="h-fit">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Upcoming Topics</h3>
              <div className="space-y-3">
                {upcomingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                      index === 0 ? 'border-l-4 border-l-orange-500 bg-orange-50' : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{topic.title}</h4>
                        <p className="text-sm text-gray-600">{topic.subject} • {topic.duration}</p>
                      </div>
                      <Badge className={topic.badgeColor}>
                        {topic.badge}
                      </Badge>
                    </div>
                    {topic.href && (
                      <Button asChild variant="outline" size="sm" className="mt-2">
                        <Link href={topic.href}>Start Now</Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="h-fit">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <span>{activity.time}</span>
                        {activity.score && (
                          <>
                            <span>•</span>
                            <span>Score: {activity.score}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}