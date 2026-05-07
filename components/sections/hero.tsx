"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Play, Pause, Mail, ArrowRight, Menu, X,
  ChevronDown, Shield, Brain, Eye, AlertTriangle
} from "lucide-react";
import { useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────
   NAVBAR + HERO — adaptado de NavbarHero al estilo UltriAtech
   Mantiene: DNA background, paleta cyan/purple/green
   Agrega: video hero, email capture, nav mejorada
───────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "IA", href: "/servicios/ia", icon: Brain },
  { label: "Ciberseguridad", href: "/servicios/ciberseguridad", icon: Shield },
  { label: "SOC", href: "/#soc", icon: Eye },
  { label: "Nosotros", href: "/nosotros", icon: null },
  { label: "Recursos", href: "/recursos", icon: null },
  { label: "Contacto", href: "/contacto", icon: null },
];

const CIBER_HIGHLIGHTS = [
  { label: "Gestión de Vulnerabilidades", href: "/servicios/ciberseguridad/gestion-vulnerabilidades" },
  { label: "Hacking Ético / Pentesting", href: "/servicios/ciberseguridad/pentesting-web-api" },
  { label: "OSINT / Threat Intelligence", href: "/servicios/ciberseguridad/osint-threat-intel" },
  { label: "SOC & Threat Hunting", href: "/servicios/ciberseguridad/threat-hunting" },
  { label: "Respuesta a Ransomware", href: "/servicios/ciberseguridad/respuesta-incidentes" },
];

const IA_HIGHLIGHTS = [
  { label: "Chatbots & RAG corporativo", href: "/servicios/ia/chatbots-rag" },
  { label: "Automatización inteligente", href: "/servicios/ia/automatizacion-inteligente" },
  { label: "Analítica & BI con IA", href: "/servicios/ia/analitica-ia" },
];

