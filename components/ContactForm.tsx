"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-teal/40 bg-teal/5 p-8">
        <h2 className="font-serif text-2xl text-navy">Thank you.</h2>
        <p className="mt-3 text-navy/70">
          A partner will read your note and get back to you within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Name" name="name" required />
      <Field label="Company" name="company" />
      <Field label="Email" name="email" type="email" required />
      <div>
        <label className="block text-sm text-navy/70 mb-1">What are you working on?</label>
        <textarea
          name="message"
          rows={6}
          maxLength={2000}
          required
          className="w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
        />
      </div>
      <Field label="How did you hear about us?" name="referral" />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
        {status === "error" && (
          <span className="text-sm text-red-600">Something went wrong. Try again or email us directly.</span>
        )}
      </div>
      <p className="text-xs text-navy/50">
        We reply within two business days. Your note stays with the partners.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-navy/70 mb-1">
        {label}
        {required && <span className="text-teal"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-navy focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
      />
    </div>
  );
}
