import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { siteSettings } from "@/lib/content";

export const metadata = {
  title: "Contact Us | Get in Touch with Vishyx Techie",
  description:
    "Get in touch with Vishyx Techie — call, email, or send a message and we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's talk about what you're building"
        subtitle="Fill in the form or reach us directly — we usually reply within one business day."
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <ScrollReveal>
          <div className="grid overflow-hidden rounded-lg border border-hairline shadow-xl md:grid-cols-5">
            {/* Info panel */}
            <div className="bg-primary p-10 text-paper md:col-span-2">
              <p className="font-headline text-2xl">Get in touch</p>
              <p className="mt-3 text-sm text-on-primary-mute">
                We&apos;re here to help you bring your ideas to life.
              </p>

              <div className="mt-10 space-y-6">
                <InfoRow
                  label="Phone"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  }
                >
                  <a href={`tel:${siteSettings.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-accent-soft">
                    {siteSettings.phone}
                  </a>
                </InfoRow>

                <InfoRow
                  label="Email"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                >
                  <a href={`mailto:${siteSettings.email}`} className="transition-colors hover:text-accent-soft">
                    {siteSettings.email}
                  </a>
                </InfoRow>

                <InfoRow
                  label="Response time"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                >
                  Within 1 business day
                </InfoRow>
              </div>

              <div className="mt-12 rounded-lg border border-primary-soft/40 bg-primary-deep p-6">
                <p className="text-sm font-semibold text-paper">Office Hours</p>
                <p className="mt-2 text-sm text-on-primary-mute">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST
                </p>
              </div>

              <div className="mt-8 border-t border-primary-soft/40 pt-6 text-sm text-on-primary-mute">
                <p className="font-semibold text-paper">Prefer a call?</p>
                <p className="mt-2">
                  Mention a good time in your message and we&apos;ll ring you at your convenience.
                </p>
              </div>
            </div>

            {/* Form panel */}
            <div className="bg-paper-soft p-10 md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </ScrollReveal>

        {/* Additional info */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-hairline bg-paper-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="mt-4 font-headline text-lg text-ink">Quick Response</h3>
              <p className="mt-2 text-sm text-ink-mute">
                We respond to all inquiries within one business day
              </p>
            </div>

            <div className="rounded-lg border border-hairline bg-paper-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 font-headline text-lg text-ink">Confidential</h3>
              <p className="mt-2 text-sm text-ink-mute">
                Your project details are kept private and secure
              </p>
            </div>

            <div className="rounded-lg border border-hairline bg-paper-soft p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-headline text-lg text-ink">No Obligation</h3>
              <p className="mt-2 text-sm text-ink-mute">
                Free consultation with honest pricing estimates
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

function InfoRow({ label, icon, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 text-accent">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-on-primary-mute">
          {label}
        </p>
        <div className="mt-1 font-medium">{children}</div>
      </div>
    </div>
  );
}
