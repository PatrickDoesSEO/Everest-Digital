import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ParticleStars from './components/ParticleStars';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Particle Stars Background */}
      <ParticleStars />
      
      {/* Moon Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-gray-400/15 via-cyan-400/8 to-transparent blur-sm opacity-50"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;

