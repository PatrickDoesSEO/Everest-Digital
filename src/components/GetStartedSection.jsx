import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const GetStartedSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  // Generate floating particles on hover
  useEffect(() => {
    if (isHovered) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isHovered]);

  return (
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-black transition-all duration-500 ease-in-out py-20"
      style={{ marginTop: '-2rem' }}
    >
      {/* Subtle Turquoise Glow Overlay on Hover */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(ellipse 800px 400px at center center, 
              rgba(6, 182, 212, 0.12) 0%, 
              rgba(6, 182, 212, 0.08) 25%, 
              rgba(6, 182, 212, 0.04) 50%, 
              rgba(6, 182, 212, 0.02) 70%, 
              transparent 85%
            ),
            linear-gradient(to top, 
              rgba(6, 182, 212, 0.03) 0%, 
              rgba(6, 182, 212, 0.01) 30%, 
              transparent 60%
            ),
            linear-gradient(to bottom, 
              transparent 0%, 
              rgba(6, 182, 212, 0.01) 40%, 
              rgba(6, 182, 212, 0.03) 100%
            )
          `
        }}
      />

      {/* Mountain Range Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Back Mountain Range */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full opacity-20" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,800 L0,400 L150,350 L300,380 L450,320 L600,360 L750,300 L900,340 L1050,280 L1200,320 L1200,800 Z" 
            fill="url(#backMountainGrad)" 
          />
          <defs>
            <linearGradient id="backMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Front Mountain Range */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full opacity-30" 
          viewBox="0 0 1200 800" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,800 L0,500 L200,450 L400,480 L600,420 L800,460 L1000,400 L1200,440 L1200,800 Z" 
            fill="url(#frontMountainGrad)" 
          />
          {/* Snow caps */}
          <polygon points="195,448 205,452 185,452" fill="#06b6d4" opacity="0.8"/>
          <polygon points="395,478 405,482 385,482" fill="#0891b2" opacity="0.7"/>
          <polygon points="595,418 605,422 585,422" fill="#06b6d4" opacity="0.8"/>
          <polygon points="795,458 805,462 785,462" fill="#0891b2" opacity="0.7"/>
          <polygon points="995,398 1005,402 985,402" fill="#06b6d4" opacity="0.8"/>
          <defs>
            <linearGradient id="frontMountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Particles on Hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-cyan-400"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animation: `fadeIn 0.5s ease-out, float ${particle.duration}s ease-in-out infinite ${particle.delay + 0.5}s`,
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.6)'
              }}
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Headline - Changed to h2 but keeping same font size */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight">
          Ready to Scale Your <br />
          <span className="text-cyan-400">SEO Success?</span>
        </h2>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join agencies and businesses worldwide who trust our proven SEO strategies to drive real results
        </p>

        {/* Get Started Button */}
        <button
          className={`group relative px-12 py-6 text-xl font-semibold rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 ${
            isHovered
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/50'
              : 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-xl shadow-cyan-600/30'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            boxShadow: isHovered 
              ? '0 0 40px rgba(6, 182, 212, 0.6), 0 0 80px rgba(6, 182, 212, 0.3)' 
              : '0 0 20px rgba(6, 182, 212, 0.4)'
          }}
        >
          <span className="flex items-center justify-center space-x-3">
            <span>Get Started</span>
            <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`} />
          </span>
          
          {/* Button Glow Effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-20' : ''
          }`} />
        </button>

        {/* Additional Info */}
        <div className="mt-12 flex flex-wrap justify-center items-center space-x-8 text-gray-400 text-sm">
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No credit card required</span>
          </span>
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>Free consultation</span>
          </span>
          <span className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Results guaranteed</span>
          </span>
        </div>
      </div>

      {/* CSS Animation for Floating Particles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px) translateX(-5px);
            opacity: 1;
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
            opacity: 0.8;
          }
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default GetStartedSection;

