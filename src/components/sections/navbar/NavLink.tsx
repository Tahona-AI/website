import { cn } from "@/lib/utils";
import type { PageNavItem } from "@/components/sections/navbar-data";

type NavLinkVariant = "desktop" | "mobile";

const NAV_LINK_VARIANT_CLASSES = {
  desktop:
    "py-1 text-sm text-gray-700 hover:border-brand-700 hover:text-brand-800",
  mobile:
    "py-3 text-lg text-gray-700 hover:border-brand-700 hover:text-brand-800",
} as const satisfies Record<NavLinkVariant, string>;

export function NavLink({
  isActive,
  item,
  onSelect,
  variant = "desktop",
}: {
  readonly isActive: boolean;
  readonly item: PageNavItem;
  readonly onSelect: (href: string) => void;
  readonly variant?: NavLinkVariant;
}) {
  const shouldScrollCurrentPage = item.href.startsWith("#");

  return (
    <a
      className={cn(
        "border-b-2 border-transparent font-medium transition-colors duration-200",
        NAV_LINK_VARIANT_CLASSES[variant],
        isActive && "border-brand-700 text-brand-800"
      )}
      href={item.href}
      onClick={(event) => {
        if (
          variant === "mobile" &&
          event.button === 0 &&
          !event.metaKey &&
          !event.ctrlKey &&
          !event.shiftKey &&
          !event.altKey
        ) {
          event.preventDefault();
          onSelect(item.href);
          return;
        }

        if (!shouldScrollCurrentPage) {
          return;
        }

        event.preventDefault();
        onSelect(item.href);
      }}
    >
      {item.label}
    </a>
  );
}
