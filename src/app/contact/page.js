import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { siteSettings } from "@/lib/content";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vishyx Techie — call, email, or send a message and we'll reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Let's talk about what you're building."
        subtitle="Fill in the form or reach us directly — we usually reply within one business day."
      />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-headline text-xl text-ink">Direct details</h2>
          <p className="mt-3 text-ink-mute">Phone: {siteSettings.phone}</p>
          <p className="text-ink-mute">Email: {siteSettings.email}</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
