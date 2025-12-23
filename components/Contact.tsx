"use client";

import { useState } from "react";
import { contactServices } from "@/data/site";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacto" className="section-padding">
      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Contacto</p>
            <h2 className="text-3xl font-semibold text-white">
              Conversemos sobre tu próximo salto tecnológico
            </h2>
            <p className="text-slate-300">
              Completa el formulario y agenda un diagnóstico personalizado con nuestro
              equipo.
            </p>
          </div>
          <div className="glass-card space-y-4 p-6 text-sm text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Correo</p>
              <p className="text-base text-white">contacto@ultriatech.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">WhatsApp</p>
              <p className="text-base text-white">+57 000 000 0000</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Ubicación</p>
              <p className="text-base text-white">Colombia / Remoto</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
              Respuesta en menos de 24 horas hábiles. Sin spam, solo resultados.
            </div>
          </div>
        </div>
        <div className="glass-card p-6">
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-200">
                Nombre
                <input
                  required
                  type="text"
                  name="name"
                  aria-label="Nombre"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-ring"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="text-sm text-slate-200">
                Empresa
                <input
                  required
                  type="text"
                  name="company"
                  aria-label="Empresa"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-ring"
                  placeholder="Nombre de la empresa"
                />
              </label>
            </div>
            <label className="text-sm text-slate-200">
              Email
              <input
                required
                type="email"
                name="email"
                aria-label="Email"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-ring"
                placeholder="correo@empresa.com"
              />
            </label>
            <label className="text-sm text-slate-200">
              Servicio
              <select
                required
                name="service"
                aria-label="Servicio"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus-ring"
                defaultValue=""
              >
                <option value="" disabled className="text-slate-500">
                  Selecciona una opción
                </option>
                {contactServices.map((service) => (
                  <option key={service} value={service} className="text-slate-900">
                    {service}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm text-slate-200">
              Mensaje
              <textarea
                required
                name="message"
                aria-label="Mensaje"
                className="mt-2 min-h-[120px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-ring"
                placeholder="Cuéntanos sobre tu reto tecnológico"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300 focus-ring"
            >
              Enviar solicitud
            </button>
            {submitted && (
              <p className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                ¡Listo! Tu solicitud fue enviada. Te contactaremos pronto.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
