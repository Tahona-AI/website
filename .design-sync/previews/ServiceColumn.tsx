import { ServiceColumn } from "website";

const noop = () => {};

const fundamentos = {
  title: "Fundamentos",
  items: [
    {
      label: "Diagnóstico operativo",
      description: "Revisión de procesos, datos, documentos y herramientas internas.",
      href: "/services#diagnostico",
    },
    {
      label: "Estrategia y hoja de ruta",
      description: "Qué construir, qué integrar y en qué orden, con criterio práctico.",
      href: "/services#estrategia",
    },
    {
      label: "Bases de conocimiento",
      description: "Documentación interna organizada y accesible para el equipo.",
      href: "/services#conocimiento",
    },
  ],
};

const desarrolloIa = {
  title: "Desarrollo de IA",
  items: [
    {
      label: "Procesamiento de documentos",
      description: "Extracción y revisión de información con supervisión humana.",
      href: "/services#documentos",
    },
    {
      label: "Asistentes internos",
      description: "Consultas sobre datos y documentación de la operación.",
      href: "/services#asistentes",
    },
  ],
};

export function Fundamentos() {
  return (
    <div style={{ maxWidth: 320 }}>
      <ServiceColumn column={fundamentos} onLinkClick={noop} />
    </div>
  );
}

export function DesarrolloDeIA() {
  return (
    <div style={{ maxWidth: 320 }}>
      <ServiceColumn column={desarrolloIa} onLinkClick={noop} />
    </div>
  );
}
