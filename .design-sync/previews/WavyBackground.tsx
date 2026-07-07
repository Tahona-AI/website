import { WavyBackground } from "website";

export function BrandWaves() {
  return (
    <WavyBackground
      containerClassName="h-72 w-full overflow-hidden rounded-3xl"
      colors={["#2D6A4F", "#4A8B6A", "#7FB89E", "#B7D3C2", "#D4E8DC"]}
      backgroundFill="#ffffff"
      waveOpacity={0.4}
      speed="slow"
    >
      <div style={{ textAlign: "center", padding: "72px 24px" }}>
        <p className="font-heading text-3xl font-extrabold text-gray-900">
          Una primera conversación
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Fondo animado usado en la sección de contacto.
        </p>
      </div>
    </WavyBackground>
  );
}
