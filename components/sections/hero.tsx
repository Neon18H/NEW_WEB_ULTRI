import dynamic from "next/dynamic";

// Three.js solo en cliente
const EtherealBeamsHero = dynamic(
  () => import("@/components/ui/ethereal-beams-hero"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen w-full bg-[#050a14] flex items-center justify-center">
        <div className="text-cyan-400/60 text-sm font-mono tracking-widest animate-pulse">
          INICIALIZANDO...
        </div>
      </div>
    ),
  }
);

export function HeroSection() {
  return <EtherealBeamsHero />;
}
