import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { BackgroundDNA } from "@/components/layout/background-dna";
import { DNAThreeBackground } from "@/components/layout/DNAThreeBackground";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: "UltriAtech | IA, Ciberseguridad y Software",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: "UltriAtech",
    description:
      "IA, ciberseguridad y software para escalar operaciones con seguridad y eficiencia.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "UltriAtech",
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const enableThreeBackground = true;

  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ultri-dark text-slate-100">
        <div className="relative min-h-screen">
          {enableThreeBackground ? <DNAThreeBackground /> : <BackgroundDNA />}
          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
