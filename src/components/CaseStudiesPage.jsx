import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, TrendingUp, Users, Percent, BarChart3, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import ParticleStars from './ParticleStars';
import Header from './Header';
import GetStartedSection from './GetStartedSection';
import Footer from './Footer';

const CaseStudiesPage = () => {
  const containerRef = useRef(null);
  const [currentAgencySlide, setCurrentAgencySlide] = useState(0);
  const [currentClientSlide, setCurrentClientSlide] = useState(0);

  // Agency case studies data with updated stats, order, and categories
  const agencyStudies = [
    {
      id: 1,
      name: "Ecom Luxx",
      image: "/api/placeholder/400/250",
      clients: 15,
      retention: 89,
      description: "E-commerce focused agency driving online sales growth",
      category: "Web Dev"
    },
    {
      id: 2,
      name: "Websites By Jamie",
      image: "/api/placeholder/400/250",
      clients: 10,
      retention: 95,
      description: "Scaling digital agency operations with white-label SEO services",
      category: "Web Dev"
    },
    {
      id: 3,
      name: "Red Lips Media",
      image: "/api/placeholder/400/250",
      clients: 10,
      retention: 96,
      description: "Beauty and lifestyle agency with targeted SEO solutions",
      category: "Full Marketing Agency"
    },
    {
      id: 4,
      name: "Single Grain",
      image: "/api/placeholder/400/250",
      clients: 3,
      retention: 94,
      description: "Full-service digital marketing with enhanced SEO capabilities",
      category: "Full Marketing Agency"
    },
    {
      id: 5,
      name: "AK Marketing",
      image: "/api/placeholder/400/250",
      clients: 5,
      retention: 92,
      description: "Expanding service offerings through strategic SEO partnerships",
      category: "Full Marketing Agency"
    },
    {
      id: 6,
      name: "SEO Focused",
      image: "/api/placeholder/400/250",
      clients: 5,
      retention: 98,
      description: "Specialized SEO agency achieving exceptional client results",
      category: "SEO Agency"
    },
    {
      id: 7,
      name: "Bobo Digital",
      image: "/api/placeholder/400/250",
      clients: 3,
      retention: 91,
      description: "Creative digital agency with data-driven SEO strategies",
      category: "Full Marketing Agency"
    }
  ];

  // Client case studies data
  const clientStudies = [
    {
      id: 1,
      name: "Magic Hour AI",
      image: "/api/placeholder/400/250",
      trafficIncrease: 285,
      description: "AI-powered video editing platform achieving massive organic growth",
      category: "AI Technology"
    },
    {
      id: 2,
      name: "3D AI Studio",
      image: "/api/placeholder/400/250",
      trafficIncrease: 342,
      description: "3D modeling platform revolutionizing creative workflows",
      category: "3D Technology"
    },
    {
      id: 3,
      name: "Kesselman Plumbers",
      image: "/api/placeholder/400/250",
      trafficIncrease: 198,
      description: "Local plumbing service dominating regional search results",
      category: "Home Services"
    },
    {
      id: 4,
      name: "Level Up Game Plan",
      image: "/api/placeholder/400/250",
      trafficIncrease: 267,
      description: "Gaming strategy platform reaching new audiences",
      category: "Gaming"
    },
    {
      id: 5,
      name: "Smoke Kind",
      image: "/api/placeholder/400/250",
      trafficIncrease: 156,
      description: "Premium smoking accessories brand expanding market reach",
      category: "Lifestyle"
    },
    {
      id: 6,
      name: "Hello Seen",
      image: "/api/placeholder/400/250",
      trafficIncrease: 223,
      description: "Fashion discovery platform connecting style enthusiasts",
      category: "Fashion"
    },
    {
      id: 7,
      name: "Brewed Co Coffee",
      image: "/api/placeholder/400/250",
      trafficIncrease: 189,
      description: "Artisan coffee roaster building loyal customer base",
      category: "Food & Beverage"
    },
    {
      id: 8,
      name: "Kickin'Inn",
      image: "/api/placeholder/400/250",
      trafficIncrease: 234,
      description: "Seafood restaurant chain driving local foot traffic",
      category: "Restaurant"
    },
    {
      id: 9,
      name: "Trip To Japan",
      image: "/api/placeholder/400/250",
      trafficIncrease: 312,
      description: "Travel planning service for authentic Japanese experiences",
      category: "Travel"
    },
    {
      id: 10,
      name: "Yurt In The Dirt",
      image: "/api/placeholder/400/250",
      trafficIncrease: 178,
      description: "Unique glamping experience attracting adventure seekers",
      category: "Hospitality"
    }
  ];

  // Slider functions for agencies
  const nextAgencySlide = () => {
    setCurrentAgencySlide((prev) => (prev + 1) % agencyStudies.length);
  };

  const prevAgencySlide = () => {
    setCurrentAgencySlide((prev) => (prev - 1 + agencyStudies.length) % agencyStudies.length);
  };

  // Slider functions for clients
  const nextClientSlide = () => {
    setCurrentClientSlide((prev) => (prev + 1) % clientStudies.length);
  };

  const prevClientSlide = () => {
    setCurrentClientSlide((prev) => (prev - 1 + clientStudies.length) % clientStudies.length);
  };

  // Get visible slides for agencies (show 3 at a time on desktop, 1 on mobile)
  const getVisibleAgencySlides = () => {
    const slidesToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentAgencySlide + i) % agencyStudies.length;
      slides.push(agencyStudies[index]);
    }
    return slides;
  };

  // Get visible slides for clients (show 4 at a time on desktop, 1 on mobile)
  const getVisibleClientSlides = () => {
    const slidesToShow = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentClientSlide + i) % clientStudies.length;
      slides.push(clientStudies[index]);
    }
    return slides;
  };

  const [visibleAgencySlides, setVisibleAgencySlides] = useState(getVisibleAgencySlides());
  const [visibleClientSlides, setVisibleClientSlides] = useState(getVisibleClientSlides());

  useEffect(() => {
    const handleResize = () => {
      setVisibleAgencySlides(getVisibleAgencySlides());
      setVisibleClientSlides(getVisibleClientSlides());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentAgencySlide, currentClientSlide]);

  useEffect(() => {
    setVisibleAgencySlides(getVisibleAgencySlides());
  }, [currentAgencySlide]);

  useEffect(() => {
    setVisibleClientSlides(getVisibleClientSlides());
  }, [currentClientSlide]);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section - Exact same as home page but with "Case Studies" title */}
      <section 
        ref={containerRef}
        className="relative min-h-[80vh] overflow-hidden bg-black"
      >
        {/* Particle Effects */}
        <ParticleStars density={60} />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 text-center pt-24">
        {/* Mountain Range Background - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
          {/* Horizontal Mountain Range 1 - Smaller, More Visible */}
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 128" preserveAspectRatio="none">
            <path d="M0,128 L0,90 L80,70 L160,85 L240,60 L320,75 L400,55 L480,70 L560,50 L640,65 L720,45 L800,60 L880,40 L960,55 L1040,35 L1120,50 L1200,30 L1200,128 Z" 
                  fill="url(#horizontalMountainGrad1)" />
            <defs>
              <linearGradient id="horizontalMountainGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Horizontal Mountain Range 2 - Taller, More Visible */}
          <svg className="absolute bottom-0 left-0 w-full h-48 opacity-15" viewBox="0 0 1200 192" preserveAspectRatio="none">
            <path d="M0,192 L0,120 L100,80 L200,100 L300,60 L400,90 L500,40 L600,70 L700,30 L800,60 L900,20 L1000,50 L1100,10 L1200,40 L1200,192 Z" 
                  fill="url(#horizontalMountainGrad2)" />
            <defs>
              <linearGradient id="horizontalMountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.08"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Moon Background - Only for Hero */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gray-400/15 via-cyan-400/8 to-transparent blur-sm opacity-50"></div>
        </div>
        
        {/* Logo and Brand */}
        <div className="mb-6 sm:mb-8 relative z-50" style={{ position: 'relative', zIndex: 9999 }}>
          <div className="mb-4">
            <img 
              src="./StandardLogo.png" 
              alt="Everest Digital" 
              className="h-16 sm:h-20 w-auto mx-auto relative z-50"
              style={{ position: 'relative', zIndex: 9999, transform: 'none !important' }}
            />
          </div>
        </div>

        {/* Main Headline - Changed to "Case Studies" */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 max-w-4xl leading-tight relative z-10">
          <span className="text-white-glow-lg">
            Case Studies
          </span>
        </h1>

        {/* Email Input and Button */}
        <form className="w-full max-w-2xl mb-6 sm:mb-8 relative z-10">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50 animated-border">
            <div className="flex-1 relative">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent pl-12 pr-4 py-3 sm:py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-sm sm:text-base text-white-glow placeholder-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="waitlist-button font-medium transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base text-white-glow"
            >
              Add To Waitlist →
            </button>
          </div>
        </form>

        {/* Video Button */}
        <button className="flex items-center space-x-3 transition-colors duration-200 group text-white-glow hover:opacity-80 relative z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="currentColor" />
          </div>
          <span className="text-base sm:text-lg font-medium">Watch the video</span>
        </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-0 overflow-hidden bg-black">
        {/* Particle Effects */}
        <ParticleStars density={40} />
        
        {/* Mountain Range Background - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
          {/* Left side mountain range */}
          <svg className="absolute left-0 top-0 h-full w-20 opacity-12" viewBox="0 0 80 1200" preserveAspectRatio="none">
            <path d="M0,0 L32,0 L52,150 L27,250 L57,350 L37,450 L67,550 L47,650 L72,750 L52,850 L77,950 L57,1050 L62,1150 L47,1200 L0,1200 Z" 
                  fill="url(#mountainGradientLeftCS)" />
            {/* Triangular snow peaks */}
            <polygon points="50,148 54,152 46,152" fill="#06b6d4" opacity="0.8"/>
            <polygon points="55,348 59,352 51,352" fill="#0891b2" opacity="0.7"/>
            <polygon points="65,548 69,552 61,552" fill="#06b6d4" opacity="0.8"/>
            <polygon points="70,748 74,752 66,752" fill="#0891b2" opacity="0.7"/>
            <polygon points="75,948 79,952 71,952" fill="#06b6d4" opacity="0.8"/>
            <polygon points="60,1148 64,1152 56,1152" fill="#0891b2" opacity="0.7"/>
            <defs>
              <linearGradient id="mountainGradientLeftCS" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Right side mountain range */}
          <svg className="absolute right-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
            <path d="M80,0 L48,0 L28,150 L53,250 L23,350 L43,450 L13,550 L33,650 L8,750 L28,850 L3,950 L23,1050 L18,1150 L33,1200 L80,1200 Z" 
                  fill="url(#mountainGradientRightCS)" />
            {/* Triangular snow peaks */}
            <polygon points="26,148 30,152 22,152" fill="#06b6d4" opacity="0.8"/>
            <polygon points="21,348 25,352 17,352" fill="#0891b2" opacity="0.7"/>
            <polygon points="11,548 15,552 7,552" fill="#06b6d4" opacity="0.8"/>
            <polygon points="6,748 10,752 2,752" fill="#0891b2" opacity="0.7"/>
            <polygon points="1,948 5,952 -3,952" fill="#06b6d4" opacity="0.8"/>
            <polygon points="16,1148 20,1152 12,1152" fill="#0891b2" opacity="0.7"/>
            <defs>
              <linearGradient id="mountainGradientRightCS" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Agencies Section with Slider */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-cyan-400">Agency</span> Partners
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Discover how we've helped agencies scale their operations and retain clients with our white-label SEO services.
              </p>
            </div>

            {/* Agency Slider */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevAgencySlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 -ml-6"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-400" />
              </button>
              
              <button
                onClick={nextAgencySlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 -mr-6"
              >
                <ChevronRight className="w-6 h-6 text-cyan-400" />
              </button>

              {/* Slides Container with smooth animations - Single Row */}
              <div className="overflow-hidden">
                <div 
                  className="flex gap-8 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentAgencySlide * (100 / 3)}%)`
                  }}
                >
                  {agencyStudies.map((study, index) => (
                    <div key={study.id} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex-shrink-0 animated-border" style={{ width: 'calc(33.333% - 1.33rem)' }}>
                      {/* Image placeholder with gradient overlay */}
                      <div className="relative h-48 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center">
                        <div className="text-6xl font-bold text-cyan-400/30">
                          {study.name.split(' ').map(word => word[0]).join('')}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      </div>

                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full mb-3">
                            {study.category}
                          </span>
                          <h4 className="text-xl font-bold text-white mb-2">{study.name}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{study.description}</p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="flex items-center justify-center mb-2">
                              <Users className="w-5 h-5 text-cyan-400 mr-2" />
                              <span className="text-2xl font-bold text-white">{study.clients}</span>
                            </div>
                            <span className="text-xs text-gray-400">Active Clients</span>
                          </div>
                          <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                            <div className="flex items-center justify-center mb-2">
                              <Percent className="w-5 h-5 text-cyan-400 mr-2" />
                              <span className="text-2xl font-bold text-white">{study.retention}%</span>
                            </div>
                            <span className="text-xs text-gray-400">Retention Rate</span>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                          View case study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {agencyStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAgencySlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentAgencySlide ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Clients Section with Slider */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-cyan-400">Client</span> Success Stories
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                See how we've driven exceptional traffic growth for businesses across diverse industries.
              </p>
            </div>

            {/* Client Slider */}
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={prevClientSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 -ml-6"
              >
                <ChevronLeft className="w-6 h-6 text-cyan-400" />
              </button>
              
              <button
                onClick={nextClientSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 -mr-6"
              >
                <ChevronRight className="w-6 h-6 text-cyan-400" />
              </button>

              {/* Slides Container with smooth animations - Single Row */}
              <div className="overflow-hidden">
                <div 
                  className="flex gap-6 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentClientSlide * (100 / 4)}%)`
                  }}
                >
                  {clientStudies.map((study, index) => (
                    <div key={study.id} className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex-shrink-0 animated-border" style={{ width: 'calc(25% - 1.125rem)' }}>
                      {/* Image placeholder with gradient overlay */}
                      <div className="relative h-40 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center">
                        <div className="text-4xl font-bold text-cyan-400/30">
                          {study.name.split(' ').map(word => word[0]).join('')}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      </div>

                      <div className="p-5">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-medium rounded-full mb-3">
                            {study.category}
                          </span>
                          <h4 className="text-lg font-bold text-white mb-2">{study.name}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{study.description}</p>
                        </div>

                        {/* Traffic Increase Metric */}
                        <div className="text-center p-4 bg-gray-800/50 rounded-lg mb-4">
                          <div className="flex items-center justify-center mb-2">
                            <TrendingUp className="w-6 h-6 text-cyan-400 mr-2" />
                            <span className="text-3xl font-bold text-white">{study.trafficIncrease}%</span>
                          </div>
                          <span className="text-sm text-gray-400">Traffic Increase</span>
                        </div>

                        <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                          View case study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {clientStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentClientSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentClientSlide ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;

