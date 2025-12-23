import Link from "next/link";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Servicios</p>
          <h2 className="text-3xl font-semibold text-white">
            Capacidades estratégicas para transformar tu negocio
          </h2>
          <p className="text-slate-300">
            Integramos IA, seguridad y desarrollo para construir soluciones completas y
            resilientes.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="glass-card flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-6 w-6 text-cyan-300" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    UltriAtech
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100 focus-ring"
                >
                  {service.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
