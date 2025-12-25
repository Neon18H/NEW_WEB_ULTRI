import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contacto | UltriAtech",
  description: "Agenda un diagnóstico o solicita una propuesta con UltriAtech."
};

export default function ContactoPage() {
  return (
    <section className="section-padding">
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
        <ContactForm />
      </div>
    </section>
  );
}
