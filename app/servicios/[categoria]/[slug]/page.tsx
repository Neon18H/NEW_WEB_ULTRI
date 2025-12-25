import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  getAllServices,
  getServiceBySlug,
  type ServiceCategoryId
} from "@/lib/services";

export async function generateStaticParams() {
  return getAllServices().map((service) => ({
    categoria: service.category,
    slug: service.slug
  }));
}

export function generateMetadata({
  params
}: {
  params: { categoria: ServiceCategoryId; slug: string };
}): Metadata {
  const { service } = getServiceBySlug(params.categoria, params.slug);
  if (!service) {
    return { title: "Servicio no encontrado | UltriAtech" };
  }

  return {
    title: `${service.title} | UltriAtech`,
    description: service.summary
  };
}

export default function ServiceDetailPage({
  params
}: {
  params: { categoria: ServiceCategoryId; slug: string };
}) {
  const { category, service } = getServiceBySlug(params.categoria, params.slug);
  if (!category || !service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "UltriAtech"
    },
    areaServed: "Latam",
    serviceType: category.name
  };

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="section-padding">
        <div className="mx-auto max-w-6xl space-y-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Servicios", href: "/servicios" },
              { label: category.name, href: `/servicios/${category.id}` },
              { label: service.title }
            ]}
          />
          <div className="space-y-4">
            <h1 className="section-title">{service.title}</h1>
            <p className="section-subtitle">{service.summary}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <Badge key={tag} variant="subtle">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contacto">Agendar diagnóstico</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacto">Solicitar propuesta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Card>
              <CardContent className="space-y-4 p-6">
                <h2 className="text-xl font-semibold text-white">Overview</h2>
                <p className="text-sm text-slate-300">{service.overview}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Problemas que resuelve
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {service.problems.map((problem) => (
                    <li key={problem}>• {problem}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">Entregables</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Proceso paso a paso
                </h3>
                <ol className="space-y-2 text-sm text-slate-300">
                  {service.steps.map((step, index) => (
                    <li key={step}>
                      {index + 1}. {step}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">Ideal para</h3>
                <p className="text-sm text-slate-300">{service.audience}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <Badge key={tool} variant="subtle">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Timeline típico
                </h3>
                <p className="text-sm text-slate-300">{service.timeline}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Requisitos para iniciar
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {service.requirements.map((requirement) => (
                    <li key={requirement}>• {requirement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {service.security ? (
              <Card>
                <CardContent className="space-y-4 p-6">
                  <h3 className="text-lg font-semibold text-white">
                    Seguridad y privacidad
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {service.security.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-10 text-center">
          <h2 className="text-2xl font-semibold text-white">
            ¿Listo para una evaluación detallada?
          </h2>
          <p className="mt-3 text-sm text-cyan-100">
            Coordinemos un diagnóstico para definir alcance, riesgos y recursos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/contacto">Agendar diagnóstico</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contacto">Solicitar propuesta</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
