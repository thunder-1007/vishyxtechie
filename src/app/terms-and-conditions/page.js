import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="26 September 2026">
      <p>
        <strong>
          This page is a structural draft. Have it reviewed by a lawyer
          before publishing.
        </strong>
      </p>
      <h2 className="font-headline text-xl text-ink">Our services</h2>
      <p>
        Vishyx Techie provides website, e-commerce, software, mobile app,
        and digital marketing services as described on our Services and
        Pricing pages. Scope, timelines, and deliverables for each
        engagement are confirmed in writing before work begins.
      </p>
      <h2 className="font-headline text-xl text-ink">
        Payment & cancellation
      </h2>
      <p>
        Package pricing and payment terms are agreed before work begins.
        See our Refund &amp; Cancellation Policy for cancellation windows
        and refund conditions.
      </p>
      <h2 className="font-headline text-xl text-ink">
        Intellectual property
      </h2>
      <p>
        On full payment, you own the final deliverables built specifically
        for you. Vishyx Techie retains ownership of its own internal
        tools, frameworks, and reusable components used to build them.
      </p>
      <h2 className="font-headline text-xl text-ink">Quality & tools</h2>
      <p>
        Vishyx Techie uses a combination of in-house engineering and
        AI-assisted development and design tools as part of our delivery
        process, alongside human review at every stage.
      </p>
      <h2 className="font-headline text-xl text-ink">Liability</h2>
      <p>
        Our liability for any claim relating to our services is limited to
        the amount paid for the specific engagement in question.
      </p>
    </LegalPage>
  );
}
