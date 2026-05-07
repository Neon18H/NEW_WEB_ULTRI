"use client";

import React, { useState } from 'react';
import Link from 'next/link';
interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface ResponsiveHeroBannerProps {
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  navLinks = [
    { label: "Home",            href: "/",                          isActive: true },
    { label: "Ciberseguridad",  href: "/servicios/ciberseguridad"                 },
    { label: "IA",              href: "/servicios/ia"                             },
    { label: "SOC",             href: "/#soc"                                     },
    { label: "Recursos",        href: "/recursos"                                 },
  ],
  ctaButtonText    = "Agendar diagnóstico",
  ctaButtonHref    = "/contacto",
  badgeLabel       = "Nuevo",
  badgeText        = "Servicio de respuesta a ransomware 24/7",
  title            = "Ciberseguridad táctica.",
  titleLine2       = "IA aplicada.",
  description      = "UltriAtech protege activos críticos, detecta amenazas avanzadas y automatiza operaciones enterprise con metodologías probadas y equipos especializados.",
  primaryButtonText   = "Agendar diagnóstico",
  primaryButtonHref   = "/contacto",
  secondaryButtonText = "Ver servicios",
  secondaryButtonHref = "/servicios",
  partnersTitle    = "Metodologías y marcos internacionales",
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="w-full isolate min-h-screen overflow-hidden relative">

      {/* ── BACKGROUND: imagen hero ── */}
      <img
        src="/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark gradient overlay — legibilidad del texto */}
      <div className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(7,10,18,0.35) 0%, rgba(7,10,18,0.15) 40%, rgba(7,10,18,0.65) 100%)' }} />
      {/* Cyan glow top-left */}
      <div className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at 15% 0%, rgba(56,189,248,0.22) 0%, transparent 55%)' }} />
      {/* Purple glow top-right */}
      <div className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at 85% 0%, rgba(168,85,247,0.18) 0%, transparent 50%)' }} />
      <div className="pointer-events-none absolute inset-0 z-[1] ring-1 ring-black/20" />

      {/* ── NAVBAR ── */}
      <header className="relative z-20">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-wide">UltriAtech</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur-md">
                {navLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium hover:text-white transition-colors rounded-full ${
                      link.isActive ? 'text-white/95 bg-white/10' : 'text-white/65'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={ctaButtonHref}
                  className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/90 transition-colors"
                >
                  {ctaButtonText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </Link>
              </div>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileMenuOpen(p => !p)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 mb-2 rounded-2xl bg-[#070a12]/95 ring-1 ring-white/10 backdrop-blur-xl p-4 space-y-1">
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm text-white/75 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10">
                <Link
                  href={ctaButtonHref}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center mt-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90 transition-colors"
                >
                  {ctaButtonText}
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10">
        <div className="sm:pt-24 md:pt-28 lg:pt-36 max-w-7xl mx-auto pt-20 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur-sm animate-fade-slide-in-1">
              <span className="inline-flex items-center text-xs font-semibold text-neutral-900 bg-white/95 rounded-full py-0.5 px-2.5">
                {badgeLabel}
              </span>
              <span className="text-sm font-medium text-white/90 pr-1">
                {badgeText}
              </span>
            </div>

            {/* Title */}
            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl text-white tracking-tight font-bold animate-fade-slide-in-2">
              <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                {title}
              </span>
              <br />
              <span className="text-white/85">
                {titleLine2}
              </span>
            </h1>

            {/* Description */}
            <p className="sm:text-lg text-base text-white/60 max-w-2xl mt-6 mx-auto leading-relaxed animate-fade-slide-in-3">
              {description}
            </p>

            {/* Service pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 animate-fade-slide-in-3">
              {[
                { icon: "🔍", label: "Gestión de vulnerabilidades" },
                { icon: "⚔️", label: "Hacking ético" },
                { icon: "👁️", label: "OSINT & Threat Intel" },
                { icon: "🚨", label: "Respuesta a ransomware" },
                { icon: "🤖", label: "IA aplicada" },
              ].map(({ icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white/8 ring-1 ring-white/12 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm">
                  {icon} {label}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
              <Link
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 hover:bg-white/20 text-sm font-semibold text-white bg-white/12 ring-white/20 ring-1 rounded-full py-3 px-6 transition-all hover:scale-[1.02] backdrop-blur-sm"
              >
                {primaryButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/65 hover:text-white transition-colors"
              >
                {secondaryButtonText}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Frameworks */}
          <div className="mx-auto mt-20 max-w-3xl animate-fade-slide-in-4">
            <p className="text-xs text-white/40 text-center uppercase tracking-[0.2em] mb-5">
              {partnersTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["OWASP", "NIST CSF", "ISO 27001", "MITRE ATT&CK", "CIS Benchmarks"].map((name) => (
                <div key={name}
                  className="rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white/50 hover:text-white/80 hover:bg-white/10 transition-all cursor-default">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ResponsiveHeroBanner;
