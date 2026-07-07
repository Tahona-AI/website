import { Hero } from "website";

export function Default() {
  return <Hero />;
}

export function CustomCopy() {
  return (
    <Hero
      title="Operaciones internas que funcionan mejor."
      description="Diagnóstico del proceso real, implementación técnica y adopción con el equipo."
      primaryLabel="Hablemos sin compromiso"
      secondaryLabel="Ver cómo trabajamos"
    />
  );
}
