import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const Pulse = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Pulse (Analytics)
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Skills heatmaps, adoption, ROI dashboards
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
                Data-Driven Learning Insights
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Skills heatmaps and gap analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Learning adoption and engagement metrics
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      ROI tracking and business impact
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Predictive analytics and recommendations
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Dashboard Views</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Executive summary dashboards
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Manager and team performance views
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Individual learner progress tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Custom reporting and data export
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

export default Pulse;
