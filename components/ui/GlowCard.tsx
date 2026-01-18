import * as React from "react";

import { cn } from "@/lib/utils";

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlowCard({ className, ...props }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-cyan-400/30 bg-white/5 p-6 shadow-[0_0_40px_rgba(56,189,248,0.18)] backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[28px] before:bg-cyan-400/10 before:blur-2xl",
        className
      )}
      {...props}
    />
  );
}
