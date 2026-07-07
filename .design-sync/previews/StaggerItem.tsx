import { StaggerContainer, StaggerItem } from "website";

export function InsideContainer() {
  return (
    <StaggerContainer className="flex gap-3">
      <StaggerItem>
        <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-800">
          Procesos
        </span>
      </StaggerItem>
      <StaggerItem>
        <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-800">
          Datos
        </span>
      </StaggerItem>
      <StaggerItem>
        <span className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-sm text-brand-800">
          Documentos
        </span>
      </StaggerItem>
    </StaggerContainer>
  );
}
