"use client";

import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactModal } from "@/components/sections/contact/ContactModal";
import { ContactSidebar } from "@/components/sections/contact/ContactSidebar";
import { useContactForm } from "@/components/sections/contact/useContactForm";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export function Contact({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).contact;
  const {
    closeModal,
    errors,
    formData,
    handleInputChange,
    handleSubmit,
    isSubmitting,
    showModal,
  } = useContactForm(copy);

  return (
    <>
      <section className="relative overflow-hidden bg-[#1e4533] py-24" id="contacto">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative z-20 px-6 sm:px-10 lg:px-16">
            <div>
              <div className="inline-flex items-center gap-3 text-sm text-white/70">
                <span className="h-px w-10 bg-white/50" />
                <span className="font-medium text-white/80">{copy.eyebrow}</span>
              </div>
              <h2 className="mt-4 max-w-6xl font-heading text-3xl font-bold text-white text-balance sm:text-4xl md:text-5xl">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75 text-pretty md:text-lg">
                {copy.description}
              </p>
            </div>

            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
              <ContactSidebar copy={copy} />
              <ContactForm
                className="lg:col-span-7"
                copy={copy}
                errors={errors}
                formData={formData}
                isSubmitting={isSubmitting}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <ContactModal copy={copy} onClose={closeModal} />
      )}
    </>
  );
}
