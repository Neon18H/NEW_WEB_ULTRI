import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  Bug,
  FileText,
  Plug,
  Radar,
  Search,
  ShieldCheck
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/GlowCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { socCompletoOffer } from "@/lib/offers";

const capabilityMatrix = [
  {
    icon: Radar,
    title: "Detección y monitoreo continuo",
    description: "Visibilidad 24/7/8x5 configurable con telemetría priorizada."
  },
  {
    icon: AlertTriangle,
    title: "Gestión de alertas y triage",
    description: "Priorización por severidad, impacto y contexto operativo."
  },
  {
    icon: ShieldCheck,
    title: "Respuesta a incidentes",
    description: "Contención, erradicación y recuperación con coordinación."
  },
  {
    icon: Search,
    title: "Threat hunting (on-demand)",
    description: "Búsqueda proactiva de amenazas según riesgo y campañas."
  },
  {
    icon: Bug,
    title: "Gestión de vulnerabilidades",
    description: "Evaluación integrada con remediación priorizada."
  },
  {
    icon: FileText,
    title: "Reportes ejecutivos y técnicos",
    description: "KPIs, hallazgos y recomendaciones accionables."
  },
  {
    icon: BadgeCheck,
    title: "Cumplimiento y evidencias",
    description: "Trazabilidad lista para auditorías y reguladores."
  },
  {
    icon: Plug,
    title: "Integración con herramientas",
    description: "SIEM, EDR, WAF y entornos cloud integrados."
  },
  {
    icon: Activity,
    title: "Playbooks y automatización",
    description: "Orquestación SOAR disponible según madurez."
  }
];

export function SOCSection() {
  return (
    <section id="soc" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-tech opacity-80" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
          backgroundSize: "140px 140px"
        }}
        aria-hidden
      />
      <div className="relative section-padding">
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <SectionHeading
            eyebrow="SOC Completo"
            title={socCompletoOffer.title}
            subtitle={socCompletoOffer.subtitle}
          />
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <TechBadge>{socCompletoOffer.label}</TechBadge>
                <TechBadge className="border-emerald-400/40 bg-emerald-400/10 text-emerald-100">
                  {socCompletoOffer.badge}
                </TechBadge>
              </div>
              <p className="text-base text-slate-200">
                {socCompletoOffer.summary}
              </p>
              <div className="space-y-3 text-sm text-slate-200">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Qué incluye
                </p>
                <ul className="space-y-3">
                  {socCompletoOffer.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Cómo operamos
                </p>
                <div className="grid gap-4">
                  {socCompletoOffer.process.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-xs font-semibold text-cyan-200">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {step.title}
                      </p>
                      <p className="text-xs text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Diferenciadores UltriAtech
                </p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {socCompletoOffer.differentiators.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contacto?service=soc-completo#contacto">
                    Agendar diagnóstico SOC
                  </Link>
                </Button>
                <p className="text-xs text-slate-400">
                  Respuesta en menos de 24 horas hábiles.
                </p>
              </div>
            </div>
            <GlowCard className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Cobertura
                </p>
                <ul className="space-y-2 text-sm text-slate-100">
                  {socCompletoOffer.coverage.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Alcance
                </p>
                <ul className="grid gap-2 text-sm text-slate-100 grid-cols-1 xs:grid-cols-2">
                  {socCompletoOffer.scope.map((item) => (
                    <li key={item} className="rounded-xl bg-white/5 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Onboarding
                </p>
                <ul className="space-y-2 text-sm text-slate-100">
                  {socCompletoOffer.onboarding.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </div>
          <div className="grid gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">
                Matriz de capacidades SOC
              </h3>
              <p className="text-sm text-slate-300">
                Cobertura integral alineada a riesgo operacional, cumplimiento y
                continuidad.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {capabilityMatrix.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-cyan-400/40"
                >
                  <capability.icon className="h-5 w-5 text-cyan-200" />
                  <h4 className="mt-3 text-sm font-semibold text-white">
                    {capability.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Entregables</h3>
              <div className="flex flex-wrap gap-3">
                {socCompletoOffer.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Ideal para</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {socCompletoOffer.idealFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
