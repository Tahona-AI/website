import { MobileNavMenu } from "website";

const noop = () => {};

export function Open() {
  return (
    <div style={{ minHeight: 560 }}>
      <MobileNavMenu
        currentPath="/"
        isOpen
        isServicesOpen={false}
        onClose={noop}
        onNavSelect={noop}
        onServiceLinkClick={noop}
        onServicesToggle={noop}
      />
    </div>
  );
}

export function ServicesExpanded() {
  return (
    <div style={{ minHeight: 640 }}>
      <MobileNavMenu
        currentPath="/services"
        isOpen
        isServicesOpen
        onClose={noop}
        onNavSelect={noop}
        onServiceLinkClick={noop}
        onServicesToggle={noop}
      />
    </div>
  );
}
