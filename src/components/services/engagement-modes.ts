import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

export type EngagementMarker = "01" | "02" | "03";

export type EngagementMode = {
  readonly marker: EngagementMarker;
  readonly title: string;
  readonly description: string;
};

export type EngagementModes = readonly [
  EngagementMode,
  EngagementMode,
  EngagementMode,
];

export function getEngagementModes(locale: Locale): EngagementModes {
  return getContent(locale).engagementModes;
}
