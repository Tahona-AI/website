"use client";

import {
  INPUT_TILES,
  OUTPUT_PILLS,
  type AppTile,
  type OutputPill,
} from "@/components/sections/hero-workflow-animation-data";

function AppTile({ tile }: { readonly tile: AppTile }) {
  return (
    <g
      className={`tahona-input-tile tahona-input-${tile.track}`}
      style={{ animationDelay: tile.delay }}
    >
      <rect fill="rgb(230, 230, 230)" height="48" opacity="0.75" rx="12" width="74" x="-37" y="-16" />
      <rect fill="rgb(255, 255, 255)" height="46" rx="12" stroke="rgb(230, 230, 230)" width="74" x="-37" y="-23" />
      <circle cx="-18" cy="0" fill={tile.accent} r="8" />
      <text className="font-body" fill="rgb(31, 31, 31)" fontSize="12" fontWeight="700" x="-4" y="-3">
        {tile.label}
      </text>
      <text className="font-body" fill="rgb(107, 107, 107)" fontSize="8.5" x="-4" y="10">
        {tile.detail}
      </text>
    </g>
  );
}

function OutputPill({ pill }: { readonly pill: OutputPill }) {
  return (
    <g
      className={`tahona-output-pill tahona-output-${pill.slot}`}
      style={{ animationDelay: pill.delay }}
    >
      <rect fill="rgb(18, 52, 34)" height="38" opacity="0.28" rx="19" width={pill.width} x="0" y="8" />
      <rect fill="rgb(36, 88, 64)" height="38" rx="19" stroke="rgb(212, 232, 220)" strokeWidth="1.2" width={pill.width} x="0" y="0" />
      {pill.badges ? (
        <>
          {pill.badges.map((badge, index) => (
            <g key={badge.label} transform={`translate(${14 + index * 43} 9)`}>
              <rect fill={badge.fill} height="20" rx="10" width="36" />
              <text className="font-body" fill="rgb(255, 255, 255)" fontSize="8.5" fontWeight="700" textAnchor="middle" x="18" y="13.2">
                {badge.label}
              </text>
            </g>
          ))}
        </>
      ) : (
        <text className="font-body" fill="rgb(255, 255, 255)" fontSize="13" fontWeight="700" x="18" y="23.8">
          {pill.label}
        </text>
      )}
    </g>
  );
}

export function HeroWorkflowAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem] lg:max-w-none">
      <div className="relative aspect-[1.34] overflow-hidden rounded-[1.75rem] border border-gray-200/80 bg-[#f8f8f8] shadow-[0_28px_80px_-52px_rgba(31,31,31,0.54)]">
        <svg
          aria-label="Herramientas internas que entran en un flujo y salen como procesos operativos conectados."
          className="absolute inset-0 h-full w-full"
          role="img"
          viewBox="0 0 760 568"
        >
          <defs>
            <filter colorInterpolationFilters="sRGB" height="160%" id="workflow-soft-shadow" width="150%" x="-25%" y="-25%">
              <feDropShadow dx="0" dy="18" floodColor="rgb(31, 31, 31)" floodOpacity="0.16" stdDeviation="18" />
            </filter>
          </defs>

          <rect fill="rgb(248, 248, 248)" height="568" width="760" />
          <path d="M452 286 L714 154 L746 174 L484 306 Z" fill="rgb(240, 247, 243)" stroke="rgb(183, 211, 194)" strokeWidth="1.4" />
          <path d="M480 292 L712 174" fill="none" opacity="0.45" stroke="rgb(183, 211, 194)" strokeDasharray="3 10" />
          <path d="M48 410 C150 348 232 456 344 340 C368 316 386 306 408 300" className="tahona-track-dash" fill="none" stroke="rgb(183, 211, 194)" strokeDasharray="6 12" strokeLinecap="round" strokeWidth="2" />
          <path d="M92 498 C174 452 252 388 330 372 C360 366 382 332 408 304" className="tahona-track-dash" fill="none" opacity="0.74" stroke="rgb(183, 211, 194)" strokeDasharray="6 12" strokeLinecap="round" strokeWidth="2" />

          <g filter="url(#workflow-soft-shadow)">
            <ellipse cx="408" cy="318" fill="rgb(18, 52, 34)" opacity="0.9" rx="91" ry="54" />
            <ellipse cx="408" cy="300" fill="rgb(255, 255, 255)" rx="92" ry="55" stroke="rgb(230, 230, 230)" strokeWidth="1.2" />
            <ellipse cx="408" cy="300" fill="rgb(240, 247, 243)" rx="72" ry="42" />
            <ellipse cx="408" cy="300" className="tahona-hub-pulse" fill="none" rx="68" ry="40" stroke="rgb(45, 106, 79)" strokeWidth="8" />
            <ellipse cx="408" cy="300" fill="none" rx="54" ry="31" stroke="rgb(74, 139, 106)" strokeWidth="8" />
            <ellipse cx="408" cy="300" fill="none" rx="35" ry="20" stroke="rgb(45, 106, 79)" strokeWidth="8" />
            <ellipse cx="408" cy="300" fill="rgb(36, 88, 64)" rx="15" ry="9" />
          </g>

          <g>{INPUT_TILES.map((tile) => <AppTile key={tile.id} tile={tile} />)}</g>
          <g>{OUTPUT_PILLS.map((pill) => <OutputPill key={pill.id} pill={pill} />)}</g>
        </svg>
      </div>
    </div>
  );
}
