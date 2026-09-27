import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureMarquee from "@/components/FeatureMarquee";
import AnimatedImage from "@/components/AnimatedImage";

export const metadata = {
  title: "About Vishyx Techie | Our Story & Values",
  description:
    "Learn about Vishyx Techie - a service-and-product technology company building digital solutions that last. One team for your website, software, and apps.",
};

const values = [
  {
    title: "One team, not five vendors",
    body: "Website, software, apps, and marketing — coordinated by people who talk to each other, not handed off between agencies.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Honest scoping",
    body: "We tell you what a project actually takes before you commit — no inflated timelines, no scope surprises mid-build.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Built to last",
    body: "Maintenance and support aren't an afterthought — we plan for what happens after launch, not just launch day.",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const team = [
  {
    role: "Development",
    description: "Expert developers building robust, scalable solutions with modern technology stacks.",
  },
  {
    role: "Design",
    description: "UX/UI specialists crafting intuitive, beautiful interfaces that users love.",
  },
  {
    role: "Strategy",
    description: "Business analysts helping you make the right technical decisions for your goals.",
  },
  {
    role: "Support",
    description: "Dedicated support team ensuring your systems run smoothly 24/7.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Building digital solutions that grow with your business"
        subtitle="One experienced team handling your entire technology stack"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-6 text-lg leading-relaxed text-ink-mute">
              <p>
                <strong className="text-ink">Vishyx Techie</strong> is a service-and-product technology company. We
                build and maintain the digital foundation businesses run on —
                websites, e-commerce platforms, SaaS products, custom
                software, and mobile apps — and back it with digital
                marketing that actually brings customers in.
              </p>
              <p>
                Most businesses end up juggling five different vendors for
                five different problems. We built Vishyx Techie to be the one
                team that handles all of it, so you can spend your time
                running the business instead of managing contractors.
              </p>
              <p>
                We believe in <strong className="text-ink">transparency, quality, and long-term partnerships</strong>.
                Every project includes honest timelines, fixed-price options, and ongoing support.
                Your success is our success.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-hairline shadow-2xl">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=900&fit=crop"
                alt="Professional team collaborating"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Marquee */}
      <FeatureMarquee />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-headline text-4xl text-ink">
              How we work
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-ink-mute">
              Our approach is built on these core principles that guide every project we take on.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1} direction="up">
              <div className="group h-full rounded-xl border border-hairline bg-paper-soft p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
                <div className="text-accent transition-colors group-hover:text-accent-deep">
                  {v.icon}
                </div>
                <p className="mt-6 font-headline text-xl text-ink">{v.title}</p>
                <p className="mt-3 leading-relaxed text-ink-mute">{v.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="border-y border-hairline bg-paper-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-headline text-4xl text-ink">
                Our team
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-ink-mute">
                Experienced professionals working together to deliver exceptional results.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <ScrollReveal key={member.role} delay={i * 0.1} direction="up">
                <div className="rounded-xl border border-hairline bg-paper p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md">
                  <h3 className="font-headline text-lg text-ink">{member.role}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-paper">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-headline text-4xl">
                Building our own products too
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-on-primary-mute">
                Alongside our services, we&apos;re building our own products.
                <strong className="text-paper"> Fomriva</strong> will automate the core processes that run a business,
                starting with a Billing & POS system designed for how
                small teams actually sell. Both are in active development.
              </p>
              <div className="mt-10">
                <Link
                  href="/products"
                  className="inline-block rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent-deep hover:text-paper hover:shadow-lg"
                >
                  Get early access
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:py-32">
        <ScrollReveal>
          <p className="font-headline text-3xl leading-relaxed text-ink md:text-4xl">
            Whether you&apos;re launching from scratch or scaling something
            that already works, we&apos;d like to hear what you&apos;re
            building.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-accent-deep hover:text-paper hover:shadow-lg"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-xl border border-hairline-strong bg-paper px-8 py-4 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-paper hover:shadow-md"
            >
              Explore services
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
