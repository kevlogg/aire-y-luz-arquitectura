import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionDivider from '../components/SectionDivider';
import TrustBanner from '../components/TrustBanner';
import ContactSection from '../components/ContactSection';
import { CheckCircle2, MessageSquare, ChevronDown, Sparkles, Home as HomeIcon, Ruler, Calendar, MapPin, ArrowRight } from 'lucide-react';

const INCLUDED_SERVICES = [
  {
    title: "Demolición & Redistribución Espacial",
    desc: "Apertura de vanos, eliminación de muros ciegos y redistribución de plantas para optimizar la circulación y el ingreso de luz natural."
  },
  {
    title: "Instalaciones Nuevas Certificadas",
    desc: "Renovación completa de cañerías de agua (termofusión), electricidad con tablero normado y adecuación de gas matriculado."
  },
  {
    title: "Carpinterías & Aislamiento Térmico",
    desc: "Recuperación de carpinterías originales de madera/hierro e instalación de aberturas DVH para máximo confort acústico."
  },
  {
    title: "Terminaciones & Materialidad Fina",
    desc: "Colocación de porcelanatos, revestimientos de microcemento, pulido de pisos de madera y pintura general de alta durabilidad."
  },
  {
    title: "Dirección Ejecutiva de Obra",
    desc: "Supervisión técnica presencial por arquitectos matriculados CPAU con control de calidad de materiales y avance semanal."
  },
  {
    title: "Gestión de Permisos de Obra GCBA",
    desc: "Tramitación de aviso de obra, permisos de demolición y legajo técnico normativo ante el Gobierno de la Ciudad."
  }
];

const CASOS_DESTACADOS = [
  {
    title: "PH Gurruchaga — Reciclado & Tragaluz Integral",
    neighborhood: "Villa Crespo",
    surface: "85 m²",
    duration: "45 Días Hábiles",
    desc: "Recuperación de un PH centenario sustituyendo cubiertas deterioradas por un tragaluz motorizado de vidrio templado, integrando patio interior al estar principal.",
    img: "/assets/project_ph_gurruchaga.png"
  },
  {
    title: "Refacción Thames — Planta Abierta & Microcemento",
    neighborhood: "Palermo Soho",
    surface: "120 m²",
    duration: "60 Días Hábiles",
    desc: "Unificación de cocina y living mediante perfilería metálica estructural, pisos continuos de microcemento neutro y carpinterías de aluminio negro.",
    img: "/assets/project_thames_palermo.png"
  }
];

const FAQS_REMODELACION = [
  {
    q: "¿Cómo evitan los desvíos en el presupuesto durante la obra?",
    a: "Trabajamos con una metodología de Cómputo y Presupuesto Cerrado ítem por ítem. Antes de demoler o comprar materiales, se firma un legajo técnico detallado donde se estipulan las cantidades, marcas y costos fijos. No existen sorpresas ni adicionales imprevistos."
  },
  {
    q: "¿Puedo habitar la propiedad durante la reforma?",
    a: "En refacciones parciales (como baño o cocina en etapas) es posible coordinar la habitabilidad parcial. Sin embargo, para reformas integrales con cambio de instalaciones generales recomendaremos desocupar temporalmente para acelerar los plazos y garantizar tu confort y seguridad."
  },
  {
    q: "¿Ustedes gestionan los permisos de obra ante el GCBA?",
    a: "Sí. Como arquitectos matriculados en CPAU / CABA, elaboramos la documentación técnica, confeccionamos los planos de modificación y gestionamos el Aviso de Obra o Permiso de Ejecución ante el sistema TAD del Gobierno de la Ciudad."
  }
];

