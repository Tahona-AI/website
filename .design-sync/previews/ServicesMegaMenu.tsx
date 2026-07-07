import { ServicesMegaMenu } from "website";

const noop = () => {};

export function Open() {
  return (
    <div style={{ minHeight: 480 }}>
      <ServicesMegaMenu isOpen onLinkClick={noop} />
    </div>
  );
}
