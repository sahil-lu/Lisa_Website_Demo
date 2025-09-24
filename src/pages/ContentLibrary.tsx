import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Users, Star, BookOpen, ArrowLeft, Target, Award, Video } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import StickyTopBar from "@/components/StickyTopBar";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  targetAudience: string;
  learningOutcomes: string[];
  deliveryFormat: string;
  assessment: string;
  certificate: string;
  image: string;
  tags: string[];
}

// Real course data from the JSON file
const courses: Course[] = [
  {
    "id": 1,
    "title": "Emotional Agility at Work",
    "description": "Master emotional agility at work for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially high-pressure roles",
    "learningOutcomes": [
      "Adapt emotions to different situations",
      "Build flexibility in emotional responses",
      "Reduce stress from change",
      "Stay effective under pressure."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/emotional-agility-at-work.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 2,
    "title": "Building Emotional Resilience in High-Stress Roles",
    "description": "Master building emotional resilience in high-stress roles for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Employees in high-pressure jobs (healthcare, customer service, finance)",
    "learningOutcomes": [
      "Recognize stress triggers",
      "Build coping mechanisms",
      "Develop resilience strategies",
      "Maintain productivity under pressure."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-emotional-resilience-in-high-stress-roles.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 3,
    "title": "Navigating Office Politics with Emotional Intelligence",
    "description": "Master navigating office politics with emotional intelligence for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Mid-level employees, managers",
    "learningOutcomes": [
      "Understand organizational dynamics",
      "Build alliances without manipulation",
      "Use EI to resolve conflicts",
      "Maintain integrity while navigating politics."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/navigating-office-politics-with-emotional-intellig.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 4,
    "title": "Preventing and Managing Team Burnout",
    "description": "Master preventing and managing team burnout for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads, HR professionals",
    "learningOutcomes": [
      "Recognize signs of burnout",
      "Support employee well-being",
      "Balance workloads effectively",
      "Implement prevention strategies."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preventing-and-managing-team-burnout.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 5,
    "title": "Constructive Confrontation: How to Disagree Respectfully",
    "description": "Master constructive confrontation: how to disagree respectfully for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Express disagreement respectfully",
      "Use facts vs. emotions",
      "Apply assertive communication",
      "Maintain healthy workplace relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/Constructive_Confrontation_How_to_Disagree_Respectfully.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 6,
    "title": "Leading Without a Title",
    "description": "Master leading without a title for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Aspiring leaders, individual contributors",
    "learningOutcomes": [
      "Influence without authority",
      "Build trust across teams",
      "Take initiative in projects",
      "Demonstrate leadership behaviors daily."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leading-without-a-title.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 7,
    "title": "Building High-Trust Teams",
    "description": "Master building high-trust teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Create psychological safety",
      "Build transparency",
      "Strengthen accountability",
      "Foster long-term trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-high-trust-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 8,
    "title": "Situational Leadership: Adapting Your Style",
    "description": "Master situational leadership: adapting your style for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, supervisors",
    "learningOutcomes": [
      "Understand situational leadership model",
      "Adapt style to team maturity",
      "Balance directive vs. supportive leadership",
      "Improve team results."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/situational-leadership-adapting-your-style.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 9,
    "title": "Delegation Mastery: Getting Work Done Through Others",
    "description": "Master delegation mastery: getting work done through others for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, supervisors",
    "learningOutcomes": [
      "Apply effective delegation techniques",
      "Balance task ownership",
      "Empower employees",
      "Improve team productivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/delegation-mastery-getting-work-done-through-other.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 10,
    "title": "Collaborative Decision-Making",
    "description": "Master collaborative decision-making for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Teams, project managers",
    "learningOutcomes": [
      "Apply group decision-making models",
      "Balance diverse perspectives",
      "Avoid groupthink",
      "Build consensus effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/collaborative-decision-making.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 11,
    "title": "Inclusive Language in the Workplace",
    "description": "Master inclusive language in the workplace for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize importance of inclusive language",
      "Avoid biased terms",
      "Communicate with respect",
      "Support D&I initiatives."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/Inclusive_Language_in_the_Workplace.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 12,
    "title": "Cultural Intelligence (CQ): Thrive in Diverse Teams",
    "description": "Master cultural intelligence (cq): thrive in diverse teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Global workforce, multicultural teams",
    "learningOutcomes": [
      "Build cultural awareness",
      "Adapt behavior across cultures",
      "Avoid misunderstandings",
      "Improve global collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cultural-intelligence-cq-thrive-in-diverse-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 13,
    "title": "Understanding Gender Sensitivity at Work",
    "description": "Master understanding gender sensitivity at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand gender biases",
      "Promote gender equity",
      "Apply respectful communication",
      "Build inclusive environments."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/understanding-gender-sensitivity-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 14,
    "title": "Neurodiversity Awareness in the Workplace",
    "description": "Master neurodiversity awareness in the workplace for professional success and career growth.",
    "category": "Diversity & Inclusion",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, HR professionals",
    "learningOutcomes": [
      "Understand neurodiverse conditions (ADHD, autism, dyslexia)",
      "Support inclusivity",
      "Apply workplace accommodations",
      "Reduce stigma."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/neurodiversity-awareness-in-the-workplace.png",
    "tags": [
      "Diversity & Inclusion",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 15,
    "title": "Building Allyship: From Bystander to Upstander",
    "description": "Master building allyship: from bystander to upstander for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize discrimination",
      "Intervene constructively",
      "Support colleagues facing bias",
      "Build allyship behaviors."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-allyship-from-bystander-to-upstander.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 16,
    "title": "Beat Procrastination: Science-Backed Techniques",
    "description": "Master beat procrastination: science-backed techniques for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify root causes of procrastination",
      "Apply behavioral strategies",
      "Use time management tools",
      "Improve consistency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/beat-procrastination-science-backed-techniques.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 17,
    "title": "Developing Grit: Sustained Effort Over Time",
    "description": "Master developing grit: sustained effort over time for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Build perseverance in challenges",
      "Develop long-term motivation",
      "Balance discipline with passion",
      "Achieve long-term goals."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/developing-grit-sustained-effort-over-time.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 18,
    "title": "Deep Work: Managing Distractions & Focus",
    "description": "Master deep work: managing distractions & focus for professional success and career growth.",
    "category": "Productivity",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Knowledge workers, remote employees",
    "learningOutcomes": [
      "Apply deep work principles",
      "Eliminate distractions",
      "Maximize focus hours",
      "Increase quality of output."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/deep-work-managing-distractions-focus.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 19,
    "title": "The Power of Habit: Create Lasting Change",
    "description": "Master the power of habit: create lasting change for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand habit loops",
      "Replace bad habits with productive ones",
      "Use triggers and rewards",
      "Build long-term success behaviors."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/the-power-of-habit-create-lasting-change.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 20,
    "title": "Reframing Failure: Mindset for Growth & Resilience",
    "description": "Master reframing failure: mindset for growth & resilience for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "See failure as feedback",
      "Build resilience",
      "Learn from mistakes",
      "Maintain motivation after setbacks."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reframing-failure-mindset-for-growth-resilience.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 21,
    "title": "Design Thinking Fundamentals",
    "description": "Master design thinking fundamentals for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, innovation teams",
    "learningOutcomes": [
      "Understand design thinking process",
      "Apply empathy mapping",
      "Prototype solutions",
      "Test ideas effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/design-thinking-fundamentals.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 22,
    "title": "From Ideas to Execution: Innovation in Action",
    "description": "Master from ideas to execution: innovation in action for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Turn concepts into actionable plans",
      "Apply innovation frameworks",
      "Overcome execution barriers",
      "Drive results."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/from-ideas-to-execution-innovation-in-action.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 23,
    "title": "Problem Framing & Root Cause Analysis",
    "description": "Master problem framing & root cause analysis for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use structured problem framing",
      "Apply root cause tools (5 Whys, Fishbone)",
      "Identify true causes",
      "Prevent recurrence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/problem-framing-root-cause-analysis.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 24,
    "title": "Creative Confidence for Professionals",
    "description": "Master creative confidence for professionals for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Build confidence in creativity",
      "Overcome self-doubt",
      "Apply creative tools",
      "Share ideas without fear."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creative-confidence-for-professionals.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 25,
    "title": "Lateral Thinking Techniques for Everyday Work",
    "description": "Master lateral thinking techniques for everyday work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Apply lateral thinking techniques",
      "Challenge assumptions",
      "Generate innovative solutions",
      "Strengthen problem-solving."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/lateral-thinking-techniques-for-everyday-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 26,
    "title": "Code of Conduct: Walking the Talk",
    "description": "Master code of conduct: walking the talk for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand company code of conduct",
      "Apply ethical standards daily",
      "Recognize misconduct",
      "Build professional accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/code-of-conduct-walking-the-talk.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 27,
    "title": "Workplace Cybersecurity Basics",
    "description": "Master workplace cybersecurity basics for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand cybersecurity threats",
      "Apply password hygiene",
      "Recognize phishing attempts",
      "Protect company data."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/workplace-cybersecurity-basics.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 28,
    "title": "Insider Trading & Confidentiality",
    "description": "Master insider trading & confidentiality for professional success and career growth.",
    "category": "Professional Development",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Finance teams, executives, managers",
    "learningOutcomes": [
      "Understand insider trading laws",
      "Maintain confidentiality",
      "Recognize conflicts of interest",
      "Comply with regulations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/insider-trading-confidentiality.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 29,
    "title": "Safety in Remote & Hybrid Work Environments",
    "description": "Master safety in remote & hybrid work environments for professional success and career growth.",
    "category": "Compliance & Safety",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Remote and hybrid employees",
    "learningOutcomes": [
      "Apply ergonomic safety practices",
      "Recognize digital risks",
      "Ensure safe home-office setups",
      "Follow organizational policies."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/safety-in-remote-hybrid-work-environments.png",
    "tags": [
      "Compliance & Safety",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 30,
    "title": "Ethics in Everyday Decision-Making",
    "description": "Master ethics in everyday decision-making for professional success and career growth.",
    "category": "Compliance & Safety",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Apply ethical frameworks",
      "Recognize ethical dilemmas",
      "Make responsible choices",
      "Strengthen integrity at work."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/ethics-in-everyday-decision-making.png",
    "tags": [
      "Compliance & Safety",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 31,
    "title": "Career Planning & Personal Branding",
    "description": "Master career planning & personal branding for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially early-career",
    "learningOutcomes": [
      "Build career goals",
      "Develop personal brand",
      "Leverage strengths",
      "Navigate career paths effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/career-planning-personal-branding.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 32,
    "title": "Building a Portfolio Career",
    "description": "Master building a portfolio career for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Freelancers, gig workers, multi-role professionals",
    "learningOutcomes": [
      "Understand portfolio careers",
      "Manage multiple streams of work",
      "Build professional identity",
      "Leverage flexibility for growth."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-a-portfolio-career.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 33,
    "title": "Strategic Thinking for Individual Contributors",
    "description": "Master strategic thinking for individual contributors for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Individual contributors, high-potentials",
    "learningOutcomes": [
      "Apply strategic thinking to tasks",
      "Align work with company goals",
      "Anticipate future needs",
      "Contribute beyond job scope."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/Strategic_Thinking_for_Individual_Contributors.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 34,
    "title": "Role Clarity & Expectation Management",
    "description": "Master role clarity & expectation management for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially teams",
    "learningOutcomes": [
      "Define role responsibilities",
      "Manage expectations with managers",
      "Reduce role confusion",
      "Improve accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/role-clarity-expectation-management.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 35,
    "title": "Internal Mobility: Navigating Growth Within",
    "description": "Master internal mobility: navigating growth within for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Employees seeking career growth",
    "learningOutcomes": [
      "Explore internal job opportunities",
      "Build skills for transitions",
      "Network internally",
      "Navigate promotions effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/internal-mobility-navigating-growth-within.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 36,
    "title": "Digital Dexterity: Adapting to New Tech at Work",
    "description": "Master digital dexterity: adapting to new tech at work for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Develop adaptability to new tools",
      "Learn digital basics quickly",
      "Embrace workplace digital change",
      "Reduce resistance to tech adoption."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/digital-dexterity-adapting-to-new-tech-at-work.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 37,
    "title": "Leading Through Uncertainty",
    "description": "Master leading through uncertainty for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Build resilience during uncertainty",
      "Communicate confidently",
      "Provide stability to teams",
      "Manage decision-making under ambiguity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leading-through-uncertainty.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 38,
    "title": "Automation & the Future of Work",
    "description": "Master automation & the future of work for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand automation trends",
      "Adapt to role shifts",
      "Learn to work with automation",
      "Future-proof careers."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/automation-the-future-of-work.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 39,
    "title": "AI Basics for Non-Tech Teams",
    "description": "Master ai basics for non-tech teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand AI fundamentals",
      "Recognize AI use cases",
      "Identify risks & limitations",
      "Collaborate with AI-enabled tools."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/AI_Basics_for_Non-Tech_Teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 40,
    "title": "Reskilling & Upskilling: Your Career Toolkit",
    "description": "Master reskilling & upskilling: your career toolkit for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify reskilling needs",
      "Build a learning roadmap",
      "Adopt lifelong learning habits",
      "Adapt to evolving job demands."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reskilling-upskilling-your-career-toolkit.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 41,
    "title": "Effective Onboarding for New Hires",
    "description": "Master effective onboarding for new hires for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "HR, managers, team leads",
    "learningOutcomes": [
      "Design onboarding plans",
      "Integrate new employees quickly",
      "Communicate company values",
      "Reduce turnover risk."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/effective-onboarding-for-new-hires.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 42,
    "title": "Managing Underperformance with Empathy",
    "description": "Master managing underperformance with empathy for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Identify underperformance causes",
      "Use empathy in conversations",
      "Create improvement plans",
      "Motivate struggling employees."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-underperformance-with-empathy.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 43,
    "title": "Performance Appraisal Conversations",
    "description": "Master performance appraisal conversations for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR professionals",
    "learningOutcomes": [
      "Structure performance reviews",
      "Deliver feedback constructively",
      "Set clear goals",
      "Motivate employees post-review."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/performance-appraisal-conversations.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 44,
    "title": "Creating Psychological Safety for Your Team",
    "description": "Master creating psychological safety for your team for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Build trust and openness",
      "Encourage speaking up",
      "Reduce fear of mistakes",
      "Foster innovative culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creating-psychological-safety-for-your-team.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 45,
    "title": "Writing Proposals That Win",
    "description": "Master writing proposals that win for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Employees in sales, strategy, business development",
    "learningOutcomes": [
      "Structure compelling proposals",
      "Highlight business value",
      "Use persuasive writing",
      "Improve win rates."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/writing-proposals-that-win.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 46,
    "title": "Clear and Concise Report Writing",
    "description": "Master clear and concise report writing for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Write structured reports",
      "Eliminate fluff",
      "Use data effectively",
      "Communicate findings clearly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/clear-and-concise-report-writing.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 47,
    "title": "Grammar & Proofreading for Professionals",
    "description": "Master grammar & proofreading for professionals for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Avoid grammar mistakes",
      "Proofread professionally",
      "Strengthen writing clarity",
      "Improve business communication."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/grammar-proofreading-for-professionals.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 48,
    "title": "Building SOPs and Process Documents",
    "description": "Master building sops and process documents for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Operations, HR, managers",
    "learningOutcomes": [
      "Write step-by-step SOPs",
      "Document processes clearly",
      "Ensure compliance",
      "Improve team efficiency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-sops-and-process-documents.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 49,
    "title": "Writing for Executives: Briefs & Summaries",
    "description": "Master writing for executives: briefs & summaries for professional success and career growth.",
    "category": "Communication",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Mid-to-senior employees",
    "learningOutcomes": [
      "Condense complex info",
      "Write clear executive summaries",
      "Focus on key takeaways",
      "Improve leadership decision-making."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/Writing_for_Executives:Briefs_&_Summaries.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 50,
    "title": "Mastering Virtual Presentations",
    "description": "Master mastering virtual presentations for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees presenting remotely",
    "learningOutcomes": [
      "Design engaging virtual presentations",
      "Use tools effectively",
      "Maintain presence online",
      "Handle audience Q&A remotely."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/mastering-virtual-presentations.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 51,
    "title": "Building Culture in Remote Teams",
    "description": "Master building culture in remote teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers",
    "learningOutcomes": [
      "Foster trust across distance",
      "Strengthen team identity",
      "Promote inclusion",
      "Build engagement in virtual teams."
    ],
    "deliveryFormat": "",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-culture-in-remote-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 52,
    "title": "Asynchronous Communication Best Practices",
    "description": "Master asynchronous communication best practices for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees in remote/hybrid setups",
    "learningOutcomes": [
      "Use async tools effectively",
      "Write clear and concise updates",
      "Manage expectations across time zones",
      "Reduce dependency on real-time meetings."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/asynchronous-communication-best-practices.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 53,
    "title": "Running Effective Remote Meetings",
    "description": "Master running effective remote meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project leads, facilitators",
    "learningOutcomes": [
      "Plan structured virtual meetings",
      "Engage participants actively",
      "Manage time and agenda",
      "Ensure clear decisions and follow-ups."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/running-effective-remote-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 54,
    "title": "Time Zone Management for Global Teams",
    "description": "Master time zone management for global teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Global managers, distributed teams",
    "learningOutcomes": [
      "Coordinate across multiple time zones",
      "Balance fairness in scheduling",
      "Use tools for time alignment",
      "Minimize meeting fatigue."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/time-zone-management-for-global-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 55,
    "title": "Coaching Conversations for Managers",
    "description": "Master coaching conversations for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders",
    "learningOutcomes": [
      "Develop active listening skills",
      "Ask powerful coaching questions",
      "Support employee growth",
      "Foster accountability through coaching."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coaching-conversations-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 56,
    "title": "Building a Mentorship Program at Work",
    "description": "Master building a mentorship program at work for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "HR professionals, L&D managers",
    "learningOutcomes": [
      "Design structured mentorship programs",
      "Match mentors and mentees effectively",
      "Track progress and outcomes",
      "Enhance employee development culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-a-mentorship-program-at-work.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 57,
    "title": "Reverse Mentoring for Cross-Generational Learning",
    "description": "Master reverse mentoring for cross-generational learning for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "HR, senior leaders, managers",
    "learningOutcomes": [
      "Leverage junior-to-senior knowledge sharing",
      "Promote generational inclusivity",
      "Encourage fresh perspectives",
      "Strengthen leadership adaptability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reverse-mentoring-for-cross-generational-learning.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 58,
    "title": "Peer Coaching: Skill-Building in Pairs",
    "description": "Master peer coaching: skill-building in pairs for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, learning & development teams",
    "learningOutcomes": [
      "Practice feedback exchange",
      "Support mutual skill growth",
      "Build accountability partners",
      "Foster continuous peer learning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/peer-coaching-skill-building-in-pairs.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 59,
    "title": "Giving & Receiving Developmental Feedback",
    "description": "Master giving & receiving developmental feedback for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, employees at all levels",
    "learningOutcomes": [
      "Deliver constructive feedback",
      "Receive feedback openly",
      "Reduce defensiveness",
      "Use feedback to drive growth."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/giving-receiving-developmental-feedback.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 60,
    "title": "Problem-Solving with Data (basic analytics for everyone)",
    "description": "Master problem-solving with data (basic analytics for everyone) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand basic analytics",
      "Use data to solve problems",
      "Interpret simple charts",
      "Make data-driven decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/problem-solving-with-data-basic-analytics-for-ever.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 61,
    "title": "Professional Networking Skills",
    "description": "Master professional networking skills for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Build professional connections",
      "Use LinkedIn effectively",
      "Maintain relationships",
      "Expand career opportunities."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-networking-skills.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 62,
    "title": "Goal Setting & OKRs for Employees",
    "description": "Master goal setting & okrs for employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Set SMART goals",
      "Understand OKRs",
      "Align personal goals with company vision",
      "Track progress effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/goal-setting-okrs-for-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 63,
    "title": "Personal Finance Basics for Working Professionals",
    "description": "Master personal finance basics for working professionals for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage income and expenses",
      "Understand savings and investments",
      "Avoid debt traps",
      "Build financial discipline."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/personal-finance-basics-for-working-professionals.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 64,
    "title": "Building Self-Confidence at Work",
    "description": "Master building self-confidence at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Overcome self-doubt",
      "Communicate confidently",
      "Present ideas effectively",
      "Build professional presence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-self-confidence-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 65,
    "title": "Mindfulness at Work",
    "description": "Master mindfulness at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Practice mindfulness techniques",
      "Reduce stress",
      "Improve focus",
      "Build emotional resilience."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/mindfulness-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 66,
    "title": "Virtual Team Bonding Activities",
    "description": "Master virtual team bonding activities for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Remote and hybrid teams",
    "learningOutcomes": [
      "Engage teams virtually",
      "Build trust remotely",
      "Organize fun activities",
      "Strengthen collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/virtual-team-bonding-activities.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 67,
    "title": "Giving Recognition & Appreciation at Work",
    "description": "Master giving recognition & appreciation at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders, all employees",
    "learningOutcomes": [
      "Express appreciation effectively",
      "Build recognition culture",
      "Boost team morale",
      "Encourage positive behaviors."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/giving-recognition-appreciation-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 68,
    "title": "Negotiation Skills for Everyday Work (not just managers)",
    "description": "Master negotiation skills for everyday work (not just managers) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand win-win negotiation",
      "Apply negotiation in daily tasks",
      "Handle conflicts calmly",
      "Achieve better outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/negotiation-skills-for-everyday-work-not-just-mana.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 69,
    "title": "Customer-Centric Mindset for All Employees",
    "description": "Master customer-centric mindset for all employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adopt customer-first approach",
      "Understand customer needs",
      "Deliver better experiences",
      "Build long-term loyalty."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/customer-centric-mindset-for-all-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 70,
    "title": "Business Etiquette in Global Workplaces",
    "description": "Master business etiquette in global workplaces for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adapt to cultural differences",
      "Follow workplace etiquette",
      "Communicate respectfully",
      "Build professional image."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-etiquette-in-global-workplaces.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 71,
    "title": "Mental Health Awareness at Work",
    "description": "Master mental health awareness at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize mental health challenges",
      "Reduce stigma",
      "Support colleagues",
      "Promote workplace well-being."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/mental-health-awareness-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 72,
    "title": "Digital Wellness: Managing Screen Time & Online Boundaries",
    "description": "Master digital wellness: managing screen time & online boundaries for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage screen fatigue",
      "Set healthy online boundaries",
      "Balance digital use",
      "Improve focus and well-being."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/digital-wellness-managing-screen-time-online-bound.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 73,
    "title": "Work-Life Integration Strategies",
    "description": "Master work-life integration strategies for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Balance work and life",
      "Manage energy, not just time",
      "Avoid burnout",
      "Build sustainable routines."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/work-life-integration-strategies.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 74,
    "title": "Sleep, Nutrition & Productivity",
    "description": "Master sleep, nutrition & productivity for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand sleep importance",
      "Improve nutrition",
      "Build healthy routines",
      "Boost workplace productivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/sleep-nutrition-productivity.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 75,
    "title": "Remote & Hybrid Leadership Essentials",
    "description": "Master remote & hybrid leadership essentials for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders",
    "learningOutcomes": [
      "Lead hybrid teams effectively",
      "Manage distributed performance",
      "Build inclusion",
      "Drive results remotely."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/remote-hybrid-leadership-essentials.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 76,
    "title": "Navigating Organizational Change (for non-managers too)",
    "description": "Master navigating organizational change (for non-managers too) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adapt to workplace change",
      "Reduce resistance",
      "Stay resilient",
      "Support transition smoothly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/navigating-organizational-change-for-non-managers-.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 77,
    "title": "Career Agility: Thriving in Shifting Roles",
    "description": "Master career agility: thriving in shifting roles for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adapt to new roles",
      "Build transferable skills",
      "Stay future-ready",
      "Embrace continuous learning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/career-agility-thriving-in-shifting-roles.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 78,
    "title": "Sustainability Mindset at Work",
    "description": "Master sustainability mindset at work for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand workplace sustainability",
      "Apply eco-friendly practices",
      "Promote responsible behavior",
      "Contribute to CSR goals."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/sustainability-mindset-at-work.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 79,
    "title": "Introduction to the Gig Economy & Future Work Models",
    "description": "Master introduction to the gig economy & future work models for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand gig economy basics",
      "Explore future of work",
      "Learn freelancing essentials",
      "Adapt to evolving careers."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/introduction-to-the-gig-economy-future-work-models.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 80,
    "title": "Cyber Hygiene for Everyday Employees",
    "description": "Master cyber hygiene for everyday employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Follow password best practices",
      "Spot phishing attempts",
      "Protect personal data",
      "Maintain online safety."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cyber-hygiene-for-everyday-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 81,
    "title": "Cloud Basics for Non-Tech Teams",
    "description": "Master cloud basics for non-tech teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Non-technical employees",
    "learningOutcomes": [
      "Understand cloud fundamentals",
      "Use cloud tools",
      "Collaborate on cloud platforms",
      "Ensure secure cloud use."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cloud-basics-for-non-tech-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 82,
    "title": "Data-Driven Thinking for Business Users",
    "description": "Master data-driven thinking for business users for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Business employees, managers",
    "learningOutcomes": [
      "Adopt data-first mindset",
      "Interpret dashboards",
      "Support decisions with data",
      "Improve business performance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/data-driven-thinking-for-business-users.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 83,
    "title": "Collaboration Tools (Slack, Teams, Zoom) Best Practices",
    "description": "Master collaboration tools (slack, teams, zoom) best practices for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use collaboration tools effectively",
      "Manage communication overload",
      "Apply shortcuts & features",
      "Improve team productivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/collaboration-tools-slack-teams-zoom-best-practice.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 84,
    "title": "Digital Security & Social Media Responsibility",
    "description": "Master digital security & social media responsibility for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Stay safe on social media",
      "Manage privacy",
      "Avoid misinformation",
      "Represent company responsibly online."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/digital-security-social-media-responsibility.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 85,
    "title": "Corporate Social Responsibility (CSR) Awareness",
    "description": "Master corporate social responsibility (csr) awareness for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand CSR",
      "Participate in initiatives",
      "Promote ethical responsibility",
      "Contribute to social impact."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/corporate-social-responsibility-csr-awareness.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 86,
    "title": "Building Integrity at Work",
    "description": "Master building integrity at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Promote honesty",
      "Build trust",
      "Make ethical decisions",
      "Strengthen workplace integrity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-integrity-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 87,
    "title": "Responsible Use of AI & Automation",
    "description": "Master responsible use of ai & automation for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand AI basics",
      "Apply automation responsibly",
      "Avoid bias",
      "Enhance productivity ethically."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/responsible-use-of-ai-automation.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 88,
    "title": "Handling Q&A Like a Pro",
    "description": "Master handling q&a like a pro for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage Q&A confidently",
      "Handle tough questions",
      "Engage audience effectively",
      "Build credibility in presentations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-qa-like-a-pro.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 89,
    "title": "Storytelling with Data & Numbers",
    "description": "Master storytelling with data & numbers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, business teams",
    "learningOutcomes": [
      "Translate data into stories",
      "Simplify complex numbers",
      "Use visuals for clarity",
      "Drive decisions with data storytelling."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/storytelling-with-data-numbers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 90,
    "title": "Visual Communication for Non-Designers",
    "description": "Master visual communication for non-designers for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Design simple visuals",
      "Use charts and icons",
      "Improve presentation slides",
      "Communicate ideas visually."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/visual-communication-for-non-designers.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 91,
    "title": "Communication in Project Management",
    "description": "Master communication in project management for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Project managers, team leads",
    "learningOutcomes": [
      "Improve stakeholder communication",
      "Ensure clarity in updates",
      "Reduce project risks",
      "Enhance team alignment."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communication-in-project-management.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 92,
    "title": "Handling Media & PR Interviews",
    "description": "Master handling media & pr interviews for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, spokespeople, PR teams",
    "learningOutcomes": [
      "Prepare key messages",
      "Stay on message",
      "Handle tough questions",
      "Build positive brand image."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-media-pr-interviews.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 93,
    "title": "Listening to Customer Needs",
    "description": "Master listening to customer needs for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales, service, product teams",
    "learningOutcomes": [
      "Practice active listening",
      "Identify hidden needs",
      "Show empathy",
      "Improve customer satisfaction."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/listening-to-customer-needs.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 94,
    "title": "Diplomatic Communication in Difficult Situations",
    "description": "Master diplomatic communication in difficult situations for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, client-facing employees",
    "learningOutcomes": [
      "Stay calm under pressure",
      "Use neutral language",
      "Resolve conflicts diplomatically",
      "Maintain relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/diplomatic-communication-in-difficult-situations.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 95,
    "title": "Pitching Ideas Effectively",
    "description": "Master pitching ideas effectively for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Structure clear pitches",
      "Communicate value",
      "Handle objections",
      "Persuade stakeholders."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/pitching-ideas-effectively.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 96,
    "title": "Cross-Department Communication",
    "description": "Master cross-department communication for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Collaborate across teams",
      "Break down silos",
      "Use shared tools",
      "Improve organizational alignment."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cross-department-communication.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 97,
    "title": "Communicating Vision & Strategy",
    "description": "Master communicating vision & strategy for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Translate strategy into simple messages",
      "Inspire employees",
      "Align teams to goals",
      "Communicate consistently."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-vision-strategy.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 98,
    "title": "Presentation Design & Visuals for Impact",
    "description": "Master presentation design & visuals for impact for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Design impactful slides",
      "Use visuals effectively",
      "Avoid clutter",
      "Communicate messages with design."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/presentation-design-visuals-for-impact.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 99,
    "title": "Energy Management at Work",
    "description": "Master energy management at work for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage energy throughout the day",
      "Avoid burnout",
      "Balance workload",
      "Build sustainable habits."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/energy-management-at-work.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 100,
    "title": "Mastering Follow-Through",
    "description": "Master mastering follow-through for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Keep commitments",
      "Track tasks",
      "Improve reliability",
      "Build trust through consistency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/mastering-follow-through.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 101,
    "title": "Productivity with Minimalism",
    "description": "Master productivity with minimalism for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Declutter work habits",
      "Focus on essentials",
      "Reduce distractions",
      "Achieve more with less."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/productivity-with-minimalism.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 102,
    "title": "Handling High Workload Periods",
    "description": "Master handling high workload periods for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Prioritize effectively",
      "Manage stress",
      "Delegate tasks",
      "Maintain performance under pressure."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-high-workload-periods.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 103,
    "title": "Preventing Productivity Traps",
    "description": "Master preventing productivity traps for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Avoid multitasking traps",
      "Identify time-wasters",
      "Use focus tools",
      "Improve efficiency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preventing-productivity-traps.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 104,
    "title": "Emotional First Aid in the Workplace",
    "description": "Master emotional first aid in the workplace for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, HR teams",
    "learningOutcomes": [
      "Recognize emotional distress",
      "Provide first-level support",
      "Refer when needed",
      "Build caring culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/emotional-first-aid-in-the-workplace.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 105,
    "title": "Handling Emotional Exhaustion",
    "description": "Master handling emotional exhaustion for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify burnout signs",
      "Apply coping strategies",
      "Restore balance",
      "Seek timely help."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-emotional-exhaustion.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 106,
    "title": "Breathing & Relaxation Techniques for Focus",
    "description": "Master breathing & relaxation techniques for focus for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Practice breathing exercises",
      "Reduce anxiety",
      "Improve focus",
      "Boost overall well-being."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/breathing-relaxation-techniques-for-focus.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 107,
    "title": "Internet of Things (IoT) for Beginners",
    "description": "Master internet of things (iot) for beginners for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Non-technical employees",
    "learningOutcomes": [
      "Understand IoT basics",
      "Explore workplace applications",
      "Learn IoT examples",
      "Appreciate IoT impact."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/internet-of-things-iot-for-beginners.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 108,
    "title": "AR & VR in the Workplace (Intro)",
    "description": "Master ar & vr in the workplace (intro) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand AR/VR basics",
      "Explore workplace use cases",
      "Experience immersive tools",
      "Learn future potential."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/ar-vr-in-the-workplace-intro.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 109,
    "title": "Robotic Process Automation (RPA) Awareness",
    "description": "Master robotic process automation (rpa) awareness for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand RPA basics",
      "Identify automation use cases",
      "Learn benefits of RPA",
      "Adapt to automation changes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/robotic-process-automation-rpa-awareness.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 110,
    "title": "Big Data Basics for Non-Tech Teams",
    "description": "Master big data basics for non-tech teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Non-technical employees",
    "learningOutcomes": [
      "Understand big data fundamentals",
      "Recognize applications",
      "Interpret business insights",
      "Appreciate big data impact."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/big-data-basics-for-non-tech-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 111,
    "title": "Cybersecurity Threat Awareness for Managers",
    "description": "Master cybersecurity threat awareness for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Recognize cybersecurity threats",
      "Protect team data",
      "Promote security practices",
      "Respond to incidents."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cybersecurity-threat-awareness-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 112,
    "title": "Networking Strategies for Career Growth",
    "description": "Master networking strategies for career growth for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Build professional network",
      "Maintain connections",
      "Use networking for opportunities",
      "Grow career visibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/networking-strategies-for-career-growth.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 113,
    "title": "Building Your Personal Brand Online",
    "description": "Master building your personal brand online for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Develop personal brand",
      "Share content strategically",
      "Manage online presence",
      "Build credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-your-personal-brand-online.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 114,
    "title": "Leveraging LinkedIn Professionally",
    "description": "Master leveraging linkedin professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Optimize LinkedIn profile",
      "Expand network",
      "Engage with content",
      "Use LinkedIn for growth."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leveraging-linkedin-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 115,
    "title": "Building Thought Leadership at Work",
    "description": "Master building thought leadership at work for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Employees, leaders",
    "learningOutcomes": [
      "Share expertise",
      "Contribute insights",
      "Build influence",
      "Strengthen professional reputation."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-thought-leadership-at-work.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 116,
    "title": "Managing Career Transitions Smoothly",
    "description": "Master managing career transitions smoothly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adapt to career shifts",
      "Identify transferable skills",
      "Reduce transition stress",
      "Plan for success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-career-transitions-smoothly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 117,
    "title": "Creating a Career Growth Roadmap",
    "description": "Master creating a career growth roadmap for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Define career goals",
      "Identify skill gaps",
      "Plan development steps",
      "Track progress effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creating-a-career-growth-roadmap.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 118,
    "title": "Building Visibility Without Self-Promotion",
    "description": "Master building visibility without self-promotion for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Gain recognition naturally",
      "Demonstrate value",
      "Leverage team success",
      "Build presence authentically."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-visibility-without-self-promotion.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 119,
    "title": "Speaking at Conferences & Events",
    "description": "Master speaking at conferences & events for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Employees, leaders, experts",
    "learningOutcomes": [
      "Prepare impactful speeches",
      "Present confidently",
      "Handle audience Q&A",
      "Build professional visibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/speaking-at-conferences-events.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 120,
    "title": "Root Cause Analysis Advanced Tools",
    "description": "Master root cause analysis advanced tools for professional success and career growth.",
    "category": "Professional Development",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Managers, analysts",
    "learningOutcomes": [
      "Apply RCA techniques",
      "Use advanced tools",
      "Identify true causes",
      "Prevent recurring problems."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/root-cause-analysis-advanced-tools.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 121,
    "title": "Breakthrough Thinking for Teams",
    "description": "Master breakthrough thinking for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, team leaders",
    "learningOutcomes": [
      "Encourage innovative ideas",
      "Break mental barriers",
      "Use creative techniques",
      "Solve problems collaboratively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/breakthrough-thinking-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 122,
    "title": "Encouraging Risk-Taking in Teams",
    "description": "Master encouraging risk-taking in teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders",
    "learningOutcomes": [
      "Promote psychological safety",
      "Support experimentation",
      "Learn from failure",
      "Build innovation culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/encouraging-risk-taking-in-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 123,
    "title": "From Idea to Pilot Project",
    "description": "Master from idea to pilot project for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Validate new ideas",
      "Build pilot plans",
      "Test assumptions",
      "Scale successful projects."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/from-idea-to-pilot-project.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 124,
    "title": "Navigating Career in the Gig Economy",
    "description": "Master navigating career in the gig economy for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand gig economy",
      "Identify opportunities",
      "Manage career shifts",
      "Build adaptable skills."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/navigating-career-in-the-gig-economy.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 125,
    "title": "AI + Human Collaboration Models",
    "description": "Master ai + human collaboration models for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand AI-human synergy",
      "Apply collaboration examples",
      "Improve productivity",
      "Enhance human skills with AI."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/ai-human-collaboration-models.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 126,
    "title": "Hybrid Work Success Principles",
    "description": "Master hybrid work success principles for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Balance remote & office work",
      "Use hybrid tools",
      "Stay connected",
      "Maintain productivity in hybrid setups."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/hybrid-work-success-principles.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 127,
    "title": "Reskilling Roadmaps for Employees",
    "description": "Master reskilling roadmaps for employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify new skill needs",
      "Build learning plans",
      "Adapt to industry changes",
      "Future-proof careers."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reskilling-roadmaps-for-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 128,
    "title": "Cross-Industry Learning & Mobility",
    "description": "Master cross-industry learning & mobility for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Learn from other industries",
      "Apply cross-sector insights",
      "Explore mobility options",
      "Enhance adaptability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cross-industry-learning-mobility.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 129,
    "title": "The Art of Asking Questions",
    "description": "Master the art of asking questions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Ask powerful questions",
      "Improve critical thinking",
      "Foster curiosity",
      "Enhance problem-solving."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/the-art-of-asking-questions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 130,
    "title": "Decision-Making Under Uncertainty",
    "description": "Master decision-making under uncertainty for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, leaders",
    "learningOutcomes": [
      "Evaluate risks",
      "Apply decision frameworks",
      "Stay calm in uncertainty",
      "Improve judgment skills."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/decision-making-under-uncertainty.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 131,
    "title": "Behavioral Economics for Managers",
    "description": "Master behavioral economics for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Understand behavioral biases",
      "Apply behavioral insights",
      "Improve managerial decisions",
      "Drive better outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/behavioral-economics-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 132,
    "title": "Scenario Planning for Business Leaders",
    "description": "Master scenario planning for business leaders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Senior leaders, strategists",
    "learningOutcomes": [
      "Build multiple scenarios",
      "Anticipate uncertainties",
      "Prepare flexible strategies",
      "Strengthen resilience."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/scenario-planning-for-business-leaders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 133,
    "title": "Data-Informed vs. Data-Driven Decisions",
    "description": "Master data-informed vs. data-driven decisions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, analysts, leaders",
    "learningOutcomes": [
      "Differentiate data-informed vs data-driven",
      "Balance human judgment with analytics",
      "Avoid over-reliance on data",
      "Make smarter decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/data-informed-vs-data-driven-decisions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 134,
    "title": "Balancing Short-Term vs. Long-Term Priorities",
    "description": "Master balancing short-term vs. long-term priorities for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Manage short vs long goals",
      "Balance quarterly results with vision",
      "Avoid short-termism",
      "Build sustainable success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/balancing-short-term-vs-long-term-priorities.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 135,
    "title": "Structured Problem-Solving Frameworks for Managers",
    "description": "Master structured problem-solving frameworks for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders",
    "learningOutcomes": [
      "Apply structured frameworks",
      "Define problems clearly",
      "Evaluate options systematically",
      "Solve effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/structured-problem-solving-frameworks-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 136,
    "title": "Reducing Cognitive Biases in Leadership Decisions",
    "description": "Master reducing cognitive biases in leadership decisions for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, decision-makers",
    "learningOutcomes": [
      "Recognize leadership biases",
      "Apply bias-reduction techniques",
      "Improve clarity in decisions",
      "Avoid costly mistakes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reducing-cognitive-biases-in-leadership-decisions.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 137,
    "title": "Decision-Making Through Systems Thinking",
    "description": "Master decision-making through systems thinking for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, strategists",
    "learningOutcomes": [
      "Understand systems thinking",
      "Identify interdependencies",
      "Predict ripple effects",
      "Improve organizational decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/decision-making-through-systems-thinking.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 138,
    "title": "Red Team / Blue Team Thinking for Strategy",
    "description": "Master red team / blue team thinking for strategy for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, strategists, security managers",
    "learningOutcomes": [
      "Use Red vs Blue team approaches",
      "Test strategies for weaknesses",
      "Encourage alternative perspectives",
      "Strengthen plans."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/red-team-blue-team-thinking-for-strategy.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 139,
    "title": "Leveraging Collective Wisdom in Group Decisions",
    "description": "Master leveraging collective wisdom in group decisions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers, teams",
    "learningOutcomes": [
      "Harness group intelligence",
      "Use crowdsourcing",
      "Avoid groupthink",
      "Improve collective outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leveraging-collective-wisdom-in-group-decisions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 140,
    "title": "Customer Experience Management (CXM)",
    "description": "Master customer experience management (cxm) for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, marketing, CX leaders",
    "learningOutcomes": [
      "Design customer journeys",
      "Measure CX metrics",
      "Improve customer satisfaction",
      "Build loyalty strategies."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/customer-experience-management-cxm.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 141,
    "title": "Brand Management for Business Leaders",
    "description": "Master brand management for business leaders for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, marketing teams",
    "learningOutcomes": [
      "Manage brand equity",
      "Build consistent identity",
      "Strengthen positioning",
      "Drive long-term value."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/brand-management-for-business-leaders.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 142,
    "title": "Marketing Analytics for Managers",
    "description": "Master marketing analytics for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, business leaders",
    "learningOutcomes": [
      "Interpret marketing data",
      "Use key metrics",
      "Optimize campaigns",
      "Improve marketing ROI."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/marketing-analytics-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 143,
    "title": "Strategic Market Positioning",
    "description": "Master strategic market positioning for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, strategists",
    "learningOutcomes": [
      "Define market position",
      "Differentiate from competitors",
      "Identify unique value",
      "Strengthen strategy."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/strategic-market-positioning.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 144,
    "title": "Consumer Behavior Insights for Leaders",
    "description": "Master consumer behavior insights for leaders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, marketing leaders",
    "learningOutcomes": [
      "Understand consumer psychology",
      "Track buying patterns",
      "Apply insights to strategy",
      "Influence decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/consumer-behavior-insights-for-leaders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 145,
    "title": "Product Lifecycle Management",
    "description": "Master product lifecycle management for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, product teams",
    "learningOutcomes": [
      "Understand product lifecycle stages",
      "Manage product strategy",
      "Extend product life",
      "Optimize portfolio."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/product-lifecycle-management.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 146,
    "title": "Go-to-Market Strategy for New Products",
    "description": "Master go-to-market strategy for new products for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, product and sales teams",
    "learningOutcomes": [
      "Plan GTM strategy",
      "Identify target customers",
      "Align sales and marketing",
      "Launch successfully."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/go-to-market-strategy-for-new-products.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 147,
    "title": "Omnichannel Customer Engagement",
    "description": "Master omnichannel customer engagement for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Marketing, sales, CX teams",
    "learningOutcomes": [
      "Integrate multiple channels",
      "Provide seamless experiences",
      "Track customer journeys",
      "Improve engagement."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/omnichannel-customer-engagement.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 148,
    "title": "Business-to-Business (B2B) Marketing Strategy",
    "description": "Master business-to-business (b2b) marketing strategy for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales, marketing leaders",
    "learningOutcomes": [
      "Design B2B marketing plans",
      "Build client relationships",
      "Leverage digital tools",
      "Improve conversions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-to-business-b2b-marketing-strategy.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 149,
    "title": "Business Storytelling for Customer Loyalty",
    "description": "Master business storytelling for customer loyalty for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, marketing teams",
    "learningOutcomes": [
      "Use storytelling for branding",
      "Engage customers emotionally",
      "Strengthen loyalty",
      "Build brand advocates."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-storytelling-for-customer-loyalty.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 150,
    "title": "Visionary Leadership: Turning Ideas into Movements",
    "description": "Master visionary leadership: turning ideas into movements for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Senior leaders, aspiring visionaries",
    "learningOutcomes": [
      "Inspire through vision",
      "Mobilize teams",
      "Drive transformation",
      "Create long-lasting impact."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/visionary-leadership-turning-ideas-into-movements.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 151,
    "title": "Leading Through Influence, Not Authority",
    "description": "Master leading through influence, not authority for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, aspiring leaders",
    "learningOutcomes": [
      "Lead without formal power",
      "Build credibility",
      "Inspire trust",
      "Drive collaboration through influence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leading-through-influence-not-authority.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 152,
    "title": "Strategic Storytelling for Leaders",
    "description": "Master strategic storytelling for leaders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Craft strategic stories",
      "Inspire teams",
      "Connect with stakeholders",
      "Drive alignment with vision."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/strategic-storytelling-for-leaders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 153,
    "title": "Leadership in Crisis: Making Decisive Moves",
    "description": "Master leadership in crisis: making decisive moves for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Stay calm under pressure",
      "Make quick decisions",
      "Communicate clearly",
      "Lead teams during crises."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leadership-in-crisis-making-decisive-moves.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 154,
    "title": "Managing Across Generations in the Workplace",
    "description": "Master managing across generations in the workplace for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders",
    "learningOutcomes": [
      "Understand generational differences",
      "Adapt communication styles",
      "Build inclusive teams",
      "Reduce conflicts."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-across-generations-in-the-workplace.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 155,
    "title": "Values-Based Leadership in Modern Organizations",
    "description": "Master values-based leadership in modern organizations for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Leaders, executives",
    "learningOutcomes": [
      "Lead with core values",
      "Build ethical culture",
      "Align values with strategy",
      "Inspire loyalty."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/values-based-leadership-in-modern-organizations.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 156,
    "title": "Global Leadership Competencies for the Future",
    "description": "Master global leadership competencies for the future for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Global managers, executives",
    "learningOutcomes": [
      "Build global mindset",
      "Adapt across cultures",
      "Lead distributed teams",
      "Prepare for future challenges."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/global-leadership-competencies-for-the-future.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 157,
    "title": "Leading Organizational Transformation",
    "description": "Master leading organizational transformation for professional success and career growth.",
    "category": "Professional Development",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Senior leaders, executives",
    "learningOutcomes": [
      "Drive transformation",
      "Manage resistance",
      "Align stakeholders",
      "Ensure sustainable change."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leading-organizational-transformation.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 158,
    "title": "Strategic Risk-Taking for Leaders",
    "description": "Master strategic risk-taking for leaders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Evaluate risks",
      "Take calculated risks",
      "Encourage innovation",
      "Balance risk and reward."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/strategic-risk-taking-for-leaders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 159,
    "title": "Building Long-Term Business Resilience",
    "description": "Master building long-term business resilience for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, strategists",
    "learningOutcomes": [
      "Plan for resilience",
      "Diversify strategies",
      "Build adaptability",
      "Strengthen long-term success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-long-term-business-resilience.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 160,
    "title": "Managing Daily Workflows Smoothly",
    "description": "Master managing daily workflows smoothly for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Organize tasks",
      "Streamline routines",
      "Avoid delays",
      "Improve daily efficiency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-daily-workflows-smoothly.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 161,
    "title": "Creating Clear Handoffs Between Shifts",
    "description": "Master creating clear handoffs between shifts for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Shift-based teams",
    "learningOutcomes": [
      "Document handoffs clearly",
      "Share critical info",
      "Avoid confusion",
      "Improve shift transitions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creating-clear-handoffs-between-shifts.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 162,
    "title": "Coordinating Small Team Projects",
    "description": "Master coordinating small team projects for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Small teams, team leads",
    "learningOutcomes": [
      "Assign roles",
      "Track progress",
      "Improve collaboration",
      "Deliver projects efficiently."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-small-team-projects.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 163,
    "title": "Handling Task Overlaps Between Employees",
    "description": "Master handling task overlaps between employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Identify overlaps",
      "Clarify ownership",
      "Reduce duplication",
      "Improve coordination."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-task-overlaps-between-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 164,
    "title": "Aligning Daily Priorities with Managers",
    "description": "Master aligning daily priorities with managers for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Employees, managers",
    "learningOutcomes": [
      "Clarify priorities",
      "Align with manager goals",
      "Track deliverables",
      "Improve accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/aligning-daily-priorities-with-managers.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 165,
    "title": "Tracking Progress with Simple Tools",
    "description": "Master tracking progress with simple tools for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use simple tools",
      "Monitor task completion",
      "Share updates",
      "Improve transparency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/tracking-progress-with-simple-tools.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 166,
    "title": "Managing Small Budgets in Teams",
    "description": "Master managing small budgets in teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Team leaders, managers",
    "learningOutcomes": [
      "Plan budgets",
      "Track expenses",
      "Avoid overspending",
      "Optimize resources."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-small-budgets-in-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 167,
    "title": "Avoiding Bottlenecks in Daily Operations",
    "description": "Master avoiding bottlenecks in daily operations for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Identify bottlenecks",
      "Streamline processes",
      "Improve flow",
      "Enhance team efficiency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-bottlenecks-in-daily-operations.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 168,
    "title": "Keeping Workspaces Organized for Teams",
    "description": "Master keeping workspaces organized for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Organize shared spaces",
      "Reduce clutter",
      "Improve productivity",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/keeping-workspaces-organized-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 169,
    "title": "Managing Small but Recurring Issues",
    "description": "Master managing small but recurring issues for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify recurring issues",
      "Address root causes",
      "Reduce disruptions",
      "Improve team performance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-small-but-recurring-issues.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 170,
    "title": "Professional Use of Messaging Apps at Work",
    "description": "Master professional use of messaging apps at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use messaging apps professionally",
      "Avoid miscommunication",
      "Manage responsiveness",
      "Respect boundaries."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-use-of-messaging-apps-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 171,
    "title": "Camera Etiquette in Virtual Meeting",
    "description": "Master camera etiquette in virtual meeting for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Maintain camera presence",
      "Use professional background",
      "Show attentiveness",
      "Build virtual etiquette."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/camera-etiquette-in-virtual-meeting.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 172,
    "title": "Phone & Call Etiquette in Shared Offices",
    "description": "Master phone & call etiquette in shared offices for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage call volume",
      "Respect shared spaces",
      "Use polite language",
      "Keep professionalism on calls."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/phone-call-etiquette-in-shared-offices.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 173,
    "title": "Professional Conduct in Break Rooms",
    "description": "Master professional conduct in break rooms for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Maintain cleanliness",
      "Respect others",
      "Use shared resources fairly",
      "Build workplace respect."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-in-break-rooms.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 174,
    "title": "Respecting Shared Work Equipment",
    "description": "Master respecting shared work equipment for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use equipment responsibly",
      "Report issues",
      "Avoid hogging",
      "Share fairly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-shared-work-equipment.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 175,
    "title": "Punctuality: More Than Just Being on Time",
    "description": "Master punctuality: more than just being on time for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand punctuality value",
      "Plan ahead",
      "Build reliability",
      "Strengthen professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/punctuality-more-than-just-being-on-time.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 176,
    "title": "Writing Polite Reminders Without Sounding Pushy",
    "description": "Master writing polite reminders without sounding pushy for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Draft polite reminders",
      "Balance tone",
      "Follow up effectively",
      "Maintain good relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/writing-polite-reminders-without-sounding-pushy.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 177,
    "title": "Handling Office Gossip Professionally",
    "description": "Master handling office gossip professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Avoid gossip traps",
      "Respond professionally",
      "Maintain trust",
      "Build positive culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-office-gossip-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 178,
    "title": "Respecting Personal Space in Shared Offices",
    "description": "Master respecting personal space in shared offices for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect boundaries",
      "Avoid crowding",
      "Maintain privacy",
      "Improve comfort in shared spaces."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-personal-space-in-shared-offices.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 179,
    "title": "Handling Interruptions at Work",
    "description": "Master handling interruptions at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respond politely",
      "Set boundaries",
      "Minimize disruption",
      "Stay productive."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-interruptions-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 180,
    "title": "Professional Dress Code Awareness",
    "description": "Master professional dress code awareness for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand dress code norms",
      "Dress appropriately",
      "Build professional image",
      "Adapt to workplace expectations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-dress-code-awareness.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 181,
    "title": "Using Calendars Effectively at Work",
    "description": "Master using calendars effectively at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage schedules",
      "Share availability",
      "Avoid clashes",
      "Improve time management."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-calendars-effectively-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 182,
    "title": "Scheduling Meetings with Respect for Others’ Time",
    "description": "Master scheduling meetings with respect for others’ time for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Schedule respectfully",
      "Check availability",
      "Keep meetings purposeful",
      "Respect time zones."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/scheduling-meetings-with-respect-for-others-time.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 183,
    "title": "Following Up Without Nagging",
    "description": "Master following up without nagging for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Craft polite follow-ups",
      "Avoid sounding pushy",
      "Keep professionalism",
      "Get responses effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/following-up-without-nagging.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 184,
    "title": "Saying “No” Politely but Firmly",
    "description": "Master saying “no” politely but firmly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Decline requests respectfully",
      "Stay assertive",
      "Avoid overcommitment",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/saying-no-politely-but-firmly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 185,
    "title": "Prioritizing Tasks in Shared Projects",
    "description": "Master prioritizing tasks in shared projects for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Align priorities",
      "Balance workloads",
      "Stay on track",
      "Improve team delivery."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/prioritizing-tasks-in-shared-projects.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 186,
    "title": "Clarifying Ambiguous Instructions",
    "description": "Master clarifying ambiguous instructions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Seek clarity",
      "Ask the right questions",
      "Reduce errors",
      "Improve execution."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/clarifying-ambiguous-instructions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 187,
    "title": "Handling Last-Minute Work Requests",
    "description": "Master handling last-minute work requests for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Stay calm under pressure",
      "Manage priorities",
      "Negotiate deadlines",
      "Deliver effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-last-minute-work-requests.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 188,
    "title": "Communicating Delays Effectively",
    "description": "Master communicating delays effectively for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Communicate delays early",
      "Manage expectations",
      "Reduce frustration",
      "Maintain trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-delays-effectively.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 189,
    "title": "Documenting Work for Team Reference",
    "description": "Master documenting work for team reference for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Document tasks clearly",
      "Share knowledge",
      "Reduce dependency",
      "Improve collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/documenting-work-for-team-reference.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 190,
    "title": "Managing Shared Drives & Folders",
    "description": "Master managing shared drives & folders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Organize digital files",
      "Maintain clarity",
      "Avoid clutter",
      "Improve accessibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-shared-drives-folders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 191,
    "title": "Avoiding Overuse of CC & Reply-All in Emails",
    "description": "Master avoiding overuse of cc & reply-all in emails for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Email responsibly",
      "Reduce clutter",
      "Use CC wisely",
      "Improve email culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-overuse-of-cc-reply-all-in-emails.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 192,
    "title": "Digital Meeting Notes & Summaries",
    "description": "Master digital meeting notes & summaries for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Take structured notes",
      "Summarize discussions",
      "Share quickly",
      "Ensure clarity in meetings."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/digital-meeting-notes-summaries.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 193,
    "title": "Coordinating with Admin & Support Staff",
    "description": "Master coordinating with admin & support staff for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Collaborate with support staff",
      "Communicate needs",
      "Respect roles",
      "Improve efficiency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-with-admin-support-staff.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 194,
    "title": "Respecting Time Off & Boundaries",
    "description": "Master respecting time off & boundaries for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect time off",
      "Avoid late requests",
      "Maintain balance",
      "Build supportive culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-time-off-boundaries.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 195,
    "title": "Managing Noise Levels in Open Offices",
    "description": "Master managing noise levels in open offices for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Be mindful of noise",
      "Respect focus time",
      "Use quiet zones",
      "Improve open office culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-noise-levels-in-open-offices.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 196,
    "title": "Workplace Greeting Etiquette",
    "description": "Master workplace greeting etiquette for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Greet colleagues respectfully",
      "Build rapport",
      "Maintain cultural awareness",
      "Foster positivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/workplace-greeting-etiquette.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 197,
    "title": "Handling Misunderstandings Quickly",
    "description": "Master handling misunderstandings quickly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Address misunderstandings promptly",
      "Clarify intentions",
      "Avoid conflicts",
      "Restore trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-misunderstandings-quickly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 198,
    "title": "Clarifying Roles During Projects",
    "description": "Master clarifying roles during projects for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Define responsibilities",
      "Reduce confusion",
      "Improve accountability",
      "Strengthen teamwork."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/clarifying-roles-during-projects.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 199,
    "title": "Managing Dependence on Others’ Work",
    "description": "Master managing dependence on others’ work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Coordinate dependencies",
      "Communicate proactively",
      "Reduce delays",
      "Deliver on time."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-dependence-on-others-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 200,
    "title": "Coordinating Cross-Shift Communication",
    "description": "Master coordinating cross-shift communication for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Shift-based teams, managers",
    "learningOutcomes": [
      "Share critical updates",
      "Use clear channels",
      "Avoid confusion",
      "Ensure smooth transitions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-cross-shift-communication.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 201,
    "title": "Respecting Confidential Work Information",
    "description": "Master respecting confidential work information for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Handle confidential info securely",
      "Avoid leaks",
      "Respect data policies",
      "Build trust at work."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-confidential-work-information.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 202,
    "title": "Avoiding Overcommitment at Work",
    "description": "Master avoiding overcommitment at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Assess workload honestly",
      "Learn to decline tasks",
      "Maintain balance",
      "Deliver reliably."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-overcommitment-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 203,
    "title": "Managing Multi-Tasking Effectively",
    "description": "Master managing multi-tasking effectively for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Balance multiple tasks",
      "Prioritize effectively",
      "Avoid errors",
      "Stay productive."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-multi-tasking-effectively.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 204,
    "title": "Clarifying Action Items After Meetings",
    "description": "Master clarifying action items after meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Summarize action items",
      "Clarify responsibilities",
      "Track deadlines",
      "Ensure follow-through."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/clarifying-action-items-after-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 205,
    "title": "Following Up on Open Issues",
    "description": "Master following up on open issues for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Track open issues",
      "Follow up politely",
      "Keep accountability",
      "Drive closure."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/following-up-on-open-issues.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 206,
    "title": "Giving Quick Progress Updates",
    "description": "Master giving quick progress updates for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Share concise updates",
      "Highlight key points",
      "Keep stakeholders informed",
      "Improve communication."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/giving-quick-progress-updates.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 207,
    "title": "Avoiding Overloading Shared Calendars",
    "description": "Master avoiding overloading shared calendars for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect shared calendars",
      "Avoid unnecessary invites",
      "Manage visibility",
      "Improve scheduling culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-overloading-shared-calendars.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 208,
    "title": "Requesting Feedback the Right Way",
    "description": "Master requesting feedback the right way for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Ask feedback effectively",
      "Be specific",
      "Show openness",
      "Improve performance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/requesting-feedback-the-right-way.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 209,
    "title": "Responding to Feedback Professionally",
    "description": "Master responding to feedback professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Receive feedback calmly",
      "Avoid defensiveness",
      "Act on inputs",
      "Show growth mindset."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/responding-to-feedback-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 210,
    "title": "Asking for Clarification Without Hesitation",
    "description": "Master asking for clarification without hesitation for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Seek clarity confidently",
      "Avoid misunderstandings",
      "Build confidence",
      "Improve accuracy."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/asking-for-clarification-without-hesitation.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 211,
    "title": "Avoiding Misinterpretation in Emails",
    "description": "Master avoiding misinterpretation in emails for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Write clear emails",
      "Avoid vague language",
      "Check tone",
      "Improve understanding."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-misinterpretation-in-emails.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 212,
    "title": "Tone Management in Instant Messaging",
    "description": "Master tone management in instant messaging for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use professional tone",
      "Avoid miscommunication",
      "Balance informality",
      "Communicate effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/tone-management-in-instant-messaging.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 213,
    "title": "Using Professional Email Signatures",
    "description": "Master using professional email signatures for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Create clear signatures",
      "Include relevant info",
      "Maintain consistency",
      "Build professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-professional-email-signatures.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 214,
    "title": "Proofreading Before Sending Emails",
    "description": "Master proofreading before sending emails for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Check grammar",
      "Avoid typos",
      "Ensure clarity",
      "Strengthen professional image."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/proofreading-before-sending-emails.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 215,
    "title": "Managing First Impressions with Clients",
    "description": "Master managing first impressions with clients for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees",
    "learningOutcomes": [
      "Create positive impressions",
      "Show professionalism",
      "Build trust quickly",
      "Strengthen client relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-first-impressions-with-clients.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 216,
    "title": "Business Card Etiquette",
    "description": "Master business card etiquette for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Exchange cards professionally",
      "Respect cultural norms",
      "Handle cards politely",
      "Build connections."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-card-etiquette.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 217,
    "title": "Introducing Colleagues Professionally",
    "description": "Master introducing colleagues professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Make introductions clearly",
      "Respect hierarchies",
      "Build rapport",
      "Strengthen workplace culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/introducing-colleagues-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 218,
    "title": "Addressing People by Preferred Titles",
    "description": "Master addressing people by preferred titles for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect titles",
      "Avoid assumptions",
      "Use correct forms",
      "Build respect in communication."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/addressing-people-by-preferred-titles.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 219,
    "title": "Respecting Hierarchies in Communication",
    "description": "Master respecting hierarchies in communication for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Communicate respectfully",
      "Follow hierarchy norms",
      "Escalate appropriately",
      "Build trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-hierarchies-in-communication.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 220,
    "title": "Speaking Up in Meetings Effectively",
    "description": "Master speaking up in meetings effectively for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Contribute clearly",
      "Stay concise",
      "Build confidence",
      "Engage productively in meetings."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/speaking-up-in-meetings-effectively.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 221,
    "title": "Avoiding Interrupting Others",
    "description": "Master avoiding interrupting others for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Practice patience",
      "Wait turns",
      "Show respect",
      "Improve listening culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-interrupting-others.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 222,
    "title": "Preparing Agendas for Small Meetings",
    "description": "Master preparing agendas for small meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Draft clear agendas",
      "Share beforehand",
      "Stay on track",
      "Improve meeting outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preparing-agendas-for-small-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 223,
    "title": "Confirming Meeting Attendance",
    "description": "Master confirming meeting attendance for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Confirm promptly",
      "Respect hosts",
      "Plan ahead",
      "Improve meeting reliability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/confirming-meeting-attendance.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 224,
    "title": "Setting Up Calls with External Stakeholders",
    "description": "Master setting up calls with external stakeholders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, client-facing teams",
    "learningOutcomes": [
      "Schedule respectfully",
      "Confirm details",
      "Share links",
      "Ensure professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/setting-up-calls-with-external-stakeholders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 225,
    "title": "Professional Note-Taking During Calls",
    "description": "Master professional note-taking during calls for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Capture key points",
      "Summarize decisions",
      "Share notes",
      "Improve accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-note-taking-during-calls.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 226,
    "title": "Avoiding Jargon with Non-Experts",
    "description": "Master avoiding jargon with non-experts for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Simplify language",
      "Avoid technical jargon",
      "Improve clarity",
      "Communicate across levels."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-jargon-with-non-experts.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 227,
    "title": "Simplifying Technical Explanations",
    "description": "Master simplifying technical explanations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Break down concepts",
      "Use simple terms",
      "Relate to examples",
      "Improve understanding."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/simplifying-technical-explanations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 228,
    "title": "Communicating with Clarity Across Levels",
    "description": "Master communicating with clarity across levels for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adapt communication",
      "Stay concise",
      "Avoid misinterpretation",
      "Build workplace clarity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-with-clarity-across-levels.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 229,
    "title": "Handling Questions You Don’t Know the Answer To",
    "description": "Master handling questions you don’t know the answer to for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respond professionally",
      "Admit limitations",
      "Commit to follow-up",
      "Maintain credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-questions-you-dont-know-the-answer-to.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 230,
    "title": "Admitting Mistakes Professionally",
    "description": "Master admitting mistakes professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Own mistakes",
      "Avoid excuses",
      "Apologize sincerely",
      "Build trust and respect."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/admitting-mistakes-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 231,
    "title": "Owning Accountability Without Excuses",
    "description": "Master owning accountability without excuses for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Accept responsibility",
      "Avoid blame-shifting",
      "Deliver commitments",
      "Build reliability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/owning-accountability-without-excuses.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 232,
    "title": "Managing Office Supplies Responsibly",
    "description": "Master managing office supplies responsibly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use supplies efficiently",
      "Avoid wastage",
      "Track usage",
      "Respect shared resources."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-office-supplies-responsibly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 233,
    "title": "Handling Shared Resources (printers, laptops)",
    "description": "Master handling shared resources (printers, laptops) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use shared resources responsibly",
      "Report issues",
      "Avoid monopolizing",
      "Promote fairness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-shared-resources-printers-laptops.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 234,
    "title": "Avoiding Overbooking Meeting Rooms",
    "description": "Master avoiding overbooking meeting rooms for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Book responsibly",
      "Respect others’ time",
      "Avoid double-booking",
      "Improve meeting culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-overbooking-meeting-rooms.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 235,
    "title": "Professional Conduct During Office Celebrations",
    "description": "Master professional conduct during office celebrations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Participate respectfully",
      "Avoid excesses",
      "Maintain professionalism",
      "Celebrate inclusively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-during-office-celebrations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 236,
    "title": "Appropriate Humor in the Workplace",
    "description": "Master appropriate humor in the workplace for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use humor responsibly",
      "Avoid offensive jokes",
      "Build rapport",
      "Strengthen team culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/appropriate-humor-in-the-workplace.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 237,
    "title": "Managing Disagreements in Group Chats",
    "description": "Master managing disagreements in group chats for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Stay professional in chats",
      "Manage disagreements calmly",
      "Reduce conflicts",
      "Keep discussions productive."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-disagreements-in-group-chats.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 238,
    "title": "Sharing Company Announcements Respectfully",
    "description": "Master sharing company announcements respectfully for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Communicate announcements clearly",
      "Respect tone",
      "Share appropriately",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/sharing-company-announcements-respectfully.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 239,
    "title": "Handling Visitors in the Office Professionally",
    "description": "Master handling visitors in the office professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Welcome visitors politely",
      "Provide assistance",
      "Follow security protocols",
      "Build good impression."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-visitors-in-the-office-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 240,
    "title": "Coordinating with Security Teams",
    "description": "Master coordinating with security teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, facility managers",
    "learningOutcomes": [
      "Collaborate with security",
      "Report concerns",
      "Follow protocols",
      "Build safe workplace culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-with-security-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 241,
    "title": "Professional Behavior During Business Travel",
    "description": "Master professional behavior during business travel for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Maintain professionalism while traveling",
      "Respect colleagues",
      "Represent company well",
      "Handle logistics smoothly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-behavior-during-business-travel.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 242,
    "title": "Handling Delays During Business Trips",
    "description": "Master handling delays during business trips for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage travel delays calmly",
      "Communicate updates",
      "Adjust schedules",
      "Stay professional under stress."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-delays-during-business-trips.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 243,
    "title": "Coordinating Travel Plans with Teams",
    "description": "Master coordinating travel plans with teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Plan travel collaboratively",
      "Share itineraries",
      "Avoid clashes",
      "Ensure smooth coordination."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-travel-plans-with-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 244,
    "title": "Expense Claim Etiquette",
    "description": "Master expense claim etiquette for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "File claims correctly",
      "Keep receipts",
      "Respect company policies",
      "Avoid delays in reimbursement."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/expense-claim-etiquette.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 245,
    "title": "Managing Business Lunches Professionally",
    "description": "Master managing business lunches professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, client-facing staff",
    "learningOutcomes": [
      "Follow dining etiquette",
      "Maintain professionalism",
      "Manage expenses",
      "Strengthen client relations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-business-lunches-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 246,
    "title": "Table Manners in Formal Settings",
    "description": "Master table manners in formal settings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Practice proper table manners",
      "Respect cultural differences",
      "Build confidence",
      "Create good impressions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/table-manners-in-formal-settings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 247,
    "title": "Professional Conduct in Conferences",
    "description": "Master professional conduct in conferences for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Network respectfully",
      "Participate actively",
      "Represent company well",
      "Gain learning opportunities."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-in-conferences.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 248,
    "title": "Networking Etiquette at Events",
    "description": "Master networking etiquette at events for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Approach people confidently",
      "Exchange info politely",
      "Respect boundaries",
      "Build professional network."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/networking-etiquette-at-events.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 249,
    "title": "Respecting Personal Boundaries During Networking",
    "description": "Master respecting personal boundaries during networking for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize personal space",
      "Avoid intrusive behavior",
      "Build rapport respectfully",
      "Improve networking skills."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-personal-boundaries-during-networking.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 250,
    "title": "Exchanging Contact Info Digitally",
    "description": "Master exchanging contact info digitally for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Share digital contacts professionally",
      "Use QR codes and apps",
      "Avoid errors",
      "Build professional presence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/exchanging-contact-info-digitally.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 251,
    "title": "Connecting on LinkedIn Professionally",
    "description": "Master connecting on linkedin professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Send professional invites",
      "Personalize messages",
      "Build strong connections",
      "Expand professional network."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/connecting-on-linkedin-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 252,
    "title": "Following Up After Networking Events",
    "description": "Master following up after networking events for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Follow up promptly",
      "Personalize follow-ups",
      "Strengthen connections",
      "Build long-term relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/following-up-after-networking-events.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 253,
    "title": "Handling Unanswered Emails Politely",
    "description": "Master handling unanswered emails politely for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Send polite reminders",
      "Respect recipients",
      "Avoid pushiness",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-unanswered-emails-politely.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 254,
    "title": "Respecting Email Response Timeframes",
    "description": "Master respecting email response timeframes for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand response expectations",
      "Manage delays",
      "Communicate professionally",
      "Respect timeframes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-email-response-timeframes.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 255,
    "title": "Managing Shared Project Boards (Trello, Asana)",
    "description": "Master managing shared project boards (trello, asana) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use project boards effectively",
      "Assign tasks clearly",
      "Update statuses",
      "Collaborate smoothly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-shared-project-boards-trello-asana.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 256,
    "title": "Updating Task Status Regularly",
    "description": "Master updating task status regularly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Update tasks consistently",
      "Share progress",
      "Maintain transparency",
      "Avoid confusion."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/updating-task-status-regularly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 257,
    "title": "Closing Completed Tasks Effectively",
    "description": "Master closing completed tasks effectively for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Mark tasks complete",
      "Communicate closure",
      "Share outcomes",
      "Improve project flow."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/closing-completed-tasks-effectively.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 258,
    "title": "Avoiding Scope Creep in Projects",
    "description": "Master avoiding scope creep in projects for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, project teams",
    "learningOutcomes": [
      "Define scope clearly",
      "Manage expectations",
      "Avoid unnecessary tasks",
      "Keep projects on track."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-scope-creep-in-projects.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 259,
    "title": "Setting Realistic Deadlines for Work",
    "description": "Master setting realistic deadlines for work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Estimate time accurately",
      "Set realistic deadlines",
      "Manage commitments",
      "Deliver reliably."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/setting-realistic-deadlines-for-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 260,
    "title": "Escalating Issues Appropriately",
    "description": "Master escalating issues appropriately for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify issues needing escalation",
      "Communicate clearly",
      "Involve right people",
      "Resolve quickly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/escalating-issues-appropriately.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 261,
    "title": "Knowing When to Involve a Manager",
    "description": "Master knowing when to involve a manager for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize escalation points",
      "Avoid unnecessary involvement",
      "Respect hierarchy",
      "Improve resolution speed."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/knowing-when-to-involve-a-manager.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 262,
    "title": "Asking for Help Professionally",
    "description": "Master asking for help professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Request help clearly",
      "Respect colleagues’ time",
      "Show appreciation",
      "Build collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/asking-for-help-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 263,
    "title": "Avoiding Over-Reliance on One Colleague",
    "description": "Master avoiding over-reliance on one colleague for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Distribute workload fairly",
      "Avoid burdening one person",
      "Build team support",
      "Improve collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-over-reliance-on-one-colleague.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 264,
    "title": "Handing Over Work During Absences",
    "description": "Master handing over work during absences for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Prepare handover notes",
      "Share key details",
      "Ensure smooth transition",
      "Maintain continuity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handing-over-work-during-absences.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 265,
    "title": "Preparing Backup Plans for Projects",
    "description": "Master preparing backup plans for projects for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Plan contingencies",
      "Anticipate risks",
      "Maintain project flow",
      "Ensure success despite challenges."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preparing-backup-plans-for-projects.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 266,
    "title": "Using Cloud Links Instead of Attachments",
    "description": "Master using cloud links instead of attachments for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Share files via cloud",
      "Avoid attachment overload",
      "Improve collaboration",
      "Ensure version control."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-cloud-links-instead-of-attachments.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 267,
    "title": "Avoiding Duplicate Work in Teams",
    "description": "Master avoiding duplicate work in teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Coordinate tasks",
      "Communicate updates",
      "Avoid duplication",
      "Save time and resources."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-duplicate-work-in-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 268,
    "title": "Document Version Control Best Practices",
    "description": "Master document version control best practices for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Track versions",
      "Use naming conventions",
      "Avoid confusion",
      "Maintain accuracy in documents."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/document-version-control-best-practices.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 269,
    "title": "Renaming Files Professionally",
    "description": "Master renaming files professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use clear file names",
      "Maintain consistency",
      "Avoid confusion",
      "Improve file searchability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/renaming-files-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 270,
    "title": "Archiving Old Project Data",
    "description": "Master archiving old project data for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Archive data systematically",
      "Free storage",
      "Retain important info",
      "Maintain records properly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/archiving-old-project-data.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 271,
    "title": "Organizing Digital Workspaces Clearly",
    "description": "Master organizing digital workspaces clearly for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Organize digital files",
      "Maintain clarity",
      "Reduce clutter",
      "Improve accessibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/organizing-digital-workspaces-clearly.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 272,
    "title": "Using Passwords & Access Controls Responsibly",
    "description": "Master using passwords & access controls responsibly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Set strong passwords",
      "Respect access rights",
      "Avoid sharing",
      "Improve security awareness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-passwords-access-controls-responsibly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 273,
    "title": "Professional Use of Shared Chat Channels",
    "description": "Master professional use of shared chat channels for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use chat channels responsibly",
      "Stay on-topic",
      "Respect tone",
      "Avoid overposting."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-use-of-shared-chat-channels.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 274,
    "title": "Respecting Work Hours in Communication",
    "description": "Master respecting work hours in communication for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Avoid late-night messages",
      "Respect boundaries",
      "Use scheduling tools",
      "Promote healthy culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-work-hours-in-communication.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 275,
    "title": "Managing Late-Night Emails Respectfully",
    "description": "Master managing late-night emails respectfully for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Delay-send emails",
      "Respect recipients’ time",
      "Communicate urgent vs non-urgent",
      "Build healthy boundaries."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-late-night-emails-respectfully.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 276,
    "title": "Clarifying Meeting Objectives in Advance",
    "description": "Master clarifying meeting objectives in advance for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Set clear objectives",
      "Share before meeting",
      "Improve productivity",
      "Align participants’ focus."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/clarifying-meeting-objectives-in-advance.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 277,
    "title": "Encouraging Participation in Discussions",
    "description": "Master encouraging participation in discussions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Invite inputs",
      "Build inclusivity",
      "Manage quieter voices",
      "Strengthen collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/encouraging-participation-in-discussions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 278,
    "title": "Handling Dominant Voices in Meetings",
    "description": "Master handling dominant voices in meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, facilitators",
    "learningOutcomes": [
      "Manage dominant voices",
      "Balance participation",
      "Encourage inclusivity",
      "Improve meeting outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-dominant-voices-in-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 279,
    "title": "Giving Everyone Space to Speak",
    "description": "Master giving everyone space to speak for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Encourage equal participation",
      "Avoid interruptions",
      "Value diverse opinions",
      "Build team inclusivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/giving-everyone-space-to-speak.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 280,
    "title": "Summarizing Discussions Before Closing",
    "description": "Master summarizing discussions before closing for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Summarize discussions",
      "Highlight key points",
      "Clarify outcomes",
      "Ensure shared understanding."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/summarizing-discussions-before-closing.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 281,
    "title": "Confirming Next Steps Clearly",
    "description": "Master confirming next steps clearly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Define clear actions",
      "Assign responsibilities",
      "Confirm deadlines",
      "Drive accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/confirming-next-steps-clearly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 282,
    "title": "Avoiding Last-Minute Meeting Cancellations",
    "description": "Master avoiding last-minute meeting cancellations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Plan ahead",
      "Communicate changes promptly",
      "Respect participants’ time",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-last-minute-meeting-cancellations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 283,
    "title": "Managing Project Kickoff Meetings",
    "description": "Master managing project kickoff meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project leads",
    "learningOutcomes": [
      "Plan kickoffs effectively",
      "Align team goals",
      "Set expectations",
      "Ensure smooth start."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-project-kickoff-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 284,
    "title": "Professional Conduct in Brainstorming Sessions",
    "description": "Master professional conduct in brainstorming sessions for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Encourage open sharing",
      "Avoid criticism",
      "Respect all ideas",
      "Build creative environment."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-in-brainstorming-sessions.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 285,
    "title": "Respecting All Ideas in Team Discussions",
    "description": "Master respecting all ideas in team discussions for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Value contributions",
      "Avoid dismissiveness",
      "Encourage diverse views",
      "Strengthen collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-all-ideas-in-team-discussions.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 286,
    "title": "Avoiding Criticism Without Solutions",
    "description": "Master avoiding criticism without solutions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Provide constructive feedback",
      "Offer solutions",
      "Avoid negativity",
      "Improve discussions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-criticism-without-solutions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 287,
    "title": "Giving Equal Credit to Contributors",
    "description": "Master giving equal credit to contributors for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Acknowledge contributions",
      "Share credit fairly",
      "Build team morale",
      "Avoid favoritism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/giving-equal-credit-to-contributors.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 288,
    "title": "Handling Sensitive Topics Carefully",
    "description": "Master handling sensitive topics carefully for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Discuss sensitive topics respectfully",
      "Avoid offensive language",
      "Build empathy",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-sensitive-topics-carefully.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 289,
    "title": "Coordinating Shared Coffee or Pantry Spaces",
    "description": "Master coordinating shared coffee or pantry spaces for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect pantry etiquette",
      "Share resources fairly",
      "Keep space clean",
      "Build respectful culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-shared-coffee-or-pantry-spaces.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 290,
    "title": "Reporting Office Maintenance Issues",
    "description": "Master reporting office maintenance issues for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Report issues promptly",
      "Follow reporting process",
      "Ensure fixes quickly",
      "Maintain workplace quality."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reporting-office-maintenance-issues.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 291,
    "title": "Respecting Cleaning Staff & Facilities Teams",
    "description": "Master respecting cleaning staff & facilities teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Treat staff respectfully",
      "Acknowledge contributions",
      "Follow facility rules",
      "Build inclusivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-cleaning-staff-facilities-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 292,
    "title": "Professional Conduct with IT Support",
    "description": "Master professional conduct with it support for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Report issues politely",
      "Respect IT staff",
      "Cooperate during fixes",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-with-it-support.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 293,
    "title": "Logging IT Issues Properly",
    "description": "Master logging it issues properly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Log issues clearly",
      "Share details",
      "Follow protocols",
      "Improve response times."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/logging-it-issues-properly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 294,
    "title": "Respecting Response Time of Support Teams",
    "description": "Master respecting response time of support teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Be patient with support",
      "Respect workload",
      "Communicate urgency",
      "Build supportive culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-response-time-of-support-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 295,
    "title": "Avoiding Unauthorized Software Downloads",
    "description": "Master avoiding unauthorized software downloads for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect IT policies",
      "Avoid risks",
      "Prevent malware",
      "Ensure compliance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-unauthorized-software-downloads.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 296,
    "title": "Professional Use of Office Wi-Fi",
    "description": "Master professional use of office wi-fi for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use Wi-Fi responsibly",
      "Avoid heavy streaming",
      "Protect passwords",
      "Improve network reliability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-use-of-office-wi-fi.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 297,
    "title": "Avoiding Streaming During Work Hours",
    "description": "Master avoiding streaming during work hours for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Avoid non-work streaming",
      "Save bandwidth",
      "Respect productivity",
      "Use network responsibly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-streaming-during-work-hours.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 298,
    "title": "Respecting Data Limits in Shared Networks",
    "description": "Master respecting data limits in shared networks for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage data use",
      "Avoid large downloads",
      "Respect colleagues’ needs",
      "Keep network efficient."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-data-limits-in-shared-networks.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 299,
    "title": "Safe Internet Browsing in Office",
    "description": "Master safe internet browsing in office for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Browse safely",
      "Avoid suspicious sites",
      "Protect credentials",
      "Reduce security risks."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/safe-internet-browsing-in-office.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 300,
    "title": "Avoiding Political Discussions in Office",
    "description": "Master avoiding political discussions in office for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Stay neutral in office",
      "Respect diverse opinions",
      "Avoid conflict",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-political-discussions-in-office.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 301,
    "title": "Respecting Religious Differences at Work",
    "description": "Master respecting religious differences at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect religious diversity",
      "Avoid bias",
      "Support inclusivity",
      "Build respectful workplace culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-religious-differences-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 302,
    "title": "Inclusive Language in Day-to-Day Work",
    "description": "Master inclusive language in day-to-day work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use inclusive words",
      "Avoid biased language",
      "Build respectful communication",
      "Promote inclusivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/inclusive-language-in-day-to-day-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 303,
    "title": "Managing Generational Differences Respectfully",
    "description": "Master managing generational differences respectfully for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Understand generational perspectives",
      "Communicate respectfully",
      "Reduce conflicts",
      "Build collaboration across ages."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-generational-differences-respectfully.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 304,
    "title": "Avoiding Stereotypes in Conversations",
    "description": "Master avoiding stereotypes in conversations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize stereotypes",
      "Avoid biased comments",
      "Communicate respectfully",
      "Build inclusivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-stereotypes-in-conversations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 305,
    "title": "Professional Conduct in Cross-Gender Teams",
    "description": "Master professional conduct in cross-gender teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Respect gender diversity",
      "Communicate professionally",
      "Avoid bias",
      "Build inclusive teams."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-in-cross-gender-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 306,
    "title": "Handling Compliments Professionally",
    "description": "Master handling compliments professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Give compliments respectfully",
      "Receive gracefully",
      "Avoid awkwardness",
      "Build positive culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-compliments-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 307,
    "title": "Professional Apologies at Work",
    "description": "Master professional apologies at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Apologize sincerely",
      "Take accountability",
      "Repair relationships",
      "Build trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-apologies-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 308,
    "title": "Showing Gratitude Without Overdoing It",
    "description": "Master showing gratitude without overdoing it for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Express gratitude appropriately",
      "Avoid excess",
      "Build positive relationships",
      "Strengthen workplace culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/showing-gratitude-without-overdoing-it.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 309,
    "title": "Using Names Effectively in Conversations",
    "description": "Master using names effectively in conversations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Remember names",
      "Use names respectfully",
      "Build rapport",
      "Strengthen personal connections."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-names-effectively-in-conversations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 310,
    "title": "Remembering Colleagues’ Preferences",
    "description": "Master remembering colleagues’ preferences for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Pay attention to preferences",
      "Respect individuality",
      "Build rapport",
      "Improve teamwork."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/remembering-colleagues-preferences.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 311,
    "title": "Professional Conduct in Client Calls",
    "description": "Master professional conduct in client calls for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees",
    "learningOutcomes": [
      "Communicate professionally",
      "Listen actively",
      "Manage client concerns",
      "Build positive impression."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-in-client-calls.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 312,
    "title": "Handling Tough Client Questions",
    "description": "Master handling tough client questions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees",
    "learningOutcomes": [
      "Stay calm",
      "Answer clearly",
      "Admit unknowns",
      "Build client trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-tough-client-questions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 313,
    "title": "Communicating Delays to Clients Properly",
    "description": "Master communicating delays to clients properly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees",
    "learningOutcomes": [
      "Inform delays transparently",
      "Manage expectations",
      "Offer solutions",
      "Maintain credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-delays-to-clients-properly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 314,
    "title": "Following Up with Clients Post-Meeting",
    "description": "Master following up with clients post-meeting for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees",
    "learningOutcomes": [
      "Send follow-up emails",
      "Share summaries",
      "Confirm next steps",
      "Build professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/following-up-with-clients-post-meeting.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 315,
    "title": "Respecting Client Confidentiality",
    "description": "Master respecting client confidentiality for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Protect client data",
      "Respect privacy",
      "Follow compliance",
      "Maintain trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-client-confidentiality.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 316,
    "title": "Managing Expectations with Vendors",
    "description": "Master managing expectations with vendors for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, procurement teams",
    "learningOutcomes": [
      "Set clear expectations",
      "Communicate effectively",
      "Avoid disputes",
      "Strengthen vendor relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-expectations-with-vendors.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 317,
    "title": "Coordinating Deliveries Professionally",
    "description": "Master coordinating deliveries professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Operations, supply chain teams",
    "learningOutcomes": [
      "Schedule deliveries",
      "Communicate clearly",
      "Avoid delays",
      "Ensure smooth logistics."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/coordinating-deliveries-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 318,
    "title": "Respecting Vendor Relationships",
    "description": "Master respecting vendor relationships for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Maintain professionalism",
      "Treat vendors respectfully",
      "Build long-term trust",
      "Strengthen collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/respecting-vendor-relationships.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 319,
    "title": "Handling Disputes with Vendors",
    "description": "Master handling disputes with vendors for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, procurement teams",
    "learningOutcomes": [
      "Resolve disputes calmly",
      "Use negotiation",
      "Document issues",
      "Maintain relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-disputes-with-vendors.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 320,
    "title": "Negotiating Payment Terms Politely",
    "description": "Master negotiating payment terms politely for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Finance, procurement teams",
    "learningOutcomes": [
      "Negotiate respectfully",
      "Align on terms",
      "Ensure fairness",
      "Strengthen partnerships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/negotiating-payment-terms-politely.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 321,
    "title": "Avoiding Over-Promising to Clients",
    "description": "Master avoiding over-promising to clients for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees",
    "learningOutcomes": [
      "Set realistic expectations",
      "Avoid overcommitment",
      "Communicate honestly",
      "Build trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-over-promising-to-clients.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 322,
    "title": "Documenting Client Requirements Clearly",
    "description": "Master documenting client requirements clearly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, client-facing teams",
    "learningOutcomes": [
      "Capture client needs accurately",
      "Avoid ambiguity",
      "Use structured formats",
      "Ensure clarity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/documenting-client-requirements-clearly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 323,
    "title": "Managing Translation or Language Barriers",
    "description": "Master managing translation or language barriers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, client-facing teams",
    "learningOutcomes": [
      "Use clear language",
      "Leverage translators",
      "Avoid misunderstandings",
      "Build strong communication."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-translation-or-language-barriers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 324,
    "title": "Professional Conduct in International Calls",
    "description": "Master professional conduct in international calls for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing teams, managers",
    "learningOutcomes": [
      "Respect cultural etiquette",
      "Communicate clearly",
      "Avoid jargon",
      "Build global professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-conduct-in-international-calls.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 325,
    "title": "Avoiding Cultural Faux Pas in Business",
    "description": "Master avoiding cultural faux pas in business for professional success and career growth.",
    "category": "Diversity & Inclusion",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Understand cultural norms",
      "Avoid mistakes",
      "Respect diversity",
      "Build global credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-cultural-faux-pas-in-business.png",
    "tags": [
      "Diversity & Inclusion",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 326,
    "title": "Preparing Business Gifts Respectfully",
    "description": "Master preparing business gifts respectfully for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Follow cultural practices",
      "Select gifts appropriately",
      "Avoid offense",
      "Build goodwill."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preparing-business-gifts-respectfully.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 327,
    "title": "Professional Follow-Through After Business Deals",
    "description": "Master professional follow-through after business deals for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales, business teams",
    "learningOutcomes": [
      "Maintain commitments",
      "Send updates",
      "Build long-term relationships",
      "Strengthen client trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-follow-through-after-business-deals.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 328,
    "title": "Managing Cross-Functional Teams Effectively",
    "description": "Master managing cross-functional teams effectively for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Coordinate across functions",
      "Align goals",
      "Improve collaboration",
      "Deliver results effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-cross-functional-teams-effectively.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 329,
    "title": "Building Agile Teams for Dynamic Projects",
    "description": "Master building agile teams for dynamic projects for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project teams",
    "learningOutcomes": [
      "Adopt agile practices",
      "Improve adaptability",
      "Deliver iteratively",
      "Enhance collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-agile-teams-for-dynamic-projects.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 330,
    "title": "Lean Management Principles for Daily Operations",
    "description": "Master lean management principles for daily operations for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Apply lean tools",
      "Reduce waste",
      "Improve efficiency",
      "Optimize operations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/lean-management-principles-for-daily-operations.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 331,
    "title": "Continuous Improvement (Kaizen) at Work",
    "description": "Master continuous improvement (kaizen) at work for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Apply Kaizen principles",
      "Suggest improvements",
      "Build continuous learning",
      "Improve performance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/continuous-improvement-kaizen-at-work.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 332,
    "title": "Managing Remote Contractors & Freelancers",
    "description": "Master managing remote contractors & freelancers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR teams",
    "learningOutcomes": [
      "Hire and onboard freelancers",
      "Manage remotely",
      "Track deliverables",
      "Ensure alignment."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-remote-contractors-freelancers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 333,
    "title": "Scaling Teams During Business Growth",
    "description": "Master scaling teams during business growth for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Plan scaling strategies",
      "Manage resources",
      "Maintain culture",
      "Support growth effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/scaling-teams-during-business-growth.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 334,
    "title": "Business Process Optimization Basics",
    "description": "Master business process optimization basics for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, analysts",
    "learningOutcomes": [
      "Map processes",
      "Identify inefficiencies",
      "Redesign workflows",
      "Improve effectiveness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-process-optimization-basics.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 335,
    "title": "Cost Control Strategies for Managers",
    "description": "Master cost control strategies for managers for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Identify cost drivers",
      "Control expenses",
      "Maintain efficiency",
      "Improve profitability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cost-control-strategies-for-managers.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 336,
    "title": "Vendor & Supplier Relationship Management",
    "description": "Master vendor & supplier relationship management for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, procurement teams",
    "learningOutcomes": [
      "Strengthen relationships",
      "Manage risks",
      "Negotiate effectively",
      "Build long-term partnerships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/vendor-supplier-relationship-management.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 337,
    "title": "Procurement & Purchasing Essentials",
    "description": "Master procurement & purchasing essentials for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, procurement teams",
    "learningOutcomes": [
      "Understand procurement basics",
      "Manage purchasing cycles",
      "Ensure compliance",
      "Control costs."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/procurement-purchasing-essentials.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 338,
    "title": "Contract Management for Non-Lawyers",
    "description": "Master contract management for non-lawyers for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, employees handling contracts",
    "learningOutcomes": [
      "Understand contract basics",
      "Track obligations",
      "Avoid risks",
      "Manage contracts effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/contract-management-for-non-lawyers.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 339,
    "title": "Negotiating Service-Level Agreements (SLAs)",
    "description": "Master negotiating service-level agreements (slas) for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, procurement teams",
    "learningOutcomes": [
      "Understand SLAs",
      "Negotiate fairly",
      "Set realistic expectations",
      "Ensure accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/negotiating-service-level-agreements-slas.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 340,
    "title": "Managing Outsourced Projects Successfully",
    "description": "Master managing outsourced projects successfully for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project leads",
    "learningOutcomes": [
      "Select vendors",
      "Manage deliverables",
      "Mitigate risks",
      "Ensure quality delivery."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-outsourced-projects-successfully.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 341,
    "title": "Stakeholder Mapping & Influence Strategies",
    "description": "Master stakeholder mapping & influence strategies for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Identify stakeholders",
      "Map influence",
      "Build strategies",
      "Strengthen engagement."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/stakeholder-mapping-influence-strategies.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 342,
    "title": "Budget Forecasting for Team Leads",
    "description": "Master budget forecasting for team leads for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Team leads, managers",
    "learningOutcomes": [
      "Forecast budgets",
      "Track expenses",
      "Align with goals",
      "Manage resources effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/budget-forecasting-for-team-leads.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 343,
    "title": "Expense Tracking & Cost Allocation at Work",
    "description": "Master expense tracking & cost allocation at work for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Track expenses",
      "Allocate costs fairly",
      "Maintain transparency",
      "Improve accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/expense-tracking-cost-allocation-at-work.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 344,
    "title": "Resource Planning for Team Managers",
    "description": "Master resource planning for team managers for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Plan resources effectively",
      "Balance workloads",
      "Manage capacity",
      "Ensure project success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/resource-planning-for-team-managers.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 345,
    "title": "Building Accountability Systems in Teams",
    "description": "Master building accountability systems in teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Set accountability structures",
      "Track commitments",
      "Build ownership",
      "Improve team reliability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-accountability-systems-in-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 346,
    "title": "Performance Metrics & KPIs for Teams",
    "description": "Master performance metrics & kpis for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Define metrics",
      "Track KPIs",
      "Align goals",
      "Improve team performance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/performance-metrics-kpis-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 347,
    "title": "Using Dashboards for Business Performance",
    "description": "Master using dashboards for business performance for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, analysts",
    "learningOutcomes": [
      "Use dashboards effectively",
      "Interpret data",
      "Share insights",
      "Improve decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-dashboards-for-business-performance.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 348,
    "title": "Revenue vs. Profit: Managerial Perspective",
    "description": "Master revenue vs. profit: managerial perspective for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Differentiate revenue vs profit",
      "Interpret financials",
      "Manage business health",
      "Improve decision-making."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/revenue-vs-profit-managerial-perspective.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 349,
    "title": "Balancing Cost, Quality & Speed in Projects",
    "description": "Master balancing cost, quality & speed in projects for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Balance competing priorities",
      "Manage trade-offs",
      "Deliver quality",
      "Ensure efficiency."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/balancing-cost-quality-speed-in-projects.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 350,
    "title": "Managing Working Capital at Team Level",
    "description": "Master managing working capital at team level for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Understand working capital",
      "Manage receivables & payables",
      "Improve liquidity",
      "Support operations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-working-capital-at-team-level.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 351,
    "title": "Risk Identification in Team Projects",
    "description": "Master risk identification in team projects for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Team leads, managers",
    "learningOutcomes": [
      "Identify project risks",
      "Classify risks",
      "Anticipate issues",
      "Build proactive awareness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/risk-identification-in-team-projects.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 352,
    "title": "Risk Mitigation Planning for Managers",
    "description": "Master risk mitigation planning for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project leads",
    "learningOutcomes": [
      "Create mitigation strategies",
      "Reduce risks",
      "Monitor execution",
      "Strengthen project resilience."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/risk-mitigation-planning-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 353,
    "title": "Crisis Simulation & Scenario Exercises",
    "description": "Master crisis simulation & scenario exercises for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, teams",
    "learningOutcomes": [
      "Conduct simulations",
      "Test response plans",
      "Identify gaps",
      "Improve preparedness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/crisis-simulation-scenario-exercises.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 354,
    "title": "Building a Business Continuity Plan",
    "description": "Master building a business continuity plan for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Develop continuity plans",
      "Protect operations",
      "Manage crises",
      "Ensure recovery."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-a-business-continuity-plan.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 355,
    "title": "Managing Knowledge Transfer Across Teams",
    "description": "Master managing knowledge transfer across teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR, L&D",
    "learningOutcomes": [
      "Facilitate knowledge sharing",
      "Avoid silos",
      "Ensure smooth transitions",
      "Build documentation practices."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-knowledge-transfer-across-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 356,
    "title": "Succession Planning for Critical Roles",
    "description": "Master succession planning for critical roles for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR",
    "learningOutcomes": [
      "Identify critical roles",
      "Develop successors",
      "Build continuity",
      "Ensure leadership pipeline."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/succession-planning-for-critical-roles.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 357,
    "title": "Retention Strategies for High-Potential Employees",
    "description": "Master retention strategies for high-potential employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR",
    "learningOutcomes": [
      "Identify high-potential talent",
      "Build retention plans",
      "Offer growth",
      "Strengthen engagement."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/retention-strategies-for-high-potential-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 358,
    "title": "Talent Pipeline Development for Managers",
    "description": "Master talent pipeline development for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR",
    "learningOutcomes": [
      "Build pipelines",
      "Forecast talent needs",
      "Align hiring",
      "Ensure future readiness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/talent-pipeline-development-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 359,
    "title": "Workforce Planning & Gap Analysis",
    "description": "Master workforce planning & gap analysis for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR",
    "learningOutcomes": [
      "Conduct workforce analysis",
      "Identify gaps",
      "Plan resources",
      "Align with strategy."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/workforce-planning-gap-analysis.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 360,
    "title": "Designing Employee Development Journeys",
    "description": "Master designing employee development journeys for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR, L&D",
    "learningOutcomes": [
      "Plan learning paths",
      "Personalize journeys",
      "Track growth",
      "Support career development."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/designing-employee-development-journeys.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 361,
    "title": "Job Rotation & Skill Diversification",
    "description": "Master job rotation & skill diversification for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR",
    "learningOutcomes": [
      "Implement job rotation",
      "Build skills",
      "Increase adaptability",
      "Support employee growth."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/job-rotation-skill-diversification.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 362,
    "title": "Measuring Return on Training (ROI of Learning)",
    "description": "Master measuring return on training (roi of learning) for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, L&D teams",
    "learningOutcomes": [
      "Measure training ROI",
      "Track impact",
      "Align with goals",
      "Improve L&D investments."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/measuring-return-on-training-roi-of-learning.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 363,
    "title": "Change Readiness Assessment for Teams",
    "description": "Master change readiness assessment for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR, leaders",
    "learningOutcomes": [
      "Assess readiness",
      "Identify resistance",
      "Build support",
      "Prepare for change."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/change-readiness-assessment-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 364,
    "title": "Building Change Champions in Organizations",
    "description": "Master building change champions in organizations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Identify change champions",
      "Empower advocates",
      "Drive adoption",
      "Build culture of change."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-change-champions-in-organizations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 365,
    "title": "Communicating Change Effectively to Teams",
    "description": "Master communicating change effectively to teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Craft clear messages",
      "Address concerns",
      "Use multiple channels",
      "Build trust in change."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-change-effectively-to-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 366,
    "title": "Overcoming Resistance to Change in Employees",
    "description": "Master overcoming resistance to change in employees for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Understand resistance",
      "Address concerns",
      "Provide support",
      "Improve adoption."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/overcoming-resistance-to-change-in-employees.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 367,
    "title": "Organizational Alignment with Business Strategy",
    "description": "Master organizational alignment with business strategy for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Align teams with strategy",
      "Communicate goals",
      "Track alignment",
      "Build strategic focus."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/organizational-alignment-with-business-strategy.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 368,
    "title": "Creating High-Impact Vision Statements",
    "description": "Master creating high-impact vision statements for professional success and career growth.",
    "category": "Professional Development",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Leaders, executives",
    "learningOutcomes": [
      "Craft compelling vision",
      "Inspire teams",
      "Guide strategy",
      "Build alignment."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creating-high-impact-vision-statements.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 369,
    "title": "Mission, Values & Culture Integration",
    "description": "Master mission, values & culture integration for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Integrate mission & values",
      "Align with culture",
      "Communicate effectively",
      "Strengthen engagement."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/mission-values-culture-integration.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 370,
    "title": "Strategy Cascading from Leadership to Teams",
    "description": "Master strategy cascading from leadership to teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Cascade strategy clearly",
      "Align all levels",
      "Ensure execution",
      "Build accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/strategy-cascading-from-leadership-to-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 371,
    "title": "OKRs vs. KPIs: Choosing the Right Framework",
    "description": "Master okrs vs. kpis: choosing the right framework for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Understand OKRs vs KPIs",
      "Apply correctly",
      "Align with goals",
      "Improve performance tracking."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/okrs-vs-kpis-choosing-the-right-framework.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 372,
    "title": "Balanced Scorecard for Managers",
    "description": "Master balanced scorecard for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Understand balanced scorecard",
      "Apply perspectives",
      "Measure performance",
      "Link strategy and execution."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/balanced-scorecard-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 373,
    "title": "Business Model Canvas for Team Projects",
    "description": "Master business model canvas for team projects for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, teams",
    "learningOutcomes": [
      "Use canvas tool",
      "Map business ideas",
      "Align stakeholders",
      "Build clarity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-model-canvas-for-team-projects.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 374,
    "title": "SWOT & PESTEL Analysis Made Simple",
    "description": "Master swot & pestel analysis made simple for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Conduct SWOT & PESTEL",
      "Identify strengths and risks",
      "Support strategy",
      "Simplify analysis."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/swot-pestel-analysis-made-simple.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 375,
    "title": "Scenario Planning for Emerging Markets",
    "description": "Master scenario planning for emerging markets for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, strategists",
    "learningOutcomes": [
      "Analyze emerging markets",
      "Build scenarios",
      "Prepare strategies",
      "Adapt to uncertainty."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/scenario-planning-for-emerging-markets.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 376,
    "title": "Blue Ocean vs. Red Ocean Strategies",
    "description": "Master blue ocean vs. red ocean strategies for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, strategists",
    "learningOutcomes": [
      "Understand Blue vs Red ocean",
      "Create differentiation",
      "Build growth strategies",
      "Avoid intense competition."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/blue-ocean-vs-red-ocean-strategies.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 377,
    "title": "Building Competitive Advantage in Teams",
    "description": "Master building competitive advantage in teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leaders",
    "learningOutcomes": [
      "Identify advantages",
      "Build differentiation",
      "Sustain value",
      "Strengthen team success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-competitive-advantage-in-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 378,
    "title": "Market Sensing & Early Trend Detection",
    "description": "Master market sensing & early trend detection for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Detect trends early",
      "Monitor markets",
      "Leverage insights",
      "Gain competitive edge."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/market-sensing-early-trend-detection.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 379,
    "title": "Creating Customer Journey Maps",
    "description": "Master creating customer journey maps for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, marketing teams",
    "learningOutcomes": [
      "Map customer journeys",
      "Identify touchpoints",
      "Improve experience",
      "Align teams with CX."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creating-customer-journey-maps.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 380,
    "title": "Voice of Customer (VoC) for Managers",
    "description": "Master voice of customer (voc) for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Capture customer feedback",
      "Analyze insights",
      "Improve offerings",
      "Build stronger CX."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/voice-of-customer-voc-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 381,
    "title": "Service Excellence Frameworks",
    "description": "Master service excellence frameworks for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, teams",
    "learningOutcomes": [
      "Apply service frameworks",
      "Improve customer service",
      "Build consistency",
      "Drive loyalty."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/service-excellence-frameworks.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 382,
    "title": "Net Promoter Score (NPS) Management",
    "description": "Master net promoter score (nps) management for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, marketing teams",
    "learningOutcomes": [
      "Measure NPS",
      "Interpret feedback",
      "Improve customer experience",
      "Drive loyalty programs."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/net-promoter-score-nps-management.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 383,
    "title": "Customer Retention Strategies for Teams",
    "description": "Master customer retention strategies for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Build retention plans",
      "Strengthen loyalty",
      "Engage customers",
      "Reduce churn."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/customer-retention-strategies-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 384,
    "title": "Complaint Handling & Service Recovery",
    "description": "Master complaint handling & service recovery for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing teams",
    "learningOutcomes": [
      "Handle complaints calmly",
      "Provide recovery solutions",
      "Retain customers",
      "Build loyalty."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/complaint-handling-service-recovery.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 385,
    "title": "Managing Online Reputation & Reviews",
    "description": "Master managing online reputation & reviews for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Marketing, CX teams",
    "learningOutcomes": [
      "Monitor online reviews",
      "Respond professionally",
      "Manage crises",
      "Strengthen reputation."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-online-reputation-reviews.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 386,
    "title": "Brand Consistency Across Teams",
    "description": "Master brand consistency across teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, marketing teams",
    "learningOutcomes": [
      "Maintain brand voice",
      "Ensure consistency",
      "Avoid misrepresentation",
      "Strengthen identity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/brand-consistency-across-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 387,
    "title": "Marketing Funnel Basics for Non-Marketers",
    "description": "Master marketing funnel basics for non-marketers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand marketing funnels",
      "Identify stages",
      "Support conversions",
      "Align with marketing goals."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/marketing-funnel-basics-for-non-marketers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 388,
    "title": "Sales & Marketing Alignment at Work",
    "description": "Master sales & marketing alignment at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales & marketing teams",
    "learningOutcomes": [
      "Improve alignment",
      "Share goals",
      "Collaborate effectively",
      "Boost revenue outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/sales-marketing-alignment-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 389,
    "title": "Key Account Management Essentials",
    "description": "Master key account management essentials for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales managers, account managers",
    "learningOutcomes": [
      "Manage key accounts",
      "Build strong relationships",
      "Deliver value",
      "Improve retention."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/key-account-management-essentials.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 390,
    "title": "Sales Forecasting for Managers",
    "description": "Master sales forecasting for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales managers, leaders",
    "learningOutcomes": [
      "Forecast sales accurately",
      "Use tools",
      "Align with strategy",
      "Improve planning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/sales-forecasting-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 391,
    "title": "Upselling & Cross-Selling Strategies",
    "description": "Master upselling & cross-selling strategies for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales teams",
    "learningOutcomes": [
      "Identify opportunities",
      "Apply strategies",
      "Increase revenue",
      "Improve customer value."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/upselling-cross-selling-strategies.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 392,
    "title": "Consultative Selling Skills for Teams",
    "description": "Master consultative selling skills for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales teams",
    "learningOutcomes": [
      "Ask probing questions",
      "Listen actively",
      "Provide tailored solutions",
      "Build trust with clients."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/consultative-selling-skills-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 393,
    "title": "Territory Management for Sales Leaders",
    "description": "Master territory management for sales leaders for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales leaders, managers",
    "learningOutcomes": [
      "Plan territory coverage",
      "Optimize resources",
      "Track performance",
      "Improve sales outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/territory-management-for-sales-leaders.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 394,
    "title": "Incentive & Commission Structures for Sales",
    "description": "Master incentive & commission structures for sales for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales leaders, HR",
    "learningOutcomes": [
      "Design incentives",
      "Align with performance",
      "Motivate teams",
      "Ensure fairness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/incentive-commission-structures-for-sales.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 395,
    "title": "Business Development Tactics for Non-Sales Roles",
    "description": "Master business development tactics for non-sales roles for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify BD opportunities",
      "Build relationships",
      "Support growth",
      "Contribute beyond sales."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-development-tactics-for-non-sales-roles.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 396,
    "title": "Building Partnerships & Alliances",
    "description": "Master building partnerships & alliances for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Identify partners",
      "Negotiate collaborations",
      "Build alliances",
      "Strengthen business networks."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-partnerships-alliances.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 397,
    "title": "Channel Management Strategies",
    "description": "Master channel management strategies for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales managers, marketing teams",
    "learningOutcomes": [
      "Manage channels effectively",
      "Optimize distribution",
      "Build partnerships",
      "Increase reach."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/channel-management-strategies.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 398,
    "title": "Franchise & Licensing Models Explained",
    "description": "Master franchise & licensing models explained for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, entrepreneurs",
    "learningOutcomes": [
      "Understand franchise basics",
      "Explore licensing models",
      "Evaluate opportunities",
      "Avoid pitfalls."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/franchise-licensing-models-explained.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 399,
    "title": "Pricing Strategies for Business Growth",
    "description": "Master pricing strategies for business growth for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, sales leaders",
    "learningOutcomes": [
      "Explore pricing strategies",
      "Align with goals",
      "Drive revenue",
      "Ensure competitiveness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/pricing-strategies-for-business-growth.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 400,
    "title": "Cost-Plus vs. Value-Based Pricing",
    "description": "Master cost-plus vs. value-based pricing for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, sales teams",
    "learningOutcomes": [
      "Compare pricing methods",
      "Apply value-based strategies",
      "Ensure profitability",
      "Support growth."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cost-plus-vs-value-based-pricing.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 401,
    "title": "Competitive Pricing Tactics",
    "description": "Master competitive pricing tactics for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, marketing teams",
    "learningOutcomes": [
      "Analyze competitors",
      "Set competitive prices",
      "Manage discounts",
      "Improve positioning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/competitive-pricing-tactics.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 402,
    "title": "Dynamic Pricing Models with Examples",
    "description": "Master dynamic pricing models with examples for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, sales teams",
    "learningOutcomes": [
      "Understand dynamic pricing",
      "Use real-time models",
      "Apply examples",
      "Boost revenue."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/dynamic-pricing-models-with-examples.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 403,
    "title": "Managing Discounts & Promotions Responsibly",
    "description": "Master managing discounts & promotions responsibly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Sales, marketing teams",
    "learningOutcomes": [
      "Plan promotions",
      "Avoid over-discounting",
      "Protect margins",
      "Drive sustainable growth."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-discounts-promotions-responsibly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 404,
    "title": "Introduction to Corporate Finance for Managers",
    "description": "Master introduction to corporate finance for managers for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Understand corporate finance basics",
      "Interpret reports",
      "Apply financial concepts",
      "Support decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/introduction-to-corporate-finance-for-managers.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 405,
    "title": "Cash Flow Management for Teams",
    "description": "Master cash flow management for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Track cash flow",
      "Manage inflows/outflows",
      "Ensure liquidity",
      "Support team decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cash-flow-management-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 406,
    "title": "Break-Even Analysis for Decision Making",
    "description": "Master break-even analysis for decision making for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Calculate break-even",
      "Use analysis in decisions",
      "Manage risks",
      "Support planning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/break-even-analysis-for-decision-making.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 407,
    "title": "Return on Investment (ROI) Basics",
    "description": "Master return on investment (roi) basics for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, employees",
    "learningOutcomes": [
      "Understand ROI",
      "Calculate returns",
      "Apply to projects",
      "Support financial decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/return-on-investment-roi-basics.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 408,
    "title": "Capital Budgeting for Business Projects",
    "description": "Master capital budgeting for business projects for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Evaluate projects",
      "Allocate capital",
      "Analyze returns",
      "Improve investment decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/capital-budgeting-for-business-projects.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 409,
    "title": "Project Cost Estimation Techniques",
    "description": "Master project cost estimation techniques for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project teams",
    "learningOutcomes": [
      "Estimate costs accurately",
      "Use estimation methods",
      "Avoid overruns",
      "Improve planning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/project-cost-estimation-techniques.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 410,
    "title": "Budget Variance Analysis for Managers",
    "description": "Master budget variance analysis for managers for professional success and career growth.",
    "category": "Business & Finance",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Analyze variances",
      "Identify causes",
      "Adjust budgets",
      "Improve forecasting accuracy."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/budget-variance-analysis-for-managers.png",
    "tags": [
      "Business & Finance",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 411,
    "title": "Internal Controls for Managers",
    "description": "Master internal controls for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Implement controls",
      "Prevent fraud",
      "Ensure compliance",
      "Strengthen governance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/internal-controls-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 412,
    "title": "Audit Readiness for Non-Financial Teams",
    "description": "Master audit readiness for non-financial teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Prepare for audits",
      "Maintain records",
      "Follow compliance",
      "Build audit confidence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/audit-readiness-for-non-financial-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 413,
    "title": "Business Ethics in Financial Decisions",
    "description": "Master business ethics in financial decisions for professional success and career growth.",
    "category": "Compliance & Safety",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Apply ethics in finance",
      "Avoid conflicts",
      "Ensure transparency",
      "Build trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-ethics-in-financial-decisions.png",
    "tags": [
      "Compliance & Safety",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 414,
    "title": "Corporate Governance Essentials",
    "description": "Master corporate governance essentials for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Understand governance principles",
      "Align with laws",
      "Ensure accountability",
      "Build credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/corporate-governance-essentials.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 415,
    "title": "Board & Executive Relations for Managers",
    "description": "Master board & executive relations for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Engage with boards",
      "Prepare reports",
      "Build trust",
      "Support decision-making."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/board-executive-relations-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 416,
    "title": "Reporting to Senior Leadership Effectively",
    "description": "Master reporting to senior leadership effectively for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads",
    "learningOutcomes": [
      "Prepare concise reports",
      "Use visuals",
      "Highlight key points",
      "Build credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/reporting-to-senior-leadership-effectively.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 417,
    "title": "Investor Relations Basics for Business Leaders",
    "description": "Master investor relations basics for business leaders for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers",
    "learningOutcomes": [
      "Understand investor relations",
      "Communicate with stakeholders",
      "Build trust",
      "Manage expectations."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/investor-relations-basics-for-business-leaders.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 418,
    "title": "Business Law Essentials for Managers",
    "description": "Master business law essentials for managers for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, leaders",
    "learningOutcomes": [
      "Understand business laws",
      "Manage compliance",
      "Avoid risks",
      "Strengthen decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/business-law-essentials-for-managers.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 419,
    "title": "Intellectual Property Awareness for Teams",
    "description": "Master intellectual property awareness for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Protect IP rights",
      "Understand patents",
      "Respect copyrights",
      "Avoid infringements."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/intellectual-property-awareness-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 420,
    "title": "Contract Negotiation Strategies",
    "description": "Master contract negotiation strategies for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, procurement teams",
    "learningOutcomes": [
      "Negotiate contracts",
      "Manage risks",
      "Build fairness",
      "Strengthen agreements."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/contract-negotiation-strategies.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 421,
    "title": "Compliance Management in Daily Operations",
    "description": "Master compliance management in daily operations for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, employees",
    "learningOutcomes": [
      "Follow compliance rules",
      "Reduce risks",
      "Implement policies",
      "Maintain standards."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/compliance-management-in-daily-operations.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 422,
    "title": "Regulatory Reporting Basics for Non-Finance Teams",
    "description": "Master regulatory reporting basics for non-finance teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand reporting basics",
      "Prepare accurate data",
      "Meet timelines",
      "Avoid penalties."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/regulatory-reporting-basics-for-non-finance-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 423,
    "title": "Anti-Bribery & Corruption Awareness",
    "description": "Master anti-bribery & corruption awareness for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Identify bribery risks",
      "Follow policies",
      "Report violations",
      "Build ethical culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/anti-bribery-corruption-awareness.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 424,
    "title": "Supply Chain Management Fundamentals",
    "description": "Master supply chain management fundamentals for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, operations teams",
    "learningOutcomes": [
      "Understand supply chains",
      "Manage flows",
      "Improve efficiency",
      "Build resilience."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/supply-chain-management-fundamentals.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 425,
    "title": "Inventory Management for Managers",
    "description": "Master inventory management for managers for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, operations teams",
    "learningOutcomes": [
      "Track inventory",
      "Avoid stockouts",
      "Reduce costs",
      "Optimize storage."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/inventory-management-for-managers.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 426,
    "title": "Logistics & Distribution Basics",
    "description": "Master logistics & distribution basics for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, operations teams",
    "learningOutcomes": [
      "Understand logistics",
      "Plan distribution",
      "Manage costs",
      "Improve customer service."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/logistics-distribution-basics.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 427,
    "title": "Sustainable Supply Chain Practices",
    "description": "Master sustainable supply chain practices for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, operations teams",
    "learningOutcomes": [
      "Implement sustainable practices",
      "Reduce impact",
      "Build green supply chains",
      "Improve compliance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/sustainable-supply-chain-practices.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 428,
    "title": "Crafting Effective Elevator Pitches",
    "description": "Master crafting effective elevator pitches for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Create concise pitches",
      "Highlight value",
      "Engage stakeholders",
      "Build confidence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/crafting-effective-elevator-pitches.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 429,
    "title": "Handling Confidential Information Securely",
    "description": "Master handling confidential information securely for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Protect sensitive info",
      "Follow security protocols",
      "Avoid leaks",
      "Build trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-confidential-information-securely.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 430,
    "title": "Creating SMART Goals at Work",
    "description": "Master creating smart goals at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Define SMART goals",
      "Align with business",
      "Track progress",
      "Improve accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/creating-smart-goals-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 431,
    "title": "Writing Professional Thank-You Notes",
    "description": "Master writing professional thank-you notes for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Write sincere notes",
      "Show gratitude",
      "Strengthen relationships",
      "Build professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/writing-professional-thank-you-notes.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 432,
    "title": "Managing Multiple Stakeholders in a Project",
    "description": "Master managing multiple stakeholders in a project for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, project leads",
    "learningOutcomes": [
      "Identify stakeholders",
      "Manage interests",
      "Balance priorities",
      "Ensure project success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-multiple-stakeholders-in-a-project.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 433,
    "title": "The Dos and Don’ts of Workplace Chat Tools",
    "description": "Master the dos and don’ts of workplace chat tools for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use chat tools responsibly",
      "Avoid misuse",
      "Communicate clearly",
      "Improve productivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/the-dos-and-donts-of-workplace-chat-tools.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 434,
    "title": "Preparing for Performance Reviews",
    "description": "Master preparing for performance reviews for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Prepare effectively",
      "Highlight achievements",
      "Address feedback",
      "Plan development."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preparing-for-performance-reviews.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 435,
    "title": "Building Resilience to Workplace Change",
    "description": "Master building resilience to workplace change for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Adapt to change",
      "Build resilience",
      "Manage stress",
      "Stay positive."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-resilience-to-workplace-change.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 436,
    "title": "Handling Interruptions Without Losing Focus",
    "description": "Master handling interruptions without losing focus for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage interruptions",
      "Stay focused",
      "Set boundaries",
      "Maintain productivity."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-interruptions-without-losing-focus.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 437,
    "title": "Avoiding Scope Creep in Projects",
    "description": "Master avoiding scope creep in projects for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, project teams",
    "learningOutcomes": [
      "Define project scope",
      "Communicate clearly",
      "Avoid additional tasks",
      "Stay on track."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/avoiding-scope-creep-in-projects.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 438,
    "title": "Organizing Team Knowledge in Wikis/Shared Docs",
    "description": "Master organizing team knowledge in wikis/shared docs for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Document knowledge",
      "Use wikis",
      "Share updates",
      "Improve collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/organizing-team-knowledge-in-wikisshared-docs.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 439,
    "title": "Handling Workload Spikes Without Stress",
    "description": "Master handling workload spikes without stress for professional success and career growth.",
    "category": "Emotional Intelligence",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Manage peak workload",
      "Prioritize tasks",
      "Maintain balance",
      "Avoid burnout."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-workload-spikes-without-stress.png",
    "tags": [
      "Emotional Intelligence",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 440,
    "title": "Conflict De-Escalation Techniques",
    "description": "Master conflict de-escalation techniques for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers",
    "learningOutcomes": [
      "Calm tense situations",
      "Use respectful tone",
      "Find solutions",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/conflict-de-escalation-techniques.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 441,
    "title": "Managing Client Expectations Effectively",
    "description": "Master managing client expectations effectively for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing teams",
    "learningOutcomes": [
      "Clarify client needs",
      "Set realistic goals",
      "Communicate proactively",
      "Build trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managing-client-expectations-effectively.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 442,
    "title": "Following Up After Networking Events",
    "description": "Master following up after networking events for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Send timely follow-ups",
      "Personalize communication",
      "Strengthen connections",
      "Build relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/following-up-after-networking-events.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 443,
    "title": "Using Calendars as a Productivity Tool",
    "description": "Master using calendars as a productivity tool for professional success and career growth.",
    "category": "Productivity",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Use calendars effectively",
      "Plan schedules",
      "Avoid conflicts",
      "Improve time management."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/using-calendars-as-a-productivity-tool.png",
    "tags": [
      "Productivity",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 444,
    "title": "Handling Remote Interviews Professionally",
    "description": "Master handling remote interviews professionally for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Job applicants, managers",
    "learningOutcomes": [
      "Prepare for virtual interviews",
      "Communicate confidently",
      "Manage tech tools",
      "Leave positive impression."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/handling-remote-interviews-professionally.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 445,
    "title": "Decision-Making in Small Teams",
    "description": "Master decision-making in small teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Small teams, managers",
    "learningOutcomes": [
      "Facilitate decisions",
      "Use consensus methods",
      "Balance opinions",
      "Ensure quick results."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/decision-making-in-small-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 446,
    "title": "Writing Professional Out-of-Office Messages",
    "description": "Master writing professional out-of-office messages for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Write clear messages",
      "Share key details",
      "Set expectations",
      "Maintain professionalism."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/writing-professional-out-of-office-messages.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 447,
    "title": "Communicating Deadlines Clearly",
    "description": "Master communicating deadlines clearly for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "State deadlines clearly",
      "Avoid ambiguity",
      "Manage expectations",
      "Improve accountability."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-deadlines-clearly.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 448,
    "title": "Staying Engaged in Long Meetings",
    "description": "Master staying engaged in long meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Maintain focus",
      "Participate actively",
      "Take notes",
      "Contribute productively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/staying-engaged-in-long-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 449,
    "title": "Professional Behavior in Virtual Conferences",
    "description": "Master professional behavior in virtual conferences for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Join professionally",
      "Respect etiquette",
      "Engage appropriately",
      "Represent company well."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-behavior-in-virtual-conferences.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 450,
    "title": "Preparing Handovers Before Vacations/Leaves",
    "description": "Master preparing handovers before vacations/leaves for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Plan handovers",
      "Share key details",
      "Avoid disruptions",
      "Ensure smooth workflow."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/preparing-handovers-before-vacationsleaves.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 451,
    "title": "Effective Business Communication",
    "description": "Master effective business communication for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially early-career professionals",
    "learningOutcomes": [
      "Understand core communication principles",
      "Adapt communication style to different audiences",
      "Improve clarity and conciseness in workplace interactions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/effective-business-communication.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 452,
    "title": "Presentation & Public Speaking",
    "description": "Master presentation & public speaking for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Client-facing employees, managers, leaders",
    "learningOutcomes": [
      "Design structured presentations",
      "Speak with confidence",
      "Use voice, body language, and visuals effectively",
      "Handle audience questions with ease."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/presentation-public-speaking.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 453,
    "title": "Professional Email & Business Writing",
    "description": "Master professional email & business writing for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees in desk-based or hybrid roles",
    "learningOutcomes": [
      "Write professional emails with correct tone and etiquette",
      "Avoid common grammar mistakes",
      "Improve response rates through clarity",
      "Build professional credibility."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/professional-email-business-writing.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 454,
    "title": "The Complete Communication Skills Master Class for Life",
    "description": "Master the complete communication skills master class for life for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, general workforce",
    "learningOutcomes": [
      "Build strong verbal, nonverbal, and written communication",
      "Apply active listening",
      "Improve workplace relationships",
      "Adapt to different communication contexts."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/the-complete-communication-skills-master-class-for.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 455,
    "title": "Writing With Flair: How To Become An Exceptional Writer",
    "description": "Master writing with flair: how to become an exceptional writer for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Professionals in documentation-heavy roles",
    "learningOutcomes": [
      "Use persuasive and engaging writing",
      "Eliminate fluff",
      "Apply storytelling to business documents",
      "Improve professional writing quality."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/writing-with-flair-how-to-become-an-exceptional-wr.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 456,
    "title": "Email Etiquette: Write More Effective Emails at Work",
    "description": "Master email etiquette: write more effective emails at work for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees using email daily",
    "learningOutcomes": [
      "Apply professional tone and structure",
      "Avoid overuse of CC/BCC",
      "Reduce email miscommunication",
      "Enhance workplace reputation."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/email-etiquette-write-more-effective-emails-at-wor.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 457,
    "title": "Cross-Cultural Communication",
    "description": "Master cross-cultural communication for professional success and career growth.",
    "category": "Communication",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Global workforce, employees in MNCs",
    "learningOutcomes": [
      "Understand cultural differences in communication",
      "Avoid cross-cultural missteps",
      "Build cultural sensitivity",
      "Adapt style for global collaboration."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/cross-cultural-communication.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 458,
    "title": "Feedback & Performance Conversations",
    "description": "Master feedback & performance conversations for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads, mentors",
    "learningOutcomes": [
      "Deliver feedback constructively",
      "Balance positive vs. developmental feedback",
      "Use structured feedback models (SBI, STAR)",
      "Improve team performance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/feedback-performance-conversations.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 459,
    "title": "Emotional Intelligence for Teams",
    "description": "Master emotional intelligence for teams for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "All team members, especially cross-functional",
    "learningOutcomes": [
      "Recognize and manage emotions",
      "Improve collaboration",
      "Build empathy in team dynamics",
      "Resolve interpersonal friction effectively."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/emotional-intelligence-for-teams.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 460,
    "title": "Conflict Resolution & Negotiation",
    "description": "Master conflict resolution & negotiation for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially team leads",
    "learningOutcomes": [
      "Recognize sources of conflict",
      "Apply negotiation techniques",
      "Find win-win outcomes",
      "Strengthen workplace relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/conflict-resolution-negotiation.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 461,
    "title": "Conflict Management with Emotional Intelligence",
    "description": "Master conflict management with emotional intelligence for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR professionals",
    "learningOutcomes": [
      "Manage conflict empathetically",
      "De-escalate tense situations",
      "Balance logic with emotional awareness",
      "Promote constructive resolutions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/conflict-management-with-emotional-intelligence.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 462,
    "title": "Master Your Emotions During Conflict",
    "description": "Master master your emotions during conflict for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Apply self-regulation techniques",
      "Reduce emotional escalation",
      "Stay professional in disagreements",
      "Resolve issues calmly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/master-your-emotions-during-conflict.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 463,
    "title": "Team Collaboration & Trust Building",
    "description": "Master team collaboration & trust building for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, project teams",
    "learningOutcomes": [
      "Develop trust in professional settings",
      "Apply collaboration tools",
      "Strengthen accountability within teams",
      "Foster psychological safety."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/team-collaboration-trust-building.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 464,
    "title": "Personal Accountability at Work",
    "description": "Master personal accountability at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Take ownership of tasks",
      "Avoid blame-shifting",
      "Build reliability",
      "Increase individual contribution to team success."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/personal-accountability-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 465,
    "title": "Leadership Fundamentals",
    "description": "Master leadership fundamentals for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "New managers, aspiring leaders",
    "learningOutcomes": [
      "Understand leadership basics",
      "Build vision and influence",
      "Motivate team members",
      "Apply ethical leadership practices."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/leadership-fundamentals.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 466,
    "title": "Leadership: Practical Leadership Skills",
    "description": "Master leadership: practical leadership skills for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Supervisors, mid-level managers",
    "learningOutcomes": [
      "Apply situational leadership",
      "Manage team challenges",
      "Communicate vision clearly",
      "Develop coaching style."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/Leadership_Practical_leadership_skills.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 467,
    "title": "Management Skills Training for New & Experienced Managers",
    "description": "Master management skills training for new & experienced managers for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Team leads, managers",
    "learningOutcomes": [
      "Master delegation and prioritization",
      "Conduct effective meetings",
      "Handle team conflicts",
      "Improve productivity through management practices."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/management-skills-training-for-new-experienced-man.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 468,
    "title": "New Manager: The Basics and More of Being a Great Leader",
    "description": "Master new manager: the basics and more of being a great leader for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "First-time managers",
    "learningOutcomes": [
      "Transition from peer to manager",
      "Set expectations",
      "Conduct 1:1s",
      "Build credibility and trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/new-manager-the-basics-and-more-of-being-a-great-l.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 469,
    "title": "The Science of Leadership",
    "description": "Master the science of leadership for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Senior leaders, executives",
    "learningOutcomes": [
      "Apply psychological principles to leadership",
      "Use evidence-based decision-making",
      "Improve influence and authority",
      "Foster innovation."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/the-science-of-leadership.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 470,
    "title": "Think Like a Leader",
    "description": "Master think like a leader for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Aspiring leaders, mid-level employees",
    "learningOutcomes": [
      "Develop strategic mindset",
      "Build resilience",
      "Communicate vision persuasively",
      "Lead by example."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/think-like-a-leader.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 471,
    "title": "How to Manage & Influence Your Virtual Team",
    "description": "Master how to manage & influence your virtual team for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Remote and hybrid team leaders",
    "learningOutcomes": [
      "Use digital collaboration tools effectively",
      "Maintain trust remotely",
      "Keep team engagement high",
      "Manage across time zones."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/how-to-manage-influence-your-virtual-team.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 472,
    "title": "Performance Management: Build a High Performing Team",
    "description": "Master performance management: build a high performing team for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, HR leaders",
    "learningOutcomes": [
      "Apply performance frameworks",
      "Set KPIs/OKRs",
      "Conduct fair appraisals",
      "Manage underperformance with empathy."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/performance-management-build-a-high-performing-tea.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 473,
    "title": "Manager’s Guide to Effective 1:1 Meetings",
    "description": "Master manager’s guide to effective 1:1 meetings for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "People managers",
    "learningOutcomes": [
      "Plan structured 1:1s",
      "Use coaching questions",
      "Track employee progress",
      "Strengthen manager–employee relationship."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/managers-guide-to-effective-11-meetings.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 474,
    "title": "Be a Great Mentor: A Practical Guide to Mentorship",
    "description": "Master be a great mentor: a practical guide to mentorship for professional success and career growth.",
    "category": "Leadership",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Experienced professionals, managers",
    "learningOutcomes": [
      "Structure mentorship programs",
      "Guide mentees’ career growth",
      "Apply active listening and questioning",
      "Create measurable mentorship outcomes."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/be-a-great-mentor-a-practical-guide-to-mentorship.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 475,
    "title": "Workplace Diversity & Inclusion",
    "description": "Master workplace diversity & inclusion for professional success and career growth.",
    "category": "Diversity & Inclusion",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand importance of diversity",
      "Apply inclusive workplace practices",
      "Recognize and prevent exclusionary behavior",
      "Support equity initiatives."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/workplace-diversity-inclusion.png",
    "tags": [
      "Diversity & Inclusion",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 476,
    "title": "Unconscious Bias: Fuel Diversity and Become a Better You",
    "description": "Master unconscious bias: fuel diversity and become a better you for professional success and career growth.",
    "category": "Diversity & Inclusion",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially hiring managers",
    "learningOutcomes": [
      "Recognize personal biases",
      "Minimize impact in decision-making",
      "Promote fairness and inclusion",
      "Build self-awareness for better workplace culture."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/unconscious-bias-fuel-diversity-and-become-a-bette.png",
    "tags": [
      "Diversity & Inclusion",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 477,
    "title": "Workplace Etiquette & Professionalism",
    "description": "Master workplace etiquette & professionalism for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Practice professional behavior",
      "Respect workplace boundaries",
      "Apply etiquette in meetings, emails, and office settings",
      "Strengthen workplace reputation."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/workplace-etiquette-professionalism.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 478,
    "title": "Time Management & Productivity",
    "description": "Master time management & productivity for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Prioritize tasks effectively",
      "Apply time-blocking techniques",
      "Avoid procrastination",
      "Improve daily output."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/time-management-productivity.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 479,
    "title": "Stress Management & Resilience",
    "description": "Master stress management & resilience for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially high-stress roles",
    "learningOutcomes": [
      "Identify stress triggers",
      "Apply coping strategies",
      "Build resilience",
      "Maintain work-life balance."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/stress-management-resilience.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 480,
    "title": "Adaptability in a Changing Workplace",
    "description": "Master adaptability in a changing workplace for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Develop flexibility during transitions",
      "Accept new tools and systems",
      "Manage uncertainty",
      "Stay productive during change."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/Adaptability_in_a_changing_workplace.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 481,
    "title": "Building a Growth Mindset",
    "description": "Master building a growth mindset for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Embrace challenges as opportunities",
      "Replace fixed mindset with growth habits",
      "Build resilience",
      "Apply continuous learning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-a-growth-mindset.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 482,
    "title": "Innovation & Creative Thinking",
    "description": "Master innovation & creative thinking for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Apply brainstorming techniques",
      "Foster creative problem-solving",
      "Overcome mental blocks",
      "Turn ideas into action."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/innovation-creative-thinking.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 483,
    "title": "Critical Thinking Strategies for Better Decisions",
    "description": "Master critical thinking strategies for better decisions for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Analyze situations objectively",
      "Identify assumptions and biases",
      "Apply structured thinking",
      "Make sound business decisions."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/critical-thinking-strategies-for-better-decisions.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 484,
    "title": "Anti-Harassment & Workplace Conduct",
    "description": "Master anti-harassment & workplace conduct for professional success and career growth.",
    "category": "Compliance & Safety",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Recognize workplace harassment",
      "Apply respectful conduct",
      "Report issues properly",
      "Build safe work environments."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/anti-harassment-workplace-conduct.png",
    "tags": [
      "Compliance & Safety",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 485,
    "title": "Equal Opportunity & Non-Discrimination",
    "description": "Master equal opportunity & non-discrimination for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand equal opportunity laws",
      "Identify workplace discrimination",
      "Support fairness and equity",
      "Build an inclusive workplace."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/equal-opportunity-non-discrimination.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 486,
    "title": "Ethics, Fraud & Anti-Money Laundering",
    "description": "Master ethics, fraud & anti-money laundering for professional success and career growth.",
    "category": "Compliance & Safety",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Finance teams, compliance staff, managers",
    "learningOutcomes": [
      "Identify red flags of fraud",
      "Understand AML principles",
      "Apply ethical business practices",
      "Comply with legal requirements."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/ethics-fraud-anti-money-laundering.png",
    "tags": [
      "Compliance & Safety",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 487,
    "title": "Data Privacy & Protection",
    "description": "Master data privacy & protection for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees handling data",
    "learningOutcomes": [
      "Understand importance of personal data",
      "Apply workplace data protection policies",
      "Comply with privacy laws (GDPR, etc.)",
      "Reduce data risks."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/data-privacy-protection.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 488,
    "title": "Environmental Regulations & Sustainability",
    "description": "Master environmental regulations & sustainability for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, especially supply chain and operations",
    "learningOutcomes": [
      "Understand sustainability principles",
      "Comply with environmental regulations",
      "Apply eco-friendly practices",
      "Support organizational CSR goals."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/environmental-regulations-sustainability.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 489,
    "title": "Workplace Safety & Health Compliance",
    "description": "Master workplace safety & health compliance for professional success and career growth.",
    "category": "Compliance & Safety",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Follow safety guidelines",
      "Recognize hazards",
      "Apply first-aid basics",
      "Ensure compliance with workplace safety rules."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/workplace-safety-health-compliance.png",
    "tags": [
      "Compliance & Safety",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 490,
    "title": "Emergency Preparedness & Crisis Management",
    "description": "Master emergency preparedness & crisis management for professional success and career growth.",
    "category": "Leadership",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees, managers, crisis response teams",
    "learningOutcomes": [
      "Develop emergency response skills",
      "Apply evacuation protocols",
      "Manage crises calmly",
      "Build business continuity awareness."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/emergency-preparedness-crisis-management.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 491,
    "title": "Generative AI for Business Leaders: A Quick Overview",
    "description": "Master generative ai for business leaders: a quick overview for professional success and career growth.",
    "category": "Technology & Innovation",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Senior leaders, managers",
    "learningOutcomes": [
      "Understand generative AI basics",
      "Identify business use cases",
      "Evaluate risks and opportunities",
      "Support AI adoption responsibly."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/generative-ai-for-business-leaders-a-quick-overvie.png",
    "tags": [
      "Technology & Innovation",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 492,
    "title": "Change Management for Leaders: Lead Like a Lion",
    "description": "Master change management for leaders: lead like a lion for professional success and career growth.",
    "category": "Leadership",
    "level": "Advanced",
    "duration": "30 mins",
    "targetAudience": "Senior leaders, managers",
    "learningOutcomes": [
      "Lead organizational change",
      "Build trust during transitions",
      "Communicate change effectively",
      "Motivate teams through uncertainty."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/change-management-for-leaders-lead-like-a-lion.png",
    "tags": [
      "Leadership",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 493,
    "title": "Become a Product Manager | Learn the Skills & Get the Job",
    "description": "Master become a product manager | learn the skills & get the job for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Aspiring product managers",
    "learningOutcomes": [
      "Understand PM role and responsibilities",
      "Learn roadmap planning",
      "Conduct market analysis",
      "Communicate with cross-functional teams."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/become-a-product-manager-learn-the-skills-get-the-.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 494,
    "title": "POSH Awareness",
    "description": "Master posh awareness for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Understand Prevention of Sexual Harassment Act",
      "Recognize inappropriate behavior",
      "Report issues safely",
      "Promote a respectful workplace."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/posh-awareness.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 495,
    "title": "Mastering Difficult Conversations at Work",
    "description": "Master mastering difficult conversations at work for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Managers, team leads, HR professionals",
    "learningOutcomes": [
      "Structure tough conversations",
      "Balance empathy with assertiveness",
      "Resolve conflicts respectfully",
      "Maintain workplace relationships."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/mastering-difficult-conversations-at-work.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 496,
    "title": "Nonverbal Communication & Body Language",
    "description": "Master nonverbal communication & body language for professional success and career growth.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Read body language cues",
      "Use gestures effectively",
      "Improve presence in meetings",
      "Build trust and confidence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/nonverbal-communication-body-language.png",
    "tags": [
      "Communication",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 497,
    "title": "Storytelling for Business Impact",
    "description": "Master storytelling for business impact for professional success and career growth.",
    "category": "Professional Development",
    "level": "Intermediate",
    "duration": "30 mins",
    "targetAudience": "Leaders, managers, client-facing employees",
    "learningOutcomes": [
      "Craft compelling stories for influence",
      "Apply storytelling to presentations",
      "Connect emotionally with audiences",
      "Strengthen brand messaging."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/storytelling-for-business-impact.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 498,
    "title": "Communicating with Clarity & Confidence",
    "description": "Master communicating with clarity & confidence for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Deliver clear and confident messages",
      "Reduce filler words",
      "Structure conversations effectively",
      "Improve professional presence."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/communicating-with-clarity-confidence.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 499,
    "title": "Listening to Understand: Active Listening Deep Dive",
    "description": "Master listening to understand: active listening deep dive for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "All employees",
    "learningOutcomes": [
      "Apply active listening techniques",
      "Ask clarifying questions",
      "Build empathy",
      "Strengthen collaboration and trust."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/listening-to-understand-active-listening-deep-dive.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  },
  {
    "id": 500,
    "title": "Building a Feedback Culture",
    "description": "Master building a feedback culture for professional success and career growth.",
    "category": "Professional Development",
    "level": "Beginner",
    "duration": "30 mins",
    "targetAudience": "Managers, HR, all employees",
    "learningOutcomes": [
      "Promote feedback as growth tool",
      "Deliver constructive feedback",
      "Receive feedback gracefully",
      "Build continuous learning."
    ],
    "deliveryFormat": "Portrait video + Quiz + LinkedIn Certificate",
    "assessment": "Yes",
    "certificate": "Available",
    "image": "/final/building-a-feedback-culture.png",
    "tags": [
      "Professional Development",
      "Professional Development",
      "Corporate Training"
    ]
  }
];

const categories = ["All", "Communication", "Leadership", "Emotional Intelligence", "Diversity & Inclusion", "Compliance & Safety", "Productivity", "Business & Finance", "Technology & Innovation", "Professional Development"];
const levels = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];

const ContentLibrary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 20;

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLevel]);

  return (
    <main>
      <Helmet>
        <title>Content Library - Lisa AI</title>
        <meta name="description" content="Access 500 auto-generated, expert-reviewed courses across communication, leadership, compliance, and more." />
      </Helmet>

      {/* Sticky Top Bar */}
      <StickyTopBar />

      {/* Navigation Header */}
      <nav className="sticky top-[40px] z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Back Arrow - Mobile Only */}
            <Button variant="ghost" size="sm" className="lg:hidden" asChild>
              <a href="/">
                <ArrowLeft className="h-4 w-4" />
              </a>
            </Button>
            {/* Back to Home - Desktop Only */}
            <Button variant="ghost" size="sm" className="hidden lg:flex" asChild>
              <a href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </a>
            </Button>
            <img 
              src="/logos/lisa new logo.svg" 
              alt="LISA Logo" 
              className="h-8 w-auto max-w-[120px] sm:max-w-none" 
            />
          </div>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button variant="default" size="sm" className="!bg-neutral-950 !text-white hover:!bg-neutral-800 rounded-full" asChild>
              <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              Explore Lisa's Content Library
            </h1>
            <p className="text-xl text-muted-foreground">
              500 Courses across Communication, Leadership, Compliance & More — Auto-Generated, Expert-Reviewed.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-neutral-100 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-black mb-6 text-center text-gray-900">
                Find Your Perfect Course
              </h3>
              
              {/* Search Bar - Prominent */}
              <div className="mb-8">
                <div className="relative max-w-lg mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Search for courses, skills, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 text-base border-2 border-gray-200 focus:border-purple-500"
                  />
                </div>
              </div>
              
              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    📂 Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm font-black transition-all duration-200 ${
                          selectedCategory === category
                            ? "bg-purple-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-black text-gray-700 mb-3">
                    📊 Difficulty Level
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-3 py-2 rounded-lg text-sm font-black transition-all duration-200 ${
                          selectedLevel === level
                            ? "bg-purple-600 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="text-center pt-6 mt-6 border-t border-gray-200">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-black text-purple-600">{startIndex + 1}-{Math.min(endIndex, filteredCourses.length)}</span> of <span className="font-black">{filteredCourses.length}</span> courses
                  {filteredCourses.length !== courses.length && ` (filtered from ${courses.length} total)`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedCourse(course)}
              >
                <div className="bg-neutral-100 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-sm transition-all duration-300 h-[480px] flex flex-col min-w-[280px]">
                  {/* Course Thumbnail */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-50/50">
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
                      {course.category}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {course.level}
                    </div>
                  </div>
                  
                  {/* Course Info */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-black text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2 text-sm leading-tight min-h-[3rem]">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-4 flex-1 min-h-[4.5rem]">
                      {course.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
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
              </motion.div>
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-black mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
            </motion.div>
          )}

          {/* Pagination Controls */}
          {filteredCourses.length > 0 && totalPages > 1 && (
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Previous Page Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </Button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1 order-first sm:order-none mb-3 sm:mb-0">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <Button
                        key={pageNum}
                        variant={pageNum === currentPage ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="min-w-[40px] h-9"
                      >
                        {pageNum}
                      </Button>
                    );
                  } else if (
                    pageNum === currentPage - 2 ||
                    pageNum === currentPage + 2
                  ) {
                    return <span key={pageNum} className="px-2 text-muted-foreground">...</span>;
                  }
                  return null;
                })}
              </div>

              {/* Next Page Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span className="hidden sm:inline">Next</span>
                <span className="sm:hidden">Next</span>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedCourse(null)}
            onTouchEnd={() => setSelectedCourse(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 relative z-20 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 z-10 touch-manipulation"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedCourse(null);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedCourse(null);
              }}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              {/* Image Section */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl h-48 sm:h-64">
                  <img 
                    src={selectedCourse.image} 
                    alt={selectedCourse.title}
                    className="w-full h-full object-contain transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/20"></div>
                  <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-black">
                    {selectedCourse.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {selectedCourse.level}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4">
                  {selectedCourse.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                  {selectedCourse.description}
                </p>
                
                {/* Course Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="h-4 w-4" />
                    <span>Target Audience: {selectedCourse.targetAudience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award className="h-4 w-4" />
                    <span>Certificate: {selectedCourse.certificate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Video className="h-4 w-4" />
                    <span>Format: {selectedCourse.deliveryFormat}</span>
                  </div>
                </div>
                
                {/* Learning Outcomes */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-black text-gray-900 mb-3">Learning Outcomes:</h4>
                  <ul className="space-y-2">
                    {selectedCourse.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0 mt-2"></div>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCourse.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Action Button */}
                <div className="flex justify-center">
                  <Button variant="cta" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4" asChild>
                    <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">
                      Book a Demo Now!
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-100 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black mb-4 text-gray-900 text-center">
                Ready to Access the Full Library?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-center leading-relaxed">
                Get unlimited access to our complete course catalog with advanced features, progress tracking, and personalized learning paths.
              </p>
              <div className="flex justify-center">
                <Button variant="default" size="xl" className="!bg-neutral-950 !text-white hover:!bg-neutral-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto rounded-full" asChild>
                  <a href="https://calendar.app.google/4tjN6L4oY6db7QtV8" target="_blank" rel="noopener noreferrer">
                    🗣️ Talk to Our Team for Full Access
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContentLibrary;
