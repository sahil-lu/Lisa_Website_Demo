import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Clock, Target, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseLibraryCarousel = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      title: "Emotional Agility at Work",
      image: "/final/emotional-agility-at-work.png",
      duration: "30 mins",
      targetAudience: "All employees",
      certificate: "Available",
      tags: ["Emotional Intelligence", "Professional Development", "Corporate Training"]
    },
    {
      title: "Building High-Trust Teams",
      image: "/final/building-high-trust-teams.png",
      duration: "30 mins",
      targetAudience: "Managers, team leads",
      certificate: "Available",
      tags: ["Leadership", "Professional Development", "Corporate Training"]
    },
    {
      title: "Constructive Confrontation: How to Disagree Respectfully",
      image: "/final/Constructive_Confrontation_How_to_Disagree_Respectfully.png",
      duration: "30 mins",
      targetAudience: "All employees",
      certificate: "Available",
      tags: ["Emotional Intelligence", "Professional Development", "Corporate Training"]
    },
    {
      title: "Leading Without a Title",
      image: "/final/leading-without-a-title.png",
      duration: "30 mins",
      targetAudience: "Aspiring leaders",
      certificate: "Available",
      tags: ["Leadership", "Professional Development", "Corporate Training"]
    },
    {
      title: "Cultural Intelligence (CQ): Thrive in Diverse Teams",
      image: "/final/cultural-intelligence-cq-thrive-in-diverse-teams.png",
      duration: "30 mins",
      targetAudience: "Global workforce",
      certificate: "Available",
      tags: ["Cultural Intelligence", "Professional Development", "Corporate Training"]
    },
    {
      title: "Delegation Mastery: Getting Work Done Through Others",
      image: "/final/delegation-mastery-getting-work-done-through-other.png",
      duration: "30 mins",
      targetAudience: "Managers, supervisors",
      certificate: "Available",
      tags: ["Leadership", "Professional Development", "Corporate Training"]
    },
    {
      title: "Building Emotional Resilience in High-Stress Roles",
      image: "/final/building-emotional-resilience-in-high-stress-roles.png",
      duration: "30 mins",
      targetAudience: "High-pressure roles",
      certificate: "Available",
      tags: ["Emotional Intelligence", "Professional Development", "Corporate Training"]
    },
    {
      title: "Inclusive Language in the Workplace",
      image: "/final/inclusive-language-in-the-workplace.png",
      duration: "30 mins",
      targetAudience: "All employees",
      certificate: "Available",
      tags: ["Emotional Intelligence", "Professional Development", "Corporate Training"]
    },
    {
      title: "Collaborative Decision-Making",
      image: "/final/collaborative-decision-making.png",
      duration: "30 mins",
      targetAudience: "Teams, project managers",
      certificate: "Available",
      tags: ["Leadership", "Professional Development", "Corporate Training"]
    },
    {
      title: "Building Allyship: From Bystander to Upstander",
      image: "/final/building-allyship-from-bystander-to-upstander.png",
      duration: "30 mins",
      targetAudience: "All employees",
      certificate: "Available",
      tags: ["Diversity & Inclusion", "Professional Development", "Corporate Training"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-purple-600 dark:text-purple-400">
            500+ Course Library & Growing
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
            500+ courses today, updated weekly.
          </p>
          {/* Domain Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              "Communication",
              "Leadership", 
              "Digital",
              "AI Tools",
              "Retail Ops",
              "Service Excellence",
              "Compliance",
              "And More"
            ].map((domain, index) => (
              <button
                key={domain}
                onClick={() => {
                  navigate('/content-library');
                  // Scroll to top after navigation
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg cursor-pointer"
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Course Carousel */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-marquee-slow whitespace-nowrap w-full">
            {/* First set of courses */}
            {courses.map((course, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-4">
                <div className="bg-neutral-100 dark:bg-neutral-900 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 h-[480px] flex flex-col w-[300px]">
                  {/* Course Thumbnail */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-50/50 dark:bg-gray-800/50">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        objectPosition: 'center center',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center";
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-black">
                      {index % 2 === 0 ? 'Emotional Intelligence' : 'Leadership'}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {index % 2 === 0 ? 'Beginner' : 'Intermediate'}
                    </div>
                  </div>
                  
                  {/* Course Info */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-black text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-600 transition-colors text-sm leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      Master {course.title.toLowerCase()} for professional success and career growth.
                    </p>
                    
                    {/* Tags */}
                    <div className="mb-4">
                      {course.tags.slice(0, 3).map((tag, tagIndex) => (
                        <div key={tagIndex} className="text-sm text-gray-900 dark:text-white font-medium mb-1">
                          {tag}
                        </div>
                      ))}
                    </div>
                    
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        <span className="text-xs">{course.targetAudience.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        <span className="text-xs">{course.certificate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate for seamless loop */}
            {courses.map((course, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-4">
                <div className="bg-neutral-100 dark:bg-neutral-900 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 h-[480px] flex flex-col w-[300px]">
                  {/* Course Thumbnail */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-50/50 dark:bg-gray-800/50">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        objectPosition: 'center center',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center";
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-black">
                      {index % 2 === 0 ? 'Emotional Intelligence' : 'Leadership'}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {index % 2 === 0 ? 'Beginner' : 'Intermediate'}
                    </div>
                  </div>
                  
                  {/* Course Info */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-black text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-600 transition-colors text-sm leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      Master {course.title.toLowerCase()} for professional success and career growth.
                    </p>
                    
                    {/* Tags */}
                    <div className="mb-4">
                      {course.tags.slice(0, 3).map((tag, tagIndex) => (
                        <div key={tagIndex} className="text-sm text-gray-900 dark:text-white font-medium mb-1">
                          {tag}
                        </div>
                      ))}
                    </div>
                    
                    {/* Course Stats */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto pt-2">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        <span className="text-xs">{course.targetAudience.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        <span className="text-xs">{course.certificate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseLibraryCarousel;
