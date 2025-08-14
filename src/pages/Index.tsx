import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileText, Smartphone, Users, Bot, Mic, PhoneCall, Newspaper, GraduationCap, Rocket, BrainCircuit, Activity, BookOpen, BarChart3, Settings, Shield, Zap, Target, Clock, TrendingUp, Award, Globe, Building2, School, Users2, Lightbulb, Lock } from "lucide-react";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

import EnhancedParticles from "@/components/EnhancedParticles";
import Logo3DCard from "@/components/Logo3DCard";
import Enhanced3DCard from "@/components/Enhanced3DCard";
import Squares from "@/components/Squares";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

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
  return (
    <main>
      <Helmet>
        <title>Lisa AI – Building AI Tutors for the World</title>
        <meta name="description" content="From Human-Led to AI-Led Learning. Experience the Future of Education, Today." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lisa-logo.svg" alt="LISA Logo" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "#main", label: "Lisa AI" },
              { href: "#use-case", label: "Use Cases" },
              { href: "#users", label: "Trusted By" },
              { href: "#features", label: "Features" },
              { href: "#demo", label: "Book Demo" }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
              <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
          </div>
        </div>
      </nav>



      {/* Content Section - Second Page */}
      <section id="main" className="relative py-24 sm:py-32 bg-gradient-to-b from-background to-purple-50/30 min-h-screen flex items-center justify-center overflow-hidden">
        <Squares 
          speed={1} 
          squareSize={60}
          direction='diagonal'
        />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background rectangle that adapts to theme */}
            <div className="absolute inset-0 -m-28 rounded-3xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-2 border-gray-300/80 dark:border-gray-600/80 shadow-2xl z-0" />
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Lisa AI – Building AI Tutors for the World
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-muted-foreground relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              From Human-Led to AI-Led Learning. Experience the Future of Education, Today.
            </motion.p>
            <motion.div 
              className="mt-8 flex items-center justify-center relative z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" size="xl" asChild>
                <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">Book a Demo</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Use Case Section - Third Page */}
      <section id="use-case" className="py-24 sm:py-32 bg-gradient-to-b from-background to-purple-50/30 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              What's Your Use Case?
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your learning environment and see how Lisa AI adapts:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 max-w-[90rem] mx-auto">
            {/* Corporate L&D Card */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 min-h-[350px] lg:min-h-[420px] w-full"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 1,
                z: 20
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image on the left */}
                <motion.div 
                  className="lg:w-2/5 h-64 lg:h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/images/professionals-corporate.webp" 
                    alt="Corporate professionals in office environment"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Content on the right */}
                <motion.div 
                  className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    For Corporate L&D
                  </motion.h3>
                  
                  <motion.p
                    className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Automate, personalize, and scale employee training with AI-powered learning solutions.
                  </motion.p>
                  
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="cta" size="xl" asChild className="w-full lg:w-auto text-lg px-8 py-4">
                      <a href="/corporate">Learn More</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* University Education Card */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 min-h-[350px] lg:min-h-[420px] w-full"
              whileHover={{ 
                scale: 1.02,
                rotateY: -2,
                rotateX: 1,
                z: 20
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image on the left */}
                <motion.div 
                  className="lg:w-2/5 h-64 lg:h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/images/university-students.webp" 
                    alt="University students on campus"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Content on the right */}
                <motion.div 
                  className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    For Universities / Higher Education
                  </motion.h3>
                  
                  <motion.p
                    className="text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Transform academic learning into a 24x7, personalized experience at scale.
                  </motion.p>
                  
                  <motion.div 
                    className="mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="cta" size="xl" asChild className="w-full lg:w-auto text-lg px-8 py-4">
                      <a href="/university">Learn More</a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spacer for clear page separation */}
      <div className="h-32 bg-background"></div>

      {/* Vision Timeline Section */}
      <Timeline />

      {/* Who Uses Lisa Section */}
      <section id="users" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Trusted by Forward-Thinking Institutions & Corporates
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered learning solutions are being used by:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Building2, title: "Enterprises", desc: "Modernizing their L&D" },
              { icon: School, title: "Universities", desc: "Reimagining classrooms" },
              { icon: Zap, title: "Bootcamps", desc: "Delivering faster upskilling" },
              { icon: Users2, title: "Coaching Institutes", desc: "Scaling content and assessments" }
            ].map((item, index) => (
              <Enhanced3DCard key={item.title} index={index} height="h-[240px]">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.desc}</p>
                </div>
              </Enhanced3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-purple-50/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Core Features of Lisa AI
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: GraduationCap, title: "AI Tutors", desc: "Teach, answer, and assess learners across subjects" },
              { icon: BrainCircuit, title: "Multimodal Learning", desc: "Text, video, voice – choose your preferred format" },
              { icon: BarChart3, title: "Analytics Dashboard", desc: "Track learner progress, engagement, and outcomes" },
              { icon: Settings, title: "Content Creation Engine", desc: "Auto-generate courses, quizzes, and even PPTs" },
              { icon: Globe, title: "Integrations", desc: "Works with your LMS, HRMS, CRM, and more" },
              { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade data security and scalability" }
            ].map((feature, index) => (
              <Enhanced3DCard key={feature.title} index={index} height="h-[220px]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.desc}</p>
              </Enhanced3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section id="trusted-companies" className="py-16 sm:py-24 bg-gradient-to-b from-background to-purple-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Trusted by Leading Enterprises
            </h2>
            <p className="text-lg text-muted-foreground">
              Our AI-powered learning solutions are trusted by forward-thinking organizations worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: "Raymond", src: "/logos/raymond.png", description: "The Complete Man since 1925" },
              { name: "Kotak", src: "/logos/kotak.png", description: "Kotak Mahindra Bank" },
              { name: "ICICI", src: "/logos/icici.png", description: "ICICI Bank" },
              { name: "Reliance Jewels", src: "/logos/reliance-jewels.png", description: "Reliance Jewels" },
              { name: "Titan Eye+", src: "/logos/titan-eyeplus.png", description: "TITAN EYE+" },
              { name: "Rich's", src: "/logos/richs.png", description: "RICH'S" },
              { name: "Eisai", src: "/logos/eisai.png", description: "Eisai Co., Ltd." },
              { name: "Hinduja Hospitals", src: "/logos/hinduja-hospitals.png", description: "Hinduja Hospitals" },
            ].map((company, index) => (
              <Logo3DCard
                key={company.name}
                name={company.name}
                src={company.src}
                description={company.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Book Demo Section */}
      <section id="demo" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Book a Demo
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Curious how Lisa AI can transform learning in your organization or institution?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="cta" size="xl" asChild>
                <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">Schedule a Demo</a>
              </Button>
            </motion.div>
            <p className="text-sm text-muted-foreground mt-4">
              Meet with a product expert and get a custom walkthrough.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;