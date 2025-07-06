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
      company: "Coastal Evergreen Synthetic Grass",
      name: "Karl Davidson",
      review: "Patrick is a true professional. His expertise in SEO is evident in the results he delivers. Communication was excellent throughout the project, and he provided valuable insights that went beyond our initial requirements."
    },
    {
      company: "Miami Bee Removal",
      name: "Sony M",
      review: "Outstanding service! Patrick's SEO strategies significantly improved our online visibility. His attention to detail and commitment to quality results make him a standout professional in the field."
    },
    {
      company: "Level Up Game Plan",
      name: "Ed Han",
      review: "Working with Patrick was a game-changer for our business. His deep understanding of SEO and ability to explain complex concepts in simple terms made the entire process smooth and effective."
    },
    {
      company: "AK Marketing",
      name: "Kieran Duffey",
      review: "Patrick exceeded our expectations in every way. His strategic approach to SEO and consistent communication throughout the project made him a pleasure to work with. Highly recommended!"
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
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < reviews.length - 3) {
      setCurrentIndex(currentIndex + 1);
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
      className="relative z-10 py-12 sm:py-16 lg:py-20 px-0 overflow-hidden bg-black"
    >
      {/* Particle Effects */}
      <ParticleStars density={35} />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        {/* Header */}
        <div 
          ref={(el) => addToRefs(el, 0)}
          className={`text-center mb-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
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
          className={`transition-all duration-1000 delay-500 px-4 sm:px-6 lg:px-8 ${
            visibleSections.has(1) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
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
              disabled={currentIndex >= reviews.length - 3}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-none w-80 sm:w-96 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300"
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

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.max(1, reviews.length - 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-cyan-400' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={(el) => addToRefs(el, 2)}
          className={`text-center mt-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 delay-1000 ${
            visibleSections.has(2) 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          <button className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 border border-gray-700 hover:border-cyan-400">
            Add To Waitlist →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

