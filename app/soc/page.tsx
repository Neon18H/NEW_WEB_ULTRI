import type { Metadata } from "next";
import { SOCSection } from "@/components/sections/soc-section";
import { CTASection } from "@/components/sections/cta";
import { AnimatedNav } from "@/components/ui/animated-nav";

export const metadata: Metadata = {
  title: "SOC Administrado | UltriAtech",
  description:
    "Centro de Operaciones de Seguridad administrado por UltriAtech. Monitoreo 24/7, detección de amenazas, respuesta a incidentes y threat hunting.",
  openGraph: {
    title: "SOC Administrado — UltriAtech",
    description:
      "Protección continua con SOC managed: SIEM, EDR, threat hunting y respuesta a incidentes.",
  },
};

export default function SOCPage() {
  return (
    <>
      <AnimatedNav />
      <SOCSection />
      <CTASection />
    </>
  );
}
