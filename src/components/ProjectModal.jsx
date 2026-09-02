import React from 'react';
import { X, MapPin, Calendar, Layers, Maximize2, Check, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <img src={project.image} alt={project.title} className="modal-hero-image" />

        <div className="modal-body">
          <div className="project-location">
            <MapPin size={14} />
            <span>{project.location}</span>
          </div>

          <h3 className="project-title" style={{ fontSize: '1.85rem', marginBottom: '0.75rem' }}>
            {project.title}
          </h3>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7' }}>
            {project.description}
          </p>

          {/* Specs Grid */}
          <div className="modal-grid-specs">
            <div className="spec-item">
              <span className="spec-label">Superficie</span>
              <span className="spec-val">{project.specs.surface}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Plazo de Obra</span>
              <span className="spec-val">{project.specs.timeframe}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Intervención</span>
              <span className="spec-val">{project.specs.type}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Año</span>
              <span className="spec-val">{project.specs.year}</span>
            </div>
          </div>

          {/* Highlights List */}
          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
            Aspectos Clave de la Obra:
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
            {project.highlights.map((highlight, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--text-main)' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(200, 109, 81, 0.15)', color: 'var(--accent-terracotta)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Check size={12} />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn-accent"
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
            >
              <span>Cotizar Proyecto Similar</span>
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={onClose}>
              <span>Volver a la Galería</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