export default function RemodelacionesPage({ onOpenQuoteModal }) {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = "Remodelación de PHs y Viviendas en CABA | Aire y Luz Arquitectura";
  }, []);

  const handleWhatsAppClick = () => {
    const text = "Hola Estudio Aire y Luz, quiero consultar por una remodelación residencial para mi propiedad en CABA.";
    window.open(`https://wa.me/5491138442211?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <main style={{ paddingTop: '5.5rem' }}>
      <div className="container">
        <Breadcrumbs currentPage="Remodelaciones & PHs" />
      </div>

      {/* Hero Satellite Page */}
      <section className="spoke-hero-section">
        <div className="container">
          <div className="spoke-hero-grid">
            <div>
              <div className="badge-tag" style={{ borderLeft: '3px solid var(--brand-orange)' }}>
                <Sparkles size={14} style={{ color: 'var(--brand-orange)' }} />
                <span>Especialistas en Viviendas & PHs de CABA</span>
              </div>
              <h1 className="spoke-hero-title">
                Remodelación Integral de Viviendas y PHs en Buenos Aires
              </h1>
              <p className="spoke-hero-subtitle">
                Diseñamos y ejecutamos reformas que multiplican la entrada de luz natural, optimizan la funcionalidad de cada ambiente y se entregan con presupuesto cerrado garantizado.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                <button className="btn-accent" onClick={handleWhatsAppClick} style={{ padding: '1rem 1.75rem' }}>
                  <MessageSquare size={18} />
                  <span>Consultar por WhatsApp</span>
                </button>
                <button className="btn-primary" onClick={onOpenQuoteModal} style={{ padding: '1rem 1.5rem' }}>
                  <span>Cotizar mi Reforma</span>
                </button>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-inner">
                <img 
                  src="/assets/project_ph_gurruchaga.png" 
                  alt="Remodelación integral de PH en CABA por Aire y Luz Arquitectura" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Qué Incluye el Servicio */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header" style={{ maxWidth: '680px' }}>
            <div className="badge-tag" style={{ borderLeft: '3px solid var(--brand-orange)' }}>
              <HomeIcon size={14} style={{ color: 'var(--brand-orange)' }} />
              <span>Alcance Completo Llave en Mano</span>
            </div>
            <h2 className="section-title">Qué incluye nuestro servicio de remodelación</h2>
            <p className="section-subtitle">
              Nos encargamos del ciclo completo del proyecto para que no tengas que tratar con gremios individuales ni lidiar con imprevistos.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }}>
            {INCLUDED_SERVICES.map((item, index) => (
              <div key={index} className="spoke-service-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--brand-orange)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>{item.title}</h3>
                </div>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Muestra de Casos / Antes y Después */}
      <section className="section-spacing" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge-tag">
              <Sparkles size={14} />
              <span>Casos Destacados de Obra</span>
            </div>
            <h2 className="section-title">Proyectos de remodelación entregados</h2>
            <p className="section-subtitle">Fichas reales de intervenciones residenciales realizadas en la Ciudad Autónoma de Buenos Aires.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
            {CASOS_DESTACADOS.map((caso, i) => (
              <div key={i} className="project-card" style={{ cursor: 'default' }}>
                <div className="project-image-wrapper">
                  <img src={caso.img} alt={caso.title} className="project-image" />
                </div>
                <div className="project-body" style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--brand-orange)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} /> {caso.neighborhood}
                    </span>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Ruler size={14} /> {caso.surface}
                    </span>
                    <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} /> {caso.duration}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>{caso.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{caso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Preguntas Frecuentes del Servicio */}
      <section className="section-spacing">
        <div className="container">
          <div className="section-header" style={{ maxWidth: '680px' }}>
            <h2 className="section-title">Preguntas frecuentes sobre remodelaciones</h2>
            <p className="section-subtitle">Respuestas claras sobre la planificación y ejecución de obras residenciales.</p>
          </div>

          <div style={{ maxWidth: '850px' }}>
            {FAQS_REMODELACION.map((faq, index) => {
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
                    <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: 'var(--brand-orange)' }} />
                  </button>
                  {isOpen && (
                    <p style={{ marginTop: '0.85rem', color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6 }}>{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Final */}
          <div style={{ marginTop: '4rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '3rem 2.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
              ¿Listo para transformar tu vivienda o PH?
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
              Coordiná una reunión técnica inicial en tu propiedad en CABA para evaluar factibilidad y estimar costos.
            </p>
            <button className="btn-whatsapp" style={{ fontSize: '1.05rem', padding: '1.1rem 2.25rem' }} onClick={handleWhatsAppClick}>
              <MessageSquare size={20} />
              <span>Consultar por WhatsApp para Remodelación</span>
            </button>
          </div>
        </div>
      </section>

      <TrustBanner />
      <ContactSection />
    </main>
  );
}
