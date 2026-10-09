"use client";

import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactModal } from "@/components/sections/contact/ContactModal";
import { useContactForm } from "@/components/sections/contact/useContactForm";
import { getContent } from "@/i18n/content";
import { Eyebrow, VisualFrame } from "@/components/landing/primitives";
import { LANDING_SECTIONS, contactSection } from "@/components/landing/content";

const formCopy = getContent("es").contact;

/**
 * Closing invitation and contact form in a single panel over the dehesa,
 * replacing the separate CTA band + dark contact section.
 */
export function LandingContact() {
  const {
    closeModal,
    errors,
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    showModal,
  } = useContactForm(formCopy);

  return (
    <section
      aria-labelledby="contacto-titulo"
      className="scroll-mt-20 bg-white px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-20"
      id={LANDING_SECTIONS.contact}
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] shadow-[0_40px_90px_-60px_rgba(10,31,20,0.6)]">
        <div aria-hidden="true" className="absolute inset-0">
          <VisualFrame
            aspect="fill"
            imageClassName="object-[center_80%]"
            visual={contactSection.visual}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white/40 lg:bg-gradient-to-r lg:from-white lg:via-white/80 lg:to-white/20" />
        </div>

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-14 lg:p-14">
          <div>
            <Eyebrow>{contactSection.eyebrow}</Eyebrow>
            <h2
              className="font-die-grotesk mt-5 text-[clamp(2rem,4vw,3.4rem)] font-medium leading-[1.04] tracking-[-0.035em] text-gray-900"
              id="contacto-titulo"
            >
              {contactSection.titleLead}{" "}
              <span className="text-brand-600">{contactSection.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-gray-600">{contactSection.description}</p>

            <ul className="mt-8 space-y-3">
              {contactSection.promises.map((promise) => (
                <li className="flex items-center gap-3 text-sm font-medium text-gray-800" key={promise}>
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"
                  >
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="m5 12 5 5 9-10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                    </svg>
                  </span>
                  {promise}
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-gray-900/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                {contactSection.emailLabel}
              </p>
              <a
                className="mt-2 inline-block font-heading text-2xl font-semibold text-brand-700 underline-offset-4 hover:underline"
                href={`mailto:${contactSection.email}`}
              >
                {contactSection.email}
              </a>
            </div>
          </div>

          <ContactForm
            className="p-2 sm:p-4 lg:p-4"
            copy={formCopy}
            errors={errors}
            formData={formData}
            isSubmitting={isSubmitting}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      {showModal && <ContactModal copy={formCopy} onClose={closeModal} />}
    </section>
  );
}
