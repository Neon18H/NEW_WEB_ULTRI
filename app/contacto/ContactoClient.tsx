"use client";

import { useSearchParams } from "next/navigation";

import { ContactForm } from "@/components/sections/contact-form";

export default function ContactoClient() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const defaultService = service === "soc-completo" ? "soc-completo" : "";

  return <ContactForm defaultService={defaultService} />;
}
