"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const DNA_SETTINGS = {
  primaryColor: "#38bdf8",
  secondaryColor: "#a855f7",
  glowColor: "#7dd3fc",
  rotationSpeed: 0.12,
  segmentDensity: 120,
  glowIntensity: 0.55,
  particleCount: 200,
  lowPower: false
};

type DNAThreeBackgroundProps = {
  enabled?: boolean;
  lowPower?: boolean;
  className?: string;
};

const DNA_DIMENSIONS = {
  radius: 2.2,
  height: 8.5,
  turns: 6,
  strandThickness: 0.06,
  basePairThickness: 0.02
};

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);
    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, [query]);

  return matches;
}

function DnaHelix({
  segments,
  rotationSpeed,
  glowIntensity,
  paused,
  lowPower
}: {
  segments: number;
  rotationSpeed: number;
  glowIntensity: number;
  paused: boolean;
  lowPower: boolean;
}) {
  const groupRef = useRef<THREE.Group | null>(null);
  const pointLightRef = useRef<THREE.PointLight | null>(null);

  const strandGeometry = useMemo(() => {
    const createStrand = (offset: number) => {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i < segments; i += 1) {
        const progress = i / (segments - 1);
        const angle = progress * Math.PI * 2 * DNA_DIMENSIONS.turns + offset;
        const x = Math.cos(angle) * DNA_DIMENSIONS.radius;
        const z = Math.sin(angle) * DNA_DIMENSIONS.radius;
        const y = (progress - 0.5) * DNA_DIMENSIONS.height;
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    };

    const strandA = new THREE.CatmullRomCurve3(createStrand(0));
    const strandB = new THREE.CatmullRomCurve3(createStrand(Math.PI));

    return {
      strandA: new THREE.TubeGeometry(
        strandA,
        Math.max(20, Math.floor(segments * 0.9)),
        DNA_DIMENSIONS.strandThickness,
        lowPower ? 6 : 12,
        false
      ),
      strandB: new THREE.TubeGeometry(
        strandB,
        Math.max(20, Math.floor(segments * 0.9)),
        DNA_DIMENSIONS.strandThickness,
        lowPower ? 6 : 12,
        false
      ),
      basePairs: createBasePairGeometry(segments)
    };
  }, [segments, lowPower]);

  useFrame(({ clock }) => {
    if (paused || !groupRef.current) {
      return;
    }
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * rotationSpeed;
    groupRef.current.rotation.x = Math.sin(time * 0.12) * 0.15;

    if (pointLightRef.current) {
      pointLightRef.current.position.x = Math.sin(time * 0.4) * 4;
      pointLightRef.current.position.z = Math.cos(time * 0.3) * 4;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.45} color={DNA_SETTINGS.glowColor} />
      <pointLight
        ref={pointLightRef}
        intensity={1.1}
        color={DNA_SETTINGS.secondaryColor}
        position={[3, 2, 4]}
      />

      <mesh geometry={strandGeometry.strandA}>
        <meshStandardMaterial
          color={DNA_SETTINGS.primaryColor}
          emissive={DNA_SETTINGS.primaryColor}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.78}
        />
      </mesh>
      <mesh geometry={strandGeometry.strandB}>
        <meshStandardMaterial
          color={DNA_SETTINGS.secondaryColor}
          emissive={DNA_SETTINGS.secondaryColor}
          emissiveIntensity={0.6}
          roughness={0.3}
          metalness={0.2}
          transparent
          opacity={0.78}
        />
      </mesh>

      <mesh geometry={strandGeometry.strandA} scale={1.04}>
        <meshBasicMaterial
          color={DNA_SETTINGS.glowColor}
          transparent
          opacity={0.16 * glowIntensity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh geometry={strandGeometry.strandB} scale={1.04}>
        <meshBasicMaterial
          color={DNA_SETTINGS.glowColor}
          transparent
          opacity={0.16 * glowIntensity}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      <lineSegments geometry={strandGeometry.basePairs}>
        <lineBasicMaterial
          color={"#cbd5f5"}
          transparent
          opacity={0.32}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

function CameraRig({ paused }: { paused: boolean }) {
  useFrame(({ camera, clock }) => {
    if (paused) {
      return;
    }
    const time = clock.getElapsedTime();
    camera.position.x = Math.sin(time * 0.15) * 0.6;
    camera.position.y = Math.sin(time * 0.1) * 0.35;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function createBasePairGeometry(segments: number) {
  const positions = new Float32Array(segments * 2 * 3);

  for (let i = 0; i < segments; i += 1) {
    const progress = i / (segments - 1);
    const angle = progress * Math.PI * 2 * DNA_DIMENSIONS.turns;
    const y = (progress - 0.5) * DNA_DIMENSIONS.height;

    const x1 = Math.cos(angle) * DNA_DIMENSIONS.radius;
    const z1 = Math.sin(angle) * DNA_DIMENSIONS.radius;
    const x2 = Math.cos(angle + Math.PI) * DNA_DIMENSIONS.radius;
    const z2 = Math.sin(angle + Math.PI) * DNA_DIMENSIONS.radius;

    const idx = i * 6;
    positions[idx] = x1;
    positions[idx + 1] = y;
    positions[idx + 2] = z1;
    positions[idx + 3] = x2;
    positions[idx + 4] = y;
    positions[idx + 5] = z2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geometry;
}

export function DNAThreeBackground({
  enabled = true,
  lowPower = DNA_SETTINGS.lowPower,
  className
}: DNAThreeBackgroundProps) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibility = () =>
      setIsVisible(document.visibilityState === "visible");
    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  if (!enabled) {
    return null;
  }

  const lowPowerMode = lowPower || prefersReducedMotion || isMobile;
  const paused = prefersReducedMotion || !isVisible;

  const segments = Math.max(
    40,
    Math.floor(
      DNA_SETTINGS.segmentDensity * (lowPowerMode ? 0.65 : 1)
    )
  );
  const particleCount = Math.max(
    80,
    Math.floor(DNA_SETTINGS.particleCount * (lowPowerMode ? 0.5 : 1))
  );

  return (
    <div className={`dna-background ${className ?? ""}`} aria-hidden="true">
      <Canvas
        className="dna-canvas"
        dpr={lowPowerMode ? 1 : [1, 1.8]}
        frameloop={paused ? "never" : "always"}
        gl={{
          antialias: !lowPowerMode,
          alpha: true,
          powerPreference: lowPowerMode ? "low-power" : "high-performance"
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={42} />
        <CameraRig paused={paused} />
        <DnaHelix
          segments={segments}
          rotationSpeed={DNA_SETTINGS.rotationSpeed}
          glowIntensity={DNA_SETTINGS.glowIntensity}
          paused={paused}
          lowPower={lowPowerMode}
        />
        <DnaParticles count={particleCount} lowPower={lowPowerMode} />
      </Canvas>
      <div className="dna-overlay" />
    </div>
  );
}

function DnaParticles({
  count,
  lowPower
}: {
  count: number;
  lowPower: boolean;
}) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const spreadX = DNA_DIMENSIONS.radius * 5.2;
    const spreadY = DNA_DIMENSIONS.height * 1.8;
    const spreadZ = DNA_DIMENSIONS.radius * 5.2;

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = THREE.MathUtils.randFloatSpread(spreadX * 2);
      positions[i * 3 + 1] = THREE.MathUtils.randFloatSpread(spreadY);
      positions[i * 3 + 2] = THREE.MathUtils.randFloatSpread(spreadZ * 2);
    }

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    return bufferGeometry;
  }, [count]);

  return (
    <points geometry={geometry}>
      <pointsMaterial
        color={"#7dd3fc"}
        size={lowPower ? 0.02 : 0.035}
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
