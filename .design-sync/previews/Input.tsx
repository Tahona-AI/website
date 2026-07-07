import { Input, Label } from "website";

export function Default() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Input placeholder="Nombre y apellidos" />
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ maxWidth: 360, display: "grid", gap: 8 }}>
      <Label htmlFor="email-preview">Correo electrónico</Label>
      <Input id="email-preview" type="email" placeholder="nombre@empresa.com" />
    </div>
  );
}

export function Filled() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Input defaultValue="Laura Gómez" />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Input disabled placeholder="No disponible" />
    </div>
  );
}

export function Invalid() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Input aria-invalid defaultValue="correo-sin-arroba" />
    </div>
  );
}
