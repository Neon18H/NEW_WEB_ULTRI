import { solutions } from "@/data/site";

export default function Solutions() {
  return (
    <section id="soluciones" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Soluciones</p>
          <h2 className="text-3xl font-semibold text-white">
            Soluciones alineadas a tu industria
          </h2>
          <p className="text-slate-300">
            Estrategias específicas para acelerar resultados en sectores clave.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.title} className="glass-card space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {solution.title}
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-slate-300">
                  <p>
                    <span className="font-semibold text-slate-200">Problema:</span>{" "}
                    {solution.problem}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">Enfoque:</span>{" "}
                    {solution.approach}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-200">Resultado:</span>{" "}
                    {solution.result}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
