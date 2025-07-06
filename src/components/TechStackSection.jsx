import React, { useState, useRef, useEffect } from 'react';
import ParticleStars from './ParticleStars';

const TechStackSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  const techTools = [
    {
      name: 'Ahrefs',
      description: 'Keyword research, backlink analysis, and site audit',
      logo: 'https://cdn.worldvectorlogo.com/logos/ahrefs-1.svg',
      fallback: 'A',
      color: '#ff6600'
    },
    {
      name: 'SurferSEO',
      description: 'AI-guided content optimization based on SERP data',
      logo: 'https://www.surferseo.com/favicon-32x32.png',
      fallback: 'SEO',
      color: '#007cff'
    },
    {
      name: 'ChatGPT (GPT-4o)',
      description: 'AI assistant for content creation, outlines, regex, and SEO strategy',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
      fallback: 'GPT',
      color: '#10a37f'
    },
    {
      name: 'n8n',
      description: 'Visual workflow automation for AI-enhanced SEO processes',
      logo: 'https://n8n.io/favicon.svg',
      fallback: 'n8n',
      color: '#ea4b71'
    },
    {
      name: 'Manus',
      description: 'AI-powered outreach automation and link building',
      logo: null,
      fallback: 'M',
      color: '#06b6d4'
    },
    {
      name: 'V0.dev',
      description: 'AI-assisted UI builder for high-performance SEO landing pages',
      logo: 'https://v0.dev/favicon.ico',
      fallback: 'V0',
      color: '#000000'
    },
    {
      name: 'Frase',
      description: 'AI-based content briefs and SERP-informed content writing',
      logo: 'https://www.frase.io/wp-content/uploads/2021/04/frase-favicon.png',
      fallback: 'F',
      color: '#4f46e5'
    },
    {
      name: 'Google Search Console + Looker Studio',
      description: 'Performance tracking and reporting',
      logo: 'https://developers.google.com/search/images/search-console-icon.png',
      fallback: 'GSC',
      color: '#4285f4'
    },
    {
      name: 'Custom Python/Node.js scripts',
      description: 'In-house technical SEO crawlers and analyzers',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      fallback: 'Py',
      color: '#3776ab'
    },
    {
      name: 'Pipedream',
      description: 'Serverless functions and automation for custom SEO scripting',
      logo: 'https://pipedream.com/s.v0/app_1YMhwo/logo/orig',
      fallback: 'PD',
      color: '#0d9488'
    },
    {
      name: 'Zapier',
      description: 'Lightweight automation for simple tasks outside of n8n',
      logo: 'https://cdn.worldvectorlogo.com/logos/zapier.svg',
      fallback: 'Z',
      color: '#ff4a00'
    },
    {
      name: 'Asana',
      description: 'SEO project management, content calendar, and team coordination',
      logo: 'https://cdn.worldvectorlogo.com/logos/asana-logo.svg',
      fallback: 'A',
      color: '#f06a6a'
    },
    {
      name: 'Google Sheets',
      description: 'Dynamic SEO reporting, data pipelines, and quick analysis',
      logo: 'https://cdn.worldvectorlogo.com/logos/google-sheets.svg',
      fallback: 'GS',
      color: '#0f9d58'
    },
    {
      name: 'Jasper',
      description: 'AI-powered long-form content generation and rewriting',
      logo: 'https://www.jasper.ai/favicon.ico',
      fallback: 'J',
      color: '#8b5cf6'
    },
    {
      name: 'Descript',
      description: 'AI video/audio editor for repurposing SEO content into multimedia',
      logo: 'https://www.descript.com/favicon.ico',
      fallback: 'D',
      color: '#22c55e'
    },
    {
      name: 'Browse AI',
      description: 'No-code AI scraper for SERPs, competitor content, and site monitoring',
      logo: 'https://www.browse.ai/favicon.ico',
      fallback: 'BAI',
      color: '#3b82f6'
    }
  ];

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current[index]) {
      sectionRefs.current[index] = el;
    }
  };

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
          { threshold: 0.1 }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section 
      className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-0 overflow-hidden bg-black"
    >
      {/* Particle Effects */}
      <ParticleStars density={30} />
      
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side mountain range */}
        <svg className="absolute left-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M0,0 L32,0 L52,150 L27,250 L57,350 L37,450 L67,550 L47,650 L72,750 L52,850 L77,950 L57,1050 L62,1150 L47,1200 L0,1200 Z" 
                fill="url(#mountainGradientLeft4)" />
          {/* Triangular snow peaks */}
          <polygon points="50,148 54,152 46,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="55,348 59,352 51,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="65,548 69,552 61,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="70,748 74,752 66,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="75,948 79,952 71,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="60,1148 64,1152 56,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientLeft4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Right side mountain range */}
        <svg className="absolute right-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M80,0 L48,0 L28,150 L53,250 L23,350 L43,450 L13,550 L33,650 L8,750 L28,850 L3,950 L23,1050 L18,1150 L33,1200 L80,1200 Z" 
                fill="url(#mountainGradientRight4)" />
          {/* Triangular snow peaks */}
          <polygon points="26,148 30,152 22,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="21,348 25,352 17,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="11,548 15,552 7,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="6,748 10,752 2,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="1,948 5,952 -3,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="16,1148 20,1152 12,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientRight4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            POWERED BY THE BEST
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Our SEO Tech Stack Makes Us <span className="text-cyan-400">The Fastest</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We leverage cutting-edge AI tools and automation platforms to deliver results faster and more efficiently than traditional agencies
          </p>
        </div>

        {/* Tech Tools Grid */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${
            visibleSections.has(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {techTools.map((tool, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
            >
              {/* Tool Logo */}
              <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                {tool.logo ? (
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className={`${tool.logo ? 'hidden' : 'flex'} w-12 h-12 rounded-lg items-center justify-center text-white font-bold text-sm`}
                  style={{ backgroundColor: tool.color }}
                >
                  {tool.fallback}
                </div>
              </div>

              {/* Tool Info */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
                  {tool.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;

