import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const LovedByOpsHRIT = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Loved by ops, HR, and IT.</h1>
              <p className="text-xl text-gray-600 mb-8">Designed for all stakeholders, not just learners</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built for Every Stakeholder</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Operations Teams</h3>
                  <ul className="space-y-3 text-gray-600 text-left">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Streamlined workflows</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Automated processes</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Performance insights</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">HR Teams</h3>
                  <ul className="space-y-3 text-gray-600 text-left">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Employee development</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Compliance tracking</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Talent analytics</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">IT Teams</h3>
                  <ul className="space-y-3 text-gray-600 text-left">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Easy integration</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Minimal maintenance</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Security compliance</li>
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

export default LovedByOpsHRIT;
