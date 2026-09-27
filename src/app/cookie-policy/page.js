import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="26 September 2026">
      <p>This policy explains how Vishyx Techie uses browser storage and similar technologies on this website. It should be read with our Privacy Policy.</p>
      <h2>1. What cookies we use</h2>
      <p>
        <strong>Essential cookies</strong> keep the site working (e.g.
        remembering your cookie preference). <strong>Analytics cookies</strong>{" "}
        help us understand how the site is used, so we can improve it.
      </p>
      <h2>2. Cookie categories</h2>
      <ul className="list-disc space-y-2 pl-6"><li><strong>Essential:</strong> stores your cookie preference so the banner does not reappear after you decide.</li><li><strong>Analytics:</strong> if enabled, helps us measure aggregated usage and improve site performance. We do not use it to identify you personally.</li></ul>
      <h2>3. Managing cookies</h2>
      <p>
        You can accept or reject non-essential cookies using the banner
        shown on your first visit, or change your choice at any time by
        clearing your browser&apos;s local storage for this site.
      </p>
      <h2>4. Updates</h2>
      <p>We may update this policy as our services or technology change. The date at the top shows the latest revision.</p>
    </LegalPage>
  );
}
