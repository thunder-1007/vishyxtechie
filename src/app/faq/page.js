"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { faqs } from "@/lib/content";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        subtitle="Everything you need to know about our services, pricing, and process"
      />
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.03}>
              <div
                className={`overflow-hidden rounded-xl border transition-all ${
                  openIndex === i
                    ? "border-accent bg-paper shadow-lg"
                    : "border-hairline bg-paper-soft hover:border-accent/50"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-start justify-between gap-6 p-6 text-left transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                      openIndex === i ? "bg-accent text-primary" : "bg-accent/10 text-accent"
                    }`}>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="flex-1 font-semibold text-ink">{faq.q}</span>
                  </div>
                  <motion.svg
                    className={`h-6 w-6 shrink-0 transition-colors ${
                      openIndex === i ? "text-accent" : "text-ink-mute"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-hairline px-6 pb-6 pt-4 pl-20">
                        <p className="leading-relaxed text-ink-mute">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-xl border border-hairline bg-gradient-to-br from-paper-soft to-paper p-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="mt-6 font-headline text-2xl text-ink">Still have questions?</h3>
            <p className="mt-3 text-ink-mute">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent-deep hover:text-paper hover:shadow-lg"
            >
              Contact us
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
