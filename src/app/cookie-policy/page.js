import LegalPage from "@/components/LegalPage";

export const metadata = { title: "Cookie Policy" };

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="26 September 2026">
      <h2 className="font-headline text-xl text-ink">
        What cookies we use
      </h2>
      <p>
        <strong>Essential cookies</strong> keep the site working (e.g.
        remembering your cookie preference). <strong>Analytics cookies</strong>{" "}
        help us understand how the site is used, so we can improve it.
      </p>
      <h2 className="font-headline text-xl text-ink">Managing cookies</h2>
      <p>
        You can accept or reject non-essential cookies using the banner
        shown on your first visit, or change your choice at any time by
        clearing your browser&apos;s local storage for this site.
      </p>
    </LegalPage>
  );
}
