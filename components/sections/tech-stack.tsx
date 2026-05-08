"use client"

import { Sparkles } from "@/components/ui/sparkles"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

// ── SVG Tool Logos ────────────────────────────────────────────────────────

const KaliLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <text x="4" y="28" fontSize="22" fontWeight="bold" fontFamily="monospace" fill="#268bd2">kali</text>
    <text x="52" y="28" fontSize="22" fontWeight="bold" fontFamily="monospace" fill="currentColor">linux</text>
  </svg>
)

const WazuhLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <rect x="2" y="10" width="22" height="22" rx="4" fill="#00a9e0" opacity="0.9"/>
    <text x="4" y="27" fontSize="13" fontWeight="bold" fontFamily="monospace" fill="white">W</text>
    <text x="28" y="28" fontSize="18" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Wazuh</text>
  </svg>
)

const SplunkLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <text x="4" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif" fill="#65a637">Splunk</text>
    <rect x="88" y="14" width="6" height="14" rx="1" fill="#65a637"/>
    <rect x="96" y="10" width="6" height="18" rx="1" fill="#65a637"/>
    <rect x="104" y="17" width="6" height="11" rx="1" fill="#65a637"/>
  </svg>
)

const BurpLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <circle cx="20" cy="20" r="14" fill="#ff6633" opacity="0.9"/>
    <text x="13" y="25" fontSize="14" fontWeight="bold" fontFamily="monospace" fill="white">B</text>
    <text x="38" y="27" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Burp Suite</text>
  </svg>
)

const NessusLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <polygon points="20,6 34,14 34,28 20,36 6,28 6,14" fill="#00bcd4" opacity="0.85"/>
    <text x="12" y="25" fontSize="11" fontWeight="bold" fill="white">N</text>
    <text x="38" y="27" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Nessus</text>
  </svg>
)

const MetasploitLogo = () => (
  <svg viewBox="0 0 140 40" fill="currentColor" className="w-full h-full">
    <rect x="2" y="8" width="28" height="26" rx="4" fill="#e53935" opacity="0.9"/>
    <text x="7" y="26" fontSize="13" fontWeight="bold" fontFamily="monospace" fill="white">msf</text>
    <text x="34" y="27" fontSize="15" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Metasploit</text>
  </svg>
)

const MaltegoCLoogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <circle cx="12" cy="20" r="6" fill="#7c3aed" opacity="0.9"/>
    <circle cx="26" cy="12" r="4" fill="#7c3aed" opacity="0.7"/>
    <circle cx="26" cy="28" r="4" fill="#7c3aed" opacity="0.7"/>
    <line x1="12" y1="20" x2="26" y2="12" stroke="#7c3aed" strokeWidth="1.5"/>
    <line x1="12" y1="20" x2="26" y2="28" stroke="#7c3aed" strokeWidth="1.5"/>
    <text x="34" y="27" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Maltego</text>
  </svg>
)

const SentinelLogo = () => (
  <svg viewBox="0 0 160 40" fill="currentColor" className="w-full h-full">
    <path d="M8 20 L20 8 L32 20 L20 32 Z" fill="#0078d4" opacity="0.9"/>
    <text x="38" y="27" fontSize="13" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">MS Sentinel</text>
  </svg>
)

const OpenVASLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <circle cx="18" cy="20" r="13" fill="none" stroke="#4caf50" strokeWidth="3"/>
    <path d="M10 20 L16 27 L28 13" stroke="#4caf50" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <text x="36" y="27" fontSize="15" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">OpenVAS</text>
  </svg>
)

const WiresharkLogo = () => (
  <svg viewBox="0 0 140 40" fill="currentColor" className="w-full h-full">
    <path d="M8 30 Q14 10 20 20 Q26 30 32 10" stroke="#1679a8" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <text x="38" y="27" fontSize="14" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Wireshark</text>
  </svg>
)

const OpenAILogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <circle cx="20" cy="20" r="13" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 20 Q20 10 26 20 Q20 30 14 20" fill="currentColor" opacity="0.7"/>
    <text x="38" y="27" fontSize="15" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">OpenAI</text>
  </svg>
)

const LangChainLogo = () => (
  <svg viewBox="0 0 140 40" fill="currentColor" className="w-full h-full">
    <rect x="4" y="14" width="12" height="12" rx="2" fill="#16a34a"/>
    <rect x="18" y="14" width="12" height="12" rx="2" fill="#16a34a" opacity="0.7"/>
    <line x1="16" y1="20" x2="18" y2="20" stroke="#16a34a" strokeWidth="2"/>
    <text x="36" y="27" fontSize="14" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">LangChain</text>
  </svg>
)

const MISPLogo = () => (
  <svg viewBox="0 0 100 40" fill="currentColor" className="w-full h-full">
    <rect x="4" y="8" width="26" height="26" rx="5" fill="#e67e22" opacity="0.9"/>
    <text x="8" y="27" fontSize="13" fontWeight="bold" fontFamily="monospace" fill="white">MI</text>
    <text x="34" y="27" fontSize="18" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">MISP</text>
  </svg>
)

const NmapLogo = () => (
  <svg viewBox="0 0 100 40" fill="currentColor" className="w-full h-full">
    <path d="M6 32 L14 8 L22 24 L30 8 L38 32" stroke="#e74c3c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="44" y="27" fontSize="18" fontWeight="bold" fontFamily="monospace" fill="currentColor">nmap</text>
  </svg>
)

const TerraformLogo = () => (
  <svg viewBox="0 0 130 40" fill="currentColor" className="w-full h-full">
    <path d="M8 28 L8 14 L20 7 L20 21 Z" fill="#7b42bc" opacity="0.9"/>
    <path d="M22 21 L22 7 L34 14 L34 28 Z" fill="#7b42bc" opacity="0.6"/>
    <path d="M8 32 L20 25 L32 32 L20 39 Z" fill="#7b42bc" opacity="0.75"/>
    <text x="38" y="27" fontSize="15" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Terraform</text>
  </svg>
)

const ElasticLogo = () => (
  <svg viewBox="0 0 120 40" fill="currentColor" className="w-full h-full">
    <ellipse cx="18" cy="16" rx="12" ry="7" fill="#f4bd19" opacity="0.9"/>
    <ellipse cx="18" cy="26" rx="12" ry="7" fill="#00bfb3" opacity="0.9"/>
    <text x="34" y="27" fontSize="15" fontWeight="bold" fontFamily="sans-serif" fill="currentColor">Elastic</text>
  </svg>
)

// ── Tool groups ───────────────────────────────────────────────────────────

const CIBER_TOOLS = [
  { id: "kali",       component: KaliLogo,       label: "Kali Linux",      w: "w-28" },
  { id: "wazuh",      component: WazuhLogo,       label: "Wazuh",           w: "w-28" },
  { id: "burp",       component: BurpLogo,        label: "Burp Suite",      w: "w-32" },
  { id: "nessus",     component: NessusLogo,      label: "Nessus",          w: "w-28" },
  { id: "metasploit", component: MetasploitLogo,  label: "Metasploit",      w: "w-36" },
  { id: "maltego",    component: MaltegoCLoogo,   label: "Maltego",         w: "w-28" },
  { id: "sentinel",   component: SentinelLogo,    label: "MS Sentinel",     w: "w-36" },
  { id: "openvas",    component: OpenVASLogo,     label: "OpenVAS",         w: "w-32" },
  { id: "wireshark",  component: WiresharkLogo,   label: "Wireshark",       w: "w-32" },
  { id: "nmap",       component: NmapLogo,        label: "Nmap",            w: "w-24" },
  { id: "misp",       component: MISPLogo,        label: "MISP",            w: "w-24" },
  { id: "splunk",     component: SplunkLogo,      label: "Splunk",          w: "w-28" },
]

