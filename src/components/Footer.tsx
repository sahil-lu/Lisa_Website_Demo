import React from "react";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t bg-neutral-50 dark:bg-neutral-950">
      <div className="container mx-auto py-12">
        {/* Top Section with Logo and About */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/logos/lisa new logo.svg" 
                alt="LISA AI Logo" 
                className="h-8 w-auto mb-4" 
              />
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-black">About LISA AI</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                LISA is an AI-powered learning ecosystem helping enterprises and institutions create personalized, adaptive learning at scale.
              </p>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-3 text-black">Platform</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/platform/lxp" className="hover:text-black">LXP</a></li>
            <li><a href="/platform/lms" className="hover:text-black">LMS</a></li>
            <li><a href="/platform/content-studio" className="hover:text-black">Content Studio</a></li>
            <li><a href="/content-library" className="hover:text-black">On Demand Library (500+)</a></li>
            <li><a href="/platform/just-in-time" className="hover:text-black">Just-in-Time</a></li>
            <li><a href="/platform/pulse" className="hover:text-black">Pulse (Analytics)</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Solutions</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/solutions/faster-onboarding" className="hover:text-black">Faster Onboarding</a></li>
            <li><a href="/solutions/upskill-reskill" className="hover:text-black">Upskill & Reskill</a></li>
            <li><a href="/solutions/frontline-enablement" className="hover:text-black">Frontline Enablement</a></li>
            <li><a href="/solutions/performance-coaching" className="hover:text-black">Performance Coaching</a></li>
            <li><a href="/solutions/leadership-talent" className="hover:text-black">Leadership & Talent</a></li>
            <li><a href="/solutions/partner-dealer-academies" className="hover:text-black">Partner & Dealer Academies</a></li>
            <li><a href="/solutions/compliance-made-simple" className="hover:text-black">Compliance Made Simple</a></li>
          </ul>
        </div>

        {/* Why LISA AI */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Why LISA AI</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/why-lisa/ai-first-zero-legacy" className="hover:text-black">AI-first. Zero legacy.</a></li>
            <li><a href="/why-lisa/thirty-five-years-learning-dna" className="hover:text-black">35+ years of learning DNA.</a></li>
            <li><a href="/why-lisa/go-live-thirty-days" className="hover:text-black">Go-live in &lt;30 days.</a></li>
            <li><a href="/why-lisa/loved-by-ops-hr-it" className="hover:text-black">Loved by ops, HR, and IT.</a></li>
            <li><a href="/resources/lisa-vs-disprz" className="hover:text-black">LISA vs Disprz</a></li>
            <li><a href="/resources/lisa-vs-paradiso" className="hover:text-black">LISA vs Paradiso</a></li>
            <li><a href="/resources/lisa-vs-cornerstone" className="hover:text-black">LISA vs Cornerstone</a></li>
            <li><a href="/resources/lisa-vs-others" className="hover:text-black">LISA vs Others</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/resources/blog" className="hover:text-black">Blog</a></li>
            <li><a href="/resources/ai-for-hr-hub" className="hover:text-black">AI for HR Hub</a></li>
            <li><a href="/resources/podcasts" className="hover:text-black">Podcasts</a></li>
            <li><a href="/resources/playbooks-templates" className="hover:text-black">Playbooks & Templates</a></li>
            <li><a href="/resources/benchmarks-reports" className="hover:text-black">Benchmarks & Reports</a></li>
            <li><a href="/resources/buyer-guides" className="hover:text-black">Buyer Guides (LMS / LXP)</a></li>
            <li><a href="/resources/ebooks" className="hover:text-black">eBooks</a></li>
            <li><a href="/resources/glossary" className="hover:text-black">Glossary</a></li>
            <li><a href="/resources/faqs" className="hover:text-black">FAQs</a></li>
            <li><a href="/resources/events-bootcamps" className="hover:text-black">Events & Bootcamps</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3 text-black">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/company/about" className="hover:text-black">About</a></li>
            <li><a href="/company/customers" className="hover:text-black">Customers</a></li>
            <li><a href="/company/careers" className="hover:text-black">Careers</a></li>
            <li><a href="/company/press-media" className="hover:text-black">Press & Media</a></li>
            <li><a href="/company/contact" className="hover:text-black">Contact</a></li>
          </ul>
          <div className="mt-6">
            <h4 className="font-semibold mb-3 text-black">Other</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/lisa-tour" className="hover:text-black">LISA AI Tour</a></li>
              <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
            </ul>
          </div>
          <div className="flex gap-3 mt-4 text-gray-600">
            <a href="#" aria-label="Facebook" className="hover:text-black"><Facebook size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-black"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-black"><Twitter size={18} /></a>
            <a href="#" aria-label="Email" className="hover:text-black"><Mail size={18} /></a>
          </div>
        </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600">
            <p>© 2025 LISA AI. All rights reserved.</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" className="hover:text-black">Privacy Policy</a>
              <a href="#" className="hover:text-black">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
export default Footer;
