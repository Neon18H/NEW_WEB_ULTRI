import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { serviceCategories } from "@/lib/services";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05080f]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">UltriAtech</p>
          <p className="text-sm text-slate-300">{siteConfig.description}</p>
          <div className="space-y-2 text-xs text-slate-300">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-200" />
              CDMX · Bogotá · Remoto
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-cyan-200" />
              +52 55 0000 0000
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-200" />
              {siteConfig.links.email}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Servicios</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {serviceCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/servicios/${category.id}`}
                  className="hover:text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Sitio</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-white">Listos para empezar</p>
          <p className="text-sm text-slate-300">
            Agenda un diagnóstico y recibe un plan claro para tu siguiente
            iniciativa.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-100"
          >
            Solicitar propuesta
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        © 2025 UltriAtech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
