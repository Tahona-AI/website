import { NavLink } from "website";

const noop = () => {};

const servicios = { label: "Servicios", href: "/services", activeHref: "/services" };
const sectores = { label: "Sectores", href: "/industries", activeHref: "/industries" };

export function Desktop() {
  return (
    <nav style={{ display: "flex", gap: 24, padding: 8 }}>
      <NavLink item={servicios} isActive={false} onSelect={noop} variant="desktop" />
      <NavLink item={sectores} isActive={false} onSelect={noop} variant="desktop" />
    </nav>
  );
}

export function DesktopActive() {
  return (
    <nav style={{ display: "flex", gap: 24, padding: 8 }}>
      <NavLink item={servicios} isActive onSelect={noop} variant="desktop" />
      <NavLink item={sectores} isActive={false} onSelect={noop} variant="desktop" />
    </nav>
  );
}

export function Mobile() {
  return (
    <nav style={{ display: "flex", flexDirection: "column", padding: 8, maxWidth: 280 }}>
      <NavLink item={servicios} isActive onSelect={noop} variant="mobile" />
      <NavLink item={sectores} isActive={false} onSelect={noop} variant="mobile" />
    </nav>
  );
}
