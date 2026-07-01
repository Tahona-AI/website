import type { AiRoute } from "@/components/sections/services/aiWorkflowVisualData";

export function AiTarget({
  anchor,
  detail,
  label,
  labelX,
  labelY,
}: AiRoute) {
  return (
    <g>
      <text
        fill="#344054"
        fontFamily="'Geist Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="12"
        fontWeight="650"
        textAnchor={anchor}
        x={labelX}
        y={labelY}
      >
        {label}
      </text>
      <text
        fill="#667085"
        fontFamily="'Geist Sans', ui-sans-serif, system-ui, sans-serif"
        fontSize="9"
        fontWeight="500"
        textAnchor={anchor}
        x={labelX}
        y={labelY + 15}
      >
        {detail}
      </text>
    </g>
  );
}

export function AiParticle({
  cxValues,
  cyValues,
  keyTimes,
  opacityValues,
  x1,
  y1,
}: AiRoute) {
  return (
    <circle
      className="ai-route-particle"
      cx={x1}
      cy={y1}
      fill="#245840"
      opacity="0"
      r="4"
    >
      <animate
        attributeName="cx"
        dur="7.2s"
        keyTimes={keyTimes}
        repeatCount="indefinite"
        values={cxValues}
      />
      <animate
        attributeName="cy"
        dur="7.2s"
        keyTimes={keyTimes}
        repeatCount="indefinite"
        values={cyValues}
      />
      <animate
        attributeName="opacity"
        dur="7.2s"
        keyTimes={keyTimes}
        repeatCount="indefinite"
        values={opacityValues}
      />
    </circle>
  );
}
