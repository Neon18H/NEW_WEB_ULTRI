import Link from "next/link";
import { footerLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">UltriAtech</p>
          <p>© {new Date().getFullYear()} UltriAtech. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-cyan-200 focus-ring">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
