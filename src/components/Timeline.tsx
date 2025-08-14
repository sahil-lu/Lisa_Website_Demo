import React from "react";
import Reveal from "./Reveal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const items: TimelineItem[] = [
  { 
    year: "2025", 
    title: "100% Human Teaching", 
    description: "Traditional learning methods dominate" 
  },
  { 
    year: "2030", 
    title: "50% Human + 50% AI", 
    description: "Hybrid learning becomes the norm" 
  },
  { 
    year: "2035", 
    title: "100% AI-Powered Teaching", 
    description: "AI tutors educate at scale" 
  },
];

const Timeline: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...rest }) => {
  return (
    <section className={cn("w-full py-16 sm:py-24", className)} aria-label="Vision Timeline" {...rest}>
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Future of Learning is AI-First</h2>
            <p className="text-lg text-muted-foreground">We're on a mission to completely transform how the world learns.</p>
          </div>
        </Reveal>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600/30 via-purple-600 to-purple-700/30 transform -translate-x-1/2" />
          
          <div className="space-y-16">
            {items.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: idx === 1 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: idx === 1 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
                className={`relative flex items-center ${idx === 1 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot - positioned relative to the line */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full border-4 border-background shadow-lg z-10"
                  style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 + 0.3 }}
                  viewport={{ once: false }}
                />
                
                {/* Content card */}
                <div className={`w-5/12 ${idx === 1 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <motion.div 
                    className="bg-card/90 backdrop-blur border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    whileHover={{ y: -5 }}
                  >
                    {/* Year */}
                    <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700 mb-4">
                      {item.year}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <Reveal>
          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground">
              At Lisa, we're building AI tutors that can educate at scale, personalize at depth, and deliver learning outcomes better, faster, and smarter than ever before.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Timeline;
