import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicePillars from './components/ServicePillars';
import ProjectsGallery from './components/ProjectsGallery';
import QuoteEstimatorModal from './components/QuoteEstimatorModal';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="app-main-wrapper">
      {/* Sticky Top Navbar */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Service Pillars (Diseño Integral & Gestión Técnica) */}
      <ServicePillars onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Portfolio Gallery */}
      <ProjectsGallery onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Contact & Conversion Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Budget Quote Estimator Modal */}
      <QuoteEstimatorModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}
