import { notFound } from "next/navigation";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import DashboardVisual from "@/components/DashboardVisual";
import PowerBiInsights from "@/components/PowerBiInsights";
import ServiceVisual from "@/components/ServiceVisual";
import { services } from "@/lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <PageHeader eyebrow="Services" title={service.headline} />

      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16 lg:px-12">
        <Reveal>
          <div className={`relative mb-10 overflow-hidden rounded-2xl border border-hairline shadow-xl md:mb-14 ${service.visual === "dashboard" ? "grid h-[560px] gap-px bg-hairline p-px md:h-[360px] md:grid-cols-2" : "h-[280px] md:h-[360px]"}`}>
            {service.visual === "dashboard" ? <><DashboardVisual /><PowerBiInsights /></> : <ServiceVisual title={service.title} />}
          </div>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <Reveal>
              <p className="text-lg text-ink-mute">{service.body}</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="mt-10 font-headline text-2xl text-ink">
                What&apos;s included
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-2 rounded-md border border-hairline bg-paper-soft p-3 text-sm text-ink"
                  >
                    <span className="text-accent-deep">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="mt-10 font-headline text-2xl text-ink">
                Who it&apos;s for
              </h2>
              <p className="mt-3 text-ink-mute">{service.who}</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 rounded-2xl border border-hairline bg-paper-soft p-6 md:p-8">
                <p className="font-data text-xs font-semibold tracking-widest text-accent-deep">WHY IT MATTERS</p>
                <h2 className="mt-3 font-headline text-2xl text-ink">Build a stronger business foundation</h2>
                <p className="mt-3 leading-relaxed text-ink-mute">{service.why ?? `This service removes friction from the way your team works. It gives customers a clearer experience, gives your team dependable tools, and creates a foundation that can grow without a costly rebuild.`}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">{(service.outcomes ?? ["Reduce manual work and avoidable delays", "Give customers a faster, clearer experience", "Make performance easier to measure", "Create a system that scales with demand"]).map((outcome) => <div key={outcome} className="rounded-lg bg-paper p-4 text-sm text-ink"><span className="mr-2 text-accent-deep">✓</span>{outcome}</div>)}</div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <h2 className="mt-10 font-headline text-2xl text-ink">Common business use cases</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">{(service.useCases ?? ["Create a credible online presence that converts", "Automate a repetitive customer or team workflow", "Give decision-makers clearer information", "Connect systems that currently work in isolation"]).map((useCase, index) => <div key={useCase} className="flex gap-3 rounded-lg border border-hairline bg-paper-soft p-4"><span className="font-data text-accent-deep">0{index + 1}</span><p className="text-sm text-ink-mute">{useCase}</p></div>)}</div>
            </Reveal>

            <Reveal delay={160}>
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
            </Reveal>

            <Reveal delay={200}>
              <h2 className="mt-10 font-headline text-2xl text-ink">
                Tech we use
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline-strong bg-paper-soft px-3 py-1 font-data text-xs text-ink-mute"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="h-fit space-y-5 md:sticky md:top-28">
            <div className="rounded-2xl border border-hairline bg-paper-soft p-6">
            <p className="font-headline text-xl text-ink">Fixed-scope, no surprises</p>
            <p className="mt-2 text-sm text-ink-mute">
              Every project starts with a written scope and a confirmed price before work begins — see full pricing and packages for this service.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button href="/pricing" variant="accent">
                View pricing & packages
              </Button>
              <Button href="/contact" variant="outline">
                Talk to us about this
              </Button>
            </div>
            </div>
            <div className="rounded-2xl border border-hairline bg-paper p-5">
              <p className="font-data text-xs font-semibold tracking-widest text-accent-deep">WHAT YOU GAIN</p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-ink-mute"><span>⚡ Faster delivery</span><span>📈 Clearer growth</span><span>🧩 Better systems</span><span>🤝 Ongoing support</span></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
