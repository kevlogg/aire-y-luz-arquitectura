import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHowWeWorkClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('como-trabajamos');
      if (el) {
        const offset = 85;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    } else {
      navigate('/#como-trabajamos');
      setTimeout(() => {
        const el = document.getElementById('como-trabajamos');
        if (el) {
          const offset = 85;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`navbar-sticky ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo - Uses logo.png directly */}
        <Link 
          to="/" 
          className="logo-brand" 
          onClick={() => setMobileMenuOpen(false)}
          title="Aire y Luz Arquitectura — Villa Crespo"
        >
          <img 
            src="/logo.png" 
            alt="Aire y Luz Arquitectura" 
            className="brand-logo-img" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links">
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            Inicio
          </NavLink>
          
          <NavLink 
            to="/remodelaciones" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            Remodelaciones
          </NavLink>

          <NavLink 
            to="/servicios-a-consorcios" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            Consorcios
          </NavLink>

          <NavLink 
            to="/locales-y-oficinas" 
            className={({ isActive }) => `nav-link-item ${isActive ? 'active' : ''}`}
          >
            Locales
          </NavLink>

          <a 
            href="#como-trabajamos" 
            className="nav-link-item" 
            onClick={handleHowWeWorkClick}
          >
            Cómo trabajamos
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="navbar-actions">
          <button 
            className="btn-primary"
            onClick={onOpenQuoteModal}
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight size={16} />
          </button>
          
          <a 
            href="https://wa.me/5491138442211?text=Hola%20estudio%20Aire%20y%20Luz,%20quisiera%20hacer%20una%20consulta%20técnica%20directa."
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
            title="Chatear por WhatsApp directo con un arquitecto"
            aria-label="WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp directo</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <Link to="/" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
            Inicio
          </Link>
          <Link to="/remodelaciones" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
            Remodelaciones & PHs
          </Link>
          <Link to="/servicios-a-consorcios" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
            Consorcios & Trámites
          </Link>
          <Link to="/locales-y-oficinas" className="mobile-drawer-link" onClick={() => setMobileMenuOpen(false)}>
            Locales Comercial / Oficinas
          </Link>
          <a href="#como-trabajamos" className="mobile-drawer-link" onClick={handleHowWeWorkClick}>
            Cómo trabajamos
          </a>

          <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => { setMobileMenuOpen(false); onOpenQuoteModal(); }}>
              <span>Cotizar Proyecto</span>
              <ArrowUpRight size={16} />
            </button>
            <a 
              href="https://wa.me/5491138442211?text=Hola%20estudio%20Aire%20y%20Luz,%20quisiera%20hacer%20una%20consulta%20técnica%20directa."
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp directo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
