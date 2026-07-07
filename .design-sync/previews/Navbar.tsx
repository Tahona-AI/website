import { Navbar } from "website";

export function Default() {
  return (
    <div style={{ minHeight: 120 }}>
      <Navbar />
    </div>
  );
}

export function ServicesActive() {
  return (
    <div style={{ minHeight: 120 }}>
      <Navbar initialPath="/services" />
    </div>
  );
}
