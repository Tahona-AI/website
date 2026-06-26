"use client";

import { motion } from "motion/react";
import { WavyBackground } from "@/components/ui/wavy-background";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
  secondaryCtaBaseClass,
} from "@/components/ui/cta-styles";

export function Hero() {
  const discoveryCallUrl = "#contacto";

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-16 md:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute top-[-76%] bottom-[-36%] left-[-8%] right-[-8%] rotate-[24deg] opacity-95">
          <WavyBackground
            aria-hidden="true"
            backgroundFill="rgba(252,254,253,0)"
            blur={18}
            className="hidden"
            colors={[
              "rgba(226,240,232,0.92)",
              "rgba(183,211,194,0.96)",
              "rgba(127,184,158,0.98)",
              "rgba(45,106,79,0.92)",
            ]}
            containerClassName="h-full w-full"
            speed="slow"
            waveCount={6}
            waveOpacity={0.5}
            waveWidth={52}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="relative min-h-[62svh] lg:min-h-[66svh]">
          <div className="relative z-20 flex min-h-[62svh] flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[66svh] lg:px-12 lg:py-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-gray-500 shadow-[0_18px_40px_-28px_rgba(31,31,31,0.45)]"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Automatización inteligente para PYMEs
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-5xl font-heading text-[clamp(2rem,4vw,3.9rem)] font-semibold leading-[1.02] text-gray-900 lg:max-w-[52rem]"
            >
              La tecnología ya existe.
              <br className="hidden md:block" />
              Falta la implementación adecuada.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-3xl text-[clamp(1rem,1.35vw,1.25rem)] leading-8 text-gray-500 lg:max-w-[38rem]"
            >
              Equipo pequeño de alto rendimiento que implementa automatización inteligente en procesos reales de tu empresa. Soluciones a medida, integradas con criterio práctico. Sin cambiar lo que ya funciona.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => handleScrollToSection("#contacto")}
                className={`${primaryCtaBaseClass} min-h-14 cursor-pointer px-3 pl-6 text-base font-semibold sm:min-w-[240px]`}
              >
                <span>Hablemos sin compromiso</span>
                <span className={`${primaryCtaArrowClass} h-10 w-10`} aria-hidden="true">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </button>

              <button
                onClick={() => handleScrollToSection("#proceso")}
                className={`${secondaryCtaBaseClass} min-h-14 cursor-pointer justify-center px-6 text-base font-semibold sm:min-w-[240px]`}
              >
                <span>Ver cómo trabajamos</span>
              </button>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              href={discoveryCallUrl}
              className="group relative mt-6 flex w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/82 p-4 text-left shadow-[0_14px_36px_-28px_rgba(31,31,31,0.22)] backdrop-blur-xl transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-brand-200/80 hover:bg-white/95 hover:shadow-[0_18px_42px_-28px_rgba(31,31,31,0.26)] lg:absolute lg:right-12 lg:bottom-14 lg:mt-0 xl:right-16"
            >
              <span
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0)_42%,rgba(240,247,243,0.55)_100%)] opacity-80 transition-opacity duration-200 motion-reduce:transition-none group-hover:opacity-100"
                aria-hidden="true"
              />

              <span className="relative z-10 flex w-full items-start gap-4">
                <span className="relative inline-flex shrink-0">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-brand-50 text-brand-700 shadow-[0_18px_36px_-24px_rgba(31,31,31,0.48)] ring-1 ring-white/90">
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h8M8 14h5m8-2a9 9 0 1 1-4.46-7.77" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 4v5h-5" />
                    </svg>
                  </span>
                  <span className="absolute -right-1.5 -bottom-1.5 h-4 w-4 rounded-full border-2 border-white bg-brand-500" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[0.68rem] font-medium uppercase tracking-[0.14em] text-brand-700">
                      Llamada de descubrimiento
                    </span>
                      <span className="rounded-full border border-brand-100 bg-brand-50/90 px-2.5 py-1 text-[0.68rem] font-medium text-brand-700">
                        30 min
                    </span>
                  </span>

                  <span className="mt-2 block font-heading text-xl font-semibold tracking-[-0.03em] text-gray-900">
                    Si quieres verlo en una llamada breve, deja tu caso aquí.
                  </span>

                  <span className="mt-2 block max-w-[24rem] text-sm leading-relaxed text-gray-600">
                    Sin presión comercial. Revisamos tu contexto, vemos si encaja y preparamos una conversación útil.
                  </span>

                  <span className="mt-4 flex items-center justify-between gap-4 border-t border-white/80 pt-3 text-sm font-medium text-gray-700">
                    <span>Reservar una llamada</span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 shadow-[0_14px_28px_-22px_rgba(36,88,64,0.42)] transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7m0 0H8.5M17 7v8.5" />
                      </svg>
                    </span>
                  </span>
                </span>
              </span>
            </motion.a>

          </div>
        </div>

      </div>
    </section>
  );
}
