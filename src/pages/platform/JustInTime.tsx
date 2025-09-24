import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const JustInTime = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Just-in-Time Learning
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                In-work nudges inside Slack, CRM, and email
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
                Learning That Meets You Where You Work
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Integration Points</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Slack notifications and learning bots
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      CRM workflow integration
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Email-based learning reminders
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Mobile app push notifications
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Delivery</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Context-aware learning suggestions
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Micro-learning content delivery
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Performance-based recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Seamless workflow integration
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

export default JustInTime;
