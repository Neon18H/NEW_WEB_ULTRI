"use client"

import type React from "react"
import { forwardRef, useImperativeHandle, useEffect, useRef, useMemo, type FC, type ReactNode } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { degToRad } from "three/src/math/MathUtils.js"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"
import { AnimatedNav } from "./animated-nav"

// ── Types ──────────────────────────────────────────────────────────────────
type UniformValue = THREE.IUniform<unknown> | unknown

interface ExtendMaterialConfig {
  header: string
  vertexHeader?: string
  fragmentHeader?: string
  material?: THREE.MeshPhysicalMaterialParameters & { fog?: boolean }
  uniforms?: Record<string, UniformValue>
  vertex?: Record<string, string>
  fragment?: Record<string, string>
}
type ShaderWithDefines = THREE.ShaderLibShader & { defines?: Record<string, string | number | boolean> }

// ── extendMaterial ─────────────────────────────────────────────────────────
function extendMaterial<T extends THREE.Material = THREE.Material>(
  BaseMaterial: new (params?: THREE.MaterialParameters) => T,
  cfg: ExtendMaterialConfig,
): THREE.ShaderMaterial {
  const physical = THREE.ShaderLib.physical as ShaderWithDefines
  const { vertexShader: baseVert, fragmentShader: baseFrag, uniforms: baseUniforms } = physical
  const baseDefines = physical.defines ?? {}
  const uniforms: Record<string, THREE.IUniform> = THREE.UniformsUtils.clone(baseUniforms)

  const defaults = new BaseMaterial(cfg.material || {}) as T & {
    color?: THREE.Color; roughness?: number; metalness?: number
    envMap?: THREE.Texture; envMapIntensity?: number
  }
  if (defaults.color)           uniforms.diffuse.value        = defaults.color
  if ("roughness" in defaults)  uniforms.roughness.value      = defaults.roughness
  if ("metalness" in defaults)  uniforms.metalness.value      = defaults.metalness
  if ("envMap" in defaults)     uniforms.envMap.value         = defaults.envMap
  if ("envMapIntensity" in defaults) uniforms.envMapIntensity.value = defaults.envMapIntensity

  Object.entries(cfg.uniforms ?? {}).forEach(([key, u]) => {
    uniforms[key] = (u !== null && typeof u === "object" && "value" in u)
      ? (u as THREE.IUniform<unknown>)
      : ({ value: u } as THREE.IUniform<unknown>)
  })

  let vert = `${cfg.header}\n${cfg.vertexHeader ?? ""}\n${baseVert}`
  let frag = `${cfg.header}\n${cfg.fragmentHeader ?? ""}\n${baseFrag}`
  for (const [inc, code] of Object.entries(cfg.vertex ?? {}))   vert = vert.replace(inc, `${inc}\n${code}`)
  for (const [inc, code] of Object.entries(cfg.fragment ?? {})) frag = frag.replace(inc, `${inc}\n${code}`)

  return new THREE.ShaderMaterial({
    defines: { ...baseDefines }, uniforms,
    vertexShader: vert, fragmentShader: frag,
    lights: true, fog: !!cfg.material?.fog,
  })
}

// ── Helpers ────────────────────────────────────────────────────────────────
const CanvasWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Canvas dpr={[1, 2]} frameloop="always" className="w-full h-full relative">{children}</Canvas>
)

const hexToNormalizedRGB = (hex: string): [number, number, number] => {
  const c = hex.replace("#", "")
  return [parseInt(c.slice(0,2),16)/255, parseInt(c.slice(2,4),16)/255, parseInt(c.slice(4,6),16)/255]
}

const noise = `
float random(in vec2 st){return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);}
float noise(in vec2 st){
  vec2 i=floor(st);vec2 f=fract(st);
  float a=random(i);float b=random(i+vec2(1,0));
  float c=random(i+vec2(0,1));float d=random(i+vec2(1,1));
  vec2 u=f*f*(3.-2.*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}
vec4 permute(vec4 x){return mod(((x*34.)+1.)*x,289.);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
vec3 fade(vec3 t){return t*t*t*(t*(t*6.-15.)+10.);}
float cnoise(vec3 P){
  vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1);
  Pi0=mod(Pi0,289.);Pi1=mod(Pi1,289.);
  vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1);
  vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);
  vec4 iy=vec4(Pi0.yy,Pi1.yy);
  vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;
  vec4 ixy=permute(permute(ix)+iy);
  vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);
  vec4 gx0=ixy0/7.;vec4 gy0=fract(floor(gx0)/7.)-.5;gx0=fract(gx0);
  vec4 gz0=vec4(.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0));
  gx0-=sz0*(step(0.,gx0)-.5);gy0-=sz0*(step(0.,gy0)-.5);
  vec4 gx1=ixy1/7.;vec4 gy1=fract(floor(gx1)/7.)-.5;gx1=fract(gx1);
  vec4 gz1=vec4(.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0));
  gx1-=sz1*(step(0.,gx1)-.5);gy1-=sz1*(step(0.,gy1)-.5);
  vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);
  vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));
  g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;
  vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));
  g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;
  float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));
  float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));
  float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));
  float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);
  vec3 fade_xyz=fade(Pf0);
  vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);
  vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);
  return 2.2*mix(n_yz.x,n_yz.y,fade_xyz.x);
}
`

