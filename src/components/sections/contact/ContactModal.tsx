import { EnvelopeIcon, XIcon } from "@phosphor-icons/react";
import type { ContactCopy } from "@/components/sections/contact-content";

export function ContactModal({
  copy,
  onClose,
}: {
  readonly copy: ContactCopy;
  readonly onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/45 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-white/80 bg-white/92 p-8 shadow-[0_34px_90px_-38px_rgba(31,31,31,0.5)] backdrop-blur-md sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.95)_52%,rgba(240,247,243,0.8)_100%)]"
        />
        <button
          aria-label={copy.closeLabel}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/75 bg-white/78 text-gray-400 shadow-[0_16px_40px_-32px_rgba(31,31,31,0.45)] transition-colors duration-200 motion-reduce:transition-none hover:text-gray-700"
          onClick={onClose}
          type="button"
        >
          <XIcon className="h-5 w-5" />
        </button>
        <div className="relative">
          <div className="inline-flex items-center gap-3 text-sm text-gray-500">
            <span className="h-px w-8 bg-brand-300" />
            <span className="font-medium text-gray-600">
              {copy.modalEyebrow}
            </span>
          </div>
          <h3 className="mt-4 font-heading text-3xl font-semibold text-gray-900 text-balance sm:text-4xl">
            {copy.modalTitle}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-gray-600 text-pretty">
            {copy.modalText}
          </p>

          <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5 text-sm text-gray-600">
            <EnvelopeIcon className="h-4 w-4 text-brand-600" />
            <span>{copy.modalEmailText}</span>
          </div>

          <button
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-600 px-8 py-3 text-sm font-medium text-white shadow-[0_22px_45px_-24px_rgba(36,88,64,0.9)] transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-[0_26px_55px_-24px_rgba(27,69,48,0.95)]"
            onClick={onClose}
            type="button"
          >
            {copy.closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
