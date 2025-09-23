import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlockchainTestimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Head of L&D",
      company: "TechCorp India",
      avatar: "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Lisa AI has transformed our corporate learning. The AI course creation feature saved us months of development time, and our employees love the personalized learning paths.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "HR Director",
      company: "Global Solutions Ltd",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "The university partnership and certification options are game-changers. We're now building our own talent pipeline with trained employees ready to join our teams.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Learning Manager",
      company: "InnovateTech",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "At ₹500 per employee per month, Lisa AI is unbeatable value. The analytics dashboard gives us clear insights into learning impact and ROI.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "CTO",
      company: "Digital Dynamics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      text: "The integration with our existing systems was seamless. Our teams can now access learning anywhere, anytime, and the mobile app is fantastic.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Testimonials animation with dramatic entrance
      const testimonialElements = testimonialsRef.current;
      if (testimonialElements) {
        gsap.fromTo(testimonialElements, 
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9,
            rotationY: -15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            stagger: 0.25,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Auto-rotate testimonials with improved timing
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);

      // Background elements animation
      gsap.fromTo(".bg-elements", 
        { 
          opacity: 0,
          scale: 0.8,
          rotation: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Company logos animation with staggered reveal
      gsap.fromTo(".company-logo", 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      return () => clearInterval(interval);

    }, sectionRef);

    return () => ctx.revert();
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-neutral-50 dark:bg-neutral-950 relative overflow-hidden">
      {/* Background elements with blockchain theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-purple-500/20 opacity-20 bg-elements"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="premium-heading text-neutral-900 dark:text-neutral-50 mb-6">
            What Our
            <span className="text-purple-500"> Clients Say</span>
          </h2>
          <p className="premium-body text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto text-balance">
            Real feedback from L&D leaders who have transformed their corporate learning with Lisa AI.
          </p>
        </div>

        {/* Enhanced Testimonials Carousel with blockchain theme */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 backdrop-blur-sm shadow-[0_0_50px_rgba(147,51,233,0.1)]">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  ref={(el) => { if (el) testimonialsRef.current[index] = el; }}
                  className="w-full flex-shrink-0 p-8 px-16"
                >
                  <div className="text-center">
                    {/* Rating stars with enhanced styling */}
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current transform hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial text with enhanced styling */}
                    <blockquote className="premium-text text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed italic text-balance font-light">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author info with enhanced styling */}
                    <div className="flex items-center justify-center space-x-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-neutral-300 dark:border-neutral-600 shadow-lg transform hover:scale-110 transition-transform duration-300"
                      />
                      <div className="text-left">
                        <div className="premium-subtitle text-neutral-900 dark:text-neutral-50 font-light">{testimonial.name}</div>
                        <div className="premium-body text-neutral-600 dark:text-neutral-300 font-light">{testimonial.role}</div>
                        <div className="premium-body text-purple-500 font-light">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation buttons with blockchain theme */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-xl hover:bg-neutral-50 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Enhanced Dots indicator with blockchain theme */}
        <div className="flex justify-center mt-10 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-500 transform hover:scale-125 ${
                index === currentIndex 
                  ? 'bg-black dark:bg-white scale-125 shadow-lg' 
                  : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Company logos with enhanced UX and blockchain theme */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="premium-body text-neutral-600 dark:text-neutral-300 font-normal">Trusted by the world's largest organizations</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-100">
            {[
              { 
                name: "Raymond", 
                logo: "./raymond-final-logo-removebg-preview.png"
              },
              { 
                name: "TITAN eyeplus", 
                logo: "./titan-eyeplus-logo.png",
                darkLogo: "./titan-logo-dark-removebg-preview.png"
              },
              { 
                name: "ITM University", 
                logo: "./image-removebg-preview.png",
                darkLogo: "./logo-light.webp"
              },
              { 
                name: "ITM Skills University", 
                logo: "./itm-skills-university-logo.webp",
                darkLogo: "https://isu.ac.in/images/logo/ISU-LOGO-wite.webp"
              }
            ].map((company, index) => (
              <div key={index} className="company-logo hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-110">
                {company.darkLogo ? (
                  <>
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="h-20 w-auto dark:hidden"
                    />
                    <img 
                      src={company.darkLogo} 
                      alt={company.name}
                      className="h-20 w-auto hidden dark:block"
                    />
                  </>
                ) : (
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-20 w-auto"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainTestimonials;
