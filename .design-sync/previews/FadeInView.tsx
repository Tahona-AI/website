import { FadeInView } from "website";

export function Default() {
  return (
    <FadeInView>
      <div
        style={{
          maxWidth: 420,
          padding: 24,
          borderRadius: 24,
          border: "1px solid #e6e6e6",
          background: "#ffffff",
          boxShadow: "0 18px 40px -30px rgba(31,31,31,0.4)",
        }}
      >
        <p className="font-heading text-lg font-bold text-gray-900">
          Diagnóstico operativo
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Este contenido aparece con un desplazamiento suave al entrar en
          pantalla.
        </p>
      </div>
    </FadeInView>
  );
}
