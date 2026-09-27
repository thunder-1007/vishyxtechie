import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="26 September 2026">
      <p>
        Information on this website is provided as-is, for general
        information purposes. While we aim to keep it accurate and
        up to date, we make no guarantees about specific business outcomes
        from marketing, SEO, or software services — results depend on many
        factors outside our control.
      </p>
      <h2>1. No professional advice</h2>
      <p>Website content is not legal, financial, tax, medical, investment, or business advice. You should obtain advice suited to your circumstances before making decisions based on it.</p>
      <h2>2. Availability &amp; security</h2>
      <p>We aim to keep this website available and secure, but cannot promise it will always be uninterrupted, error-free, or free from harmful code. Use appropriate safeguards when downloading or sharing information online.</p>
      <h2>3. Third-party links</h2>
      <p>
        This website may link to third-party websites. We&apos;re not
        responsible for the content or practices of those sites.
      </p>
    </LegalPage>
  );
}
