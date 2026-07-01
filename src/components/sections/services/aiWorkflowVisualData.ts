export interface AiRoute {
  readonly anchor: "start" | "middle" | "end";
  readonly cxValues: string;
  readonly cyValues: string;
  readonly detail: string;
  readonly id: string;
  readonly keyTimes: string;
  readonly label: string;
  readonly labelX: number;
  readonly labelY: number;
  readonly line: string;
  readonly opacityValues: string;
  readonly x1: number;
  readonly x2: number;
  readonly y1: number;
  readonly y2: number;
}

export const AI_ROUTES: readonly AiRoute[] = [
  {
    id: "process",
    label: "Proceso",
    detail: "Optimización",
    anchor: "middle",
    labelX: 88,
    labelY: 72,
    line: "M128 130 L98 106",
    x1: 128,
    y1: 130,
    x2: 98,
    y2: 106,
    keyTimes: "0;0.08;0.28;0.36;1",
    cxValues: "128;128;98;98;98",
    cyValues: "130;130;106;106;106",
    opacityValues: "0;1;1;0;0",
  },
  {
    id: "document",
    label: "Documento",
    detail: "Extracción",
    anchor: "start",
    labelX: 288,
    labelY: 84,
    line: "M246 130 L282 112",
    x1: 246,
    y1: 130,
    x2: 282,
    y2: 112,
    keyTimes: "0;0.33;0.41;0.61;0.69;1",
    cxValues: "246;246;246;282;282;282",
    cyValues: "130;130;130;112;112;112",
    opacityValues: "0;0;1;1;0;0",
  },
  {
    id: "validation",
    label: "Validación",
    detail: "Supervisión",
    anchor: "middle",
    labelX: 91,
    labelY: 296,
    line: "M128 230 L100 258",
    x1: 128,
    y1: 230,
    x2: 100,
    y2: 258,
    keyTimes: "0;0.66;0.74;0.94;1",
    cxValues: "128;128;128;100;100",
    cyValues: "230;230;230;258;258",
    opacityValues: "0;0;1;1;0",
  },
];
