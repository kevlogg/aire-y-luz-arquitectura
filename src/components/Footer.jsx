import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="#" className="logo-brand">
              <img src="/logo.png" alt="Aire y Luz Arquitectura Logo" className="brand-logo-img" style={{ filter: 'brightness(1.1)' }} />
              <div className="brand-text-group">
                <span className="brand-main" style={{ color: '#FFFFFF' }}>AIRE Y LUZ</span>
                <span className="brand-sub">ARQUITECTURA</span>
              </div>
            </a>
            <p>
              Estudio de arquitectura en Villa Crespo especializado en reformas integrales, refacción de PHs y gestiones técnicas edilicias matriculadas en CABA.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#A0A0A0', fontSize: '0.85rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--accent-terracotta)' }} />
              <span>Matrícula CPAU Nº 34.821 — CPA Nº 12.094</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-links">
              <li><a href="#proyectos">Proyectos Destacados</a></li>
              <li><a href="#servicios">Reformas Integrales</a></li>
              <li><a href="#consorcios">Ley 257 & Fachadas</a></li>
              <li><a href="#consorcios">Adecuación de Gas Metrogas</a></li>
              <li><a href="#faq">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Legal & Service Area */}
          <div>
            <h4 className="footer-title">Área de Cobertura</h4>
            <ul className="footer-links">
              <li><span style={{ color: '#888888', fontSize: '0.875rem' }}>Villa Crespo (Sede Central)</span></li>
              <li><span style={{ color: '#888888', fontSize: '0.875rem' }}>Palermo, Belgrano & Colegiales</span></li>
              <li><span style={{ color: '#888888', fontSize: '0.875rem' }}>Almagro, Caballito & Recoleta</span></li>
              <li><span style={{ color: '#888888', fontSize: '0.875rem' }}>Toda la Ciudad Autónoma de Buenos Aires (CABA)</span></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Aire y Luz Arquitectura. Todos los derechos reservados.
          </div>
          <div>
            Estilo editorial & desarrollo web para arquitectura contemporánea.
          </div>
        </div>
      </div>
    </footer>
  );
}
