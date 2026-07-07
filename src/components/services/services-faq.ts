export type ServicesFaqItem = {
  readonly question: string;
  readonly answer: string;
};

export const SERVICES_FAQ = [
  {
    question: "¿Tahona siempre usa IA?",
    answer:
      "No. La IA se usa cuando mejora el proceso. En algunos casos la solución correcta es una integración, una herramienta interna, una regla de negocio o una simplificación del flujo.",
  },
  {
    question: "¿Puedo trabajar con herramientas existentes?",
    answer:
      "Sí. La mayoría de proyectos parten de herramientas ya presentes en la empresa: Drive, CRM, ERP, hojas de cálculo, correo, reporting, APIs o sistemas internos.",
  },
  {
    question: "¿Qué diferencia hay entre automatización y optimización de procesos?",
    answer:
      "Automatizar ejecuta pasos. Optimizar procesos exige revisar si esos pasos tienen sentido, qué datos necesitan, dónde debe mantenerse revisión humana y cómo entra el cambio en el trabajo diario.",
  },
  {
    question: "¿Qué es una base de conocimiento enterprise?",
    answer:
      "Es una capa de conocimiento interno con ingesta documental, normalización, fuentes citables, permisos, evaluación, revisión humana e integración con herramientas reales. No es solo un buscador sobre documentos.",
  },
  {
    question: "¿Cuándo tiene sentido un agente de IA?",
    answer:
      "Cuando existe una tarea operativa concreta, fuentes fiables, límites claros, herramientas controladas, trazabilidad y un punto de supervisión. Si esas condiciones no existen, conviene resolver primero el proceso.",
  },
] as const satisfies readonly ServicesFaqItem[];
