"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What services does Vishyx Techie offer?", a: "We build websites, e-commerce platforms, SaaS applications, custom software, and native mobile apps — one experienced team handles your entire technology stack, from concept to maintenance." },
  { q: "How much does a project cost?", a: "We work on fixed-price packages scoped after a free discovery call. You get a detailed proposal with timeline and cost before any work begins — no hourly surprises." },
  { q: "How long does development take?", a: "A marketing website typically takes 2–4 weeks; web apps and custom software 6–12 weeks depending on scope. You receive weekly progress updates throughout." },
  { q: "Do I own the code and product?", a: "Yes — completely. No vendor lock-in, ever. You get full source code, documentation, and deployment access handed over at launch." },
  { q: "Do you provide support after launch?", a: "Every launch includes ongoing maintenance. We also offer care plans covering updates, monitoring, backups, and priority support." },
  { q: "How do we get started?", a: "Book a free consultation via the contact page. We'll discuss your goals and share an honest assessment with a clear path forward — usually within one business day." },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="border-t border-hairline py-20 md:py-28">
      <div className="mx-auto w-full max-w-4xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-headline text-4xl text-ink md:text-5xl">Frequently asked questions</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-mute">
              Quick answers to the questions we hear most. Hover a question to preview the answer.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div
                  onMouseEnter={() => setOpen(i)}
                  onMouseLeave={() => setOpen(null)}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`cursor-pointer overflow-hidden rounded-xl border bg-paper-soft transition-all duration-300 ${
                    isOpen ? "border-accent bg-paper shadow-lg" : "border-hairline hover:border-accent/50"
                  }`}
                >
                  <div className="flex w-full items-center justify-between gap-6 p-6">
                    <span className="font-semibold text-ink">{faq.q}</span>
                    <motion.svg
                      className={`h-5 w-5 shrink-0 transition-colors ${isOpen ? "text-accent" : "text-ink-mute"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-hairline px-6 pb-6 pt-4 leading-relaxed text-ink-mute">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-mute">
          More questions?{" "}
          <Link href="/faq" className="font-semibold text-accent-deep hover:text-accent">
            View the full FAQ →
          </Link>
        </p>
      </div>
    </section>
  );
}