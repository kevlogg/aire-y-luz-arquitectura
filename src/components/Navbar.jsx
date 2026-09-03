import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 90;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`navbar-sticky ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Animated Split Logo — logoizquierda & logoderecha assembly */}
        <Link 
          to="/" 
          className="logo-brand animated-split-logo-link" 
          onClick={() => setMobileMenuOpen(false)}
          title="Aire y Luz Arquitectura — Haz click para ir al inicio"
        >
          <div className="logo-split-container">
            <img 
              src="/logoizquierda.png" 
              alt="Aire y Luz Arquitectura - Izquierda" 
              className="logo-split-img logo-split-left" 
            />
            <img 
              src="/logoderecha.png" 
              alt="Aire y Luz Arquitectura - Derecha" 
              className="logo-split-img logo-split-right" 
            />
          </div>
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
            onClick={(e) => handleNavClick(e, 'como-trabajamos')}
          >
            Cómo trabajamos
          </a>
        </nav>

        {/* WhatsApp Direct CTA Button */}
        <div className="navbar-actions">
          <a 
            href="https://wa.me/5491138442211?text=Hola%20Aire%20y%20Luz%20Arquitectura,%20quisiera%20consultar%20por%20un%20proyecto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
            title="Chat directo con Arquitectos en WhatsApp"
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <NavLink 
            to="/" 
            end
            className="mobile-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink 
            to="/remodelaciones" 
            className="mobile-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Remodelaciones & PHs
          </NavLink>
          <NavLink 
            to="/servicios-a-consorcios" 
            className="mobile-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Consorcios (Ley 257 & Gas)
          </NavLink>
          <NavLink 
            to="/locales-y-oficinas" 
            className="mobile-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Locales & Oficinas
          </NavLink>
          <a 
            href="#como-trabajamos" 
            className="mobile-drawer-link"
            onClick={(e) => handleNavClick(e, 'como-trabajamos')}
          >
            Cómo trabajamos
          </a>

          <a 
            href="https://wa.me/5491138442211?text=Hola%20Aire%20y%20Luz%20Arquitectura,%20quisiera%20consultar%20por%20un%20proyecto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <MessageCircle size={18} />
            <span>Consulta Directa WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
