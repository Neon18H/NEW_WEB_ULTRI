import { cn } from "@/lib/utils";

type TechBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100",
        className
      )}
    >
      {children}
    </span>
  );
}
