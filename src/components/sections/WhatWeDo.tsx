"use client";

import { FadeInView } from "@/components/animations/FadeInView";

const VALUE_POINTS = [
  "Automatización que se adapta a tu operativa, no al revés",
  "Soluciones conectadas a tus sistemas actuales",
  "Resultados medibles desde las primeras semanas",
  "Contigo en cada paso, no solo en la entrega",
] as const;

export function WhatWeDo() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Heading + Image */}
          <div className="flex flex-col gap-8">
            <FadeInView>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                Inteligencia aplicada, operaciones ágiles y resultados que se
                miden.
              </h2>
            </FadeInView>

            <FadeInView delay={0.15}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-none border border-gray-200">
                <img
                  src="/images/what-we-do.png"
                  alt="Equipo revisando producto en un entorno de producción alimentaria con luz natural"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeInView>
          </div>

          {/* Right: Description + Bullet points + CTA */}
          <div className="flex flex-col lg:justify-between">
            <FadeInView delay={0.1}>
              <p className="text-base leading-relaxed text-gray-500 md:text-lg">
                Somos un equipo de IA especializado en la industria alimentaria.
                Conectamos tus sistemas, automatizamos lo repetitivo y te
                devolvemos horas cada semana — sin cambiar lo que ya funciona.
              </p>
            </FadeInView>

            <FadeInView delay={0.2}>
              <ul className="mt-8 lg:mt-0">
                {VALUE_POINTS.map((point) => (
                  <li
                    key={point}
                    className="border-b border-gray-200 py-5 text-sm text-gray-900 md:text-base"
                  >
                    <span className="mr-3 text-gray-300">&#x2022;</span>
                    {point}
                  </li>
                ))}
              </ul>
            </FadeInView>

            <FadeInView delay={0.3}>
              <a
                href="#soluciones"
                className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-none border-2 border-gray-300 bg-white/80 px-8 py-4 text-sm font-medium text-gray-700 backdrop-blur-sm transition-all hover:border-brand-500 hover:text-brand-600 lg:mt-0"
              >
                Más sobre nosotros
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
