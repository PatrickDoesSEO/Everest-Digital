import React, { useState, useRef, useEffect } from 'react';
import { Check, X, FileText, Mail, ArrowRight, FolderOpen, Calendar, Phone, Users } from 'lucide-react';
import ParticleStars from './ParticleStars';

const ComparisonSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0); // Always show first item by default
  const sectionRefs = useRef([]);

  const features = [
    { 
      name: 'Monthly reporting', 
      us: true, 
      others: true,
      icon: FileText,
      description: 'Comprehensive monthly reports that provide detailed insights into your SEO performance, including traffic growth, keyword rankings, and ROI analysis.'
    },
    { 
      name: 'Dedicated email address in your company', 
      us: true, 
      others: false,
      icon: Mail,
      description: 'We provide a dedicated email address within your company domain, ensuring seamless communication and maintaining your brand consistency with clients.'
    },
    { 
      name: 'Manage the whole cycle (sales call → operations)', 
      us: true, 
      others: false,
      icon: ArrowRight,
      description: 'Complete end-to-end management from initial client sales calls through to full operational delivery, removing all stress from your team.'
    },
    { 
      name: 'Detailed project files', 
      us: true, 
      others: false,
      icon: FolderOpen,
      description: 'Organized project documentation including strategy documents, progress reports, and deliverables that you can access anytime.'
    },
    { 
      name: 'All clients get weekly reports', 
      us: true, 
      others: false,
      icon: Calendar,
      description: 'Every client receives detailed weekly progress reports, keeping them informed and engaged with transparent communication.'
    },
    { 
      name: 'All clients get fortnightly calls', 
      us: true, 
      others: false,
      icon: Phone,
      description: 'Regular bi-weekly calls with clients to discuss progress, address concerns, and plan next steps for optimal results.'
    },
    { 
      name: 'Weekly standups to make sure nothing\'s missed', 
      us: true, 
      others: false,
      icon: Users,
      description: 'Internal weekly team meetings to ensure all tasks are on track, deadlines are met, and nothing falls through the cracks.'
    }
  ];

  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, index]));
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current[index]) {
      sectionRefs.current[index] = el;
    }
  };

  return (
    <section 
      className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-0 overflow-hidden bg-black"
    >
      {/* Particle Effects */}
      <ParticleStars density={35} />
      
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Right side mountain range */}
        <svg className="absolute right-0 top-0 h-full w-28 opacity-10" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M80,0 L48,0 L28,150 L53,250 L23,350 L43,450 L13,550 L33,650 L8,750 L28,850 L3,950 L23,1050 L18,1150 L33,1200 L80,1200 Z" 
                fill="url(#mountainGradientRight3)" />
          {/* Triangular snow peaks */}
          <polygon points="26,148 30,152 22,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="21,348 25,352 17,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="11,548 15,552 7,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="6,748 10,752 2,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="1,948 5,952 -3,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="16,1148 20,1152 12,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientRight3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Left side mountain range */}
        <svg className="absolute left-0 top-0 h-full w-28 opacity-10" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M0,0 L32,0 L52,150 L27,250 L57,350 L37,450 L67,550 L47,650 L72,750 L52,850 L77,950 L57,1050 L62,1150 L47,1200 L0,1200 Z" 
                fill="url(#mountainGradientLeft3)" />
          {/* Triangular snow peaks */}
          <polygon points="50,148 54,152 46,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="55,348 59,352 51,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="65,548 69,552 61,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="70,748 74,752 66,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="75,948 79,952 71,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="60,1148 64,1152 56,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientLeft3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Shadow */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            THE DIFFERENCE IS CLEAR
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 drop-shadow-2xl text-white">
            Why Choose Us For Your <span className="text-cyan-400">SEO Services</span>
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="flex gap-8 max-w-7xl mx-auto">
          {/* Main Table */}
          <div 
            ref={(el) => addToRefs(el, 1)}
            className={`flex-1 transition-all duration-1000 delay-500 ${
              visibleSections.has(1) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="p-3 sm:p-6 lg:p-8">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-0 mb-0">
                <div className="text-left p-2 sm:p-4">
                  {/* Empty space - no background */}
                </div>
                <div className="text-center p-2 sm:p-4 bg-gradient-to-br from-cyan-500 to-teal-600 border-2 border-cyan-400/50 rounded-t-xl">
                  <div className="flex items-center justify-center">
                    <img 
                      src="./HeaderLogo.png" 
                      alt="Everest Digital" 
                      className="h-4 sm:h-6 w-auto"
                    />
                  </div>
                </div>
                <div className="text-center p-2 sm:p-4 bg-gray-700/50 rounded-t-xl">
                  <h3 className="text-sm sm:text-lg font-bold text-white">Other Agencies</h3>
                </div>
              </div>

              {/* Feature Rows */}
              <div className="space-y-0">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-3 gap-0 cursor-pointer transition-all duration-200"
                    onMouseEnter={() => {
                      setHoveredFeature(index);
                      setActiveFeature(index);
                    }}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Feature Name - This should be highlighted on hover */}
                    <div className={`text-left p-2 sm:p-4 bg-gray-800/30 transition-all duration-200 ${
                      hoveredFeature === index 
                        ? 'bg-cyan-500/40 border-l-4 border-cyan-400 shadow-lg shadow-cyan-500/20 transform scale-[1.02]' 
                        : ''
                    }`}>
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        {React.createElement(feature.icon, { 
                          className: `w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-colors duration-200 ${
                            hoveredFeature === index ? 'text-cyan-300' : 'text-cyan-400'
                          }` 
                        })}
                        <p className={`font-medium text-xs sm:text-base transition-colors duration-200 leading-tight ${
                          hoveredFeature === index ? 'text-white font-semibold' : 'text-gray-200'
                        }`}>{feature.name}</p>
                      </div>
                    </div>

                    {/* Our Agency - with unified turquoise border */}
                    <div className={`text-center p-2 sm:p-4 bg-gradient-to-br from-cyan-500/30 to-teal-600/30 border-l-2 border-r-2 border-cyan-400/50 transition-all duration-200 ${
                      index === features.length - 1 ? 'border-b-2 rounded-b-xl' : ''
                    }`}>
                      <div className="flex justify-center">
                        {feature.us ? (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Other Agencies */}
                    <div className={`text-center p-2 sm:p-4 bg-gray-800/30 transition-all duration-200 ${
                      index === features.length - 1 ? 'rounded-br-xl' : ''
                    }`}>
                      <div className="flex justify-center">
                        {feature.others ? (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={2} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500/70 rounded-full flex items-center justify-center">
                            <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description Panel - Outside container, always visible - Hidden on mobile */}
          <div className="hidden xl:flex w-80 relative items-center">
            <div className="sticky top-8 w-full">
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 overflow-hidden">
                <div className="relative min-h-[200px] flex items-center">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col justify-center ${
                          activeFeature === index 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8'
                        }`}
                        style={{ pointerEvents: activeFeature === index ? 'auto' : 'none' }}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <IconComponent className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                          <h4 className="text-lg font-semibold text-white break-words">
                            {feature.name}
                          </h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed break-words">
                          {feature.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

