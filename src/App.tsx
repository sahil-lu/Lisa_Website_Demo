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

// Platform pages
import LXP from "./pages/platform/LXP";
import LMS from "./pages/platform/LMS";
import ContentStudio from "./pages/platform/ContentStudio";
import JustInTime from "./pages/platform/JustInTime";
import Pulse from "./pages/platform/Pulse";

// Solutions pages
import FasterOnboarding from "./pages/solutions/FasterOnboarding";
import UpskillReskill from "./pages/solutions/UpskillReskill";
import FrontlineEnablement from "./pages/solutions/FrontlineEnablement";
import PerformanceCoaching from "./pages/solutions/PerformanceCoaching";
import LeadershipTalent from "./pages/solutions/LeadershipTalent";
import PartnerDealerAcademies from "./pages/solutions/PartnerDealerAcademies";
import ComplianceMadeSimple from "./pages/solutions/ComplianceMadeSimple";

// Why Lisa pages
import AIFirstZeroLegacy from "./pages/why-lisa/AIFirstZeroLegacy";
import ThirtyFiveYearsLearningDNA from "./pages/why-lisa/ThirtyFiveYearsLearningDNA";
import GoLiveThirtyDays from "./pages/why-lisa/GoLiveThirtyDays";
import LovedByOpsHRIT from "./pages/why-lisa/LovedByOpsHRIT";

// Resources pages
import Blog from "./pages/resources/Blog";
import AIForHRHub from "./pages/resources/AIForHRHub";
import Podcasts from "./pages/resources/Podcasts";
import PlaybooksTemplates from "./pages/resources/PlaybooksTemplates";
import BenchmarksReports from "./pages/resources/BenchmarksReports";
import BuyerGuides from "./pages/resources/BuyerGuides";
import EBooks from "./pages/resources/eBooks";
import Glossary from "./pages/resources/Glossary";
import FAQs from "./pages/resources/FAQs";
import EventsBootcamps from "./pages/resources/EventsBootcamps";

// Company pages
import About from "./pages/company/About";
import Customers from "./pages/company/Customers";
import Careers from "./pages/company/Careers";
import PressMedia from "./pages/company/PressMedia";
import Contact from "./pages/company/Contact";


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
            <Route path="/why-lisa/thirty-five-years-learning-dna" element={<ThirtyFiveYearsLearningDNA />} />
            <Route path="/why-lisa/go-live-thirty-days" element={<GoLiveThirtyDays />} />
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
