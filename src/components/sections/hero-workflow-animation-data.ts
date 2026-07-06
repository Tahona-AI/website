export type InputTrack = "lower" | "middle" | "upper";
export type OutputSlot = "one" | "two" | "three" | "four";

export type AppTile = {
  readonly id: string;
  readonly label: string;
  readonly detail: string;
  readonly accent: string;
  readonly delay: string;
  readonly track: InputTrack;
};

export type MiniBadge = {
  readonly label: string;
  readonly fill: string;
};

export type OutputPill = {
  readonly id: string;
  readonly label: string;
  readonly width: number;
  readonly delay: string;
  readonly slot: OutputSlot;
  readonly badges?: readonly MiniBadge[];
};

export const INPUT_TILES = [
  {
    id: "drive",
    label: "Drive",
    detail: "docs",
    accent: "rgb(45, 106, 79)",
    delay: "-0.8s",
    track: "upper",
  },
  {
    id: "excel",
    label: "Excel",
    detail: "hojas",
    accent: "rgb(34, 133, 86)",
    delay: "-2.4s",
    track: "middle",
  },
  {
    id: "sap",
    label: "SAP",
    detail: "ERP",
    accent: "rgb(46, 92, 130)",
    delay: "-4s",
    track: "lower",
  },
  {
    id: "odoo",
    label: "Odoo",
    detail: "ops",
    accent: "rgb(118, 86, 117)",
    delay: "-5.6s",
    track: "upper",
  },
  {
    id: "crm",
    label: "CRM",
    detail: "ventas",
    accent: "rgb(74, 139, 106)",
    delay: "-7.2s",
    track: "middle",
  },
  {
    id: "email",
    label: "Email",
    detail: "casos",
    accent: "rgb(128, 128, 128)",
    delay: "-8.8s",
    track: "lower",
  },
] as const satisfies readonly AppTile[];

export const OUTPUT_PILLS = [
  {
    id: "dashboard",
    label: "Panel operativo",
    width: 156,
    delay: "-0.4s",
    slot: "one",
  },
  {
    id: "documents",
    label: "Extracción documental",
    width: 198,
    delay: "-2.8s",
    slot: "two",
  },
  {
    id: "approval",
    label: "Aprobaciones",
    width: 140,
    delay: "-5.2s",
    slot: "three",
  },
  {
    id: "stack",
    label: "Herramientas conectadas",
    width: 212,
    delay: "-7.6s",
    slot: "four",
    badges: [
      { label: "ERP", fill: "rgb(36, 88, 64)" },
      { label: "CRM", fill: "rgb(74, 139, 106)" },
      { label: "Drive", fill: "rgb(45, 106, 79)" },
      { label: "API", fill: "rgb(128, 128, 128)" },
    ],
  },
] as const satisfies readonly OutputPill[];
