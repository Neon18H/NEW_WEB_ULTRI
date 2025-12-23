import { techStack } from "@/data/site";

export default function TechStack() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Stack</p>
          <h2 className="text-3xl font-semibold text-white">
            Tecnologías listas para escala enterprise
          </h2>
          <p className="text-slate-300">
            Seleccionamos el stack ideal según tus necesidades de rendimiento y seguridad.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.label}
                className="glass-card flex items-center gap-3 px-4 py-3 transition hover:border-cyan-400/60 hover:text-cyan-200"
              >
                <span className="rounded-lg border border-white/10 bg-white/5 p-2">
                  <Icon className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-slate-200">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
