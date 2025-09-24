import React from 'react';
import { Navbar } from '../../components/Navbar';
import { StickyTopBar } from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About LISA</h1>
              <p className="text-xl text-gray-600 mb-8">Learn about our mission and team</p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                To revolutionize corporate learning through AI-powered, personalized experiences that drive real business results.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600">To create a world where every employee has access to personalized, effective learning that helps them grow and succeed.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Innovation in learning technology</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Customer success and satisfaction</li>
                    <li className="flex items-start"><span className="text-purple-600 mr-3">•</span>Continuous improvement and growth</li>
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

export default About;
