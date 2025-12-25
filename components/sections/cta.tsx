import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-10 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Iniciemos un diagnóstico claro y accionable.
          </h2>
          <p className="mt-3 text-sm text-cyan-100">
            Agenda una sesión para definir alcance, riesgos y próximos pasos.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contacto">Agendar diagnóstico</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">Solicitar propuesta</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
