import type { Metadata } from "next";

import { ServiceExplorer } from "@/components/sections/service-explorer";

export const metadata: Metadata = {
  title: "Servicios | UltriAtech",
  description:
    "Explora el catálogo completo de servicios de IA, ciberseguridad y software."
};

export default function ServiciosPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Servicios
          </p>
          <h1 className="section-title">Catálogo completo por categoría.</h1>
          <p className="section-subtitle">
            Selecciona una línea de servicio y filtra por necesidades específicas.
          </p>
        </div>
        <ServiceExplorer />
      </div>
    </section>
  );
}
