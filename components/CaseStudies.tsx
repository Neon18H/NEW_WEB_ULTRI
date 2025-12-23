import { caseStudies } from "@/data/site";

export default function CaseStudies() {
  return (
    <section id="casos" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Casos</p>
          <h2 className="text-3xl font-semibold text-white">
            Resultados típicos que podemos construir
          </h2>
          <p className="text-slate-300">
            Ejemplos ilustrativos basados en proyectos reales, sin atribución a clientes
            específicos.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.title} className="glass-card space-y-4 p-6">
              <h3 className="text-lg font-semibold text-white">{caseStudy.title}</h3>
              <p className="text-sm text-slate-300">{caseStudy.description}</p>
              <ul className="space-y-2 text-sm text-slate-300">
                {caseStudy.metrics.map((metric) => (
                  <li key={metric} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
