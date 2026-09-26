import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Custom websites, e-commerce, SaaS, custom software, mobile apps, and digital marketing — six ways Vishyx Techie helps your business run better online.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Six ways we help your business run better online."
        subtitle="Pick one service or combine a few — everything below works together, because one team builds all of it."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-hairline bg-paper-soft p-6 transition-colors duration-150 hover:border-accent"
            >
              <h2 className="font-headline text-xl text-ink">
                {service.title}
              </h2>
              <p className="mt-2 text-ink-mute">{service.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-deep">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
