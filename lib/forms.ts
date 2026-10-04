export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
export const CONTACT_EMAIL = "connect@planktonpartners.com";

export function mailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
