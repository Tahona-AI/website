interface AuditStep {
  readonly label: string;
  readonly y: number;
}

const AUDIT_STEPS: readonly AuditStep[] = [
  { label: "Analizar flujos de trabajo", y: 124 },
  { label: "Analizar contexto empresarial", y: 172 },
  { label: "Preparar diagnóstico", y: 220 },
  { label: "Hoja de ruta", y: 268 },
];

export function FoundationsAuditVisual() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      focusable="false"
      viewBox="0 0 360 360"
    >
      <style>{`
        .audit-focus {
          animation: audit-focus-down 8s cubic-bezier(.6,0,.2,1) infinite;
        }

        @keyframes audit-focus-down {
          0%, 18% { transform: translateY(0); }
          25%, 43% { transform: translateY(48px); }
          50%, 68% { transform: translateY(96px); }
          75%, 93% { transform: translateY(144px); }
          100% { transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .audit-focus { animation: none; }
        }
      `}</style>

      <defs>
        <linearGradient id="audit-sheen" x1="50" x2="312" y1="42" y2="315">
          <stop offset="0" stopColor="rgba(255,255,255,0.92)" />
          <stop offset="0.54" stopColor="rgba(255,255,255,0.68)" />
          <stop offset="1" stopColor="rgba(236,247,241,0.54)" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="292"
          id="audit-soft-shadow"
          width="312"
          x="24"
          y="38"
        >
          <feDropShadow
            dx="0"
            dy="18"
            floodColor="#1F1F1F"
            floodOpacity="0.08"
            stdDeviation="18"
          />
        </filter>
      </defs>

      <rect
        fill="url(#audit-sheen)"
        filter="url(#audit-soft-shadow)"
        height="268"
        rx="28"
        width="296"
        x="32"
        y="46"
      />

      <text
        fill="#1F1F1F"
        fontFamily="'Plus Jakarta Sans', 'Geist Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="23"
        fontWeight="700"
        x="60"
        y="90"
      >
        Auditoría
      </text>
      <text
        fill="#6B7280"
        fontFamily="'Geist Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="13"
        fontWeight="500"
        x="60"
        y="112"
      >
        Diagnóstico operativo
      </text>

      {AUDIT_STEPS.map((step) => (
        <g key={step.label}>
          <rect
            fill="#FFFFFF"
            fillOpacity="0.72"
            height="36"
            rx="12"
            width="246"
            x="57"
            y={step.y}
          />
          <rect
            fill="#F5F8F5"
            height="18"
            rx="6"
            stroke="#D8E1DB"
            strokeWidth="1.2"
            width="18"
            x="74"
            y={step.y + 9}
          />
          <text
            fill="#475467"
            fontFamily="'Geist Sans', ui-sans-serif, system-ui, sans-serif"
            fontSize="12.5"
            fontWeight="600"
            x="108"
            y={step.y + 23}
          >
            {step.label}
          </text>
        </g>
      ))}

      <g className="audit-focus">
        <rect
          fill="rgba(45,106,79,0.09)"
          height="36"
          rx="12"
          width="246"
          x="57"
          y="124"
        />
        <rect fill="#245840" height="18" rx="6" width="18" x="74" y="133" />
      </g>
    </svg>
  );
}
