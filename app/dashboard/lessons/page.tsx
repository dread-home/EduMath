'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Play, Clock, CheckCircle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function LessonsPage() {
  const [selectedSubject, setSelectedSubject] = useState('all');

  const subjects = [
    { id: 'all', name: 'All Subjects' },
    { id: 'algebra', name: 'Algebra' },
    { id: 'geometry', name: 'Geometry' },
    { id: 'trigonometry', name: 'Trigonometry' },
    { id: 'statistics', name: 'Statistics' },
    { id: 'number-theory', name: 'Number Theory' }
  ];

  const lessons = [
    {
      id: 'linear-equations',
      title: 'Linear Equations',
      subject: 'algebra',
      description: 'Understanding how to solve equations with one variable.',
      duration: '45 min',
      progress: 0,
      status: 'available',
      difficulty: 'Beginner',
      topics: ['Basic equations', 'Inverse operations', 'Word problems']
    },
    {
      id: 'quadratic-equations',
      title: 'Quadratic Equations',
      subject: 'algebra',
      description: 'Solving equations with variables raised to the second power.',
      duration: '60 min',
      progress: 0,
      status: 'locked',
      difficulty: 'Intermediate',
      topics: ['Factoring', 'Quadratic formula', 'Completing the square']
    },
    {
      id: 'angles-polygons',
      title: 'Angles in Polygons',
      subject: 'geometry',
      description: 'Calculate angles in various geometric shapes.',
      duration: '50 min',
      progress: 0,
      status: 'available',
      difficulty: 'Beginner',
      topics: ['Interior angles', 'Exterior angles', 'Regular polygons']
    },
    {
      id: 'basic-trigonometry',
      title: 'Basic Trigonometry',
      subject: 'trigonometry',
      description: 'Introduction to sine, cosine, and tangent ratios.',
      duration: '55 min',
      progress: 0,
      status: 'locked',
      difficulty: 'Intermediate',
      topics: ['SOH CAH TOA', 'Right triangles', 'Angle calculations']
    },
    {
      id: 'fractions',
      title: 'Fractions and Decimals',
      subject: 'number-theory',
      description: 'Operations with fractions and converting to decimals.',
      duration: '40 min',
      progress: 0,
      status: 'available',
      difficulty: 'Beginner',
      topics: ['Adding fractions', 'Multiplying fractions', 'Decimal conversion']
    },
    {
      id: 'basic-statistics',
      title: 'Basic Statistics',
      subject: 'statistics',
      description: 'Mean, median, mode, and range calculations.',
      duration: '45 min',
      progress: 0,
      status: 'available',
      difficulty: 'Beginner',
      topics: ['Central tendency', 'Data analysis', 'Graphs and charts']
    }
  ];

  const filteredLessons = selectedSubject === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.subject === selectedSubject);

  const getStatusIcon = (status: string, progress: number) => {
    if (status === 'locked') return <Lock className="w-5 h-5 text-gray-400" />;
    if (progress === 100) return <CheckCircle className="w-5 h-5 text-green-500" />;
    if (progress > 0) return <Play className="w-5 h-5 text-blue-500" />;
    return <BookOpen className="w-5 h-5 text-gray-600" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Lessons</h1>
            <p className="text-lg text-gray-600 mt-1">Master mathematics step by step</p>
          </div>
        </div>

        {/* Subject Filter */}
        <div className="flex flex-wrap gap-2">
          {subjects.map((subject) => (
            <Button
              key={subject.id}
              variant={selectedSubject === subject.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSubject(subject.id)}
              className="transition-all duration-200"
            >
              {subject.name}
            </Button>
          ))}
        </div>

        {/* Progress Overview */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">0</div>
                <div className="text-sm text-gray-600">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">0</div>
                <div className="text-sm text-gray-600">Topics Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">0h</div>
                <div className="text-sm text-gray-600">Study Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              className={`hover:shadow-lg transition-all duration-300 ${
                lesson.status === 'locked' ? 'opacity-60' : 'hover:-translate-y-1'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(lesson.status, lesson.progress)}
                    <Badge className={getDifficultyColor(lesson.difficulty)}>
                      {lesson.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {lesson.duration}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{lesson.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>

                {lesson.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{lesson.progress}%</span>
                    </div>
                    <Progress value={lesson.progress} />
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Topics covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lesson.topics.map((topic, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  asChild={lesson.status === 'available'}
                  disabled={lesson.status === 'locked'}
                  className="w-full"
                >
                  {lesson.status === 'available' ? (
                    <Link href={`/dashboard/lessons/${lesson.id}`}>
                      {lesson.progress > 0 ? 'Continue' : 'Start'} Lesson
                    </Link>
                  ) : (
                    <span>Complete previous lessons to unlock</span>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLessons.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No lessons found</h3>
              <p className="text-gray-600">Try selecting a different subject filter.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}