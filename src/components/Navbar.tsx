import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-[40px] z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          {/* Back to Home - Mobile Only */}
          <button 
            className="hidden sm:block lg:hidden p-2 rounded-md hover:bg-muted/50 transition-colors duration-200"
            onClick={() => window.history.back()}
            aria-label="Go back"
          >
            <svg 
              className="w-5 h-5 text-muted-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
          
          {/* Logo */}
          <img 
            src="/lisa-logo.svg" 
            alt="LISA Logo" 
            className="h-8 w-auto dark:hidden" 
          />
          <img 
            src="/lisa_-_final_-_logo_-_wite__e2e8f0 (2).svg" 
            alt="LISA Logo" 
            className="h-8 w-auto hidden dark:block" 
          />
        </div>
        
        {/* Right Side - Navigation Links and Actions */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Platform Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50 flex items-center gap-1"
              >
                Platform
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/platform/lxp" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">LXP</div>
                    <div className="text-xs text-gray-500 mt-1">Personalised learning feeds, skills graph, AI coach</div>
                  </a>
                  <a href="/platform/lms" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">LMS</div>
                    <div className="text-xs text-gray-500 mt-1">Paths, assessments, certifications, multi-tenant control</div>
                  </a>
                  <a href="/platform/content-studio" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Content Studio</div>
                    <div className="text-xs text-gray-500 mt-1">Build courses, micro-videos, JIT cards. Go live in hours, not weeks</div>
                  </a>
                  <a href="/platform/on-demand-library" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">On Demand Library (500+)</div>
                    <div className="text-xs text-gray-500 mt-1">Lisa-original modules across roles & industries</div>
                  </a>
                  <a href="/platform/just-in-time" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Just-in-Time</div>
                    <div className="text-xs text-gray-500 mt-1">In-work nudges inside Slack, CRM, and email</div>
                  </a>
                  <a href="/platform/pulse" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Pulse (Analytics)</div>
                    <div className="text-xs text-gray-500 mt-1">Skills heatmaps, adoption, ROI dashboards</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50 flex items-center gap-1"
              >
                Solutions
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/solutions/faster-onboarding" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Faster Onboarding</div>
                    <div className="text-xs text-gray-500 mt-1">Get new hires productive in days, not months</div>
                  </a>
                  <a href="/solutions/upskill-reskill" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Upskill & Reskill</div>
                    <div className="text-xs text-gray-500 mt-1">Future-proof your workforce with AI-driven learning paths</div>
                  </a>
                  <a href="/solutions/frontline-enablement" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Frontline Enablement</div>
                    <div className="text-xs text-gray-500 mt-1">Train distributed teams at scale with mobile-first learning</div>
                  </a>
                  <a href="/solutions/performance-coaching" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Performance Coaching</div>
                    <div className="text-xs text-gray-500 mt-1">AI-powered coaching for continuous improvement</div>
                  </a>
                  <a href="/solutions/leadership-talent" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Leadership & Talent</div>
                    <div className="text-xs text-gray-500 mt-1">Develop next-gen leaders with personalized programs</div>
                  </a>
                  <a href="/solutions/partner-dealer-academies" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Partner & Dealer Academies</div>
                    <div className="text-xs text-gray-500 mt-1">Extend training to your ecosystem partners</div>
                  </a>
                  <a href="/solutions/compliance-made-simple" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Compliance Made Simple</div>
                    <div className="text-xs text-gray-500 mt-1">Automated compliance tracking and reporting</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Why Lisa Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50 flex items-center gap-1"
              >
                Why Lisa
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/why-lisa/ai-first-zero-legacy" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">AI-first. Zero legacy.</div>
                    <div className="text-xs text-gray-500 mt-1">Built for the AI era, not adapted from the past</div>
                  </a>
                  <a href="/why-lisa/thirty-five-years-learning-dna" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">35+ years of learning DNA.</div>
                    <div className="text-xs text-gray-500 mt-1">Deep expertise in learning science and pedagogy</div>
                  </a>
                  <a href="/why-lisa/go-live-thirty-days" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Go-live in &lt;30 days.</div>
                    <div className="text-xs text-gray-500 mt-1">Rapid deployment with minimal IT overhead</div>
                  </a>
                  <a href="/why-lisa/loved-by-ops-hr-it" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Loved by ops, HR, and IT.</div>
                    <div className="text-xs text-gray-500 mt-1">Designed for all stakeholders, not just learners</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50 flex items-center gap-1"
              >
                Resources
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/resources/blog" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Blog</div>
                    <div className="text-xs text-gray-500 mt-1">Latest insights on AI, learning, and HR tech</div>
                  </a>
                  <a href="/resources/ai-for-hr-hub" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">AI for HR Hub</div>
                    <div className="text-xs text-gray-500 mt-1">Everything you need to know about AI in HR</div>
                  </a>
                  <a href="/resources/podcasts" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Podcasts</div>
                    <div className="text-xs text-gray-500 mt-1">Conversations with industry leaders</div>
                  </a>
                  <a href="/resources/playbooks-templates" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Playbooks & Templates</div>
                    <div className="text-xs text-gray-500 mt-1">Ready-to-use resources for your L&D programs</div>
                  </a>
                  <a href="/resources/benchmarks-reports" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Benchmarks & Reports</div>
                    <div className="text-xs text-gray-500 mt-1">Industry insights and performance benchmarks</div>
                  </a>
                  <a href="/resources/buyer-guides" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Buyer Guides (LMS / LXP)</div>
                    <div className="text-xs text-gray-500 mt-1">Comprehensive guides for platform selection</div>
                  </a>
                  <a href="/resources/ebooks" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">eBooks</div>
                    <div className="text-xs text-gray-500 mt-1">In-depth guides on learning and development</div>
                  </a>
                  <a href="/resources/glossary" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Glossary</div>
                    <div className="text-xs text-gray-500 mt-1">Definitions of key terms in L&D and HR tech</div>
                  </a>
                  <a href="/resources/faqs" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">FAQs</div>
                    <div className="text-xs text-gray-500 mt-1">Frequently asked questions about LISA</div>
                  </a>
                  <a href="/resources/events-bootcamps" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Events & Bootcamps</div>
                    <div className="text-xs text-gray-500 mt-1">Join our learning events and workshops</div>
                  </a>
                </div>
              </div>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <a
                href="#"
                className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50 flex items-center gap-1"
              >
                Company
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/company/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">About</div>
                    <div className="text-xs text-gray-500 mt-1">Learn about our mission and team</div>
                  </a>
                  <a href="/company/customers" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Customers</div>
                    <div className="text-xs text-gray-500 mt-1">See who's using LISA to transform learning</div>
                  </a>
                  <a href="/company/careers" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Careers</div>
                    <div className="text-xs text-gray-500 mt-1">Join our team and help shape the future of learning</div>
                  </a>
                  <a href="/company/press-media" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Press & Media</div>
                    <div className="text-xs text-gray-500 mt-1">Latest news and media coverage</div>
                  </a>
                  <a href="/company/contact" className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200">
                    <div className="font-semibold">Contact</div>
                    <div className="text-xs text-gray-500 mt-1">Get in touch with our team</div>
                  </a>
                </div>
              </div>
            </div>

            <a
              href="/lisa-tour"
              className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50"
            >
              Lisa Tour
            </a>
            <a
              href="#pricing"
              className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#pricing');
                if (element) {
                  element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Pricing
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://calendar.app.google/4tjN6L4oY6db7QtV8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
