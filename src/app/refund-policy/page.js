import LegalPage from "@/components/LegalPage";
import { siteSettings } from "@/lib/content";

export const metadata = { title: "Refund & Cancellation Policy" };

export default function RefundPolicyPage() {
  return <LegalPage title="Refund & Cancellation Policy" updated="27 September 2026">
    <p>This policy applies unless a signed proposal, statement of work, or order form sets different terms. Because our work is tailored to each client, refund eligibility depends on the project stage and costs already committed.</p>
    <h2>1. Cancellation before work starts</h2>
    <p>You may request cancellation before work begins. If no discovery, planning, third-party purchase, or other paid work has been completed, any eligible refund will be confirmed after we review the project record.</p>
    <h2>2. Cancellation after work starts</h2>
    <p>If work has already started, refunds, if any, are calculated based on work completed at the time of cancellation, approved milestones, and non-recoverable costs. We will provide a written calculation so the outcome is clear.</p>
    <h2>3. Non-refundable items</h2>
    <p>Third-party costs already incurred on your behalf — such as domain registration, hosting, software licenses, payment processing, or app-store fees — are non-refundable once purchased. Time already spent on discovery, design, development, support, or approved change requests may also be non-refundable.</p>
    <h2>4. How to request a cancellation or refund</h2>
    <p>Send your request, project name, invoice number, and reason to {siteSettings.email}. We will acknowledge it and explain the next steps. Cancelling a third-party subscription may require action directly with that provider.</p>
    <h2>5. Disputes</h2>
    <p>If you believe a charge is incorrect, contact us first so we can review the scope, approvals, and payment record. This policy does not limit rights that cannot be excluded under applicable law.</p>
  </LegalPage>;
}
