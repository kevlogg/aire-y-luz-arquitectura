import React from 'react';
import { Compass, ShieldAlert, CheckCircle2, ArrowRight, Sun, Flame, Ruler, Building, HardHat } from 'lucide-react';

export default function ServicePillars({ onOpenQuoteModal }) {
  return (
    <section id="servicios" className="pillars-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Compass size={14} />
            <span>Nuestros Servicios Específicos</span>
          </div>
          <h2 className="section-title">Soluciones integrales de arquitectura</h2>
          <p className="section-subtitle">
            Combinamos sensibilidad proyectual y diseño contemporáneo con el rigor técnico y la matriculación requerida para operar en la Ciudad Autónoma de Buenos Aires.
          </p>
        </div>

        {/* Dual Pillar Cards */}
        <div className="pillars-grid">
          {/* Pilar A Card */}
          <div className="pillar-card">
            <div>
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <Sun size={28} />
                </div>
                <span className="pillar-number">01</span>
              </div>

              <h3 className="pillar-title">Diseño & Remodelación Integral</h3>
              <p className="pillar-desc">
                Especialistas en la transformación de viviendas, PHs tradicionales de CABA, 
                espacios de interiorismo y locales comerciales boutique. Diseñamos optimizando la entrada de luz natural y la circulación.
              </p>

              <ul className="pillar-features-list">
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Refacción integral de PHs: valorización de patios y tragaluces.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Proyectos de interiorismo y redistribución de plantas habitables.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Diseño y habilitación de locales comerciales y espacios gastronómicos.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Dirección ejecutiva de obra con cómputo cerrado (sin sorpresas de costos).</span>
                </li>
              </ul>
            </div>

            <button 
              className="btn-secondary"
              style={{ width: '100%' }}
              onClick={onOpenQuoteModal}
            >
              <span>Consultar Proyecto de Remodelación</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Pilar B Card */}
          <div className="pillar-card accent-card" id="consorcios">
            <div>
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <HardHat size={28} />
                </div>
                <span className="pillar-number">02</span>
              </div>

              <h3 className="pillar-title">Gestión Técnica & Consorcios</h3>
              <p className="pillar-desc">
                Servicios profesionales matriculados para administraciones de consorcios y particulares en CABA. 
                Resolvemos urgencias operativas y tramitaciones normativas con celeridad.
              </p>

              <ul className="pillar-features-list">
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Ley 257 (CABA): Informe técnico periódico sobre estado de fachadas y balcones.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Proyectos y adecuación de instalaciones de gas (Metrogas / reconexiones).</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Inspecciones de patologías constructivas y pruebas de hermeticidad.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} />
                  <span>Certificaciones e informes periciales con firma de arquitecto matriculado.</span>
                </li>
              </ul>
            </div>

            <button 
              className="btn-accent"
              style={{ width: '100%' }}
              onClick={onOpenQuoteModal}
            >
              <span>Solicitar Inspección o Trámite Técnico</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
