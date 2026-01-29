"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

type BackgroundVariant = "css" | "canvas";

// Toggle the variant here: "css" (default) or "canvas".
const DNA_BACKGROUND_VARIANT: BackgroundVariant = "css";

// Easy tuning knobs for both variants.
const DNA_CONFIG = {
  glowOpacity: 0.35,
  overlayOpacity: 0.7,
  gridOpacity: 0.08,
  animationSpeed: 0.35,
  particleDensity: 48,
  strandAmplitude: 120,
  strandRadius: 110,
  strandWidth: 1.25
};

export function BackgroundDNA({
  variant = DNA_BACKGROUND_VARIANT
}: {
  variant?: BackgroundVariant;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (variant !== "canvas" || !canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrame = 0;
    let resizeFrame = 0;
    let width = 0;
    let height = 0;
    let devicePixelRatio = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const onResize = () => {
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        setCanvasSize();
        drawFrame(performance.now());
      });
    };

    const drawFrame = (time: number) => {
      if (!width || !height) {
        setCanvasSize();
      }

      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(7, 10, 18, 0.15)";
      context.fillRect(0, 0, width, height);

      const centerX = width * 0.55;
      const centerY = height * 0.45;
      const count = Math.max(30, Math.min(80, DNA_CONFIG.particleDensity));
      const amplitude = DNA_CONFIG.strandAmplitude;
      const radius = DNA_CONFIG.strandRadius;
      const speed = DNA_CONFIG.animationSpeed * 0.0015;
      const t = time * speed;

      context.lineWidth = DNA_CONFIG.strandWidth;
      context.strokeStyle = "rgba(56, 189, 248, 0.35)";
      context.shadowColor = "rgba(56, 189, 248, 0.35)";
      context.shadowBlur = 18;

      for (let strand = 0; strand < 2; strand += 1) {
        context.beginPath();
        for (let i = 0; i < count; i += 1) {
          const progress = i / (count - 1);
          const angle = progress * Math.PI * 2 + t + strand * Math.PI;
          const x = centerX + Math.cos(angle) * radius;
          const y =
            centerY +
            (progress - 0.5) * amplitude * 2 +
            Math.sin(angle * 1.5) * (amplitude * 0.25);

          if (i === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
        context.stroke();
      }

      context.shadowBlur = 10;
      for (let i = 0; i < count; i += 1) {
        const progress = i / (count - 1);
        const angle = progress * Math.PI * 2 + t;
        const x1 = centerX + Math.cos(angle) * radius;
        const y1 =
          centerY +
          (progress - 0.5) * amplitude * 2 +
          Math.sin(angle * 1.5) * (amplitude * 0.25);
        const x2 = centerX + Math.cos(angle + Math.PI) * radius;
        const y2 =
          centerY +
          (progress - 0.5) * amplitude * 2 +
          Math.sin((angle + Math.PI) * 1.5) * (amplitude * 0.25);

        context.strokeStyle = "rgba(148, 163, 184, 0.2)";
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();

        context.fillStyle = "rgba(56, 189, 248, 0.6)";
        context.beginPath();
        context.arc(x1, y1, 1.6, 0, Math.PI * 2);
        context.fill();

        context.fillStyle = "rgba(168, 85, 247, 0.55)";
        context.beginPath();
        context.arc(x2, y2, 1.6, 0, Math.PI * 2);
        context.fill();
      }
    };

    setCanvasSize();
    drawFrame(performance.now());

    if (!prefersReducedMotion) {
      const loop = (time: number) => {
        drawFrame(time);
        animationFrame = requestAnimationFrame(loop);
      };
      animationFrame = requestAnimationFrame(loop);
    }

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      cancelAnimationFrame(resizeFrame);
      window.removeEventListener("resize", onResize);
    };
  }, [variant]);

  return (
    <div
      className="dna-background"
      aria-hidden="true"
      style={
        {
          "--dna-glow-opacity": DNA_CONFIG.glowOpacity,
          "--dna-overlay-opacity": DNA_CONFIG.overlayOpacity,
          "--dna-grid-opacity": DNA_CONFIG.gridOpacity
        } as CSSProperties
      }
    >
      {variant === "css" ? (
        <div className="dna-css">
          <span className="dna-strand strand-a" />
          <span className="dna-strand strand-b" />
          <span className="dna-rungs" />
        </div>
      ) : (
        <canvas ref={canvasRef} className="dna-canvas" />
      )}
      <div className="dna-overlay" />
    </div>
  );
}
