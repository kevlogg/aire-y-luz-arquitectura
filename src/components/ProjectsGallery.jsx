import React, { useState } from 'react';
import { MapPin, ArrowUpRight, Grid, Filter } from 'lucide-react';
import ProjectModal from './ProjectModal';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "PH Gurruchaga — Villa Crespo",
    category: "phs",
    location: "Villa Crespo, CABA",
    typeLabel: "Refacción Integral & Patio",
    image: "/assets/project_ph_gurruchaga.png",
    description: "Refacción total de un PH histórico en Villa Crespo. Se eliminaron particiones oscuras para dar paso a un gran estar integrado conectado al patio interno mediante paños vidriados de piso a techo.",
    specs: {
      surface: "125 m²",
      timeframe: "4 Meses",
      type: "Refacción Integral",
      year: "2025"
    },
    highlights: [
      "Optimización de ingreso de luz natural con lucernario central",
      "Restauración de carpinterías históricas de madera y hierro",
      "Piso continuo de microcemento técnico pulido",
      "Dirección técnica y ejecución de obra llave en mano"
    ]
  },
  {
    id: 2,
    title: "Reforma Thames — Palermo",
    category: "residencial",
    location: "Palermo Hollywood, CABA",
    typeLabel: "Remodelación & Interiorismo",
    image: "/assets/project_thames_palermo.png",
    description: "Intervención de departamento de 3 ambientes. Se redistribuyó el sector social creando una cocina abierta con isla central en mármol travertino y mobiliario a medida en roble natural.",
    specs: {
      surface: "88 m²",
      timeframe: "3 Meses",
      type: "Interiorismo & Reforma",
      year: "2025"
    },
    highlights: [
      "Cocina integrada con mobiliario de roble americano",
      "Isla flotante en mármol travertino nacional",
      "Iluminación escenográfica con gargantas LED embutidas",
      "Renovación integral de instalaciones sanitarias y eléctricas"
    ]
  },
  {
    id: 3,
    title: "Café Loyola — Villa Crespo",
    category: "comercial",
    location: "Villa Crespo, CABA",
    typeLabel: "Local Comercial & Gastro",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    description: "Diseño y dirección de obra para tienda boutique y laboratorio de café de especialidad. Combinación de texturas de hormigón visto, ladrillo visto pintado y barra terracota.",
    specs: {
      surface: "65 m²",
      timeframe: "2.5 Meses",
      type: "Local Comercial",
      year: "2024"
    },
    highlights: [
      "Barra principal construida en piezas de terracota artesanal",
      "Habilitación comercial ante el GCBA en plazo récord",
      "Estudio acústico y climatización insonorizada",
      "Mobiliario de diseño escandinavo en hierro y guatambú"
    ]
  },
  {
    id: 4,
    title: "Consorcio Conesa — Belgrano",
    category: "consorcios",
    location: "Belgrano, CABA",
    typeLabel: "Ley 257 Fachadas & Balcones",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    description: "Inspección técnica pericial, informe de conservación bajo Ley 257 (GCBA), retiro preventivo de revoques sueltos en balcones de 8 pisos y refacción estética exterior.",
    specs: {
      surface: "8 Pisos (Fachada)",
      timeframe: "1.5 Meses",
      type: "Conservación Ley 257",
      year: "2025"
    },
    highlights: [
      "Informe pericial firmado por arquitectos matriculados CPAU",
      "Tramitación y presentación formal del Certificado de Conservación",
      "Trabajo de pintura y sellado de grietas con personal especializado en altura",
      "Aprobación final sin observaciones por parte del Gobierno de la Ciudad"
    ]
  },
  {
    id: 5,
    title: "Casa Taller Malabia — Palermo Soho",
    category: "residencial",
    location: "Palermo Soho, CABA",
    typeLabel: "Vivienda Unifamiliar",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description: "Proyecto de ampliación y remodelación de casa de planta baja con terraza. Creación de un espacio taller de doble altura en planta alta con acceso independiente.",
    specs: {
      surface: "145 m²",
      timeframe: "5 Meses",
      type: "Ampliación & Reforma",
      year: "2024"
    },
    highlights: [
      "Estructura metálica ligera sobre losa existente",
      "Carpinterías de aluminio con doble vidriado hermético (DVH)",
      "Terraza verde paisajística con especies autóctonas",
      "Aislamiento térmico de alta eficiencia"
    ]
  },
  {
    id: 6,
    title: "Adecuación Metrogas Castillo — Villa Crespo",
    category: "consorcios",
    location: "Villa Crespo, CABA",
    typeLabel: "Proyecto de Gas & Metrogas",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    description: "Gestión técnica de urgencia ante corte preventivo de suministro de gas en edificio de 12 departamentos. Rediseño de colectores, pruebas de presión e inspección de habilitación.",
    specs: {
      surface: "12 Departamentos",
      timeframe: "30 Días",
      type: "Reconexión Metrogas",
      year: "2025"
    },
    highlights: [
      "Proyecto firmado por gasista matriculado de primera categoría y arquitecto",
      "Renovación completa de armario de medidores según norma Nag 200",
      "Acompañamiento presencial durante la inspección oficial de Metrogas",
      "Reestablecimiento seguro y legal del servicio en tiempo récord"
    ]
  }
];

export default function ProjectsGallery({ onOpenQuoteModal }) {
  const [activeFilter, setActiveFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <section id="proyectos" className="section-spacing" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Grid size={14} />
            <span>Portfolio Destacado</span>
          </div>
          <h2 className="section-title">Obras y proyectos ejecutados</h2>
          <p className="section-subtitle">
            Explora una selección de nuestras intervenciones recientes en Villa Crespo y principales barrios de Buenos Aires.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="portfolio-filter-bar">
          <button 
            className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('todos')}
          >
            Todos los Proyectos ({PROJECTS_DATA.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'phs' ? 'active' : ''}`}
            onClick={() => setActiveFilter('phs')}
          >
            Refacción de PHs
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'residencial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('residencial')}
          >
            Residencial & Interiorismo
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'comercial' ? 'active' : ''}`}
            onClick={() => setActiveFilter('comercial')}
          >
            Locales Comerciales
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'consorcios' ? 'active' : ''}`}
            onClick={() => setActiveFilter('consorcios')}
          >
            Consorcios & Ley 257
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <span className="project-category-badge">{project.typeLabel}</span>
              </div>
              <div className="project-body">
                <div className="project-location">
                  <MapPin size={12} />
                  <span>{project.location}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-meta">
                  <span>{project.specs.surface} — {project.specs.timeframe}</span>
                  <span className="project-link-action">
                    Ver Obra <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Inspector Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenQuote={onOpenQuoteModal}
      />
    </section>
  );
}
