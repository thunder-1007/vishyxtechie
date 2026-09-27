import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import AnimatedImage from "@/components/AnimatedImage";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description:
    "Fomriva and our Billing & POS software — currently in development. See details and join the waitlist for early access.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader title="We're building something new." />
      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-16 md:grid-cols-2">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={i * 100}>
            <Link
              href={`/products/${product.slug}`}
              className="group block overflow-hidden rounded-lg border border-hairline bg-paper-soft transition-colors duration-150 hover:border-accent"
            >
              <div className="relative aspect-[16/9] w-full">
                <AnimatedImage
                  src={`https://picsum.photos/id/${product.photoId}/800/450`}
                  alt={product.name}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="p-6">
                <span className="text-3xl" aria-hidden="true">{i === 0 ? "⚙️" : "🧾"}</span>
                <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-deep">
                  {product.status}
                </span>
                <h2 className="mt-3 font-headline text-2xl text-ink">
                  {product.name}
                </h2>
                <p className="mt-1 text-ink-mute">{product.tagline}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent-deep">
                  See details & join waitlist →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </>
  );
}
