import { getContent } from "@/i18n/content";
import type { CaseStudy } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

export type { CaseStudy };

export function getCaseStudies(locale: Locale): readonly CaseStudy[] {
  return getContent(locale).caseStudies;
}
