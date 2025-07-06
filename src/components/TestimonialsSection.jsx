import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import ParticleStars from './ParticleStars';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const scrollContainerRef = useRef(null);
  const videoRefs = useRef({});

  // Video testimonials organized with agency owners/partners first, then clients
  const testimonials = [
    // Agency Owners/Partners
    {
      id: 1,
      name: "Ryan Martin",
      position: "Owner",
      company: "Remarkable Digital",
      type: "agency",
      videoUrl: "/Everest-Digital/videos/testimonials/ryan-martin-remarkable-digital.mp4",
      quote: "Everest Digital has been instrumental in scaling our agency's SEO capabilities."
    },
    {
      id: 2,
      name: "Conal Brady",
      position: "Owner",
      company: "Ecom Luxx",
      type: "agency",
      videoUrl: "/Everest-Digital/videos/testimonials/conal-brady-ecom-luxx.mp4",
      quote: "The white-label SEO services have allowed us to focus on what we do best while delivering exceptional results."
    },
    {
      id: 3,
      name: "Oscar",
      position: "Owner",
      company: "Jo Dope",
      type: "agency",
      videoUrl: "/Everest-Digital/videos/testimonials/oscar-jo-dope.mp4",
      quote: "Working with Everest Digital has transformed how we deliver SEO services to our clients."
    },
    // Clients
    {
      id: 4,
      name: "Ed Han",
      position: "Founder",
      company: "Level Up Game Plan",
      type: "client",
      videoUrl: "/Everest-Digital/videos/testimonials/ed-han-level-up-game-plan.mp4",
      quote: "The SEO results we've achieved with Everest Digital have exceeded all our expectations."
    },
    {
      id: 5,
      name: "Ryan Smith",
      position: "Owner",
      company: "Yurt In The Dirt",
      type: "client",
      videoUrl: "/Everest-Digital/videos/testimonials/ryan-smith-yurt-in-the-dirt.mp4",
      quote: "Our organic traffic has grown significantly since partnering with Everest Digital."
    }
  ];

  const handleVideoPlay = (testimonialId) => {
    // Pause all other videos
    Object.keys(videoRefs.current).forEach(id => {
      if (id !== testimonialId.toString() && videoRefs.current[id]) {
        videoRefs.current[id].pause();
      }
    });
    
    setPlayingVideo(testimonialId);
  };

  const handleVideoPause = (testimonialId) => {
    setPlayingVideo(null);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 384; // w-96 = 384px
      const gap = 32; // gap-8 = 32px
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 384; // w-96 = 384px
      const gap = 32; // gap-8 = 32px
      const scrollAmount = cardWidth + gap;
      
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const updateCurrentIndex = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 384;
      const gap = 32;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateCurrentIndex);
      return () => container.removeEventListener('scroll', updateCurrentIndex);
    }
  }, []);

  return (
    <section className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-0 overflow-hidden bg-black">
      {/* Particle Effects */}
      <ParticleStars density={35} />
      
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side mountain range */}
        <svg className="absolute left-0 top-0 h-full w-20 opacity-12" viewBox="0 0 80 1200" preserveAspectRatio="none">
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
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3"/>
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
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-3">
            Client Success Stories
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 drop-shadow-2xl text-white leading-tight">
            What Our <span className="text-cyan-400">Partners & Clients</span> Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hear directly from agency owners and business leaders who've experienced transformational growth with our SEO services.
          </p>
        </div>

        {/* Video Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 -ml-6"
          >
            <ChevronLeft className="w-6 h-6 text-cyan-400" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gray-800/80 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 -mr-6"
          >
            <ChevronRight className="w-6 h-6 text-cyan-400" />
          </button>

          {/* Testimonials Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-96 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Video Container */}
                <div className="relative aspect-video bg-gray-900">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[testimonial.id] = el;
                    }}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    onPlay={() => handleVideoPlay(testimonial.id)}
                    onPause={() => handleVideoPause(testimonial.id)}
                    poster={`/Everest-Digital/videos/testimonials/poster-${testimonial.id}.jpg`}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play/Pause Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    {playingVideo === testimonial.id ? (
                      <Pause className="w-16 h-16 text-white/80" />
                    ) : (
                      <Play className="w-16 h-16 text-white/80" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        testimonial.type === 'agency' 
                          ? 'bg-purple-500/10 text-purple-400' 
                          : 'bg-cyan-500/10 text-cyan-400'
                      }`}>
                        {testimonial.type === 'agency' ? 'Agency Partner' : 'Client'}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm font-medium">{testimonial.position}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>

                  <blockquote className="text-gray-300 text-sm leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    const cardWidth = 384;
                    const gap = 32;
                    container.scrollTo({
                      left: index * (cardWidth + gap),
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-6">
            Ready to join our success stories?
          </p>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-cyan-500/25">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

