import Link from "next/link";

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-150";

const variants = {
  primary: "bg-primary text-paper hover:bg-primary-deep",
  accent: "bg-accent text-primary hover:bg-accent-deep hover:text-paper",
  outline: "border border-hairline-strong text-ink hover:bg-primary hover:text-paper hover:border-primary",
};

export default function Button({ href, variant = "primary", children, ...props }) {
  const className = `${base} ${variants[variant]}`;
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
