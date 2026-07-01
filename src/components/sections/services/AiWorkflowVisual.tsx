import { AI_ROUTES } from "@/components/sections/services/aiWorkflowVisualData";
import {
  AiParticle,
  AiTarget,
} from "@/components/sections/services/AiWorkflowVisualParts";

export function AiWorkflowVisual() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      focusable="false"
      viewBox="0 0 360 360"
    >
      <style>{`
        .ai-agent-card {
          animation: ai-card-breathe 7.2s ease-in-out infinite;
          transform-origin: 180px 180px;
        }

        .ai-agent-beam {
          animation: ai-agent-beam 2.4s linear infinite;
          stroke-dasharray: .16 .84;
          stroke-dashoffset: 1;
        }

        @keyframes ai-card-breathe {
          0%, 100% { transform: scale(1); }
          48% { transform: scale(1.018); }
        }

        @keyframes ai-agent-beam {
          0% { opacity: 0; stroke-dashoffset: 1; }
          12% { opacity: 1; }
          74% { opacity: 1; }
          100% { opacity: 0; stroke-dashoffset: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-agent-card,
          .ai-agent-beam {
            animation: none;
          }

          .ai-route-particle {
            display: none;
          }
        }
      `}</style>

      <defs>
        <linearGradient id="ai-card-fill" x1="92" x2="268" y1="130" y2="230">
          <stop offset="0" stopColor="rgba(255,255,255,0.95)" />
          <stop offset="0.58" stopColor="rgba(255,255,255,0.76)" />
          <stop offset="1" stopColor="rgba(241,248,244,0.7)" />
        </linearGradient>
        <linearGradient id="ai-agent-beam" x1="92" x2="268" y1="130" y2="230">
          <stop offset="0" stopColor="rgba(45,106,79,0)" />
          <stop offset="0.36" stopColor="#2D6A4F" />
          <stop offset="0.62" stopColor="#A7D7BD" />
          <stop offset="1" stopColor="rgba(45,106,79,0)" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="154"
          id="ai-card-shadow"
          width="230"
          x="65"
          y="103"
        >
          <feDropShadow
            dx="0"
            dy="16"
            floodColor="#1F1F1F"
            floodOpacity="0.08"
            stdDeviation="16"
          />
        </filter>
      </defs>

      {AI_ROUTES.map((route) => (
        <path
          d={route.line}
          fill="none"
          key={route.id}
          stroke="#CBD8D0"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
      ))}

      {AI_ROUTES.map((route) => (
        <AiTarget key={`${route.id}-target`} {...route} />
      ))}

      <g className="ai-agent-card">
        <rect
          fill="url(#ai-card-fill)"
          filter="url(#ai-card-shadow)"
          height="100"
          rx="26"
          width="176"
          x="92"
          y="130"
        />
        <rect
          className="ai-agent-beam"
          fill="none"
          height="100"
          pathLength="1"
          rx="26"
          stroke="url(#ai-agent-beam)"
          strokeLinecap="round"
          strokeWidth="2"
          width="176"
          x="92"
          y="130"
        />
        <text
          fill="#1F1F1F"
          fontFamily="'Plus Jakarta Sans', 'Geist Sans', ui-sans-serif, system-ui, sans-serif"
          fontSize="18"
          fontWeight="700"
          x="118"
          y="164"
        >
          Agente de IA
        </text>
        <text
          fill="#5F6C7B"
          fontFamily="'Geist Sans', ui-sans-serif, system-ui, sans-serif"
          fontSize="11.5"
          fontWeight="500"
          x="118"
          y="184"
        >
          Procesando flujo
        </text>
        <rect fill="#E7ECE8" height="6" rx="3" width="82" x="118" y="200" />
        <rect fill="#D7E6DC" height="6" rx="3" width="42" x="208" y="200" />
      </g>

      {AI_ROUTES.map((route) => (
        <AiParticle key={`${route.id}-particle`} {...route} />
      ))}
    </svg>
  );
}
