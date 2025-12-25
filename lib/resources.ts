export type ResourceArticle = {
  slug: string;
  title: string;
  summary: string;
  category: "IA" | "Ciberseguridad" | "Software" | "Estrategia";
  readTime: string;
  publishedAt: string;
  body: string[];
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "gobierno-de-ia-en-empresas",
    title: "Gobierno de IA: cómo evitar riesgos al escalar modelos",
    summary:
      "Buenas prácticas para asegurar calidad, trazabilidad y cumplimiento al llevar IA a producción.",
    category: "IA",
    readTime: "6 min",
    publishedAt: "2024-09-18",
    body: [
      "El gobierno de IA comienza con claridad sobre datos, modelos y objetivos de negocio.",
      "Definir responsables, controles de calidad y monitoreo reduce riesgo y mejora adopción.",
      "Un enfoque iterativo permite madurar capacidades sin frenar la innovación."
    ]
  },
  {
    slug: "seguridad-by-design",
    title: "Security by Design en productos digitales",
    summary:
      "Cómo integrar seguridad desde el inicio para evitar retrabajos y riesgos posteriores.",
    category: "Ciberseguridad",
    readTime: "5 min",
    publishedAt: "2024-08-02",
    body: [
      "Incorporar controles desde el diseño reduce la superficie de ataque.",
      "El trabajo conjunto entre seguridad y desarrollo acelera releases sin comprometer compliance.",
      "La seguridad continua necesita visibilidad y métricas claras."
    ]
  },
  {
    slug: "arquitectura-escalable",
    title: "Arquitectura escalable para entornos enterprise",
    summary:
      "Principios para diseñar sistemas resilientes y listos para crecimiento sostenido.",
    category: "Software",
    readTime: "7 min",
    publishedAt: "2024-07-12",
    body: [
      "La escalabilidad requiere claridad de dominios y responsabilidades.",
      "Observabilidad y automatización son claves para mantener estabilidad.",
      "Una arquitectura modular facilita la evolución sin deuda excesiva."
    ]
  },
  {
    slug: "automatizacion-inteligente-b2b",
    title: "Automatización inteligente en operaciones B2B",
    summary:
      "Casos de uso realistas para mejorar productividad sin perder control.",
    category: "Estrategia",
    readTime: "4 min",
    publishedAt: "2024-06-25",
    body: [
      "Priorizar procesos repetitivos con impacto medible genera quick wins.",
      "Los agentes deben operar con reglas claras y monitoreo continuo.",
      "La adopción requiere entrenamiento y métricas compartidas."
    ]
  }
];

export const getResourceBySlug = (slug: string) =>
  resourceArticles.find((article) => article.slug === slug);
