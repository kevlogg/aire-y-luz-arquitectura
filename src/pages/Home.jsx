import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ServicePillars from '../components/ServicePillars';
import HowWeWork from '../components/HowWeWork';
import ProjectsGallery from '../components/ProjectsGallery';
import FaqSection from '../components/FaqSection';
import TrustBanner from '../components/TrustBanner';
import ContactSection from '../components/ContactSection';
import SectionDivider from '../components/SectionDivider';

export default function Home({ onOpenQuoteModal }) {
  useEffect(() => {
    document.title = "Aire y Luz Arquitectura | Estudio de Arquitectura en Villa Crespo CABA";
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section Light Divider 1 */}
      <SectionDivider />

      {/* Service Pillars (3 Pillars: Remodelaciones, Consorcios, Locales) */}
      <ServicePillars />

      {/* Section Light Divider 2 */}
      <SectionDivider />

      {/* How We Work Section (3 Steps) */}
      <HowWeWork />

      {/* Section Light Divider 3 */}
      <SectionDivider />

      {/* Portfolio Gallery */}
      <ProjectsGallery onOpenQuoteModal={onOpenQuoteModal} />

      {/* Section Light Divider 4 */}
      <SectionDivider />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Section Light Divider 5 */}
      <SectionDivider />

      {/* Professional Credential Trust Banner */}
      <TrustBanner />

      {/* Contact & Conversion Form */}
      <ContactSection />
    </main>
  );
}
