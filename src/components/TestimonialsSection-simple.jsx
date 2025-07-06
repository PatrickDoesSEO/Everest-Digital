import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Building Trust, One Partnership at a Time
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from agency owners who've transformed their SEO offerings with our white-label services
          </p>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/50 rounded-xl p-6 max-w-md mx-auto">
            <div className="aspect-video bg-gradient-to-br from-teal-800/80 to-teal-900/90 rounded-lg mb-4 flex items-center justify-center">
              <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              "Working with Everest Digital has been a game-changer for our agency."
            </p>
            <div className="border-t border-gray-600/50 pt-4">
              <h4 className="text-white font-semibold">Jamie De La Haye</h4>
              <p className="text-cyan-400 text-sm">Director</p>
              <p className="text-gray-400 text-sm">Websites By Jamie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