// ── Geometry ───────────────────────────────────────────────────────────────
function createStackedPlanesBufferGeometry(n: number, width: number, height: number, spacing: number, heightSegments: number): THREE.BufferGeometry {
  const geometry = new THREE.BufferGeometry()
  const numVertices = n * (heightSegments + 1) * 2
  const numFaces = n * heightSegments * 2
  const positions = new Float32Array(numVertices * 3)
  const indices = new Uint32Array(numFaces * 3)
  const uvs = new Float32Array(numVertices * 2)
  let vertexOffset = 0, indexOffset = 0, uvOffset = 0
  const totalWidth = n * width + (n - 1) * spacing
  const xOffsetBase = -totalWidth / 2
  for (let i = 0; i < n; i++) {
    const xOffset = xOffsetBase + i * (width + spacing)
    const uvXOffset = Math.random() * 300
    const uvYOffset = Math.random() * 300
    for (let j = 0; j <= heightSegments; j++) {
      const y = height * (j / heightSegments - 0.5)
      positions.set([xOffset, y, 0, xOffset + width, y, 0], vertexOffset * 3)
      const uvY = j / heightSegments
      uvs.set([uvXOffset, uvY + uvYOffset, uvXOffset + 1, uvY + uvYOffset], uvOffset)
      if (j < heightSegments) {
        const a = vertexOffset, b = vertexOffset+1, c = vertexOffset+2, d = vertexOffset+3
        indices.set([a,b,c,c,b,d], indexOffset); indexOffset += 6
      }
      vertexOffset += 2; uvOffset += 4
    }
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2))
  geometry.setIndex(new THREE.BufferAttribute(indices, 1))
  geometry.computeVertexNormals()
  return geometry
}

// ── MergedPlanes ───────────────────────────────────────────────────────────
const MergedPlanes = forwardRef<
  THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>,
  { material: THREE.ShaderMaterial; width: number; count: number; height: number }
>(({ material, width, count, height }, ref) => {
  const mesh = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null!)
  useImperativeHandle(ref, () => mesh.current)
  const geometry = useMemo(() => createStackedPlanesBufferGeometry(count, width, height, 0, 100), [count, width, height])
  useFrame((_, delta) => { mesh.current.material.uniforms.time.value += 0.1 * delta })
  return <mesh ref={mesh} geometry={geometry} material={material} />
})
MergedPlanes.displayName = "MergedPlanes"

const PlaneNoise = forwardRef<
  THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>,
  { material: THREE.ShaderMaterial; width: number; count: number; height: number }
>((props, ref) => <MergedPlanes ref={ref} {...props} />)
PlaneNoise.displayName = "PlaneNoise"

const DirLight: FC<{ position: [number, number, number]; color: string }> = ({ position, color }) => {
  const dir = useRef<THREE.DirectionalLight>(null!)
  useEffect(() => {
    if (!dir.current) return
    const cam = dir.current.shadow.camera as THREE.Camera & { top:number; bottom:number; left:number; right:number; far:number }
    cam.top=24; cam.bottom=-24; cam.left=-24; cam.right=24; cam.far=64
    dir.current.shadow.bias = -0.004
  }, [])
  return <directionalLight ref={dir} color={color} intensity={1} position={position} />
}

// ── Beams (color cyan/purple para UltriAtech) ─────────────────────────────
interface BeamsProps {
  beamWidth?: number; beamHeight?: number; beamNumber?: number
  lightColor?: string; speed?: number; noiseIntensity?: number
  scale?: number; rotation?: number
}

