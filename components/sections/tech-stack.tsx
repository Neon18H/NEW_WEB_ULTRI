const stack = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Kubernetes",
  "AWS/Azure",
  "Terraform",
  "Splunk/Elastic",
  "PostgreSQL",
  "Power BI",
  "OpenAI compatible",
  "Vector DBs"
];

export function TechStackSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Tech stack
          </p>
          <h2 className="section-title">Tecnología moderna y confiable.</h2>
          <p className="section-subtitle">
            Seleccionamos herramientas según seguridad, escalabilidad y costo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
