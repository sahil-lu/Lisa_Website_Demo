import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Zap, Clock, TrendingUp, School, GraduationCap, BarChart3, Settings, Shield, Globe, Target, Lightbulb, Lock, PhoneCall, Calendar, BookOpen, Users2, BrainCircuit } from "lucide-react";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Enhanced3DCard from "@/components/Enhanced3DCard";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LISA",
  description: "AI-powered learning ecosystem",
  url: "https://lisaapp.in",
};

const University = () => {
  return (
    <main>
      <Helmet>
        <title>Lisa AI for Universities – Reimagine Classrooms with AI Tutors</title>
        <meta name="description" content="Lisa AI transforms academic learning into a 24x7, personalized experience – at scale." />
        <link rel="canonical" href="/university" />
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
              { href: "/", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#ideal-for", label: "Ideal For" },
              { href: "#demo", label: "Demo" }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-black text-muted-foreground hover:text-foreground transition-colors"
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

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="container mx-auto pt-16 pb-10 sm:pt-24 sm:pb-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Reimagine Classrooms with AI Tutors
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Lisa AI transforms academic learning into a 24x7, personalized experience – at scale.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Why Lisa for Higher Education Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-purple-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Why Lisa for Higher Education?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Support faculty with AI co-teachers", desc: "AI assistants help faculty focus on high-impact teaching" },
              { icon: GraduationCap, title: "Empower students with 24/7 learning help", desc: "Round-the-clock support for student queries and doubts" },
              { icon: BookOpen, title: "Generate content aligned to curriculum automatically", desc: "AI-generated content that matches your syllabus perfectly" },
              { icon: BarChart3, title: "Track individual and cohort performance in real time", desc: "Comprehensive analytics for student and class performance" },
              { icon: Settings, title: "Reduce admin load on academic staff", desc: "Automate administrative tasks and focus on teaching" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-[220px]">
                  <CardContent className="h-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
                        <item.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-black text-lg">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Key Features for Universities
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: GraduationCap, title: "AI Tutors", desc: "24/7 personalized academic support" },
              { icon: BrainCircuit, title: "Adaptive Learning", desc: "Content adjusts to student progress" },
              { icon: BarChart3, title: "Learning Analytics", desc: "Track student engagement and outcomes" },
              { icon: Settings, title: "Content Creation", desc: "Auto-generate courses and assessments" },
              { icon: Globe, title: "Multi-Language", desc: "Support for diverse student populations" },
              { icon: Shield, title: "Academic Integrity", desc: "Plagiarism detection and verification" }
            ].map((feature, index) => (
              <Enhanced3DCard key={feature.title} index={index} height="h-[220px]">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 mx-auto group-hover:bg-purple-200 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                  </div>
                  <h3 className="font-black mb-2 group-hover:text-purple-600 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{feature.desc}</p>
                </div>
              </Enhanced3DCard>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section id="ideal-for" className="py-16 sm:py-24 bg-gradient-to-b from-purple-50/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Ideal For
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: School, title: "Engineering & Management Colleges", desc: "Technical and business education institutions" },
              { icon: GraduationCap, title: "Private & Public Universities", desc: "Higher education institutions of all types" },
              { icon: TrendingUp, title: "Skill Development Programs", desc: "Professional development and certification programs" },
              { icon: Globe, title: "Online Degree / Diploma Platforms", desc: "Digital learning platforms and MOOCs" }
            ].map((institution, index) => (
              <motion.div
                key={institution.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-6 h-[240px]">
                  <CardContent className="h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 mx-auto">
                      <institution.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-black mb-2">{institution.title}</h3>
                    <p className="text-sm text-muted-foreground">{institution.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experience Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Student Experience
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Lightbulb, title: "Personalized doubt-solving", desc: "AI-powered Q&A for individual student needs" },
              { icon: BookOpen, title: "Concept explainer videos", desc: "Visual learning aids for complex topics" },
              { icon: BrainCircuit, title: "Daily quiz and practice engine", desc: "Regular assessment and reinforcement" },
              { icon: Users2, title: "AI mentor + peer learning recommendations", desc: "Combined AI and collaborative learning" }
            ].map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 h-[240px]">
                  <CardContent className="h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 mx-auto">
                      <experience.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-black mb-2">{experience.title}</h3>
                    <p className="text-sm text-muted-foreground">{experience.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Try Lisa Section */}
      <section id="demo" className="py-16 sm:py-24 bg-gradient-to-b from-background to-purple-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Try Lisa at Your Campus
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your AI-teaching journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="cta" size="xl" asChild>
                  <a href="#demo">Book a Campus Demo</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="xl" asChild>
                  <a href="#demo">Talk to Academic Partnerships Team</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default University; 