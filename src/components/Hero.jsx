import React from 'react';
import { ArrowDown, ShieldCheck, Flame, Building2, Sparkles, PhoneCall } from 'lucide-react';

export default function Hero({ onOpenQuoteModal }) {
  const scrollToProjects = () => {
    const el = document.getElementById('proyectos');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="container hero-grid">
        {/* Hero Left Content */}
        <div className="hero-content">
          <div className="badge-tag" style={{ borderLeft: '3px solid var(--brand-orange)' }}>
            <ShieldCheck size={15} style={{ color: 'var(--brand-orange)' }} />
            <span>Estudio Matriculado CPAU / CPA — CABA</span>
          </div>

          <h1 className="hero-title">
            Diseño que potencia tu espacio.{' '}
            <span className="gradient-brand-text">
              Soluciones técnicas con respaldo profesional.
            </span>
          </h1>

          <p className="hero-subtitle">
            Estudio de arquitectura en Villa Crespo especializado en reformas integrales, 
            refacción de PHs luminosos y gestiones técnicas edilicias (Ley 257 y Metrogas).
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={scrollToProjects}>
              <span>Explorar Proyectos</span>
              <ArrowDown size={16} />
            </button>

            <button className="btn-accent" onClick={onOpenQuoteModal}>
              <Sparkles size={16} />
              <span>Cotización o Consulta Urgente</span>
            </button>
          </div>

          {/* Trust Metrics Bar */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <span className="trust-number">+12 Años</span>
              <span className="trust-label">Trayectoria profesional en CABA</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">+150 Obras</span>
              <span className="trust-label">Reformas & Refacciones entregadas</span>
            </div>
            <div className="trust-item">
              <span className="trust-number">100% Legal</span>
              <span className="trust-label">Ley 257 & Proyectos Metrogas</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual */}
        <div className="hero-visual">
          <img 
            src="/assets/hero_ph_remodel.png" 
            alt="Refacción integral de PH luminoso en Villa Crespo por Aire y Luz Arquitectura" 
            className="hero-image"
          />

          {/* Floating Badge Overlay */}
          <div className="hero-badge-overlay">
            <div className="hero-badge-icon">
              <Building2 size={22} />
            </div>
            <div>
              <div className="hero-badge-title">PH Gurruchaga — Villa Crespo</div>
              <div className="hero-badge-desc">Recuperación de luz natural & microcemento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
