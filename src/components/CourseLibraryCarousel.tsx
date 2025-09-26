import React from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Award } from "lucide-react";

const CourseLibraryCarousel = () => {
  const navigate = useNavigate();

  // Course data from details.json
  const courses = [
    {
      title: "Emotional Agility at Work",
      image: "/final/emotional-agility-at-work.png",
      targetAudience: "All employees, especially high-pressure roles",
      duration: "30 mins",
      learningObjectives: "Adapt emotions to different situations; Build flexibility in emotional responses; Reduce stress from change; Stay effective under pressure.",
      certificate: "Available",
      category: "Emotional Intelligence"
    },
    {
      title: "Building Emotional Resilience in High-Stress Roles",
      image: "/final/building-emotional-resilience-in-high-stress-roles.png",
      targetAudience: "Employees in high-pressure jobs (healthcare, customer service, finance)",
      duration: "30 mins",
      learningObjectives: "Recognize stress triggers; Build coping mechanisms; Develop resilience strategies; Maintain productivity under pressure.",
      certificate: "Available",
      category: "Emotional Intelligence"
    },
    {
      title: "Navigating Office Politics with Emotional Intelligence",
      image: "/final/navigating-office-politics-with-emotional-intelligence.png",
      targetAudience: "Mid-level employees, managers",
      duration: "30 mins",
      learningObjectives: "Understand organizational dynamics; Build alliances without manipulation; Use EI to resolve conflicts; Maintain integrity while navigating politics.",
      certificate: "Available",
      category: "Emotional Intelligence"
    },
    {
      title: "Preventing and Managing Team Burnout",
      image: "/final/preventing-and-managing-team-burnout.png",
      targetAudience: "Managers, team leads, HR professionals",
      duration: "30 mins",
      learningObjectives: "Recognize signs of burnout; Support employee well-being; Balance workloads effectively; Implement prevention strategies.",
      certificate: "Available",
      category: "Leadership"
    },
    {
      title: "Constructive Confrontation: How to Disagree Respectfully",
      image: "/final/constructive-confrontation-how-to-disagree-respectfully.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Express disagreement respectfully; Use facts vs. emotions; Apply assertive communication; Maintain healthy workplace relationships.",
      certificate: "Available",
      category: "Communication"
    },
    {
      title: "Leading Without a Title",
      image: "/final/leading-without-a-title.png",
      targetAudience: "Aspiring leaders, individual contributors",
      duration: "30 mins",
      learningObjectives: "Influence without authority; Build trust across teams; Take initiative in projects; Demonstrate leadership behaviors daily.",
      certificate: "Available",
      category: "Leadership"
    },
    {
      title: "Building High-Trust Teams",
      image: "/final/building-high-trust-teams.png",
      targetAudience: "Managers, team leads",
      duration: "30 mins",
      learningObjectives: "Create psychological safety; Build transparency; Strengthen accountability; Foster long-term trust.",
      certificate: "Available",
      category: "Leadership"
    },
    {
      title: "Situational Leadership: Adapting Your Style",
      image: "/final/situational-leadership-adapting-your-style.png",
      targetAudience: "Managers, supervisors",
      duration: "30 mins",
      learningObjectives: "Understand situational leadership model; Adapt style to team maturity; Balance directive vs. supportive leadership; Improve team results.",
      certificate: "Available",
      category: "Leadership"
    },
    {
      title: "Delegation Mastery: Getting Work Done Through Others",
      image: "/final/delegation-mastery-getting-work-done-through-others.png",
      targetAudience: "Managers, supervisors",
      duration: "30 mins",
      learningObjectives: "Apply effective delegation techniques; Balance task ownership; Empower employees; Improve team productivity.",
      certificate: "Available",
      category: "Leadership"
    },
    {
      title: "Collaborative Decision-Making",
      image: "/final/collaborative-decision-making.png",
      targetAudience: "Teams, project managers",
      duration: "30 mins",
      learningObjectives: "Apply group decision-making models; Balance diverse perspectives; Avoid groupthink; Build consensus effectively.",
      certificate: "Available",
      category: "Leadership"
    },
    {
      title: "Inclusive Language in the Workplace",
      image: "/final/inclusive-language-in-the-workplace.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Recognize importance of inclusive language; Avoid biased terms; Communicate with respect; Support D&I initiatives.",
      certificate: "Available",
      category: "Diversity & Inclusion"
    },
    {
      title: "Cultural Intelligence (CQ): Thrive in Diverse Teams",
      image: "/final/cultural-intelligence-cq-thrive-in-diverse-teams.png",
      targetAudience: "Global workforce, multicultural teams",
      duration: "30 mins",
      learningObjectives: "Build cultural awareness; Adapt behavior across cultures; Avoid misunderstandings; Improve global collaboration.",
      certificate: "Available",
      category: "Cultural Intelligence"
    },
    {
      title: "Understanding Gender Sensitivity at Work",
      image: "/final/understanding-gender-sensitivity-at-work.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Understand gender biases; Promote gender equity; Apply respectful communication; Build inclusive environments.",
      certificate: "Available",
      category: "Diversity & Inclusion"
    },
    {
      title: "Neurodiversity Awareness in the Workplace",
      image: "/final/neurodiversity-awareness-in-the-workplace.png",
      targetAudience: "All employees, HR professionals",
      duration: "30 mins",
      learningObjectives: "Understand neurodiverse conditions (ADHD, autism, dyslexia); Support inclusivity; Apply workplace accommodations; Reduce stigma.",
      certificate: "Available",
      category: "Diversity & Inclusion"
    },
    {
      title: "Building Allyship: From Bystander to Upstander",
      image: "/final/building-allyship-from-bystander-to-upstander.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Recognize discrimination; Intervene constructively; Support colleagues facing bias; Build allyship behaviors.",
      certificate: "Available",
      category: "Diversity & Inclusion"
    },
    {
      title: "Beat Procrastination: Science-Backed Techniques",
      image: "/final/beat-procrastination-science-backed-techniques.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Identify root causes of procrastination; Apply behavioral strategies; Use time management tools; Improve consistency.",
      certificate: "Available",
      category: "Professional Development"
    },
    {
      title: "Developing Grit: Sustained Effort Over Time",
      image: "/final/developing-grit-sustained-effort-over-time.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Build perseverance in challenges; Develop long-term motivation; Balance discipline with passion; Achieve long-term goals.",
      certificate: "Available",
      category: "Professional Development"
    },
    {
      title: "Deep Work: Managing Distractions & Focus",
      image: "/final/deep-work-managing-distractions-focus.png",
      targetAudience: "Knowledge workers, remote employees",
      duration: "30 mins",
      learningObjectives: "Apply deep work principles; Eliminate distractions; Maximize focus hours; Increase quality of output.",
      certificate: "Available",
      category: "Professional Development"
    },
    {
      title: "The Power of Habit: Create Lasting Change",
      image: "/final/the-power-of-habit-create-lasting-change.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "Understand habit loops; Replace bad habits with productive ones; Use triggers and rewards; Build long-term success behaviors.",
      certificate: "Available",
      category: "Professional Development"
    },
    {
      title: "Reframing Failure: Mindset for Growth & Resilience",
      image: "/final/reframing-failure-mindset-for-growth-resilience.png",
      targetAudience: "All employees",
      duration: "30 mins",
      learningObjectives: "See failure as feedback; Build resilience; Learn from mistakes; Maintain motivation after setbacks.",
      certificate: "Available",
      category: "Professional Development"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-background">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div 
            onClick={() => {
              navigate('/content-library');
              // Scroll to top after navigation
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-neutral-950">
            500+ Course Library & Growing
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4">
            500+ courses today, updated weekly.
          </p>
        </div>
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
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Course Carousel */}
        <div className="relative overflow-hidden w-full pb-8">
          <div className="flex animate-marquee-slow">
            {/* First set of courses */}
            {courses.map((course, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-3">
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[320px] h-[520px] flex flex-col border border-gray-100">
                  {/* Course Thumbnail */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={course.image} 
                      alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center";
                      }}
                    />
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {course.category}
                        </Badge>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                    </div>
                  </div>
                  
                    {/* Course Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      {/* Title */}
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors text-lg leading-tight line-clamp-2">
                      {course.title}
                    </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 flex-1 leading-relaxed line-clamp-3">
                        {course.learningObjectives}
                      </p>
                      
                      {/* Target Audience */}
                      <div className="flex items-start gap-2 mb-3">
                        <Users className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-500 line-clamp-2">
                          {course.targetAudience}
                        </span>
                      </div>
                      
                      {/* Certificate */}
                      <div className="flex items-center pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-green-500" />
                          <span className="text-xs font-medium text-green-600">
                            {course.certificate}
                          </span>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {courses.map((course, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-3">
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 w-[320px] h-[520px] flex flex-col border border-gray-100">
                  {/* Course Thumbnail */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100">
                    <img 
                      src={course.image} 
                      alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center";
                      }}
                    />
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                          {course.category}
                        </Badge>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                    </div>
                  </div>
                  
                    {/* Course Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      {/* Title */}
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors text-lg leading-tight line-clamp-2">
                      {course.title}
                    </h3>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3 flex-1 leading-relaxed line-clamp-3">
                        {course.learningObjectives}
                      </p>
                      
                      {/* Target Audience */}
                      <div className="flex items-start gap-2 mb-3">
                        <Users className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-500 line-clamp-2">
                          {course.targetAudience}
                        </span>
                      </div>
                      
                      {/* Certificate */}
                      <div className="flex items-center pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                          <Award className="h-4 w-4 text-green-500" />
                          <span className="text-xs font-medium text-green-600">
                            {course.certificate}
                          </span>
                      </div>
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