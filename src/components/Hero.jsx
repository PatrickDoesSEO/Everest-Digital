import React, { useState } from 'react';
import { Play } from 'lucide-react';
import ParticleStars from './ParticleStars';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black">
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

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 max-w-4xl leading-tight relative z-10">
        <span className="text-white-glow-lg">
          SEO Team Built
        </span>
        <br />
        <span className="text-white-glow-lg opacity-80">
          For Agencies
        </span>
      </h1>

      {/* Email Input and Button */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-6 sm:mb-8 relative z-10">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50 animated-border">
          <div className="flex-1 relative">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
  );
};

export default Hero;

