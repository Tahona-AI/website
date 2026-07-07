import { StaggerContainer, StaggerItem } from "website";

const items = ["Contexto", "Diagnóstico", "Implementación", "Adopción"];

export function Default() {
  return (
    <StaggerContainer className="grid gap-3" staggerDelay={0.05}>
      {items.map((label, i) => (
        <StaggerItem key={label}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 16px",
              borderRadius: 16,
              border: "1px solid #e6e6e6",
              background: "#ffffff",
              maxWidth: 360,
            }}
          >
            <span className="text-sm font-semibold text-brand-600">
              0{i + 1}
            </span>
            <span className="text-sm font-medium text-gray-800">{label}</span>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
