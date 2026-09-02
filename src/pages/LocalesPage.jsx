import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionDivider from '../components/SectionDivider';
import TrustBanner from '../components/TrustBanner';
import ContactSection from '../components/ContactSection';
import { Store, Building, LayoutGrid, Zap, FileCheck2, Clock, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

const PILARES_COMERCIALES = [
  {
    title: "1. Layout & Experiencia Espacial",
    desc: "Diseño estratégico de plantas comerciales, vitrinas, iluminación de producto y zonificación para acelerar las ventas y potenciar la identidad visual de marca.",
    icon: LayoutGrid
  },
  {
    title: "2. Instalaciones de Alto Tránsito",
    desc: "Dimensionamiento y ejecución de tableros eléctricos trifásicos, sistemas centralizados de climatización (HVAC), datos/redes y tratamientos acústicos.",
    icon: Zap
  },
  {
    title: "3. Habilitaciones & Planos AGC",
    desc: "Confección de legajo técnico completo para trámites de Habilitación Comercial en CABA (AGC / Sistema SQR), plano de evacuación e incendios.",
    icon: FileCheck2
  }
];

export default function LocalesPage({ onOpenQuoteModal }) {
  useEffect(() => {
    document.title = "Arquitectura Comercial y Oficinas en CABA | Aire y Luz Arquitectura";
  }, []);

  const handleWhatsAppClick = () => {
    const text = "Hola Estudio Aire y Luz, quiero consultar por un proyecto de arquitectura comercial / oficina con fecha de apertura en CABA.";
    window.open(`https://wa.me/5491138442211?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main style={{ paddingTop: '5.5rem' }}>
      <div className="container">
        <Breadcrumbs currentPage="Locales & Oficinas" />
      </div>

      {/* Hero Satellite Page */}
      <section className="spoke-hero-section">
        <div className="container">
          <div className="spoke-hero-grid">
            <div>
              <div className="badge-tag" style={{ borderLeft: '3px solid var(--text-main)' }}>
                <Store size={14} style={{ color: 'var(--text-main)' }} />
                <span>Locales Comerciales & Espacios Corporativos</span>
              </div>
              <h1 className="spoke-hero-title">
                Arquitectura Comercial y Espacios de Trabajo
              </h1>
              <p className="spoke-hero-subtitle">
                Proyectamos y construimos locales comerciales, espacios gastronómicos y oficinas donde el diseño de marca y el cumplimiento estricto del cronograma de apertura son la prioridad.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button className="btn-primary" onClick={handleWhatsAppClick} style={{ padding: '1rem 1.75rem' }}>
                  <MessageSquare size={18} />
                  <span>Consultar por Proyecto Comercial</span>
                </button>
                <button className="btn-accent" onClick={onOpenQuoteModal} style={{ padding: '1rem 1.5rem' }}>
                  <span>Cotizar Obra Comercial</span>
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-inner">
                <img 
                  src="/assets/project_thames_palermo.png" 
                  alt="Diseño de local comercial en CABA por Aire y Luz Arquitectura" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Pilares del Servicio Comercial */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header" style={{ maxWidth: '680px' }}>
            <h2 className="section-title">Pilares de nuestro servicio comercial</h2>
            <p className="section-subtitle">Solución integral desde la conceptualización de marca hasta la habilitación municipal y la apertura.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {PILARES_COMERCIALES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="spoke-service-card">
                  <div className="pillar-icon-box" style={{ marginBottom: '1.25rem', color: 'var(--text-main)' }}>
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Compromiso de Plazos & Habilitación */}
      <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="badge-tag">
                <Clock size={14} />
                <span>Control Riguroso de Tiempos</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '2.1rem', marginTop: '0.75rem' }}>
                Cumplimiento estricto de la fecha de apertura
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1rem', fontSize: '1.025rem' }}>
                Sabemos que cada día de demora en la obra comercial representa lucro cesante y alquiler acumulado. Por eso trabajamos con un cronograma semanal vinculante y turnos de obra optimizados.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-orange)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)' }}>Plano de Habilitación & Evacuación:</strong> Presentación inmediata ante el sistema de la AGC.
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--brand-cyan)', flexShrink: 0, marginTop: '0.2rem' }} />
                  <div>
                    <strong style={{ color: 'var(--text-main)' }}>Proveedores & Gremios Coordinados:</strong> Mobiliario comercial a medida, carpinterías e iluminación instaladas simultáneamente.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', padding: '2.5rem', borderRadius: 'var(--radius-md)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Consulta para Proyecto Comercial
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Ingresá los datos de tu espacio o marca para coordinar una evaluación técnica rápida.
              </p>
              
              <button 
                className="btn-whatsapp" 
                style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', justifyContent: 'center' }}
                onClick={handleWhatsAppClick}
              >
                <MessageSquare size={20} />
                <span>Chatear por WhatsApp con Arquitecto Comercial</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <TrustBanner />
      <ContactSection />
    </main>
  );
}
