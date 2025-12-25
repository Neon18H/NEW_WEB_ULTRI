import type { Metadata } from "next";

import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Nosotros | UltriAtech",
  description:
    "Conoce la metodología, valores y enfoque enterprise de UltriAtech."
};

const values = [
  {
    title: "Rigurosidad",
    description:
      "Trabajamos con métricas, documentación y procesos claros para asegurar resultados."
  },
  {
    title: "Transparencia",
    description:
      "Indicamos riesgos, dependencias y alcance real desde el inicio."
  },
  {
    title: "Seguridad",
    description:
      "Privacidad, compliance y resiliencia son parte integral de cada proyecto."
  },
  {
    title: "Colaboración",
    description:
      "Integramos equipos internos para acelerar adopción y transferencia de conocimiento."
  }
];

export default function NosotrosPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="section-padding">
        <div className="mx-auto max-w-4xl space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Nosotros
          </p>
          <h1 className="section-title">
            Consultoría especializada para proyectos críticos.
          </h1>
          <p className="section-subtitle">
            UltriAtech acompaña a organizaciones que necesitan ejecutar iniciativas
            complejas en IA, ciberseguridad y software con control, seguridad y
            alineación estratégica.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-white">Nuestra cultura</h2>
            <p className="mt-3 text-sm text-slate-300">
              Operamos con disciplina, documentación y procesos auditables.
              Priorizamos la transferencia de conocimiento para fortalecer equipos
              internos.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-white">
              Metodología de trabajo
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              De discovery a soporte continuo, cada fase tiene criterios de
              validación, métricas y entregables definidos junto con el cliente.
            </p>
          </Card>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="section-title">Valores</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-10">
          <h2 className="text-2xl font-semibold text-white">Por qué UltriAtech</h2>
          <ul className="mt-4 space-y-2 text-sm text-cyan-100">
            <li>• Experiencia multidisciplinaria en IA, ciberseguridad y software.</li>
            <li>• Enfoque enterprise con entregables claros y métricas compartidas.</li>
            <li>• Priorizamos seguridad, privacidad y continuidad operativa.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
