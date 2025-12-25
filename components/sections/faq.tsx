import { ChevronDown } from "lucide-react";

export function FAQSection({
  items
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-2xl border border-white/10 bg-white/5 p-4"
        >
          <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
            {item.question}
            <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
