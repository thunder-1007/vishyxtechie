"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WaitlistForm({ productSlug, productName }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  function validate(form) {
    const next = {};
    const name = form.get("name")?.toString().trim();
    const email = form.get("email")?.toString().trim();
    const phone = form.get("phone")?.toString().trim();

    if (!name) next.name = "Enter your name";
    if (!email || !/^\S+@\S+\.\S+$/.test(email))
      next.email = "Enter a valid email address";
    if (!phone || phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number — 10 digits, no spaces";

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
      // TODO: replace with a real submit to Appwrite's `waitlist_submissions`
      // collection once the project is connected — e.g.
      //   databases.createDocument(DB_ID, "waitlist_submissions", ID.unique(), {...})
      // (see Vishyx-Techie-Admin-Panel-Spec.md).
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-md border border-success/30 bg-success/10 p-4 text-success">
        You&apos;re on the list — we&apos;ll reach out before public launch.
      </p>
    );
  }

  return (
    <motion.form initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, ease: [0.16, 1, 0.3, 1] }} onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="product" value={productSlug} />

      <Field label="Name" name="name" error={errors.name} />
      <Field label="Email" name="email" type="email" error={errors.email} />
      <Field label="Phone" name="phone" type="tel" error={errors.phone} />
      <Field label="Company (optional)" name="company" required={false} />
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">
          What are you hoping this solves? (optional)
        </label>
        <textarea
          name="notes"
          rows={3}
          className="w-full rounded-md border border-hairline-strong bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-error">
          Something went wrong sending that — please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-modern w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary shadow-[0_8px_20px_rgba(150,105,42,.2)] hover:bg-accent-deep hover:text-paper disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : `Pre-book ${productName}`}
      </button>
    </motion.form>
  );
}

function Field({ label, name, type = "text", error, required = true }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className={`w-full rounded-md border bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent ${
          error ? "border-error" : "border-hairline-strong"
        }`}
      />
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
}
