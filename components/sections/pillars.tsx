import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories } from "@/lib/services";

export function PillarsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Tres pilares
          </p>
          <h2 className="section-title">Capacidades claras por línea.</h2>
          <p className="section-subtitle">
            Cada línea de servicio tiene enfoque, entregables y equipos
            especializados.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="h-full">
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-300">{category.tagline}</p>
                <ul className="space-y-2 text-xs text-slate-400">
                  {category.services.slice(0, 3).map((service) => (
                    <li key={service.slug}>• {service.title}</li>
                  ))}
                </ul>
                <Link
                  href={`/servicios/${category.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-200 hover:text-cyan-100"
                >
                  Ver servicios <ArrowUpRight className="h-3 w-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
