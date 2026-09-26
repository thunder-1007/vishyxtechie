"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Not sure yet",
  "Custom Website Development",
  "E-Commerce Web Solutions",
  "Web App Development — SaaS",
  "Custom Software Development & Maintenance",
  "Android / iOS Application Development",
  "Digital Marketing and Branding",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function validate(form) {
    const next = {};
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim();

    if (!name) next.name = "Enter your name";
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      next.email = "Enter a valid email address";
    if (!message || message.length < 10)
      next.message = "Tell us a little more — at least a sentence or two";

    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    try {
      // TODO: replace with a real submit to Supabase's `contact_submissions`
      // table (see Vishyx-Techie-Admin-Panel-Spec.md).
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md border border-success/30 bg-success/10 p-4 text-success">
        Thanks — we&apos;ve got your message and will reply within one
        business day.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">Name</label>
        <input
          name="name"
          required
          className={`w-full rounded-md border bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent ${
            errors.name ? "border-error" : "border-hairline-strong"
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-error">{errors.name}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ink">Email</label>
        <input
          name="email"
          type="email"
          required
          className={`w-full rounded-md border bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent ${
            errors.email ? "border-error" : "border-hairline-strong"
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-error">{errors.email}</p>}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Phone (optional)
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full rounded-md border border-hairline-strong bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Service interested in
        </label>
        <select
          name="service"
          className="w-full rounded-md border border-hairline-strong bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          required
          className={`w-full rounded-md border bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent ${
            errors.message ? "border-error" : "border-hairline-strong"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-error">
          Something went wrong sending that — please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-accent px-5 py-3 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-accent-deep hover:text-paper disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
