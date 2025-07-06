import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ParticleStars from './ParticleStars';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Jamie De La Haye",
      position: "Director",
      company: "Websites By Jamie",
      quote: "Working with Everest Digital has been a game-changer for our agency. Their white-label SEO services have allowed us to scale our offerings without compromising on quality."
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "CEO",
      company: "Digital Growth Partners",
      quote: "The level of transparency and communication from Everest Digital is unmatched. They truly understand what agencies need and deliver consistently exceptional results."
    },
    {
      id: 3,
      name: "Marcus Thompson",
      position: "Founder",
      company: "Thompson Marketing Co.",
      quote: "Everest Digital's expertise in SEO has transformed our client retention rates. Their detailed reporting and consistent results speak for themselves."
    },
    {
      id: 4,
      name: "Lisa Chen",
      position: "Managing Director",
      company: "Peak Performance Agency",
      quote: "The seamless integration of Everest Digital's services into our workflow has been remarkable. Our clients see real, measurable improvements month after month."
    },
    {
      id: 5,
      name: "David Rodriguez",
      position: "VP of Operations",
      company: "Summit Digital Solutions",
      quote: "What sets Everest Digital apart is their commitment to understanding our agency's standards and delivering results that align perfectly with our brand."
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.max(0, currentIndex - 1));
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(Math.min(testimonials.length - 1, currentIndex + 1));
    }
  };

  return (
    <section 
      className="relative z-10 py-16 px-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.2) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.9) 100%)'
      }}
    >
      {/* Particle Effects */}
      <ParticleStars density={45} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-2xl">
            Building Trust, One Partnership at a Time
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from agency owners who've transformed their SEO offerings with our white-label services
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            disabled={currentIndex === testimonials.length - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Container - Full Width */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-96 group"
              >
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full hover:scale-105">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-teal-800/80 to-teal-900/90">
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
                      <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors duration-200 cursor-pointer">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Case Study Button */}
                    <button className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white text-xs px-3 py-1 rounded-full transition-all duration-200 hover:scale-105">
                      Read Case Study
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <blockquote className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="border-t border-gray-600/50 pt-4">
                      <h4 className="text-white font-semibold text-base">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm font-medium">{testimonial.position}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

