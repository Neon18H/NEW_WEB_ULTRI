import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    description:
      "Entendemos objetivos, riesgos y restricciones para diseñar un plan realista."
  },
  {
    title: "Diseño",
    description:
      "Arquitectura, UX y seguridad desde el inicio con métricas claras."
  },
  {
    title: "Implementación",
    description:
      "Iteraciones controladas, entregas parciales y validación continua."
  },
  {
    title: "Soporte",
    description:
      "Monitoreo, optimización y roadmap de evolución con SLA."
  }
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Cómo trabajamos
          </p>
          <h2 className="section-title">Metodología clara y medible.</h2>
          <p className="section-subtitle">
            Ejecutamos en ciclos cortos con foco en resultados y control.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-cyan-200">
                  0{index + 1}
                </p>
                <CheckCircle2 className="h-4 w-4 text-emerald-200" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
