import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

export type ServiceItem = {
  readonly id: string;
  readonly title: string;
  readonly menuLabel: string;
  readonly summary: string;
  readonly bullets: readonly string[];
};

export type ServiceFamily = {
  readonly id: string;
  readonly legacyId: string;
  readonly marker: string;
  readonly title: string;
  readonly description: string;
  readonly visualSrc: string;
  readonly visualScaleClass: string;
  readonly services: readonly ServiceItem[];
};

export function getServiceFamilies(locale: Locale): readonly ServiceFamily[] {
  return getContent(locale).serviceFamilies;
}
