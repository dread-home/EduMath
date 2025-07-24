'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { ChevronRight, GraduationCap, Calculator, TrendingUp, Users, Smartphone, Gift, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  useEffect(() => {
    // Initialize scroll animations and counter animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-500" />,
      title: "Exam Excellence",
      description: "Full coverage of WAEC topics with past question practice and marking scheme guidance"
    },
    {
      icon: <Calculator className="w-12 h-12 text-blue-500" />,
      title: "Local Context",
      description: "Real Ghanaian examples using GH₵ currency and local scenarios you recognize"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      title: "Progress Tracking",
      description: "Personal dashboard to monitor your improvement and weak areas"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Expert Tutors",
      description: "Learn from certified Ghanaian maths educators 24/7"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-500" />,
      title: "Mobile Access",
      description: "Learn anywhere - perfect for studying on your smartphone"
    },
    {
      icon: <Gift className="w-12 h-12 text-blue-500" />,
      title: "Completely Free",
      description: "Quality education for all - no fees, no subscriptions"
    }
  ];

  const testimonials = [
    {
      quote: "I went from failing maths to scoring A1 in WASSCE! The video lessons made everything click.",
      name: "Kofi Mensah",
      location: "WASSCE Graduate, Kumasi"
    },
    {
      quote: "The Ghanaian examples helped me understand faster. I actually enjoy maths now!",
      name: "Ama Serwaa",
      location: "JHS Student, Accra"
    },
    {
      quote: "With just my phone, I improved my BECE score by 2 grades. Life-changing!",
      name: "Esi Coleman",
      location: "SHS Student, Tamale"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students Empowered" },
    { number: "94%", label: "Grade Improvement" },
    { number: "24/7", label: "Learning Access" },
    { number: "100%", label: "Free Forever" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Ghana Flag Bar */}
      <div className="h-2 bg-gradient-to-r from-green-600 via-yellow-400 to-red-600"></div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">EduMath GH</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors">
                  Home
                </Link>
                <Link href="/courses" className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors">
                  Courses
                </Link>
                <Link href="/resources" className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors">
                  Resources
                </Link>
                <Link href="/students" className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors">
                  For Students
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-500 px-3 py-2 transition-colors">
                  About Us
                </Link>
                <Button asChild>
                  <Link href="/signup">Start Learning</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-on-scroll">
            Master WAEC Maths for Free
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-on-scroll">
            Personalized learning platform designed for Ghanaian students to ace BECE & WASSCE
          </p>
          
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <span className="text-sm font-medium">WAEC Certified</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <span className="text-sm font-medium">GES Approved</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap animate-on-scroll">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/signup">Start Learning Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16 animate-on-scroll">
            Why Students Love EduMath
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16 animate-on-scroll">
            Student Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-on-scroll">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
                  <p className="italic mb-6 text-gray-700">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-blue-600">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">
            Our Student Impact
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-on-scroll">
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 animate-on-scroll">
            Ready to Ace Your Maths Exams?
          </h2>
          <p className="text-xl mb-8 text-gray-700 animate-on-scroll">
            Join thousands of Ghanaian students learning for free
          </p>
          <Button size="lg" className="animate-on-scroll" asChild>
            <Link href="/signup">Start Learning Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="ml-2 text-lg font-bold">EduMath GH</span>
              </div>
              <p className="text-gray-400 mb-4">
                WAEC-aligned maths tutoring platform designed specifically for Ghanaian schools and students.
              </p>
            </div>
            
            <div className="animate-on-scroll">
              <h5 className="font-semibold text-orange-400 mb-4">PROGRAMMES</h5>
              <ul className="space-y-2">
                <li><Link href="/courses" className="text-gray-400 hover:text-orange-400 transition-colors">Primary School</Link></li>
                <li><Link href="/courses" className="text-gray-400 hover:text-orange-400 transition-colors">Junior High (BECE)</Link></li>
                <li><Link href="/courses" className="text-gray-400 hover:text-orange-400 transition-colors">Senior High (WASSCE)</Link></li>
                <li><Link href="/courses" className="text-gray-400 hover:text-orange-400 transition-colors">University Entrance</Link></li>
              </ul>
            </div>
            
            <div className="animate-on-scroll">
              <h5 className="font-semibold text-orange-400 mb-4">QUICK LINKS</h5>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">Our Tutors</Link></li>
                <li><Link href="/resources" className="text-gray-400 hover:text-orange-400 transition-colors">Free Resources</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">Success Stories</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="animate-on-scroll">
              <h5 className="font-semibold text-orange-400 mb-4">CONTACT</h5>
              <address className="text-gray-400 space-y-2 not-italic">
                <p>📍 Accra, Ghana</p>
                <p>📞 <Link href="tel:+233241234567" className="hover:text-orange-400 transition-colors">+233 24 123 4567</Link></p>
                <p>✉️ <Link href="mailto:info@edumathgh.com" className="hover:text-orange-400 transition-colors">info@edumathgh.com</Link></p>
              </address>
            </div>
          </div>
          
          <hr className="my-8 border-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 EduMath GH. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}