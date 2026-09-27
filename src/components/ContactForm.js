"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
      // TODO: replace with a real submit to Appwrite's `contact_submissions`
      // collection, e.g.:
      //   databases.createDocument(DB_ID, "contact_submissions", ID.unique(), {...})
      // (see Vishyx-Techie-Admin-Panel-Spec.md).
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="rounded-md border border-success/30 bg-success/10 p-6 text-center"
      >
        <svg className="mx-auto h-12 w-12 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-4 font-semibold text-success">Message sent successfully!</p>
        <p className="mt-2 text-sm text-success/80">
          Thanks — we&apos;ve got your message and will reply within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <label className="mb-2 block text-sm font-semibold text-ink">Name *</label>
        <input
          name="name"
          required
          className={`w-full rounded-md border bg-paper-soft px-4 py-3 text-ink transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${
            errors.name ? "border-error" : "border-hairline-strong"
          }`}
          placeholder="Your full name"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-error"
          >
            {errors.name}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <label className="mb-2 block text-sm font-semibold text-ink">Email *</label>
        <input
          name="email"
          type="email"
          required
          className={`w-full rounded-md border bg-paper-soft px-4 py-3 text-ink transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${
            errors.email ? "border-error" : "border-hairline-strong"
          }`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-error"
          >
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <label className="mb-2 block text-sm font-semibold text-ink">
          Phone (optional)
        </label>
        <input
          name="phone"
          type="tel"
          className="w-full rounded-md border border-hairline-strong bg-paper-soft px-4 py-3 text-ink transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="+91 90481 51630"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <label className="mb-2 block text-sm font-semibold text-ink">
          Service interested in
        </label>
        <select
          name="service"
          className="w-full rounded-md border border-hairline-strong bg-paper-soft px-4 py-3 text-ink transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label className="mb-2 block text-sm font-semibold text-ink">
          Message *
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className={`w-full rounded-md border bg-paper-soft px-4 py-3 text-ink transition-all outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 ${
            errors.message ? "border-error" : "border-hairline-strong"
          }`}
          placeholder="Tell us about your project..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-sm text-error"
          >
            {errors.message}
          </motion.p>
        )}
      </motion.div>

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-md border border-error/30 bg-error/10 p-3 text-sm text-error"
        >
          Something went wrong sending that — please try again.
        </motion.p>
      )}

      <motion.button
        type="submit"
        disabled={status === "submitting"}
        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-modern w-full rounded-full bg-accent px-6 py-4 text-sm font-semibold text-primary shadow-[0_8px_20px_rgba(150,105,42,.2)] hover:bg-accent-deep hover:text-paper disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "submitting" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Sending…
          </span>
        ) : (
          "Send message"
        )}
      </motion.button>
    </form>
  );
}
