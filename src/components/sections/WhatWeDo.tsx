"use client";

import { FadeInView } from "@/components/animations/FadeInView";

const BULLETS: readonly string[] = [
  "Procesos con demasiados pasos manuales.",
  "Documentos que requieren revisión, extracción o clasificación.",
  "Información repartida entre Drive, hojas de cálculo, CRM, ERP, correo y herramientas internas.",
  "Reporting que llega tarde o depende de preparación manual.",
  "Equipos que necesitan adoptar una solución sin añadir otra capa de fricción.",
];

function FlowDiagram() {
  return (
    <div className="relative min-h-[43rem] overflow-hidden rounded-[2rem] border border-gray-200/90 bg-white/78 shadow-[0_28px_80px_-52px_rgba(31,31,31,0.55)] backdrop-blur-md">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0)_44%,rgba(240,247,243,0.72)_100%)]" />

      <img
        src="/images/why-tahona-flow.svg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain p-6 opacity-[0.98] sm:p-8 lg:p-10"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export function WhatWeDo() {
  return (
    <section id="que-hacemos" className="relative overflow-hidden bg-surface py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-16">
        <FadeInView>
          <div>
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <span className="h-px w-10 bg-brand-300" />
              <span className="font-medium text-gray-600">Qué hacemos</span>
            </div>
            <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-tight text-gray-900 text-balance sm:text-4xl md:text-5xl">
              Mejoramos operaciones internas donde procesos, datos y
              herramientas se cruzan.
            </h2>
            <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-gray-500">
              <p>
                El trabajo no empieza por elegir una tecnología. Empieza por
                entender cómo funciona la operación, qué información se mueve,
                dónde se repite trabajo manual y qué necesita el equipo para
                operar con más control.
              </p>
              <p>
                A partir de ese diagnóstico se construyen herramientas internas,
                integraciones, bases de conocimiento, procesamiento documental o
                automatización con IA cuando encaja con el flujo real.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {BULLETS.map((item) => (
                <li
                  className="grid grid-cols-[0.75rem_1fr] gap-4 text-base leading-7 text-gray-600"
                  key={item}
                >
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeInView>

        <FadeInView delay={0.12}>
          <FlowDiagram />
        </FadeInView>
      </div>
    </section>
  );
}
