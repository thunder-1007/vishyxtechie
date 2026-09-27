import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import FeatureMarquee from "@/components/FeatureMarquee";
import HeroVisual from "@/components/HeroVisual";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Vishyx Techie | Professional Software, Web & App Development Services",
  description: "Transform your business with custom software solutions. Expert team delivering websites, mobile apps, SaaS platforms, and digital transformation services.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section - FIXED ALIGNMENT */}
      <section className="relative overflow-hidden border-b border-hairline bg-gradient-to-br from-paper-soft to-paper">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="load-in">
              <h1 className="font-headline text-5xl leading-tight text-ink md:text-6xl lg:text-7xl">
                Software that grows with{" "}
                <span className="text-accent-deep">your business</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-mute">
                From initial concept to ongoing maintenance, we build digital solutions that solve real business problems. One experienced team handles your entire technology stack.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/services" variant="accent">
                  Explore services
                </Button>
                <Button href="/contact" variant="outline">
                  Book consultation
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-ink-mute">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No vendor lock-in</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Fixed-price packages</span>
                </div>
              </div>
            </div>
            <div className="load-in-delay relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Marquee */}
      <FeatureMarquee />

      {/* What we do - FIXED SPACING */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-headline text-4xl text-ink md:text-5xl">
                End-to-end digital solutions
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-ink-mute">
                We handle every stage of your digital transformation — from strategy and design to development, deployment, and ongoing support.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Web Development",
                body: "Custom websites, e-commerce platforms, and SaaS applications built with modern frameworks. Responsive, fast, and built to convert.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Mobile Apps",
                body: "Native iOS and Android applications that deliver exceptional user experiences. Reach your customers wherever they are.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: "Custom Software",
                body: "Tailored solutions for unique business challenges. Process automation, integrations, data systems, and enterprise tools.",
                icon: (
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1} direction="up">
                <div className="group h-full rounded-xl border border-hairline bg-paper-soft p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
                  <div className="text-accent transition-colors group-hover:text-accent-deep">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-headline text-2xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-mute">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology stack - FIXED SPACING */}
      <section className="border-y border-hairline bg-paper-soft py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-headline text-3xl text-ink md:text-4xl">
              Built with modern, proven technology
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-ink-mute">
              We use industry-standard tools and frameworks to ensure your solution is maintainable, scalable, and future-proof.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 grid grid-cols-3 gap-4 md:grid-cols-6">
              {["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS"].map((tech) => (
                <div
                  key={tech}
                  className="flex flex-col items-center justify-center rounded-xl border border-hairline bg-paper p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
                >
                  <span className="font-data text-sm font-medium text-ink">{tech}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How we work - FIXED SPACING */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-headline text-4xl text-ink md:text-5xl">
                Simple, transparent process
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-ink-mute">
                From discovery to delivery, we keep you informed every step of the way.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We learn your business, goals, and requirements" },
              { step: "02", title: "Planning", desc: "Detailed scope, timeline, and fixed-price proposal" },
              { step: "03", title: "Development", desc: "Weekly updates as we build your solution" },
              { step: "04", title: "Launch & Support", desc: "Go live with ongoing maintenance included" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
                    <span className="font-data text-xl font-bold text-accent">{item.step}</span>
                  </div>
                  <h3 className="mt-4 font-headline text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-mute">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products teaser - FIXED SPACING */}
      <section className="bg-primary py-20 text-paper md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-headline text-3xl md:text-4xl">
                We&apos;re also building our own products
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-on-primary-mute">
                Fomriva and our Billing & POS software are in active development. Join the waitlist to get early access and exclusive launch pricing.
              </p>
              <div className="mt-8">
                <Button href="/products" variant="accent">
                  Get early access
                </Button>
              </div>
              <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
                {[['⚙️', 'Fomriva', 'Workflow automation for growing teams'], ['🧾', 'Billing & POS', 'Simple selling, billing, and reporting']].map(([icon, title, text]) => <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"><span className="text-2xl">{icon}</span><p className="mt-2 font-semibold text-paper">{title}</p><p className="mt-1 text-sm text-on-primary-mute">{text}</p></div>)}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA - FIXED SPACING */}
      <section className="border-t border-hairline bg-paper-soft py-20 md:py-28">
        <div className="mx-auto w-full max-w-4xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-headline text-4xl text-ink md:text-5xl">
              Ready to start your project?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-mute">
              Tell us about your goals and challenges. We&apos;ll provide an honest assessment and a clear path forward — usually within one business day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="accent">
                Get in touch
              </Button>
              <Button href="/services" variant="outline">
                View services
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
