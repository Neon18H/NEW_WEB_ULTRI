"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { navItems, serviceHighlights } from "@/lib/site";
import { serviceCategories } from "@/lib/services";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05080f]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-white">
          UltriAtech
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button
              type="button"
              className="text-sm text-slate-200 transition hover:text-white"
            >
              Servicios
            </button>
            <div className="absolute left-0 top-full hidden w-[720px] rounded-2xl border border-white/10 bg-[#0a0f1a] p-6 shadow-glass group-hover:block">
              <div className="grid grid-cols-[1.2fr_1fr] gap-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-white">
                    Líneas principales
                  </p>
                  <div className="grid gap-3">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/servicios/${category.id}`}
                        className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/40"
                      >
                        <p className="text-sm font-semibold text-white">
                          {category.name}
                        </p>
                        <p className="text-xs text-slate-300">
                          {category.tagline}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-white">Destacados</p>
                  <div className="space-y-3">
                    {serviceHighlights.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="block rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200 transition hover:border-cyan-400/40"
                      >
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-slate-300">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <Badge variant="subtle">B2B · Enterprise</Badge>
                </div>
              </div>
            </div>
          </div>
          {navItems
            .filter((item) => item.label !== "Servicios")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-slate-200 transition hover:text-white"
              >
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
        <button
          type="button"
          className="text-slate-200 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Abrir menú"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#05080f] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/servicios"
              className="text-sm text-white"
              onClick={() => setOpen(false)}
            >
              Servicios
            </Link>
            {serviceCategories.map((category) => (
              <Link
                key={category.id}
                href={`/servicios/${category.id}`}
                className="text-sm text-slate-200"
                onClick={() => setOpen(false)}
              >
                {category.name}
              </Link>
            ))}
            {navItems
              .filter((item) => item.label !== "Servicios")
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-200"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contacto">Agendar diagnóstico</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/contacto">Solicitar propuesta</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
