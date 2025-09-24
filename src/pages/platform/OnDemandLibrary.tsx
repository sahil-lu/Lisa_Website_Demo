import React from 'react';
import Navbar from '../../components/Navbar';
import StickyTopBar from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const OnDemandLibrary = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                On Demand Library (500+)
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Lisa-original modules across roles & industries
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
                Comprehensive Learning Library for Every Role
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Categories</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Leadership and Management
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Technical Skills and Certifications
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Soft Skills and Communication
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Industry-Specific Training
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Expert-curated content library
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Regular updates and new releases
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Multi-format learning materials
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-3">•</span>
                      Progress tracking and completion certificates
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

export default OnDemandLibrary;
