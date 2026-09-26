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
      <p>
        This website may link to third-party websites. We&apos;re not
        responsible for the content or practices of those sites.
      </p>
    </LegalPage>
  );
}
