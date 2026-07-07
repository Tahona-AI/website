import { Textarea, Label } from "website";

export function Default() {
  return (
    <div style={{ maxWidth: 420 }}>
      <Textarea placeholder="Cuéntanos qué proceso o problema quieres revisar." />
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ maxWidth: 420, display: "grid", gap: 8 }}>
      <Label htmlFor="mensaje">Proceso o problema a revisar</Label>
      <Textarea
        id="mensaje"
        defaultValue="Gestionamos pedidos por correo y los pasamos a mano al ERP. Queremos revisar si se puede automatizar con revisión humana."
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ maxWidth: 420 }}>
      <Textarea disabled placeholder="No disponible" />
    </div>
  );
}
