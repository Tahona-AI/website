export type WorkId = "document-platform" | "logistics-planning";

export interface WorkItem {
  readonly id: WorkId;
  readonly sector: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly imageSrc: string;
}

export const DOCUMENT_PLATFORM_WORK: WorkItem = {
  id: "document-platform",
  sector: "Legal",
  title: "Plataforma documental y operativa",
  description:
    "Diseño e implementación de una plataforma interna para coordinar procesos documentales, generación de borradores, validación humana, tareas repetibles y seguimiento operativo.",
  tags: [
    "Documentación",
    "Borradores",
    "Validación humana",
    "Tareas internas",
    "Seguimiento",
  ],
  imageSrc: "/images/visual-case-legal-document-platform.png",
};

export const LOGISTICS_PLANNING_WORK: WorkItem = {
  id: "logistics-planning",
  sector: "Logística",
  title: "Planificación logística y reporting",
  description:
    "Sistemas para planificar rutas, importar datos operativos, coordinar eventos, revisar documentación logística y generar reporting útil para la operación.",
  tags: [
    "Planificación",
    "Rutas",
    "Datos operativos",
    "Eventos",
    "Reporting",
  ],
  imageSrc: "/images/visual-logistics.png",
};

export const WORK_ITEMS: readonly WorkItem[] = [
  DOCUMENT_PLATFORM_WORK,
  LOGISTICS_PLANNING_WORK,
];
