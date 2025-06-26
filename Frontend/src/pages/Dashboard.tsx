import React from 'react';
import { BookOpen, Users, FileText, TrendingUp, Star, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Notes Uploaded', value: '12', icon: FileText, color: 'blue' },
    { label: 'Downloads', value: '234', icon: TrendingUp, color: 'green' },
    { label: 'Connections', value: '18', icon: Users, color: 'purple' },
    { label: 'Study Hours', value: '45', icon: Clock, color: 'orange' },
  ];

  const recentNotes = [
    { title: 'Data Structures & Algorithms', subject: 'Computer Science', downloads: 23, date: '2 days ago' },
    { title: 'Calculus II Notes', subject: 'Mathematics', downloads: 45, date: '3 days ago' },
    { title: 'Physics Formulas Cheat Sheet', subject: 'Physics', downloads: 67, date: '1 week ago' },
  ];

  const topSeniors = [
    { name: 'Sarah Johnson', major: 'Computer Science', year: '4th Year', rating: 4.9 },
    { name: 'Michael Chen', major: 'Engineering', year: 'Graduate', rating: 4.8 },
    { name: 'Emily Rodriguez', major: 'Business', year: '4th Year', rating: 4.7 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
          <p className="text-gray-600 dark:text-gray-300">Here's what's happening with your studies today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Notes */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-primary-600" />
                Recent Notes
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentNotes.map((note, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{note.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{note.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{note.downloads} downloads</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{note.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Seniors */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-secondary-600" />
                Top Seniors
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {topSeniors.map((senior, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{senior.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{senior.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{senior.major} • {senior.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{senior.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-white/30 transition-colors">
              <BookOpen className="h-6 w-6 mb-2" />
              <h3 className="font-medium">Upload Notes</h3>
              <p className="text-sm opacity-90">Share your study materials</p>
            </button>
            <button className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-white/30 transition-colors">
              <Users className="h-6 w-6 mb-2" />
              <h3 className="font-medium">Find Seniors</h3>
              <p className="text-sm opacity-90">Connect with mentors</p>
            </button>
            <button className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-left hover:bg-white/30 transition-colors">
              <FileText className="h-6 w-6 mb-2" />
              <h3 className="font-medium">Browse Notes</h3>
              <p className="text-sm opacity-90">Discover study resources</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;