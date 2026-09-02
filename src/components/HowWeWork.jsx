import React from 'react';
import { Layers, ClipboardCheck, HardHat, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    stepNumber: "01",
    title: "Relevamiento y Diagnóstico",
    subtitle: "Visita técnica & propuesta inicial",
    description: "Visita técnica presencial en la propiedad, análisis de necesidades funcionales/patológicas y propuesta de diseño preliminar optimizando la luz natural.",
    icon: Layers,
    accentColor: "var(--brand-orange)"
  },
  {
    stepNumber: "02",
    title: "Cómputo y Planificación",
    subtitle: "Presupuesto cerrado & legajo",
    description: "Elaboración del cómputo métrico desglosado ítem por ítem, presupuesto cerrado garantizado, cronograma de obra (Gantt) y planos ejecutivos.",
    icon: ClipboardCheck,
    accentColor: "#E85B24"
  },
  {
    stepNumber: "03",
    title: "Dirección y Entrega",
    subtitle: "Ejecución matriculada & llave en mano",
    description: "Supervisión técnica presencial continua por arquitectos matriculados CPAU, control de calidad de materiales y entrega final de obra limpia y lista para habitar.",
    icon: HardHat,
    accentColor: "var(--brand-cyan)"
  }
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="how-we-work-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 4rem auto' }}>
          <div className="badge-tag" style={{ margin: '0 auto', borderLeft: '3px solid var(--brand-orange)' }}>
            <ClipboardCheck size={14} style={{ color: 'var(--brand-orange)' }} />
            <span>Metodología de Trabajo Transparente</span>
          </div>
          <h2 className="section-title">Cómo trabajamos en cada proyecto</h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto 0 auto' }}>
            Un proceso estructurado en 3 etapas claras que elimina sorpresas de costos, garantiza plazos y asegura el respaldo profesional matriculado.
          </p>
        </div>

        {/* 3 Horizontal Steps Grid */}
        <div className="how-work-grid">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="how-work-card">
                <div className="how-work-header">
                  <div className="how-work-icon-box" style={{ borderColor: step.accentColor, color: step.accentColor }}>
                    <Icon size={26} />
                  </div>
                  <span className="how-work-step-num" style={{ color: step.accentColor }}>
                    Paso {step.stepNumber}
                  </span>
                </div>

                <h3 className="how-work-title">{step.title}</h3>
                <div className="how-work-subtitle">{step.subtitle}</div>
                <p className="how-work-desc">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
