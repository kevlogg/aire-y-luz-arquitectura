import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="logo-brand" title="Aire y Luz Arquitectura — Inicio">
              <img 
                src="/logo.png" 
                alt="Aire y Luz Arquitectura Logo" 
                className="brand-logo-img" 
                style={{ filter: 'brightness(1.1)', mixBlendMode: 'multiply' }} 
              />
            </Link>
            <p className="footer-desc">
              Estudio de arquitectura en Villa Crespo especializado en reformas integrales, refacción de PHs luminosos y gestiones técnicas edilicias matriculadas en CABA.
            </p>
            <div className="footer-matricula-badge">
              <ShieldCheck size={16} style={{ color: 'var(--brand-orange)' }} />
              <span>Matrícula CPAU Nº 34.821 — CPA Nº 12.094</span>
            </div>
          </div>

          {/* Quick Satellite Links */}
          <div>
            <h4 className="footer-title">Navegación</h4>
            <ul className="footer-links">
              <li><Link to="/">Inicio / Portada</Link></li>
              <li><Link to="/remodelaciones">Remodelaciones & PHs</Link></li>
              <li><Link to="/servicios-a-consorcios">Consorcios (Ley 257 & Gas)</Link></li>
              <li><Link to="/locales-y-oficinas">Locales Comerciales & Oficinas</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="footer-title">Área de Cobertura</h4>
            <ul className="footer-links">
              <li><span className="footer-location-item">Villa Crespo (Estudio & Oficina)</span></li>
              <li><span className="footer-location-item">Palermo, Belgrano & Colegiales</span></li>
              <li><span className="footer-location-item">Almagro, Caballito & Recoleta</span></li>
              <li><span className="footer-location-item">Toda la Ciudad de Buenos Aires</span></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="footer-title">Contacto Directo</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#A0A0A0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={15} style={{ color: 'var(--brand-orange)' }} />
                <span>Av. Scalabrini Ortiz & Corrientes, CABA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={15} style={{ color: 'var(--brand-cyan)' }} />
                <span>+54 9 11 3844-2211 (WhatsApp)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={15} style={{ color: '#FFFFFF' }} />
                <span>contacto@aireyluzarquitectura.com.ar</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Aire y Luz Arquitectura. Todos los derechos reservados.
          </div>
          <div>
            Estilo editorial & desarrollo web matriculado en CABA.
          </div>
        </div>
      </div>
    </footer>
  );
}
