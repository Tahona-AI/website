import type { ChangeEvent, FormEvent, ReactNode } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  primaryCtaArrowClass,
  primaryCtaBaseClass,
} from "@/components/ui/cta-styles";
import type {
  ContactCopy,
  ContactFormData,
  FormErrors,
} from "@/components/sections/contact-content";
import { cn } from "@/lib/utils";

function FieldShell({
  children,
}: {
  readonly children: ReactNode;
}) {
  return <div className="flex w-full flex-col gap-2.5">{children}</div>;
}

function FieldError({
  id,
  message,
}: {
  readonly id: string;
  readonly message?: string;
}) {
  if (!message) {
    return null;
  }

  return (
    <p className="text-sm text-red-600" id={id} role="alert">
      {message}
    </p>
  );
}

const inputClassName =
  "h-12 rounded-[1.1rem] border border-[#d7ddd8] bg-[#f8faf8] px-4 text-[0.98rem] text-gray-900 shadow-[0_2px_3px_-1px_rgba(0,0,0,0.08),0_1px_0_0_rgba(25,28,33,0.02),0_0_0_1px_rgba(25,28,33,0.06)] transition-[border-color,box-shadow,background-color] duration-200 motion-reduce:transition-none placeholder:text-gray-400 focus-visible:border-brand-400 focus-visible:bg-white focus-visible:ring-brand-500/15";

const textareaClassName =
  "min-h-40 rounded-[1.35rem] border border-[#d7ddd8] bg-[#f8faf8] px-4 py-3 text-[0.98rem] leading-relaxed text-gray-900 shadow-[0_2px_3px_-1px_rgba(0,0,0,0.08),0_1px_0_0_rgba(25,28,33,0.02),0_0_0_1px_rgba(25,28,33,0.06)] transition-[border-color,box-shadow,background-color] duration-200 motion-reduce:transition-none placeholder:text-gray-400 focus-visible:border-brand-400 focus-visible:bg-white focus-visible:ring-brand-500/15";

export function ContactForm({
  copy,
  errors,
  formData,
  isSubmitting,
  onInputChange,
  onSubmit,
}: {
  readonly copy: ContactCopy;
  readonly errors: FormErrors;
  readonly formData: ContactFormData;
  readonly isSubmitting: boolean;
  readonly onInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  readonly onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/84 p-6 shadow-[0_30px_80px_-40px_rgba(31,31,31,0.45)] backdrop-blur-md sm:p-8 lg:col-span-7 lg:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,rgba(255,255,255,0.92)_48%,rgba(240,247,243,0.78)_100%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-3xl rounded-[1.75rem] bg-transparent p-5 sm:p-7">
        <div>
          <h3 className="font-heading text-[1.9rem] font-semibold tracking-[-0.03em] text-gray-900 sm:text-[2.15rem]">
            {copy.formTitle}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600 sm:text-[0.95rem]">
            {copy.formIntro}
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <FieldShell>
              <Label
                className="text-[0.95rem] font-semibold text-gray-900"
                htmlFor="name"
              >
                {copy.nameLabel}
              </Label>
              <Input
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                aria-invalid={Boolean(errors.name)}
                className={cn(
                  inputClassName,
                  errors.name &&
                    "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/25"
                )}
                id="name"
                name="name"
                onChange={onInputChange}
                placeholder={copy.namePlaceholder}
                required
                value={formData.name}
              />
              <FieldError id="contact-name-error" message={errors.name} />
            </FieldShell>

            <FieldShell>
              <Label
                className="text-[0.95rem] font-semibold text-gray-900"
                htmlFor="email"
              >
                {copy.emailLabel}
              </Label>
              <Input
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                aria-invalid={Boolean(errors.email)}
                className={cn(
                  inputClassName,
                  errors.email &&
                    "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/25"
                )}
                id="email"
                name="email"
                onChange={onInputChange}
                placeholder={copy.emailPlaceholder}
                required
                type="email"
                value={formData.email}
              />
              <FieldError id="contact-email-error" message={errors.email} />
            </FieldShell>
          </div>

          <FieldShell>
            <Label
              className="text-[0.95rem] font-semibold text-gray-900"
              htmlFor="details"
            >
              {copy.detailsLabel}
            </Label>
            <Textarea
              aria-describedby={
                errors.details ? "contact-details-error" : undefined
              }
              aria-invalid={Boolean(errors.details)}
              className={cn(
                textareaClassName,
                errors.details &&
                  "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/25"
              )}
              id="details"
              name="details"
              onChange={onInputChange}
              placeholder={copy.detailsPlaceholder}
              required
              rows={5}
              value={formData.details}
            />
            <FieldError id="contact-details-error" message={errors.details} />
          </FieldShell>

          <div
            aria-hidden="true"
            className="h-px w-full bg-gradient-to-r from-transparent via-[#cad5ce] to-transparent"
          />

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              {copy.privacyNote}
            </p>

            <div className="flex w-full flex-col gap-3 md:w-auto md:items-end">
              <button
                className={cn(
                  primaryCtaBaseClass,
                  "min-h-12 w-full px-3 pl-5 text-sm font-semibold md:min-w-[292px]"
                )}
                disabled={isSubmitting}
                type="submit"
              >
                <span className="leading-tight">
                  {isSubmitting ? copy.submittingLabel : copy.submitLabel}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(primaryCtaArrowClass, isSubmitting && "opacity-70")}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M5 12h14m-6-6 6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </span>
              </button>

              {errors.submit && (
                <p className="text-sm text-red-600 md:max-w-[220px]" role="alert">
                  {errors.submit}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