/* ── NAVBAR ── */
function NavbarHero() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsub = scrollYProgress.on("change", v => setScrolled(v > 0.02));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <header className="sticky top-0 z-50">
      <div className={cn(
        "border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-[#05080f]/90 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">UltriAtech</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* IA dropdown */}
            <div className="group relative"
              onMouseEnter={() => setDropdown("ia")}
              onMouseLeave={() => setDropdown(null)}>
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                <Brain className="h-3.5 w-3.5 text-purple-400" />
                IA
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown === "ia" && "rotate-180")} />
              </button>
              {dropdown === "ia" && (
                <div className="absolute left-0 top-full w-64 rounded-2xl border border-white/10 bg-[#0a0f1a] p-3 shadow-glass">
                  {IA_HIGHLIGHTS.map(h => (
                    <Link key={h.label} href={h.href}
                      className="block rounded-xl p-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                      {h.label}
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-white/10 pt-2">
                    <Link href="/servicios/ia" className="block rounded-xl p-3 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                      Ver todos los servicios de IA →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Ciberseguridad dropdown */}
            <div className="group relative"
              onMouseEnter={() => setDropdown("ciber")}
              onMouseLeave={() => setDropdown(null)}>
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                <Shield className="h-3.5 w-3.5 text-cyan-400" />
                Ciberseguridad
                <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", dropdown === "ciber" && "rotate-180")} />
              </button>
              {dropdown === "ciber" && (
                <div className="absolute left-0 top-full w-72 rounded-2xl border border-white/10 bg-[#0a0f1a] p-3 shadow-glass">
                  {CIBER_HIGHLIGHTS.map(h => (
                    <Link key={h.label} href={h.href}
                      className="block rounded-xl p-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                      {h.label}
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-white/10 pt-2">
                    <Link href="/servicios/ciberseguridad" className="block rounded-xl p-3 text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                      Ver todos los servicios →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {["SOC", "Nosotros", "Recursos"].map(label => {
              const item = NAV_LINKS.find(n => n.label === label)!;
              return (
                <Link key={label} href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/contacto" className="text-sm text-slate-300 transition hover:text-white">
              Contacto
            </Link>
            <Link href="/contacto"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
              Agendar diagnóstico <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="text-slate-300 lg:hidden" onClick={() => setOpen(p => !p)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-white/10 bg-[#05080f] px-6 py-6 lg:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/servicios/ciberseguridad" className="text-sm font-semibold text-cyan-300" onClick={() => setOpen(false)}>Ciberseguridad</Link>
              {CIBER_HIGHLIGHTS.map(h => (
                <Link key={h.label} href={h.href} className="pl-4 text-sm text-slate-300" onClick={() => setOpen(false)}>{h.label}</Link>
              ))}
              <div className="border-t border-white/10 pt-2" />
              <Link href="/servicios/ia" className="text-sm font-semibold text-purple-300" onClick={() => setOpen(false)}>Inteligencia Artificial</Link>
              {IA_HIGHLIGHTS.map(h => (
                <Link key={h.label} href={h.href} className="pl-4 text-sm text-slate-300" onClick={() => setOpen(false)}>{h.label}</Link>
              ))}
              <div className="border-t border-white/10 pt-2" />
              {["SOC", "Nosotros", "Recursos", "Contacto"].map(label => {
                const item = NAV_LINKS.find(n => n.label === label)!;
                return (
                  <Link key={label} href={item.href} className="text-sm text-slate-200" onClick={() => setOpen(false)}>{label}</Link>
                );
              })}
              <Link href="/contacto"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-4 py-3 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}>
                Agendar diagnóstico <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ── HERO ── */
export function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSubmit = () => {
    if (!email) return;
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  const handlePlay = () => { videoRef.current?.play(); setIsVideoPlaying(true); setIsVideoPaused(false); };
  const handlePause = () => { videoRef.current?.pause(); setIsVideoPaused(true); };
  const handleResume = () => { videoRef.current?.play(); setIsVideoPaused(false); };
  const handleEnded = () => { setIsVideoPlaying(false); setIsVideoPaused(false); };

  return (
    <>
      <NavbarHero />
      <section className="section-padding">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Text hero */}
          <div className="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center">
            <div className="max-w-3xl mx-auto">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300 mb-6">
                <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                Ciberseguridad &amp; IA aplicada · Enterprise
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight leading-tight">
                Protección real.<br />
                <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-emerald-300 bg-clip-text text-transparent">
                  Inteligencia aplicada.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
                UltriAtech combina ciberseguridad táctica e inteligencia artificial para proteger activos críticos, detectar amenazas y automatizar operaciones enterprise.
              </motion.p>

              {/* Highlights rápidos */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
                {[
                  { icon: Shield, color: "text-cyan-400", label: "Gestión de vulnerabilidades" },
                  { icon: Eye, color: "text-purple-400", label: "OSINT & Threat Intel" },
                  { icon: AlertTriangle, color: "text-amber-400", label: "Respuesta a ransomware" },
                  { icon: Brain, color: "text-emerald-400", label: "IA aplicada" },
                ].map(({ icon: Icon, color, label }) => (
                  <div key={label} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    <Icon className={cn("h-3.5 w-3.5", color)} />
                    {label}
                  </div>
                ))}
              </motion.div>

              {/* Email capture */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex items-center justify-center gap-3 flex-wrap">
                {submitted ? (
                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-3 text-sm text-emerald-300">
                    ✓ Te contactamos en menos de 24h
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="tu@empresa.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && handleSubmit()}
                        className="w-72 rounded-full border border-white/10 bg-white/5 pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90">
                      Agendar diagnóstico <ArrowRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* Video/image hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-glass">

            {/* Poster image */}
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80"
              alt="Ciberseguridad y IA — centro de datos"
              className={cn(
                "w-full h-full absolute inset-0 object-cover transition-opacity duration-500",
                isVideoPlaying ? "opacity-0" : "opacity-100"
              )}
            />

            {/* Gradient overlay on image */}
            {!isVideoPlaying && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/40 to-transparent" />
            )}

            {/* Video */}
            <video
              ref={videoRef}
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
              className={cn(
                "w-full h-full absolute inset-0 object-cover transition-opacity duration-500",
                isVideoPlaying ? "opacity-100" : "opacity-0"
              )}
              onEnded={handleEnded}
              playsInline
              muted
            />

            {/* Overlay text on image */}
            {!isVideoPlaying && (
              <div className="absolute bottom-8 left-8 right-20 space-y-2">
                <div className="flex flex-wrap gap-2">
                  {["SOC 24/7", "Pentesting", "OSINT", "IA aplicada", "Ransomware IR"].map(tag => (
                    <span key={tag} className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">UltriAtech · Medellín, Colombia · Enterprise</p>
              </div>
            )}

            {/* Play/Pause button */}
            <div className="absolute bottom-5 right-5 z-10">
              {!isVideoPlaying ? (
                <button onClick={handlePlay}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition hover:bg-white/30">
                  <Play className="h-7 w-7 fill-white text-white ml-1" />
                </button>
              ) : (
                <button onClick={isVideoPaused ? handleResume : handlePause}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition hover:bg-white/30">
                  {isVideoPaused
                    ? <Play className="h-7 w-7 fill-white text-white ml-1" />
                    : <Pause className="h-7 w-7 fill-white text-white" />}
                </button>
              )}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
