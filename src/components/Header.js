"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services, products } from "@/lib/content";

const simpleLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceMarks = ["◫", "▣", "✦", "⚙", "▯", "↗", "◌"];
const productMarks = ["⚙", "▣"];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-primary/85 text-paper shadow-lg shadow-primary-deep/20 backdrop-blur-xl"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-headline text-xl tracking-tight transition-colors hover:text-accent-soft"
          onClick={() => {
            setOpenMenu(null);
            setMobileOpen(false);
          }}
        >
          Vishyx Techie
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <button
            onMouseEnter={() => setOpenMenu("services")}
            onClick={() => setOpenMenu((m) => (m === "services" ? null : "services"))}
            className={`text-sm font-medium transition-all duration-150 ${
              openMenu === "services" ? "text-accent" : "hover:text-accent-soft"
            }`}
          >
            Services
          </button>
          <button
            onMouseEnter={() => setOpenMenu("products")}
            onClick={() => setOpenMenu((m) => (m === "products" ? null : "products"))}
            className={`text-sm font-medium transition-all duration-150 ${
              openMenu === "products" ? "text-accent" : "hover:text-accent-soft"
            }`}
          >
            Products
          </button>
          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setOpenMenu(null)}
              className="text-sm font-medium transition-colors hover:text-accent-soft"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="btn-modern hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary shadow-[0_8px_20px_rgba(14,23,40,.18)] hover:bg-accent-deep hover:text-paper md:inline-block"
          >
            Talk to us
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block h-0.5 w-6 bg-paper"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-paper"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-paper"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-primary-deep/95 shadow-2xl backdrop-blur-xl"
          >
            <div className="w-full px-6 py-8 md:px-10">
              {openMenu === "services" && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="grid gap-x-10 gap-y-4 sm:grid-cols-2"
                >
                  {services.map((s, i) => (
                    <motion.div
                      key={s.slug}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={() => setOpenMenu(null)}
                        className="group flex items-center justify-between gap-4 border-b border-primary-soft/30 py-3 text-paper transition-all hover:border-accent"
                      >
                        <span className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/5 font-data text-sm text-accent-soft">{serviceMarks[i]}</span><span className="font-headline text-lg transition-colors group-hover:text-accent-soft">{s.title}</span></span><span className="text-accent-soft">↗</span>
                      </Link>
                    </motion.div>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setOpenMenu(null)}
                    className="mt-2 inline-block text-sm font-semibold text-accent-soft transition-colors hover:text-accent sm:col-span-2"
                  >
                    View all services →
                  </Link>
                </motion.div>
              )}
              {openMenu === "products" && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="grid gap-6 sm:grid-cols-2"
                >
                  {products.map((p, i) => (
                    <motion.div
                      key={p.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={`/products/${p.slug}`}
                        onClick={() => setOpenMenu(null)}
                        className="group block rounded-xl border border-primary-soft/40 bg-white/5 p-5 transition-all duration-150 hover:-translate-y-1 hover:border-accent hover:bg-white/10 hover:shadow-lg"
                      >
                        <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/15 text-lg text-accent-soft">{productMarks[i]}</span><span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">{p.status}</span></div>
                        <p className="mt-3 font-headline text-lg text-paper transition-colors group-hover:text-accent-soft">
                          {p.name}
                        </p>
                        <p className="mt-1 text-sm text-on-primary-mute">{p.tagline}</p>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-primary-deep/95 backdrop-blur-xl md:hidden"
          >
            <nav className="space-y-1 px-6 py-6">
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-paper transition-colors hover:text-accent-soft"
              >
                Services
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-paper transition-colors hover:text-accent-soft"
              >
                Products
              </Link>
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-paper transition-colors hover:text-accent-soft"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-accent-deep hover:text-paper"
              >
                Talk to us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
