"use client";

import { FadeInView } from "@/components/animations/FadeInView";

function AiValueCurve() {
  return (
    <svg
      aria-label="Curva de valor de la IA aplicada"
      className="h-full w-full"
      role="img"
      viewBox="0 0 620 440"
    >
      <defs>
        <linearGradient id="ai-curve-fill" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgb(45, 106, 79)" stopOpacity="0.06" />
          <stop offset="62%" stopColor="rgb(45, 106, 79)" stopOpacity="0.09" />
          <stop offset="100%" stopColor="rgb(45, 106, 79)" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <g transform="translate(62 50)">
        <line stroke="rgb(218, 218, 218)" strokeDasharray="2 8" x1="162" x2="162" y1="0" y2="324" />
        <line stroke="rgb(218, 218, 218)" strokeDasharray="2 8" x1="280" x2="280" y1="0" y2="324" />
        <line stroke="rgb(218, 218, 218)" strokeDasharray="2 8" x1="408" x2="408" y1="0" y2="324" />
        <line stroke="rgb(218, 218, 218)" strokeDasharray="2 8" x1="516" x2="516" y1="0" y2="324" />

        <path
          d="M58 324 L58 0"
          fill="none"
          stroke="rgb(154, 154, 154)"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path d="M52 10 L58 0 L64 10 Z" fill="rgb(154, 154, 154)" />
        <path
          d="M58 324 L536 324"
          fill="none"
          stroke="rgb(154, 154, 154)"
          strokeLinecap="round"
          strokeWidth="1.5"
        />
        <path d="M526 318 L536 324 L526 330 Z" fill="rgb(154, 154, 154)" />

        <text
          className="font-mono"
          fill="rgb(72, 72, 72)"
          fontSize="14"
          letterSpacing="0.08em"
          textAnchor="middle"
          transform="rotate(-90 20 165)"
          x="20"
          y="165"
        >
          Valor
        </text>
        <text
          className="font-mono"
          fill="rgb(72, 72, 72)"
          fontSize="14"
          letterSpacing="0.08em"
          textAnchor="middle"
          x="298"
          y="358"
        >
          Automatización
        </text>

        <path
          d="M58 324 C112 324 141 322 162 316 C211 307 247 298 280 284 C339 259 374 236 408 204 C467 148 502 74 516 36 C528 15 535 0 536 0 L536 324 Z"
          fill="url(#ai-curve-fill)"
        />
        <path
          d="M58 324 C112 324 141 322 162 316 C211 307 247 298 280 284 C339 259 374 236 408 204 C467 148 502 74 516 36 C528 15 535 0 536 0"
          fill="none"
          stroke="rgb(45, 106, 79)"
          strokeLinecap="round"
          strokeWidth="2.4"
        />

        <g className="font-sans" fill="rgb(31, 31, 31)">
          <g transform="translate(60 244)">
            <text fill="rgb(27, 69, 48)" fontSize="11" fontWeight="700" letterSpacing="0.08em">
              NIVEL 01
            </text>
            <text fontSize="13" fontWeight="800" y="17">Uso con criterio</text>
            <text fill="rgb(74, 74, 74)" fontSize="11" y="33">Decisión humana.</text>
          </g>

          <g transform="translate(174 178)">
            <text fill="rgb(27, 69, 48)" fontSize="11" fontWeight="700" letterSpacing="0.08em">
              NIVEL 02
            </text>
            <text fontSize="13" fontWeight="800" y="17">Asistentes específicos</text>
            <text fill="rgb(74, 74, 74)" fontSize="11" y="33">Lectura y revisión.</text>
          </g>

          <g transform="translate(306 112)">
            <text fill="rgb(27, 69, 48)" fontSize="11" fontWeight="700" letterSpacing="0.08em">
              NIVEL 03
            </text>
            <text fontSize="13" fontWeight="800" y="17">Automatización</text>
            <text fontSize="13" fontWeight="800" y="31">supervisada</text>
            <text fill="rgb(74, 74, 74)" fontSize="11" y="47">Reglas y trazabilidad.</text>
          </g>

          <g transform="translate(368 8)">
            <text fill="rgb(27, 69, 48)" fontSize="11" fontWeight="700" letterSpacing="0.08em">
              NIVEL 04
            </text>
            <text fontSize="13" fontWeight="800" y="17">Agentes con contexto</text>
            <text fill="rgb(74, 74, 74)" fontSize="11" y="33">Permisos y límites.</text>
          </g>
        </g>

        <g fill="rgb(245, 244, 246)" stroke="rgb(45, 106, 79)" strokeWidth="2">
          <circle cx="162" cy="316" r="5.5" />
          <circle cx="280" cy="284" r="5.5" />
          <circle cx="408" cy="204" r="5.5" />
        </g>
        <circle cx="516" cy="36" fill="rgb(45, 106, 79)" r="6.5" />
      </g>
    </svg>
  );
}

export function AiApplied() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-28">
      <div className="section-fade-white-to-surface" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-16">
        <FadeInView>
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-10 bg-brand-300" />
            <span className="font-medium text-gray-600">IA aplicada</span>
          </div>
          <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-tight text-gray-900 text-balance sm:text-4xl md:text-5xl">
            IA cuando mejora un proceso, no cuando solo añade ruido.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
            Trabajamos con modelos, asistentes y agentes cuando ayudan a leer
            documentos, preparar información, ejecutar pasos repetibles, revisar
            resultados o conectar herramientas internas. Cada sistema debe
            tener límites, trazabilidad y un punto claro de supervisión.
          </p>
        </FadeInView>

        <FadeInView delay={0.12}>
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/90 bg-[#f8f8f8] shadow-[0_28px_80px_-52px_rgba(31,31,31,0.5)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0)_52%,rgba(240,247,243,0.5)_100%)]" />
            <div className="relative aspect-[1.34] min-h-[22rem] p-4 sm:p-6">
              <AiValueCurve />
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
