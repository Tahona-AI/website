// Preview-only wrapper: motion/react entry animations start at opacity 0 and
// never settle under a frozen clock (the capture harness) — force the settled
// state so cards show final content. Transforms are left alone (the mega menu
// relies on -translate-x-1/2 centering).
import type { ReactNode } from "react";

export function DsPreviewProvider({ children }: { children?: ReactNode }) {
  return (
    <>
      <style>{`[data-ds-motion-settle] * { opacity: 1 !important; }`}</style>
      <div data-ds-motion-settle>{children}</div>
    </>
  );
}
