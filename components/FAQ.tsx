import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section id="faq" className="section-padding">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">FAQ</p>
          <h2 className="text-3xl font-semibold text-white">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-300">
            Resoluciones rápidas para decisiones informadas.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="glass-card group p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-white focus-ring">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
