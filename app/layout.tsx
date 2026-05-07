import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { BackgroundDNA } from "@/components/layout/background-dna";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "UltriAtech | Ciberseguridad e IA aplicada",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "UltriAtech — Ciberseguridad & IA para entornos críticos",
    description: "Gestión de vulnerabilidades, hacking ético, OSINT, SOC, respuesta a ransomware e IA aplicada.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "UltriAtech", description: siteConfig.description }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ultri-dark text-slate-100">
        <div className="relative min-h-screen">
          <BackgroundDNA />
          <div className="relative z-10">
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </div>
      </body>
    </html>
  );
}
