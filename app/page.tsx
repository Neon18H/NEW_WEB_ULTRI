import { CapabilitiesSection } from "@/components/sections/capabilities";
import { CTASection } from "@/components/sections/cta";
import { HeroSection } from "@/components/sections/hero";
import { PillarsSection } from "@/components/sections/pillars";
import { ProcessSection } from "@/components/sections/process";
import { ResultsSection } from "@/components/sections/results";
import { TechStackSection } from "@/components/sections/tech-stack";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PillarsSection />
      <ProcessSection />
      <CapabilitiesSection />
      <ResultsSection />
      <TechStackSection />
      <CTASection />
    </div>
  );
}
