import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About Us",
  description:
    "Vishyx Techie is a service-and-product technology company — one team for your website, software, and apps.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Expert services today. Innovative products on the way." />
      <section className="mx-auto max-w-3xl px-6 py-16 text-lg text-ink-mute">
        <p>
          Vishyx Techie is a service-and-product technology company. We
          build and maintain the digital foundation businesses run on —
          websites, e-commerce platforms, SaaS products, custom software,
          and mobile apps — and back it with digital marketing that
          actually brings customers in.
        </p>
        <p className="mt-6">
          Most businesses end up juggling five different vendors for five
          different problems. We built Vishyx Techie to be the one team
          that handles all of it, so you can spend your time running the
          business instead of managing contractors.
        </p>
        <p className="mt-6">
          Alongside our services, we&apos;re building our own products.
          Fomriva will automate the core processes that run a business,
          starting with a Billing &amp; POS system designed for how small
          teams actually sell. Both are in active development — join the
          waitlist on the Products page to get early access.
        </p>
        <p className="mt-6 font-headline text-xl text-ink">
          Whether you&apos;re launching from scratch or scaling something
          that already works, we&apos;d like to hear what you&apos;re
          building.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="accent">
            Contact us
          </Button>
        </div>
      </section>
    </>
  );
}