const Beams: FC<BeamsProps> = ({
  beamWidth = 2, beamHeight = 15, beamNumber = 12,
  lightColor = "#38bdf8", speed = 2, noiseIntensity = 1.75,
  scale = 0.2, rotation = 0,
}) => {
  const meshRef = useRef<THREE.Mesh<THREE.BufferGeometry, THREE.ShaderMaterial>>(null!)
  const beamMaterial = useMemo(() =>
    extendMaterial(THREE.MeshStandardMaterial, {
      header: `varying vec3 vEye;varying float vNoise;varying vec2 vUv;varying vec3 vPosition;
uniform float time;uniform float uSpeed;uniform float uNoiseIntensity;uniform float uScale;${noise}`,
      vertexHeader: `
float getPos(vec3 pos){vec3 noisePos=vec3(pos.x*0.,pos.y-uv.y,pos.z+time*uSpeed*3.)*uScale;return cnoise(noisePos);}
vec3 getCurrentPos(vec3 pos){vec3 np=pos;np.z+=getPos(pos);return np;}
vec3 getNormal(vec3 pos){vec3 cp=getCurrentPos(pos);vec3 nx=getCurrentPos(pos+vec3(.01,0,0));vec3 nz=getCurrentPos(pos+vec3(0,-.01,0));return normalize(cross(normalize(nz-cp),normalize(nx-cp)));}`,
      fragmentHeader: "",
      vertex: {
        "#include <begin_vertex>": "transformed.z+=getPos(transformed.xyz);",
        "#include <beginnormal_vertex>": "objectNormal=getNormal(position.xyz);",
      },
      fragment: {
        "#include <dithering_fragment>": "float rn=noise(gl_FragCoord.xy);gl_FragColor.rgb-=rn/15.*uNoiseIntensity;",
      },
      material: { fog: true },
      uniforms: {
        diffuse: new THREE.Color(...hexToNormalizedRGB("#050a14")),
        time: { shared: true, mixed: true, linked: true, value: 0 },
        roughness: 0.3, metalness: 0.4,
        uSpeed: { shared: true, mixed: true, linked: true, value: speed },
        envMapIntensity: 10,
        uNoiseIntensity: noiseIntensity,
        uScale: scale,
      },
    }),
    [speed, noiseIntensity, scale],
  )
  return (
    <CanvasWrapper>
      <group rotation={[0, 0, degToRad(rotation)]}>
        <PlaneNoise ref={meshRef} material={beamMaterial} count={beamNumber} width={beamWidth} height={beamHeight} />
        <DirLight color={lightColor} position={[0, 3, 10]} />
      </group>
      <ambientLight intensity={0.6} />
      <color attach="background" args={["#050a14"]} />
      <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={30} />
    </CanvasWrapper>
  )
}

// ── Shimmer Button ─────────────────────────────────────────────────────────
interface ShimmerBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "lg"
  children: React.ReactNode
}
const ShimmerBtn = ({ variant = "default", size = "sm", className = "", children, ...props }: ShimmerBtnProps) => {
  const variants = {
    default: "bg-white text-black hover:bg-gray-100",
    outline: "border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30",
    ghost: "text-white/90 hover:text-white hover:bg-white/10",
  }
  const sizes = { sm: "h-9 px-4 py-2 text-sm", lg: "px-8 py-5 text-base" }
  return (
    <button className={`group relative overflow-hidden rounded-full inline-flex items-center justify-center font-semibold transition-all focus-visible:outline-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center">{children}</span>
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </button>
  )
}

// ── MAIN HERO ──────────────────────────────────────────────────────────────
export default function EtherealBeamsHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050a14]">

      {/* ── Beams 3D background ── */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={2.5}
          beamHeight={18}
          beamNumber={14}
          lightColor="#38bdf8"
          speed={2}
          noiseIntensity={1.8}
          scale={0.16}
          rotation={40}
        />
      </div>

      {/* ── Gradient overlay for readability ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050a14]/70 via-transparent to-[#050a14]/40 pointer-events-none" />
      {/* Purple accent glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 75% 30%, rgba(168,85,247,0.12) 0%, transparent 55%)' }} />

      {/* ── Animated collapsible nav ── */}
      <div className="relative z-30">
        <AnimatedNav />
      </div>

      {/* ── Hero content ── */}
      <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 text-sm text-white/85">
              <Shield className="h-4 w-4 text-cyan-400" />
              Ciberseguridad táctica para entornos críticos
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
              Protege lo que{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                más importa.
              </span>
              <br />
              <span className="text-white/80">IA aplicada.</span>
            </h1>

            {/* Subtitle */}
            <p className="mb-10 text-lg leading-8 text-white/65 sm:text-xl max-w-3xl mx-auto">
              UltriAtech combina ciberseguridad táctica e inteligencia artificial para proteger activos críticos,
              detectar amenazas avanzadas y automatizar operaciones enterprise.
            </p>

            {/* Service pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {["🔍 Gestión de vulnerabilidades","⚔️ Hacking ético","👁️ OSINT & Threat Intel","🚨 Ransomware IR","🤖 IA aplicada"].map(s => (
                <span key={s} className="inline-flex items-center rounded-full bg-white/6 ring-1 ring-white/12 backdrop-blur-sm px-3 py-1.5 text-xs text-white/65">
                  {s}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <Link href="/contacto">
                <ShimmerBtn size="lg" className="shadow-2xl shadow-cyan-400/20">
                  Agendar diagnóstico
                  <ArrowRight className="ml-2 h-5 w-5" />
                </ShimmerBtn>
              </Link>
              <Link href="/servicios">
                <ShimmerBtn variant="outline" size="lg">
                  Ver servicios
                </ShimmerBtn>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { num: "24/7", label: "Monitoreo SOC" },
                { num: "100%", label: "Confidencial" },
                { num: "<1h",  label: "Respuesta a incidentes" },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{s.num}</div>
                  <div className="text-white/50 text-sm">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Frameworks strip ── */}
      <div className="relative z-10 pb-10">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs text-white/35 text-center uppercase tracking-[0.2em] mb-5">Metodologías y marcos</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["OWASP","NIST CSF","ISO 27001","MITRE ATT&CK","CIS Benchmarks"].map(f => (
              <div key={f} className="rounded-lg bg-white/4 ring-1 ring-white/8 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-white/45 hover:text-white/75 hover:bg-white/8 transition-all cursor-default">
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
