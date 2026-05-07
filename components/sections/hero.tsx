import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";

export function HeroSection() {
  return (
    <ResponsiveHeroBanner
      backgroundImageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80"
      badgeLabel="Nuevo"
      badgeText="Servicio de respuesta a ransomware 24/7"
      title="Ciberseguridad táctica."
      titleLine2="IA aplicada."
      description="UltriAtech protege activos críticos, detecta amenazas avanzadas y automatiza operaciones enterprise con metodologías probadas y equipos especializados en Colombia."
      primaryButtonText="Agendar diagnóstico"
      primaryButtonHref="/contacto"
      secondaryButtonText="Ver servicios"
      secondaryButtonHref="/servicios"
      ctaButtonText="Agendar diagnóstico"
      ctaButtonHref="/contacto"
      navLinks={[
        { label: "Home", href: "/", isActive: true },
        { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
        { label: "IA", href: "/servicios/ia" },
        { label: "SOC", href: "/#soc" },
        { label: "Recursos", href: "/recursos" },
      ]}
      partnersTitle="Metodologías y marcos internacionales"
    />
  );
}
