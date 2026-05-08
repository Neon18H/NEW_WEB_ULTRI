"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Shield, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem { name: string; href: string; hideOnMobile?: boolean }
const navItems: NavItem[] = [
  { name: "Ciberseguridad", href: "/servicios/ciberseguridad" },
  { name: "IA",             href: "/servicios/ia"             },
  { name: "SOC",            href: "/soc"                     },
  { name: "Nosotros",       href: "/nosotros",  hideOnMobile: true },
  { name: "Recursos",       href: "/recursos",  hideOnMobile: true },
];

const EXPAND_SCROLL_THRESHOLD = 80;

const containerVariants = {
  expanded: {
    y: 0, opacity: 1, width: "auto",
    transition: {
      y: { type: "spring", damping: 18, stiffness: 250 },
      opacity: { duration: 0.3 },
      type: "spring", damping: 20, stiffness: 300,
      staggerChildren: 0.07, delayChildren: 0.2,
    },
  },
  collapsed: {
    y: 0, opacity: 1, width: "3rem",
    transition: {
      type: "spring", damping: 20, stiffness: 300,
      when: "afterChildren", staggerChildren: 0.05, staggerDirection: -1,
    },
  },
};

const logoVariants = {
  expanded:  { opacity: 1, x: 0,   rotate: 0,    transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -25, rotate: -180, transition: { duration: 0.3 } },
};

const itemVariants = {
  expanded:  { opacity: 1, x: 0,   scale: 1,    transition: { type: "spring", damping: 15 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.2 } },
};

const ctaVariants = {
  expanded:  { opacity: 1, x: 0,   scale: 1,    transition: { type: "spring", damping: 15, delay: 0.1 } },
  collapsed: { opacity: 0, x: -20, scale: 0.95, transition: { duration: 0.15 } },
};

const collapsedIconVariants = {
  expanded:  { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  collapsed: { opacity: 1, scale: 1,   transition: { type: "spring", damping: 15, stiffness: 300, delay: 0.15 } },
};

export function AnimatedNav() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = React.useRef(0);
  const scrollPositionOnCollapse = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    if (isExpanded && latest > previous && latest > 150) {
      setExpanded(false);
      scrollPositionOnCollapse.current = latest;
    } else if (!isExpanded && latest < previous && (scrollPositionOnCollapse.current - latest > EXPAND_SCROLL_THRESHOLD)) {
      setExpanded(true);
    }
    lastScrollY.current = latest;
  });

  const handleNavClick = (e: React.MouseEvent) => {
    if (!isExpanded) { e.preventDefault(); setExpanded(true); }
  };

  return (
    <div className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 px-2 w-full flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-[calc(100vw-1rem)]">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={containerVariants}
        whileHover={!isExpanded ? { scale: 1.08 } : {}}
        whileTap={!isExpanded  ? { scale: 0.95 } : {}}
        onClick={handleNavClick}
        className={cn(
          "flex items-center overflow-hidden rounded-full h-12 shadow-lg",
          "border border-white/10 bg-[#070a12]/80 backdrop-blur-xl",
          !isExpanded && "cursor-pointer justify-center"
        )}
      >
        {/* Logo / escudo */}
        <motion.div variants={logoVariants} className="flex-shrink-0 flex items-center gap-2 pl-4 pr-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 shadow-sm">
            <Shield className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-bold text-white whitespace-nowrap">UltriAtech</span>
        </motion.div>

        {/* Separador */}
        <motion.div variants={itemVariants} className="w-px h-5 bg-white/10 mx-1" />

        {/* Nav links */}
        <motion.div className={cn("flex items-center gap-0 sm:gap-0.5 px-0.5 sm:px-1", !isExpanded && "pointer-events-none")}>
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={(e) => e.stopPropagation()}
                className="text-xs sm:text-sm font-medium text-white/65 hover:text-white transition-colors px-2 sm:px-3 py-1.5 rounded-full hover:bg-white/8 whitespace-nowrap"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div variants={ctaVariants} className={cn("pr-2 pl-1", !isExpanded && "pointer-events-none")}>
          <Link
            href="/contacto"
            onClick={(e) => e.stopPropagation()}
            className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-900 hover:bg-white/90 transition-colors"
          >
            Diagnóstico
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
            </svg>
          </Link>
        </motion.div>

        {/* Collapsed icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div variants={collapsedIconVariants} animate={isExpanded ? "expanded" : "collapsed"}>
            <Menu className="h-5 w-5 text-white/80" />
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
