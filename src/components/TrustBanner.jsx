import React from 'react';
import { ShieldCheck, Award, Building } from 'lucide-react';

export default function TrustBanner() {
  return (
    <div className="trust-banner-wrapper">
      <div className="container">
        <div className="trust-banner-content">
          <div className="trust-banner-icon">
            <ShieldCheck size={26} style={{ color: 'var(--brand-orange)' }} />
          </div>
          <div className="trust-banner-text">
            <span className="trust-banner-highlight">Arquitectos Matriculados CPAU / GCBA</span>
            <span className="trust-banner-divider">·</span>
            <span>Asesoramiento normativo y técnico para particulares y administraciones de consorcio en CABA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
