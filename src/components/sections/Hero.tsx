"use client";

import { motion } from "motion/react";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { DotWave } from "@/components/animations/DotWave";

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
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-white"
    >
      {/* DotWave Background — full height, wave clears right column area */}
      <div className="absolute inset-0 z-0">
        <DotWave />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-32 md:px-6 md:pt-28 flex flex-col min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-start flex-1">

          {/* Left Column: Heading */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-gray-900"
            >
              Automatiza <br className="hidden md:block" />
              el trabajo <br className="hidden md:block" />
              que ralentiza <br className="hidden md:block" />
              a tu equipo
            </motion.h1>
          </div>

          {/* Right Column: Subheader + Buttons */}
          <div className="flex flex-col items-start md:items-end gap-8 md:pb-2 md:self-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 max-w-md md:text-right self-start md:self-end"
            >
              IA para la industria alimentaria. Conectamos tus sistemas, eliminamos el trabajo manual y te devolvemos horas cada semana.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 self-start md:self-end"
            >
              <MovingBorderButton
                onClick={() => handleScrollToSection("#contacto")}
                borderRadius="0"
                containerClassName="h-40 w-full sm:w-72"
                borderClassName="bg-[radial-gradient(rgb(45,106,79)_40%,transparent_60%)]"
                className="border-brand-600/20 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 cursor-pointer px-5 pt-5 pb-5 flex items-start justify-between w-full"
              >
                <span className="max-w-[8rem] text-left leading-snug">Agenda una llamada</span>
                <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </MovingBorderButton>

              <button
                onClick={() => handleScrollToSection("#soluciones")}
                className="flex h-40 w-full sm:w-72 items-start justify-between rounded-none border-2 border-gray-300 bg-white/80 px-5 pt-5 pb-5 text-base font-medium text-gray-700 backdrop-blur-sm transition-all hover:border-brand-500 hover:text-brand-600"
              >
                <span className="max-w-[8rem] text-left leading-snug">Ver soluciones</span>
                <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>

      </div>

      <a href="#soluciones" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-brand-500 transition-colors"
        >
          <span className="text-sm">Descubre más</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </a>
    </section>
  );
}
