import React, { useState } from 'react';
import { Settings, Folder, Search, Calendar, Link, Zap, FileText, Check } from 'lucide-react';
import ParticleStars from './ParticleStars';

const SEOProcessSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Access',
      description: 'Gaining access to CMS, GA4, and GSC',
      icon: Settings
    },
    {
      id: 2,
      number: '02',
      title: 'Project Files',
      description: 'Setting up shared drive for documents and reports',
      icon: Folder
    },
    {
      id: 3,
      number: '03',
      title: 'Initial Audit',
      description: 'Sending audit findings with tech/on-page SEO fixes',
      icon: Search
    },
    {
      id: 4,
      number: '04',
      title: 'Content Calendar',
      description: 'Creating 2–3 month plan of informational articles',
      icon: Calendar
    },
    {
      id: 5,
      number: '05',
      title: 'Link Building Update',
      description: 'Sending outreach progress and backlink targets',
      icon: Link
    },
    {
      id: 6,
      number: '06',
      title: 'Programmatic SEO Plan',
      description: 'Sending strategy update for scalable content',
      icon: Zap
    },
    {
      id: 7,
      number: '07',
      title: 'End of Month Report',
      description: 'Sharing report with future roadmap',
      icon: FileText
    }
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-black overflow-hidden">
      <ParticleStars density={30} />
      
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side mountain range */}
        <svg className="absolute left-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
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
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Right side mountain range */}
        <svg className="absolute right-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
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
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white-glow">
            Enough Fluff - Let's Talk <span className="text-cyan-400">SEO Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our proven 7-step methodology that delivers consistent results for agencies and their clients
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block mb-16">
          {/* Progress Line */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 transform -translate-y-1/2"></div>
            <div className="flex justify-between items-center relative">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center">
                  <button
                    onClick={() => handleStepClick(step.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 mb-4 ${
                      activeStep >= step.id
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {activeStep > step.id ? <Check className="w-5 h-5" /> : step.number}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Step Cards */}
          <div className="grid grid-cols-7 gap-4">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`cursor-pointer p-4 rounded-xl transition-all duration-300 border ${
                    activeStep === step.id
                      ? 'bg-gray-800/80 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                      : 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-800/70'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                      activeStep === step.id ? 'bg-cyan-500/20' : 'bg-gray-700/50'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        activeStep === step.id ? 'text-cyan-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden mb-16">
          <div className="space-y-4">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className={`cursor-pointer p-6 rounded-xl transition-all duration-300 border ${
                    activeStep === step.id
                      ? 'bg-gray-800/80 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                      : 'bg-gray-800/50 border-gray-700/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      activeStep >= step.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {activeStep > step.id ? <Check className="w-5 h-5" /> : step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <IconComponent className={`w-5 h-5 mr-2 ${
                          activeStep === step.id ? 'text-cyan-400' : 'text-gray-400'
                        }`} />
                        <h3 className="font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Video Section - positioned above CTA */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-700/60 backdrop-blur-sm border border-gray-600/30 rounded-xl overflow-hidden" style={{ minHeight: '450px' }}>
            {/* Video Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>
            
            {/* Animated Play Button - Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative">
                <div className="w-24 h-24 bg-cyan-500/20 backdrop-blur-sm rounded-full border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-10 h-10 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                {/* Animated pulsing rings */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-pulse"></div>
              </button>
            </div>

            {/* Video Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <h4 className="text-white font-medium text-lg">
                  Our Everest Approach
                </h4>
                <p className="text-gray-300 text-sm">
                  Take Your Clients To The Peak With Our Process
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to see this process in action for your agency?
          </p>
          <button className="waitlist-button">
            Add To Waitlist →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SEOProcessSection;

