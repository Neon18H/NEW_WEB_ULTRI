import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FAQSection } from "@/components/sections/faq";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceCategories, type ServiceCategoryId } from "@/lib/services";

const categoryMeta: Record<ServiceCategoryId, { title: string; description: string }> = {
  ia: {
    title: "Servicios de IA | UltriAtech",
    description:
      "Soluciones de IA aplicada, automatización y analítica para equipos enterprise."
  },
  ciberseguridad: {
    title: "Servicios de Ciberseguridad | UltriAtech",
    description:
      "Evaluación, hardening y detección para proteger activos críticos."
  },
  software: {
    title: "Servicios de Software | UltriAtech",
    description:
      "Desarrollo web, APIs y arquitectura escalable para entornos enterprise."
  }
};

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({ categoria: category.id }));
}

export function generateMetadata({
  params
}: {
  params: { categoria: ServiceCategoryId };
}): Metadata {
  return categoryMeta[params.categoria] ?? {
    title: "Servicios | UltriAtech",
    description: "Servicios de UltriAtech."
  };
}

export default function CategoryPage({
  params
}: {
  params: { categoria: ServiceCategoryId };
}) {
  const category = serviceCategories.find((item) => item.id === params.categoria);
  if (!category) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            {category.name}
          </p>
          <h1 className="section-title">{category.hero.title}</h1>
          <p className="section-subtitle">{category.hero.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contacto">{category.hero.ctaPrimary}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contacto">{category.hero.ctaSecondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="section-title">Servicios incluidos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {category.services.map((service) => (
              <Card key={service.slug} className="h-full">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-slate-300">{service.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="subtle">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Link
                    href={`/servicios/${category.id}/${service.slug}`}
                    className="text-xs font-semibold text-cyan-200 hover:text-cyan-100"
                  >
                    Ver detalle
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="section-title">Casos de uso típicos</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {category.useCases.map((useCase) => (
              <div
                key={useCase}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-300"
              >
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="section-title">Paquetes sugeridos</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {category.packages.map((pack) => (
              <div
                key={pack.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-lg font-semibold text-white">{pack.name}</p>
                <p className="mt-2 text-sm text-slate-300">
                  {pack.description}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  {pack.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-slate-500">
                  {pack.disclaimer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl space-y-8">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <FAQSection items={category.faq} />
        </div>
      </section>
    </div>
  );
}
