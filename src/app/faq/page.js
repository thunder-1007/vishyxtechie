import PageHeader from "@/components/PageHeader";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "FAQ",
  description: "Common questions about Vishyx Techie's services, packages, and upcoming products.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Frequently asked questions" />
      <section className="mx-auto max-w-3xl divide-y divide-hairline px-6 py-16">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <p className="font-semibold text-ink">{f.q}</p>
            <p className="mt-2 text-ink-mute">{f.a}</p>
          </div>
        ))}
      </section>
    </>
  );
}
