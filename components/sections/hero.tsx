import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";

export function HeroSection() {
  return (
    <ResponsiveHeroBanner
      badgeLabel="Nuevo"
      badgeText="Servicio de respuesta a ransomware 24/7"
      title="Ciberseguridad táctica."
      titleLine2="IA aplicada."
      description="UltriAtech protege activos críticos, detecta amenazas avanzadas y automatiza operaciones enterprise con metodologías probadas y equipos especializados."
      primaryButtonText="Agendar diagnóstico"
      primaryButtonHref="/contacto"
      secondaryButtonText="Ver servicios"
      secondaryButtonHref="/servicios"
      partnersTitle="Metodologías y marcos internacionales"
    />
  );
}
