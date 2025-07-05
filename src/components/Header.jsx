import React from 'react';

const Header = () => {
  return (
    <header className="relative z-20 px-4 sm:px-6 py-4 sm:py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img 
            src="/HeaderLogo.png" 
            alt="Everest Digital" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#pricing" className="transition-colors duration-200 text-white-glow hover:opacity-80">
            Pricing
          </a>
          <a href="#how-we-work" className="transition-colors duration-200 text-white-glow hover:opacity-80">
            How We Work
          </a>
          <a href="#faq" className="transition-colors duration-200 text-white-glow hover:opacity-80">
            FAQ
          </a>
        </div>

        {/* Contact Us Button */}
        <button className="contact-button font-medium text-sm sm:text-base text-white-glow relative">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;

