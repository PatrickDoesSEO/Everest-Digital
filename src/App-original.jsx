import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white overflow-x-hidden">
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <WhySection />
        <ComparisonSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}

export default App;

