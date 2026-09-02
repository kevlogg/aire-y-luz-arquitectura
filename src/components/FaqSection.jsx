import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: "¿Cómo trabajan los presupuestos y cómputos de obra?",
    answer: "Trabajamos mediante un esquema de Cómputo y Presupuesto Cerrado. Tras la primera visita técnica en el inmueble y el relevamiento de necesidades, elaboramos un desglose ítem por ítem (demoliciones, albañilería, instalaciones sanitarias/eléctricas, terminaciones). Esto garantiza que el monto presupuestado no sufra desvíos imprevistos durante el transcurso de la obra."
  },
  {
    id: 2,
    question: "¿Cuánto demora una remodelación integral?",
    answer: "Los plazos varían según la superficie y complejidad. Una refacción integral de PH o departamento de 70 a 100 m² suele demorar entre 3 y 4 meses de obra activa. Presentamos un cronograma de avance (Diagrama Gantt) antes de iniciar los trabajos para que el cliente conozca exactamente las fechas clave de entrega de cada etapa."
  },
  {
    id: 3,
    question: "¿Qué incluye el informe técnico de Ley 257 para fachadas en CABA?",
    answer: "El informe de la Ley 257/99 exige la inspección periódica de los elementos constitutivos de fachadas y balcones (revoques, cornisa, barandas, salientes). Incluye el relevamiento presencial por arquitecto matriculado CPAU, informe fotografiado de patologías constructivas, plan de tareas de reparación si correspondiera, y la emisión y registro digital del Certificado de Conservación ante la AGC (Agencia Gubernamental de Control del GCBA)."
  },
  {
    id: 4,
    question: "¿Cómo resuelven una inspección o corte de suministro de gas?",
    answer: "Ante un corte preventivo de Metrogas o una inspección rechazada, enviamos al lugar a nuestro equipo técnico matriculado para realizar la prueba de hermeticidad y detección de fugas. Elaboramos el plano de adecuación según la norma NAG 200, ejecutamos las reformas en cañerías y gabinetes de medidores, y gestionamos las solicitudes de inspección oficiales hasta la reconexión definitiva del servicio."
  }
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto' }}>
            <HelpCircle size={14} />
            <span>Respuestas Clave & Asesoramiento</span>
          </div>
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
            Respuestas claras y transparentes sobre nuestros procesos de diseño, plazos de obra y gestiones técnicas en CABA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id} 
                className={`faq-item ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-header"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <div className="faq-icon">
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-body">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
