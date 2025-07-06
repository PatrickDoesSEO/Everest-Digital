import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import ComparisonSection from './components/ComparisonSection';
import TestimonialsSection from './components/TestimonialsSection';
import SEOProcessSection from './components/SEOProcessSection';
import TechStackSection from './components/TechStackSection';
import ReviewsSection from './components/ReviewsSection';
import GetStartedSection from './components/GetStartedSection';
import Footer from './components/Footer';
import CaseStudiesPage from './components/CaseStudiesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation based on URL pathname
  useEffect(() => {
    const handleLocationChange = () => {
      const pathname = window.location.pathname;
      if (pathname.includes('case-studies')) {
        setCurrentPage('case-studies');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial pathname
    handleLocationChange();

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Update header navigation to handle page changes
  useEffect(() => {
    const handleNavigation = (e) => {
      const target = e.target.closest('a[href*="case-studies"]');
      if (target) {
        e.preventDefault();
        setCurrentPage('case-studies');
        window.history.pushState({}, '', '/Everest-Digital/case-studies');
      }
      
      const homeTarget = e.target.closest('a[href="/"], a[href="#home"], a[href="./"]');
      if (homeTarget) {
        e.preventDefault();
        setCurrentPage('home');
        window.history.pushState({}, '', '/Everest-Digital/');
      }
    };

    document.addEventListener('click', handleNavigation);

    return () => {
      document.removeEventListener('click', handleNavigation);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'case-studies':
        return <CaseStudiesPage />;
      default:
        return (
          <div className="App">
            <Header />
            <Hero />
            <WhySection />
            <ComparisonSection />
            <TestimonialsSection />
            <SEOProcessSection />
            <TechStackSection />
            <ReviewsSection />
            <GetStartedSection />
            <Footer />
          </div>
        );
    }
  };

  return renderPage();
}

export default App;

