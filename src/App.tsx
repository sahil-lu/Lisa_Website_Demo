import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ContentLibrary from "./pages/ContentLibrary";
import LisaTour from "./pages/LisaTour";
import NotFound from "./pages/NotFound";

// Platform pages (placeholder components for now)
const LXP = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">LXP Page - Coming Soon</h1></div>;
const LMS = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">LMS Page - Coming Soon</h1></div>;
const ContentStudio = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Content Studio Page - Coming Soon</h1></div>;
const OnDemandLibrary = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">On Demand Library Page - Coming Soon</h1></div>;
const JustInTime = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Just-in-Time Page - Coming Soon</h1></div>;
const Pulse = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Pulse Analytics Page - Coming Soon</h1></div>;

// Solutions pages (placeholder components for now)
const FasterOnboarding = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Faster Onboarding Page - Coming Soon</h1></div>;
const UpskillReskill = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Upskill & Reskill Page - Coming Soon</h1></div>;
const FrontlineEnablement = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Frontline Enablement Page - Coming Soon</h1></div>;
const PerformanceCoaching = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Performance Coaching Page - Coming Soon</h1></div>;
const LeadershipTalent = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Leadership & Talent Page - Coming Soon</h1></div>;
const PartnerDealerAcademies = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Partner & Dealer Academies Page - Coming Soon</h1></div>;
const ComplianceMadeSimple = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Compliance Made Simple Page - Coming Soon</h1></div>;

// Why Lisa pages (placeholder components for now)
const AIFirstZeroLegacy = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">AI-first. Zero legacy. Page - Coming Soon</h1></div>;
const ThirtyFiveYearsLearningDNA = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">35+ years of learning DNA. Page - Coming Soon</h1></div>;
const GoLiveThirtyDays = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Go-live in &lt;30 days. Page - Coming Soon</h1></div>;
const LovedByOpsHRIT = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Loved by ops, HR, and IT. Page - Coming Soon</h1></div>;

// Resources pages (placeholder components for now)
const Blog = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Blog Page - Coming Soon</h1></div>;
const AIForHRHub = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">AI for HR Hub Page - Coming Soon</h1></div>;
const Podcasts = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Podcasts Page - Coming Soon</h1></div>;
const PlaybooksTemplates = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Playbooks & Templates Page - Coming Soon</h1></div>;
const BenchmarksReports = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Benchmarks & Reports Page - Coming Soon</h1></div>;
const BuyerGuides = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Buyer Guides Page - Coming Soon</h1></div>;
const EBooks = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">eBooks Page - Coming Soon</h1></div>;
const Glossary = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Glossary Page - Coming Soon</h1></div>;
const FAQs = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">FAQs Page - Coming Soon</h1></div>;
const EventsBootcamps = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Events & Bootcamps Page - Coming Soon</h1></div>;

// Company pages (placeholder components for now)
const About = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">About Page - Coming Soon</h1></div>;
const Customers = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Customers Page - Coming Soon</h1></div>;
const Careers = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Careers Page - Coming Soon</h1></div>;
const PressMedia = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Press & Media Page - Coming Soon</h1></div>;
const Contact = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold">Contact Page - Coming Soon</h1></div>;


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/content-library" element={<ContentLibrary />} />
            <Route path="/lisa-tour" element={<LisaTour />} />
            
            {/* Platform Routes */}
            <Route path="/platform/lxp" element={<LXP />} />
            <Route path="/platform/lms" element={<LMS />} />
            <Route path="/platform/content-studio" element={<ContentStudio />} />
            <Route path="/platform/on-demand-library" element={<OnDemandLibrary />} />
            <Route path="/platform/just-in-time" element={<JustInTime />} />
            <Route path="/platform/pulse" element={<Pulse />} />
            
            {/* Solutions Routes */}
            <Route path="/solutions/faster-onboarding" element={<FasterOnboarding />} />
            <Route path="/solutions/upskill-reskill" element={<UpskillReskill />} />
            <Route path="/solutions/frontline-enablement" element={<FrontlineEnablement />} />
            <Route path="/solutions/performance-coaching" element={<PerformanceCoaching />} />
            <Route path="/solutions/leadership-talent" element={<LeadershipTalent />} />
            <Route path="/solutions/partner-dealer-academies" element={<PartnerDealerAcademies />} />
            <Route path="/solutions/compliance-made-simple" element={<ComplianceMadeSimple />} />
            
            {/* Why Lisa Routes */}
            <Route path="/why-lisa/ai-first-zero-legacy" element={<AIFirstZeroLegacy />} />
            <Route path="/why-lisa/35-years-learning-dna" element={<ThirtyFiveYearsLearningDNA />} />
            <Route path="/why-lisa/go-live-30-days" element={<GoLiveThirtyDays />} />
            <Route path="/why-lisa/loved-by-ops-hr-it" element={<LovedByOpsHRIT />} />
            
            {/* Resources Routes */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/ai-for-hr-hub" element={<AIForHRHub />} />
            <Route path="/resources/podcasts" element={<Podcasts />} />
            <Route path="/resources/playbooks-templates" element={<PlaybooksTemplates />} />
            <Route path="/resources/benchmarks-reports" element={<BenchmarksReports />} />
            <Route path="/resources/buyer-guides" element={<BuyerGuides />} />
            <Route path="/resources/ebooks" element={<EBooks />} />
            <Route path="/resources/glossary" element={<Glossary />} />
            <Route path="/resources/faqs" element={<FAQs />} />
            <Route path="/resources/events-bootcamps" element={<EventsBootcamps />} />
            
            {/* Company Routes */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/customers" element={<Customers />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/press-media" element={<PressMedia />} />
            <Route path="/company/contact" element={<Contact />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
