import { notFound } from "next/navigation";
import Button from "@/components/Button";
import WaitlistForm from "@/components/WaitlistForm";
import AnimatedImage from "@/components/AnimatedImage";
import { products } from "@/lib/content";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.tagline };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <>
      {/* Full-bleed navy "in development" moment with an on-brand
          animation — a slow, quiet progress pulse, not a spinner/sparkle */}
      <section className="border-b border-hairline bg-primary text-paper">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <DevIndicator />
          <p className="mt-6 text-sm font-medium text-accent-soft">
            {product.status}
          </p>
          <h1 className="mt-3 font-headline text-4xl md:text-5xl">
            {product.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-on-primary-mute">
            {product.tagline}
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="accent">
              Have a question? Talk to us
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-hairline">
          <AnimatedImage
            src={`https://picsum.photos/id/${product.photoId}/900/700`}
            alt={product.name}
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div>
          <h2 className="font-headline text-2xl text-ink">
            What {product.name} does
          </h2>
          <p className="mt-4 text-ink-mute">{product.body}</p>
          <p className="mt-6 text-sm text-ink-faint">
            Currently in active development — no public launch date yet.
            Join the waitlist below and we&apos;ll reach out before it goes
            live.
          </p>
        </div>
      </section>

      <section className="border-t border-hairline bg-paper-soft">
        <div className="mx-auto max-w-lg px-6 py-16">
          <h2 className="font-headline text-2xl text-ink">
            Want early access?
          </h2>
          <p className="mt-2 mb-6 text-ink-mute">
            Pre-book now and we&apos;ll reach out before public launch.
          </p>
          <WaitlistForm productSlug={product.slug} productName={product.name} />
        </div>
      </section>
    </>
  );
}

function DevIndicator() {
  return (
    <div
      className="mx-auto flex w-48 items-center justify-center gap-2"
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse"
          style={{ animationDelay: `${i * 200}ms`, animationDuration: "1.4s" }}
        />
      ))}
    </div>
  );
}
