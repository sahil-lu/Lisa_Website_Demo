import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const FrontlineEnablement = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Frontline Enablement</h1>
              <p className="text-xl text-gray-600 mb-8">Train distributed teams at scale with mobile-first learning</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">Book a Demo</button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Empower Your Frontline Teams</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile-First Learning</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Offline learning capabilities</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Micro-learning modules</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Push notifications and reminders</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Multi-language support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Training</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Centralized content management</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Role-based learning paths</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Real-time progress tracking</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Compliance and certification</li>
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

export default FrontlineEnablement;
