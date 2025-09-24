import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileText, Smartphone, Users, Bot, Mic, PhoneCall, Newspaper, GraduationCap, Rocket, BrainCircuit, Activity, BookOpen, BarChart3, Settings, Shield, Zap, Target, Clock, TrendingUp, Award, Globe, Building2, School, Users2, Lightbulb, Lock, AlertTriangle, CheckCircle, Star, ArrowRight, Play, Calendar, Library, Sparkles, Briefcase, Monitor, Plus, Search, ChevronDown, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";
import Navbar from "@/components/Navbar";
import VisualBreaker from "@/components/VisualBreaker";
import CourseLibraryCarousel from "@/components/CourseLibraryCarousel";

import Logo3DCard from "@/components/Logo3DCard";
import Enhanced3DCard from "@/components/Enhanced3DCard";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTrigger will be registered in useEffect

const Logo = ({ name, src }: { name: string; src: string }) => (
  <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
    <img src={src} loading="lazy" alt={`${name} logo`} className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
    <span className="sr-only">{name}</span>
  </div>
);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LISA",
  description: "AI-powered learning ecosystem",
  url: "https://lisaapp.in",
};

const Index = () => {
  const [activePillar, setActivePillar] = React.useState('platform');
  const [pillarTimeLeft, setPillarTimeLeft] = React.useState(10);
  const [activeOutcome, setActiveOutcome] = React.useState('onboarding');
  const [timeLeft, setTimeLeft] = React.useState(10);
  
  // Demo section state
  const [activeTab, setActiveTab] = React.useState("Dashboard");
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [courseType, setCourseType] = React.useState("");
  const [courseTitle, setCourseTitle] = React.useState("");
  const [courseDescription, setCourseDescription] = React.useState("");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [userSearchQuery, setUserSearchQuery] = React.useState("");
  const [selectedUserFilter, setSelectedUserFilter] = React.useState("All");
  
  // Testimonials state
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement[]>([]);
  
  
  // Array of outcome keys for auto-rotation
  const outcomeKeys = ['onboarding', 'upskilling', 'frontline', 'performance', 'talent', 'enterprise', 'compliance'];
  
  // Image mapping for outcomes
  const outcomeImages = {
    onboarding: 'onboarding.png',
    upskilling: 'upskilling.png',
    frontline: 'frontline-enablement.png',
    performance: 'performance-enablement.png',
    talent: 'talent-development.png',
    enterprise: 'extended-enterprise.png',
    compliance: 'compilance.png'
  };
  
  // Array of pillar keys for auto-rotation
  const pillarKeys = ['platform', 'content', 'jit'];

  // Steps data for How Fast Can We Go section
  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "Pick your outcomes + roles. Import current SOPs.",
      details: "Identify key business outcomes and target roles. Import existing Standard Operating Procedures and documentation. Map current learning gaps and define success metrics."
    },
    {
      id: 2,
      title: "Launch",
      description: "Configure platform, assign paths, ship v1 content in 7-10 days.",
      details: "Set up the LISA platform with your branding and workflows. Create personalized learning paths for each role. Deploy initial content library and begin user onboarding."
    },
    {
      id: 3,
      title: "Scale",
      description: "Automate JIT hooks, expand library, track KPIs, iterate monthly.",
      details: "Integrate just-in-time learning into daily workflows. Continuously expand the content library based on user feedback. Monitor key performance indicators and optimize monthly."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Head of L&D",
      company: "TechCorp India",
      avatar: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "LISA AI has transformed our corporate learning. The AI course creation feature saved us months of development time, and our employees love the personalized learning paths.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "HR Director",
      company: "Global Solutions Ltd",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "The university partnership and certification options are game-changers. We're now building our own talent pipeline with trained employees ready to join our teams.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Learning Manager",
      company: "InnovateTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "At ₹500 per employee per month, LISA AI is unbeatable value. The analytics dashboard gives us clear insights into learning impact and ROI.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "CTO",
      company: "Digital Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "The integration with our existing systems was seamless. Our teams can now access learning anywhere, anytime, and the mobile app is fantastic.",
      rating: 5
    }
  ];

  // Demo section data
  const courses = [
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
    }
  ];

  const users = [
    { id: 1, name: "Aarav Mehta", email: "aarav.mehta@example.com", dateJoined: "22 Jul 25, 11:45 AM", courses: 2, status: "Active", group: "HR Team", invitedBy: "Admin" },
    { id: 2, name: "Sanya Kapoor", email: "sanya.kapoor@example.com", dateJoined: "15 Aug 25, 09:30 AM", courses: 3, status: "Active", group: "Marketing", invitedBy: "Manager" },
    { id: 3, name: "Rohit Sharma", email: "rohit.sharma@example.com", dateJoined: "05 Sep 25, 02:10 PM", courses: 1, status: "Invited", group: "Sales", invitedBy: "Team Lead" },
    { id: 4, name: "Meera Iyer", email: "meera.iyer@example.com", dateJoined: "18 Jun 25, 04:50 PM", courses: 4, status: "Active", group: "Engineering", invitedBy: "CTO" },
    { id: 5, name: "Kabir Nair", email: "kabir.nair@example.com", dateJoined: "30 Jul 25, 07:15 PM", courses: 2, status: "Active", group: "Design", invitedBy: "Design Lead" }
  ];

  const categories = ["All", "Professional Degree Courses", "Academic Courses", "Bootcamp Courses", "Workshop Courses", "Micro Learning"];

  // Testimonials helper functions
  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  // Demo helper functions
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
    return matchesSearch && user.status === selectedUserFilter;
  });

  const handleCreateCourse = () => {
    if (courseType && courseTitle) {
      setShowCreateModal(false);
      setCourseType("");
      setCourseTitle("");
      setCourseDescription("");
    }
  };

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  const renderCourseIcon = (image: string, imageType: string) => {
    if (imageType === "icon") {
      const iconMap: { [key: string]: JSX.Element } = {
        ai: <Target className="w-8 h-8" />,
        team: <Users className="w-8 h-8" />,
        sales: <TrendingUp className="w-8 h-8" />,
        fundamentals: <BookOpen className="w-8 h-8" />,
        engagement: <Award className="w-8 h-8" />,
        hr: <Users className="w-8 h-8" />,
        new: <Plus className="w-8 h-8" />
      };
      return iconMap[image] || <BookOpen className="w-8 h-8" />;
    }
    return <span className="text-3xl">{image}</span>;
  };

  // Auto-rotation logic
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Move to next outcome
          const currentIndex = outcomeKeys.indexOf(activeOutcome);
          const nextIndex = (currentIndex + 1) % outcomeKeys.length;
          setActiveOutcome(outcomeKeys[nextIndex]);
          return 10; // Reset timer to 10 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeOutcome, outcomeKeys]);

  // Reset timer when outcome changes manually
  React.useEffect(() => {
    setTimeLeft(10);
  }, [activeOutcome]);

  // Auto-rotation for pillars section
  React.useEffect(() => {
    const timer = setInterval(() => {
      setPillarTimeLeft((prev) => {
        if (prev <= 1) {
          // Move to next pillar
          const currentIndex = pillarKeys.indexOf(activePillar);
          const nextIndex = (currentIndex + 1) % pillarKeys.length;
          setActivePillar(pillarKeys[nextIndex]);
          return 10; // Reset timer to 10 seconds
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activePillar, pillarKeys]);

  // Reset timer when pillar changes manually
  React.useEffect(() => {
    setPillarTimeLeft(10);
  }, [activePillar]);

  const pillars = {
    platform: {
      title: "AI-first L&D Platform",
      features: [
        "Modern LXP/LMS with AI tutor, pathways, nudges, quizzes, certificates",
        "Personalized journeys by role, level, and performance signals",
        "Teams/Slack/Email nudges; SSO; HRIS connectors",
        "Standards-friendly (SCORM/xAPI if needed)",
        "Analytics: time-to-productivity, skill attainment, completion, MAU/WAU",
        "Admin joy: drag-and-drop, instant cohorts, one-click reports"
      ],
      proofCallout: "Launch a new program in 48 hours, not 8 weeks."
    },
    content: {
      title: "AI-first Content Development (Studio)",
      features: [
        "Rapid AI storyboarding → script → visuals → voiceover → publish",
        "Convert SOPs/Docs into micro-lessons; multi-lingual; brand-safe",
        "Templates for sales, service, onboarding, compliance",
        "Review workflows; SME annotation; versioning"
      ],
      proofCallout: "Ship 10 courses/week without 10 vendors."
    },
    jit: {
      title: "AI-first Just-in-Time Learning (JIT)",
      features: [
        "In-the-flow answers inside Slack/Teams/CRM",
        "Diagnostic prompts → targeted micro-clip (60-120s) + quick checklist",
        "Works offline for field via lightweight mobile cards",
        "Governance: source-locked, approvals, audit trail"
      ],
      proofCallout: "Reduce 'ask a buddy' time by 60%+."
    }
  };

  const outcomes = {
    onboarding: {
      title: "Onboarding",
      features: [
        "Cut time-to-productivity by 40-60%",
        "Reduce buddy load and increase retention",
        "Interactive onboarding paths with progress tracking",
        "Role-specific learning journeys",
        "Automated compliance and policy training"
      ],
      impact: "New hires productive in days, not weeks"
    },
    upskilling: {
      title: "Upskilling/Reskilling",
      features: [
        "Close skill gaps with role-based learning paths",
        "Hands-on labs and practical exercises",
        "AI-powered skill assessment and recommendations",
        "Personalized learning roadmaps",
        "Career progression tracking and guidance"
      ],
      impact: "Close critical skill gaps 3x faster"
    },
    frontline: {
      title: "Frontline Enablement",
      features: [
        "Playbooks and JIT cards inside CRM",
        "Increase win rates with better product knowledge",
        "Mobile-first learning for field teams",
        "Real-time performance support",
        "Offline access for remote locations"
      ],
      impact: "Win rates increase by 25-40%"
    },
    performance: {
      title: "Performance\u00A0Enablement",
      features: [
        "Smart nudges to practice and improve",
        "Continuous feedback loops and coaching",
        "Performance analytics and insights",
        "Goal-aligned learning recommendations",
        "Manager dashboards for team development"
      ],
      impact: "Performance improvements in 30 days"
    },
    talent: {
      title: "Talent Development",
      features: [
        "Manager pathways and leadership sprints",
        "Individual Development Plans (IDPs)",
        "Succession planning and talent pipelines",
        "Leadership competency frameworks",
        "Mentorship and coaching programs"
      ],
      impact: "Build next-gen leaders 50% faster"
    },
    enterprise: {
      title: "Extended Enterprise",
      features: [
        "Train dealers, partners, and distributors",
        "Co-branded learning portals",
        "Partner certification programs",
        "Channel enablement and support",
        "White-label learning solutions"
      ],
      impact: "Partner performance up 35%"
    },
    compliance: {
      title: "Compliance",
      features: [
        "Zero-drama compliance rollouts",
        "Automated reminders and tracking",
        "Clean audit trails and reporting",
        "Policy updates and notifications",
        "Risk management and mitigation"
      ],
      impact: "100% compliance with zero friction"
    }
  };

  // Testimonials GSAP animations
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Testimonials animation with dramatic entrance
      const testimonialElements = testimonialsRef.current;
      if (testimonialElements) {
        gsap.fromTo(testimonialElements, 
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9,
            rotationY: -15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            stagger: 0.25,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ".testimonials-section",
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Auto-rotate testimonials with improved timing
      const interval = setInterval(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);

      // Background elements animation
      gsap.fromTo(".bg-elements", 
        { 
          opacity: 0,
          scale: 0.8,
          rotation: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );


      return () => clearInterval(interval);
    });

    return () => ctx.revert();
  }, [testimonials.length]);
  
  return (
    <main>
      <Helmet>
        <title>LISA AI – Corporate Learning Platform Backed by a University</title>
        <meta name="description" content="Corporate L&D that actually ships outcomes. Meet LISA AI — your corporate learning platform backed by a university." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Sticky Top Bar */}
      <StickyTopBar />

      <Navbar />

      {/* Hero Section */}
      <section id="main" className="relative py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-background" />
        
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Metallic Text */}
            <motion.div 
                className="inline-flex items-center justify-center lg:justify-start mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
                <span className="relative text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
                  <span className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
                    Corporate L&D is DOOMED
                </span>
                  <span className="text-yellow-600 drop-shadow-lg">🤯</span>
                </span>
            </motion.div>

            {/* Main Content */}
            <motion.h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight mb-2 sm:mb-3 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900">Legacy L&D is slow. </span>
              <span className="text-purple-600">LISA AI</span> <span className="text-gray-900">ships skills now.</span>
            </motion.h1>
            
              {/* Subheading as Bullet Points */}
              <motion.div 
                className="text-left mb-2 sm:mb-3 px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
                  <ul className="space-y-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>AI-first platform with intelligent learning paths</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>500+ course library covering all business skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Just-in-time learning for instant skill application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Onboard faster, upskill smarter, enable frontline in days—not quarters</span>
                  </li>
                </ul>
              </motion.div>
            
            {/* CTA Buttons - Responsive layout */}
            <motion.div 
                className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Top row - responsive button layout */}
              <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <Button variant="outline" size="xl" className="basis-1/2 sm:basis-auto flex-1 sm:flex-none w-auto min-w-0 sm:min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-3 sm:px-6 border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50 dark:bg-purple-50 dark:bg-purple-900/20 transition-all duration-300 whitespace-normal text-center rounded-full" asChild>
                  <a href="/content-library">
                    Explore 500 Courses Library
                  </a>
                </Button>
                <Button variant="default" size="xl" className="basis-1/2 sm:basis-auto flex-1 sm:flex-none w-auto min-w-0 sm:min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-3 sm:px-6 shadow-sm hover:shadow-md transition-all duration-300 whitespace-normal text-center !bg-neutral-950 !text-white hover:!bg-neutral-800 rounded-full" asChild>
                  <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
              </div>
              
            </motion.div>
            </div>

            {/* Right Side - Image */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full max-w-lg lg:max-w-xl">
                <img 
                  src="/platform_banner_1a0b63f87a.webp" 
                  alt="LISA Platform Banner" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* 3 Pillars of LISA Section */}
      <section id="pillars" className="py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-3 sm:mb-5 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-purple-600"
                    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <span className="text-neutral-950">3 Pillars of </span><span className="text-purple-600">LISA AI</span>
            </motion.h2>
            
                  <motion.p
              className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
              Three powerful pillars that transform corporate learning
            </motion.p>
          </motion.div>
          
          {/* Tab Buttons */}
            <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
            <Button 
              variant={activePillar === 'platform' ? 'default' : 'outline'}
              size="lg" 
              onClick={() => setActivePillar('platform')}
              className={`flex-1 sm:flex-none min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                activePillar === 'platform' 
                  ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white' 
                  : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
              }`}
            >
              AI-first L&D Platform
            </Button>
            <Button 
              variant={activePillar === 'content' ? 'default' : 'outline'}
              size="lg" 
              onClick={() => setActivePillar('content')}
              className={`flex-1 sm:flex-none min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                activePillar === 'content' 
                  ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white' 
                  : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
              }`}
            >
              AI-first Content Development
            </Button>
            <Button 
              variant={activePillar === 'jit' ? 'default' : 'outline'}
              size="lg" 
              onClick={() => setActivePillar('jit')}
              className={`flex-1 sm:flex-none min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                activePillar === 'jit' 
                  ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white' 
                  : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
              }`}
            >
              AI-first Just-in-Time Learning
            </Button>
            </motion.div>

          {/* Content Card */}
            <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
            key={activePillar}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12 relative min-h-[700px] h-[700px]">
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-t-2xl overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-1000 ease-linear"
                  style={{ 
                    width: `${pillarTimeLeft <= 1 ? 100 : ((10 - pillarTimeLeft) / 10) * 100}%` 
                  }}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Features */}
                <div className="flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
                    {pillars[activePillar].title}
                </h3>
                  
                  <div className="flex-1 flex flex-col justify-start space-y-3">
                    {pillars[activePillar].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 py-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </p>
                      </div>
                    ))}
              </div>

                  {/* Proof Callout below bullet points */}
                  <div className="mt-8">
                    <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-center shadow-xl">
                    <div className="text-white">
                        <h4 className="text-lg sm:text-xl font-black mb-3">Proof Callout</h4>
                        <p className="text-base sm:text-lg font-bold">
                        "{pillars[activePillar].proofCallout}"
                      </p>
                  </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-center justify-center h-full">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src={`/${activePillar === 'platform' ? 'AI-first L&D Platform.png' : activePillar === 'content' ? 'AI-first Content Development.png' : 'AI-first Just-in-Time Learning.png'}`}
                      alt={`${pillars[activePillar].title} illustration`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  </div>
                  </div>
            </div>
            </motion.div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Course Library Carousel */}
      <CourseLibraryCarousel />

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Outcomes We Solve Section */}
      <section id="outcomes" className="py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              <span className="text-neutral-950">Outcomes We Solve</span>
            </motion.h2>
              <motion.p 
              className="text-lg sm:text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
              Seven key outcomes that drive measurable business impact
              </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
              >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Side - Tabs */}
              <div className="space-y-4 lg:col-span-1">
                <Button
                  variant={activeOutcome === 'onboarding' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('onboarding')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'onboarding'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Onboarding
                </Button>
                <Button
                  variant={activeOutcome === 'upskilling' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('upskilling')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'upskilling'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Upskilling/Reskilling
                </Button>
                <Button
                  variant={activeOutcome === 'frontline' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('frontline')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'frontline'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Frontline Enablement
                </Button>
                <Button
                  variant={activeOutcome === 'performance' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('performance')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'performance'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Performance Enablement
                </Button>
                <Button
                  variant={activeOutcome === 'talent' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('talent')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'talent'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Talent Development
                </Button>
                <Button
                  variant={activeOutcome === 'enterprise' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('enterprise')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'enterprise'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Extended Enterprise
                </Button>
                <Button
                  variant={activeOutcome === 'compliance' ? 'default' : 'outline'}
                  size="lg"
                  onClick={() => setActiveOutcome('compliance')}
                  className={`w-full h-12 sm:h-14 text-sm sm:text-lg px-6 transition-all duration-300 rounded-full ${
                    activeOutcome === 'compliance'
                      ? 'shadow-sm hover:shadow-md !bg-black hover:!bg-gray-800 !text-white'
                      : 'border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50/50 dark:hover:bg-purple-100/50'
                  }`}
                >
                  Compliance
                </Button>
                  </div>

              {/* Right Side - Content Card */}
              <motion.div
                className="lg:col-span-2 flex"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                key={activeOutcome}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 sm:p-12 w-full relative min-h-[500px] h-[500px]">
                  {/* Progress Bar Timer */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-t-2xl overflow-hidden">
                    <div 
                      className="h-full transition-all duration-1000 ease-linear bg-gradient-to-r from-purple-500 to-purple-600"
                      style={{ 
                        width: `${timeLeft <= 1 ? 100 : ((10 - timeLeft) / 10) * 100}%` 
                      }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                    {/* Left Side - Content */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6">
                          {outcomes[activeOutcome].title}
                        </h3>

                        <div className="space-y-4">
                          {outcomes[activeOutcome].features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 dark:text-gray-300">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Business Impact Callout */}
                      <div className="mt-8 mb-6">
                        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-center shadow-xl">
                          <div className="text-white">
                            <h4 className="text-lg sm:text-xl font-black mb-2">Business Impact</h4>
                            <p className="text-base sm:text-lg font-bold">
                              "{outcomes[activeOutcome].impact}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex items-center justify-center">
                      <div className="w-full h-80 rounded-2xl overflow-hidden">
                        <img 
                          src={`/${outcomeImages[activeOutcome]}`}
                          alt={`${outcomes[activeOutcome].title} illustration`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* How Fast Can We Go Section */}
      <section id="how-fast" className="py-5 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-3 sm:mb-5 md:mb-6 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-neutral-950">How fast can we go?</span>
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              3 steps to rapid implementation and scaling
            </motion.p>
            </motion.div>
            
          {/* 3 Cards Grid with Arrows */}
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Desktop/Tablet Layout with Horizontal Arrows */}
            <div className="hidden md:flex items-center justify-center gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <motion.div
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1"
                    initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                      {step.details.split('. ').map((detail, idx) => (
                        <li key={idx} className="text-sm">
                          {detail.trim()}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Horizontal Arrow (except for last card) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="mx-4"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
                      viewport={{ once: true }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-purple-600"
                      >
                        <path 
                          d="M9 18L15 12L9 6" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
              ))}
                      </div>
                    
            {/* Mobile Layout with Vertical Arrows */}
            <div className="md:hidden space-y-6">
              {steps.map((step, index) => (
                <div key={step.id}>
                  <motion.div 
                    className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + (index * 0.2) }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                        {step.title}
                      </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                    <ul className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                      {step.details.split('. ').map((detail, idx) => (
                        <li key={idx} className="text-sm">
                          {detail.trim()}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  {/* Vertical Arrow (except for last card) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="flex justify-center py-4"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
                      viewport={{ once: true }}
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-purple-600"
                      >
                        <path 
                          d="M6 9L12 15L18 9" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  )}
                    </div>
                        ))}
                    </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Testimonials Section */}
      <section className="testimonials-section py-20 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">
        {/* Background elements with blockchain theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/20 opacity-20 bg-elements"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
              What Our
              <span className="text-purple-500"> Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto text-balance">
              Real feedback from L&D leaders who have transformed their corporate learning with LISA AI.
            </p>
                      </div>

          {/* Enhanced Testimonials Carousel with blockchain theme */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 backdrop-blur-sm shadow-[0_0_50px_rgba(147,51,233,0.1)]">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    ref={(el) => { if (el) testimonialsRef.current[index] = el; }}
                    className="w-full flex-shrink-0 p-8 px-16"
                  >
                    <div className="text-center">
                      {/* Star rating with enhanced glow effect */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-6 h-6 text-yellow-400 fill-current transform hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial text with enhanced styling */}
                      <blockquote className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed italic text-balance font-light">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author info with enhanced styling */}
                      <div className="flex items-center justify-center space-x-6">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-600 shadow-lg transform hover:scale-110 transition-transform duration-300"
                        />
                        <div className="text-left">
                          <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{testimonial.name}</div>
                          <div className="text-base text-neutral-600 dark:text-neutral-300 font-light">{testimonial.role}</div>
                          <div className="text-base text-purple-500 font-light">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                      </div>
                    
            {/* Enhanced Navigation buttons with blockchain theme */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
        </div>

          {/* Enhanced Dots indicator with blockchain theme */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonialIndex(index)}
                className={`transition-all duration-500 rounded-full transform hover:scale-125 ${
                  index === currentTestimonialIndex 
                    ? 'w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg shadow-purple-500/50 scale-125' 
                    : 'w-3 h-3 bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500 shadow-md'
                }`}
              />
                        ))}
                    </div>
                    
          {/* Company logos with static grid */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-lg text-neutral-600 dark:text-neutral-300 font-normal">Trusted by the world's largest organizations</p>
            </div>
            
            {/* Static Grid Container */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { 
                    name: "Eisai", 
                    logo: "/logos/eisai.png"
                  },
                  { 
                    name: "ICICI Bank", 
                    logo: "/logos/icici bank.png"
                  },
                  { 
                    name: "Hinduja Hospitals", 
                    logo: "/logos/hinduja-hospitals.png"
                  },
                  { 
                    name: "Kotak", 
                    logo: "/logos/kotak.png"
                  },
                  { 
                    name: "Raymond", 
                    logo: "/logos/raymond.png"
                  },
                  { 
                    name: "Richs", 
                    logo: "/logos/richs.png"
                  },
                  { 
                    name: "Reliance Jewels", 
                    logo: "/logos/reliance jewels.png"
                  }
                ].map((company, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`}
                      className={`object-contain transition-all duration-300 ${
                        company.name === "ICICI Bank" 
                          ? "h-8 sm:h-10 md:h-12" 
                          : "h-16 sm:h-20 md:h-24"
                      }`}
                    />
                      </div>
                ))}
                      </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Pricing Section */}
      <section className="py-20 bg-neutral-950 dark:bg-neutral-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="text-purple-400"> Pricing</span>
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto text-balance">
              Choose the plan that fits your organization's learning needs. Start free and scale as you grow.
            </p>
                    </div>
                    
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Starter Tier */}
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-neutral-400 text-sm mb-6">Pilot for one team</div>
                <div className="text-4xl font-bold text-white mb-2">Free</div>
                <div className="text-neutral-400 text-sm mb-8">forever</div>
                
                <div className="text-left mb-8 flex-grow">
                  <div className="text-neutral-300 text-sm mb-4">Includes:</div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Platform access
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Library subset
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Basic JIT learning
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Up to 50 users
                    </li>
                  </ul>
                </div>
                
                <button className="w-full bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 mt-auto">
                  Start Pilot
                </button>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-600 transition-all duration-300 hover:scale-105 flex flex-col">
              <div className="text-center flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <div className="text-neutral-400 text-sm mb-6">Multi-BU, SSO/HRIS</div>
                <div className="text-4xl font-bold text-white mb-2">Custom</div>
                <div className="text-neutral-400 text-sm mb-8">pricing</div>
                
                <div className="text-left mb-8 flex-grow">
                  <div className="text-neutral-300 text-sm mb-4">Everything in Starter, plus:</div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Multi-BU support
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      SSO/HRIS integration
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Custom SLAs
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Advanced security
                    </li>
                    <li className="flex items-center text-white text-sm">
                      <svg className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Co-branded portals
                    </li>
                  </ul>
                </div>
                
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 mt-auto">
                  Talk to Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Integrations Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Seamless
              <span className="text-purple-600"> Integrations</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
              Connect LISA with your existing tools and workflows. Our platform integrates seamlessly with your favorite applications.
            </p>
          </div>

          {/* Integration Categories */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16">
              {/* HRIS/SSO Integration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="group">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-500 transition-colors duration-300">
                    HRIS/SSO
                    </h3>
                  <p className="text-gray-600 text-sm">
                    Single sign-on and human resource information system integrations
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                    {[
                      { name: "Azure AD", logo: "/logos/azure-ad-logo.svg" },
                      { name: "Okta", logo: "/logos/okta-logo.png" },
                      { name: "Google", logo: "/logos/google-logo.png" },
                      { name: "Workday", logo: "/logos/workday-logo.png" },
                      { name: "SAP", logo: "/logos/sap-logo.png" },
                      { name: "Zoho", logo: "/logos/zoho-logo.png" },
                      { name: "Darwinbox", logo: "/logos/darwinbox-logo.png" }
                    ].map((integration, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105 flex-shrink-0" style={{ minWidth: '120px' }}>
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="h-8 sm:h-10 object-contain mb-2"
                        />
                        <span className="text-xs font-medium text-gray-600 text-center whitespace-nowrap">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comms Integration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="group">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-500 transition-colors duration-300">
                    Comms
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Communication and collaboration platform integrations
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                    {[
                      { name: "Slack", logo: "/logos/slack-logo.png" },
                      { name: "Teams", logo: "/logos/teams-logo.png" },
                      { name: "Gmail", logo: "/logos/gmail-logo.png" }
                    ].map((integration, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105 flex-shrink-0" style={{ minWidth: '120px' }}>
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="h-8 sm:h-10 object-contain mb-2"
                        />
                        <span className="text-xs font-medium text-gray-600 text-center whitespace-nowrap">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CRM/Field Integration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="group">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-500 transition-colors duration-300">
                    CRM/Field
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Customer relationship management and field service integrations
                  </p>
                      </div>
                <div className="overflow-x-auto">
                  <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                    {[
                      { name: "Salesforce", logo: "/logos/salesforce-logo.png" },
                      { name: "Zoho CRM", logo: "/logos/zoho-crm-logo.webp" },
                      { name: "Freshsales", logo: "/logos/freshsales-logo.png" }
                    ].map((integration, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105 flex-shrink-0" style={{ minWidth: '120px' }}>
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="h-8 sm:h-10 object-contain mb-2"
                        />
                        <span className="text-xs font-medium text-gray-600 text-center whitespace-nowrap">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Integration */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="group">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-500 transition-colors duration-300">
                    Content
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Content management and collaboration platform integrations
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                    {[
                      { name: "Google Drive", logo: "/logos/googledrive-logo.svg" },
                      { name: "SharePoint", logo: "/logos/sharepoint-logo.png" },
                      { name: "Confluence", logo: "/logos/confluence-logo.png" }
                    ].map((integration, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:scale-105 flex-shrink-0" style={{ minWidth: '120px' }}>
                        <img 
                          src={integration.logo} 
                          alt={`${integration.name} logo`}
                          className="h-8 sm:h-10 object-contain mb-2"
                        />
                        <span className="text-xs font-medium text-gray-600 text-center whitespace-nowrap">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Security & Compliance Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Security & 
              <span className="text-purple-500"> Compliance</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              Enterprise-grade security and compliance features to protect your data and meet regulatory requirements
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Security Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SSO, RBAC, SCIM */}
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Identity & Access Management</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Single Sign-On (SSO), Role-Based Access Control (RBAC), and SCIM provisioning for seamless user management and security.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Data Protection */}
            <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      End-to-end encryption, data masking, and secure data storage with regular backups and disaster recovery.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Security Audits & Compliance */}
                <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Security Audits & Compliance</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      SOC 2 Type II, GDPR, HIPAA compliance with regular security audits and penetration testing.
                    </p>
                  </div>
                </div>
            </motion.div>

              {/* Data Residency Options */}
                <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Data Residency Options</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Choose your data center location with options for US, EU, and Asia-Pacific regions to meet local compliance requirements.
                    </p>
                  </div>
                </div>
          </motion.div>
            </div>
          </div>
            </div>
      </section>
            
      {/* Visual Breaker */}
      <VisualBreaker />

      {/* Ready to ditch legacy L&D Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to ditch legacy L&D?
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-8">
                Get <span className="text-purple-600">LISA AI</span> Now
              </p>
              
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book a Demo
              </Button>
              </div>
            </div>
          </motion.div>
        </div>
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
                <li><a href="#features" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#integrations" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#security" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">Security</a></li>
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

export default Index;
