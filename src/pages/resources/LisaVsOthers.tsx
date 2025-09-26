import React from 'react';
import StickyTopBar from '../../components/StickyTopBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, Shield, Zap, BarChart3, Smartphone, Globe, Award, MessageSquare, Brain, Target, TrendingUp } from 'lucide-react';

const LisaVsOthers = () => {
  return (
    <div className="min-h-screen bg-white">
      <StickyTopBar />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Logo Battle Section */}
              <div className="flex flex-col items-center mb-12">
                {/* Lisa Logo - Above VS */}
                <div className="mb-8">
                  <img 
                    src="/logos/lisa new logo.svg" 
                    alt="LISA AI Logo" 
                    className="h-16 md:h-20 lg:h-24 w-auto"
                  />
                </div>
                
                {/* VS Text - Center */}
                <div className="mb-8">
                  <div className="bg-white rounded-full px-6 py-4 shadow-lg border-2 border-purple-200">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-600">VS</span>
                  </div>
                </div>
                
                {/* Competitor Logos - Below VS */}
                <div className="w-full">
                  <div className="relative overflow-hidden">
                    <div className="flex animate-marquee-slow">
                      {/* First set of logos */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/360 learning.png" alt="360Learning" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/absorb.png" alt="Absorb" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/couseplay.png" alt="Courseplay" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/degreed.png" alt="Degreed" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/doce.png" alt="Docebo" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/learnupon.png" alt="LearnUpon" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/litmos.png" alt="Litmos" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/moodle.png" alt="Moodle" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/playablo.png" alt="PlayAblo" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/sap.png" alt="SAP" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/skilljar.png" alt="Skilljar" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/talentlms.png" alt="TalentLMS" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/upside lms.png" alt="UpsideLMS" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/workramp.png" alt="WorkRamp" className="h-32 w-auto object-contain" />
                      </div>
                      
                      {/* Duplicate set for seamless loop */}
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/360 learning.png" alt="360Learning" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/absorb.png" alt="Absorb" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/couseplay.png" alt="Courseplay" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/degreed.png" alt="Degreed" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/doce.png" alt="Docebo" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/learnupon.png" alt="LearnUpon" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/litmos.png" alt="Litmos" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/moodle.png" alt="Moodle" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/playablo.png" alt="PlayAblo" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/sap.png" alt="SAP" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/skilljar.png" alt="Skilljar" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/talentlms.png" alt="TalentLMS" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/upside lms.png" alt="UpsideLMS" className="h-32 w-auto object-contain" />
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 flex items-center justify-center mx-4 flex-shrink-0">
                        <img src="/logos/workramp.png" alt="WorkRamp" className="h-32 w-auto object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                    The fast, AI-first choice for L&D
                  </h1>
                  <p className="text-xl text-gray-700 mb-8">
                    Compare LISA AI with leading LMS platforms. See why teams choose LISA AI for faster deployment, 
                    better adoption, and measurable outcomes.
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* Platform Comparisons Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Compare LISA AI with Leading Platforms
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Docebo */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/doce.png" alt="Docebo" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Established cloud LMS; tends to run as a larger admin/config project with quote-based pricing.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> AI-first, ready on day one, clear pricing, and complete feature set for adoption and performance.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* SuccessFactors Learning */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/sap.png" alt="SuccessFactors" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Enterprise LMS within a larger HCM; heavier governance and IT projects.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> AI-first, fast rollout, transparent pricing, full feature stack for usage & performance.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Enterprise project</span>
                  </div>
                </div>

                {/* Litmos */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/litmos.png" alt="Litmos" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Traditional cloud LMS; bundle-based pricing; admin-heavy setup.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> AI-first, day-one library, nudges, simulators, BI.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* Absorb */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/absorb.png" alt="Absorb" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Full-featured LMS with modular add-ons; quote-based.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Transparent pricing, ready content, JIT, AI practice.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* LearnUpon */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/learnupon.png" alt="LearnUpon" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Modern LMS; configuration-led; pricing by tiers.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Day-one value with library, JIT, nudges, simulators, BI.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* TalentLMS */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/talentlms.png" alt="TalentLMS" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Quick-start LMS; scales via admin work and add-ons.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Adds AI practice, JIT, nudges, BI, and ready library for real outcomes.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Quick start; config scaling</span>
                  </div>
                </div>

                {/* 360Learning */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/360 learning.png" alt="360Learning" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Collaborative learning platform; admin/config effort; pricing by quote.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Outcome-first with JIT, AI practice, nudges, BI, and included library.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* Degreed */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/degreed.png" alt="Degreed" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Skills & learning experience layer; typically complex rollouts.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Deploys in days with ready content, JIT, AI practice, nudges, BI.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Enterprise program</span>
                  </div>
                </div>

                {/* Skilljar */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/skilljar.png" alt="Skilljar" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Strong for customer education; employee L&D needs more admin/config.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Turnkey employee L&D with library, JIT, AI practice, nudges, BI.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* WorkRamp */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/workramp.png" alt="WorkRamp" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Enablement-oriented platform; pricing by quote; admin-led programs.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Ready library, JIT, AI practice, nudges, BI for measurable lift.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* Moodle Workplace */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/moodle.png" alt="Moodle" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Open-source-rooted, partner-implemented; maintenance and customization overhead.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Hosted, fast to deploy, ready content, JIT, AI practice, nudges, BI.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Partner project</span>
                  </div>
                </div>

                {/* UpsideLMS */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/upside lms.png" alt="UpsideLMS" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">Traditional LMS with module packs; quote-based tiers.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Clear pricing, ready content, JIT, AI practice, nudges, BI.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* Courseplay */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/couseplay.png" alt="Courseplay" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">LXP/EX with pricing nuances; admin-led set-up.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Outcome-first—day-one library, JIT, AI practice, nudges, BI, predictable pricing.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Project-style</span>
                  </div>
                </div>

                {/* PlayAblo */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-center mb-6">
                    <img src="/logos/lisa new logo.svg" alt="LISA AI" className="h-8 w-auto" />
                    <span className="text-gray-400 mx-2 text-lg font-semibold">vs</span>
                    <img src="/logos/playablo.png" alt="PlayAblo" className="h-20 w-auto" />
                  </div>
                  <p className="text-gray-700 mb-4">SMB-friendly LMS tiers; features vary by band.</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>LISA AI advantage:</strong> Enterprise-grade outcomes with JIT, AI practice, nudges, BI, and a day-one library.
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-gray-500">Go-live: ~10 days vs Quick start; config scaling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Everything you get with LISA AI */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Everything you get with LISA AI
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Core Platform */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Core platform</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>LMS on Web + Dedicated Mobile Apps</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Fully White-Label</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>SCORM / xAPI compliant</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>End-to-end security</span>
                    </li>
                  </ul>
                </div>

                {/* Content & Learning Experience */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Learning experience</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>500+ course library (+ plug in Go1/Udemy Business)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Micro-learning & byte-size content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Just-in-Time learning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pre/in/post assessments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Learning paths & skill recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>WhatsApp + in-app nudges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Leaderboards & gamification with coupon rewards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Knowledge hubs & AI chatbots</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Detailed reports + Power BI/Tableau</span>
                    </li>
                  </ul>
                </div>

                {/* Practice & Creation */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Practice & creation</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI voice viva / AI video viva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content Studio (Nexi 1.0/2.0/3.0)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Rapid course video creation</span>
                    </li>
                  </ul>
                </div>

                {/* IT & Success */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">IT & success</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>SSO/HRMS with leading systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>End-to-end integrations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why teams switch */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Why teams switch to LISA AI
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Faster go-live</h3>
                  <p className="text-gray-700">Launch your first cohort in ~10 business days with content ready on day one.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Higher usage</h3>
                  <p className="text-gray-700">Micro-learning + WhatsApp nudges + AI practice = more activations and completions.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lower admin overhead</h3>
                  <p className="text-gray-700">Clear paths, ready content, and manager-friendly reporting out of the box.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent pricing</h3>
                  <p className="text-gray-700">No surprises; scale seats and add capabilities as you grow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Feature comparison (snapshot)
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Capability</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-purple-600">LISA AI</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Others</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Go-live speed</td>
                        <td className="px-6 py-4 text-sm text-green-600">~10 business days</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Project-style implementation</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Included content</td>
                        <td className="px-6 py-4 text-sm text-green-600">500+ courses included</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Add via catalogs/marketplace</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Micro / JIT</td>
                        <td className="px-6 py-4 text-sm text-green-600">Built-in</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Admin configuration required</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Practice</td>
                        <td className="px-6 py-4 text-sm text-green-600">AI Voice/Video Viva + simulators</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Depends on setup/add-ons</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Engagement</td>
                        <td className="px-6 py-4 text-sm text-green-600">WhatsApp nudges + rewards</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Email/app campaigns</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Reporting</td>
                        <td className="px-6 py-4 text-sm text-green-600">Manager dashboards + BI (Power BI/Tableau)</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Reporting; depth varies by setup</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Branding</td>
                        <td className="px-6 py-4 text-sm text-green-600">Full white-label (web + apps)</td>
                        <td className="px-6 py-4 text-sm text-gray-600">White-label options</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Integrations</td>
                        <td className="px-6 py-4 text-sm text-green-600">Leading SSO/HRMS; end-to-end</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Connector ecosystem</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Security</td>
                        <td className="px-6 py-4 text-sm text-green-600">End-to-end</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Enterprise controls</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                Pricing (simple & transparent)
              </h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-4">₹200 per user/month</div>
                <p className="text-lg text-gray-700 mb-6">(100–200 seats; annual). More seats, better rates.</p>
                <p className="text-gray-600">Add-ons: custom content (Nexi Studio) & advanced analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rollout Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Rollout (10 business days)
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Connect & Brand</h3>
                  </div>
                  <p className="text-gray-700">Connect SSO/HRMS & brand apps</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Map & Load</h3>
                  </div>
                  <p className="text-gray-700">Map roles/skills & load cohorts</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Go Live</h3>
                  </div>
                  <p className="text-gray-700">Go live; nudges + dashboards + viva</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                Outcomes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">60%+</div>
                  <p className="text-gray-700">month-1 activation</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2×</div>
                  <p className="text-gray-700">completion lift</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">30–45</div>
                  <p className="text-gray-700">days for manager dashboard adoption</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                See LISA AI in action
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book a 20-minute walkthrough and get the Feature Matrix (PDF)
              </p>
              <Button 
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LisaVsOthers;