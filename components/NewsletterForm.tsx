"use client";

import { useState } from "react";
import { FORM_ENDPOINT, mailtoLink } from "@/lib/forms";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type: "newsletter", email }),
        });
      } catch {
        // fall through to mailto
        window.location.href = mailtoLink("Newsletter subscription", `Please subscribe: ${email}`);
        return;
      }
    } else {
      window.location.href = mailtoLink("Newsletter subscription", `Please subscribe: ${email}`);
    }
    setDone(true);
  }

  if (done) {
    return <p className="mt-4 text-sm text-navy">Thank you. You are on the list.</p>;
  }

  return (
    <form className="mt-4 flex gap-2" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-md border border-line bg-white px-4 py-2 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-navy/30"
      />
      <button className="btn-primary" type="submit">Subscribe</button>
    </form>
  );
}
