import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Lightbulb, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-slow">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Connect, Learn,{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Share
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
            Join the ultimate platform for college students to share notes, connect with seniors, 
            and showcase amazing projects. Build your academic network and accelerate your learning journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Link
              to="/signup"
              className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Get Started Free
              <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/login"
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all duration-200"
            >
              Sign In
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Share Notes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload and access high-quality study materials from students across all years and majors.
              </p>
            </div>

            <div className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Connect with Seniors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Network with experienced students, get mentorship, and learn from their journey.
              </p>
            </div>

            <div className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Showcase Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Display your amazing projects, get feedback, and inspire others with your creativity.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-2 border-white dark:border-gray-800"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-300">1000+ Students</span>
            </div>
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;