import React from 'react';
import Navbar from '../../components/Navbar';
import StickyTopBar from '../../components/StickyTopBar';
import { Footer } from '../../components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
              <p className="text-xl text-gray-600 mb-8">Latest insights on AI, learning, and HR tech</p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">The Future of AI in Learning</h3>
                  <p className="text-gray-600 mb-4">Exploring how artificial intelligence is transforming corporate learning and development.</p>
                  <span className="text-sm text-purple-600">Read More →</span>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices for Remote Learning</h3>
                  <p className="text-gray-600 mb-4">Essential strategies for effective remote and hybrid learning programs.</p>
                  <span className="text-sm text-purple-600">Read More →</span>
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

export default Blog;
