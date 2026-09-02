import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionDivider from '../components/SectionDivider';
import TrustBanner from '../components/TrustBanner';
import ContactSection from '../components/ContactSection';
import { ShieldCheck, HardHat, Flame, Building2, CheckCircle2, PhoneCall, ChevronDown, FileText, AlertTriangle, ArrowRight, Clock } from 'lucide-react';

const FAQS_CONSORCIOS = [
  {
    q: "¿Qué plazos da el GCBA ante una intimación por fachada (Ley 257)?",
    a: "Frente a una cédula de intimación del GCBA, el consorcio dispone habitualmente de entre 10 y 30 días hábiles para presentar el Informe Técnico inicial firmado por arquitecto matriculado. Una vez encomendada la tarea, nuestro estudio ingresa la presentación digital en TAD-CABA de forma inmediata para frenar multas."
  },
  {
    q: "¿Cómo se coordina la inspección en edificios habitados?",
    a: "Coordinamos un cronograma por pisos y departamentos notificando a la Administración. Para fachadas y balcones, realizamos inspección óptica y física mediante silletas u operadores de altura, minimizando las molestias a los copropietarios."
  },
  {
    q: "¿El estudio asume la responsabilidad técnica ante Metrogas?",
    a: "Sí. Como profesionales matriculados (CPAU y matriculación habilitante), firmamos la Encomienda Profesional, realizamos las pruebas de hermeticidad y presión con manómetro normado y representamos al consorcio ante los inspectores oficiales de Metrogas hasta lograr el alta definitiva del servicio."
  }
];