const IA_TOOLS = [
  { id: "openai",     component: OpenAILogo,      label: "OpenAI",          w: "w-28" },
  { id: "langchain",  component: LangChainLogo,   label: "LangChain",       w: "w-32" },
  { id: "elastic",    component: ElasticLogo,     label: "Elastic",         w: "w-28" },
  { id: "terraform",  component: TerraformLogo,   label: "Terraform",       w: "w-32" },
]

// ── Component ─────────────────────────────────────────────────────────────

export function TechStackSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="mx-auto max-w-6xl space-y-14">

        {/* Header */}
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Stack técnico</p>
          <h2 className="section-title">Herramientas que usa el adversario.<br/>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Y las que lo detienen.
            </span>
          </h2>
          <p className="section-subtitle max-w-2xl">
            Operamos con las mismas herramientas que usan los atacantes — y con las mejores plataformas defensivas del mercado.
          </p>
        </div>

        {/* Ciberseguridad tools slider */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-400/70 font-semibold">
            // Ciberseguridad ofensiva & defensiva
          </p>
          <div className="relative h-12 sm:h-16 w-full">
            <InfiniteSlider duration={35} gap={56} className="flex h-full w-full items-center">
              {[...CIBER_TOOLS, ...CIBER_TOOLS].map(({ id, component: Logo, w }, i) => (
                <div key={`${id}-${i}`} className={`${w} h-8 sm:h-10 text-slate-300 opacity-70 hover:opacity-100 transition-opacity`}>
                  <Logo />
                </div>
              ))}
            </InfiniteSlider>
            <ProgressiveBlur className="pointer-events-none absolute top-0 left-0 h-full w-28" direction="left" blurIntensity={0.8} />
            <ProgressiveBlur className="pointer-events-none absolute top-0 right-0 h-full w-28" direction="right" blurIntensity={0.8} />
          </div>
        </div>

        {/* IA tools slider — dirección inversa */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-purple-400/70 font-semibold">
            // Inteligencia Artificial & automatización
          </p>
          <div className="relative h-12 sm:h-16 w-full">
            <InfiniteSlider duration={25} gap={56} reverse className="flex h-full w-full items-center">
              {[...IA_TOOLS, ...CIBER_TOOLS.slice(0, 6)].map(({ id, component: Logo, w }, i) => (
                <div key={`ia-${id}-${i}`} className={`${w} h-8 sm:h-10 text-slate-300 opacity-70 hover:opacity-100 transition-opacity`}>
                  <Logo />
                </div>
              ))}
            </InfiniteSlider>
            <ProgressiveBlur className="pointer-events-none absolute top-0 left-0 h-full w-28" direction="left" blurIntensity={0.8} />
            <ProgressiveBlur className="pointer-events-none absolute top-0 right-0 h-full w-28" direction="right" blurIntensity={0.8} />
          </div>
        </div>

        {/* Sparkles section */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/8"
          style={{ maskImage: 'radial-gradient(55% 55%, white, transparent)' }}>
          {/* Glow background */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#7c3aed,transparent_65%)] before:opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_65%)]" />
          {/* Horizon arc */}
          <div className="absolute -left-1/2 top-1/2 z-10 aspect-[1/0.5] w-[200%] rounded-[100%] border-t border-white/10 bg-[#070a12]" />
          {/* Sparkles */}
          <Sparkles
            density={1000}
            className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_88%)]"
            color="#38bdf8"
            speed={0.8}
            opacity={0.6}
            size={1.2}
          />
          {/* Center text */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Metodologías</p>
            <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl">
              {["OWASP","NIST CSF","ISO 27001","MITRE ATT&CK","CIS Benchmarks","PTES","OSSTMM","CVSS"].map(m => (
                <span key={m} className="rounded-full bg-white/6 ring-1 ring-white/12 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/12 transition-all cursor-default">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
