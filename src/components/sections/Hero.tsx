"use client";

import { motion } from "motion/react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function Hero() {
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
        <div className="relative min-h-[62svh] overflow-hidden lg:min-h-[66svh]">
          <div className="relative z-20 flex min-h-[62svh] flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[66svh] lg:px-12 lg:py-14 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-gray-500 shadow-[0_18px_40px_-28px_rgba(31,31,31,0.45)]"
            >
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              IA aplicada a operaciones reales
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-5xl font-heading text-[clamp(2rem,4vw,3.9rem)] font-semibold leading-[1.02] text-gray-900 lg:max-w-[52rem]"
            >
              La mayoría prueba la IA.
              <br className="hidden md:block" />
              Muy pocas empresas consiguen que funcione
              <br className="hidden md:block" />
              en producción.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 max-w-3xl text-[clamp(1rem,1.35vw,1.25rem)] leading-8 text-gray-500 lg:max-w-[38rem]"
            >
              Tahona convierte experimentos, procesos manuales y conocimiento disperso en agentes, automatizaciones y capas de contexto que generan impacto real en el día a día.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => handleScrollToSection("#contacto")}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-600 px-7 text-base font-medium text-white shadow-[0_22px_45px_-24px_rgba(36,88,64,0.9)] transition-all hover:bg-brand-700 hover:shadow-[0_26px_55px_-24px_rgba(27,69,48,0.95)] cursor-pointer"
              >
                Cuéntanos tu caso
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>

              <button
                onClick={() => handleScrollToSection("#proceso")}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-gray-300 bg-white/90 px-7 text-base font-medium text-gray-700 shadow-[0_16px_35px_-28px_rgba(31,31,31,0.45)] transition-all hover:border-brand-300 hover:text-brand-600 cursor-pointer"
              >
                Ver cómo trabajamos
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </button>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
