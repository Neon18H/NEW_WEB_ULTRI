export type FeaturedOffer = {
  id: string;
  badge: string;
  label: string;
  title: string;
  subtitle: string;
  summary: string;
  bullets: string[];
  process: { title: string; description: string }[];
  differentiators: string[];
  coverage: string[];
  scope: string[];
  onboarding: string[];
  deliverables: string[];
  idealFor: string[];
};

export const socCompletoOffer: FeaturedOffer = {
  id: "soc-completo",
  badge: "Infraestructura crítica",
  label: "Paquete especial",
  title: "SOC Completo para Infraestructuras Críticas",
  subtitle:
    "Monitoreo continuo, detección avanzada y respuesta a incidentes con enfoque en continuidad operativa.",
  summary:
    "Un centro de operaciones de seguridad diseñado para entornos de misión crítica, con visibilidad total, gobernanza y respuesta coordinada.",
  bullets: [
    "Cobertura alineada a la criticidad del negocio y requisitos regulatorios.",
    "Monitoreo integral de identidades, endpoints, red y nube con correlación avanzada.",
    "Capacidad de respuesta rápida y comunicación ejecutiva en incidentes mayores."
  ],
  process: [
    {
      title: "Detección y triage",
      description:
        "Correlacionamos señales, priorizamos alertas y validamos impacto operativo."
    },
    {
      title: "Respuesta coordinada",
      description:
        "Contención, erradicación y recuperación con playbooks adaptados al entorno."
    },
    {
      title: "Continuidad y mejora",
      description:
        "Lecciones aprendidas, ajuste de reglas y fortalecimiento continuo."
    }
  ],
  differentiators: [
    "Equipo senior con enfoque en continuidad operativa y compliance.",
    "Gobernanza clara con KPIs, SLAs acordados y comunicación ejecutiva.",
    "Modelo flexible: operamos con tus herramientas o integramos la capa SOC."
  ],
  coverage: [
    "Modalidades disponibles 24/7 o 8x5 según criticidad.",
    "Escalamiento por severidad y impacto operativo.",
    "Coordinación con equipos internos y terceros."
  ],
  scope: [
    "Endpoints y servidores críticos.",
    "Identidad y directorio (AD/IdP).",
    "Cloud y workloads híbridos.",
    "Red, perímetro y aplicaciones clave.",
    "SIEM/SOAR disponibles en tu stack."
  ],
  onboarding: [
    "Levantamiento de contexto y activos críticos.",
    "Baseline de comportamiento y hardening inicial.",
    "Definición de reglas, alertas y rutas de escalamiento."
  ],
  deliverables: [
    "Informe mensual ejecutivo",
    "Informe semanal operativo",
    "Reporte de incidentes (post-mortem)",
    "Matriz de riesgos / hallazgos priorizados",
    "Recomendaciones de hardening",
    "Evidencias y trazabilidad"
  ],
  idealFor: [
    "Clínicas y hospitales",
    "Entidades financieras",
    "Gobierno / sector público",
    "Industria / energía / logística"
  ]
};
