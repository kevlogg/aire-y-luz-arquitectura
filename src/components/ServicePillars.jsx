import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle2, ArrowRight, Sun, HardHat, Store } from 'lucide-react';

export default function ServicePillars() {
  return (
    <section id="servicios" className="pillars-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag" style={{ borderLeft: '3px solid var(--brand-orange)' }}>
            <Compass size={14} style={{ color: 'var(--brand-orange)' }} />
            <span>Nuestros Servicios Específicos</span>
          </div>
          <h2 className="section-title">Soluciones integrales de arquitectura en CABA</h2>
          <p className="section-subtitle">
            Combinamos sensibilidad proyectual y diseño contemporáneo con el rigor técnico y la matriculación requerida para operar en la Ciudad Autónoma de Buenos Aires.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="pillars-grid-3">
          {/* Pilar 1: Remodelaciones y PHs */}
          <div className="pillar-card-beam-wrapper orange-beam" tabIndex={0}>
            <div className="pillar-card">
              <div>
                <div className="pillar-header">
                  <div className="pillar-icon-box" style={{ background: 'var(--brand-orange-light)', color: 'var(--brand-orange)', borderColor: 'rgba(238, 116, 39, 0.25)' }}>
                    <Sun size={26} />
                  </div>
                  <span className="pillar-number pillar-number-01">01</span>
                </div>

                <h3 className="pillar-title">Remodelaciones & PHs</h3>
                <p className="pillar-desc">
                  Transformación integral de viviendas particulares y PHs en CABA. Optimizamos la luz natural, la distribución funcional y garantizamos presupuesto cerrado.
                </p>

                <ul className="pillar-features-list" style={{ marginBottom: '2rem' }}>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--brand-orange)' }} />
                    <span>Reciclado de PHs antiguos y valorización de patios/tragaluces.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--brand-orange)' }} />
                    <span>Redistribución de ambientes e interiorismo contemporáneo.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--brand-orange)' }} />
                    <span>Dirección ejecutiva de obra con cómputo cerrado sin sorpresas.</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/remodelaciones"
                className="btn-secondary-link"
              >
                <span>Ver detalle del servicio</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Pilar 2: Consorcios, Ley 257 y Metrogas */}
          <div className="pillar-card-beam-wrapper cyan-beam" id="consorcios" tabIndex={0}>
            <div className="pillar-card">
              <div>
                <div className="pillar-header">
                  <div className="pillar-icon-box" style={{ background: 'var(--brand-cyan-light)', color: 'var(--brand-cyan)', borderColor: 'rgba(40, 165, 214, 0.25)' }}>
                    <HardHat size={26} />
                  </div>
                  <span className="pillar-number pillar-number-02">02</span>
                </div>

                <h3 className="pillar-title">Consorcios, Ley 257 & Metrogas</h3>
                <p className="pillar-desc">
                  Asesoramiento normativo y firma matriculada para administraciones de consorcio en CABA. Resolución ágil de intimaciones del GCBA y gas.
                </p>

                <ul className="pillar-features-list" style={{ marginBottom: '2rem' }}>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Ley 257: Certificado de conservación de fachadas y balcones.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Reconexión de Metrogas y prueba de hermeticidad de cañerías.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--brand-cyan)' }} />
                    <span>Informes periciales e inspecciones patológicas con firma CPAU.</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/servicios-a-consorcios"
                className="btn-secondary-link cyan"
              >
                <span>Ver detalle del servicio</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Pilar 3: Locales Comerciales y Oficinas */}
          <div className="pillar-card-beam-wrapper dark-beam" tabIndex={0}>
            <div className="pillar-card">
              <div>
                <div className="pillar-header">
                  <div className="pillar-icon-box" style={{ background: 'rgba(17, 17, 17, 0.06)', color: 'var(--text-main)', borderColor: 'var(--border-color)' }}>
                    <Store size={26} />
                  </div>
                  <span className="pillar-number pillar-number-03">03</span>
                </div>

                <h3 className="pillar-title">Locales & Oficinas</h3>
                <p className="pillar-desc">
                  Arquitectura comercial y espacios de trabajo donde la fecha de apertura es crítica. Diseño de identidad espacial y habilitaciones municipales.
                </p>

                <ul className="pillar-features-list" style={{ marginBottom: '2rem' }}>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--text-main)' }} />
                    <span>Diseño de layout de alto tránsito e identidad de marca.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--text-main)' }} />
                    <span>Gestión integral de planos y trámites de habilitación GCBA.</span>
                  </li>
                  <li className="pillar-feature-item">
                    <CheckCircle2 size={16} style={{ color: 'var(--text-main)' }} />
                    <span>Cronograma de obra acelerado para apertura sin demoras.</span>
                  </li>
                </ul>
              </div>

              <Link 
                to="/locales-y-oficinas"
                className="btn-secondary-link dark"
              >
                <span>Ver detalle del servicio</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
