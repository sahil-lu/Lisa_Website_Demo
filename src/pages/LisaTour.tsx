import { useRef, useState, useEffect } from "react";
import { 
  BarChart3, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Star, 
  Plus, 
  Search, 
  Settings, 
  Bell, 
  FileText, 
  Home, 
  GraduationCap,
  Award,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  ChevronDown,
  X,
  Play,
  Target,
  Smartphone,
  DollarSign,
  BookMarked,
  User,
  Mail,
  Calendar,
  Filter,
  MoreHorizontal,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { motion } from "framer-motion";
import StickyTopBar from "@/components/StickyTopBar";
import Footer from "@/components/Footer";

interface Course {
  id: number;
  title: string;
  type: string;
  category: string;
  users: number;
  image: string;
  status: string;
  price?: string;
  duration?: string;
  description?: string;
  date?: string;
  isPublic: boolean;
  imageType: "emoji" | "gradient" | "placeholder" | "icon";
}

const LisaTour = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: "FREE Agentic AI Bootcamp for HR",
      type: "Workshop",
      category: "Workshop Courses",
      users: 189,
      image: "ai",
      status: "Public",
      price: "₹5,000",
      duration: "3-Week Course",
      description: "Transform HR with AI in 3 Sundays",
      date: "10 AUG | 11.00 AM",
      isPublic: true,
      imageType: "icon"
    },
    {
      id: 2,
      title: "BD Team How BD Team Work",
      type: "MicroLearning",
      category: "Micro Learning",
      users: 0,
      image: "team",
      status: "Private",
      isPublic: false,
      imageType: "icon"
    },
    {
      id: 3,
      title: "FREE AI Weekend Bootcamp for Sales Leaders",
      type: "Workshop",
      category: "Workshop Courses",
      users: 16,
      image: "sales",
      status: "Private",
      price: "100% Free",
      duration: "3 Sundays",
      description: "For Sales/GTM Heads",
      date: "03 AUG | 2.00 PM",
      isPublic: false,
      imageType: "icon"
    },
    {
      id: 4,
      title: "Sales Techniques for Beginners: Mastering the Fundamentals",
      type: "MicroLearning",
      category: "Micro Learning",
      users: 1,
      image: "fundamentals",
      status: "Public",
      isPublic: true,
      imageType: "icon"
    },
    {
      id: 5,
      title: "Engagement Mastery: Transforming Workplace Culture",
      type: "MicroLearning",
      category: "Micro Learning",
      users: 8,
      image: "engagement",
      status: "Public",
      isPublic: true,
      imageType: "icon"
    },
    {
      id: 6,
      title: "AI Innovations in Human Resources: Transforming Talent Management",
      type: "MicroLearning",
      category: "Micro Learning",
      users: 15,
      image: "hr",
      status: "Public",
      isPublic: true,
      imageType: "icon"
    },
    {
      id: 7,
      title: "Mastering Leadership Management: Essential Skills for Modern Leaders",
      type: "MicroLearning",
      category: "Micro Learning",
      users: 13,
      image: "leadership",
      status: "Public",
      isPublic: true,
      imageType: "icon"
    },
    {
      id: 8,
      title: "Cybersecurity Essentials for Professionals: Protecting Digital Assets",
      type: "MicroLearning",
      category: "Micro Learning",
      users: 6,
      image: "security",
      status: "Public",
      isPublic: true,
      imageType: "icon"
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [courseType, setCourseType] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isDemoMode, setIsDemoMode] = useState(true);
  const [showDemoGuide, setShowDemoGuide] = useState(false);
  const [showStartDemo, setShowStartDemo] = useState(true);
  const [showEndDemo, setShowEndDemo] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [noticeSearchQuery, setNoticeSearchQuery] = useState("");
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [selectedUserFilter, setSelectedUserFilter] = useState("All");
  const [selectedNoticeFilter, setSelectedNoticeFilter] = useState("All");

  const categories = ["All", "Professional Degree Courses", "Academic Courses", "Bootcamp Courses", "Workshop Courses", "Micro Learning"];
  
  // Enhanced users data with different statuses and groups
  const users = [
    { id: 1, name: "Aarav Mehta", email: "aarav.mehta@example.com", dateJoined: "22 Jul 25, 11:45 AM", courses: 2, status: "Active", group: "HR Team", invitedBy: "Admin" },
    { id: 2, name: "Sanya Kapoor", email: "sanya.kapoor@example.com", dateJoined: "15 Aug 25, 09:30 AM", courses: 3, status: "Active", group: "Marketing", invitedBy: "Manager" },
    { id: 3, name: "Rohit Sharma", email: "rohit.sharma@example.com", dateJoined: "05 Sep 25, 02:10 PM", courses: 1, status: "Invited", group: "Sales", invitedBy: "Team Lead" },
    { id: 4, name: "Meera Iyer", email: "meera.iyer@example.com", dateJoined: "18 Jun 25, 04:50 PM", courses: 4, status: "Active", group: "Engineering", invitedBy: "CTO" },
    { id: 5, name: "Kabir Nair", email: "kabir.nair@example.com", dateJoined: "30 Jul 25, 07:15 PM", courses: 2, status: "Active", group: "Design", invitedBy: "Design Lead" },
    { id: 6, name: "Priya Singh", email: "priya.singh@example.com", dateJoined: "12 Aug 25, 10:20 AM", courses: 3, status: "Invited", group: "Operations", invitedBy: "Manager" },
    { id: 7, name: "Vikram Patel", email: "vikram.patel@example.com", dateJoined: "28 Jul 25, 03:45 PM", courses: 1, status: "Active", group: "Finance", invitedBy: "CFO" },
    { id: 8, name: "Ananya Reddy", email: "ananya.reddy@example.com", dateJoined: "08 Sep 25, 01:30 PM", courses: 5, status: "Active", group: "Product", invitedBy: "Product Manager" },
    { id: 9, name: "Arjun Kumar", email: "arjun.kumar@example.com", dateJoined: "20 Jun 25, 06:00 PM", courses: 2, status: "Invited", group: "Support", invitedBy: "Support Lead" },
    { id: 10, name: "Kavya Joshi", email: "kavya.joshi@example.com", dateJoined: "03 Aug 25, 08:15 AM", courses: 4, status: "Active", group: "HR Team", invitedBy: "HR Manager" },
    { id: 11, name: "Rajesh Gupta", email: "rajesh.gupta@example.com", dateJoined: "14 Jul 25, 12:30 PM", courses: 0, status: "Invited", group: "Sales", invitedBy: "Sales Manager" },
    { id: 12, name: "Deepika Sharma", email: "deepika.sharma@example.com", dateJoined: "25 Aug 25, 05:45 PM", courses: 6, status: "Active", group: "Engineering", invitedBy: "Tech Lead" },
    { id: 13, name: "Suresh Kumar", email: "suresh.kumar@example.com", dateJoined: "01 Sep 25, 09:15 AM", courses: 1, status: "Invited", group: "Marketing", invitedBy: "Marketing Head" },
    { id: 14, name: "Neha Agarwal", email: "neha.agarwal@example.com", dateJoined: "17 Jul 25, 02:20 PM", courses: 3, status: "Active", group: "Design", invitedBy: "Creative Director" },
    { id: 15, name: "Amit Verma", email: "amit.verma@example.com", dateJoined: "29 Aug 25, 11:00 AM", courses: 2, status: "Active", group: "Operations", invitedBy: "Operations Manager" },
    { id: 16, name: "Pooja Mehta", email: "pooja.mehta@example.com", dateJoined: "06 Sep 25, 03:30 PM", courses: 0, status: "Invited", group: "Finance", invitedBy: "Finance Manager" },
    { id: 17, name: "Ravi Singh", email: "ravi.singh@example.com", dateJoined: "11 Jul 25, 07:45 AM", courses: 4, status: "Active", group: "Product", invitedBy: "Product Owner" },
    { id: 18, name: "Sunita Patel", email: "sunita.patel@example.com", dateJoined: "23 Aug 25, 04:10 PM", courses: 1, status: "Invited", group: "Support", invitedBy: "Support Manager" },
    { id: 19, name: "Manoj Tiwari", email: "manoj.tiwari@example.com", dateJoined: "16 Jul 25, 01:55 PM", courses: 5, status: "Active", group: "HR Team", invitedBy: "HR Director" },
    { id: 20, name: "Shruti Jain", email: "shruti.jain@example.com", dateJoined: "04 Sep 25, 10:25 AM", courses: 2, status: "Active", group: "Sales", invitedBy: "Sales Director" }
  ];

  // Sample notices data
  const notices = [
    { id: 1, title: "New Course Launch: AI Fundamentals", category: "Course Related", date: "15 Sep 25", status: "Published" },
    { id: 2, title: "System Maintenance Scheduled", category: "Organization Related", date: "10 Sep 25", status: "Published" },
    { id: 3, title: "User Training Session", category: "User Related", date: "05 Sep 25", status: "Published" }
  ];

  // User activity logs
  const userLogs = [
    { id: 1, action: "User Invited", user: "Aarav Mehta", details: "Invited to HR Team", timestamp: "22 Jul 25, 11:45 AM", invitedBy: "Admin" },
    { id: 2, action: "User Joined", user: "Sanya Kapoor", details: "Joined Marketing team", timestamp: "15 Aug 25, 09:30 AM", invitedBy: "Manager" },
    { id: 3, action: "User Invited", user: "Rohit Sharma", details: "Invited to Sales team", timestamp: "05 Sep 25, 02:10 PM", invitedBy: "Team Lead" },
    { id: 4, action: "User Joined", user: "Meera Iyer", details: "Joined Engineering team", timestamp: "18 Jun 25, 04:50 PM", invitedBy: "CTO" },
    { id: 5, action: "User Invited", user: "Kabir Nair", details: "Invited to Design team", timestamp: "30 Jul 25, 07:15 PM", invitedBy: "Design Lead" },
    { id: 6, action: "User Invited", user: "Priya Singh", details: "Invited to Operations team", timestamp: "12 Aug 25, 10:20 AM", invitedBy: "Manager" },
    { id: 7, action: "User Joined", user: "Vikram Patel", details: "Joined Finance team", timestamp: "28 Jul 25, 03:45 PM", invitedBy: "CFO" },
    { id: 8, action: "User Joined", user: "Ananya Reddy", details: "Joined Product team", timestamp: "08 Sep 25, 01:30 PM", invitedBy: "Product Manager" },
    { id: 9, action: "User Invited", user: "Arjun Kumar", details: "Invited to Support team", timestamp: "20 Jun 25, 06:00 PM", invitedBy: "Support Lead" },
    { id: 10, action: "User Joined", user: "Kavya Joshi", details: "Joined HR Team", timestamp: "03 Aug 25, 08:15 AM", invitedBy: "HR Manager" }
  ];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === "All") return matchesSearch;
    return matchesSearch && course.category === selectedCategory;
  });

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                         user.group.toLowerCase().includes(userSearchQuery.toLowerCase());
    
    if (selectedUserFilter === "All") return matchesSearch;
    if (selectedUserFilter === "Invited") return matchesSearch && user.status === "Invited";
    if (selectedUserFilter === "Groups") return matchesSearch && user.group;
    if (selectedUserFilter === "Logs") return false; // Logs will be handled separately
    
    return matchesSearch && user.status === selectedUserFilter;
  });

  const filteredLogs = userLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                         log.action.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                         log.details.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
                         log.invitedBy.toLowerCase().includes(userSearchQuery.toLowerCase());
    return matchesSearch;
  });

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(noticeSearchQuery.toLowerCase());
    
    if (selectedNoticeFilter === "All") return matchesSearch;
    return matchesSearch && notice.category === selectedNoticeFilter;
  });

  const handleCreateCourse = () => {
    if (courseType && courseTitle) {
      const newCourse: Course = {
        id: Math.max(...courses.map(c => c.id)) + 1,
        title: courseTitle,
        type: courseType,
        category: selectedCategory === "All" ? "Micro Learning" : selectedCategory,
        users: 0,
        image: "new",
        status: "Private",
        isPublic: false,
        imageType: "placeholder",
        description: courseDescription
      };
      setCourses(prev => [...prev, newCourse]);
      setShowCreateModal(false);
      setCourseType("");
      setCourseTitle("");
      setCourseDescription("");
      setDemoStep(prev => prev + 1);
      
      // Show end demo popup after creating a course
      setTimeout(() => {
        setShowEndDemo(true);
      }, 1000);
    }
  };

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
    setDemoStep(prev => prev + 1);
  };

  // Function to render course icons
  const renderCourseIcon = (image: string, imageType: string) => {
    if (imageType === "icon") {
      const iconMap: { [key: string]: JSX.Element } = {
        ai: <Target className="w-8 h-8" />,
        team: <Users className="w-8 h-8" />,
        sales: <TrendingUp className="w-8 h-8" />,
        fundamentals: <BookOpen className="w-8 h-8" />,
        engagement: <Award className="w-8 h-8" />,
        hr: <User className="w-8 h-8" />,
        leadership: <GraduationCap className="w-8 h-8" />,
        security: <AlertCircle className="w-8 h-8" />,
        new: <Plus className="w-8 h-8" />
      };
      return iconMap[image] || <BookOpen className="w-8 h-8" />;
    }
    return <span className="text-3xl">{image}</span>;
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showCreateModal || showStartDemo || showEndDemo || showDemoGuide) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCreateModal, showStartDemo, showEndDemo, showDemoGuide]);

  // Ensure body scroll is enabled when component mounts
  useEffect(() => {
    document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <main>
      <StickyTopBar />
      
      {/* Navigation Header */}
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

      <section className="py-12 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">


      

      {/* End Demo Popup */}
      {showEndDemo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center" style={{ zIndex: 99999 }}>
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 max-w-lg mx-4 shadow-2xl text-center border-neutral-300 dark:border-neutral-700 border relative" style={{ zIndex: 100000 }}>
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">✓</span>
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">That's How Easy LISA Is!</h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-8 text-lg leading-relaxed">
              You just experienced the power of LISA AI! Creating courses, managing users, and analyzing data has never been this simple.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => setShowEndDemo(false)}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-500 text-white py-4 px-6 rounded-2xl font-medium hover:from-purple-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book a Live Demo
              </button>
              <button
                onClick={() => setShowEndDemo(false)}
                className="w-full theme-bg-secondary text-neutral-600 dark:text-neutral-300 py-3 px-6 rounded-2xl font-medium hover:bg-neutral-100 dark:bg-neutral-800 transition-all duration-300"
              >
                Continue Exploring
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Demo Guide Modal */}
      {showDemoGuide && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center" style={{ zIndex: 99999 }}>
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 max-w-2xl mx-4 shadow-2xl border-neutral-300 dark:border-neutral-700 border relative" style={{ zIndex: 100000 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">Interactive Demo Guide</h2>
              <button
                onClick={() => setShowDemoGuide(false)}
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 dark:text-neutral-300 text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">Explore the Dashboard</p>
                  <p className="text-sm">Click through different sections to see real-time data and analytics</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">Try Course Creation</p>
                  <p className="text-sm">Click "Create New Course" to experience the course creation workflow</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">Filter & Search</p>
                  <p className="text-sm">Use the search bar and category filters to explore course management</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">View Analytics</p>
                  <p className="text-sm">Check out the performance metrics and completion rates</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 theme-bg-secondary rounded-2xl border-neutral-300 dark:border-neutral-700 border">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                <strong>Pro Tip:</strong> This is a fully interactive demo. All buttons, forms, and navigation work exactly like the real LISA AI platform!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a855f7' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12 flex-shrink-0">
          <div className="inline-flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-neutral-300 dark:border-neutral-700">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-6 leading-tight text-center">
            Experience{" "}
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
              LISA AI
            </span>{" "}
            Platform
          </h2>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed text-center">
            Try the full LISA AI platform experience. This is a fully functional demo where you can click, explore, and create courses just like our real users do.
          </p>
          
          {/* Demo CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-lg mx-auto">
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-black dark:bg-neutral-600 text-white font-medium rounded-full hover:bg-gray-800 dark:hover:bg-neutral-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
            >
              Create your free course
            </button>
            <a 
              href="#features" 
              className="text-neutral-600 dark:text-neutral-300 hover:text-purple-500 dark:hover:text-purple-400 font-medium transition-all duration-300 text-base group flex items-center justify-center transform hover:scale-105"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">Learn more</span>
              <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Interactive Demo Container */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border border-neutral-200/50 dark:border-neutral-700/50 h-[600px] overflow-hidden flex flex-col relative">
          {/* Demo Header */}
          <div className="flex items-center justify-between p-6 relative flex-shrink-0">
            {/* Extended horizontal stroke */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-200/60 dark:bg-neutral-700/60"></div>
            {/* Demo Badge */}
            {/* <div className="absolute -top--6 left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              LIVE DEMO
            </div> */}
            
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="./lisa-logo.svg" 
                    alt="Lisa AI Logo" 
                    className="w-12 h-12 object-contain dark:hidden"
                  />
                  <img 
                    src="./lisa-logo-dark.png" 
                    alt="Lisa AI Logo" 
                    className="w-12 h-12 object-contain hidden dark:block"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-xs text-neutral-600 dark:text-neutral-300 font-mono bg-neutral-50/50 dark:bg-neutral-800/50 px-3 py-1 rounded-lg border border-neutral-200/40 dark:border-neutral-700/40">
                demo.lisaapp.in
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  U
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">Demo User</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Try LISA AI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 min-h-0">
            {/* Interactive Sidebar */}
            <div className="w-72 flex-shrink-0 flex flex-col p-6 relative">
              {/* Extended vertical stroke */}
              <div className="absolute right-0 top-0 bottom-0 w-px bg-neutral-200/60 dark:bg-neutral-700/60"></div>
              
              {/* Navigation */}
              <div className="flex-1 space-y-1 overflow-y-auto scrollbar-thin">
                {[
                  { name: "Dashboard", icon: <BarChart3 className="w-5 h-5" />, active: activeTab === "Dashboard" },
                  { name: "Courses", icon: <BookOpen className="w-5 h-5" />, active: activeTab === "Courses" },
                  { name: "Users", icon: <Users className="w-5 h-5" />, active: activeTab === "Users" }
                ].map((item) => (
                  <div
                    key={item.name}
                    onClick={() => handleTabChange(item.name)}
                    className={`flex items-center space-x-3 p-4 rounded-2xl cursor-pointer transition-all duration-300 group relative ${
                      item.active 
                        ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white border border-purple-500 shadow-lg shadow-purple-500/50 dark:bg-gradient-to-r dark:from-purple-500/50 dark:to-purple-600/50 dark:text-white dark:border-purple-500 dark:shadow-purple-500/20" 
                        : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-200 hover:shadow-md"
                    }`}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
                    <span className="font-medium text-sm transition-colors duration-300">{item.name}</span>
                  </div>
                ))}

              </div>

              {/* Footer */}
              <div className="mt-auto pt-4">
                <div className="text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>2025 © LetsUpgrade EdTech Pvt. Ltd.</div>
                  <div>Version 0.26.0</div>
                </div>
              </div>
            </div>

            {/* Dynamic Main Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-600 scrollbar-track-transparent p-6">
              {activeTab === "Dashboard" && (
                <div className="space-y-6">
                  {/* Welcome Section */}
                  <div className="mb-8">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Welcome Hanshika,</h1>
                    <p className="text-lg text-neutral-600 dark:text-neutral-300">Your dashboard is your go-to place to get started</p>
                  </div>

                  {/* Key Metrics Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">621</div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">Total Users</div>
                      <div className="w-full h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">621</div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">Active Users</div>
                      <div className="w-full h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">0</div>
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">Flagged Users</div>
                      <div className="w-full h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">33</div>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">Total courses</div>
                      <div className="w-full h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-4 border border-neutral-200 dark:border-neutral-700 transition-all duration-300 hover:shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 transition-all duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">5m 10s</div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-neutral-200">Average Learning</div>
                      <div className="w-full h-1 bg-gradient-to-r from-neutral-400 to-neutral-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Charts and Analytics Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* User Activity Chart */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border-neutral-300 dark:border-neutral-700 border backdrop-blur-sm transition-all duration-300 hover:shadow-xl group">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">User Activity</h3>
                          <div className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-300">
                            <div className="w-3 h-3 bg-neutral-500 rounded-full animate-pulse"></div>
                            <span>Live Data</span>
                          </div>
                        </div>
                      <div className="flex">
                        {/* Y-axis labels */}
                        <div className="flex flex-col justify-between h-80 text-xs text-neutral-500 dark:text-neutral-400 mr-2">
                          <span>100%</span>
                          <span>75%</span>
                          <span>50%</span>
                          <span>25%</span>
                          <span>0%</span>
                        </div>
                        {/* Chart area */}
                        <div className="flex-1 h-80 flex items-end justify-between space-x-1 px-2 relative bg-gray-50 dark:bg-gray-800/30 rounded-lg overflow-visible">
                        {/* Background grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between opacity-20">
                          {[0, 25, 50, 75, 100].map((line, index) => (
                            <div 
                              key={index} 
                              className="w-full h-px bg-gray-300 dark:bg-gray-600 transition-opacity duration-500"
                              style={{
                                animationDelay: `${index * 100}ms`,
                                animation: 'fadeIn 0.8s ease-out forwards'
                              }}
                            ></div>
                          ))}
                        </div>
                        {/* Chart bars */}
                        {[
                          { value: 45, label: 'Oct', users: 234 },
                          { value: 52, label: 'Nov', users: 267 },
                          { value: 38, label: 'Dec', users: 189 },
                          { value: 67, label: 'Jan', users: 345 },
                          { value: 78, label: 'Feb', users: 398 },
                          { value: 85, label: 'Mar', users: 432 },
                          { value: 92, label: 'Apr', users: 467 },
                          { value: 88, label: 'May', users: 445 },
                          { value: 76, label: 'Jun', users: 387 },
                          { value: 63, label: 'Jul', users: 321 },
                          { value: 71, label: 'Aug', users: 362 },
                          { value: 58, label: 'Sep', users: 295 }
                        ].map((data, index) => (
                          <div 
                            key={index} 
                            className="flex-1 bg-gradient-to-t from-neutral-500 to-neutral-600 rounded-t-lg transition-all duration-700 hover:from-neutral-600 hover:to-neutral-700 cursor-pointer min-h-[12px] shadow-sm relative z-10 border border-neutral-500 dark:border-neutral-600 group/bar hover:shadow-lg hover:scale-105 transform" 
                            style={{ 
                              height: `${Math.max(data.value, 5)}%`,
                              minHeight: '12px',
                              animationDelay: `${index * 150}ms`,
                              animation: 'slideUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                            }}
                            title={`${data.label}: ${data.users} users (${data.value}% activity)`}
                          >
                            {/* Hover tooltip */}
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                              <div className="font-semibold">{data.users} users</div>
                              <div className="text-xs opacity-75">{data.value}% activity</div>
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                            </div>
                            
                            {/* Data label on top of bar */}
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-neutral-600 dark:text-neutral-400 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                              {data.value}%
                            </div>
                          </div>
                        ))}
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-neutral-600 dark:text-neutral-300 mt-4 ml-8">
                        {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'].map((month, index) => (
                          <span 
                            key={month}
                            className="transition-all duration-300 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
                            style={{
                              animationDelay: `${(index + 12) * 100}ms`,
                              animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                          >
                            {month}
                          </span>
                        ))}
                      </div>
                      
                      {/* Chart summary */}
                      <div className="mt-4 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-300 dark:border-neutral-600">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                            <span className="text-neutral-600 dark:text-neutral-300">Peak Activity:</span>
                            <span className="font-semibold text-neutral-900 dark:text-neutral-50">April (467 users)</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                            <span className="text-neutral-600 dark:text-neutral-300">Average:</span>
                            <span className="font-semibold text-neutral-900 dark:text-neutral-50">68%</span>
                          </div>
                        </div>
                        
                        {/* Data verification */}
                        <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                          <div className="flex flex-wrap gap-2">
                            <span>Oct: 45%</span>
                            <span>Nov: 52%</span>
                            <span>Dec: 38%</span>
                            <span>Jan: 67%</span>
                            <span>Feb: 78%</span>
                            <span>Mar: 85%</span>
                            <span className="font-semibold text-neutral-600 dark:text-neutral-400">Apr: 92%</span>
                            <span>May: 88%</span>
                            <span>Jun: 76%</span>
                            <span>Jul: 63%</span>
                            <span>Aug: 71%</span>
                            <span>Sep: 58%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User Participation */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border-neutral-300 dark:border-neutral-700 border backdrop-blur-sm transition-all duration-300 hover:shadow-xl group">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">User Participation</h3>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300 group-hover:text-neutral-900 dark:text-neutral-50">User(s) Count</span>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-neutral-600 dark:text-neutral-300">Enrolled in last 30 days</span>
                            <span className="text-neutral-900 dark:text-neutral-50 font-medium">270</span>
                          </div>
                          <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-3 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-neutral-500 to-neutral-600 h-3 rounded-full transition-all duration-1000 ease-out hover:from-neutral-600 hover:to-neutral-700" 
                              style={{ 
                                width: '85%',
                                animation: 'fillProgress 1.5s ease-out forwards'
                              } as React.CSSProperties}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-neutral-600 dark:text-neutral-300">Started learning in last 30 days</span>
                            <span className="text-neutral-900 dark:text-neutral-50 font-medium">19</span>
                          </div>
                          <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-3 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out hover:from-blue-600 hover:to-blue-700" 
                              style={{ 
                                width: '15%',
                                animation: 'fillProgress 1.5s ease-out forwards',
                                animationDelay: '0.2s'
                              } as React.CSSProperties}
                            ></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-neutral-600 dark:text-neutral-300">Certificate generated in last 30 days</span>
                            <span className="text-neutral-900 dark:text-neutral-50 font-medium">0</span>
                          </div>
                          <div className="w-full bg-neutral-100 dark:bg-neutral-800 rounded-full h-3 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-gray-500 to-gray-600 h-3 rounded-full transition-all duration-1000 ease-out hover:from-gray-600 hover:to-gray-700" 
                              style={{ 
                                width: '0%',
                                animation: 'fillProgress 1.5s ease-out forwards',
                                animationDelay: '0.4s'
                              } as React.CSSProperties}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Courses */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border-neutral-300 dark:border-neutral-700 border backdrop-blur-sm transition-all duration-300 hover:shadow-xl group">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">Top Courses</h3>
                      <div className="space-y-3">
                        {[
                          { name: "AI For HR Batch 2", enrollments: 229, progress: 85 },
                          { name: "AI for HR Batch 3", enrollments: 192, progress: 70 },
                          { name: "Agentic Ai for HR", enrollments: 155, progress: 60 }
                        ].map((course, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-2xl hover:bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 group/item">
                            <div className="flex-1">
                              <div className="text-sm font-medium text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-300">{course.name}</div>
                              <div className="text-xs text-neutral-600 dark:text-neutral-300 transition-colors duration-300 group-hover/item:text-neutral-900 dark:text-neutral-50">{course.enrollments} enrollments</div>
                            </div>
                            <div className="w-24 bg-neutral-100 dark:bg-neutral-800 rounded-full h-3 ml-4 overflow-hidden">
                              <div 
                                className="bg-gradient-to-r from-neutral-500 to-neutral-600 h-3 rounded-full transition-all duration-1000 ease-out hover:from-neutral-600 hover:to-neutral-700" 
                                style={{ 
                                  width: `${course.progress}%`,
                                  animation: 'fillProgress 1.5s ease-out forwards',
                                  animationDelay: `${index * 0.2}s`
                                } as React.CSSProperties}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Users */}
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-lg border-neutral-300 dark:border-neutral-700 border backdrop-blur-sm transition-all duration-300 hover:shadow-xl group">
                      <div className="flex space-x-4 mb-6">
                        <button className="text-sm font-medium text-neutral-900 dark:text-neutral-50 border-b-2 border-neutral-600 pb-2 transition-all duration-300 hover:text-neutral-700 dark:hover:text-neutral-300">Top Users</button>
                        <button className="text-sm text-neutral-600 dark:text-neutral-300 transition-all duration-300 hover:text-neutral-900 dark:text-neutral-50 hover:border-b-2 hover:border-neutral-600 dark:hover:border-gray-400 pb-2">Flagged Users</button>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "Abhilash HM", score: 2804 },
                          { name: "Aravind Kumar", score: 2477 },
                          { name: "Pasumarthi purna naga vamsi krishna", score: 2315 },
                          { name: "Neelendra Pandey", score: 1509 },
                          { name: "Julie Linto", score: 663 }
                        ].map((user, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-2xl hover:bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 group/user">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-neutral-500/50 to-neutral-600/50 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover/user:scale-110 group-hover/user:shadow-neutral-500/25">
                                <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">{user.name.split(' ').map(n => n[0]).join('')}</span>
                              </div>
                              <span className="text-sm text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover/user:text-neutral-700 dark:group-hover/user:text-neutral-300">{user.name}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 group-hover/user:scale-110" />
                              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover/user:text-neutral-700 dark:group-hover/user:text-neutral-300">{user.score}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Courses" && (
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="animate-fadeInUp">
                      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 transition-colors duration-300">Courses</h1>
                      <p className="text-lg text-neutral-600 dark:text-neutral-300 transition-colors duration-300">all the courses in the organization</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search courses..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-64 px-6 py-3 pl-12 theme-input-bg border-neutral-300 dark:border-neutral-700 border rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                        />
                        <div className="absolute left-4 top-3.5 text-neutral-500 dark:text-neutral-400 transition-colors duration-300">
                          <Search className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Filters */}
                  <div className="flex space-x-2 mb-8">
                    {["All", "Professional Degree Courses", "Academic Courses", "Bootcamp Courses", "Workshop Courses", "Micro Learning"].map((category, index) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                          selectedCategory === category
                            ? "bg-neutral-900 text-white border border-neutral-700 shadow-lg shadow-neutral-500/30 dark:bg-neutral-100 dark:text-black dark:border-neutral-200 dark:shadow-purple-500/20"
                            : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:bg-neutral-800 hover:shadow-md border border-transparent"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Course Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Create New Course Card */}
                    <div 
                      onClick={() => setShowCreateModal(true)}
                      className="bg-neutral-50 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300 h-[320px] group hover:scale-105 hover:shadow-xl"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-neutral-500/50 to-neutral-600/50 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-neutral-500/25">
                        <Plus className="w-8 h-8 text-neutral-600 dark:text-neutral-400 transition-transform duration-300 group-hover:rotate-90" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 text-center">Create new Course</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 text-center">Start building your next learning experience</p>
                    </div>

                    {/* Course Cards */}
                    {filteredCourses.slice(0, 8).map((course) => (
                      <div key={course.id} className="bg-white dark:bg-neutral-900 rounded-3xl shadow-lg border-neutral-300 dark:border-neutral-700 border overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105 h-[320px] flex flex-col">
                        <div className="h-40 bg-gradient-to-br from-neutral-500/30 to-neutral-600/30 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                          <div className="w-20 h-20 bg-white dark:bg-neutral-900 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <div className="transition-transform duration-300 group-hover:scale-110 text-neutral-600 dark:text-neutral-400">
                              {renderCourseIcon(course.image, course.imageType)}
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          {/* Course Title */}
                          <div className="mb-3 flex-shrink-0">
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 text-base line-clamp-2 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 leading-tight">{course.title}</h3>
                          </div>
                          
                          {/* Status Badges */}
                          <div className="mb-3 flex-shrink-0">
                            <div className="flex flex-wrap gap-2">
                              <span className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 ${
                                course.isPublic ? "bg-green-900/50 text-green-300 group-hover:bg-green-800/50" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 group-hover:theme-bg-secondary"
                              }`}>
                                {course.status}
                              </span>
                              <span className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 font-medium transition-all duration-300 group-hover:theme-bg-secondary">
                                {course.type}
                              </span>
                            </div>
                          </div>
                          
                          {/* User Count */}
                          <div className="mb-4 flex-shrink-0">
                            <span className="text-sm text-neutral-600 dark:text-neutral-300 transition-colors duration-300 group-hover:text-neutral-900 dark:text-neutral-50">{course.users} users</span>
                          </div>
                          
                          {/* Price - Pushed to bottom */}
                          <div className="mt-auto">
                            {course.price && (
                              <div className="text-lg font-bold text-neutral-900 dark:text-neutral-50 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                                {course.price}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}


              {activeTab === "Users" && (
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">Users</span>
                        <span className="text-sm text-neutral-600 dark:text-neutral-300">All</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search users..."
                          value={userSearchQuery}
                          onChange={(e) => setUserSearchQuery(e.target.value)}
                          className="w-64 px-6 py-3 pl-12 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 transition-all duration-300 hover:shadow-md focus:shadow-lg"
                        />
                        <div className="absolute left-4 top-3.5 text-neutral-500 dark:text-neutral-400 transition-colors duration-300">
                          <Search className="w-5 h-5" />
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const newUser = {
                            id: users.length + 1,
                            name: "New User",
                            email: "newuser@example.com",
                            dateJoined: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }) + ", " + new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
                            courses: 0,
                            status: "Active"
                          };
                          users.push(newUser);
                          setUserSearchQuery("");
                        }}
                        className="bg-neutral-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        + Add User
                      </button>
                    </div>
                  </div>

                  {/* Title and Filters */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">Users</h1>
                      <span className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 px-3 py-2 rounded-full text-sm font-medium">{filteredUsers.length}</span>
                    </div>
                    <div className="flex space-x-3">
                      {["All", "Invited", "Groups", "Logs"].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setSelectedUserFilter(filter)}
                        className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                          selectedUserFilter === filter
                            ? "bg-neutral-900 text-white border border-neutral-700 shadow-lg shadow-neutral-500/30 hover:bg-neutral-800 dark:bg-neutral-100 dark:text-black dark:border-neutral-300 dark:hover:bg-neutral-200"
                            : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:bg-neutral-800 hover:text-neutral-700 dark:hover:text-neutral-200 hover:shadow-md border border-transparent"
                        }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section Header */}
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">All Users</h2>
                    <p className="text-base text-neutral-600 dark:text-neutral-300">List of all users in your organization on the platform</p>
                  </div>

                  {/* Users Table or Logs */}
                  {selectedUserFilter === "Logs" ? (
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                      <div className="overflow-hidden">
                        <table className="w-full table-fixed">
                          <thead className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
                            <tr>
                              <th className="w-16 px-4 py-4 text-center text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Sr No</th>
                              <th className="w-24 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Action</th>
                              <th className="w-32 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">User</th>
                              <th className="w-40 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Details</th>
                              <th className="w-32 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Invited By</th>
                              <th className="w-36 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Timestamp</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700">
                            {filteredLogs.map((log, index) => (
                              <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-200 group">
                                <td className="w-16 px-4 py-4 text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">{index + 1}</td>
                                <td className="w-24 px-4 py-4">
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    log.action === "User Joined" 
                                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                      : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                                  }`}>
                                    {log.action}
                                  </span>
                                </td>
                                <td className="w-32 px-4 py-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{log.user}</td>
                                <td className="w-40 px-4 py-4 text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{log.details}</td>
                                <td className="w-32 px-4 py-4 text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{log.invitedBy}</td>
                                <td className="w-36 px-4 py-4 text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{log.timestamp}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden">
                      <div className="overflow-hidden">
                        <table className="w-full table-fixed">
                          <thead className="bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border-b border-neutral-200 dark:border-neutral-700">
                            <tr>
                              <th className="w-16 px-4 py-4 text-center text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Sr No</th>
                              <th className="w-48 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Name</th>
                              <th className="w-48 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Email</th>
                              <th className="w-32 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Group</th>
                              <th className="w-36 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
                                <div className="flex items-center space-x-2">
                                  <span>Date Joined</span>
                                  <svg className="w-3 h-3 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </th>
                              <th className="w-28 px-4 py-4 text-left text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">Total Courses</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white dark:bg-neutral-900 divide-y divide-neutral-200 dark:divide-neutral-700">
                            {filteredUsers.map((user, index) => (
                              <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-200 group">
                                <td className="w-16 px-4 py-4 text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">{index + 1}</td>
                                <td className="w-48 px-4 py-4">
                                  <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-neutral-600 to-neutral-700 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-200 flex-shrink-0">
                                      <span className="text-xs font-semibold text-white">{user.name.split(' ').map(n => n[0]).join('')}</span>
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{user.name}</div>
                                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium w-fit ${
                                        user.status === "Active" 
                                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
                                      }`}>
                                        <div className={`w-2 h-2 rounded-full mr-1.5 ${
                                          user.status === "Active" ? "bg-green-500" : "bg-yellow-500"
                                        }`}></div>
                                        {user.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="w-48 px-4 py-4 text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{user.email}</td>
                                <td className="w-32 px-4 py-4">
                                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 truncate">
                                    {user.group}
                                  </span>
                                </td>
                                <td className="w-36 px-4 py-4 text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200 transition-colors duration-200 truncate">{user.dateJoined}</td>
                                <td className="w-28 px-4 py-4">
                                  <div className="flex items-center space-x-1">
                                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors duration-200">{user.courses}</span>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">courses</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              )}



            </div>
          </div>
        </div>


      </div>

      {/* Course Creation Modal - Outside main container for maximum z-index */}
      {showCreateModal && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center" 
          style={{ 
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh'
          }}
        >
          <div 
            className="bg-white dark:bg-neutral-900 rounded-3xl p-8 w-full max-w-lg shadow-2xl transform transition-all duration-300 scale-100 border-neutral-300 dark:border-neutral-700 border relative mx-4" 
            style={{ zIndex: 1000000 }}
          >
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50 mb-6 text-center">Create course</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-neutral-900 dark:text-neutral-50 text-sm font-medium mb-3">
                  Course Title
                </label>
                <input
                  type="text"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                  placeholder="Enter course title..."
                  className="w-full theme-input-bg rounded-2xl px-4 py-3 text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-neutral-900 dark:text-neutral-50 text-sm font-medium mb-3">
                  Select Course type
                </label>
                <div className="relative">
                  <select
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                    className="w-full theme-input-bg rounded-2xl px-4 py-3 text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none"
                  >
                    <option value="">Select an option</option>
                    <option value="MicroLearning">MicroLearning</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Bootcamp">Bootcamp</option>
                    <option value="Academic">Academic Course</option>
                    <option value="Professional Degree">Professional Degree Course</option>
                  </select>
                    <div className="absolute right-4 top-4 text-neutral-500 dark:text-neutral-400 pointer-events-none">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
              </div>

              <div>
                <label className="block text-neutral-900 dark:text-neutral-50 text-sm font-medium mb-3">
                  Description (Optional)
                </label>
                <textarea
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                  placeholder="Enter course description..."
                  rows={3}
                  className="w-full theme-input-bg rounded-2xl px-4 py-3 text-neutral-900 dark:text-neutral-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 resize-none"
                />
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <button
                onClick={() => {
                  setShowCreateModal(false);
                  setCourseType("");
                  setCourseTitle("");
                  setCourseDescription("");
                }}
                className="flex-1 px-6 py-2.5 bg-transparent text-neutral-700 dark:text-neutral-300 font-medium rounded-full border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateCourse}
                disabled={!courseType || !courseTitle}
                className="flex-1 px-6 py-2.5 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-all duration-300 disabled:bg-neutral-100 dark:bg-neutral-800 disabled:cursor-not-allowed"
              >
                Create Course
              </button>
            </div>
          </div>
        </div>
      )}
      </section>

      {/* Footer */}
      <motion.footer 
        className="bg-background py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          {/* Top Section - Four Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About LISA */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">About LISA</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                LISA is an AI-powered learning ecosystem helping enterprises and institutions create personalized, adaptive learning at scale.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/#features" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="/#pricing" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/#integrations" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Integrations</a></li>
                <li><a href="/#security" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/resources/blog" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Blog</a></li>
                <li><a href="/resources/playbooks" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Playbooks</a></li>
                <li><a href="/resources/benchmarks" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Benchmarks</a></li>
                <li><a href="/resources/faqs" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-neutral-900 dark:text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:hello@lisaapp.in" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">hello@lisaapp.in</a></li>
                <li><a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Book a Demo</a></li>
                <li><a href="/company/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 md:mb-0">
                © 2025 LetsUpgrade EdTech Pvt. Ltd. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</a>
                <a href="/cookies" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
};

export default LisaTour;