export default function ConsorciosPage({ onOpenQuoteModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Gestión Técnica para Consorcios CABA | Ley 257 & Metrogas | Aire y Luz";
  }, []);

  const handleUrgentCall = () => {
    const text = "URGENTE CONSORCIOS: Necesito asistencia técnica matriculada para una administración en CABA (Ley 257 / Metrogas).";
    window.open(`https://wa.me/5491138442211?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main style={{ paddingTop: '5.5rem' }}>
      <div className="container">
        <Breadcrumbs currentPage="Consorcios & Trámites" />
      </div>

      {/* Hero Satellite Page */}
      <section className="spoke-hero-section">
        <div className="container">
          <div className="spoke-hero-grid">
            <div>
              <div className="badge-tag" style={{ borderLeft: '3px solid var(--brand-cyan)' }}>
                <ShieldCheck size={14} style={{ color: 'var(--brand-cyan)' }} />
                <span>Atención Prioritaria para Administraciones de Consorcio</span>
              </div>
              <h1 className="spoke-hero-title">
                Gestión Técnica Integral para Consorcios en CABA
              </h1>
              <p className="spoke-hero-subtitle">
                Respuesta inmediata, firma matriculada CPAU y resolución definitiva ante intenciones del GCBA por Ley 257 (fachadas) y adecuaciones urgentes de suministro de gas (Metrogas).
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button 
                  className="btn-cyan" 
                  onClick={handleUrgentCall}
                  style={{ padding: '1rem 1.75rem', fontSize: '1rem' }}
                >
                  <PhoneCall size={18} />
                  <span>Contacto de Urgencia Consorcial</span>
                </button>

                <button className="btn-primary" onClick={onOpenQuoteModal} style={{ padding: '1rem 1.5rem' }}>
                  <span>Solicitar Presupuesto Técnico</span>
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-inner" style={{ padding: '2.5rem', background: 'var(--bg-dark)', color: '#FFFFFF', borderRadius: 'var(--radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <AlertTriangle size={24} style={{ color: 'var(--brand-cyan)' }} />
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#FFFFFF' }}>Celeridad en Intimaciones</h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-white-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Presentación de Informes Técnicos digitales e ingreso de trámites en menos de 48 horas hábiles para evitar clausuras y multas consorciales.
                </p>
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-cyan)', fontSize: '0.875rem' }}>
                  <strong>Firma Matriculada:</strong> Arq. CPAU habilitado ante la Agencia Gubernamental de Control (AGC-CABA).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Dos Bloques de Especialidad Destacados */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header" style={{ maxWidth: '720px' }}>
            <h2 className="section-title">Especialidades técnicas para edificios</h2>
            <p className="section-subtitle">Servicios periciales matriculados diseñados para la gestión operativa y legal de propiedades horizontales.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {/* Especialidad 1: Ley 257 */}
            <div className="spoke-specialty-card" style={{ borderTop: '4px solid var(--brand-cyan)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="pillar-icon-box" style={{ background: 'var(--brand-cyan-light)', color: 'var(--brand-cyan)' }}>
                  <Building2 size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>1. Ley 257 — Fachadas & Balcones</h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--brand-cyan)', fontWeight: 600 }}>Conservación de Obras y Salubridad CABA</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Inspección obligatoria de elementos salientes, revestimientos, balcones y mamposterías para garantizar la seguridad en la vía pública y dar cumplimiento a la normativa del GCBA.
              </p>

              <ul className="pillar-features-list" style={{ marginBottom: '2rem' }}>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                  <span>Inspección ocular y pruebas físicas en balcones y cornisa.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                  <span>Emisión y firma de Certificado de Conservación (AGC / CABA).</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                  <span>Presentación digital e ingreso de expedientes por sistema TAD.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)' }} />
                  <span>Dirección ejecutiva de obras de reparación en altura requeridas.</span>
                </li>
              </ul>
            </div>

            {/* Especialidad 2: Metrogas */}
            <div className="spoke-specialty-card" style={{ borderTop: '4px solid var(--brand-orange)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div className="pillar-icon-box" style={{ background: 'var(--brand-orange-light)', color: 'var(--brand-orange)' }}>
                  <Flame size={26} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>2. Adecuación & Reconexión Metrogas</h3>
                  <span style={{ fontSize: '0.825rem', color: 'var(--brand-orange)', fontWeight: 600 }}>Rehabilitación de Suministro por Corte</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Diagnóstico urgente y plan de rehabilitación integral de cañerías montantes de gas tras la interrupción del servicio por fuga o inspección oficial.
              </p>

              <ul className="pillar-features-list" style={{ marginBottom: '2rem' }}>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                  <span>Diagnóstico de fugas y pruebas de hermeticidad con manómetro.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                  <span>Elaboración de planos Conforme a Obra según ENARGAS NAG-200.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                  <span>Reemplazo de cañerías montantes y ventilaciones reglamentarias.</span>
                </li>
                <li className="pillar-feature-item">
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)' }} />
                  <span>Gestión de inspecciones oficiales para reactivación del medidor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Consorcios */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header" style={{ maxWidth: '680px' }}>
            <h2 className="section-title">Preguntas frecuentes de consorcios</h2>
            <p className="section-subtitle">Respuestas normativas sobre inspecciones edilicias en la Ciudad de Buenos Aires.</p>
          </div>

          <div style={{ maxWidth: '850px' }}>
            {FAQS_CONSORCIOS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  style={{ borderBottom: '1px solid var(--border-color)', padding: '1.25rem 0' }}
                >
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
                  >
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>{faq.q}</span>
                    <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: 'var(--brand-cyan)' }} />
                  </button>
                  {isOpen && (
                    <p style={{ marginTop: '0.85rem', color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA de Urgencia Consorcial */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-dark)', color: '#FFFFFF', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <div className="badge-tag" style={{ margin: '0 auto 1rem auto', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'var(--border-dark)' }}>
              <Clock size={14} style={{ color: 'var(--brand-cyan)' }} />
              <span>Respuesta en menos de 2 horas para administradores</span>
            </div>
            <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: '#FFFFFF' }}>
              ¿Intimación vigente del GCBA o corte de gas en el edificio?
            </h3>
            <p style={{ color: 'var(--text-white-muted)', maxWidth: '620px', margin: '0 auto 2.25rem auto', fontSize: '1.05rem' }}>
              Comunicáte de forma directa con nuestro equipo técnico matriculado para enviar inspectores de forma prioritaria a la finca.
            </p>
            <button className="btn-cyan" style={{ fontSize: '1.1rem', padding: '1.15rem 2.5rem' }} onClick={handleUrgentCall}>
              <PhoneCall size={20} />
              <span>Contacto Directo de Urgencia Consorcial</span>
            </button>
          </div>
        </div>
      </section>

      <TrustBanner />
      <ContactSection />
    </main>
  );
}
