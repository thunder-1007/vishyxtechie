import { notFound } from "next/navigation";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <PageHeader eyebrow="Services" title={service.headline} />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg text-ink-mute">{service.body}</p>

          <h2 className="mt-10 font-headline text-2xl text-ink">
            Who it&apos;s for
          </h2>
          <p className="mt-3 text-ink-mute">{service.who}</p>

          <h2 className="mt-10 font-headline text-2xl text-ink">
            How it works
          </h2>
          <ol className="mt-4 space-y-3">
            {service.steps.map((step, i) => (
              <li key={step} className="flex gap-4 text-ink">
                <span className="font-data text-sm text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="h-fit rounded-lg border border-hairline bg-paper-soft p-6">
          <p className="font-headline text-lg text-ink">
            Ready to talk about this?
          </p>
          <p className="mt-2 text-sm text-ink-mute">
            See packages that include this service, or book a call to scope
            it out.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/pricing" variant="accent">
              See packages
            </Button>
            <Button href="/contact" variant="outline">
              Talk to us
            </Button>
          </div>
        </aside>
      </section>
    </>
  );
}
