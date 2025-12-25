export type ServiceCategoryId = "ia" | "ciberseguridad" | "software";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  bullets: string[];
  tags: string[];
  filters: string[];
  overview: string;
  audience: string;
  problems: string[];
  deliverables: string[];
  steps: string[];
  tools: string[];
  timeline: string;
  requirements: string[];
  security?: string[];
  category: ServiceCategoryId;
};

export type ServicePackage = {
  name: string;
  description: string;
  highlights: string[];
  disclaimer: string;
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceCategory = {
  id: ServiceCategoryId;
  name: string;
  tagline: string;
  description: string;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: Service[];
  useCases: string[];
  packages: ServicePackage[];
  faq: ServiceFAQ[];
};

const iaServices: Service[] = [
  {
    slug: "chatbots-rag",
    title: "Chatbots & RAG corporativo",
    summary: "Asistentes con conocimiento interno que responden con precisión.",
    description:
      "Diseñamos asistentes conversacionales conectados a documentos y bases de conocimiento para acelerar soporte, ventas y operaciones.",
    bullets: [
      "Arquitectura RAG segura",
      "Entrenamiento con fuentes internas",
      "Integración con canales existentes"
    ],
    tags: ["RAG", "NLU", "Knowledge Base"],
    filters: ["Automatización", "Data"],
    overview:
      "Implementamos chatbots empresariales con recuperación aumentada para responder con fuentes verificables y trazabilidad.",
    audience: "Equipos de soporte, ventas B2B y operaciones internas.",
    problems: [
      "Respuestas inconsistentes a consultas internas",
      "Tiempo excesivo en onboarding de agentes",
      "Información crítica dispersa"
    ],
    deliverables: [
      "Mapa de conocimiento y fuentes",
      "Asistente entrenado y probado",
      "Guías de uso y mantenimiento"
    ],
    steps: [
      "Discovery de fuentes y casos prioritarios",
      "Diseño de arquitectura RAG y seguridad",
      "Implementación e integración multicanal",
      "Pruebas, ajuste y handover"
    ],
    tools: ["OpenAI compatible", "Pinecone/Weaviate", "Next.js", "Azure/AWS"],
    timeline: "4 a 8 semanas",
    requirements: [
      "Acceso a documentos internos",
      "Equipo de stakeholders por área",
      "Definición de políticas de acceso"
    ],
    security: [
      "Control de acceso por roles",
      "Cifrado en tránsito y reposo",
      "Registros de auditoría"
    ],
    category: "ia"
  },
  {
    slug: "automatizacion-inteligente",
    title: "Automatización inteligente",
    summary: "Workflows y agentes que eliminan tareas repetitivas.",
    description:
      "Automatizamos procesos críticos con agentes y orquestación inteligente para reducir tiempos y errores operativos.",
    bullets: [
      "Mapeo de procesos",
      "Bots con decisiones contextualizadas",
      "Monitoreo y métricas"
    ],
    tags: ["Agents", "Workflow", "Ops"],
    filters: ["Automatización"],
    overview:
      "Creamos automatizaciones seguras que se integran con ERP, CRM y herramientas internas.",
    audience: "Operaciones, finanzas, RRHH y backoffice.",
    problems: [
      "Procesos manuales lentos",
      "Errores de carga de datos",
      "Falta de visibilidad sobre tareas"
    ],
    deliverables: [
      "Mapa de procesos priorizados",
      "Automatizaciones implementadas",
      "Panel de monitoreo"
    ],
    steps: [
      "Levantamiento de procesos",
      "Diseño de automatización",
      "Implementación y pruebas",
      "Capacitación y monitoreo"
    ],
    tools: ["Python", "LangGraph", "Zapier/Make", "APIs internas"],
    timeline: "3 a 6 semanas",
    requirements: [
      "Documentación de procesos",
      "Acceso a APIs",
      "Owner por proceso"
    ],
    category: "ia"
  },
  {
    slug: "analitica-ia",
    title: "Analítica & BI con IA",
    summary: "Insights accionables para decisiones rápidas.",
    description:
      "Potenciamos analítica con modelos predictivos y dashboards inteligentes para liderazgo ejecutivo.",
    bullets: [
      "Forecasting y alertas",
      "Dashboards ejecutivos",
      "Governance de datos"
    ],
    tags: ["BI", "Forecast", "Data"],
    filters: ["Data"],
    overview:
      "Unificamos datos clave y construimos modelos de proyección confiables para planificación.",
    audience: "Dirección, analítica, finanzas y operaciones.",
    problems: [
      "Datos dispersos y sin contexto",
      "Reportes manuales",
      "Dificultad para proyectar"
    ],
    deliverables: [
      "Modelo de datos",
      "Dashboards con KPIs",
      "Modelos predictivos"
    ],
    steps: [
      "Diagnóstico de fuentes",
      "Modelado y preparación",
      "Construcción de dashboards",
      "Iteración con stakeholders"
    ],
    tools: ["Power BI", "Looker", "dbt", "Python"],
    timeline: "5 a 10 semanas",
    requirements: [
      "Acceso a bases de datos",
      "Definición de KPIs",
      "Patrocinio ejecutivo"
    ],
    category: "ia"
  },
  {
    slug: "clasificacion-extraccion",
    title: "Clasificación y extracción (NLP + OCR)",
    summary: "Procesamiento inteligente de documentos y texto.",
    description:
      "Automatizamos la clasificación y extracción de información crítica en documentos y tickets.",
    bullets: [
      "OCR y parsing",
      "Modelos de clasificación",
      "Validación humana"
    ],
    tags: ["OCR", "NLP", "Automation"],
    filters: ["Automatización", "Data"],
    overview:
      "Diseñamos pipelines de extracción confiables para facturas, contratos y formularios.",
    audience: "Operaciones, legal, finanzas.",
    problems: [
      "Altos tiempos de procesamiento",
      "Errores en captura",
      "Falta de trazabilidad"
    ],
    deliverables: [
      "Pipeline OCR + NLP",
      "Modelos entrenados",
      "Panel de revisión"
    ],
    steps: [
      "Análisis de documentos",
      "Diseño del pipeline",
      "Entrenamiento y validación",
      "Integración con sistemas"
    ],
    tools: ["AWS Textract", "spaCy", "Python", "Docker"],
    timeline: "4 a 7 semanas",
    requirements: [
      "Dataset de documentos",
      "Criterios de clasificación",
      "Equipo de validación"
    ],
    category: "ia"
  },
  {
    slug: "recomendadores",
    title: "Sistemas de recomendación",
    summary: "Experiencias personalizadas para aumentar conversión.",
    description:
      "Diseñamos motores de recomendación basados en comportamiento y contexto.",
    bullets: [
      "Modelos de afinidad",
      "Segmentación dinámica",
      "A/B testing"
    ],
    tags: ["Recomendación", "Personalización"],
    filters: ["Data"],
    overview:
      "Mejoramos la personalización para e-commerce, contenido y productos digitales.",
    audience: "Equipos de producto y growth.",
    problems: [
      "Baja conversión",
      "Experiencias genéricas",
      "Difícil priorización de catálogo"
    ],
    deliverables: [
      "Modelo de recomendación",
      "API de scoring",
      "Panel de métricas"
    ],
    steps: [
      "Análisis de datos históricos",
      "Selección de modelo",
      "Implementación y pruebas",
      "Optimización continua"
    ],
    tools: ["Python", "TensorFlow", "BigQuery", "APIs"],
    timeline: "6 a 12 semanas",
    requirements: [
      "Datos históricos suficientes",
      "KPIs de conversión",
      "Capacidad de experimentación"
    ],
    category: "ia"
  },
  {
    slug: "mlops-basico",
    title: "MLOps básico",
    summary: "Deploy, monitoreo y gobierno de modelos.",
    description:
      "Implementamos prácticas de MLOps para asegurar modelos confiables y reproducibles.",
    bullets: [
      "Pipelines de despliegue",
      "Monitoreo de drift",
      "Versionado"
    ],
    tags: ["MLOps", "DevOps"],
    filters: ["Automatización"],
    overview:
      "Aseguramos que tus modelos se mantengan estables en producción.",
    audience: "Equipos de data science y tecnología.",
    problems: [
      "Modelos sin monitoreo",
      "Deploy manual",
      "Dificultad para reproducir"
    ],
    deliverables: [
      "Pipeline CI/CD",
      "Alertas y monitoreo",
      "Documentación técnica"
    ],
    steps: [
      "Auditoría de modelos",
      "Diseño de pipeline",
      "Implementación",
      "Capacitación"
    ],
    tools: ["MLflow", "Docker", "GitHub Actions", "Kubernetes"],
    timeline: "4 a 8 semanas",
    requirements: [
      "Repositorio de modelos",
      "Infraestructura base",
      "Equipo responsable"
    ],
    category: "ia"
  },
  {
    slug: "integracion-ia-productos",
    title: "Integración de IA en productos",
    summary: "Copilots y APIs inteligentes para tu producto.",
    description:
      "Integramos capacidades de IA en productos digitales para mejorar eficiencia y experiencia.",
    bullets: [
      "APIs inteligentes",
      "Copilots internos",
      "UX orientada a negocio"
    ],
    tags: ["Product", "APIs", "Copilot"],
    filters: ["Automatización"],
    overview:
      "Diseñamos experiencias AI-ready alineadas con roadmap de producto.",
    audience: "Product managers y equipos de ingeniería.",
    problems: [
      "UX sin personalización",
      "Procesos manuales en producto",
      "Falta de diferenciación"
    ],
    deliverables: [
      "Diseño funcional",
      "APIs integradas",
      "Guías de uso"
    ],
    steps: [
      "Discovery de oportunidades",
      "Prototipo y validación",
      "Implementación",
      "Iteración"
    ],
    tools: ["Next.js", "FastAPI", "OpenAI compatible", "Vector DB"],
    timeline: "6 a 12 semanas",
    requirements: [
      "Roadmap definido",
      "Equipo de producto",
      "Acceso a datos"
    ],
    category: "ia"
  }
];

const ciberServices: Service[] = [
  {
    slug: "pentesting-web-api",
    title: "Pentesting Web/API (OWASP)",
    summary: "Pruebas ofensivas controladas para reducir riesgos.",
    description:
      "Evaluamos aplicaciones web y APIs bajo estándares OWASP para identificar vulnerabilidades críticas.",
    bullets: [
      "Metodología OWASP",
      "Reporte ejecutivo y técnico",
      "Plan de remediación"
    ],
    tags: ["OWASP", "Pentest", "AppSec"],
    filters: ["Defensa"],
    overview:
      "Realizamos pruebas controladas con enfoque en riesgo y priorización.",
    audience: "CISO, CTO, equipos de desarrollo.",
    problems: [
      "Vulnerabilidades no detectadas",
      "Riesgo reputacional",
      "Cumplimiento insuficiente"
    ],
    deliverables: [
      "Reporte de hallazgos",
      "Plan de remediación",
      "Revisión de fixes"
    ],
    steps: [
      "Alcance y reglas de prueba",
      "Ejecución del pentest",
      "Reporte y workshop",
      "Revalidación"
    ],
    tools: ["Burp Suite", "OWASP ZAP", "Kali", "Nmap"],
    timeline: "2 a 4 semanas",
    requirements: [
      "Ambiente de pruebas",
      "Contactos de seguridad",
      "Ventana de ejecución"
    ],
    security: [
      "Acuerdo de alcance",
      "Manejo seguro de evidencias",
      "Confidencialidad"
    ],
    category: "ciberseguridad"
  },
  {
    slug: "hardening",
    title: "Hardening Linux/Windows/Cloud",
    summary: "Configuraciones seguras para infraestructura crítica.",
    description:
      "Fortalecemos sistemas operativos y entornos cloud con benchmarks y controles.",
    bullets: [
      "Benchmarks CIS",
      "Configuraciones seguras",
      "Validación continua"
    ],
    tags: ["CIS", "Infra", "Cloud"],
    filters: ["Defensa"],
    overview:
      "Reducimos superficie de ataque con configuraciones alineadas a mejores prácticas.",
    audience: "Infraestructura, DevOps, seguridad.",
    problems: [
      "Configuraciones débiles",
      "Falta de estandarización",
      "Cumplimiento parcial"
    ],
    deliverables: [
      "Guías hardening",
      "Scripts de configuración",
      "Checklist de control"
    ],
    steps: [
      "Auditoría inicial",
      "Definición de baseline",
      "Implementación",
      "Validación"
    ],
    tools: ["CIS Benchmarks", "Ansible", "Terraform", "AWS/Azure"],
    timeline: "3 a 6 semanas",
    requirements: [
      "Inventario de activos",
      "Accesos privilegiados",
      "Ventana de cambios"
    ],
    category: "ciberseguridad"
  },
  {
    slug: "gestion-vulnerabilidades",
    title: "Gestión de vulnerabilidades",
    summary: "Visibilidad continua y priorización inteligente.",
    description:
      "Implementamos programas de scanning, priorización y remediación para reducir exposición.",
    bullets: [
      "Scanning continuo",
      "Priorización por riesgo",
      "Roadmap de remediación"
    ],
    tags: ["Vuln Mgmt", "Risk"],
    filters: ["Defensa"],
    overview:
      "Diseñamos programas de gestión de vulnerabilidades alineados a tu madurez.",
    audience: "Equipos de seguridad y compliance.",
    problems: [
      "Backlog crítico",
      "Falta de priorización",
      "Baja visibilidad"
    ],
    deliverables: [
      "Tablero de riesgos",
      "Plan de remediación",
      "KPIs de vulnerabilidades"
    ],
    steps: [
      "Levantamiento de activos",
      "Configuración de escaneo",
      "Análisis y priorización",
      "Seguimiento continuo"
    ],
    tools: ["Tenable", "Nessus", "Qualys", "Jira"],
    timeline: "4 a 8 semanas",
    requirements: [
      "Inventario actualizado",
      "Acceso a redes",
      "Responsables de remediación"
    ],
    category: "ciberseguridad"
  },
  {
    slug: "threat-hunting",
    title: "Threat Hunting & Detección",
    summary: "Detección proactiva con casos de uso en SIEM.",
    description:
      "Creamos casos de uso y hunting para detectar actividad sospechosa antes de incidentes.",
    bullets: [
      "Hipótesis de ataque",
      "Casos de uso SIEM",
      "Playbooks de respuesta"
    ],
    tags: ["SIEM", "SOC", "Detection"],
    filters: ["Defensa"],
    overview:
      "Incrementamos la capacidad de detección con análisis avanzado de eventos.",
    audience: "SOC, blue team, CISO.",
    problems: [
      "Alertas ruidosas",
      "Falta de visibilidad",
      "Respuestas tardías"
    ],
    deliverables: [
      "Casos de uso SIEM",
      "Playbooks",
      "Reporte de hallazgos"
    ],
    steps: [
      "Definición de hipótesis",
      "Construcción de reglas",
      "Hunting y validación",
      "Transferencia de conocimiento"
    ],
    tools: ["Splunk", "Elastic", "Microsoft Sentinel"],
    timeline: "4 a 8 semanas",
    requirements: [
      "Acceso a logs",
      "SIEM operativo",
      "Equipo SOC"
    ],
    category: "ciberseguridad"
  },
  {
    slug: "osint-threat-intel",
    title: "OSINT / Threat Intelligence",
    summary: "Monitoreo de marca e indicadores de compromiso.",
    description:
      "Monitoreamos fuentes abiertas para detectar riesgos emergentes y campañas.",
    bullets: [
      "Vigilancia de marca",
      "Alertas de IOCs",
      "Informes ejecutivos"
    ],
    tags: ["OSINT", "Threat Intel"],
    filters: ["Defensa"],
    overview:
      "Ofrecemos inteligencia accionable para prevenir incidentes.",
    audience: "CISO, riesgos, compliance.",
    problems: [
      "Falta de visibilidad externa",
      "Campañas maliciosas",
      "Amenazas no detectadas"
    ],
    deliverables: [
      "Monitoreo continuo",
      "Alertas tempranas",
      "Informes mensuales"
    ],
    steps: [
      "Definición de fuentes",
      "Recolección y análisis",
      "Generación de alertas",
      "Briefings"
    ],
    tools: ["MISP", "Recorded Future", "OSINT Framework"],
    timeline: "3 a 6 semanas",
    requirements: [
      "Dominios y activos clave",
      "Contactos de respuesta",
      "Políticas de escalamiento"
    ],
    category: "ciberseguridad"
  },
  {
    slug: "security-assessment",
    title: "Security Assessment (ISO 27001 readiness)",
    summary: "Evaluación de controles sin prometer certificación.",
    description:
      "Evaluamos tu postura de seguridad frente a marcos ISO 27001 y mejores prácticas.",
    bullets: [
      "Gap analysis",
      "Roadmap de controles",
      "Workshops ejecutivos"
    ],
    tags: ["ISO 27001", "Governance"],
    filters: ["Defensa"],
    overview:
      "Definimos un plan realista para mejorar controles y cumplimiento.",
    audience: "Dirección, compliance, seguridad.",
    problems: [
      "Controles incompletos",
      "Falta de documentación",
      "Riesgos no priorizados"
    ],
    deliverables: [
      "Reporte de brechas",
      "Roadmap de mejoras",
      "Matriz de controles"
    ],
    steps: [
      "Revisión documental",
      "Entrevistas y evidencias",
      "Análisis de brechas",
      "Plan de acción"
    ],
    tools: ["ISO 27001", "NIST", "CIS"],
    timeline: "4 a 8 semanas",
    requirements: [
      "Documentación existente",
      "Stakeholders claves",
      "Acceso a políticas"
    ],
    category: "ciberseguridad"
  },
  {
    slug: "respuesta-incidentes",
    title: "Respuesta a incidentes (IR/DFIR)",
    summary: "Gestión estructurada ante incidentes críticos.",
    description:
      "Apoyamos la contención, análisis y recuperación ante incidentes de seguridad.",
    bullets: [
      "Contención rápida",
      "Análisis forense",
      "Plan de recuperación"
    ],
    tags: ["IR", "DFIR", "Forensics"],
    filters: ["Defensa"],
    overview:
      "Acompañamos desde la detección hasta la recuperación con protocolos claros.",
    audience: "CISO, equipos de TI, legal.",
    problems: [
      "Tiempo de respuesta lento",
      "Falta de procedimientos",
      "Impacto operativo"
    ],
    deliverables: [
      "Informe de incidente",
      "Plan de remediación",
      "Recomendaciones"
    ],
    steps: [
      "Activación del plan",
      "Contención",
      "Análisis forense",
      "Recuperación"
    ],
    tools: ["EDR", "SIEM", "Forensic suites"],
    timeline: "2 a 6 semanas",
    requirements: [
      "Plan de respuesta",
      "Contactos críticos",
      "Accesos de emergencia"
    ],
    category: "ciberseguridad"
  }
];

const softwareServices: Service[] = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo web",
    summary: "Portales y dashboards enterprise.",
    description:
      "Construimos experiencias web robustas orientadas a performance y escalabilidad.",
    bullets: [
      "Arquitectura modular",
      "UX centrada en negocio",
      "Stack moderno"
    ],
    tags: ["Web", "Product"],
    filters: ["DevOps"],
    overview:
      "Desarrollamos portales y plataformas con foco en calidad y rendimiento.",
    audience: "Empresas con operaciones digitales críticas.",
    problems: [
      "Portales obsoletos",
      "Experiencia poco eficiente",
      "Dificultad para escalar"
    ],
    deliverables: [
      "Arquitectura front-end",
      "Componentes reutilizables",
      "Documentación técnica"
    ],
    steps: [
      "Discovery funcional",
      "Diseño y prototipo",
      "Implementación",
      "QA y lanzamiento"
    ],
    tools: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    timeline: "6 a 12 semanas",
    requirements: [
      "Requerimientos definidos",
      "Stakeholders claves",
      "Roadmap de producto"
    ],
    category: "software"
  },
  {
    slug: "apis-microservicios",
    title: "APIs & Microservicios",
    summary: "Backends escalables y resilientes.",
    description:
      "Diseñamos APIs y microservicios con foco en disponibilidad y seguridad.",
    bullets: [
      "Diseño orientado a dominios",
      "Observabilidad",
      "Escalabilidad"
    ],
    tags: ["API", "Microservices"],
    filters: ["DevOps"],
    overview:
      "Arquitecturas preparadas para crecimiento y multi-tenant.",
    audience: "Equipos de ingeniería y arquitectura.",
    problems: [
      "Monolitos rígidos",
      "Baja disponibilidad",
      "Integraciones lentas"
    ],
    deliverables: [
      "Diseño de APIs",
      "Servicios implementados",
      "Documentación"
    ],
    steps: [
      "Modelado de dominio",
      "Diseño API",
      "Implementación",
      "Observabilidad"
    ],
    tools: ["Node.js", "Go", "PostgreSQL", "Kubernetes"],
    timeline: "8 a 16 semanas",
    requirements: [
      "Dominio claro",
      "Infraestructura base",
      "Plan de escalamiento"
    ],
    category: "software"
  },
  {
    slug: "integraciones",
    title: "Integraciones (ERP/CRM/pagos)",
    summary: "Conectividad segura entre sistemas críticos.",
    description:
      "Integramos sistemas empresariales con APIs y middleware seguro.",
    bullets: [
      "Conectores seguros",
      "Mapeo de datos",
      "Pruebas end-to-end"
    ],
    tags: ["Integration", "ERP", "CRM"],
    filters: ["DevOps"],
    overview:
      "Integramos plataformas para eliminar silos de información.",
    audience: "Operaciones, TI, finanzas.",
    problems: [
      "Procesos duplicados",
      "Errores en sincronización",
      "Datos inconsistentes"
    ],
    deliverables: [
      "Arquitectura de integración",
      "Conectores implementados",
      "Documentación"
    ],
    steps: [
      "Levantamiento de sistemas",
      "Diseño de integración",
      "Implementación y pruebas",
      "Monitoreo"
    ],
    tools: ["MuleSoft", "Zapier", "REST/GraphQL", "Kafka"],
    timeline: "4 a 10 semanas",
    requirements: [
      "Acceso a APIs",
      "Mapa de datos",
      "Responsables técnicos"
    ],
    category: "software"
  },
  {
    slug: "devops",
    title: "DevOps & Observabilidad",
    summary: "CI/CD, infraestructura y monitoreo continuo.",
    description:
      "Implementamos prácticas DevOps para acelerar entregas con estabilidad.",
    bullets: [
      "Pipelines CI/CD",
      "Infraestructura como código",
      "Observabilidad"
    ],
    tags: ["DevOps", "CI/CD"],
    filters: ["DevOps"],
    overview:
      "Mejoramos la confiabilidad y velocidad de despliegue.",
    audience: "Equipos de ingeniería y operaciones.",
    problems: [
      "Deploys manuales",
      "Falta de monitoreo",
      "Incidentes frecuentes"
    ],
    deliverables: [
      "Pipelines CI/CD",
      "Dashboards de observabilidad",
      "Guías operativas"
    ],
    steps: [
      "Evaluación de pipeline actual",
      "Diseño DevOps",
      "Implementación",
      "Entrenamiento"
    ],
    tools: ["GitHub Actions", "Docker", "Terraform", "Grafana"],
    timeline: "4 a 8 semanas",
    requirements: [
      "Repositorio en control",
      "Accesos a infra",
      "Entorno de staging"
    ],
    category: "software"
  },
  {
    slug: "arquitectura-escalabilidad",
    title: "Arquitectura y escalabilidad",
    summary: "Diseños cloud-ready para crecimiento sostenido.",
    description:
      "Diseñamos arquitecturas resilientes que soportan crecimiento y cumplimiento.",
    bullets: [
      "Cloud readiness",
      "Diseño resiliente",
      "Optimización de costos"
    ],
    tags: ["Architecture", "Cloud"],
    filters: ["DevOps"],
    overview:
      "Diseñamos estrategias para migración y escalabilidad.",
    audience: "CTO, arquitectura, infraestructura.",
    problems: [
      "Escalamiento ineficiente",
      "Costos impredecibles",
      "Arquitecturas rígidas"
    ],
    deliverables: [
      "Blueprint de arquitectura",
      "Roadmap de migración",
      "Recomendaciones técnicas"
    ],
    steps: [
      "Assessment técnico",
      "Diseño de arquitectura",
      "Plan de migración",
      "Acompañamiento"
    ],
    tools: ["AWS", "Azure", "Kubernetes", "Terraform"],
    timeline: "6 a 10 semanas",
    requirements: [
      "Documentación técnica",
      "Acceso a infra",
      "Patrocinio técnico"
    ],
    category: "software"
  },
  {
    slug: "mantenimiento-evolucion",
    title: "Mantenimiento y evolución",
    summary: "Soporte continuo y roadmap de mejoras.",
    description:
      "Aseguramos continuidad operativa y evolución de plataformas con SLA.",
    bullets: [
      "SLA y soporte",
      "Mejora continua",
      "Roadmap trimestral"
    ],
    tags: ["SLA", "Support"],
    filters: ["DevOps"],
    overview:
      "Operamos y evolucionamos tu software con foco en estabilidad.",
    audience: "Equipos de producto y operaciones.",
    problems: [
      "Deuda técnica",
      "Falta de capacidad interna",
      "Incidentes recurrentes"
    ],
    deliverables: [
      "Plan de soporte",
      "Sprints de mejora",
      "Reportes de SLA"
    ],
    steps: [
      "Diagnóstico de deuda",
      "Plan de soporte",
      "Ejecución",
      "Optimización"
    ],
    tools: ["Jira", "Datadog", "Sentry", "GitHub"],
    timeline: "Contratos trimestrales o anuales",
    requirements: [
      "Acceso a repositorios",
      "Acuerdos de SLA",
      "Backlog priorizado"
    ],
    category: "software"
  }
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "ia",
    name: "Inteligencia Artificial",
    tagline: "Automatización, analítica y copilots empresariales.",
    description:
      "Soluciones de IA aplicadas que combinan datos, automatización y experiencia de usuario.",
    hero: {
      title: "IA aplicada para decisiones y operaciones críticas.",
      subtitle:
        "Diseñamos soluciones con IA que mejoran productividad, precisión y experiencia.",
      ctaPrimary: "Agendar diagnóstico",
      ctaSecondary: "Solicitar propuesta"
    },
    services: iaServices,
    useCases: [
      "Onboarding acelerado para equipos de soporte",
      "Automatización de backoffice con agentes",
      "Detección de patrones en datos financieros",
      "Extracción de contratos y documentos"
    ],
    packages: [
      {
        name: "Starter",
        description: "Prueba controlada en un proceso crítico.",
        highlights: ["1 caso de uso", "Dashboard básico", "Capacitación"],
        disclaimer: "Alcance sujeto a diagnóstico inicial."
      },
      {
        name: "Growth",
        description: "Escala a múltiples áreas con integraciones.",
        highlights: ["3 casos de uso", "Integraciones", "KPIs"],
        disclaimer: "Requiere sponsor ejecutivo y data readiness."
      },
      {
        name: "Enterprise",
        description: "Ecosistema completo con gobierno de datos.",
        highlights: ["MLOps", "Seguridad avanzada", "Roadmap"],
        disclaimer: "Se define con alcance y SLA específico."
      }
    ],
    faq: [
      {
        question: "¿Necesitamos data science interno?",
        answer:
          "No necesariamente. UltriAtech puede liderar el diseño y operar con tu equipo de TI."
      },
      {
        question: "¿Qué tan seguro es el acceso a documentos?",
        answer:
          "Implementamos control por roles, cifrado y políticas de acceso definidas en conjunto."
      }
    ]
  },
  {
    id: "ciberseguridad",
    name: "Ciberseguridad",
    tagline: "Defensa proactiva, evaluación y respuesta.",
    description:
      "Protegemos activos críticos con servicios ofensivos y defensivos enfocados en riesgo.",
    hero: {
      title: "Seguridad para entornos críticos con foco en riesgo real.",
      subtitle:
        "Evaluamos, fortalecemos y monitoreamos tu postura de seguridad con metodologías claras.",
      ctaPrimary: "Agendar diagnóstico",
      ctaSecondary: "Solicitar propuesta"
    },
    services: ciberServices,
    useCases: [
      "Reducción de superficie de ataque en apps críticas",
      "Mejora de controles previo a auditorías",
      "Detección temprana de amenazas internas"
    ],
    packages: [
      {
        name: "Starter",
        description: "Evaluación puntual de riesgos.",
        highlights: ["Pentest", "Reporte ejecutivo", "Checklist"],
        disclaimer: "No implica certificación ni cumplimiento final."
      },
      {
        name: "Growth",
        description: "Programa continuo con priorización.",
        highlights: ["Vuln Mgmt", "Hardening", "KPIs"],
        disclaimer: "Requiere inventario actualizado de activos."
      },
      {
        name: "Enterprise",
        description: "Cobertura integral con SOC y hunting.",
        highlights: ["Threat hunting", "IR plan", "Workshops"],
        disclaimer: "Alcance sujeto a diagnóstico y madurez."
      }
    ],
    faq: [
      {
        question: "¿Ofrecen certificación ISO 27001?",
        answer:
          "No. Realizamos evaluación de readiness y plan de mejora, sin prometer certificación."
      },
      {
        question: "¿Qué pasa si encontramos incidentes?",
        answer:
          "Podemos activar un plan de respuesta a incidentes con protocolos definidos."
      }
    ]
  },
  {
    id: "software",
    name: "Desarrollo de Software",
    tagline: "Arquitectura escalable y productos robustos.",
    description:
      "Construimos plataformas digitales con foco en performance, seguridad y crecimiento.",
    hero: {
      title: "Software enterprise listo para escalar con tu negocio.",
      subtitle:
        "Diseñamos y desarrollamos plataformas digitales con calidad, observabilidad y soporte.",
      ctaPrimary: "Agendar diagnóstico",
      ctaSecondary: "Solicitar propuesta"
    },
    services: softwareServices,
    useCases: [
      "Modernización de portales internos",
      "Microservicios para canales digitales",
      "Integraciones con ERP/CRM y pagos"
    ],
    packages: [
      {
        name: "Starter",
        description: "MVP o módulo específico.",
        highlights: ["Arquitectura base", "Entrega rápida", "QA"],
        disclaimer: "Alcance definido por sprint 0."
      },
      {
        name: "Growth",
        description: "Plataforma en evolución continua.",
        highlights: ["CI/CD", "Observabilidad", "Roadmap"],
        disclaimer: "Requiere backlog priorizado."
      },
      {
        name: "Enterprise",
        description: "Arquitectura completa con SLA.",
        highlights: ["Escalabilidad", "Soporte 24/7", "Gobierno"],
        disclaimer: "Se define contrato y SLA personalizados."
      }
    ],
    faq: [
      {
        question: "¿Trabajan con equipos internos?",
        answer:
          "Sí, podemos co-desarrollar e integrar prácticas y estándares internos."
      },
      {
        question: "¿Qué tecnología recomiendan?",
        answer:
          "Seleccionamos stack según objetivos, seguridad y escalabilidad requeridas."
      }
    ]
  }
];

export const serviceFilters = [
  "Automatización",
  "Data",
  "Defensa",
  "DevOps"
] as const;

export const getServiceBySlug = (
  category: ServiceCategoryId,
  slug: string
) => {
  const categoryData = serviceCategories.find((item) => item.id === category);
  const service = categoryData?.services.find((item) => item.slug === slug);
  return { category: categoryData, service };
};

export const getAllServices = () =>
  serviceCategories.flatMap((category) => category.services);
