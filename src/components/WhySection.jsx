import React, { useState, useRef, useEffect } from 'react';
import { Play, TrendingUp, DollarSign, MousePointer, Eye } from 'lucide-react';
import ParticleStars from './ParticleStars';

const WhySection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const containerRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "White Labelling Sucks",
      content: "Most agencies follow their own rigid approach, forcing your business to adapt to their methods. We mould our proven strategies to align perfectly with your business objectives, ensuring every action drives your specific goals forward."
    },
    {
      number: 2,
      title: "Done For You",
      content: "While other agencies just handle implementation, we take care of everything that actually stresses you out. Client meetings, email communications, progress reports - we handle it all so you can focus on growing your business."
    },
    {
      number: 3,
      title: "Integrated For You",
      content: "We provide a dedicated email address within your team structure, meaning all client communication flows directly through us. Your clients see seamless integration while you maintain complete control without the operational headaches."
    },
    {
      number: 4,
      title: "I Know What Works",
      content: "Having worked across 10 different agencies, I've seen the same issues everywhere - prioritizing vanity metrics over real results. No fluff, no BS, no vanity projects. Just straight, measurable results that impact your bottom line."
    }
  ];

  const stats = [
    { icon: MousePointer, number: "70M+", label: "Clicks Generated" },
    { icon: DollarSign, number: "$761M+", label: "Revenue Delivered" },
    { icon: TrendingUp, number: "5.6M+", label: "Conversions" },
    { icon: Eye, number: "4.1B+", label: "Impressions" }
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

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  return (
    <section 
      ref={containerRef}
      className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-0 overflow-hidden bg-black"
    >
      {/* Particle Effects */}
      <ParticleStars density={40} />
      
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/2 via-transparent to-blue-600/2 pointer-events-none"></div>
      
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side mountain range */}
        <svg className="absolute left-0 top-0 h-full w-20 opacity-12" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M0,0 L32,0 L52,150 L27,250 L57,350 L37,450 L67,550 L47,650 L72,750 L52,850 L77,950 L57,1050 L62,1150 L47,1200 L0,1200 Z" 
                fill="url(#mountainGradientLeft2)" />
          {/* Triangular snow peaks */}
          <polygon points="50,148 54,152 46,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="55,348 59,352 51,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="65,548 69,552 61,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="70,748 74,752 66,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="75,948 79,952 71,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="60,1148 64,1152 56,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientLeft2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Right side mountain range */}
        <svg className="absolute right-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M80,0 L48,0 L28,150 L53,250 L23,350 L43,450 L13,550 L33,650 L8,750 L28,850 L3,950 L23,1050 L18,1150 L33,1200 L80,1200 Z" 
                fill="url(#mountainGradientRight2)" />
          {/* Triangular snow peaks */}
          <polygon points="26,148 30,152 22,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="21,348 25,352 17,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="11,548 15,552 7,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="6,748 10,752 2,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="1,948 5,952 -3,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="16,1148 20,1152 12,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientRight2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
            Before You Scroll Through
          </p>          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 drop-shadow-2xl text-white leading-tight">
            Why I Do <span className="text-cyan-400">SEO For Agencies</span>
          </h2>   </div>

        {/* Main Content - Unified Black Container */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-1000 delay-500 mx-2 sm:mx-0 ${
            visibleSections.has(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
          style={{ minHeight: '450px' }}
        >
          {/* Container Content - Grid Layout */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 h-full p-4 md:p-8">
            {/* Left Side - Text Content with Clickable Buttons */}
            <div className="flex flex-col h-full">
              {/* Number Buttons */}
              <div className="flex space-x-2 mb-6 md:mb-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center font-medium text-sm transition-all duration-300 hover:scale-110 ${
                      currentStep === index
                        ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400'
                        : 'bg-transparent border-gray-600/50 text-gray-500 hover:border-cyan-500/30 hover:text-cyan-400'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              {/* Text Content Area */}
              <div className="flex-1 flex items-start relative" style={{ minHeight: '200px' }}>
                <div className="w-full">
                  {/* Current Step Content */}
                  <div className="transition-all duration-500 ease-out">
                    <div className="flex items-start space-x-3 md:space-x-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-cyan-500/30">
                        <span className="text-black font-bold text-base md:text-lg">{steps[currentStep].number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white-glow mb-3 md:mb-4">
                          {steps[currentStep].title}
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                          {steps[currentStep].content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent my-3 md:my-4"></div>

              {/* Stats Badges - Single Row Layout */}
              <div className="mt-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-lg p-2 md:p-3 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center space-y-1">
                          <div className="w-5 h-5 md:w-6 md:h-6 bg-cyan-500/20 rounded-md flex items-center justify-center">
                            <IconComponent className="w-2.5 h-2.5 md:w-3 md:h-3 text-cyan-400" />
                          </div>
                          <div className="text-xs md:text-sm font-bold text-cyan-400">
                            {stat.number}
                          </div>
                          <div className="text-xs text-gray-400 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Video Element (Inside Same Container) */}
            <div className="flex flex-col h-full">
              <div className="flex-1 relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden" style={{ minHeight: '250px' }}>
                {/* Video Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
                
                {/* Animated Play Button - Centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 ml-1" fill="currentColor" />
                    </div>
                    {/* Animated pulsing rings */}
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-pulse"></div>
                  </button>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 md:p-3">
                    <h4 className="text-white font-medium text-xs md:text-sm">
                      A Word From Me
                    </h4>
                    <p className="text-gray-300 text-xs">
                      Don't Take Chances Choosing The Wrong Team
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

