export type MetrHorizonPoint = {
  readonly ciHighMinutes: number;
  readonly ciLowMinutes: number;
  readonly estimateMinutes: number;
  readonly id: string;
  readonly label: string;
  readonly labelDx?: number;
  readonly labelDy?: number;
  readonly releaseDate: string;
  readonly showLabel?: boolean;
  readonly tone?: "current" | "historical" | "preview";
};

export const METR_HORIZON_SOURCE_URL = "https://metr.org/time-horizons/";

/**
 * Selected state-of-the-art p50 estimates from METR Time Horizon 1.1.
 * Values are copied from benchmark_results_1_1.yaml supplied by the user.
 * The chart deliberately preserves METR's uncertainty intervals and 16-hour caveat.
 */
export const METR_HORIZON_POINTS: readonly MetrHorizonPoint[] = [
  {
    id: "gpt-2",
    label: "GPT-2",
    releaseDate: "2019-02-14",
    estimateMinutes: 0.053778,
    ciLowMinutes: 0.009994,
    ciHighMinutes: 0.141825,
    showLabel: true,
    labelDx: 8,
    labelDy: -12,
    tone: "historical",
  },
  {
    id: "gpt-3",
    label: "GPT-3",
    releaseDate: "2020-05-28",
    estimateMinutes: 0.144057,
    ciLowMinutes: 0.093319,
    ciHighMinutes: 0.221209,
    showLabel: true,
    labelDx: -18,
    labelDy: -12,
    tone: "historical",
  },
  {
    id: "gpt-3-5",
    label: "GPT-3.5",
    releaseDate: "2022-03-15",
    estimateMinutes: 0.599247,
    ciLowMinutes: 0.255148,
    ciHighMinutes: 1.115905,
    showLabel: true,
    labelDx: -28,
    labelDy: -12,
    tone: "historical",
  },
  {
    id: "gpt-4",
    label: "GPT-4",
    releaseDate: "2023-03-14",
    estimateMinutes: 3.987428,
    ciLowMinutes: 1.93292,
    ciHighMinutes: 7.995283,
    showLabel: true,
    labelDx: -20,
    labelDy: -13,
    tone: "historical",
  },
  {
    id: "gpt-4o",
    label: "GPT-4o",
    releaseDate: "2024-05-13",
    estimateMinutes: 6.991195,
    ciLowMinutes: 4.001482,
    ciHighMinutes: 12.905741,
    tone: "historical",
  },
  {
    id: "claude-3-5-sonnet",
    label: "Claude 3.5",
    releaseDate: "2024-06-20",
    estimateMinutes: 11.395377,
    ciLowMinutes: 5.489734,
    ciHighMinutes: 22.384214,
    tone: "historical",
  },
  {
    id: "o1-preview",
    label: "o1 preview",
    releaseDate: "2024-09-12",
    estimateMinutes: 20.326586,
    ciLowMinutes: 11.716193,
    ciHighMinutes: 33.379877,
    tone: "historical",
  },
  {
    id: "o1",
    label: "o1",
    releaseDate: "2024-12-05",
    estimateMinutes: 38.831588,
    ciLowMinutes: 21.164512,
    ciHighMinutes: 64.95249,
    tone: "historical",
  },
  {
    id: "claude-3-7-sonnet",
    label: "Claude 3.7",
    releaseDate: "2025-02-24",
    estimateMinutes: 60.388937,
    ciLowMinutes: 33.006168,
    ciHighMinutes: 104.226017,
    tone: "historical",
  },
  {
    id: "o3",
    label: "o3",
    releaseDate: "2025-04-16",
    estimateMinutes: 119.732634,
    ciLowMinutes: 74.615398,
    ciHighMinutes: 190.943818,
    showLabel: true,
    labelDx: -18,
    labelDy: -14,
    tone: "current",
  },
  {
    id: "gpt-5",
    label: "GPT-5",
    releaseDate: "2025-08-07",
    estimateMinutes: 203.012577,
    ciLowMinutes: 112.641357,
    ciHighMinutes: 405.551565,
    showLabel: true,
    labelDx: -18,
    labelDy: -14,
    tone: "current",
  },
  {
    id: "gemini-3-pro",
    label: "Gemini 3 Pro",
    releaseDate: "2025-11-18",
    estimateMinutes: 224.325884,
    ciLowMinutes: 139.565157,
    ciHighMinutes: 379.235434,
    tone: "current",
  },
  {
    id: "claude-opus-4-5",
    label: "Opus 4.5",
    releaseDate: "2025-11-24",
    estimateMinutes: 292.994594,
    ciLowMinutes: 161.717714,
    ciHighMinutes: 623.704698,
    tone: "current",
  },
  {
    id: "gpt-5-2",
    label: "GPT-5.2",
    releaseDate: "2025-12-11",
    estimateMinutes: 352.249302,
    ciLowMinutes: 198.067494,
    ciHighMinutes: 815.177445,
    showLabel: true,
    labelDx: -52,
    labelDy: -14,
    tone: "current",
  },
  {
    id: "claude-opus-4-6",
    label: "Opus 4.6",
    releaseDate: "2026-02-05",
    estimateMinutes: 718.80683,
    ciLowMinutes: 316.685725,
    ciHighMinutes: 3633.786163,
    showLabel: true,
    labelDx: -62,
    labelDy: -14,
    tone: "current",
  },
  {
    id: "claude-mythos-preview",
    label: "Mythos preview",
    releaseDate: "2026-04-07",
    estimateMinutes: 1044.780145,
    ciLowMinutes: 508.876789,
    ciHighMinutes: 3304.261235,
    showLabel: true,
    labelDx: -108,
    labelDy: 20,
    tone: "preview",
  },
];
