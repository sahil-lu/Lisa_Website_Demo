import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const LeadershipTalent = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Leadership & Talent</h1>
              <p className="text-xl text-gray-600 mb-8">Develop next-gen leaders with personalized programs</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Build Tomorrow's Leaders Today</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Development</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Executive coaching programs</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Leadership assessment tools</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Succession planning support</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Mentorship matching</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Talent Management</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>High-potential identification</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Career development paths</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Talent pipeline analytics</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Retention strategies</li>
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

export default LeadershipTalent;
