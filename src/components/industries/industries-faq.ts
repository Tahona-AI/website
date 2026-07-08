import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

export type IndustriesFaqItem = {
  readonly question: string;
  readonly answer: string;
};

export const INDUSTRIES_FAQ = [
  {
    question: "¿Tahona se especializa en un solo sector?",
    answer:
      "No. Trabajamos sobre operaciones internas. Algunos sectores tienen patrones especialmente claros, pero la decisión depende del proceso, los datos, los documentos y las herramientas de cada empresa.",
  },
  {
    question: "¿Qué pasa con los sectores regulados?",
    answer:
      "Se trabaja con más cautela: límites claros, revisión humana, trazabilidad y separación entre soporte operativo y decisiones reguladas. No sustituimos revisión legal, clínica, normativa o de compliance.",
  },
  {
    question: "¿Hace falta tener procesos ya documentados?",
    answer:
      "No. Muchas veces el primer trabajo es mapear cómo funciona la operación real: qué se hace, quién interviene, qué documentos aparecen, qué datos faltan y dónde se pierde control.",
  },
  {
    question: "¿Podemos usar herramientas existentes del sector?",
    answer:
      "Sí. Normalmente se parte de lo que ya usa el equipo: CRM, ERP, Drive, hojas de cálculo, correo, reporting, APIs o sistemas internos. La solución debe encajar con ese contexto.",
  },
  {
    question: "¿Qué cambia de un sector a otro?",
    answer:
      "Cambian los documentos, las restricciones, el vocabulario, los sistemas y los puntos de revisión. El método se mantiene: entender la operación, ordenar el flujo y construir solo lo que mejora el trabajo.",
  },
  {
    question: "¿Se puede empezar por un área pequeña?",
    answer:
      "Sí. Tiene sentido empezar por un flujo concreto cuando hay suficiente información, responsables definidos y un criterio claro para saber si la mejora funciona antes de extenderla.",
  },
] as const satisfies readonly IndustriesFaqItem[];

export function getIndustriesFaq(locale: Locale): readonly IndustriesFaqItem[] {
  return getContent(locale).industriesFaq;
}
