import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    consultaType: 'Reforma Residencial / PH',
    mensaje: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        telefono: '',
        consultaType: 'Reforma Residencial / PH',
        mensaje: ''
      });
    }, 4000);
  };

  const handleDirectWhatsApp = () => {
    const text = `Hola Estudio Aire y Luz, mi nombre es ${formData.nombre || 'Cliente'}. Quisiera consultar por: ${formData.consultaType}. ${formData.mensaje ? `Detalle: ${formData.mensaje}` : ''}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5491138442211?text=${encoded}`, '_blank');
  };

  return (
    <section id="contacto" className="contact-section section-spacing">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Information Column */}
          <div className="contact-info-box">
            <div>
              <div className="badge-tag" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', borderColor: 'var(--border-dark)', borderLeft: '3px solid var(--brand-orange)' }}>
                <ShieldCheck size={14} style={{ color: 'var(--brand-orange)' }} />
                <span>Atención Profesional en Villa Crespo</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '2.5rem', color: '#FFFFFF', marginTop: '1rem' }}>
                Hablemos de tu próximo espacio
              </h2>
              <p style={{ color: 'var(--text-white-muted)', marginTop: '0.75rem', fontSize: '1.05rem' }}>
                Si querés transformar tu vivienda, refaccionar un PH o resolver un trámite técnico edilicio en CABA, coordiná una reunión previa con nuestro equipo.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={22} />
                </div>
                <div className="info-content">
                  <h4>Estudio & Oficina Técnica</h4>
                  <p>Av. Scalabrini Ortiz & Av. Corrientes, Villa Crespo, CABA</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={22} />
                </div>
                <div className="info-content">
                  <h4>Teléfonos de Contacto</h4>
                  <p>+54 9 11 3844-2211 (WhatsApp directo) / +54 11 4782-9012</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={22} />
                </div>
                <div className="info-content">
                  <h4>Correo Electrónico</h4>
                  <p>contacto@aireyluzarquitectura.com.ar</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={22} />
                </div>
                <div className="info-content">
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes de 09:00 a 18:30 hs</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Button */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-dark)' }}>
              <button 
                className="btn-whatsapp"
                style={{ width: '100%', padding: '1rem', fontSize: '0.95rem' }}
                onClick={handleDirectWhatsApp}
              >
                <MessageSquare size={20} />
                <span>Chatear con un Arquitecto Matriculado</span>
              </button>
            </div>
          </div>

          {/* Minimalist 4-Field Form Column */}
          <div className="contact-form">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#FFFFFF' }}>
              Formulario de Consulta
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-white-muted)', marginBottom: '2rem' }}>
              Respondemos todas las consultas técnicas en menos de 24 horas hábiles.
            </p>

            {submitted ? (
              <div style={{ background: 'rgba(37, 211, 102, 0.15)', border: '1px solid #25D366', padding: '2rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <h4 style={{ color: '#25D366', fontSize: '1.25rem', marginBottom: '0.5rem' }}>¡Consulta Recibida!</h4>
                <p style={{ color: '#FFFFFF', fontSize: '0.95rem' }}>
                  Nos pondremos en contacto a la brevedad para coordinar la visita técnica o evaluación previa.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* 1. Nombre */}
                <div className="form-group">
                  <label className="form-label">1. Nombre y Apellido *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="Ej: Sofia Rossi" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  />
                </div>

                {/* 2. Teléfono / WhatsApp */}
                <div className="form-group">
                  <label className="form-label">2. Teléfono / WhatsApp de Contacto *</label>
                  <input 
                    type="tel" 
                    required 
                    className="form-input" 
                    placeholder="Ej: 11 5498 2210" 
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>

                {/* 3. Tipo de Consulta Dropdown */}
                <div className="form-group">
                  <label className="form-label">3. Tipo de Consulta *</label>
                  <select 
                    className="form-select"
                    value={formData.consultaType}
                    onChange={(e) => setFormData({ ...formData, consultaType: e.target.value })}
                  >
                    <option value="Remodelación / Vivienda particular">Remodelación / Vivienda particular</option>
                    <option value="Consorcio (Ley 257 / Metrogas)">Consorcio (Ley 257 / Metrogas)</option>
                    <option value="Local Comercial / Oficina">Local Comercial / Oficina</option>
                    <option value="Otra consulta técnica">Otra consulta técnica</option>
                  </select>
                </div>

                {/* 4. Mensaje breve */}
                <div className="form-group">
                  <label className="form-label">4. Mensaje Breve o Detalle del Espacio</label>
                  <textarea 
                    rows={4} 
                    className="form-textarea" 
                    placeholder="Contanos brevemente sobre la propiedad, los metros cuadrados o la urgencia técnica..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-accent"
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>Enviar Mensaje al Estudio</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
