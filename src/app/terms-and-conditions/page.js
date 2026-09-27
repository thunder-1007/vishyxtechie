import LegalPage from "@/components/LegalPage";
import { siteSettings } from "@/lib/content";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" updated="26 September 2026">
      <p>These terms govern your use of this website and, where a written proposal or agreement does not say otherwise, your purchase of services from Vishyx Techie. A project-specific agreement takes priority if there is a conflict.</p>
      <h2>1. Our services</h2>
      <p>
        Vishyx Techie provides website, e-commerce, software, mobile app,
        and digital marketing services as described on our Services and
        Pricing pages. Scope, timelines, and deliverables for each
        engagement are confirmed in writing before work begins.
      </p>
      <h2>2. Proposals, changes &amp; your responsibilities</h2>
      <p>Quotes remain valid for 30 days unless stated otherwise. You are responsible for supplying timely, accurate content, approvals, access credentials, and feedback. Requests outside the agreed scope may require a revised timeline and written change order.</p>
      <h2>3. Payment &amp; cancellation</h2>
      <p>
        Package pricing and payment terms are agreed before work begins.
        See our Refund &amp; Cancellation Policy for cancellation windows
        and refund conditions.
      </p>
      <p>Invoices are payable by the date stated on the invoice or proposal. We may pause work where an invoice is overdue. Deposits, milestones, cancellation, and refunds are governed by the agreed project terms and our Refund &amp; Cancellation Policy.</p>
      <h2>4. Intellectual property</h2>
      <p>
        On full payment, you own the final deliverables built specifically
        for you. Vishyx Techie retains ownership of its own internal
        tools, frameworks, and reusable components used to build them.
      </p>
      <h2>5. Third-party services</h2>
      <p>Domains, hosting, payment gateways, app stores, analytics, and other third-party services may have their own terms, fees, availability, and privacy practices. You are responsible for maintaining any accounts held in your name and for reviewing their terms.</p>
      <h2>6. Quality &amp; tools</h2>
      <p>
        Vishyx Techie uses a combination of in-house engineering and
        AI-assisted development and design tools as part of our delivery
        process, alongside human review at every stage.
      </p>
      <h2>7. Confidentiality</h2>
      <p>Each party will use the other party&apos;s confidential information only to deliver or receive the services, and will protect it with reasonable care. This does not cover information that is public, independently developed, or required to be disclosed by law.</p>
      <h2>8. Liability</h2>
      <p>
        Our liability for any claim relating to our services is limited to
        the amount paid for the specific engagement in question.
      </p>
      <p>To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or lost-profit damages, or for losses caused by third-party services, client content, or events beyond our reasonable control.</p>
      <h2>9. Governing law &amp; contact</h2>
      <p>These terms are governed by the laws applicable in India. Questions about these terms can be sent to {siteSettings.email} or {siteSettings.phone}.</p>
    </LegalPage>
  );
}
