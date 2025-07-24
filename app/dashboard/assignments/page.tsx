'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ClipboardCheck, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Calendar,
  Filter,
  Tag,
  PaperPlane
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function AssignmentsPage() {
  const [filterStatus, setFilterStatus] = useState('all');

  const assignments = [
    {
      id: 1,
      title: 'Linear Equations Practice',
      subject: 'Algebra',
      description: 'Solve 10 linear equations showing all working steps.',
      dueDate: '15 Nov 2024',
      status: 'pending',
      progress: 0,
      totalQuestions: 10,
      completedQuestions: 0
    },
    {
      id: 2,
      title: 'Geometry Angles Quiz',
      subject: 'Geometry',
      description: 'Calculate missing angles in various polygons.',
      dueDate: '10 Nov 2024',
      submittedDate: '10 Nov 2024',
      status: 'submitted',
      progress: 100,
      totalQuestions: 8,
      completedQuestions: 8
    },
    {
      id: 3,
      title: 'Fractions Test',
      subject: 'Number Theory',
      description: 'Operations with fractions and mixed numbers.',
      dueDate: '05 Nov 2024',
      submittedDate: '05 Nov 2024',
      gradedDate: '05 Nov 2024',
      status: 'graded',
      progress: 100,
      score: 85,
      totalQuestions: 12,
      completedQuestions: 12
    },
    {
      id: 4,
      title: 'Word Problems Set',
      subject: 'Algebra',
      description: 'Solve 5 word problems using algebraic equations.',
      dueDate: '01 Nov 2024',
      status: 'overdue',
      progress: 0,
      totalQuestions: 5,
      completedQuestions: 0
    }
  ];

  const statusCounts = {
    pending: assignments.filter(a => a.status === 'pending').length,
    submitted: assignments.filter(a => a.status === 'submitted').length,
    graded: assignments.filter(a => a.status === 'graded').length,
    overdue: assignments.filter(a => a.status === 'overdue').length
  };

  const filteredAssignments = filterStatus === 'all' 
    ? assignments 
    : assignments.filter(assignment => assignment.status === filterStatus);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'submitted': return <PaperPlane className="w-4 h-4" />;
      case 'graded': return <CheckCircle className="w-4 h-4" />;
      case 'overdue': return <AlertTriangle className="w-4 h-4" />;
      default: return <ClipboardCheck className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'graded': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBorderColor = (status: string) => {
    switch (status) {
      case 'pending': return 'border-l-orange-500';
      case 'submitted': return 'border-l-blue-500';
      case 'graded': return 'border-l-green-500';
      case 'overdue': return 'border-l-red-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Assignments</h1>
            <p className="text-lg text-gray-600 mt-1">Track and submit your assignments</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Assignments</option>
              <option value="pending">Pending</option>
              <option value="submitted">Submitted</option>
              <option value="graded">Graded</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-orange-600 mb-1">{statusCounts.pending}</div>
              <div className="text-sm font-medium mb-1">Pending</div>
              <div className="text-xs text-gray-500">To be completed</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <PaperPlane className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-600 mb-1">{statusCounts.submitted}</div>
              <div className="text-sm font-medium mb-1">Submitted</div>
              <div className="text-xs text-gray-500">Awaiting grade</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-green-600 mb-1">{statusCounts.graded}</div>
              <div className="text-sm font-medium mb-1">Graded</div>
              <div className="text-xs text-gray-500">Completed</div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-red-600 mb-1">{statusCounts.overdue}</div>
              <div className="text-sm font-medium mb-1">Overdue</div>
              <div className="text-xs text-gray-500">Past deadline</div>
            </CardContent>
          </Card>
        </div>

        {/* Assignments List */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-6">Current Assignments</h3>
            
            <div className="space-y-4">
              {filteredAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`border-l-4 ${getBorderColor(assignment.status)} bg-white rounded-lg p-6 hover:shadow-md transition-all duration-300`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-semibold">{assignment.title}</h4>
                        <Badge className={getStatusColor(assignment.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(assignment.status)}
                            {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                          </span>
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-3 mb-3">
                        <Badge variant="secondary">
                          <Tag className="w-3 h-3 mr-1" />
                          {assignment.subject}
                        </Badge>
                        <Badge variant="secondary">
                          <Calendar className="w-3 h-3 mr-1" />
                          Due: {assignment.dueDate}
                        </Badge>
                        {assignment.submittedDate && (
                          <Badge variant="secondary">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Submitted: {assignment.submittedDate}
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{assignment.description}</p>
                      
                      {assignment.status === 'graded' && assignment.score && (
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-1">
                            <Progress value={assignment.score} className="h-2" />
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            {assignment.score}%
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      {assignment.status === 'pending' && (
                        <Button>
                          Start Assignment
                        </Button>
                      )}
                      {assignment.status === 'submitted' && (
                        <Button variant="outline" disabled>
                          View Submission
                        </Button>
                      )}
                      {assignment.status === 'graded' && (
                        <Button variant="outline">
                          View Feedback
                        </Button>
                      )}
                      {assignment.status === 'overdue' && (
                        <Button variant="destructive">
                          Submit Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredAssignments.length === 0 && (
              <div className="text-center py-12">
                <ClipboardCheck className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No assignments found</h3>
                <p className="text-gray-600">
                  {filterStatus === 'all' 
                    ? "You don't have any assignments yet." 
                    : `No ${filterStatus} assignments found.`}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}