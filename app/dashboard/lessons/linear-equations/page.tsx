'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

export default function LinearEquationsLesson() {
  const [progress, setProgress] = useState(0);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  useEffect(() => {
    // Simulate progress as user scrolls or interacts
    const timer = setTimeout(() => {
      setProgress(25);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const updateProgress = (newProgress: number) => {
    setProgress(Math.max(progress, newProgress));
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard/lessons">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Lessons
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Linear Equations</h1>
              <Badge className="mt-1">Algebra</Badge>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Lesson Progress</span>
              <span className="text-sm text-gray-600">{progress}% completed</span>
            </div>
            <Progress value={progress} className="mb-2" />
            <p className="text-xs text-gray-500">
              Estimated time remaining: {Math.round(25 * (1 - progress / 100))} minutes
            </p>
          </CardContent>
        </Card>

        {/* Lesson Content */}
        <Card>
          <CardContent className="p-8 prose prose-lg max-w-none">
            <h2 className="text-xl font-semibold mb-4">Introduction to Linear Equations</h2>
            
            <p className="mb-4">
              A linear equation is an algebraic equation in which each term is either a constant or the product of a constant and a single variable raised to the first power. These equations represent straight lines when graphed.
            </p>
            
            <p className="mb-4">The standard form is often written as:</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center my-6">
              <span className="text-xl font-mono font-bold">ax + b = 0</span>
            </div>
            
            <p className="mb-4">Where:</p>
            
            <div className="bg-gray-50 border-l-4 border-blue-500 p-4 my-6">
              <ul className="space-y-2 mb-0">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  <strong>x</strong> is the variable we want to find.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                  <strong>a</strong> and <strong>b</strong> are known constants (numbers).
                </li>
                <li className="flex items-center">
                  <Lightbulb className="w-5 h-5 text-orange-500 mr-2" />
                  Crucially, <strong>a</strong> cannot be zero (a ≠ 0), otherwise, it wouldn't be a linear equation in x.
                </li>
              </ul>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Solving Linear Equations: The Goal</h3>
            
            <p className="mb-6">
              The main goal when solving a linear equation is to isolate the variable (like 'x') on one side of the equals sign (=) and get a number on the other side. We do this by performing the same inverse operation on both sides of the equation to maintain balance.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="text-md font-semibold mb-4 flex items-center">
                <Lightbulb className="w-5 h-5 text-orange-500 mr-2" />
                Example 1: Solving 2x + 3 = 7
              </h4>
              <p className="mb-4"><strong>Goal:</strong> Get 'x' by itself.</p>
              
              <ol className="space-y-3">
                <li className="flex justify-between items-center">
                  <div>
                    <strong>1. Identify constant term:</strong> +3. Inverse is subtraction.
                  </div>
                  <code className="bg-white px-2 py-1 rounded">2x + 3 = 7</code>
                </li>
                <li>
                  <strong>2. Subtract 3 from BOTH sides:</strong> 2x + 3 - 3 = 7 - 3
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <strong>3. Simplify:</strong> 2x = 4
                  </div>
                  <code className="bg-white px-2 py-1 rounded">2x = 4</code>
                </li>
                <li>
                  <strong>4. Identify coefficient:</strong> 2 (times x). Inverse is division.
                </li>
                <li>
                  <strong>5. Divide BOTH sides by 2:</strong> 2x ÷ 2 = 4 ÷ 2
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <strong>6. Final Answer:</strong> x is isolated.
                  </div>
                  <Badge className="bg-green-100 text-green-800">x = 2</Badge>
                </li>
              </ol>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Checking Your Solution</h3>
            
            <p className="mb-6">
              Always check your answer by substituting the value back into the original equation. If both sides are equal, your solution is correct!
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="text-md font-semibold mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Example 2: Check if x = 3 is a solution for 5x - 2 = 13
              </h4>
              
              <ol className="space-y-2">
                <li>Replace 'x' with '3': <code className="bg-white px-2 py-1 rounded">5(3) - 2</code></li>
                <li>Calculate left side: <code className="bg-white px-2 py-1 rounded">15 - 2 = 13</code></li>
                <li>Compare to right side: <code className="bg-white px-2 py-1 rounded">13 = 13</code></li>
                <li>Conclusion: <Badge className="bg-green-100 text-green-800">x = 3 is correct</Badge></li>
              </ol>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Practice Exercises</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="mb-3"><strong>Question 1:</strong> Solve for x: 3x - 5 = 10</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setShowAnswer1(!showAnswer1);
                    if (!showAnswer1) updateProgress(60);
                  }}
                >
                  {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
                </Button>
                
                {showAnswer1 && (
                  <div className="mt-4 p-4 bg-white border rounded">
                    <p className="mb-2">1. Add 5 to both sides: 3x = 15</p>
                    <p className="mb-2">2. Divide both sides by 3: x = 5</p>
                    <p className="font-bold">Final answer: x = 5</p>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="mb-3"><strong>Question 2:</strong> Solve for y: 2(y + 3) = 16</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setShowAnswer2(!showAnswer2);
                    if (!showAnswer2) updateProgress(85);
                  }}
                >
                  {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
                </Button>
                
                {showAnswer2 && (
                  <div className="mt-4 p-4 bg-white border rounded">
                    <p className="mb-2">1. Divide both sides by 2: y + 3 = 8</p>
                    <p className="mb-2">2. Subtract 3 from both sides: y = 5</p>
                    <p className="font-bold">Final answer: y = 5</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t">
          <Button variant="outline" disabled>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous Lesson
          </Button>
          
          <Button 
            onClick={() => updateProgress(100)}
            asChild
          >
            <Link href="/dashboard/lessons/linear-equations/notes">
              Next: Lesson Notes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}