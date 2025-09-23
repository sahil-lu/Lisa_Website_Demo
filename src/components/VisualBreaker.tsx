import React from "react";

const VisualBreaker = () => {
  const features = [
    "35+ years of learning design experience",
    "Create Quality Content in mins",
    "Just in Time learning",
    "AI first L&D Platform",
    "Cost less - performs more",
    "500+ Course library & growing"
  ];

  return (
    <div className="relative overflow-hidden bg-black py-2">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      
      {/* Marquee Content */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of content */}
          {features.map((feature, index) => (
            <React.Fragment key={`first-${index}`}>
              <span className="text-neutral-50 font-bold text-base mx-2">
                {feature}
              </span>
              <span className="text-neutral-50 text-xl mx-1">✨</span>
            </React.Fragment>
          ))}
          
          {/* Duplicate for seamless loop */}
          {features.map((feature, index) => (
            <React.Fragment key={`second-${index}`}>
              <span className="text-neutral-50 font-bold text-base mx-2">
                {feature}
              </span>
              <span className="text-neutral-50 text-xl mx-1">✨</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisualBreaker;
