import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicePillars from './components/ServicePillars';
import ProjectsGallery from './components/ProjectsGallery';
import QuoteEstimatorModal from './components/QuoteEstimatorModal';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="app-main-wrapper">
      {/* Sticky Top Navbar */}
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Section Light Divider 1 */}
      <SectionDivider />

      {/* Service Pillars (Diseño Integral & Gestión Técnica) */}
      <ServicePillars onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Section Light Divider 2 */}
      <SectionDivider />

      {/* Portfolio Gallery */}
      <ProjectsGallery onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Section Light Divider 3 */}
      <SectionDivider />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Section Light Divider 4 */}
      <SectionDivider />

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
