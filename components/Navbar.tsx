"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ultri-dark/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Sparkles className="h-5 w-5 text-cyan-300" aria-hidden="true" />
          </span>
          UltriAtech
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-cyan-300 focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contacto"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100 focus-ring"
          >
            Agendar diagnóstico
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden focus-ring"
          aria-label="Alternar menú"
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ultri-dark/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-cyan-300 focus-ring"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="rounded-full border border-cyan-400/40 px-4 py-2 text-center text-sm text-cyan-200 transition hover:border-cyan-300 hover:text-cyan-100 focus-ring"
              onClick={() => setOpen(false)}
            >
              Agendar diagnóstico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
