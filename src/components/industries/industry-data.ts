import { getContent } from "@/i18n/content";
import type { IndustryItem } from "@/i18n/content";
import type { Locale } from "@/i18n/routing";

export type {
  IndustryItem,
  PrimaryIndustryItem,
  SecondaryIndustryItem,
} from "@/i18n/content";

export function getIndustryItems(locale: Locale): readonly IndustryItem[] {
  return getContent(locale).industryItems;
}
