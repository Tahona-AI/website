import type { ElementType } from "react";
import { cn } from "@/lib/utils";

interface GenericServiceVisualProps {
  readonly Icon: ElementType;
  readonly accent: string;
  readonly marker: string;
  readonly services: readonly string[];
  readonly title: string;
}

export function GenericServiceVisual({
  Icon,
  accent,
  marker,
  services,
  title,
}: GenericServiceVisualProps) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(45,106,79,0.18),transparent_31%),radial-gradient(circle_at_78%_74%,rgba(64,145,108,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(255,255,255,0.18))]" />
      <div
        className={cn(
          "absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/75 shadow-sm transition-transform duration-300 group-hover:scale-105",
          accent
        )}
      >
        <Icon weight="duotone" className="h-7 w-7" />
      </div>
      <div className="absolute bottom-6 left-6 right-6 space-y-3 rounded-2xl border border-white/70 bg-white/72 p-4 shadow-[0_22px_54px_-42px_rgba(31,31,31,0.45)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          <span className="font-heading text-sm font-semibold text-gray-900">
            {title}
          </span>
          <span className="text-xs font-semibold text-brand-700">
            {marker}
          </span>
        </div>
        {services.map((service) => (
          <div className="flex items-center gap-3" key={service}>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
            <span className="h-2 flex-1 rounded-full bg-gray-200/90" />
          </div>
        ))}
      </div>
    </>
  );
}
