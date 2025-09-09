import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Users, Star, BookOpen, ArrowLeft, Target, Award, Video } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

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
    id: 1,
    title: "Effective Business Communication",
    description: "Master essential business communication skills for professional success.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key components of effective business communication",
      "Demonstrate strategies to improve verbal and non-verbal communication",
      "Utilize active listening skills to enhance workplace interactions",
      "Develop clear and concise business messages",
      "Implement techniques to adapt communication styles based on audience"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/effective-business-communication.png",
    tags: ["Communication", "Business", "Professional Development"]
  },
  {
    id: 2,
    title: "Presentation & Public Speaking",
    description: "Develop confidence and skills for impactful public presentations.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Effectively organize and structure a public presentation",
      "Use verbal and non-verbal communication to engage the audience",
      "Manage and mitigate public speaking anxiety",
      "Utilize visual aids to enhance presentation impact"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/presentation-public-speaking.png",
    tags: ["Public Speaking", "Presentation", "Communication"]
  },
  {
    id: 3,
    title: "Professional Email & Business Writing",
    description: "Master professional email etiquette and business writing skills.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Compose clear and effective professional emails",
      "Apply best practices for business writing etiquette",
      "Identify and correct common writing errors",
      "Enhance persuasive communication skills in written form",
      "Utilize appropriate tone and formality in various business communications"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/professional-email-business-writing.png",
    tags: ["Email", "Business Writing", "Communication"]
  },
  {
    id: 4,
    title: "The Complete Communication Skills Master Class for Life",
    description: "Comprehensive communication skills training for all professional levels.",
    category: "Communication",
    level: "All Levels",
    duration: "30 minutes",
    targetAudience: "All levels of working professionals looking to enhance communication skills",
    learningOutcomes: [
      "Identify and overcome common barriers to effective communication in the workplace",
      "Apply active listening techniques to improve interpersonal interactions",
      "Develop strategies for clear and assertive communication in professional settings",
      "Use communication skills to build better professional relationships",
      "Recognize the impact of non-verbal cues on communication"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/the-complete-communication-skills-master-class-for.png",
    tags: ["Communication", "Master Class", "Professional Development"]
  },
  {
    id: 5,
    title: "Writing With Flair: How To Become An Exceptional Writer",
    description: "Transform your writing skills and become an exceptional communicator.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify and implement key elements of exceptional writing style",
      "Enhance clarity and persuasiveness in written communication",
      "Utilize advanced techniques to engage and retain reader attention"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/writing-with-flair-how-to-become-an-exceptional-wr.png",
    tags: ["Writing", "Communication", "Professional Development"]
  },
  {
    id: 6,
    title: "Email Etiquette: Write More Effective Emails At Work",
    description: "Master email etiquette for professional workplace communication.",
    category: "Communication",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level to mid-level professionals",
    learningOutcomes: [
      "Identify common email etiquette mistakes and correct them",
      "Apply best practices for writing clear and concise emails",
      "Craft subject lines that improve email open rates",
      "Utilize appropriate email language and tone for professional communication",
      "Effectively manage email threads and follow-ups"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/email-etiquette-write-more-effective-emails-at-wor.png",
    tags: ["Email", "Etiquette", "Communication"]
  },
  {
    id: 7,
    title: "Cross-cultural Communication",
    description: "Navigate diverse workplace environments with cultural intelligence.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key principles of cross-cultural communication in professional settings",
      "Apply strategies to enhance communication effectiveness in diverse teams",
      "Navigate common cross-cultural communication barriers to improve collaboration"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/cross-cultural-communication.png",
    tags: ["Cross-cultural", "Communication", "Diversity"]
  },
  {
    id: 8,
    title: "Feedback & Performance Conversations",
    description: "Master the art of delivering constructive feedback and performance discussions.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Effectively deliver constructive feedback to team members",
      "Conduct performance conversations that motivate employees",
      "Identify appropriate strategies for various feedback scenarios",
      "Enhance communication skills to foster a positive work environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/feedback-performance-conversations.png",
    tags: ["Feedback", "Performance", "Leadership"]
  },
  {
    id: 9,
    title: "Emotional Intelligence for Teams",
    description: "Build emotionally intelligent teams for better collaboration and productivity.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the core components of emotional intelligence and their importance in team dynamics",
      "Identify and apply emotional intelligence strategies to improve team collaboration and productivity",
      "Recognize and manage personal and team emotions to foster a positive work environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/emotional-intelligence-for-teams.png",
    tags: ["Emotional Intelligence", "Teams", "Leadership"]
  },
  {
    id: 10,
    title: "Conflict Resolution & Negotiation",
    description: "Develop skills to resolve conflicts and negotiate effectively in the workplace.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level Managers",
    learningOutcomes: [
      "Identify common sources of workplace conflict and methods to address them effectively",
      "Apply negotiation strategies to achieve win-win outcomes in professional settings",
      "Implement communication techniques that de-escalate tension and promote collaboration",
      "Evaluate different conflict resolution styles and their appropriateness in various scenarios"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/conflict-resolution-negotiation.png",
    tags: ["Conflict Resolution", "Negotiation", "Leadership"]
  },
  {
    id: 11,
    title: "Conflict Management with Emotional Intelligence",
    description: "Use emotional intelligence to manage and resolve workplace conflicts.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key elements of emotional intelligence in conflict situations",
      "Apply strategies to manage and resolve conflicts using emotional intelligence",
      "Demonstrate effective communication techniques to de-escalate conflicts",
      "Build stronger interpersonal relationships to prevent future conflicts",
      "Reflect on personal emotional triggers and manage them effectively"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/conflict-management-with-emotional-intelligence.png",
    tags: ["Conflict Management", "Emotional Intelligence", "Leadership"]
  },
  {
    id: 12,
    title: "Master Your Emotions During Conflict",
    description: "Learn to control and manage emotions during challenging workplace situations.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify personal emotional triggers and responses during conflict situations",
      "Apply techniques to manage and regulate emotions effectively during high-stress interactions",
      "Implement conflict resolution strategies to maintain professional relationships",
      "Enhance communication skills to ensure constructive dialogue in challenging scenarios",
      "Cultivate a positive emotional climate within the team to promote collaboration"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/master-your-emotions-during-conflict.png",
    tags: ["Emotional Management", "Conflict", "Leadership"]
  },
  {
    id: 13,
    title: "Team Collaboration & Trust Building",
    description: "Build high-performing teams through collaboration and trust.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Demonstrate effective communication strategies to improve team collaboration",
      "Identify key elements that contribute to building trust within a team",
      "Apply techniques to resolve conflicts and enhance team dynamics",
      "Implement frameworks for fostering an inclusive and supportive team environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/team-collaboration-trust-building.png",
    tags: ["Team Collaboration", "Trust Building", "Leadership"]
  },
  {
    id: 14,
    title: "Personal Accountability at Work",
    description: "Develop personal accountability to drive individual and team success.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the importance of personal accountability in the workplace",
      "Identify behaviors that demonstrate accountability",
      "Develop strategies to enhance personal responsibility",
      "Cultivate a culture of accountability within your team"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/personal-accountability-at-work.png",
    tags: ["Accountability", "Leadership", "Professional Development"]
  },
  {
    id: 15,
    title: "Leadership Fundamentals",
    description: "Master essential leadership skills for effective team management.",
    category: "Leadership",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level and mid-level managers aspiring to leadership positions",
    learningOutcomes: [
      "Identify key traits and behaviors of effective leaders",
      "Apply fundamental leadership skills in everyday scenarios",
      "Analyze different leadership styles and their impact on team dynamics",
      "Develop strategies for effective communication as a leader",
      "Understand the importance of emotional intelligence in leadership"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/leadership-fundamentals.png",
    tags: ["Leadership", "Management", "Professional Development"]
  },
  {
    id: 16,
    title: "Management Skills Training for New & Experienced Managers",
    description: "Comprehensive management training for both new and experienced leaders.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "New and experienced mid-level managers",
    learningOutcomes: [
      "Enhance communication skills to effectively lead teams",
      "Develop strategies for conflict resolution and decision-making",
      "Gain techniques for efficient time management in managerial roles",
      "Apply leadership principles to motivate and guide team members"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/management-skills-training-for-new-experienced-man.png",
    tags: ["Management", "Leadership", "Professional Development"]
  },
  {
    id: 17,
    title: "New Manager: The Basics and More of Being a Great Leader",
    description: "Essential skills and strategies for new managers to become great leaders.",
    category: "Leadership",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level to mid-level managers",
    learningOutcomes: [
      "Identify key leadership qualities essential for effective management",
      "Implement basic strategies for team motivation and performance improvement",
      "Understand the roles and responsibilities of a manager in a corporate setting",
      "Develop effective communication skills tailored to leadership roles"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/new-manager-the-basics-and-more-of-being-a-great-l.png",
    tags: ["New Manager", "Leadership", "Management"]
  },
  {
    id: 18,
    title: "The Science of Leadership",
    description: "Understand leadership through scientific principles and evidence-based approaches.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the core principles of effective leadership using scientific theories",
      "Apply evidence-based leadership strategies to enhance team performance",
      "Identify personal leadership styles and areas for improvement",
      "Develop critical thinking skills to solve leadership challenges",
      "Foster a positive team culture through scientifically-backed practices"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/the-science-of-leadership.png",
    tags: ["Leadership", "Science", "Evidence-based"]
  },
  {
    id: 19,
    title: "Think Like a Leader with Brian Tracy",
    description: "Develop a leadership mindset with proven strategies from Brian Tracy.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the key characteristics of effective leadership",
      "Develop strategies for strategic decision-making",
      "Enhance communication skills for leadership success",
      "Cultivate a leadership mindset for team motivation",
      "Apply techniques for overcoming leadership challenges"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/think-like-a-leader.png",
    tags: ["Leadership", "Strategic Thinking", "Brian Tracy"]
  },
  {
    id: 20,
    title: "How to Manage & Influence Your Virtual Team",
    description: "Master virtual team management and influence strategies for remote work success.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify best practices for managing virtual teams effectively",
      "Develop strategies to enhance communication and collaboration in a virtual environment",
      "Implement techniques to build trust and influence team members remotely",
      "Apply tools to monitor and boost virtual team performance",
      "Foster a positive and productive virtual team culture"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/how-to-manage-influence-your-virtual-team.png",
    tags: ["Virtual Teams", "Remote Management", "Leadership"]
  },
  {
    id: 31,
    title: "Critical Thinking Strategies For Better Decisions",
    description: "Develop critical thinking skills for better decision-making and problem-solving.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Apply critical thinking techniques to complex business scenarios",
      "Identify common cognitive biases and implement strategies to mitigate them",
      "Enhance problem-solving skills through structured decision-making processes",
      "Develop a mindset for critical and analytical thinking to improve business outcomes"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/critical-thinking-strategies-for-better-decisions.png",
    tags: ["Critical Thinking", "Decision Making", "Problem Solving"]
  },
  {
    id: 32,
    title: "Equal Opportunity & Non-Discrimination",
    description: "Understand and implement equal opportunity principles in the workplace.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the key principles of equal opportunity and non-discrimination in the workplace",
      "Identify and address potential biases and discriminatory practices within team dynamics",
      "Implement strategies to promote an inclusive and equitable work environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/equal-opportunity-non-discrimination.png",
    tags: ["Equal Opportunity", "Compliance", "Workplace Rights"]
  },
  {
    id: 33,
    title: "Data Privacy & Protection",
    description: "Master data privacy principles and protection strategies for organizational compliance.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand key concepts of data privacy and protection within the corporate environment",
      "Identify and apply best practices for safeguarding sensitive information",
      "Recognize and respond to data breaches and privacy concerns effectively",
      "Ensure compliance with relevant data protection regulations",
      "Develop action plans to enhance organizational data privacy measures"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/data-privacy-protection.png",
    tags: ["Data Privacy", "Compliance", "Information Security"]
  },
  {
    id: 34,
    title: "Workplace Safety & Health Compliance",
    description: "Ensure workplace safety and health compliance for organizational well-being.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "mid-level managers",
    learningOutcomes: [
      "Understand key workplace safety and health regulations applicable to their industry",
      "Identify common workplace hazards and implement measures to mitigate them",
      "Develop effective communication strategies for promoting safety and health standards within their teams",
      "Evaluate current workplace safety policies and propose enhancements based on compliance requirements"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/workplace-safety-health-compliance.png",
    tags: ["Workplace Safety", "Health Compliance", "Risk Management"]
  },
  {
    id: 35,
    title: "Generative AI for Business Leaders: A Quick Overview",
    description: "Understand generative AI and its business applications for strategic decision-making.",
    category: "Technology",
    level: "Advanced",
    duration: "30 minutes",
    targetAudience: "Senior leaders",
    learningOutcomes: [
      "Understand the basic concepts of generative AI and its applications in business",
      "Identify opportunities for implementing generative AI within their organization",
      "Assess the potential impact of generative AI on strategic decision-making"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/generative-ai-for-business-leaders-a-quick-overvie.png",
    tags: ["Generative AI", "Technology", "Business Strategy"]
  },
  {
    id: 36,
    title: "Workplace Cybersecurity Basics",
    description: "Master essential cybersecurity practices for workplace digital security.",
    category: "Technology",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level to mid-level employees",
    learningOutcomes: [
      "Identify common cybersecurity threats in the workplace",
      "Implement basic cybersecurity best practices to protect company data",
      "Recognize phishing attempts and report them appropriately",
      "Utilize secure communication tools effectively",
      "Understand the importance of password management and security"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/workplace-cybersecurity-basics.png",
    tags: ["Cybersecurity", "Digital Security", "Technology"]
  },
  {
    id: 37,
    title: "Digital Dexterity: Adapting to New Tech at Work",
    description: "Develop digital dexterity to adapt to new technologies in the workplace.",
    category: "Technology",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key trends in workplace technology and their potential impacts on operations",
      "Develop strategies to integrate new technologies into existing workflows",
      "Demonstrate proficiency in using basic digital tools relevant to their industry",
      "Evaluate the effectiveness of technology adoption initiatives",
      "Implement best practices for fostering a culture of digital adaptability"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/digital-dexterity-adapting-to-new-tech-at-work.png",
    tags: ["Digital Dexterity", "Technology Adoption", "Workplace Skills"]
  },
  {
    id: 38,
    title: "Understanding Gender Sensitivity at Work",
    description: "Create gender-sensitive workplaces that promote equality and respect.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key principles of gender sensitivity and their importance in the workplace",
      "Implement strategies to promote inclusivity and respect for diverse gender identities",
      "Recognize and counteract gender biases in managerial practices"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/understanding-gender-sensitivity-at-work.png",
    tags: ["Gender Sensitivity", "Diversity", "Inclusion"]
  },
  {
    id: 39,
    title: "Neurodiversity Awareness in the Workplace",
    description: "Foster neurodiversity awareness and create inclusive workplaces for all.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and human resources professionals",
    learningOutcomes: [
      "Identify the key aspects of neurodiversity and its importance in the modern workplace",
      "Understand and implement strategies to foster an inclusive environment for neurodiverse employees",
      "Recognize the benefits of neurodiversity for team productivity and innovation",
      "Develop communication skills to effectively engage with neurodiverse individuals",
      "Implement inclusive hiring practices that accommodate neurodiverse applicants"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/neurodiversity-awareness-in-the-workplace.png",
    tags: ["Neurodiversity", "Inclusion", "Workplace Diversity"]
  },
  {
    id: 40,
    title: "Building Allyship: From Bystander to Upstander",
    description: "Develop allyship skills to support colleagues and create inclusive environments.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the key concepts of allyship and the roles of a bystander and upstander",
      "Identify strategies to support colleagues in diverse workplace environments",
      "Develop skills to proactively intervene and address workplace discrimination",
      "Recognize the impact of allyship on team dynamics and organizational culture"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-allyship-from-bystander-to-upstander.png",
    tags: ["Allyship", "Diversity", "Inclusion"]
  },
  {
    id: 21,
    title: "Performance Management: Build a High Performing Team",
    description: "Develop strategies to build and manage high-performing teams effectively.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key strategies to enhance team performance and productivity",
      "Implement effective feedback mechanisms to support team growth",
      "Develop action plans to address performance gaps efficiently",
      "Foster a collaborative team environment to drive success"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/performance-management-build-a-high-performing-tea.png",
    tags: ["Performance Management", "Team Building", "Leadership"]
  },
  {
    id: 22,
    title: "Manager's Guide to Effective 1:1 Meetings",
    description: "Master the art of conducting productive one-on-one meetings with team members.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key components of a productive 1:1 meeting",
      "Apply strategies to foster open communication with team members",
      "Effectively set and track goals during 1:1 meetings",
      "Provide constructive feedback to improve team performance"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/managers-guide-to-effective-11-meetings.png",
    tags: ["1:1 Meetings", "Management", "Leadership"]
  },
  {
    id: 23,
    title: "Be a Great Mentor: A Practical Guide to Mentorship",
    description: "Learn practical mentorship skills to guide and develop others effectively.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key characteristics of effective mentorship",
      "Apply best practices for mentoring relationships",
      "Assess and provide constructive feedback to mentees",
      "Develop a personalized mentorship plan for professional growth",
      "Overcome common challenges faced in mentorships"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/be-a-great-mentor-a-practical-guide-to-mentorship.png",
    tags: ["Mentorship", "Leadership", "Professional Development"]
  },
  {
    id: 24,
    title: "Workplace Diversity & Inclusion",
    description: "Create inclusive workplaces that celebrate diversity and promote equality.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Recognize the importance of diversity and inclusion in the workplace",
      "Identify common barriers to creating an inclusive environment",
      "Implement strategies to promote diversity and inclusion within their teams",
      "Analyze case studies to understand successful diversity initiatives",
      "Develop an action plan to foster an inclusive culture"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/workplace-diversity-inclusion.png",
    tags: ["Diversity", "Inclusion", "Workplace Culture"]
  },
  {
    id: 25,
    title: "Unconscious Bias: Fuel Diversity and Become a Better You",
    description: "Recognize and overcome unconscious biases to create more inclusive environments.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Recognize the impact of unconscious bias in the workplace",
      "Identify strategies to mitigate unconscious biases",
      "Enhance decision-making processes by implementing inclusive practices",
      "Improve team diversity and cohesion",
      "Foster an inclusive organizational culture"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/unconscious-bias-fuel-diversity-and-become-a-bette.png",
    tags: ["Unconscious Bias", "Diversity", "Inclusion"]
  },
  {
    id: 26,
    title: "Workplace Etiquette & Professionalism",
    description: "Master workplace etiquette and professional behavior for career success.",
    category: "Professional Development",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level to mid-level professionals",
    learningOutcomes: [
      "Demonstrate understanding of key workplace etiquette principles",
      "Apply professional communication strategies in everyday workplace interactions",
      "Recognize and adapt to diverse workplace cultures and expectations",
      "Identify behaviors that promote a professional workplace environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/workplace-etiquette-professionalism.png",
    tags: ["Workplace Etiquette", "Professionalism", "Career Development"]
  },
  {
    id: 27,
    title: "Time Management & Productivity",
    description: "Master time management techniques to boost productivity and achieve goals.",
    category: "Productivity",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key time management techniques to enhance productivity",
      "Apply prioritization methods to optimize task completion",
      "Develop personalized time management plans for professional use",
      "Utilize tools and technologies to track and improve productivity"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/time-management-productivity.png",
    tags: ["Time Management", "Productivity", "Professional Development"]
  },
  {
    id: 28,
    title: "Stress Management & Resilience",
    description: "Develop resilience and stress management skills for workplace success.",
    category: "Productivity",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key stressors in the workplace and their effects on performance",
      "Apply practical techniques to manage and reduce stress effectively",
      "Develop resilience strategies to maintain productivity under pressure",
      "Create a personal action plan for ongoing stress management",
      "Enhance team communication to foster a supportive work environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/stress-management-resilience.png",
    tags: ["Stress Management", "Resilience", "Wellness"]
  },
  {
    id: 29,
    title: "Building a Growth Mindset",
    description: "Develop a growth mindset to overcome challenges and achieve continuous improvement.",
    category: "Professional Development",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level to mid-level professionals",
    learningOutcomes: [
      "Understand the principles of a growth mindset and how it differs from a fixed mindset",
      "Identify personal areas where a growth mindset can be applied to improve performance",
      "Develop strategies to cultivate a growth mindset in daily professional activities",
      "Recognize common obstacles to maintaining a growth mindset and how to overcome them"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-a-growth-mindset.png",
    tags: ["Growth Mindset", "Personal Development", "Professional Growth"]
  },
  {
    id: 30,
    title: "Innovation & Creative Thinking",
    description: "Foster innovation and creative thinking skills for problem-solving and growth.",
    category: "Innovation",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify and apply creative thinking techniques to solve problems",
      "Demonstrate the ability to generate innovative ideas",
      "Foster an innovative culture within a team"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/innovation-creative-thinking.png",
    tags: ["Innovation", "Creative Thinking", "Problem Solving"]
  },
  {
    id: 41,
    title: "Anti-Harassment & Workplace Conduct",
    description: "Understand and prevent workplace harassment through proper conduct and policies.",
    category: "Compliance",
    level: "All Levels",
    duration: "30 minutes",
    targetAudience: "All employees, including entry-level professionals, mid-level managers, and senior leaders",
    learningOutcomes: [
      "Identify different forms of workplace harassment and inappropriate conduct",
      "Understand the company's policy and legal implications concerning harassment",
      "Learn strategies to prevent workplace harassment and promote a positive work environment",
      "Recognize appropriate responses and actions to take when witnessing or experiencing harassment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/anti-harassment-workplace-conduct.png",
    tags: ["Anti-Harassment", "Workplace Conduct", "Compliance"]
  },
  {
    id: 42,
    title: "Ethics, Fraud & Anti-Money Laundering",
    description: "Master ethical decision-making and fraud prevention in business operations.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Recognize ethical dilemmas and apply decision-making frameworks",
      "Identify signs of fraudulent activities in business operations",
      "Understand legal and compliance requirements related to anti-money laundering",
      "Develop strategies to promote a culture of ethical behavior within teams"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/ethics-fraud-anti-money-laundering.png",
    tags: ["Ethics", "Fraud Prevention", "Compliance"]
  },
  {
    id: 43,
    title: "Environmental Regulations & Sustainability",
    description: "Understand environmental regulations and implement sustainable business practices.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand key environmental regulations impacting business operations",
      "Identify strategies to improve sustainability initiatives within your organization",
      "Assess the compliance of current business practices with environmental standards",
      "Promote sustainable practices among team members and stakeholders"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/environmental-regulations-sustainability.png",
    tags: ["Environmental Regulations", "Sustainability", "Compliance"]
  },
  {
    id: 44,
    title: "Emergency Preparedness & Crisis Management",
    description: "Develop emergency preparedness and crisis management strategies for organizational resilience.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key components of an effective emergency preparedness plan",
      "Implement crisis management strategies within their organization",
      "Communicate effectively during emergency situations",
      "Evaluate and improve organizational readiness for potential crises"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/emergency-preparedness-crisis-management.png",
    tags: ["Emergency Preparedness", "Crisis Management", "Risk Management"]
  },
  {
    id: 45,
    title: "Change Management for Leaders: Lead Like a Lion",
    description: "Master change management strategies to lead organizational transformations effectively.",
    category: "Leadership",
    level: "Advanced",
    duration: "30 minutes",
    targetAudience: "Senior leaders",
    learningOutcomes: [
      "Understand the key principles of effective change management",
      "Develop strategies to lead teams through organizational change",
      "Identify and overcome common resistance to change",
      "Communicate effectively during transitions",
      "Enhance leadership resilience and adaptability"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/change-management-for-leaders-lead-like-a-lion.png",
    tags: ["Change Management", "Leadership", "Organizational Transformation"]
  },
  {
    id: 46,
    title: "Become a Product Manager | Learn the Skills & Get the Job",
    description: "Master product management skills and prepare for a successful career transition.",
    category: "Professional Development",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level professionals",
    learningOutcomes: [
      "Identify key responsibilities of a product manager",
      "Develop a basic understanding of product development processes",
      "Learn techniques to communicate effectively with cross-functional teams",
      "Understand how to align product strategies with business goals"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/become-a-product-manager-learn-the-skills-get-the-.png",
    tags: ["Product Management", "Career Development", "Professional Skills"]
  },
  {
    id: 47,
    title: "POSH Awareness",
    description: "Comprehensive training on Prevention of Sexual Harassment (POSH) in the workplace.",
    category: "Compliance",
    level: "All Levels",
    duration: "30 minutes",
    targetAudience: "All employees, including entry-level and mid-level managers",
    learningOutcomes: [
      "Understand the key concepts and definitions related to Prevention of Sexual Harassment (POSH)",
      "Recognize behaviors that constitute sexual harassment in the workplace",
      "Identify steps to report and address harassment incidents appropriately",
      "Comprehend the legal obligations and rights concerning POSH policies",
      "Implement best practices to foster a safe and respectful workplace environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/posh-awareness.png",
    tags: ["POSH", "Sexual Harassment Prevention", "Compliance"]
  },
  {
    id: 48,
    title: "Mastering Difficult Conversations at Work",
    description: "Develop skills to handle challenging workplace conversations with confidence and professionalism.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify common triggers and barriers in difficult workplace conversations",
      "Develop strategies for active listening and empathy in challenging discussions",
      "Implement techniques to de-escalate tension and maintain professionalism",
      "Structure conversations to achieve productive outcomes",
      "Apply feedback mechanisms to improve future communication"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/mastering-difficult-conversations-at-work.png",
    tags: ["Difficult Conversations", "Communication", "Leadership"]
  },
  {
    id: 49,
    title: "Nonverbal Communication & Body Language",
    description: "Master nonverbal communication skills to enhance professional interactions and influence.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Recognize and interpret key nonverbal signals in professional interactions",
      "Apply body language techniques to enhance communication effectiveness",
      "Identify cultural differences in nonverbal communication",
      "Improve persuasion and influence through intentional nonverbal cues"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/nonverbal-communication-body-language.png",
    tags: ["Nonverbal Communication", "Body Language", "Communication"]
  },
  {
    id: 50,
    title: "Storytelling for Business Impact",
    description: "Learn to craft compelling business stories that engage stakeholders and drive results.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and senior leaders",
    learningOutcomes: [
      "Identify key elements of effective storytelling to enhance business communication",
      "Apply storytelling techniques to engage stakeholders and influence decision-making",
      "Develop compelling narratives that align with organizational goals"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/storytelling-for-business-impact.png",
    tags: ["Storytelling", "Business Communication", "Influence"]
  },
  {
    id: 51,
    title: "Communicating with Clarity & Confidence",
    description: "Develop clear and confident communication skills for professional success.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key elements of clear communication in professional settings",
      "Apply strategies to enhance confidence in verbal and non-verbal communication",
      "Evaluate personal communication styles and adapt them to different audiences",
      "Develop techniques to manage and reduce communication barriers",
      "Demonstrate effective message delivery with clarity and poise"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/communicating-with-clarity-confidence.png",
    tags: ["Clear Communication", "Confidence", "Professional Development"]
  },
  {
    id: 52,
    title: "Listening to Understand: Active Listening Deep Dive",
    description: "Master active listening skills to improve communication and build stronger relationships.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Develop enhanced active listening skills to improve communication effectiveness",
      "Identify barriers to effective listening and learn strategies to overcome them",
      "Apply active listening techniques in various workplace scenarios to enhance team collaboration",
      "Demonstrate understanding of non-verbal cues to improve interpersonal interactions",
      "Utilize active listening to foster a more inclusive and supportive work environment"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/listening-to-understand-active-listening-deep-dive.png",
    tags: ["Active Listening", "Communication", "Interpersonal Skills"]
  },
  {
    id: 53,
    title: "Emotional Agility at Work",
    description: "Develop emotional agility to navigate workplace challenges with resilience and adaptability.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Implement strategies to manage personal and team emotions effectively",
      "Adapt to changing workplace dynamics with emotional flexibility",
      "Reflect on emotional responses to enhance team collaboration",
      "Cultivate a culture of emotional awareness in the workplace"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/emotional-agility-at-work.png",
    tags: ["Emotional Agility", "Leadership", "Resilience"]
  },
  {
    id: 54,
    title: "Building Emotional Resilience in High-Stress Roles",
    description: "Develop emotional resilience to thrive in high-pressure work environments.",
    category: "Leadership",
    level: "Advanced",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and senior leaders",
    learningOutcomes: [
      "Identify key stressors in high-pressure work environments",
      "Develop strategies for enhancing emotional resilience",
      "Implement mindfulness and stress management techniques",
      "Recognize early signs of burnout and take preventive actions"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-emotional-resilience-in-high-stress-roles.png",
    tags: ["Emotional Resilience", "Stress Management", "Leadership"]
  },
  {
    id: 55,
    title: "Navigating Office Politics with Emotional Intelligence",
    description: "Master office politics through emotional intelligence and strategic relationship building.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify and understand the key components of emotional intelligence in the workplace",
      "Apply emotional intelligence strategies to effectively navigate and influence office politics",
      "Enhance interpersonal skills to build stronger professional relationships",
      "Develop techniques for managing stress and maintaining focus in politically charged environments"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/navigating-office-politics-with-emotional-intellig.png",
    tags: ["Office Politics", "Emotional Intelligence", "Leadership"]
  },
  {
    id: 56,
    title: "Preventing and Managing Team Burnout",
    description: "Learn strategies to prevent and manage team burnout for sustainable productivity.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and team leaders",
    learningOutcomes: [
      "Identify early signs of team burnout and intervene proactively",
      "Implement practical strategies to promote work-life balance across your team",
      "Foster an open and supportive team culture to address burnout risks",
      "Utilize tools and techniques to monitor team wellness and productivity"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/preventing-and-managing-team-burnout.png",
    tags: ["Team Burnout", "Wellness", "Leadership"]
  },
  {
    id: 57,
    title: "Constructive Confrontation: How to Disagree Respectfully",
    description: "Master the art of constructive confrontation for productive workplace disagreements.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key strategies for engaging in respectful disagreement",
      "Apply techniques to maintain professionalism during confrontations",
      "Develop skills to de-escalate tense situations",
      "Demonstrate the ability to navigate and resolve conflicts constructively"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/constructive-confrontation-how-to-disagree-respectfully.png",
    tags: ["Constructive Confrontation", "Conflict Resolution", "Leadership"]
  },
  {
    id: 58,
    title: "Leading Without a Title",
    description: "Develop leadership skills to influence and lead without formal authority.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and aspiring leaders",
    learningOutcomes: [
      "Develop an understanding of influence techniques applicable without formal authority",
      "Identify ways to motivate and engage team members in projects",
      "Leverage communication skills for effective leadership",
      "Build trust and credibility through consistent actions"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/leading-without-a-title.png",
    tags: ["Informal Leadership", "Influence", "Leadership"]
  },
  {
    id: 59,
    title: "Building High-Trust Teams",
    description: "Create and maintain high-trust teams for exceptional performance and collaboration.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key components and characteristics of high-trust teams",
      "Develop strategies to build and maintain trust within teams",
      "Implement effective communication practices to enhance team credibility"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-high-trust-teams.png",
    tags: ["High-Trust Teams", "Team Building", "Leadership"]
  },
  {
    id: 60,
    title: "Situational Leadership: Adapting Your Style",
    description: "Master situational leadership to adapt your style based on team needs and circumstances.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "mid-level managers",
    learningOutcomes: [
      "Identify different leadership styles and their appropriate uses in various situations",
      "Assess the needs of team members and adapt leadership style accordingly",
      "Implement strategies to flex leadership approach for improved team performance",
      "Enhance communication skills to effectively lead diverse teams",
      "Develop an action plan for continuous leadership development"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/situational-leadership-adapting-your-style.png",
    tags: ["Situational Leadership", "Adaptive Leadership", "Leadership"]
  },
  {
    id: 61,
    title: "Delegation Mastery: Getting Work Done Through Others",
    description: "Master the art of effective delegation to maximize team productivity and development.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key tasks suitable for delegation within their team",
      "Effectively assign tasks to team members based on their strengths and capabilities",
      "Utilize feedback mechanisms to ensure tasks are completed to standard and within timelines",
      "Overcome common delegation challenges to maximize team productivity"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/delegation-mastery-getting-work-done-through-other.png",
    tags: ["Delegation", "Team Management", "Leadership"]
  },
  {
    id: 62,
    title: "Collaborative Decision-Making",
    description: "Master collaborative decision-making processes for better team outcomes and buy-in.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Enhance skills in building consensus among team members during decision-making processes",
      "Apply effective communication strategies to foster collaborative environments",
      "Identify and leverage diverse perspectives to strengthen team decision outcomes",
      "Facilitate group discussions to reach mutual agreements efficiently"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/collaborative-decision-making.png",
    tags: ["Collaborative Decision-Making", "Team Consensus", "Leadership"]
  },
  {
    id: 63,
    title: "Inclusive Language in the Workplace",
    description: "Learn to use inclusive language that fosters diversity and respect in the workplace.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and HR professionals",
    learningOutcomes: [
      "Understand the importance of inclusive language in fostering a diverse workplace",
      "Identify and correct language that may be unintentionally exclusive or harmful",
      "Apply strategies to encourage inclusivity through language in workplace communications"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/inclusive-language-in-the-workplace.png",
    tags: ["Inclusive Language", "Diversity", "Communication"]
  },
  {
    id: 64,
    title: "Cultural Intelligence (CQ): Thrive in Diverse Teams",
    description: "Develop cultural intelligence to work effectively in diverse and global teams.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and team leaders",
    learningOutcomes: [
      "Identify key elements of cultural intelligence and its importance in diverse teams",
      "Apply strategies to enhance personal cultural intelligence for improved team collaboration",
      "Recognize and adapt behaviors to support diverse team dynamics"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/cultural-intelligence-cq-thrive-in-diverse-teams.png",
    tags: ["Cultural Intelligence", "Diversity", "Global Teams"]
  },
  {
    id: 65,
    title: "Understanding Gender Sensitivity at Work",
    description: "Create gender-sensitive workplaces that promote equality and respect for all.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key principles of gender sensitivity and their importance in the workplace",
      "Implement strategies to promote inclusivity and respect for diverse gender identities",
      "Recognize and counteract gender biases in managerial practices"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/understanding-gender-sensitivity-at-work.png",
    tags: ["Gender Sensitivity", "Diversity", "Inclusion"]
  },
  {
    id: 66,
    title: "Neurodiversity Awareness in the Workplace",
    description: "Foster neurodiversity awareness and create inclusive workplaces for all employees.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and human resources professionals",
    learningOutcomes: [
      "Identify the key aspects of neurodiversity and its importance in the modern workplace",
      "Understand and implement strategies to foster an inclusive environment for neurodiverse employees",
      "Recognize the benefits of neurodiversity for team productivity and innovation",
      "Develop communication skills to effectively engage with neurodiverse individuals",
      "Implement inclusive hiring practices that accommodate neurodiverse applicants"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/neurodiversity-awareness-in-the-workplace.png",
    tags: ["Neurodiversity", "Inclusion", "Workplace Diversity"]
  },
  {
    id: 67,
    title: "Building Allyship: From Bystander to Upstander",
    description: "Develop allyship skills to support colleagues and create inclusive environments.",
    category: "Diversity & Inclusion",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the key concepts of allyship and the roles of a bystander and upstander",
      "Identify strategies to support colleagues in diverse workplace environments",
      "Develop skills to proactively intervene and address workplace discrimination",
      "Recognize the impact of allyship on team dynamics and organizational culture"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-allyship-from-bystander-to-upstander.png",
    tags: ["Allyship", "Diversity", "Inclusion"]
  },
  {
    id: 68,
    title: "Beat Procrastination: Science-Backed Techniques",
    description: "Overcome procrastination with proven, science-backed techniques for improved productivity.",
    category: "Productivity",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the root causes and triggers of procrastination in a professional setting",
      "Implement practical, science-backed techniques to enhance productivity",
      "Develop personal strategies to overcome procrastination tendencies",
      "Use tools and methods to manage time effectively",
      "Increase focus and motivation for task completion"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/beat-procrastination-science-backed-techniques.png",
    tags: ["Procrastination", "Productivity", "Time Management"]
  },
  {
    id: 69,
    title: "Developing Grit: Sustained Effort Over Time",
    description: "Develop grit and perseverance to achieve long-term goals and overcome challenges.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the key components of grit and its impact on professional success",
      "Develop strategies to build and enhance personal resilience and perseverance",
      "Apply techniques to maintain motivation and sustain effort over long periods",
      "Analyze personal and professional goals to align them with sustained effort strategies"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/developing-grit-sustained-effort-over-time.png",
    tags: ["Grit", "Perseverance", "Professional Development"]
  },
  {
    id: 70,
    title: "Deep Work: Managing Distractions & Focus",
    description: "Master deep work techniques to eliminate distractions and achieve peak productivity.",
    category: "Productivity",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and team leads",
    learningOutcomes: [
      "Identify common workplace distractions and develop strategies to minimize them",
      "Utilize proven techniques to enhance concentration and maintain focus during work",
      "Create actionable schedules that prioritize deep work and maximize productivity",
      "Implement methods for managing digital distractions effectively",
      "Cultivate a work environment conducive to sustained focus and creativity"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/deep-work-managing-distractions-focus.png",
    tags: ["Deep Work", "Focus", "Productivity"]
  },
  {
    id: 71,
    title: "The Power of Habit: Create Lasting Change",
    description: "Understand habit formation and create lasting positive changes in your professional life.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the science behind habit formation and change",
      "Identify personal and professional habits that impact productivity and success",
      "Develop strategies to replace negative habits with positive behaviors",
      "Create an action plan for implementing new habits in the workplace"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/the-power-of-habit-create-lasting-change.png",
    tags: ["Habit Formation", "Behavioral Change", "Professional Development"]
  },
  {
    id: 72,
    title: "Reframing Failure: Mindset for Growth & Resilience",
    description: "Develop a growth mindset to view failure as an opportunity for learning and improvement.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify personal beliefs about failure and how they impact decision making",
      "Apply techniques to shift perspective on failure to see it as an opportunity for growth",
      "Develop strategies to build resilience after setbacks",
      "Learn to foster a team culture that embraces experimentation and learning from mistakes"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/reframing-failure-mindset-for-growth-resilience.png",
    tags: ["Growth Mindset", "Resilience", "Professional Development"]
  },
  {
    id: 73,
    title: "Design Thinking Fundamentals",
    description: "Master design thinking principles to solve complex problems creatively and effectively.",
    category: "Innovation",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the key stages of the Design Thinking process",
      "Apply Design Thinking techniques to solve complex business problems",
      "Facilitate brainstorming sessions to encourage creative thinking",
      "Utilize empathy maps to better understand customer needs"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/design-thinking-fundamentals.png",
    tags: ["Design Thinking", "Problem Solving", "Innovation"]
  },
  {
    id: 74,
    title: "From Ideas to Execution: Innovation in Action",
    description: "Transform innovative ideas into actionable business solutions and successful implementations.",
    category: "Innovation",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify and articulate the key phases of the innovation process from idea generation to execution",
      "Develop a strategic plan for transforming an innovative idea into a practical, executable project",
      "Apply best practices for fostering a culture of innovation within teams to drive successful outcomes",
      "Utilize tools and methodologies that support the efficient execution of innovative projects"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/from-ideas-to-execution-innovation-in-action.png",
    tags: ["Innovation Execution", "Project Management", "Innovation"]
  },
  {
    id: 75,
    title: "Problem Framing & Root Cause Analysis",
    description: "Master problem framing and root cause analysis techniques for effective problem-solving.",
    category: "Innovation",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Apply effective problem framing techniques in business contexts",
      "Identify and articulate the root causes of complex challenges",
      "Use analytical tools to systematically approach problem-solving",
      "Enhance decision-making skills by accurately pinpointing problem areas"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/problem-framing-root-cause-analysis.png",
    tags: ["Problem Framing", "Root Cause Analysis", "Problem Solving"]
  },
  {
    id: 76,
    title: "Creative Confidence for Professionals",
    description: "Build creative confidence and unlock your creative potential in professional settings.",
    category: "Innovation",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers, team leads, project managers",
    learningOutcomes: [
      "Identify personal barriers to creative thinking and strategies to overcome them",
      "Apply creative problem-solving techniques to real-world business challenges",
      "Increase self-confidence in sharing and implementing innovative ideas",
      "Develop a creative mindset to enhance team collaboration",
      "Implement strategies to foster a culture of creativity within their teams"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/creative-confidence-for-professionals.png",
    tags: ["Creative Confidence", "Innovation", "Problem Solving"]
  },
  {
    id: 77,
    title: "Lateral Thinking Techniques for Everyday Work",
    description: "Master lateral thinking techniques to approach problems from new and innovative angles.",
    category: "Innovation",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Apply lateral thinking techniques to solve complex problems creatively",
      "Integrate diverse perspectives to enhance decision-making",
      "Cultivate an environment that fosters innovative thinking and problem-solving among team members"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/lateral-thinking-techniques-for-everyday-work.png",
    tags: ["Lateral Thinking", "Creative Problem Solving", "Innovation"]
  },
  {
    id: 78,
    title: "Code of Conduct: Walking the Talk",
    description: "Understand and implement organizational code of conduct principles in daily work.",
    category: "Compliance",
    level: "All Levels",
    duration: "30 minutes",
    targetAudience: "All employees including entry-level staff, mid-level managers, and senior leaders",
    learningOutcomes: [
      "Understand the key elements of the company's code of conduct and their importance",
      "Recognize examples of behavior that aligns with and violates the code of conduct",
      "Apply the code of conduct principles to make sound ethical decisions in the workplace"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/code-of-conduct-walking-the-talk.png",
    tags: ["Code of Conduct", "Ethics", "Compliance"]
  },
  {
    id: 79,
    title: "Workplace Cybersecurity Basics",
    description: "Master essential cybersecurity practices to protect workplace digital assets and information.",
    category: "Technology",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level to mid-level employees",
    learningOutcomes: [
      "Identify common cybersecurity threats in the workplace",
      "Implement basic cybersecurity best practices to protect company data",
      "Recognize phishing attempts and report them appropriately",
      "Utilize secure communication tools effectively",
      "Understand the importance of password management and security"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/workplace-cybersecurity-basics.png",
    tags: ["Cybersecurity", "Digital Security", "Technology"]
  },
  {
    id: 80,
    title: "Insider Trading & Confidentiality",
    description: "Understand insider trading regulations and maintain confidentiality in business operations.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and finance professionals",
    learningOutcomes: [
      "Identify the key laws and regulations surrounding insider trading",
      "Understand the ethical implications and responsibilities related to handling confidential information",
      "Implement best practices to safeguard sensitive information within the organization",
      "Recognize red flags and potential risks related to insider trading",
      "Apply strategies to prevent unauthorized disclosure of confidential information"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/insider-trading-confidentiality.png",
    tags: ["Insider Trading", "Confidentiality", "Compliance"]
  },
  {
    id: 81,
    title: "Safety in Remote & Hybrid Work Environments",
    description: "Ensure safety and well-being in remote and hybrid work environments.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify potential safety risks in remote and hybrid work settings",
      "Implement strategies to mitigate identified risks",
      "Develop effective communication plans for safety protocols",
      "Utilize digital tools to enhance safety in remote work environments"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/safety-in-remote-hybrid-work-environments.png",
    tags: ["Remote Safety", "Hybrid Work", "Compliance"]
  },
  {
    id: 82,
    title: "Ethics in Everyday Decision-Making",
    description: "Master ethical decision-making frameworks for consistent and principled choices.",
    category: "Compliance",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify ethical dilemmas commonly faced in professional settings",
      "Evaluate the impact of decisions using ethical frameworks",
      "Apply ethical decision-making models to real-world scenarios",
      "Enhance awareness of personal and organizational values in decision-making"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/ethics-in-everyday-decision-making.png",
    tags: ["Ethics", "Decision Making", "Compliance"]
  },
  {
    id: 83,
    title: "Career Planning & Personal Branding",
    description: "Develop strategic career planning and personal branding for professional advancement.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Develop a comprehensive career plan aligned with professional goals",
      "Identify and leverage personal strengths for career advancement",
      "Create a strong personal brand presence on LinkedIn",
      "Understand networking strategies for career growth"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/career-planning-personal-branding.png",
    tags: ["Career Planning", "Personal Branding", "Professional Development"]
  },
  {
    id: 84,
    title: "Building a Portfolio Career",
    description: "Learn to build and manage a diverse portfolio career for professional flexibility and growth.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and professionals looking to diversify skills",
    learningOutcomes: [
      "Understand the concept and benefits of a portfolio career",
      "Identify personal skills and experiences that can contribute to a portfolio career",
      "Develop a strategic plan for creating and managing a portfolio career"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-a-portfolio-career.png",
    tags: ["Portfolio Career", "Career Development", "Professional Growth"]
  },
  {
    id: 85,
    title: "Strategic Thinking for Individual Contributors",
    description: "Develop strategic thinking skills to align individual contributions with organizational goals.",
    category: "Professional Development",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Entry-level and Individual Contributors",
    learningOutcomes: [
      "Understand the key components of strategic thinking and its importance in business",
      "Apply strategic thinking skills to solve complex problems in daily work scenarios",
      "Develop actionable plans to align personal tasks with organizational goals",
      "Identify opportunities for innovation and improvement within their role"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/strategic-thinking-for-individual-contributors.png",
    tags: ["Strategic Thinking", "Individual Contributors", "Professional Development"]
  },
  {
    id: 86,
    title: "Role Clarity & Expectation Management",
    description: "Master role clarity and expectation management for improved team performance and satisfaction.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Define and articulate role responsibilities and boundaries effectively",
      "Implement strategies to manage and align team expectations",
      "Develop clear communication plans to ensure role clarity",
      "Identify and address common barriers to effective expectation management"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/role-clarity-expectation-management.png",
    tags: ["Role Clarity", "Expectation Management", "Leadership"]
  },
  {
    id: 87,
    title: "Internal Mobility: Navigating Growth Within",
    description: "Master internal mobility strategies to advance your career within your organization.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify opportunities for career advancement within the organization",
      "Develop an actionable plan for leveraging internal mobility resources",
      "Implement effective networking strategies to increase visibility",
      "Gain insights into organizational pathways for career growth"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/internal-mobility-navigating-growth-within.png",
    tags: ["Internal Mobility", "Career Growth", "Professional Development"]
  },
  {
    id: 88,
    title: "Digital Dexterity: Adapting to New Tech at Work",
    description: "Develop digital dexterity to adapt to new technologies and drive workplace innovation.",
    category: "Technology",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key trends in workplace technology and their potential impacts on operations",
      "Develop strategies to integrate new technologies into existing workflows",
      "Demonstrate proficiency in using basic digital tools relevant to their industry",
      "Evaluate the effectiveness of technology adoption initiatives",
      "Implement best practices for fostering a culture of digital adaptability"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/digital-dexterity-adapting-to-new-tech-at-work.png",
    tags: ["Digital Dexterity", "Technology Adoption", "Workplace Skills"]
  },
  {
    id: 89,
    title: "Leading Through Uncertainty",
    description: "Master leadership skills to guide teams effectively through uncertain and challenging times.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key strategies for effective leadership in uncertain times",
      "Develop decision-making skills to handle ambiguity",
      "Enhance communication techniques to inspire and guide teams during uncertainty",
      "Implement resilience-building practices for both leaders and teams"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/leading-through-uncertainty.png",
    tags: ["Leading Through Uncertainty", "Leadership", "Resilience"]
  },
  {
    id: 90,
    title: "Automation & the Future of Work",
    description: "Understand automation trends and prepare for the future of work in an automated world.",
    category: "Technology",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the impact of automation on various industries and job roles",
      "Identify key strategies for adapting to change in an automated workplace",
      "Develop a plan to enhance team skills and competencies in light of advancing technologies",
      "Recognize opportunities for leveraging automation to improve efficiency and productivity",
      "Assess the role of human creativity and decision-making alongside automated processes"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/automation-future-of-work.png",
    tags: ["Automation", "Future of Work", "Technology"]
  },
  {
    id: 91,
    title: "AI Basics for Non-Tech Teams",
    description: "Understand AI fundamentals and their business applications for non-technical professionals.",
    category: "Technology",
    level: "Beginner",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and non-technical teams",
    learningOutcomes: [
      "Understand fundamental AI concepts and terminology relevant to business contexts",
      "Identify key areas where AI can improve team performance and efficiency",
      "Communicate effectively with technical teams about AI-related projects",
      "Recognize ethical considerations in AI applications"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/ai-basics-for-non-tech-teams.png",
    tags: ["AI Basics", "Technology", "Business Applications"]
  },
  {
    id: 92,
    title: "Reskilling & Upskilling: Your Career Toolkit",
    description: "Master reskilling and upskilling strategies to stay competitive in evolving industries.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key areas for personal career growth through reskilling and upskilling",
      "Develop a personalized strategy for acquiring new skills relevant to industry trends",
      "Utilize available tools and resources effectively to facilitate continuous learning",
      "Align personal growth objectives with organizational goals to enhance career advancement"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/reskilling-upskilling-your-career-toolkit.png",
    tags: ["Reskilling", "Upskilling", "Career Development"]
  },
  {
    id: 93,
    title: "Effective Onboarding for New Hires",
    description: "Master effective onboarding strategies to set new employees up for success.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Implement a structured onboarding process tailored to organizational needs",
      "Identify key components of effective onboarding programs",
      "Apply techniques to engage and retain new employees",
      "Evaluate the success of onboarding initiatives through feedback and metrics"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/effective-onboarding-for-new-hires.png",
    tags: ["Onboarding", "Employee Engagement", "Leadership"]
  },
  {
    id: 94,
    title: "Managing Underperformance with Empathy",
    description: "Learn to manage underperforming employees with empathy and constructive support.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify early signs of underperformance in team members",
      "Apply empathetic listening techniques to understand team members' challenges",
      "Develop personalized improvement plans for underperforming team members",
      "Foster a supportive environment that encourages open communication",
      "Implement strategies to follow-up and support team members' development"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/managing-underperformance-with-empathy.png",
    tags: ["Underperformance Management", "Empathy", "Leadership"]
  },
  {
    id: 95,
    title: "Performance Appraisal Conversations",
    description: "Master performance appraisal conversations for constructive feedback and development.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Effectively conduct performance appraisal meetings",
      "Provide constructive feedback that motivates and guides team members",
      "Manage difficult conversations during appraisals",
      "Set clear expectations and goals with employees"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/performance-appraisal-conversations.png",
    tags: ["Performance Appraisal", "Feedback", "Leadership"]
  },
  {
    id: 96,
    title: "Creating Psychological Safety for Your Team",
    description: "Foster psychological safety to create an environment where teams can thrive and innovate.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the components of psychological safety and its importance in the workplace",
      "Develop strategies to foster an environment where team members feel safe to express ideas and take risks",
      "Apply techniques to address and resolve conflicts in a way that supports psychological safety",
      "Implement feedback mechanisms that encourage open and honest communication",
      "Assess team dynamics to ensure ongoing psychological safety"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/creating-psychological-safety-for-your-team.png",
    tags: ["Psychological Safety", "Team Culture", "Leadership"]
  },
  {
    id: 97,
    title: "Building a Feedback Culture",
    description: "Create a culture of continuous feedback for improved performance and growth.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the key components of effective feedback culture in organizations",
      "Apply strategies to facilitate open and constructive feedback among team members",
      "Demonstrate techniques for giving and receiving feedback with clarity and empathy",
      "Develop a plan for integrating feedback culture principles into daily management practices"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-a-feedback-culture.png",
    tags: ["Feedback Culture", "Team Development", "Leadership"]
  },
  {
    id: 98,
    title: "Writing Proposals That Win",
    description: "Master proposal writing techniques to create compelling and successful business proposals.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and sales professionals",
    learningOutcomes: [
      "Identify the key components of a winning proposal",
      "Utilize techniques to effectively persuade and influence decision-makers",
      "Craft concise and compelling proposals that meet client needs",
      "Apply strategies to tailor proposals to different audiences",
      "Recognize common pitfalls and how to avoid them in proposal writing"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/writing-proposals-that-win.png",
    tags: ["Proposal Writing", "Business Communication", "Sales"]
  },
  {
    id: 99,
    title: "Clear and Concise Report Writing",
    description: "Master clear and concise report writing for effective business communication.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "mid-level managers",
    learningOutcomes: [
      "Identify key components of a clear and concise report",
      "Apply techniques to enhance report clarity and precision",
      "Recognize common pitfalls in report writing and how to avoid them",
      "Edit and refine reports for maximum impact",
      "Present report findings effectively to various audiences"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/clear-and-concise-report-writing.png",
    tags: ["Report Writing", "Business Communication", "Professional Writing"]
  },
  {
    id: 100,
    title: "Grammar & Proofreading for Professionals",
    description: "Master grammar and proofreading skills for professional and error-free communication.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and team leads",
    learningOutcomes: [
      "Identify common grammatical errors in professional writing",
      "Apply proofreading techniques to improve communication clarity",
      "Implement best practices for error-free professional documents",
      "Enhance the readability and professionalism of written communications"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/grammar-proofreading-for-professionals.png",
    tags: ["Grammar", "Proofreading", "Professional Writing"]
  },
  {
    id: 101,
    title: "Building SOPs and Process Documents",
    description: "Master the creation of Standard Operating Procedures and process documentation.",
    category: "Professional Development",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the key components of effective standard operating procedures (SOPs)",
      "Draft clear and concise process documents that align with organizational goals",
      "Implement best practices for maintaining and updating SOPs",
      "Enhance team productivity through well-structured process documentation"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-sops-and-process-documents.png",
    tags: ["SOPs", "Process Documentation", "Professional Development"]
  },
  {
    id: 102,
    title: "Writing for Executives: Briefs & Summaries",
    description: "Master executive-level writing for briefs and summaries that drive decision-making.",
    category: "Communication",
    level: "Advanced",
    duration: "30 minutes",
    targetAudience: "Senior leaders",
    learningOutcomes: [
      "Compose clear and concise executive briefs that summarize key information effectively",
      "Identify key points and essential information for inclusion in executive summaries",
      "Enhance communication skills tailored for brief and summary writing in a business context"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/writing-for-executives-briefs-summaries.png",
    tags: ["Executive Writing", "Briefs", "Communication"]
  },
  {
    id: 103,
    title: "Mastering Virtual Presentations",
    description: "Master virtual presentation skills for engaging and impactful online communication.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Develop confidence in delivering virtual presentations",
      "Utilize engaging virtual presentation tools and techniques",
      "Implement strategies to maintain audience attention during virtual meetings"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/mastering-virtual-presentations.png",
    tags: ["Virtual Presentations", "Communication", "Digital Skills"]
  },
  {
    id: 104,
    title: "Building Culture in Remote Teams",
    description: "Create strong team culture and engagement in remote and distributed work environments.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and team leaders",
    learningOutcomes: [
      "Identify key components of a positive remote team culture",
      "Implement strategies to foster engagement and collaboration among team members",
      "Utilize tools and techniques for effective communication in virtual environments",
      "Recognize and address challenges specific to remote team dynamics"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-culture-in-remote-teams.png",
    tags: ["Remote Culture", "Team Building", "Leadership"]
  },
  {
    id: 105,
    title: "Asynchronous Communication Best Practices",
    description: "Master asynchronous communication for effective collaboration across time zones and schedules.",
    category: "Communication",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the principles and advantages of asynchronous communication in a business setting",
      "Identify appropriate tools and platforms for effective asynchronous communication",
      "Implement strategies to enhance productivity and collaboration through asynchronous communication",
      "Develop skills to manage and prioritize asynchronous communication effectively"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/asynchronous-communication-best-practices.png",
    tags: ["Asynchronous Communication", "Remote Work", "Communication"]
  },
  {
    id: 106,
    title: "Running Effective Remote Meetings",
    description: "Master remote meeting facilitation for productive and engaging virtual collaboration.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and team leaders",
    learningOutcomes: [
      "Identify key elements of a successful remote meeting",
      "Implement strategies to enhance engagement during virtual meetings",
      "Utilize technology tools effectively to support remote meetings",
      "Demonstrate techniques to manage time and productivity during remote meetings"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/running-effective-remote-meetings.png",
    tags: ["Remote Meetings", "Virtual Collaboration", "Leadership"]
  },
  {
    id: 107,
    title: "Time Zone Management for Global Teams",
    description: "Master time zone management strategies for effective global team collaboration.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the key principles of time zone management for global teams",
      "Develop strategies to optimize collaboration across different time zones",
      "Implement best practices to enhance productivity in remote and diverse work environments",
      "Analyze the impact of time zone differences on team communication and operations"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/time-zone-management-for-global-teams.png",
    tags: ["Time Zone Management", "Global Teams", "Leadership"]
  },
  {
    id: 108,
    title: "Coaching Conversations for Managers",
    description: "Master coaching conversations to develop and empower your team members effectively.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify key elements of effective coaching conversations in a managerial context",
      "Apply active listening and questioning techniques to foster employee growth",
      "Create a supportive environment that encourages open communication and feedback",
      "Utilize strategies to set goals and monitor progress during coaching sessions"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/coaching-conversations-for-managers.png",
    tags: ["Coaching", "Employee Development", "Leadership"]
  },
  {
    id: 109,
    title: "Building a Mentorship Program at Work",
    description: "Design and implement effective mentorship programs to foster professional growth and development.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Identify the key components of a successful mentorship program",
      "Develop strategies to match mentors with mentees effectively",
      "Evaluate the progress and impact of mentorship initiatives",
      "Design a mentorship program tailored to organizational goals"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/building-a-mentorship-program-at-work.png",
    tags: ["Mentorship Programs", "Professional Development", "Leadership"]
  },
  {
    id: 110,
    title: "Reverse Mentoring for Cross-Generational Learning",
    description: "Implement reverse mentoring to facilitate cross-generational learning and knowledge sharing.",
    category: "Leadership",
    level: "Advanced",
    duration: "30 minutes",
    targetAudience: "Mid-level managers and senior leaders",
    learningOutcomes: [
      "Understand the principles and benefits of reverse mentoring in a corporate setting",
      "Implement strategies to facilitate successful cross-generational learning partnerships",
      "Identify common challenges in reverse mentoring and develop solutions to overcome them",
      "Leverage reverse mentoring to foster innovation and diverse perspectives within teams"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/reverse-mentoring-for-cross-generational-learning.png",
    tags: ["Reverse Mentoring", "Cross-Generational Learning", "Leadership"]
  },
  {
    id: 111,
    title: "Peer Coaching: Skill-Building in Pairs",
    description: "Master peer coaching techniques to build skills and foster mutual development.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Apply effective peer coaching techniques to enhance team collaboration",
      "Identify and leverage individual strengths within peer coaching sessions",
      "Develop actionable plans for continuous skill improvement through peer coaching",
      "Facilitate mutual feedback loops in a coaching partnership",
      "Implement strategies to track coaching progress and outcomes"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/peer-coaching-skill-building-in-pairs.png",
    tags: ["Peer Coaching", "Skill Building", "Leadership"]
  },
  {
    id: 112,
    title: "Giving & Receiving Developmental Feedback",
    description: "Master the art of giving and receiving developmental feedback for continuous improvement.",
    category: "Leadership",
    level: "Intermediate",
    duration: "30 minutes",
    targetAudience: "Mid-level managers",
    learningOutcomes: [
      "Understand the principles of effective developmental feedback",
      "Learn techniques for giving feedback constructively",
      "Develop skills to receive feedback with openness and positivity",
      "Apply feedback effectively to improve team performance"
    ],
    deliveryFormat: "Portrait video + Quiz + LinkedIn Certificate",
    assessment: "Yes",
    certificate: "Available",
    image: "/final2/giving-receiving-developmental-feedback.png",
    tags: ["Developmental Feedback", "Team Development", "Leadership"]
  }
];

const categories = ["All", "Communication", "Leadership", "Diversity & Inclusion", "Compliance", "Productivity", "Innovation", "Technology", "Professional Development"];
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
        <meta name="description" content="Access 500+ auto-generated, expert-reviewed courses across communication, leadership, compliance, and more." />
      </Helmet>

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
              src="/lisa-logo.svg" 
              alt="LISA Logo" 
              className="h-8 w-auto max-w-[120px] sm:max-w-none dark:hidden" 
            />
            <img 
              src="/lisa_-_final_-_logo_-_wite__e2e8f0 (2).svg" 
              alt="LISA Logo" 
              className="h-8 w-auto max-w-[120px] sm:max-w-none hidden dark:block" 
            />
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" asChild>
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Explore Lisa's Content Library
            </h1>
            <p className="text-xl text-muted-foreground">
              500+ Courses across Communication, Leadership, Compliance & More — Auto-Generated, Expert-Reviewed.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white">
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
                    className="pl-12 pr-4 py-4 text-base border-2 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400"
                  />
                </div>
              </div>
              
              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    📂 Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedCategory === category
                            ? "bg-purple-600 text-white shadow-md"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Level Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    📊 Difficulty Level
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <button
                        key={level}
                        onClick={() => setSelectedLevel(level)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                          selectedLevel === level
                            ? "bg-purple-600 text-white shadow-md"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="text-center pt-6 mt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-purple-600">{startIndex + 1}-{Math.min(endIndex, filteredCourses.length)}</span> of <span className="font-semibold">{filteredCourses.length}</span> courses
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
                <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border h-[480px] flex flex-col min-w-[280px]">
                  {/* Course Thumbnail */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0 bg-gray-50/50 dark:bg-gray-800/50">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ 
                        objectPosition: 'center center',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        // Fallback to a placeholder if image fails to load
                        e.currentTarget.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center";
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {course.category}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {course.level}
                    </div>
                  </div>
                  
                  {/* Course Info */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 transition-colors line-clamp-2 text-sm leading-tight min-h-[3rem]">
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
              <h3 className="text-xl font-semibold mb-2">No courses found</h3>
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
          <div className="w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 relative z-20 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 z-10 touch-manipulation"
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
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    className="w-full h-full object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {selectedCourse.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {selectedCourse.level}
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedCourse.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedCourse.description}
                </p>
                
                {/* Course Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {selectedCourse.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Target className="h-4 w-4" />
                    <span>Target Audience: {selectedCourse.targetAudience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Award className="h-4 w-4" />
                    <span>Certificate: {selectedCourse.certificate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Video className="h-4 w-4" />
                    <span>Format: {selectedCourse.deliveryFormat}</span>
                  </div>
                </div>
                
                {/* Learning Outcomes */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Learning Outcomes:</h4>
                  <ul className="space-y-2">
                    {selectedCourse.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
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
                
                {/* Action Buttons */}
                <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-3">
                  <Button variant="cta" size="lg" className="basis-1/2 sm:basis-auto flex-1 min-w-0 text-sm sm:text-base px-3 sm:px-6 py-3 sm:py-4 whitespace-normal text-center">
                    Enroll Now
                  </Button>
                  <Button variant="outline" size="lg" className="basis-1/2 sm:basis-auto flex-1 min-w-0 text-sm sm:text-base px-3 sm:px-6 py-3 sm:py-4 whitespace-normal text-center">
                    Preview Course
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
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-border">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                Ready to Access the Full Library?
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-center leading-relaxed">
                Get unlimited access to our complete course catalog with advanced features, progress tracking, and personalized learning paths.
              </p>
              <div className="flex justify-center">
                <Button variant="cta" size="xl" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto" asChild>
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
