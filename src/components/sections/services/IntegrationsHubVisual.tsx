interface IntegrationNode {
  readonly anchor: "start" | "middle" | "end";
  readonly label: string;
  readonly textX: number;
  readonly textY: number;
}

interface IntegrationFlow {
  readonly d: string;
  readonly endX: number;
  readonly endY: number;
  readonly startX: number;
  readonly startY: number;
}

const TOOL_NODES: readonly IntegrationNode[] = [
  { label: "CRM", textX: 108, textY: 88, anchor: "middle" },
  { label: "Drive", textX: 252, textY: 88, anchor: "middle" },
  { label: "API", textX: 62, textY: 189, anchor: "end" },
  { label: "Email", textX: 298, textY: 189, anchor: "start" },
  { label: "ERP", textX: 106, textY: 293, anchor: "middle" },
  { label: "Excel", textX: 254, textY: 293, anchor: "middle" },
];

const FLOWS: readonly IntegrationFlow[] = [
  { d: "M108 104 L136 137", startX: 108, startY: 104, endX: 136, endY: 137 },
  { d: "M252 104 L224 137", startX: 252, startY: 104, endX: 224, endY: 137 },
  { d: "M74 184 L104 184", startX: 74, startY: 184, endX: 104, endY: 184 },
  { d: "M286 184 L256 184", startX: 286, startY: 184, endX: 256, endY: 184 },
  { d: "M108 272 L136 231", startX: 108, startY: 272, endX: 136, endY: 231 },
  { d: "M252 272 L224 231", startX: 252, startY: 272, endX: 224, endY: 231 },
];

function ToolNode({ anchor, label, textX, textY }: IntegrationNode) {
  return (
    <text
      fill="#344054"
      fontFamily="'Geist Sans', ui-sans-serif, system-ui, sans-serif"
      fontSize="15"
      fontWeight="650"
      textAnchor={anchor}
      x={textX}
      y={textY}
    >
      {label}
    </text>
  );
}

function FlowDot({ endX, endY, startX, startY }: IntegrationFlow) {
  return (
    <circle
      className="integration-flow"
      cx={startX}
      cy={startY}
      fill="#245840"
      r="3.8"
    >
      <animate
        attributeName="cx"
        begin="0s"
        dur="3.2s"
        repeatCount="indefinite"
        values={`${startX};${endX}`}
      />
      <animate
        attributeName="cy"
        begin="0s"
        dur="3.2s"
        repeatCount="indefinite"
        values={`${startY};${endY}`}
      />
      <animate
        attributeName="opacity"
        begin="0s"
        dur="3.2s"
        keyTimes="0;0.16;0.82;1"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </circle>
  );
}

export function IntegrationsHubVisual() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      focusable="false"
      viewBox="0 0 360 360"
    >
      <style>{`
        .integration-core {
          animation: integration-core-pulse 4.2s ease-in-out infinite;
          transform-origin: 180px 184px;
        }

        @keyframes integration-core-pulse {
          0%, 76%, 100% { opacity: 0.72; transform: scale(1); }
          84% { opacity: 0.9; transform: scale(1.035); }
        }

        @media (prefers-reduced-motion: reduce) {
          .integration-core { animation: none; }
          .integration-flow { display: none; }
        }
      `}</style>

      <ellipse
        className="integration-core"
        cx="180"
        cy="184"
        fill="rgba(255,255,255,0.72)"
        rx="76"
        ry="58"
      />

      {FLOWS.map((flow) => (
        <path
          d={flow.d}
          fill="none"
          key={flow.d}
          stroke="#C8D6CD"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      ))}

      {FLOWS.map((flow) => (
        <FlowDot key={`${flow.d}-dot`} {...flow} />
      ))}

      <text
        fill="#1F1F1F"
        fontFamily="'Plus Jakarta Sans', 'Geist Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="20"
        fontWeight="650"
        textAnchor="middle"
        x="180"
        y="179"
      >
        Sistema
      </text>
      <text
        fill="#1F1F1F"
        fontFamily="'Plus Jakarta Sans', 'Geist Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="20"
        fontWeight="650"
        textAnchor="middle"
        x="180"
        y="203"
      >
        interno
      </text>

      {TOOL_NODES.map((node) => (
        <ToolNode key={node.label} {...node} />
      ))}
    </svg>
  );
}
