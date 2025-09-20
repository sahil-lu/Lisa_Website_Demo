import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Zap, Clock, TrendingUp, Building2, GraduationCap, BarChart3, Settings, Shield, Globe, Target, Lightbulb, Lock, PhoneCall, Calendar, BookOpen, Users2, BrainCircuit } from "lucide-react";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Enhanced3DCard from "@/components/Enhanced3DCard";
import StickyTopBar from "@/components/StickyTopBar";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LISA",
  description: "AI-powered learning ecosystem",
  url: "https://lisaapp.in",
};

const Corporate = () => {
  return (
    <main>
      <Helmet>
        <title>Lisa AI for Corporate L&D – AI-Powered Learning & Development</title>
        <meta name="description" content="Lisa AI helps L&D leaders automate, personalize, and scale employee training with ease." />
        <link rel="canonical" href="/corporate" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Sticky Top Bar */}
      <StickyTopBar />

      {/* Navigation Header */}
      <nav className="sticky top-[40px] z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/lisa-logo.svg" alt="LISA Logo" className="h-8 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "#features", label: "Features" },
              { href: "#use-cases", label: "Use Cases" },
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
              AI-Powered Learning & Development for Modern Workforces
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Lisa AI helps L&D leaders automate, personalize, and scale employee training with ease.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Why Lisa for L&D Section */}
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
              Why Lisa for L&D?
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Reduce content creation time by 80%", desc: "Automate course generation and content creation" },
              { icon: Clock, title: "Deliver microlearning in your employee's workflow", desc: "Seamless integration with daily work processes" },
              { icon: TrendingUp, title: "Drive measurable skill development with AI mentors", desc: "Track progress and outcomes with precision" },
              { icon: Target, title: "Customize learning paths for roles, departments, or KPIs", desc: "Personalized training for every team member" }
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

      {/* Top Features Section */}
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
              Top Features for Corporate Training
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Scalable Training", desc: "Train thousands of employees simultaneously" },
              { icon: Zap, title: "AI-Powered Learning", desc: "Personalized content for each learner" },
              { icon: Clock, title: "24/7 Availability", desc: "Learning never stops with AI tutors" },
              { icon: TrendingUp, title: "Performance Analytics", desc: "Track progress and ROI metrics" },
              { icon: Shield, title: "Enterprise Security", desc: "SOC2 compliant data protection" },
              { icon: Globe, title: "Global Deployment", desc: "Multi-language and regional support" }
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

      {/* Use Cases Section */}
      <section id="use-cases" className="py-16 sm:py-24 bg-gradient-to-b from-purple-50/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Use Cases
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Target, title: "Onboarding & Orientation", desc: "Streamline new employee training and orientation processes" },
              { icon: TrendingUp, title: "Upskilling & Reskilling", desc: "Help employees develop new skills and adapt to changing roles" },
              { icon: Lightbulb, title: "Leadership & Communication Skills", desc: "Develop essential leadership and communication competencies" },
              { icon: Shield, title: "Compliance & Policy Training", desc: "Ensure regulatory compliance and policy understanding" },
              { icon: Globe, title: "Remote Workforce Enablement", desc: "Support distributed teams with effective remote learning" }
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="text-center p-6 h-[240px]">
                  <CardContent className="h-full flex flex-col justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4 mx-auto">
                      <useCase.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-black mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
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
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Book a Custom Demo
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let us show you how Lisa AI can transform your L&D.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="cta" size="xl" asChild>
                  <a href="#demo">Schedule a Demo</a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="xl" asChild>
                  <a href="#demo">Talk to Sales</a>
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

export default Corporate; 