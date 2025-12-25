"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Toast, ToastViewport, type ToastState } from "@/components/ui/toast";

const initialState = {
  name: "",
  email: "",
  company: "",
  role: "",
  service: "",
  message: ""
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const isValid = useMemo(() => {
    return (
      formState.name.trim() &&
      formState.email.includes("@") &&
      formState.company.trim() &&
      formState.service.trim() &&
      formState.message.trim().length > 10
    );
  }, [formState]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formState.name.trim()) nextErrors.name = "Nombre requerido";
    if (!formState.email.includes("@"))
      nextErrors.email = "Correo inválido";
    if (!formState.company.trim()) nextErrors.company = "Empresa requerida";
    if (!formState.service.trim()) nextErrors.service = "Selecciona un servicio";
    if (formState.message.trim().length < 10)
      nextErrors.message = "Cuéntanos un poco más";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setToasts((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: "Revisa los campos obligatorios",
          description: "Completa la información requerida para continuar.",
          variant: "error"
        }
      ]);
      return;
    }

    setToasts((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "Solicitud enviada",
        description: "Nuestro equipo responderá en menos de 24 horas hábiles.",
        variant: "success"
      }
    ]);
    setFormState(initialState);
  };

  const handleDismiss = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs text-slate-300">Nombre completo*</label>
            <Input
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Nombre y apellido"
            />
            {errors.name ? (
              <p className="text-xs text-rose-200">{errors.name}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className="text-xs text-slate-300">Correo corporativo*</label>
            <Input
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="nombre@empresa.com"
            />
            {errors.email ? (
              <p className="text-xs text-rose-200">{errors.email}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className="text-xs text-slate-300">Empresa*</label>
            <Input
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Nombre de la empresa"
            />
            {errors.company ? (
              <p className="text-xs text-rose-200">{errors.company}</p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className="text-xs text-slate-300">Rol</label>
            <Input
              name="role"
              value={formState.role}
              onChange={handleChange}
              placeholder="CTO, CISO, Operaciones"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-300">Servicio de interés*</label>
          <Select
            name="service"
            value={formState.service}
            onChange={handleChange}
          >
            <option value="">Seleccionar</option>
            <option value="ia">IA aplicada</option>
            <option value="ciberseguridad">Ciberseguridad</option>
            <option value="software">Software enterprise</option>
            <option value="assessment">Assessment integral</option>
          </Select>
          {errors.service ? (
            <p className="text-xs text-rose-200">{errors.service}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs text-slate-300">Mensaje*</label>
          <Textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre el desafío, objetivos y plazos."
          />
          {errors.message ? (
            <p className="text-xs text-rose-200">{errors.message}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={!isValid}>
            Enviar solicitud
          </Button>
          <p className="text-xs text-slate-400">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </form>
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">
            Qué sigue después de contactarnos
          </h3>
          <ol className="mt-4 space-y-3 text-sm text-slate-300">
            <li>1. Validamos tu necesidad y contexto operativo.</li>
            <li>2. Proponemos un diagnóstico con alcance y riesgos.</li>
            <li>3. Recibes una propuesta con fases, entregables y KPIs.</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-sm text-cyan-100">
          Información de contacto
          <ul className="mt-3 space-y-2 text-xs text-cyan-100">
            <li>• contacto@ultriatech.com</li>
            <li>• +52 55 0000 0000</li>
            <li>• Disponibilidad: Lun-Vie 9:00 - 18:00</li>
          </ul>
        </div>
      </div>
      <ToastViewport>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} onDismiss={handleDismiss} />
        ))}
      </ToastViewport>
    </div>
  );
}
