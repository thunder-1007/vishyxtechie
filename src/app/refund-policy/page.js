import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund & Cancellation Policy" updated="26 September 2026">
      <p>
        <strong>
          This page is a structural draft — confirm actual windows and
          conditions with your team before publishing.
        </strong>
      </p>
      <h2 className="font-headline text-xl text-ink">Cancellation</h2>
      <p>
        You may cancel a package within [X] days of purchase, before work
        has started, for a full refund.
      </p>
      <h2 className="font-headline text-xl text-ink">Partial refunds</h2>
      <p>
        If work has already started, refunds are prorated based on work
        completed at the time of cancellation.
      </p>
      <h2 className="font-headline text-xl text-ink">Non-refundable items</h2>
      <p>
        Third-party costs already incurred on your behalf — such as domain
        registration — are non-refundable once purchased.
      </p>
    </LegalPage>
  );
}
