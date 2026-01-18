import type { Metadata } from "next";

import { Suspense } from "react";

import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | UltriAtech",
  description: "Agenda un diagnóstico o solicita una propuesta con UltriAtech."
};

export default function ContactoPage() {
  return (
    <section id="contacto" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Contacto
          </p>
          <h1 className="section-title">Conversemos sobre tu próximo reto.</h1>
          <p className="section-subtitle">
            Cuéntanos el desafío y definiremos un diagnóstico claro y accionable.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="h-40 animate-pulse rounded-xl border border-white/10 bg-white/5" />
          }
        >
          <ContactoClient />
        </Suspense>
      </div>
    </section>
  );
}
