import React from 'react';
import Navbar from '../../components/Navbar';
import StickyTopBar from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const PartnerDealerAcademies = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Partner & Dealer Academies</h1>
              <p className="text-xl text-gray-600 mb-8">Extend training to your ecosystem partners</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Empower Your Partner Network</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Partner Training</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Product knowledge training</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Sales enablement programs</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Certification pathways</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Brand compliance training</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ecosystem Benefits</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Improved partner performance</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Enhanced brand consistency</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Increased partner loyalty</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Better customer experience</li>
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

export default PartnerDealerAcademies;
