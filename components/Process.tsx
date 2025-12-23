"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/site";

export default function Process() {
  return (
    <section id="proceso" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-200">Proceso</p>
          <h2 className="text-3xl font-semibold text-white">
            Un método claro para entregar resultados
          </h2>
          <p className="text-slate-300">
            Alineamos estrategia, diseño y ejecución con entregables medibles.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card flex h-full flex-col gap-4 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-5 w-5 text-purple-300" aria-hidden="true" />
                  </span>
                  <span className="text-xs text-slate-400">Paso {index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-300">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
