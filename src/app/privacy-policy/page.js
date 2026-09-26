import LegalPage from "@/components/LegalPage";
import { siteSettings } from "@/lib/content";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="26 September 2026">
      <p>
        <strong>
          This page is a structural draft. Have it reviewed against the
          Digital Personal Data Protection Act before publishing.
        </strong>
      </p>
      <h2 className="font-headline text-xl text-ink">What we collect</h2>
      <p>
        Name, email, phone number, and any message content submitted
        through our contact and waitlist forms, along with basic analytics
        data (pages visited, general location, device type) collected via
        cookies.
      </p>
      <h2 className="font-headline text-xl text-ink">Why we collect it</h2>
      <p>
        To respond to enquiries, deliver services you&apos;ve requested,
        notify you about product launches you&apos;ve joined the waitlist
        for, and understand how our website is used so we can improve it.
      </p>
      <h2 className="font-headline text-xl text-ink">How long we keep it</h2>
      <p>
        Contact and waitlist submissions are retained for as long as
        needed to respond and follow up, and are deleted or anonymized
        when no longer needed.
      </p>
      <h2 className="font-headline text-xl text-ink">Third parties</h2>
      <p>
        We may share data with service providers who help us run this
        website — for example, hosting, analytics, and email delivery
        providers — solely to provide those services.
      </p>
      <h2 className="font-headline text-xl text-ink">Your rights</h2>
      <p>
        You can request access to, correction of, or deletion of your
        personal data at any time by emailing {siteSettings.email}.
      </p>
      <h2 className="font-headline text-xl text-ink">Contact</h2>
      <p>
        Questions about this policy: {siteSettings.email} /{" "}
        {siteSettings.phone}
      </p>
    </LegalPage>
  );
}
