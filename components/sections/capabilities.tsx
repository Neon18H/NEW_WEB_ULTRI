import { Shield, Cpu, Layers, Radar, Workflow, Lock } from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Arquitectura de IA aplicada",
    description:
      "Modelos con recuperación aumentada y control de calidad para casos críticos."
  },
  {
    icon: Shield,
    title: "Seguridad integrada",
    description:
      "Evaluaciones, hardening y detección integradas al ciclo de vida."
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description:
      "Orquestación inteligente conectada a sistemas existentes."
  },
  {
    icon: Layers,
    title: "Plataformas digitales",
    description:
      "Experiencias web robustas y escalables para entornos enterprise."
  },
  {
    icon: Radar,
    title: "Observabilidad y métricas",
    description:
      "Dashboards, alertas y KPIs para gobernanza y decisiones."
  },
  {
    icon: Lock,
    title: "Privacidad y cumplimiento",
    description:
      "Políticas de acceso, cifrado y trazabilidad definidas en conjunto."
  }
];

export function CapabilitiesSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Capacidades
          </p>
          <h2 className="section-title">Lo que podemos habilitar juntos.</h2>
          <p className="section-subtitle">
            Capacidades modulares para construir soluciones a medida.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
            >
              <capability.icon className="h-5 w-5 text-cyan-200" />
              <h3 className="mt-4 text-lg font-semibold text-white">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
