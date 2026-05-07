"use client";
// La navbar principal ahora está integrada en el HeroSection
// Este archivo se mantiene para compatibilidad con otras páginas

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Shield, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site";
import { serviceCategories } from "@/lib/services";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05080f]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
            <Shield className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-lg font-bold text-white">UltriAtech</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 text-sm text-slate-200 transition hover:text-white">
              Servicios
            </button>
            <div className="absolute left-0 top-full hidden w-[480px] rounded-2xl border border-white/10 bg-[#0a0f1a] p-5 shadow-glass group-hover:block">
              <div className="grid grid-cols-2 gap-3">
                {serviceCategories.map((cat) => (
                  <Link key={cat.id} href={`/servicios/${cat.id}`}
                    className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40">
                    <div className="flex items-center gap-2 mb-1">
                      {cat.id === "ia"
                        ? <Brain className="h-3.5 w-3.5 text-purple-400" />
                        : <Shield className="h-3.5 w-3.5 text-cyan-400" />}
                      <p className="text-sm font-semibold text-white">{cat.name}</p>
                    </div>
                    <p className="text-xs text-slate-300">{cat.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems
            .filter(item => item.label !== "Servicios" && item.label !== "Home")
            .map(item => (
              <Link key={item.href} href={item.href}
                className="text-sm text-slate-200 transition hover:text-white">
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href="/contacto">Agendar diagnóstico</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contacto">Solicitar propuesta</Link>
          </Button>
        </div>

        <button type="button" className="text-slate-200 lg:hidden" onClick={() => setOpen(p => !p)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#05080f] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {serviceCategories.map(cat => (
              <Link key={cat.id} href={`/servicios/${cat.id}`}
                className="text-sm font-semibold text-white" onClick={() => setOpen(false)}>
                {cat.name}
              </Link>
            ))}
            {navItems.filter(i => i.label !== "Servicios" && i.label !== "Home").map(item => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-200" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <Button variant="outline" size="sm" asChild><Link href="/contacto">Agendar diagnóstico</Link></Button>
              <Button size="sm" asChild><Link href="/contacto">Solicitar propuesta</Link></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
