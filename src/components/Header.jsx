import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-angle-offset {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        @property --gradient-percent {
          syntax: "<percentage>";
          initial-value: 5%;
          inherits: false;
        }

        @property --gradient-shine {
          syntax: "<color>";
          initial-value: white;
          inherits: false;
        }

        .shiny-cta {
          --animation: gradient-angle linear infinite;
          --duration: 3s;
          --shadow-size: 2px;
          --shiny-cta-bg: #000000;
          --shiny-cta-bg-subtle: #1a1818;
          --shiny-cta-fg: #ffffff;
          --shiny-cta-highlight: #06b6d4;
          --shiny-cta-highlight-subtle: #0891b2;
          isolation: isolate;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          outline-offset: 4px;
          padding: 0.75rem 1.5rem;
          font-family: inherit;
          font-size: 0.875rem;
          line-height: 1.2;
          border: 1px solid transparent;
          border-radius: 360px;
          color: var(--shiny-cta-fg);
          background: linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg))
              padding-box,
            conic-gradient(
                from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                transparent,
                var(--shiny-cta-highlight) var(--gradient-percent),
                var(--gradient-shine) calc(var(--gradient-percent) * 2),
                var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
                transparent calc(var(--gradient-percent) * 4)
              )
              border-box;
          box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
          transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);
          transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
        }

        .shiny-cta::before,
        .shiny-cta::after,
        .shiny-cta span::before {
          content: "";
          pointer-events: none;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .shiny-cta:active {
          transform: translateY(1px);
        }

        .shiny-cta::before {
          --size: calc(100% - var(--shadow-size) * 3);
          --position: 2px;
          --space: calc(var(--position) * 2);
          width: var(--size);
          height: var(--size);
          background: radial-gradient(
              circle at var(--position) var(--position),
              white calc(var(--position) / 4),
              transparent 0
            )
            padding-box;
          background-size: var(--space) var(--space);
          background-repeat: space;
          mask-image: conic-gradient(
            from calc(var(--gradient-angle) + 45deg),
            black,
            transparent 10% 90%,
            black
          );
          border-radius: inherit;
          opacity: 0.4;
          z-index: -1;
          animation: var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
        }

        .shiny-cta::after {
          --animation: shimmer linear infinite;
          width: 100%;
          aspect-ratio: 1;
          background: linear-gradient(
            -50deg,
            transparent,
            var(--shiny-cta-highlight),
            transparent
          );
          mask-image: radial-gradient(circle at bottom, transparent 40%, black);
          opacity: 0.6;
          animation: var(--animation) var(--duration),
            var(--animation) calc(var(--duration) / 0.4) reverse paused;
          animation-composition: add;
        }

        .shiny-cta span {
          z-index: 1;
          position: relative;
        }

        .shiny-cta span::before {
          --size: calc(100% + 1rem);
          width: var(--size);
          height: var(--size);
          box-shadow: inset 0 -1ex 2rem 4px transparent;
          opacity: 0;
          transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
          animation: calc(var(--duration) * 1.5) breathe linear infinite;
        }

        .shiny-cta:hover {
          --gradient-percent: 20%;
          --gradient-angle-offset: 95deg;
          --gradient-shine: var(--shiny-cta-highlight-subtle);
        }

        .shiny-cta:hover::before,
        .shiny-cta:hover::after {
          animation-play-state: running;
        }

        .shiny-cta:hover span::before {
          opacity: 1;
        }

        @keyframes gradient-angle {
          to {
            --gradient-angle: 360deg;
          }
        }

        @keyframes shimmer {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes breathe {
          from,
          to {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
      
      <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 sm:py-6">
        <div className="w-full max-w-none">
          <nav className="w-full px-6 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 relative z-50">
              <a href="/" className="cursor-pointer">
                <img 
                  src="./HeaderLogo.png" 
                  alt="Everest Digital" 
                  className="h-8 sm:h-10 w-auto relative z-50 hover:opacity-80 transition-opacity duration-200"
                  style={{ position: 'relative', zIndex: 9999, transform: 'none !important' }}
                />
              </a>
            </div>

            {/* Centered Navigation Menu - Fixed pill border */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className={`flex items-center space-x-8 px-6 py-3 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-black/70 backdrop-blur-md border border-white/10 rounded-full' 
                  : 'bg-transparent'
              }`}>
                <a href="/" className="transition-colors duration-200 text-white hover:text-cyan-400">
                  About Us
                </a>
                <a href="/case-studies" className="transition-colors duration-200 text-white hover:text-cyan-400">
                  Case Studies
                </a>
                <a href="/" className="transition-colors duration-200 text-white hover:text-cyan-400">
                  FAQ
                </a>
              </div>
            </div>

            {/* Contact Us Pill Button */}
            <div className="flex items-center justify-end">
              <button className="shiny-cta font-medium text-sm sm:text-base">
                <span>Contact Us</span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

