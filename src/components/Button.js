"use client";

import Link from "next/link";

const base =
  "btn-modern group inline-flex items-center justify-center gap-3 rounded-xl px-4 py-2 text-sm font-semibold";

const variants = {
  primary: "bg-primary text-paper shadow-[0_8px_20px_rgba(14,23,40,.18)] hover:bg-primary-deep hover:shadow-[0_14px_30px_rgba(14,23,40,.28)]",
  accent: "bg-accent text-primary shadow-[0_8px_20px_rgba(150,105,42,.2)] hover:bg-accent-deep hover:text-paper hover:shadow-[0_14px_30px_rgba(150,105,42,.32)]",
  outline: "border border-hairline-strong bg-paper/60 text-ink hover:border-primary hover:bg-primary hover:text-paper hover:shadow-[0_12px_28px_rgba(14,23,40,.18)]",
};

export default function Button({ href, variant = "primary", children, className: classNameOverride = "", ...props }) {
  const className = `${base} ${variants[variant] ?? variants.primary} ${classNameOverride}`;

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        {...props}
      >
        <span>{children}</span><span className="grid h-6 w-6 place-items-center rounded-md bg-current/10 text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    );
  }

  return (
    <button
      className={className}
      {...props}
    >
      <span>{children}</span><span className="grid h-6 w-6 place-items-center rounded-md bg-current/10 text-base transition-transform duration-200 group-hover:translate-x-1">→</span>
    </button>
  );
}
