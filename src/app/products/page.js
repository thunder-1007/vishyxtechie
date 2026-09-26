import PageHeader from "@/components/PageHeader";
import WaitlistForm from "@/components/WaitlistForm";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description:
    "Fomriva and our Billing & POS software — currently in development. Join the waitlist for early access.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="We're building something new." />
      <section className="mx-auto max-w-4xl divide-y divide-hairline px-6">
        {products.map((product) => (
          <div key={product.slug} className="grid gap-8 py-16 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
                {product.status}
              </span>
              <h2 className="mt-4 font-headline text-3xl text-ink">
                {product.name}
              </h2>
              <p className="mt-2 text-lg text-ink-mute">{product.tagline}</p>
              <p className="mt-4 text-ink-mute">{product.body}</p>
            </div>
            <div className="rounded-lg border border-hairline bg-paper-soft p-6">
              <p className="font-headline text-lg text-ink">
                Want early access?
              </p>
              <p className="mt-1 mb-4 text-sm text-ink-mute">
                Pre-book now and we&apos;ll reach out before public launch.
              </p>
              <WaitlistForm productSlug={product.slug} productName={product.name} />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
