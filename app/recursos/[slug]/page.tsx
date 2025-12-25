import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { resourceArticles, getResourceBySlug } from "@/lib/resources";

export async function generateStaticParams() {
  return resourceArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params
}: {
  params: { slug: string };
}): Metadata {
  const article = getResourceBySlug(params.slug);
  if (!article) {
    return { title: "Recurso no encontrado | UltriAtech" };
  }
  return {
    title: `${article.title} | UltriAtech`,
    description: article.summary
  };
}

export default function ResourceDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const article = getResourceBySlug(params.slug);
  if (!article) {
    notFound();
  }

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link href="/recursos" className="text-xs text-cyan-200">
          ← Volver a recursos
        </Link>
        <div className="space-y-3">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>{article.category}</span>
            <span>{article.readTime}</span>
            <span>{article.publishedAt}</span>
          </div>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            {article.title}
          </h1>
          <p className="text-lg text-slate-300">{article.summary}</p>
        </div>
        <div className="space-y-4 text-sm text-slate-300">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
