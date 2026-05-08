import Link from "next/link";
import { ArrowUpRight, Shield, Brain, Eye, AlertTriangle, Search, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CIBER_SERVICES = [
  { icon: Search,        label: "Gestión de Vulnerabilidades",    href: "/servicios/ciberseguridad/gestion-vulnerabilidades" },
  { icon: Shield,        label: "Hacking Ético / Red Team",        href: "/servicios/ciberseguridad/hacking-etico" },
  { icon: Eye,           label: "OSINT / Threat Intelligence",     href: "/servicios/ciberseguridad/osint-threat-intel" },
  { icon: AlertTriangle, label: "Respuesta a Ransomware",          href: "/servicios/ciberseguridad/recuperacion-ransomware" },
  { icon: Shield,        label: "SOC & Threat Hunting",            href: "/servicios/ciberseguridad/threat-hunting" },
  { icon: Shield,        label: "Pentesting Web/API (OWASP)",      href: "/servicios/ciberseguridad/pentesting-web-api" },
];

const IA_SERVICES = [
  { icon: Brain, label: "Chatbots & RAG corporativo",    href: "/servicios/ia/chatbots-rag" },
  { icon: Zap,   label: "Automatización inteligente",    href: "/servicios/ia/automatizacion-inteligente" },
  { icon: Brain, label: "Analítica & BI con IA",         href: "/servicios/ia/analitica-ia" },
  { icon: Brain, label: "Clasificación y extracción NLP",href: "/servicios/ia/clasificacion-extraccion" },
  { icon: Brain, label: "Sistemas de recomendación",     href: "/servicios/ia/recomendadores" },
  { icon: Brain, label: "Integración de IA en productos",href: "/servicios/ia/integracion-ia-productos" },
];

export function PillarsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Dos pilares · Un equipo
          </p>
          <h2 className="section-title">Ciberseguridad e IA para entornos críticos.</h2>
          <p className="section-subtitle max-w-2xl">
            Cada línea de servicio tiene metodología clara, entregables medibles y equipos especializados. Sin promesas imposibles.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
          {/* Ciberseguridad */}
          <Card className="h-full border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Shield className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <CardTitle>Ciberseguridad</CardTitle>
                  <p className="text-xs text-slate-400 mt-0.5">Defensa proactiva, evaluación y respuesta.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                {CIBER_SERVICES.map(({ icon: Icon, label, href }) => (
                  <Link key={label} href={href}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/3 px-3 py-2.5 text-xs sm:text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-white group">
                    <Icon className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
                    {label}
                    <ArrowUpRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                  </Link>
                ))}
              </div>
              <Link
                href="/servicios/ciberseguridad"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-300 hover:text-cyan-200 mt-2">
                Ver todos los servicios <ArrowUpRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>

          {/* IA */}
          <Card className="h-full border-purple-400/20 hover:border-purple-400/40 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/10">
                  <Brain className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <CardTitle>Inteligencia Artificial</CardTitle>
                  <p className="text-xs text-slate-400 mt-0.5">Automatización, analítica y copilots enterprise.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                {IA_SERVICES.map(({ icon: Icon, label, href }) => (
                  <Link key={label} href={href}
                    className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/3 px-3 py-2.5 text-xs sm:text-sm text-slate-300 transition hover:border-purple-400/30 hover:text-white group">
                    <Icon className="h-3.5 w-3.5 text-purple-400 flex-shrink-0" />
                    {label}
                    <ArrowUpRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-purple-400" />
                  </Link>
                ))}
              </div>
              <Link
                href="/servicios/ia"
                className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-purple-200 mt-2">
                Ver todos los servicios <ArrowUpRight className="h-3 w-3" />
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Trust note */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">Metodologías probadas:</span>{" "}
            OWASP · NIST · ISO 27001 · MITRE ATT&amp;CK · CIS Benchmarks
          </p>
        </div>
      </div>
    </section>
  );
}
