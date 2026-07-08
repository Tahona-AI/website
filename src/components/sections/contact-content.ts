import type { getContent } from "@/i18n/content";

export type ContactCopy = ReturnType<typeof getContent>["contact"];

export interface FormErrors {
  readonly name?: string;
  readonly email?: string;
  readonly details?: string;
  readonly submit?: string;
}

export type FormField = "name" | "email" | "details";

export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly details: string;
}

export const CONTACT_WEBHOOK_URL = "https://n8n.tahona.ai/webhook/tahona-form";

export const EMPTY_CONTACT_FORM: ContactFormData = {
  name: "",
  email: "",
  details: "",
};

export function isFormField(value: string): value is FormField {
  return value === "name" || value === "email" || value === "details";
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(
  formData: ContactFormData,
  copy: ContactCopy
): FormErrors {
  const newErrors: {
    name?: string;
    email?: string;
    details?: string;
  } = {};

  if (formData.name.length < 2) {
    newErrors.name = copy.errorMessages.nameShort;
  } else if (formData.name.length > 100) {
    newErrors.name = copy.errorMessages.nameLong;
  }

  if (!validateEmail(formData.email)) {
    newErrors.email = copy.errorMessages.emailInvalid;
  }

  if (formData.details.length < 10) {
    newErrors.details = copy.errorMessages.detailsShort;
  } else if (formData.details.length > 2000) {
    newErrors.details = copy.errorMessages.detailsLong;
  }

  return newErrors;
}
