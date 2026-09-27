import LegalPage from "@/components/LegalPage";
import { siteSettings } from "@/lib/content";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="27 September 2026">
      <p>
        <strong>
          This page is written to follow the structure of India&apos;s
          Digital Personal Data Protection Act, 2023 (DPDPA). It is a
          detailed working draft — have it reviewed by a lawyer before
          publishing, especially the sections on grievance redressal and
          cross-border transfer, which depend on your final hosting setup.
        </strong>
      </p>

      <h2 className="font-headline text-xl text-ink">1. Who this policy covers</h2>
      <p>
        Under the DPDPA, Vishyx Techie acts as a <strong>Data Fiduciary</strong>{" "}
        — the entity that decides why and how your personal data is
        processed. You, as the visitor or client interacting with this
        website, are the <strong>Data Principal</strong>. This policy
        explains what personal data we collect, why, how long we keep it,
        and the rights you can exercise over it.
      </p>

      <h2 className="font-headline text-xl text-ink">2. What we collect</h2>
      <p>
        Name, email address, phone number, company name (optional), and
        any message content you submit through our contact and waitlist
        forms. We also collect basic usage data via cookies — pages
        visited, approximate location, device and browser type — described
        further in our Cookie Policy.
      </p>

      <h2 className="font-headline text-xl text-ink">3. Legal basis: your consent</h2>
      <p>
        We process your personal data on the basis of your consent, given
        when you submit a form on this site. Consent is specific to the
        purpose stated at the point of collection (e.g. responding to a
        contact enquiry, notifying you about a product waitlist). You may
        withdraw consent at any time by emailing {siteSettings.email} — this
        will not affect the lawfulness of processing carried out before
        withdrawal.
      </p>

      <h2 className="font-headline text-xl text-ink">4. Purpose of processing</h2>
      <p>
        We use your data to respond to enquiries, deliver services
        you&apos;ve requested, notify you about product launches
        you&apos;ve joined the waitlist for, and understand website usage
        so we can improve it. We do not sell your personal data.
      </p>

      <h2 className="font-headline text-xl text-ink">5. Data retention</h2>
      <p>
        We keep contact and waitlist submissions only as long as needed
        for the purpose collected, or until you request erasure — after
        which the data is deleted or anonymized. We do not retain personal
        data indefinitely &ldquo;just in case.&rdquo;
      </p>

      <h2 className="font-headline text-xl text-ink">6. Data sharing &amp; processors</h2>
      <p>
        We share data with service providers who process it on our behalf
        — hosting, authentication, and email delivery providers — solely
        to operate this website, under contractual obligations to protect
        it. We do not transfer personal data outside India except where
        our hosting or backend providers operate servers abroad, in which
        case the same protections in this policy apply.
      </p>

      <h2 className="font-headline text-xl text-ink">7. Your rights as a Data Principal</h2>
      <p>Under the DPDPA, you have the right to:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Access a summary of the personal data we hold about you</li>
        <li>Correct or update inaccurate or incomplete data</li>
        <li>
          Request erasure of your data once it&apos;s no longer needed for
          the purpose it was collected
        </li>
        <li>Withdraw consent at any time</li>
        <li>
          Nominate another individual to exercise these rights on your
          behalf in the event of death or incapacity
        </li>
        <li>
          Register a grievance if you believe your data has been mishandled
        </li>
      </ul>
      <p>
        To exercise any of these rights, email {siteSettings.email} with
        your request — we will respond within a reasonable timeframe as
        required under the Act.
      </p>

      <h2 className="font-headline text-xl text-ink">8. Grievance redressal</h2>
      <p>
        For any complaint about how your personal data has been processed,
        contact our grievance point of contact at {siteSettings.email} or{" "}
        {siteSettings.phone}. If unresolved, you may escalate the matter to
        the Data Protection Board of India as provided under the DPDPA.
      </p>

      <h2 className="font-headline text-xl text-ink">9. Data breach notification</h2>
      <p>
        In the event of a personal data breach, we will notify affected
        individuals and the Data Protection Board of India as required
        under the DPDPA, describing the nature of the breach and the steps
        being taken to mitigate it.
      </p>

      <h2 className="font-headline text-xl text-ink">10. Children&apos;s data</h2>
      <p>
        This website is intended for business use and is not directed at
        individuals under 18. We do not knowingly collect personal data
        from minors.
      </p>

      <h2 className="font-headline text-xl text-ink">11. Contact</h2>
      <p>
        Questions about this policy or your data: {siteSettings.email} /{" "}
        {siteSettings.phone}
      </p>
    </LegalPage>
  );
}
