"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export type ToastVariant = "success" | "error" | "info";

export type ToastState = {
  id: number;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

export function Toast({
  toast,
  onDismiss
}: {
  toast: ToastState;
  onDismiss: (id: number) => void;
}) {
  const variantStyles: Record<ToastVariant, string> = {
    success: "border-emerald-400/40 bg-emerald-400/10 text-emerald-100",
    error: "border-rose-400/40 bg-rose-400/10 text-rose-100",
    info: "border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
  };

  return (
    <div
      className={cn(
        "w-full max-w-sm rounded-2xl border px-4 py-3 shadow-glass",
        variantStyles[toast.variant ?? "info"]
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">{toast.title}</p>
          {toast.description ? (
            <p className="mt-1 text-xs text-slate-200">{toast.description}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          className="text-xs text-slate-200/80 hover:text-white"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export function ToastViewport({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {children}
    </div>
  );
}
