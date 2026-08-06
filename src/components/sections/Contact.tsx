"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { ContactModal } from "@/components/sections/contact/ContactModal";
import { ContactSidebar } from "@/components/sections/contact/ContactSidebar";
import {
  CONTACT_WEBHOOK_URL,
  EMPTY_CONTACT_FORM,
  isFormField,
  validateContactForm,
} from "@/components/sections/contact-content";
import type {
  ContactFormData,
  FormErrors,
} from "@/components/sections/contact-content";
import { getContent } from "@/i18n/content";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

export function Contact({
  locale = DEFAULT_LOCALE,
}: {
  readonly locale?: Locale;
}) {
  const copy = getContent(locale).contact;
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] =
    useState<ContactFormData>(EMPTY_CONTACT_FORM);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = validateContactForm(formData, copy);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const formBody = new URLSearchParams();
      formBody.append("name", formData.name);
      formBody.append("email", formData.email);
      formBody.append("details", formData.details);

      await fetch(CONTACT_WEBHOOK_URL, {
        body: formBody.toString(),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "POST",
        mode: "no-cors",
      });

      setShowModal(true);
      setFormData(EMPTY_CONTACT_FORM);
    } catch (error) {
      if (!(error instanceof Error)) {
        setErrors({ submit: copy.errorMessages.submit });
        return;
      }

      setErrors({ submit: copy.errorMessages.submit });
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    if (!isFormField(name)) {
      return;
    }

    setFormData((previous) => ({ ...previous, [name]: value }));

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }));
    }
  }

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
        <ContactModal copy={copy} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
