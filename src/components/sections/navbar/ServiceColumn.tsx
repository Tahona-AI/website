import type { ServiceMenuColumn } from "@/components/sections/navbar-data";
import type { ServiceMenuLinkHandler } from "@/components/sections/navbar/types";

export function ServiceColumn({
  column,
  onLinkClick,
}: {
  readonly column: ServiceMenuColumn;
  readonly onLinkClick: ServiceMenuLinkHandler;
}) {
  return (
    <div>
      <p className="font-mono text-xs font-semibold uppercase text-brand-800">
        {column.title}
      </p>
      <div className="mt-4 h-px bg-gray-200" />
      <ul className="mt-5 space-y-5">
        {column.items.map((item) => (
          <li key={item.label}>
            <a
              className="group block rounded-lg outline-offset-4 transition-colors duration-200 hover:text-brand-800"
              href={item.href}
              onClick={(event) => onLinkClick(event, item.href)}
            >
              <span className="block text-base font-semibold text-gray-900 group-hover:text-brand-800">
                {item.label}
              </span>
              <span className="mt-1 block text-sm leading-6 text-gray-500 text-pretty">
                {item.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
