import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { services } from "@/lib/content";
import ServiceVisual from "@/components/ServiceVisual";

export const metadata = {
  title: "Services",
  description:
    "Custom websites, e-commerce, SaaS, custom software, mobile apps, and digital marketing — six ways Vishyx Techie helps your business run better online.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Seven ways we help your business run better online."
        subtitle="Pick one service or combine a few — everything below works together, because one team builds all of it."
      />
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-lg border border-hairline bg-paper-soft p-6 transition-colors duration-150 hover:border-accent"
            >
              <div className="relative mb-5 h-44 overflow-hidden rounded-xl border border-primary-soft/25"><ServiceVisual title={service.title} /></div>
              <div className="flex items-center justify-between"><span className="font-data text-xs text-accent-deep">0{index + 1}</span><span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-deep">From {service.startingPrice}</span></div>
              <h2 className="font-headline text-xl text-ink">
                {service.title}
              </h2>
              <p className="mt-2 text-ink-mute">{service.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent-deep">
                Explore service →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
