'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, BookOpen, Target, Award, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function ProgressPage() {
  const [timeFilter, setTimeFilter] = useState('30days');

  // Mock data - in real app, this would come from your backend
  const progressData = {
    averageScore: 0,
    topicsMastered: 0,
    topicsToReview: 0,
    studyStreak: 0,
    totalStudyTime: 0
  };

  const subjects = [
    { name: 'Algebra', progress: 0, color: 'bg-blue-500' },
    { name: 'Geometry', progress: 0, color: 'bg-green-500' },
    { name: 'Trigonometry', progress: 0, color: 'bg-purple-500' },
    { name: 'Statistics', progress: 0, color: 'bg-orange-500' },
    { name: 'Number Theory', progress: 0, color: 'bg-red-500' }
  ];

  const recentAchievements = [
    {
      title: 'Welcome to EduMath GH!',
      description: 'Started your mathematics journey',
      date: 'Today',
      icon: <Award className="w-5 h-5 text-yellow-500" />
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Progress Reports</h1>
            <p className="text-lg text-gray-600 mt-1">Track your learning journey</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="7days">Last 7 Days</option>
              <option value="30days">Last 30 Days</option>
              <option value="3months">Last 3 Months</option>
              <option value="all">All Time</option>
            </select>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-blue-600 mb-2">{progressData.averageScore}%</div>
              <div className="text-sm font-medium mb-1">Average Score</div>
              <div className="text-xs text-gray-500">No data available</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-green-600 mb-2">{progressData.topicsMastered}</div>
              <div className="text-sm font-medium mb-1">Topics Mastered</div>
              <div className="text-xs text-gray-500">No topics attempted</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-orange-600 mb-2">{progressData.topicsToReview}</div>
              <div className="text-sm font-medium mb-1">Topics to Review</div>
              <div className="text-xs text-gray-500">No topics attempted</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-purple-600 mb-2">{progressData.studyStreak}</div>
              <div className="text-sm font-medium mb-1">Study Streak</div>
              <div className="text-xs text-gray-500">Days in a row</div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-6">Subject Mastery</h3>
              <div className="space-y-4">
                {subjects.map((subject, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{subject.name}</span>
                      <span className="text-sm text-gray-600">{subject.progress}%</span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-6">Recent Achievements</h3>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-white rounded-lg">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-600 mb-1">{achievement.description}</p>
                      <span className="text-xs text-gray-500">{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Empty State for Detailed Progress */}
        <Card>
          <CardContent className="p-12 text-center">
            <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No progress data available</h3>
            <p className="text-gray-600 mb-6">Complete your first assignment to see detailed progress reports</p>
            <Button asChild>
              <a href="/dashboard/assignments">
                <BookOpen className="w-4 h-4 mr-2" />
                View Assignments
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}