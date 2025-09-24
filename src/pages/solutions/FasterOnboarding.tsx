import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const FasterOnboarding = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Faster Onboarding
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get new hires productive in days, not months
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
                Accelerate New Hire Success
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Onboarding Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Pre-boarding learning paths
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Interactive company culture modules
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Role-specific skill assessments
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Buddy system and mentorship matching
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Success Metrics</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Reduced time to productivity
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Higher new hire retention rates
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Improved employee satisfaction
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Faster integration with teams
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

export default FasterOnboarding;
