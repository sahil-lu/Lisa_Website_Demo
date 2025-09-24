import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const ContentStudio = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Content Studio
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build courses, micro-videos, JIT cards. Go live in hours, not weeks
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
                  Book a Demo
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Create Engaging Content at Lightning Speed
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Creation Tools</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      AI-powered course authoring
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Micro-video creation and editing
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Just-in-time learning cards
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Interactive multimedia content
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Deployment</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Template library for quick starts
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      One-click publishing and distribution
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Real-time collaboration features
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Version control and content management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContentStudio;
