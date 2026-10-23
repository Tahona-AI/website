import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  CONTACT_WEBHOOK_URL,
  EMPTY_CONTACT_FORM,
  isFormField,
  validateContactForm,
} from "@/components/sections/contact-content";
import type {
  ContactCopy,
  ContactFormData,
  FormErrors,
} from "@/components/sections/contact-content";

/**
 * Contact form state, validation and webhook submission, shared by every
 * contact section so they can differ in layout but never in behaviour.
 */
export function useContactForm(copy: ContactCopy) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_CONTACT_FORM);
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
    } catch {
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

  return {
    errors,
    formData,
    isSubmitting,
    showModal,
    closeModal: () => setShowModal(false),
    handleInputChange,
    handleSubmit,
  };
}
