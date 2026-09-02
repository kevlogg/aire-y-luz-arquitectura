import React, { useState } from 'react';
import { X, Calculator, ArrowRight, MessageSquare, CheckCircle2, Sparkles, Building, Flame, HardHat } from 'lucide-react';

export default function QuoteEstimatorModal({ isOpen, onClose }) {
  const [serviceType, setServiceType] = useState('ph');
  const [surface, setSurface] = useState(80);
  const [scope, setScope] = useState('integral');
  const [clientName, setClientName] = useState('');
  const [neighborhood, setNeighborhood] = useState('Villa Crespo');

  if (!isOpen) return null;

  // Calculation estimates for preview
  const getEstimates = () => {
    let baseDays = 45;
    let typeName = 'Refacción Integral de PH';

    if (serviceType === 'ph') {
      baseDays = Math.round(surface * 1.2);
      typeName = 'Refacción Integral de PH';
    } else if (serviceType === 'depto') {
      baseDays = Math.round(surface * 0.9);
      typeName = 'Remodelación de Departamento';
    } else if (serviceType === 'comercial') {
      baseDays = Math.round(surface * 0.8);
      typeName = 'Local Comercial';
    } else if (serviceType === 'ley257') {
      baseDays = 20;
      typeName = 'Informe de Conservación Ley 257';
    } else if (serviceType === 'metrogas') {
      baseDays = 30;
      typeName = 'Adecuación / Reconexión Metrogas';
    }

    const minDays = Math.max(15, Math.round(baseDays * 0.85));
    const maxDays = Math.round(baseDays * 1.2);

    return { typeName, minDays, maxDays };
  };

  const { typeName, minDays, maxDays } = getEstimates();

  const handleSendWhatsApp = () => {
    const text = `Hola Estudio Aire y Luz, quisiera solicitar un presupuesto formal con los siguientes datos:
• Nombre: ${clientName || 'Cliente'}
• Servicio: ${typeName}
• Ubicación: ${neighborhood}
• Superficie approx: ${surface} m²
• Alcance deseado: ${scope === 'integral' ? 'Llave en mano (Proyecto, Dirección y Ejecución)' : scope === 'direccion' ? 'Proyecto y Dirección Ejecutiva de Obra' : 'Trámite matriculado y Certificación'}
Muchas gracias.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5491138442211?text=${encoded}`, '_blank');
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
          <X size={20} />
        </button>

        <div className="modal-body" style={{ padding: '3rem 2.5rem' }}>
          <div className="badge-tag" style={{ marginBottom: '1rem', borderLeft: '3px solid var(--brand-orange)' }}>
            <Sparkles size={14} style={{ color: 'var(--brand-orange)' }} />
            <span>Estimador Interactivo de Proyecto</span>
          </div>

          <h3 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>
            Cotizar Proyecto o Trámite Técnico
          </h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.975rem' }}>
            Completa los parámetros iniciales para obtener un estimado orientativo de plazos y generar tu solicitud por WhatsApp.
          </p>

          {/* Form Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            {/* Service Type Selection */}
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <label className="form-label" style={{ color: 'var(--text-main)' }}>1. Tipo de Intervención</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button 
                  type="button"
                  className={`filter-btn ${serviceType === 'ph' ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-sm)', textAlign: 'center', padding: '0.85rem', backgroundColor: serviceType === 'ph' ? 'var(--brand-orange)' : '' }}
                  onClick={() => setServiceType('ph')}
                >
                  Refacción PH
                </button>
                <button 
                  type="button"
                  className={`filter-btn ${serviceType === 'depto' ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-sm)', textAlign: 'center', padding: '0.85rem', backgroundColor: serviceType === 'depto' ? 'var(--brand-orange)' : '' }}
                  onClick={() => setServiceType('depto')}
                >
                  Depto / Vivienda
                </button>
                <button 
                  type="button"
                  className={`filter-btn ${serviceType === 'comercial' ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-sm)', textAlign: 'center', padding: '0.85rem', backgroundColor: serviceType === 'comercial' ? 'var(--brand-orange)' : '' }}
                  onClick={() => setServiceType('comercial')}
                >
                  Local Comercial
                </button>
                <button 
                  type="button"
                  className={`filter-btn ${serviceType === 'ley257' ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-sm)', textAlign: 'center', padding: '0.85rem', backgroundColor: serviceType === 'ley257' ? 'var(--brand-cyan)' : '', borderColor: serviceType === 'ley257' ? 'var(--brand-cyan)' : '' }}
                  onClick={() => setServiceType('ley257')}
                >
                  Ley 257 Fachada
                </button>
                <button 
                  type="button"
                  className={`filter-btn ${serviceType === 'metrogas' ? 'active' : ''}`}
                  style={{ borderRadius: 'var(--radius-sm)', textAlign: 'center', padding: '0.85rem', backgroundColor: serviceType === 'metrogas' ? 'var(--brand-cyan)' : '', borderColor: serviceType === 'metrogas' ? 'var(--brand-cyan)' : '' }}
                  onClick={() => setServiceType('metrogas')}
                >
                  Gas Metrogas
                </button>
              </div>
            </div>

            {/* Surface Range */}
            <div className="form-group" style={{ gridColumn: '1 / -1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label className="form-label" style={{ color: 'var(--text-main)', margin: 0 }}>2. Superficie Estimada</label>
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 700, fontSize: '1.1rem', color: serviceType === 'ley257' || serviceType === 'metrogas' ? 'var(--brand-cyan)' : 'var(--brand-orange)' }}>
                  {surface} m²
                </span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="250" 
                step="5"
                value={surface} 
                onChange={(e) => setSurface(Number(e.target.value))}
                style={{ width: '100%', accentColor: serviceType === 'ley257' || serviceType === 'metrogas' ? 'var(--brand-cyan)' : 'var(--brand-orange)', cursor: 'pointer' }}
              />
            </div>

            {/* Contact Details */}
            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--text-main)' }}>Tu Nombre y Apellido</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Ej: Matías Fernández"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', border: '1px solid var(--border-color)' }}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--text-main)' }}>Barrio / Ubicación en CABA</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Ej: Villa Crespo, Palermo, Belgrano..."
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', border: '1px solid var(--border-color)' }}
              />
            </div>
          </div>

          {/* Estimate Preview Box */}
          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-light)', fontWeight: 600 }}>
                Resumen de Estimación
              </span>
              <span className="badge-tag" style={{ background: '#FFFFFF' }}>
                {typeName} ({surface} m²)
              </span>
            </div>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Plazo Estimado de Ejecución:</div>
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  {minDays} a {maxDays} Días Hábiles
                </div>
              </div>
            </div>
          </div>

          {/* Export Action */}
          <button 
            className="btn-whatsapp"
            style={{ width: '100%', padding: '1.1rem', fontSize: '1rem' }}
            onClick={handleSendWhatsApp}
          >
            <MessageSquare size={20} />
            <span>Enviar Consulta Directa por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
