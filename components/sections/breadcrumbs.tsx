import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({
  items
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-200">{item.label}</span>
            )}
            {index < items.length - 1 ? (
              <ChevronRight className="h-3 w-3" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
