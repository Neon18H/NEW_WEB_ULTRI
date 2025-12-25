"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            <Sparkles className="h-4 w-4 text-cyan-200" />
            Consultora enterprise · IA, Ciberseguridad, Software
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance font-display text-4xl font-semibold text-white md:text-5xl"
          >
            Soluciones tecnológicas críticas con visión estratégica y ejecución
            impecable.
          </motion.h1>
          <p className="text-balance text-lg text-slate-300">
            UltriAtech diseña e implementa inteligencia artificial, seguridad y
            software enterprise para optimizar operaciones, reducir riesgo y
            acelerar crecimiento con control.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contacto">
                Agendar diagnóstico <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/servicios">Ver servicios</Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-200" />
              Seguridad y compliance desde el diseño.
            </div>
            <div className="flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4 text-cyan-200" />
              Roadmaps realistas y entregas medibles.
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glass">
          <p className="text-sm font-semibold text-white">Enfoque enterprise</p>
          <ul className="space-y-4 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-white">IA aplicada:</span>
              <span className="ml-2">
                copilots internos, RAG seguro y automatizaciones.
              </span>
            </li>
            <li>
              <span className="font-semibold text-white">Ciberseguridad:</span>
              <span className="ml-2">
                evaluación, hardening y detección para reducir riesgos.
              </span>
            </li>
            <li>
              <span className="font-semibold text-white">Software:</span>
              <span className="ml-2">
                arquitectura escalable, integraciones y DevOps.
              </span>
            </li>
          </ul>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-xs text-cyan-100">
            Trabajamos con métricas, KPIs y gobernanza. Sin promesas imposibles.
          </div>
        </div>
      </div>
    </section>
  );
}
