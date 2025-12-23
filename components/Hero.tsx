"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { trustBullets } from "@/data/site";

export default function Hero() {
  return (
    <section className="section-padding" id="inicio">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
            Inteligencia aplicada a negocio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
            IA + Ciberseguridad + Software para escalar tu negocio
          </h1>
          <p className="text-lg text-slate-300">
            UltriAtech diseña y ejecuta soluciones tecnológicas de alto impacto para
            organizaciones B2B que necesitan velocidad, seguridad y escalabilidad.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow-sm transition hover:bg-cyan-400 focus-ring"
            >
              Agendar diagnóstico
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/60 hover:text-cyan-200 focus-ring"
            >
              Ver servicios
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {trustBullets.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-radial-tech opacity-80" />
          <div className="relative space-y-6 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Dashboard</p>
                <p className="text-lg font-semibold">Centro de operaciones</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-cyan-200">
                Live
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {["IA", "Seguridad", "Escalabilidad", "DevOps"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase text-slate-400">{label}</p>
                  <p className="text-lg font-semibold text-white">Optimizado</p>
                  <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                    <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400" />
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-200">Métricas en tiempo real</p>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs text-slate-300">
                <div>
                  <p className="text-lg font-semibold text-white">+28%</p>
                  <p>Eficiencia</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">99.9%</p>
                  <p>Uptime</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">24/7</p>
                  <p>Monitoreo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
