import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 text-center">
      {/* Logo and Brand */}
      <div className="mb-6 sm:mb-8 floating">
        <div className="mb-4">
          <img 
            src="/StandardLogo.png" 
            alt="Everest Digital" 
            className="h-16 sm:h-20 w-auto mx-auto"
          />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold text-white-glow">Everest Digital</span>
          <span className="bg-gray-700/50 text-xs sm:text-sm px-2 py-1 rounded text-white-glow">Beta</span>
        </div>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 sm:mb-12 max-w-4xl leading-tight">
        <span className="text-white-glow-lg">
          SEO Team Built
        </span>
        <br />
        <span className="text-white-glow-lg opacity-80">
          For Agencies
        </span>
      </h1>

      {/* Email Input and Button */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-6 sm:mb-8">
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
      <button className="flex items-center space-x-3 transition-colors duration-200 group text-white-glow hover:opacity-80">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
          <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" fill="currentColor" />
        </div>
        <span className="text-base sm:text-lg font-medium">Watch the video</span>
      </button>
    </div>
  );
};

export default Hero;

