import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ultri-dark": "#06080f",
        "ultri-card": "rgba(16, 24, 38, 0.65)",
        "ultri-border": "rgba(148, 163, 184, 0.2)",
        "ultri-glow": "rgba(56, 189, 248, 0.18)"
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(56, 189, 248, 0.2)",
        "glow-md": "0 0 35px rgba(16, 185, 129, 0.25)",
        "glass": "0 20px 60px rgba(15, 23, 42, 0.45)"
      },
      backgroundImage: {
        "radial-tech": "radial-gradient(circle at top, rgba(56,189,248,0.2), transparent 55%)",
        "grid-tech": "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
