import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { packages, faqs } from "@/lib/content";

export const metadata = {
  title: "Pricing & Packages",
  description:
    "Starter, Growth, and Scale — three ways to work with Vishyx Techie, from a 7-day launch package to a fully custom engagement.",
};

export default function PricingPage() {
  const pricingFaqs = faqs.filter((f) =>
    ["Starter", "upgrade", "delivery", "payment"].some((k) =>
      f.q.toLowerCase().includes(k.toLowerCase())
    )
  );

  return (
    <>
      <PageHeader
        title="Three ways to work with us."
        subtitle="Start simple, grow into more, or scope something custom — no package locks you out of the next one."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-lg border bg-paper-soft p-6 ${
                pkg.recommended
                  ? "border-t-4 border-t-accent border-x-hairline border-b-hairline"
                  : "border-hairline"
              }`}
            >
              {pkg.badge && (
                <span className="mb-3 inline-block w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
                  {pkg.badge}
                </span>
              )}
              <h2 className="font-headline text-2xl text-ink">{pkg.name}</h2>
              <p className="text-sm text-ink-mute">{pkg.subtitle}</p>
              <p className="mt-4 font-headline text-lg text-accent-deep">
                {pkg.price}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-accent-deep">–</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  href="/contact"
                  variant={pkg.recommended ? "accent" : "outline"}
                >
                  {pkg.name === "Scale" ? "Book a scoping call" : "Get started"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline bg-paper-soft">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-headline text-2xl text-ink">Quick questions</h2>
          <div className="mt-6 space-y-6">
            {pricingFaqs.map((f) => (
              <div key={f.q}>
                <p className="font-semibold text-ink">{f.q}</p>
                <p className="mt-1 text-ink-mute">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="font-headline text-2xl text-ink">
          Not sure which one fits?
        </h2>
        <p className="mt-2 text-ink-mute">
          Talk to us — no pressure, just answers.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="accent">
            Talk to us
          </Button>
        </div>
      </section>
    </>
  );
}
