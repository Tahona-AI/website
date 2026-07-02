export type ImplementationExample = {
  readonly marker: string;
  readonly title: string;
  readonly description: string;
  readonly className: string;
};

export const IMPLEMENTATION_EXAMPLES = [
  {
    marker: "01",
    title: "Bases de conocimiento",
    description:
      "Con fuentes citables, permisos, evaluación y revisión humana sobre documentos reales.",
    className: "lg:col-span-2",
  },
  {
    marker: "02",
    title: "Herramientas internas",
    description:
      "Para coordinar procesos, documentos, tareas y responsables del día a día.",
    className: "lg:col-span-1",
  },
  {
    marker: "03",
    title: "Integraciones",
    description:
      "Entre Drive, CRM, ERP, hojas de cálculo, reporting y sistemas internos.",
    className: "lg:col-span-1",
  },
  {
    marker: "04",
    title: "Procesamiento documental",
    description:
      "Extracción, validación, clasificación y handoff humano en flujos reales.",
    className: "lg:col-span-2",
  },
  {
    marker: "05",
    title: "Agentes de IA",
    description:
      "Para tareas acotadas, con límites, herramientas controladas y trazabilidad.",
    className: "lg:col-span-1",
  },
  {
    marker: "06",
    title: "Paneles e informes operativos",
    description:
      "Reporting construido sobre datos reales de la operación, no sobre informes manuales.",
    className: "lg:col-span-2",
  },
  {
    marker: "07",
    title: "Workflows de aprobación",
    description:
      "Estados, responsables, alertas y registro para procesos que hoy dependen del seguimiento manual.",
    className: "lg:col-span-1",
  },
] as const satisfies readonly ImplementationExample[];
