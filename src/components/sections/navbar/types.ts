import type { MouseEvent } from "react";

export type ServiceMenuLinkHandler = (
  event: MouseEvent<HTMLAnchorElement>,
  href: string
) => void;
