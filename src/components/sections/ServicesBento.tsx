"use client";

import { cn } from "@/lib/utils";
import { FadeInView } from "@/components/animations/FadeInView";

interface BentoCard {
  readonly title: string;
  readonly description: string;
  readonly className?: string;
}

const CARDS: readonly BentoCard[] = [
  {
    title: "Procesamiento documental",
    description:
      "Facturas, albaranes y documentos procesados en segundos. Sin teclear, sin errores.",
    className: "md:col-span-2",
  },
  {
    title: "Automatización de pedidos",
    description:
      "Los pedidos se generan, envían y confirman solos. Tú solo revisas.",
  },
  {
    title: "Trazabilidad y APPCC",
    description:
      "Registros de seguridad alimentaria digitalizados. Trazabilidad por lote al instante.",
  },
  {
    title: "Automatización de procesos",
    description:
      "La información fluye sola entre departamentos. Sin copiar y pegar.",
    className: "md:col-span-2",
  },
  {
    title: "Recepción de stock",
    description:
      "Escanea, verifica y registra en un paso. Sin papel, sin doble entrada.",
  },
  {
    title: "Integración con ERP",
    description:
      "SAP, Sage, Holded, Odoo y más. Sin cambiar lo que ya funciona.",
    className: "md:col-span-2",
  },
];

export function ServicesBento() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInView className="text-center">
          <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
            Soluciones
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Lo que automatizamos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            De la recepción a la facturación, cubrimos toda la cadena.
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <div className="mt-16 grid grid-cols-1 gap-4 md:auto-rows-[14rem] md:grid-cols-3">
            {CARDS.map((card) => (
              <div
                key={card.title}
                className={cn(
                  "group flex flex-col justify-end rounded-none border border-gray-200 bg-white p-6 transition-all hover:border-brand-200 hover:shadow-lg",
                  card.className,
                )}
              >
                <h3 className="font-heading text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-500">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
