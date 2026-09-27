"use client";

import Link from "next/link";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { packages, services, faqs } from "@/lib/content";
import { motion } from "framer-motion";

export default function PricingPage() {
  const pricingFaqs = faqs.filter((f) =>
    ["Starter", "upgrade", "delivery", "payment", "just one service"].some((k) =>
      f.q.toLowerCase().includes(k.toLowerCase())
    )
  );

  return (
    <>
      <PageHeader
        title="Clear, honest pricing"
        subtitle="Start simple, grow into more, or scope something custom — no package locks you out of the next one."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.name} delay={i * 0.1} direction="up">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`flex h-full flex-col rounded-lg border bg-paper-soft p-8 transition-all ${
                  pkg.recommended
                    ? "border-t-4 border-t-accent border-x-hairline border-b-hairline shadow-xl"
                    : "border-hairline hover:border-accent hover:shadow-lg"
                }`}
              >
                {pkg.badge && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold text-accent-deep">
                    {pkg.badge}
                  </span>
                )}
                <h2 className="font-headline text-3xl text-ink">{pkg.name}</h2>
                <p className="mt-2 text-ink-mute">{pkg.subtitle}</p>
                <div className="mt-6">
                  <p className="font-headline text-4xl text-accent-deep">
                    {pkg.price}
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-4 text-sm text-ink">
                  {pkg.features.map((f, idx) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-3"
                    >
                      <svg className="h-5 w-5 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Button
                    href="/contact"
                    variant={pkg.recommended ? "accent" : "outline"}
                  >
                    {pkg.name === "Scale" ? "Book a scoping call" : "Get started"}
                  </Button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-16 rounded-lg border border-hairline bg-paper p-8 text-center">
            <h3 className="font-headline text-2xl text-ink">Need something different?</h3>
            <p className="mt-3 text-ink-mute">
              Every project is unique. Let&apos;s discuss your specific requirements and create a custom proposal.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="outline">
                Get a custom quote
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Individual / à la carte pricing */}
      <section className="border-t border-hairline bg-paper-soft">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-headline text-4xl text-ink">
                Prefer just one service?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-mute">
                Every service has its own starting price — no package required.
                Final price depends on scope, confirmed before work begins.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 space-y-3">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="flex items-center justify-between gap-6 rounded-lg border border-hairline bg-paper p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <div className="flex-1">
                    <p className="font-headline text-lg text-ink">{s.title}</p>
                    <p className="mt-1 text-sm text-ink-mute">{s.summary}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-headline text-2xl text-accent-deep">
                      {s.startingPrice}
                    </span>
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="border-t border-hairline bg-paper">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <ScrollReveal>
            <h2 className="text-center font-headline text-4xl text-ink">Common questions</h2>
          </ScrollReveal>
          <div className="mt-12 space-y-8">
            {pricingFaqs.map((f, i) => (
              <ScrollReveal key={f.q} delay={i * 0.1}>
                <div className="rounded-lg border border-hairline bg-paper-soft p-6">
                  <p className="font-semibold text-ink">{f.q}</p>
                  <p className="mt-3 leading-relaxed text-ink-mute">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                href="/faq"
                className="text-accent transition-colors hover:text-accent-deep"
              >
                View all FAQs →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <ScrollReveal>
          <h2 className="font-headline text-4xl text-ink">
            Not sure which one fits?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-mute">
            Talk to us — no pressure, just honest answers about what your project needs and what it will cost.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="accent">
              Start a conversation
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
