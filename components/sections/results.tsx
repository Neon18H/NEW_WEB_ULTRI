const results = [
  {
    title: "Ejemplo de impacto: soporte",
    metric: "-35% tiempo de respuesta",
    description:
      "Chatbots internos con RAG para resolver dudas recurrentes de equipos."
  },
  {
    title: "Ejemplo de impacto: seguridad",
    metric: "+60% cobertura de controles",
    description:
      "Programa de hardening y gestión de vulnerabilidades con KPIs."
  },
  {
    title: "Ejemplo de impacto: operaciones",
    metric: "-25% tareas manuales",
    description:
      "Automatizaciones inteligentes integradas a ERP/CRM."
  }
];

export function ResultsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Resultados típicos
          </p>
          <h2 className="section-title">Ejemplos de impacto medible.</h2>
          <p className="section-subtitle">
            Impactos basados en proyectos similares. Cada iniciativa se valida
            con métricas reales.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((result) => (
            <div
              key={result.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                {result.title}
              </p>
              <p className="mt-4 text-2xl font-semibold text-white">
                {result.metric}
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
