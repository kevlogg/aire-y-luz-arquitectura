import React from 'react';
import { Compass, CheckCircle2, ArrowRight, Sun, HardHat } from 'lucide-react';

export default function ServicePillars({ onOpenQuoteModal }) {
  return (
    <section id="servicios" className="pillars-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ borderLeft: '3px solid var(--brand-orange)' }}>
            <Compass size={14} style={{ color: 'var(--brand-orange)' }} />
            <span>Nuestros Servicios Específicos</span>
          </div>
          <h2 className="section-title">Soluciones integrales de arquitectura</h2>
          <p className="section-subtitle">
            Combinamos sensibilidad proyectual y diseño contemporáneo con el rigor técnico y la matriculación requerida para operar en la Ciudad Autónoma de Buenos Aires.
          </p>
        </div>

        {/* Dual Pillar Cards Grid with Light Beam Frames */}
        <div className="pillars-grid">
          {/* Pilar 01 - Brand Orange Light Beam & Hover Glowing Number 01 */}
          <div className="pillar-card-beam-wrapper orange-beam">
            <div className="pillar-card">
              <div>
                <div className="pillar-header">
                  <div className="pillar-icon-box" style={{ background: 'var(--brand-orange-light)', color: 'var(--brand-orange)', borderColor: 'rgba(238, 116, 39, 0.25)' }}>
                    <Sun size={28} />
                  </div>
                  <span className="pillar-number pillar-number-01">01</span>
                </div>

                <h3 className="pillar-title">Diseño & Remodelación Integral</h3>
                <p className="pillar-desc">
                  Especialistas en la transformación de viviendas, PHs tradicionales de CABA, 
                  espacios de interiorismo y locales comerciales boutique. Diseñamos optimizando la entrada de luz natural y la circulación.
                </p>

                <ul className="pillar-features-list">
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                    <span>Refacción integral de PHs: valorización de patios y tragaluces.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                    <span>Proyectos de interiorismo y redistribución de plantas habitables.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                    <span>Diseño y habilitación de locales comerciales y espacios gastronómicos.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                    <span>Dirección ejecutiva de obra con cómputo cerrado (sin sorpresas de costos).</span>
                  </li>
                </ul>
              </div>

              <button 
                className="btn-accent"
                style={{ width: '100%' }}
                onClick={onOpenQuoteModal}
              >
                <span>Consultar Proyecto de Remodelación</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Pilar 02 - Brand Cyan Light Beam & Hover Glowing Number 02 */}
          <div className="pillar-card-beam-wrapper cyan-beam" id="consorcios">
            <div className="pillar-card">
              <div>
                <div className="pillar-header">
                  <div className="pillar-icon-box" style={{ background: 'var(--brand-cyan-light)', color: 'var(--brand-cyan)', borderColor: 'rgba(40, 165, 214, 0.25)' }}>
                    <HardHat size={28} />
                  </div>
                  <span className="pillar-number pillar-number-02">02</span>
                </div>

                <h3 className="pillar-title">Gestión Técnica & Consorcios</h3>
                <p className="pillar-desc">
                  Servicios profesionales matriculados para administraciones de consorcios y particulares en CABA. 
                  Resolvemos urgencias operativas y tramitaciones normativas con celeridad.
                </p>

                <ul className="pillar-features-list">
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Ley 257 (CABA): Informe técnico periódico sobre estado de fachadas y balcones.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Proyectos y adecuación de instalaciones de gas (Metrogas / reconexiones).</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Inspecciones de patologías constructivas y pruebas de hermeticidad.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Certificaciones e informes periciales con firma de arquitecto matriculado.</span>
                  </li>
                </ul>
              </div>

              <button 
                className="btn-cyan"
                style={{ width: '100%' }}
                onClick={onOpenQuoteModal}
              >
                <span>Solicitar Inspección o Trámite Técnico</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
