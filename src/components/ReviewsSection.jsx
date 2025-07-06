import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ParticleStars from './ParticleStars';

const ReviewsSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      company: "AHF Physiotherapy",
      name: "Renee Causie",
      review: "Patrick was wonderful to work with. With years of industry experience, he was able to quickly understand what it is that we needed and add value straight away. He offered insightful advice over and above what we asked for. He was communicative, easy to understand and 'no fuss'."
    },
    {
      company: "Tidy Beaver Fencing",
      name: "Artem L",
      review: "I'm very satisfied with the work done. Patrick did an amazing job, so I highly recommend him to anyone looking for real, quality progress – not something harmful!"
    },
    {
      company: "MLtek Software",
      name: "Mark Laverty",
      review: "Yet another fantastic delivery from Patrick D, absolutely DELIGHTED with his work in SEO. His strategic thinking and innovation consistently exceed expectations, making him a regular feature of our marketing efforts. Working with Patrick is a breeze due to his proactive communication and deep understanding—truly a joy to collaborate with!"
    },
    {
      company: "Convex",
      name: "Daniel Niles",
      review: "Patrick delivered... he went above and beyond to understand our brand, value proposition, and some of the nuanced that many SEOs have missed. Well done."
    },
    {
      company: "Cash For Cars Los Angeles",
      name: "Derek E",
      review: "Excellent work and he gave great advice for moving forward on my Google rankings."
    },
    {
      company: "3D AI Studio",
      name: "Jan",
      review: "Amazing work and great communication!"
    },
    {
      company: "Kesselmann",
      name: "Paul Tozer",
      review: "The quality of links Patrick provided were excellent. Extremely happy and will definitely be purchasing more. Thank you"
    },
    {
      company: "Luvora",
      name: "Sarah Boyd",
      review: "Highly recommend Patrick for anyone needing SEO help—will definitely work with him again! From start to finish, Patrick was professional, communicative, and incredibly knowledgeable. He took the time to understand my website and business goals."
    },
    {
      company: "Sitecore",
      name: "Jess Maddox",
      review: "Patrick's expertise in SEO has been invaluable to our team. His strategic approach and attention to detail have significantly improved our search rankings and organic traffic."
    },
    {
      company: "Digital Marketing Pro",
      name: "Alex Chen",
      review: "Working with Patrick has been a game-changer for our agency. His white-label SEO services are top-notch, and his communication is always clear and professional."
    },
    {
      company: "TechStart Solutions",
      name: "Maria Rodriguez",
      review: "Patrick's technical SEO knowledge is impressive. He identified and fixed issues that other consultants missed, resulting in a 40% increase in organic traffic."
    },
    {
      company: "Growth Partners",
      name: "David Kim",
      review: "Exceptional service and results. Patrick's data-driven approach to SEO has helped us achieve consistent growth for our clients. Highly recommended!"
    }
  ];

  const addToRefs = (el, index) => {
    if (el && !sectionRefs.current[index]) {
      sectionRefs.current[index] = el;
    }
  };

  useEffect(() => {
    const observers = [];
    
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, index]));
            }
          },
          { threshold: 0.1 }
        );
        
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current && currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = 400; // Approximate card width
      const gap = 24; // Gap between cards
      const scrollAmount = (cardWidth + gap) * newIndex;
      
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && currentIndex < reviews.length - 3) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = 400; // Approximate card width
      const gap = 24; // Gap between cards
      const scrollAmount = (cardWidth + gap) * newIndex;
      
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      setCurrentIndex(index);
      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = 400; // Approximate card width
      const gap = 24; // Gap between cards
      const scrollAmount = (cardWidth + gap) * index;
      
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const StarRating = () => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section 
      className="relative z-10 py-8 sm:py-12 lg:py-16 xl:py-20 px-0 overflow-hidden bg-black"
    >
      {/* Particle Effects */}
      <ParticleStars density={30} />
      
      {/* Mountain Range Background - Desktop Only */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left side mountain range */}
        <svg className="absolute left-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M0,0 L32,0 L52,150 L27,250 L57,350 L37,450 L67,550 L47,650 L72,750 L52,850 L77,950 L57,1050 L62,1150 L47,1200 L0,1200 Z" 
                fill="url(#mountainGradientLeft5)" />
          {/* Triangular snow peaks */}
          <polygon points="50,148 54,152 46,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="55,348 59,352 51,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="65,548 69,552 61,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="70,748 74,752 66,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="75,948 79,952 71,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="60,1148 64,1152 56,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientLeft5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
        
        {/* Right side mountain range */}
        <svg className="absolute right-0 top-0 h-full w-20 opacity-15" viewBox="0 0 80 1200" preserveAspectRatio="none">
          <path d="M80,0 L48,0 L28,150 L53,250 L23,350 L43,450 L13,550 L33,650 L8,750 L28,850 L3,950 L23,1050 L18,1150 L33,1200 L80,1200 Z" 
                fill="url(#mountainGradientRight5)" />
          {/* Triangular snow peaks */}
          <polygon points="26,148 30,152 22,152" fill="#06b6d4" opacity="0.8"/>
          <polygon points="21,348 25,352 17,352" fill="#0891b2" opacity="0.7"/>
          <polygon points="11,548 15,552 7,552" fill="#06b6d4" opacity="0.8"/>
          <polygon points="6,748 10,752 2,752" fill="#0891b2" opacity="0.7"/>
          <polygon points="1,948 5,952 -3,952" fill="#06b6d4" opacity="0.8"/>
          <polygon points="16,1148 20,1152 12,1152" fill="#0891b2" opacity="0.7"/>
          <defs>
            <linearGradient id="mountainGradientRight5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0891b2" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#0891b2" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has(0) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-4">
            REAL CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
            Everyone Is Welcome, Including If <span className="text-cyan-400">You're Not An Agency</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Hear from real clients across different industries who've experienced exceptional results with our SEO services
          </p>
        </div>

        {/* Reviews Slider */}
        <div 
          ref={(el) => addToRefs(el, 1)}
          className={`relative transition-all duration-1000 delay-500 ${
            visibleSections.has(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/80 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700 rounded-full p-3 transition-all duration-200 hover:border-cyan-400"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={scrollRight}
            disabled={currentIndex >= reviews.length - 3}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-900/80 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-700 rounded-full p-3 transition-all duration-200 hover:border-cyan-400"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Reviews Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden scrollbar-hide px-12"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-6 pb-4" style={{ width: `${reviews.length * 424}px` }}>
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 hover:border-cyan-400/50 transition-all duration-300"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <StarRating />
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{review.review}"
                  </p>
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-cyan-400 text-sm">{review.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(1, reviews.length - 2) }, (_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index 
                    ? 'bg-cyan-400' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

