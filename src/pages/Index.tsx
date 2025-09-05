import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, FileText, Smartphone, Users, Bot, Mic, PhoneCall, Newspaper, GraduationCap, Rocket, BrainCircuit, Activity, BookOpen, BarChart3, Settings, Shield, Zap, Target, Clock, TrendingUp, Award, Globe, Building2, School, Users2, Lightbulb, Lock, AlertTriangle, CheckCircle, Star, ArrowRight, Play, Calendar, Library, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

import EnhancedParticles from "@/components/EnhancedParticles";
import Logo3DCard from "@/components/Logo3DCard";
import Enhanced3DCard from "@/components/Enhanced3DCard";
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
        <title>Lisa AI – Corporate Learning Platform Backed by a University</title>
        <meta name="description" content="Corporate L&D that actually ships outcomes. Meet Lisa AI — your corporate learning platform backed by a university." />
        <link rel="canonical" href="/" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
      </Helmet>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          
          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-6 lg:gap-8">
            {[
              { href: "#main", label: "Lisa AI" },
                { href: "#problem", label: "The Problem" },
                { href: "#solution", label: "Our Solution" },
                { href: "#why-lisa", label: "Why Lisa AI" },
                { href: "#how-it-works", label: "How It Works" },
              { href: "#demo", label: "Book Demo" }
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 px-2 py-1 rounded-md hover:bg-muted/50"
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
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden sm:flex" asChild>
              <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
            <Button variant="outline" size="sm" className="sm:hidden" asChild>
              <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">Demo</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-50/20 to-blue-50/20 dark:from-background dark:via-purple-900/10 dark:to-blue-900/10" />
        
        {/* Animated Geometric Elements - Enhanced scroll animations */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute top-8 left-8 sm:top-20 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 border border-purple-300 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute top-16 right-8 sm:top-40 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 border border-blue-300 rotate-45"
            initial={{ scale: 0, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 405 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute bottom-16 left-8 sm:bottom-32 sm:left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-purple-300 rotate-12"
            initial={{ scale: 0, rotate: 12 }}
            whileInView={{ scale: 1, rotate: 372 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div 
            className="absolute bottom-8 right-8 sm:bottom-20 sm:right-20 w-10 h-10 sm:w-20 sm:h-20 border border-blue-300 rounded-full"
            initial={{ scale: 0, rotate: 0 }}
            whileInView={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl sm:max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main Content */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 px-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-gray-900 dark:text-white">Corporate L&D is </span>
              <span className="text-yellow-500 dark:text-yellow-400">DOOMED</span>
              <span className="text-gray-900 dark:text-white"> 🤯</span>
            </motion.h1>
            
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Meet Corporate L&D that actually ships outcomes
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Introducing Lisa AI — your corporate learning platform backed by a university
            </motion.p>
            
            {/* CTA Buttons - Responsive layout */}
            <motion.div 
              className="flex flex-col items-center gap-4 sm:gap-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Top row - responsive button layout */}
              <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <Button variant="cta" size="xl" className="basis-1/2 sm:basis-auto flex-1 sm:flex-none w-auto min-w-0 sm:min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-3 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal text-center" asChild>
                  <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">
                    Book a Demo
                  </a>
                </Button>
                <Button variant="cta" size="xl" className="basis-1/2 sm:basis-auto flex-1 sm:flex-none w-auto min-w-0 sm:min-w-[200px] h-12 sm:h-14 text-sm sm:text-lg px-3 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal text-center" asChild>
                  <a href="/content-library">
                    Explore 110+ Courses Library
                  </a>
                </Button>
              </div>
              
              {/* Bottom row - single centered button */}
              <div className="flex justify-center w-full">
                <Button variant="outline" size="xl" className="w-full sm:w-auto min-w-[250px] sm:min-w-[280px] h-12 sm:h-14 text-base sm:text-lg border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300" asChild>
                  <a href="#how-it-works">
                    Create a Course with AI Instantly
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-background to-red-50/30 dark:to-red-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-red-600 dark:text-red-400"
                    initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              The Problem (Why change?)
            </motion.h2>
                  <motion.p
              className="text-base sm:text-lg text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
              Current corporate L&D is broken. Here's what's holding you back:
            </motion.p>
          </motion.div>
          
            <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { 
                icon: AlertTriangle, 
                title: "Endless recorded content", 
                description: "Hours of boring videos that employees skip through",
                color: "red"
              },
              { 
                icon: AlertTriangle, 
                title: "Foreign-author content", 
                description: "Generic content that misses your organizational context",
                color: "red"
              },
              { 
                icon: AlertTriangle, 
                title: "SCORM/xAPI packaging pain", 
                description: "Technical headaches that slow down deployment",
                color: "red"
              },
              { 
                icon: AlertTriangle, 
                title: "Low adoption & unclear impact", 
                description: "Scattered reporting, unclear ROI, poor engagement",
                color: "red"
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-red-200/40 dark:border-red-800/40 hover:bg-white/30 dark:hover:bg-gray-800/40 group"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03, rotateY: 2 }}
              whileTap={{ scale: 0.98 }}
            >
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                <motion.div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <problem.icon className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400" />
                </motion.div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section id="solution" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-red-50/30 to-green-50/30 dark:from-red-900/10 dark:to-green-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-600 dark:text-green-400"
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
              Our Solution
            </motion.h2>
                  <motion.p
              className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
              Introducing Lisa AI — your corporate learning AI.
                  </motion.p>
            <motion.p 
              className="text-base sm:text-lg text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
              Build, deliver, and track learning that moves business metrics
            </motion.p>
            </motion.div>

            <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { 
                icon: Library, 
                title: "110+ Ready Courses", 
                description: "Across tech, business, and workplace skills",
                color: "green"
              },
              { 
                icon: Sparkles, 
                title: "Create with AI", 
                description: "From topic to quizzes in minutes with your org context",
                color: "green"
              },
              { 
                icon: Smartphone, 
                title: "Mobile + Desktop", 
                description: "Seamless learning on any device",
                color: "green"
              }
            ].map((feature, index) => (
                  <motion.div
                key={feature.title}
                                                className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-green-200/40 dark:border-green-800/40 text-center hover:bg-white/30 dark:hover:bg-gray-800/40 group"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03, rotateY: 2 }}
              whileTap={{ scale: 0.98 }}
            >
                <motion.div 
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600 dark:text-green-400" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                  </motion.div>
                ))}
                </motion.div>
                
          {/* Cost Section */}
                <motion.div 
            className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800 max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Unbeatable Cost
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              We will operate in your budgets
            </p>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4 break-words whitespace-normal leading-snug">
              Rs. 200/month/<wbr/>Employee
              </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Just pay Rs.200/- extra and make them more productive – we believe everyone needs some personal attention and care to perform the best
            </p>
            </motion.div>
        </div>
      </section>

      {/* Why Lisa AI Section */}
      <section id="why-lisa" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-green-50/30 to-purple-50/30 dark:from-green-900/10 dark:to-purple-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              Why Lisa AI
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Partnership Card */}
                        <motion.div 
              className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-purple-200/40 dark:border-purple-800/40 hover:bg-white/30 dark:hover:bg-gray-800/40 group"
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03, rotateY: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-4 sm:mb-6">
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Building2 className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-600 dark:text-purple-400" />
          </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  Deep Partnerships
                </h3>
                  </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p>We are deeply partnered with <strong>ITM Group of Institutions</strong> (3 universities in India) & <strong>LetsUpgrade.in</strong></p>
                <p>Optionally offer Degrees, NSDC certifications, and Micro-credits through our ecosystem</p>
                <p>Build a talent pipeline: we can supply trained employees directly to your company</p>
                </div>
              </motion.div>
              
            {/* The Big Unlock Card */}
          <motion.div 
              className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-purple-200/40 dark:border-purple-800/40 hover:bg-white/30 dark:hover:bg-gray-800/40 group"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03, rotateY: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center mb-4 sm:mb-6">
              <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Star className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  The Big Unlock
                    </h3>
                    </div>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <p><strong>You're not just subscribing to an LMS — you're subscribing to a university.</strong></p>
                <p>Launch your own learning university inside your company.</p>
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Talent & Hiring</h4>
                  <p className="text-sm">Learners who enroll in your programs can be hired directly into your teams.</p>
                  <p className="text-sm mt-1">Why hire freshers when you can hire directly from your own trained pipeline?</p>
                  </div>
                </div>
              </motion.div>
          </motion.div>
          
          {/* Future Vision */}
          <motion.div 
            className="mt-16 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 italic">
              This is the future we are building along with LetsUpgrade.in and you can launch your Learning Academy for students to be part of online and be prepared for your job before they are even onboarded :)
            </p>
          </motion.div>
        </div>
      </section>

            {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-purple-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              How It Works (3 steps)
            </motion.h2>
            </motion.div>
            
          <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  step: "1",
                  title: "Pick from 110+ courses or start from a topic", 
                  icon: "📚",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                  description: "Choose from our extensive library of pre-built courses or create custom content tailored to your organization's specific needs.",
                  features: ["110+ pre-built courses", "Custom topic creation", "Industry-specific content", "Expert-curated materials"]
                },
                {
                  step: "2",
                  title: "Use AI to generate curriculum, content, and assessments", 
                  icon: "🤖",
                  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                  description: "Our AI technology automatically creates comprehensive curriculum, engaging content, and relevant assessments based on your requirements.",
                  features: ["AI-powered curriculum generation", "Automated assessment creation", "Personalized learning paths", "Real-time content adaptation"]
                },
                {
                  step: "3",
                  title: "Launch to your teams with instant dashboards for adoption and impact", 
                  icon: "📊",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                  description: "Deploy your learning programs instantly and track team engagement, progress, and business impact through comprehensive analytics.",
                  features: ["Real-time analytics dashboard", "Progress tracking", "ROI measurement", "Team performance insights"]
                }
              ].map((step, index) => (
                  <motion.div
                  key={step.step}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >

                    
                  {/* Step Card - Course card style */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border h-[480px] flex flex-col min-w-[280px] group relative">
                    
                    {/* Step Number Badge - Top right corner like course category */}
                    <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium z-10">
                      Step {step.step}
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-gray-700">
                      <img 
                        src={step.image} 
                        alt={`Step ${step.step}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        style={{ 
                          objectPosition: 'center center',
                          objectFit: 'cover'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    
                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors line-clamp-2 text-sm leading-tight min-h-[3rem]">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-3 flex-1 min-h-[4.5rem]">
                        {step.description}
                      </p>
                      
                      {/* Features as Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {step.features.slice(0, 3).map((feature, featureIndex) => (
                          <span key={featureIndex} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                            {feature}
                          </span>
                        ))}
                    </div>
                    

                      </div>
                      </div>


                  </motion.div>
                ))}
              </motion.div>
            

        </div>
      </section>

      {/* Trust & Scale Section */}
                      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-background to-blue-50/30 dark:to-blue-900/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
              className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Trust & Scale
              </motion.h2>
              </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
            {[
              { 
                icon: Shield, 
                title: "Built for enterprise rollouts", 
                description: "Scalable architecture designed for large organizations"
              },
              { 
                icon: CheckCircle, 
                title: "Proven in universities and corporate environments", 
                description: "Battle-tested across diverse learning environments"
              },
              { 
                icon: Users, 
                title: "Backed by ITM's academic and industry network", 
                description: "Strong partnerships with educational institutions"
              }
            ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-blue-200/40 dark:border-blue-800/40 text-center hover:bg-white/30 dark:hover:bg-gray-800/40 group"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03, rotateY: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                <motion.div 
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                    </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
            </p>
                </motion.div>
              ))}
          </motion.div>
            </div>
      </section>
            
      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-blue-50/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
            className="text-center max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to launch your learning universe?
            </motion.h2>
            
            <motion.div 
              className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-6 mt-8 sm:mt-12 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="cta" size="xl" className="basis-1/2 sm:basis-auto flex-1 sm:flex-none w-auto px-3 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal text-center" asChild>
                <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">
                  Book a Demo
                    </a>
                  </Button>
              <Button variant="cta" size="xl" className="basis-1/2 sm:basis-auto flex-1 sm:flex-none w-auto px-3 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-normal text-center" asChild>
                <a href="/content-library">
                  Explore Course Library
                    </a>
                  </Button>
            </motion.div>
            <motion.div 
              className="flex justify-center items-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="outline" size="xl" className="border-2 border-purple-300 dark:border-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300" asChild>
                <a href="#how-it-works">
                  Create with AI Now
                </a>
              </Button>
            </motion.div>
            </motion.div>
        </div>
      </section>



      {/* Book Demo Section */}
      <section id="demo" className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              Book a Demo
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Curious how Lisa AI can transform learning in your organization?
            </motion.p>
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

      {/* Footer with Microcopy */}
      <motion.footer 
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.p 
            className="text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Lisa AI is part of the LetsUpgrade EdTech Pvt Ltd. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </main>
  );
};

export default Index;