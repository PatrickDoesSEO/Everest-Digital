import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Jamie De La Haye",
      position: "Director",
      company: "Websites By Jamie",
      quote: "Working with Everest Digital has been a game-changer for our agency. Their white-label SEO services have allowed us to scale our offerings without compromising on quality.",
      thumbnail: "https://via.placeholder.com/400x300/1f2937/ffffff?text=Video+Testimonial"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      position: "CEO",
      company: "Digital Growth Partners",
      quote: "The level of transparency and communication from Everest Digital is unmatched. They truly understand what agencies need and deliver consistently exceptional results.",
      thumbnail: "https://via.placeholder.com/400x300/374151/ffffff?text=Client+Video"
    },
    {
      id: 3,
      name: "Marcus Thompson",
      position: "Founder",
      company: "Thompson Marketing Co.",
      quote: "Everest Digital's expertise in SEO has transformed our client retention rates. Their detailed reporting and consistent results speak for themselves.",
      thumbnail: "https://via.placeholder.com/400x300/4b5563/ffffff?text=Success+Story"
    },
    {
      id: 4,
      name: "Lisa Chen",
      position: "Managing Director",
      company: "Peak Performance Agency",
      quote: "The seamless integration of Everest Digital's services into our workflow has been remarkable. Our clients see real, measurable improvements month after month.",
      thumbnail: "https://via.placeholder.com/400x300/6b7280/ffffff?text=Case+Study"
    },
    {
      id: 5,
      name: "David Rodriguez",
      position: "VP of Operations",
      company: "Summit Digital Solutions",
      quote: "What sets Everest Digital apart is their commitment to understanding our brand and delivering results that align perfectly with our agency's standards.",
      thumbnail: "https://via.placeholder.com/400x300/9ca3af/ffffff?text=Testimonial"
    },
    {
      id: 6,
      name: "Emma Wilson",
      position: "Creative Director",
      company: "Altitude Creative",
      quote: "The partnership with Everest Digital has allowed us to focus on what we do best while knowing our SEO deliverables are in expert hands.",
      thumbnail: "https://via.placeholder.com/400x300/d1d5db/374151?text=Client+Review"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 400; // Width of each card
      const newIndex = Math.max(0, currentIndex - 1);
      setCurrentIndex(newIndex);
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 400; // Width of each card
      const maxIndex = testimonials.length - 3; // Show 3 cards at once
      const newIndex = Math.min(maxIndex, currentIndex + 1);
      setCurrentIndex(newIndex);
      scrollContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      className="relative z-10 py-16 px-0 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.2) 0%, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 0.9) 100%)'
      }}
    >
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Mountain Range */}
        <svg className="absolute left-0 top-0 h-full w-8 opacity-10" viewBox="0 0 32 1200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="leftMountainGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="50%" stopColor="rgba(8, 145, 178, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M0,150 L8,200 L16,180 L24,220 L32,190 L32,250 L24,280 L16,260 L8,300 L0,270 L0,350 L8,380 L16,360 L24,400 L32,370 L32,450 L24,480 L16,460 L8,500 L0,470 L0,550 L8,580 L16,560 L24,600 L32,570 L32,650 L24,680 L16,660 L8,700 L0,670 L0,750 L8,780 L16,760 L24,800 L32,770 L32,850 L24,880 L16,860 L8,900 L0,870 L0,950 L8,980 L16,960 L24,1000 L32,970 L32,1050 L24,1080 L16,1060 L8,1100 L0,1070 L0,1150 L8,1180 L16,1160 L24,1200 L0,1200 Z" fill="url(#leftMountainGrad3)" />
          {/* Triangular Snow Peaks */}
          <polygon points="8,200 6,198 10,198" fill="#06b6d4" opacity="0.8" />
          <polygon points="16,180 14,178 18,178" fill="#0891b2" opacity="0.9" />
          <polygon points="24,220 22,218 26,218" fill="#06b6d4" opacity="0.7" />
          <polygon points="8,300 6,298 10,298" fill="#0891b2" opacity="0.8" />
          <polygon points="16,360 14,358 18,358" fill="#06b6d4" opacity="0.9" />
          <polygon points="24,400 22,398 26,398" fill="#0891b2" opacity="0.7" />
          <polygon points="8,500 6,498 10,498" fill="#06b6d4" opacity="0.8" />
          <polygon points="16,560 14,558 18,558" fill="#0891b2" opacity="0.9" />
          <polygon points="24,600 22,598 26,598" fill="#06b6d4" opacity="0.7" />
          <polygon points="8,700 6,698 10,698" fill="#0891b2" opacity="0.8" />
          <polygon points="16,760 14,758 18,758" fill="#06b6d4" opacity="0.9" />
          <polygon points="24,800 22,798 26,798" fill="#0891b2" opacity="0.7" />
          <polygon points="8,900 6,898 10,898" fill="#06b6d4" opacity="0.8" />
          <polygon points="16,960 14,958 18,958" fill="#0891b2" opacity="0.9" />
          <polygon points="24,1000 22,998 26,998" fill="#06b6d4" opacity="0.7" />
          <polygon points="8,1100 6,1098 10,1098" fill="#0891b2" opacity="0.8" />
          <polygon points="16,1160 14,1158 18,1158" fill="#06b6d4" opacity="0.9" />
        </svg>

        {/* Right Mountain Range */}
        <svg className="absolute right-0 top-0 h-full w-8 opacity-10" viewBox="0 0 32 1200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="rightMountainGrad3" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="50%" stopColor="rgba(8, 145, 178, 0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path d="M32,150 L24,200 L16,180 L8,220 L0,190 L0,250 L8,280 L16,260 L24,300 L32,270 L32,350 L24,380 L16,360 L8,400 L0,370 L0,450 L8,480 L16,460 L24,500 L32,470 L32,550 L24,580 L16,560 L8,600 L0,570 L0,650 L8,680 L16,660 L24,700 L32,670 L32,750 L24,780 L16,760 L8,800 L0,770 L0,850 L8,880 L16,860 L24,900 L32,870 L32,950 L24,980 L16,960 L8,1000 L0,970 L0,1050 L8,1080 L16,1060 L24,1100 L32,1070 L32,1150 L24,1180 L16,1160 L8,1200 L32,1200 Z" fill="url(#rightMountainGrad3)" />
          {/* Triangular Snow Peaks */}
          <polygon points="24,200 22,198 26,198" fill="#06b6d4" opacity="0.8" />
          <polygon points="16,180 14,178 18,178" fill="#0891b2" opacity="0.9" />
          <polygon points="8,220 6,218 10,218" fill="#06b6d4" opacity="0.7" />
          <polygon points="24,300 22,298 26,298" fill="#0891b2" opacity="0.8" />
          <polygon points="16,360 14,358 18,358" fill="#06b6d4" opacity="0.9" />
          <polygon points="8,400 6,398 10,398" fill="#0891b2" opacity="0.7" />
          <polygon points="24,500 22,498 26,498" fill="#06b6d4" opacity="0.8" />
          <polygon points="16,560 14,558 18,558" fill="#0891b2" opacity="0.9" />
          <polygon points="8,600 6,598 10,598" fill="#06b6d4" opacity="0.7" />
          <polygon points="24,700 22,698 26,698" fill="#0891b2" opacity="0.8" />
          <polygon points="16,760 14,758 18,758" fill="#06b6d4" opacity="0.9" />
          <polygon points="8,800 6,798 10,798" fill="#0891b2" opacity="0.7" />
          <polygon points="24,900 22,898 26,898" fill="#06b6d4" opacity="0.8" />
          <polygon points="16,960 14,958 18,958" fill="#0891b2" opacity="0.9" />
          <polygon points="8,1000 6,998 10,998" fill="#06b6d4" opacity="0.7" />
          <polygon points="24,1100 22,1098 26,1098" fill="#0891b2" opacity="0.8" />
          <polygon points="16,1160 14,1158 18,1158" fill="#06b6d4" opacity="0.9" />
        </svg>
      </div>
      
      <div className="w-full px-0">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-2xl">
            Building Trust, <span className="text-cyan-400">One Partnership at a Time</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Real Stories. Real Results. See how our clients have transformed their agencies with our white-label SEO services.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-200"
          >
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={scrollRight}
            disabled={currentIndex >= testimonials.length - 3}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-200"
          >
            <ChevronRightIcon className="w-6 h-6 text-white" />
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
                className="flex-shrink-0 w-96 group transition-all duration-300 hover:scale-105"
                style={{ 
                  transformOrigin: 'center'
                }}
              >
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm border border-gray-600/50 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 h-full">
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

