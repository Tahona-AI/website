import { Label, Input } from "website";

export function Default() {
  return <Label>Nombre de la empresa</Label>;
}

export function WithField() {
  return (
    <div style={{ maxWidth: 360, display: "grid", gap: 8 }}>
      <Label htmlFor="empresa">Empresa</Label>
      <Input id="empresa" placeholder="Nombre de la empresa" />
    </div>
  );
}
