import Link from "next/link";
import Button from "@/components/Button";
import { services } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* Hero — the one orchestrated load moment for the site */}
      <section className="border-b border-hairline bg-paper-soft">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="load-in">
            <h1 className="font-headline text-4xl leading-tight text-ink md:text-5xl">
              Software, websites, and apps — built by one team, not five
              vendors.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-ink-mute">
              Vishyx Techie designs, builds, and maintains the digital
              systems your business runs on — from your website to your
              billing software.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services" variant="accent">
                See our services
              </Button>
              <Button href="/contact" variant="outline">
                Talk to us
              </Button>
            </div>
          </div>
          <div className="load-in-delay aspect-[4/3] w-full rounded-lg border border-hairline bg-primary/5">
            {/* Replace with a real, high-resolution photo per DESIGN.md
                (team at work / a real product screen) — no illustration */}
            <div className="flex h-full items-center justify-center text-sm text-ink-faint">
              [ Real photo goes here — workspace or product screen ]
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-headline text-3xl text-ink">What we do</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Build",
              body: "Websites, e-commerce, SaaS, and custom software.",
            },
            {
              title: "Extend",
              body: "Android and iOS apps that reach your customers anywhere.",
            },
            {
              title: "Grow",
              body: "Digital marketing and branding that brings the right people in.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-hairline bg-paper-soft p-6"
            >
              <h3 className="font-headline text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-mute">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services" variant="outline">
            See all services
          </Button>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="bg-primary text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:text-left">
          <h2 className="font-headline text-3xl">
            Not sure where to start? Our Starter package gets you online in
            7 days.
          </h2>
          <p className="mt-4 max-w-2xl text-primary-soft">
            Domain, hosting, a working website, and the basics you need to
            be found on Google — bundled into one package built for new
            businesses.
          </p>
          <div className="mt-8">
            <Button href="/pricing" variant="accent">
              See packages
            </Button>
          </div>
        </div>
      </section>

      {/* Products teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-headline text-3xl text-ink">
          We&apos;re also building our own products.
        </h2>
        <p className="mt-4 max-w-2xl text-ink-mute">
          Fomriva and our Billing &amp; POS software are in active
          development. Join the waitlist to get early access before public
          launch.
        </p>
        <div className="mt-8">
          <Button href="/products" variant="outline">
            Get early access
          </Button>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-hairline bg-paper-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="font-headline text-3xl text-ink">
            Tell us what you&apos;re building.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-mute">
            Whether it&apos;s a five-page website or a custom platform,
            we&apos;ll tell you honestly what it takes.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
