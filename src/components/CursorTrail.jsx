import React, { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`fixed w-20 h-20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out ${
        isVisible ? 'opacity-30' : 'opacity-0'
      }`}
      style={{
        left: mousePosition.x - 40,
        top: mousePosition.y - 40,
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(20, 184, 166, 0.2) 50%, transparent 70%)',
        transform: 'translate3d(0, 0, 0)', // Hardware acceleration
        backfaceVisibility: 'hidden'
      }}
    />
  );
};

export default CursorTrail;

