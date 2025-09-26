import React from 'react';
import StickyTopBar from '../../components/StickyTopBar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, Shield, Zap, BarChart3, Smartphone, Globe, Award, MessageSquare, Brain, Target, TrendingUp } from 'lucide-react';

const LisaVsDisprz = () => {
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
              <div className="flex items-center justify-between mb-12">
                {/* LISA AI Logo - Left Side */}
                <div className="flex-1 flex justify-center">
                  <img 
                    src="/logos/lisa new logo.svg" 
                    alt="LISA AI Logo" 
                    className="h-16 md:h-20 lg:h-24 w-auto"
                  />
                </div>
                
                {/* VS Text - Center */}
                <div className="flex-shrink-0 mx-8">
                  <div className="bg-white rounded-full px-6 py-4 shadow-lg border-2 border-purple-200">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-purple-600">VS</span>
                  </div>
                </div>
                
                {/* Disprz Logo - Right Side */}
                <div className="flex-1 flex justify-center">
                  <img 
                    src="/logos/disprz.png" 
                    alt="Disprz Logo" 
                    className="h-40 md:h-48 lg:h-56 w-auto"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  The fast, AI-first choice for L&D
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Looking for a modern platform that's easy to launch, easy to use, and built for outcomes? 
                  LISA AI ships value fast—with transparent pricing and everything you need in one place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Disprz (at a glance)</h3>
                  <p className="text-gray-700">Skills-focused platform that typically runs as a larger admin project with quote-based pricing.</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-8 border-2 border-purple-200">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">LISA AI (the better fit for most teams)</h3>
                  <p className="text-purple-800">AI-first, ready on day one, clear pricing, and a complete feature set that drives real adoption and performance.</p>
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
                  </ul>
                </div>

                {/* Content & Learning Experience */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Brain className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Content & learning experience</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>500+ Course Library Included</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Micro-Learning & Byte-Size Content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Just-in-Time Learning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Learning Journeys & Skill Recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Pre / In / Post-Learning Assessments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Leaderboard & Gamification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Knowledge Hubs & AI Chatbots</span>
                    </li>
                  </ul>
                </div>

                {/* Practice that changes performance */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Practice that changes performance</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI Voice Viva / AI Video Viva</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content Studio (Nexi Suite)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nexi 1.0 – Stock-video course creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nexi 2.0 – Turn slide decks into video courses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Nexi 3.0 – Advanced video models</span>
                    </li>
                  </ul>
                </div>

                {/* Adoption & Analytics */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Adoption & analytics</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Smart Nudges – WhatsApp + in-app notifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Manager Dashboards & Detailed Reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>BI-Ready – Power BI / Tableau support</span>
                    </li>
                  </ul>
                </div>

                {/* IT, Security & Integrations */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">IT, security & integrations</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Plug-and-Play SSO/HRMS</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>End-to-End Security</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integration Possible End-to-End</span>
                    </li>
                  </ul>
                </div>

                {/* Success that sticks */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Success that sticks</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dedicated Support</span>
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
                Why teams switch from Disprz to Lisa
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Faster time-to-value</h3>
                  <p className="text-gray-700">Launch your first cohort in ~10 business days with content ready on day one.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Higher adoption</h3>
                  <p className="text-gray-700">Micro-learning + WhatsApp nudges + AI practice = more activations and completions.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Less admin overhead</h3>
                  <p className="text-gray-700">Clear paths, ready content, and manager-friendly reporting out of the box.</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Predictable pricing</h3>
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
                        <th className="px-6 py-4 text-left text-sm font-semibold text-purple-600">Lisa</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Disprz</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Go-live speed</td>
                        <td className="px-6 py-4 text-sm text-green-600">~10 business days for a first cohort</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Project-style implementation</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Included content</td>
                        <td className="px-6 py-4 text-sm text-green-600">500+ courses included</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Add via catalogs/marketplaces</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Micro/Just-in-Time</td>
                        <td className="px-6 py-4 text-sm text-green-600">Built-in micro & JIT</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Admin configuration required</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Practice</td>
                        <td className="px-6 py-4 text-sm text-green-600">AI Voice & Video Viva + Simulators</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Depends on setup/add-ons</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Engagement</td>
                        <td className="px-6 py-4 text-sm text-green-600">WhatsApp nudges + leaderboards with rewards</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Notifications, gamification</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Reporting</td>
                        <td className="px-6 py-4 text-sm text-green-600">Manager dashboards + BI (Power BI/Tableau)</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Reporting available; custom cuts require setup</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Standards</td>
                        <td className="px-6 py-4 text-sm text-gray-600">SCORM / xAPI</td>
                        <td className="px-6 py-4 text-sm text-gray-600">SCORM / xAPI</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Branding</td>
                        <td className="px-6 py-4 text-sm text-green-600">Full white-label (web + apps)</td>
                        <td className="px-6 py-4 text-sm text-gray-600">White-label options</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Integrations</td>
                        <td className="px-6 py-4 text-sm text-green-600">Leading SSO/HRMS + end-to-end integrations</td>
                        <td className="px-6 py-4 text-sm text-gray-600">SSO/HR connectors; admin-led projects</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Security</td>
                        <td className="px-6 py-4 text-sm text-green-600">End-to-end (SSO, RBAC, encryption, audit)</td>
                        <td className="px-6 py-4 text-sm text-gray-600">Enterprise controls</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-purple-50 rounded-2xl border border-purple-200">
                <p className="text-lg font-semibold text-purple-900 text-center">
                  Bottom line: With Lisa you start strong on day one—library, JIT, AI practice, nudges, analytics—without wrestling a heavy rollout.
                </p>
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
                <p className="text-gray-600">Add-ons: custom content packages (via Nexi Studio) and advanced analytics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rollout Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                What rollout looks like
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Day 0–2</h3>
                  </div>
                  <p className="text-gray-700">Connect SSO/HRMS, brand the web + apps, enable reporting connectors.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Day 3–5</h3>
                  </div>
                  <p className="text-gray-700">Map roles/skills, load cohorts, switch on nudges, pick starter learning paths.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Day 6–10</h3>
                  </div>
                  <p className="text-gray-700">Go live with your first cohort; managers get dashboards; AI viva/simulators enabled where relevant.</p>
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
                Outcomes you can expect with Lisa
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">60%+</div>
                  <p className="text-gray-700">first-month activation on typical pilots</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2×</div>
                  <p className="text-gray-700">completion lift vs baseline programs</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">30–45</div>
                  <p className="text-gray-700">days for manager dashboard adoption</p>
                </div>
              </div>
              
              <p className="text-center text-gray-600 mt-8 text-sm">
                (Actual results vary by cohort size, communications, and incentives.)
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 text-center">
                FAQs
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Is Lisa an LMS or an LXP?</h3>
                  <p className="text-gray-700">Both. LMS backbone for compliance and tracking, LXP-style JIT and AI practice for performance.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Can we bring our own content?</h3>
                  <p className="text-gray-700">Yes. Upload SCORM/xAPI packages and connect partner libraries (e.g., Go1, Udemy Business).</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Do you support deep analytics?</h3>
                  <p className="text-gray-700">Yes—exportable reports plus Power BI/Tableau support.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How hard is integration?</h3>
                  <p className="text-gray-700">Plug-and-play with leading SSO/HRMS; additional integrations supported end-to-end.</p>
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
                See Lisa in action
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Book a 20-minute walkthrough and get a side-by-side Feature Matrix (PDF) tailored to your use case.
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

        {/* Disclaimer */}
        <section className="py-8 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-600">
                Disprz is a registered trademark of its respective owner. This page is for comparative purposes to help buyers evaluate learning platforms.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LisaVsDisprz;
