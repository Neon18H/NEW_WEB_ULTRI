import type { Metadata } from "next";
import Link from "next/link";

import { resourceArticles } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Recursos | UltriAtech",
  description:
    "Insights y artículos sobre IA, ciberseguridad y arquitectura enterprise."
};

export default function RecursosPage() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Recursos
          </p>
          <h1 className="section-title">Insights para equipos ejecutivos.</h1>
          <p className="section-subtitle">
            Contenido curado para apoyar decisiones estratégicas.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {resourceArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/recursos/${article.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{article.summary}</p>
              <p className="mt-4 text-xs text-slate-400">
                Publicado: {article.publishedAt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
