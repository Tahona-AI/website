import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  ShieldIcon,
  UserCheckIcon,
} from "@phosphor-icons/react";
import type { ContactCopy } from "@/components/sections/contact-content";

const TRUST_BADGE_ICONS = [ClockIcon, UserCheckIcon, ShieldIcon] as const;

export function ContactSidebar({
  copy,
}: {
  readonly copy: ContactCopy;
}) {
  return (
    <div className="space-y-8 lg:col-span-5">
      <div className="rounded-[1.75rem] border border-white/75 bg-white/78 p-6 shadow-[0_24px_70px_-46px_rgba(31,31,31,0.42)] backdrop-blur-md sm:p-7">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-brand-700">
            {copy.sidebarEyebrow}
          </p>
          <p className="max-w-lg text-base leading-relaxed text-gray-600 text-pretty">
            {copy.sidebarBody}
          </p>
        </div>

        <div className="mt-6 border-t border-white/70 pt-2">
          <a
            className="group mt-3 flex items-start gap-4 rounded-[1.5rem] border border-white/75 bg-white/78 px-5 py-5 transition-all duration-200 motion-reduce:transition-none hover:border-brand-200/70 hover:bg-white/88 hover:text-brand-700"
            href="mailto:hola@tahona.ai"
          >
            <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 shadow-[0_18px_40px_-30px_rgba(36,88,64,0.38)] transition-colors duration-200 motion-reduce:transition-none group-hover:bg-brand-100">
              <EnvelopeIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.11em] text-gray-500">
                {copy.emailLabel}
              </p>
              <p className="mt-1 font-heading text-xl font-semibold text-gray-900">
                {copy.emailValueLabel}
              </p>
              <p className="mt-1 text-sm text-gray-600">{copy.emailHint}</p>
            </div>
          </a>

          <a
            className="group mt-3 flex items-start gap-4 rounded-[1.5rem] border border-white/75 bg-white/78 px-5 py-5 transition-all duration-200 motion-reduce:transition-none hover:border-brand-200/70 hover:bg-white/88 hover:text-brand-700"
            href="tel:+34684006043"
          >
            <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-100 bg-brand-50 text-brand-600 shadow-[0_18px_40px_-30px_rgba(36,88,64,0.38)] transition-colors duration-200 motion-reduce:transition-none group-hover:bg-brand-100">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.11em] text-gray-500">
                {copy.phoneLabel}
              </p>
              <p className="mt-1 font-heading text-xl font-semibold text-gray-900">
                +34 684 006 043
              </p>
              <p className="mt-1 text-sm text-gray-600">{copy.phoneHint}</p>
            </div>
          </a>
        </div>
      </div>

      <div className="space-y-3 rounded-[1.75rem] border border-white/70 bg-white/68 p-6 shadow-[0_22px_60px_-48px_rgba(31,31,31,0.4)] backdrop-blur-md">
        {copy.trustBadges.map((badge, index) => {
          const Icon = TRUST_BADGE_ICONS[index] ?? ShieldIcon;

          return (
            <div className="flex items-center gap-3 text-sm text-gray-600" key={badge}>
              <Icon className="h-4 w-4 text-brand-500" />
              <span>{badge}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
