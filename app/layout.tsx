import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UltriAtech | IA, Ciberseguridad y Software",
  description:
    "UltriAtech impulsa empresas con inteligencia artificial, ciberseguridad y desarrollo de software. Soluciones enterprise listas para crecer.",
  openGraph: {
    title: "UltriAtech",
    description:
      "IA, ciberseguridad y software para escalar operaciones con seguridad y eficiencia.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-ultri-dark text-slate-100`}>
        <div className="min-h-screen bg-tech">
          <div className="min-h-screen bg-grid bg-[size:120px_120px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
