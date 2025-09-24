import React from "react";
import { useNavigate } from "react-router-dom";

const CourseLibraryCarousel = () => {
  const navigate = useNavigate();

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

      </div>
    </section>
  );
};

export default CourseLibraryCarousel;