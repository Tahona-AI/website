"use client";

import { useState } from "react";
import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  ShieldIcon,
  UserCheckIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormErrors {
  name?: string;
  email?: string;
  details?: string;
  submit?: string;
}

type FormField = "name" | "email" | "details";

interface ContactFormData {
  name: string;
  email: string;
  details: string;
}

const trustBadges = [
  { icon: ClockIcon, text: "Respuesta en 24h" },
  { icon: UserCheckIcon, text: "Hablamos de tu caso concreto" },
  { icon: ShieldIcon, text: "Sin compromiso" },
];

function isFormField(value: string): value is FormField {
  return value === "name" || value === "email" || value === "details";
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    details: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    } else if (formData.name.length > 100) {
      newErrors.name = "El nombre es demasiado largo";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Por favor, introduce un email válido";
    }

    if (formData.details.length < 10) {
      newErrors.details = "Por favor, cuéntanos un poco más sobre tu proyecto";
    } else if (formData.details.length > 2000) {
      newErrors.details = "El mensaje es demasiado largo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
       const webhookUrl = "https://n8n.tahona.ai/webhook/tahona-form";
      
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('details', formData.details);

      await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // En modo no-cors no podemos leer la respuesta, asumimos éxito si no hay error de red
      setShowModal(true);
      setFormData({ name: "", email: "", details: "" });
    } catch (error) {
      setErrors({
        submit: "Hubo un error al enviar el formulario. Inténtalo de nuevo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    if (!isFormField(name)) {
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <>
      <section id="contacto" className="relative overflow-hidden bg-surface py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(249,249,249,0.94)_38%,rgba(245,244,246,0.78)_74%,rgba(245,244,246,0)_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 hidden justify-between lg:flex">
            <div className="h-full w-px bg-gray-200/80" />
            <div className="h-full w-px bg-gray-200/80" />
          </div>

          <div className="relative z-20 px-6 sm:px-10 lg:px-16">
            <div>
              <div className="inline-flex items-center gap-3 text-sm text-gray-500">
                <span className="h-px w-10 bg-brand-300" />
                <span className="font-medium text-gray-600">Contacto directo</span>
              </div>
              <h2 className="mt-4 max-w-4xl font-heading text-3xl font-bold text-gray-900 text-balance sm:text-4xl md:text-5xl">
                ¿Hablamos de tu negocio?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 text-pretty md:text-lg">
                Cuéntanos qué te quita más tiempo en el día a día. Una llamada de 20 minutos para ver si podemos ayudarte.
              </p>
            </div>

          <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-8 lg:col-span-5">
              <div className="rounded-[1.75rem] border border-white/75 bg-white/78 p-6 shadow-[0_24px_70px_-46px_rgba(31,31,31,0.42)] backdrop-blur-md sm:p-7">
                <div className="space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-700">
                    Respuesta clara, sin vueltas
                  </p>
                  <p className="max-w-lg text-base leading-relaxed text-gray-600 text-pretty">
                    Te respondemos con un enfoque práctico: si hay encaje, te contamos por dónde empezar y qué resultado puedes esperar en primeras semanas.
                  </p>
                </div>

                <div className="mt-6 border-t border-white/70 pt-2">
                  <a
                    href="mailto:info@tahona.ai"
                    className="group mt-3 flex items-start gap-4 rounded-[1.5rem] border border-white/75 bg-white/78 px-5 py-5 shadow-[0_20px_50px_-42px_rgba(31,31,31,0.45)] transition-all duration-200 motion-reduce:transition-none hover:border-brand-200/70 hover:bg-white/88 hover:text-brand-700 hover:shadow-[0_28px_60px_-44px_rgba(31,31,31,0.48)]"
                  >
                    <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 shadow-[0_18px_40px_-30px_rgba(36,88,64,0.38)] transition-colors duration-200 motion-reduce:transition-none group-hover:bg-brand-100">
                      <EnvelopeIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.11em] text-gray-500">Correo</p>
                      <p className="mt-1 font-heading text-xl font-semibold text-gray-900">info@tahona.ai</p>
                      <p className="mt-1 text-sm text-gray-600">Ideal si quieres compartir contexto de tu operativa.</p>
                    </div>
                  </a>

                  <a
                    href="tel:+34606518235"
                    className="group mt-3 flex items-start gap-4 rounded-[1.5rem] border border-white/75 bg-white/78 px-5 py-5 shadow-[0_20px_50px_-42px_rgba(31,31,31,0.45)] transition-all duration-200 motion-reduce:transition-none hover:border-brand-200/70 hover:bg-white/88 hover:text-brand-700 hover:shadow-[0_28px_60px_-44px_rgba(31,31,31,0.48)]"
                  >
                    <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 shadow-[0_18px_40px_-30px_rgba(36,88,64,0.38)] transition-colors duration-200 motion-reduce:transition-none group-hover:bg-brand-100">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.11em] text-gray-500">Teléfono</p>
                      <p className="mt-1 font-heading text-xl font-semibold text-gray-900">+34 606 518 235</p>
                      <p className="mt-1 text-sm text-gray-600">Si prefieres resolverlo rápido, lo vemos en una llamada.</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-3 rounded-[1.75rem] border border-white/70 bg-white/68 p-6 shadow-[0_22px_60px_-48px_rgba(31,31,31,0.4)] backdrop-blur-md">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.text} className="flex items-center gap-3 text-sm text-gray-600">
                      <Icon className="h-4 w-4 text-brand-500" />
                      <span>{badge.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/84 p-6 shadow-[0_30px_80px_-40px_rgba(31,31,31,0.45)] backdrop-blur-md sm:p-8 lg:col-span-7 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.92)_48%,rgba(240,247,243,0.78)_100%)]" aria-hidden="true" />
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-800">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    required
                     value={formData.name}
                     onChange={handleInputChange}
                     aria-invalid={Boolean(errors.name)}
                     aria-describedby={errors.name ? "contact-name-error" : undefined}
                     className={cn(
                      "relative h-12 rounded-xl border-white/80 bg-white/92 shadow-[0_18px_40px_-34px_rgba(31,31,31,0.55)] transition-[border-color,box-shadow,background-color] duration-200 motion-reduce:transition-none focus-visible:border-brand-500 focus-visible:bg-white focus-visible:ring-brand-500/20",
                      errors.name && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30"
                    )}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="text-sm text-red-600" role="alert">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-800">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@empresa.com"
                    required
                     value={formData.email}
                     onChange={handleInputChange}
                     aria-invalid={Boolean(errors.email)}
                     aria-describedby={errors.email ? "contact-email-error" : undefined}
                     className={cn(
                      "relative h-12 rounded-xl border-white/80 bg-white/92 shadow-[0_18px_40px_-34px_rgba(31,31,31,0.55)] transition-[border-color,box-shadow,background-color] duration-200 motion-reduce:transition-none focus-visible:border-brand-500 focus-visible:bg-white focus-visible:ring-brand-500/20",
                      errors.email && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30"
                    )}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="text-sm text-red-600" role="alert">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="text-gray-800">¿Qué te quita más tiempo?</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="¿Qué proceso te quita más tiempo hoy? ¿Qué información se pierde o se retrasa entre equipos?"
                    rows={4}
                    required
                     value={formData.details}
                     onChange={handleInputChange}
                     aria-invalid={Boolean(errors.details)}
                     aria-describedby={errors.details ? "contact-details-error" : undefined}
                     className={cn(
                      "relative min-h-36 rounded-[1.25rem] border-white/80 bg-white/92 shadow-[0_18px_40px_-34px_rgba(31,31,31,0.55)] transition-[border-color,box-shadow,background-color] duration-200 motion-reduce:transition-none focus-visible:border-brand-500 focus-visible:bg-white focus-visible:ring-brand-500/20",
                      errors.details && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/30"
                    )}
                  />
                  {errors.details && (
                    <p id="contact-details-error" className="text-sm text-red-600" role="alert">{errors.details}</p>
                  )}
                </div>

                <div className="relative border-t border-white/70 pt-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-sm text-gray-600">Te contestamos en menos de 24 horas con un siguiente paso claro.</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-600 px-8 py-3 text-sm font-medium text-white shadow-[0_22px_45px_-24px_rgba(36,88,64,0.9)] transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_26px_55px_-24px_rgba(27,69,48,0.95)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </div>
                </div>

                {errors.submit && (
                  <p className="text-sm text-red-600" role="alert">
                    {errors.submit}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/45 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/80 bg-white/92 p-8 shadow-[0_34px_90px_-38px_rgba(31,31,31,0.5)] backdrop-blur-md sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.95)_52%,rgba(240,247,243,0.8)_100%)]" aria-hidden="true" />
            <button
              type="button"
              onClick={() => setShowModal(false)}
              aria-label="Cerrar"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/75 bg-white/78 text-gray-400 shadow-[0_16px_40px_-32px_rgba(31,31,31,0.45)] transition-colors duration-200 motion-reduce:transition-none hover:text-gray-700"
            >
              <XIcon className="h-5 w-5" />
            </button>
            <div className="relative">
              <div className="inline-flex items-center gap-3 text-sm text-gray-500">
                <span className="h-px w-8 bg-brand-300" />
                <span className="font-medium text-gray-600">Mensaje recibido</span>
              </div>
              <h3 className="mt-4 font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl">
                ¡Recibido!
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-gray-600 text-pretty">
                Te contestamos en menos de 24 horas.
              </p>

                <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5 text-sm text-gray-600">
                  <EnvelopeIcon className="h-4 w-4 text-brand-600" />
                  <span>Si lo prefieres, también puedes escribir a info@tahona.ai</span>
                </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-600 px-8 py-3 text-sm font-medium text-white shadow-[0_22px_45px_-24px_rgba(36,88,64,0.9)] transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_26px_55px_-24px_rgba(27,69,48,0.95)]"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
