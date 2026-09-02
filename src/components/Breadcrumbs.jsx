import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ currentPage, currentLink }) {
  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumb" style={{ marginBottom: '1.5rem' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-main)', fontWeight: 500 }}>
          <Home size={14} />
          <span>Inicio</span>
        </Link>
        <ChevronRight size={14} style={{ color: 'var(--text-light)' }} />
        <span style={{ color: 'var(--brand-orange)', fontWeight: 600 }}>{currentPage}</span>
      </div>
    </nav>
  );
}
