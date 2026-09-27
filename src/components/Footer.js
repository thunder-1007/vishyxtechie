"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { siteSettings } from "@/lib/content";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "All services" },
      { href: "/products", label: "Products" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/cookie-policy", label: "Cookie Policy" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      {/* CTA band — paper background, large Fraunces moment */}
      <div className="border-t border-hairline bg-paper-soft">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex w-full flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:px-10"
        >
          <div>
            <p className="font-headline text-3xl text-ink md:text-4xl">
              Ready to start?
            </p>
            <p className="mt-2 text-ink-mute">
              Tell us what you&apos;re building — we reply within one business day.
            </p>
          </div>
          <Button href="/contact" variant="accent">
            Talk to us
          </Button>
        </motion.div>
      </div>

      {/* Footer proper — navy strip with improved hover effects */}
      <div className="relative overflow-hidden bg-primary text-paper">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(184,134,59,.24),transparent_30%),radial-gradient(circle_at_90%_100%,rgba(85,108,151,.32),transparent_34%)]" />
        <div className="relative mx-6 my-5 grid gap-10 rounded-2xl border border-white/10 bg-white/5 px-6 py-14 shadow-2xl backdrop-blur-xl sm:grid-cols-2 md:mx-10 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-headline text-lg text-paper">Vishyx Techie</p>
            <p className="mt-2 text-sm text-on-primary-mute">
              One team for websites, software, and apps.
            </p>
            <div className="mt-4 space-y-1">
              <a
                href={`tel:${siteSettings.phone.replace(/\s/g, "")}`}
                className="block text-sm text-on-primary-mute transition-colors hover:text-accent-soft"
              >
                {siteSettings.phone}
              </a>
              <a
                href={`mailto:${siteSettings.email}`}
                className="block text-sm text-on-primary-mute transition-colors hover:text-accent-soft"
              >
                {siteSettings.email}
              </a>
            </div>
          </motion.div>
          {columns.map((col, colIndex) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (colIndex + 1) }}
            >
              <p className="text-sm font-semibold text-paper">{col.title}</p>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-on-primary-mute transition-colors hover:text-accent-soft"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="relative border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-on-primary-mute sm:flex-row md:px-10">
            <p>
              &copy; {new Date().getFullYear()} Vishyx Techie. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-soft"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-soft"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent-soft"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
