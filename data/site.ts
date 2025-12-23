import {
  Bot,
  ShieldCheck,
  Code2,
  Utensils,
  Landmark,
  ShoppingCart,
  GraduationCap,
  Building2,
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Lock,
  Network,
  Radar,
  Wrench
} from "lucide-react";

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos", href: "#casos" },
  { label: "Proceso", href: "#proceso" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" }
];

export const trustBullets = [
  "Entrega rápida",
  "Enfoque seguro",
  "Arquitectura escalable"
];

export const services = [
  {
    title: "Inteligencia Artificial",
    icon: Bot,
    description: "Automatización, analítica avanzada y agentes inteligentes para operaciones críticas.",
    bullets: ["Automatización", "Chatbots y RAG", "Analítica & agentes"],
    cta: "Explorar IA"
  },
  {
    title: "Ciberseguridad",
    icon: ShieldCheck,
    description: "Protección activa y cumplimiento continuo para reducir riesgos y fraudes.",
    bullets: ["Pentesting", "SOC & monitoreo", "OSINT & auditorías"],
    cta: "Explorar seguridad"
  },
  {
    title: "Desarrollo de Software",
    icon: Code2,
    description: "Plataformas web, mobile y APIs listas para crecer con tu negocio.",
    bullets: ["Web apps & APIs", "Mobile & integraciones", "DevOps & Cloud"],
    cta: "Explorar desarrollo"
  }
];

export const solutions = [
  {
    title: "Restaurantes",
    icon: Utensils,
    problem: "Operaciones manuales y poca visibilidad de inventario.",
    approach: "Automatización con IA + dashboards en tiempo real.",
    result: "Menos desperdicio y decisiones basadas en datos."
  },
  {
    title: "Fintech",
    icon: Landmark,
    problem: "Riesgo operativo y fraudes emergentes.",
    approach: "Seguridad por capas + monitoreo inteligente.",
    result: "Reducción de incidentes y mayor cumplimiento."
  },
  {
    title: "Retail",
    icon: ShoppingCart,
    problem: "Experiencias fragmentadas y baja conversión.",
    approach: "Personalización con IA + arquitectura escalable.",
    result: "Mayor ticket promedio y fidelización."
  },
  {
    title: "Educación",
    icon: GraduationCap,
    problem: "Procesos lentos y falta de analítica académica.",
    approach: "Plataformas digitales y analítica predictiva.",
    result: "Mejores resultados y eficiencia."
  },
  {
    title: "Empresas tradicionales",
    icon: Building2,
    problem: "Legacy tecnológico y baja automatización.",
    approach: "Modernización de software + IA aplicada.",
    result: "Transición ordenada y competitividad."
  }
];

export const processSteps = [
  {
    title: "Descubrimiento",
    description: "Diagnóstico profundo para mapear oportunidades de impacto.",
    icon: Radar
  },
  {
    title: "Diseño",
    description: "Arquitectura segura, roadmap y prototipos validados.",
    icon: Wrench
  },
  {
    title: "Implementación",
    description: "Desarrollo ágil, QA continuo y despliegue controlado.",
    icon: Cpu
  },
  {
    title: "Soporte & Mejora",
    description: "Monitoreo, optimizaciones y evolución continua.",
    icon: Network
  }
];

export const caseStudies = [
  {
    title: "Reducción de tiempos operativos con IA",
    description: "Automatización de flujos críticos con agentes inteligentes.",
    metrics: [
      "Hasta 35% menos tiempos manuales (ejemplo típico)",
      "+20% visibilidad operativa (resultado esperable)"
    ]
  },
  {
    title: "Endurecimiento de identidad y reducción de riesgos",
    description: "Modelo Zero Trust con monitoreo y respuesta temprana.",
    metrics: [
      "Disminución de incidentes (estimación habitual)",
      "Mejoras en cumplimiento continuo"
    ]
  },
  {
    title: "Plataforma SaaS escalable",
    description: "Arquitectura cloud lista para crecimiento regional.",
    metrics: [
      "Escalabilidad 3x sin afectar performance",
      "Tiempo de despliegue reducido (benchmark interno)"
    ]
  }
];

export const techStack = [
  { label: "AWS", icon: Cloud },
  { label: "Azure", icon: Cloud },
  { label: "Docker", icon: Lock },
  { label: "Kubernetes", icon: Network },
  { label: "Python", icon: Cpu },
  { label: "Node.js", icon: GitBranch },
  { label: "PostgreSQL", icon: Database },
  { label: "SOC", icon: ShieldCheck }
];

export const faqs = [
  {
    question: "¿Cómo se calcula el costo del proyecto?",
    answer: "Evaluamos alcance, complejidad y urgencia. Entregamos una propuesta clara con fases y entregables."
  },
  {
    question: "¿Qué tiempos de entrega manejan?",
    answer: "Depende del alcance. La mayoría de MVPs se entregan entre 4 y 10 semanas."
  },
  {
    question: "¿Firmamos acuerdos de confidencialidad?",
    answer: "Sí, trabajamos con NDA y protocolos de seguridad desde la fase cero."
  },
  {
    question: "¿Ofrecen mantenimiento continuo?",
    answer: "Sí. Tenemos planes de soporte, monitoreo y mejoras evolutivas."
  },
  {
    question: "¿Cómo aseguran la ciberseguridad?",
    answer: "Aplicamos hardening, pentesting y monitoreo activo durante todo el ciclo."
  },
  {
    question: "¿Pueden integrarse con mi stack actual?",
    answer: "Sí. Diseñamos integraciones con APIs, ERPs y sistemas heredados."
  },
  {
    question: "¿Qué incluye el diagnóstico inicial?",
    answer: "Auditoría técnica, workshops y un roadmap priorizado de impacto."
  }
];

export const contactServices = [
  "Inteligencia Artificial",
  "Ciberseguridad",
  "Desarrollo de Software",
  "Consultoría integral"
];

export const footerLinks = [
  { label: "Política de privacidad", href: "#" },
  { label: "Términos", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X/Twitter", href: "#" }
];
