export default function LegalPage({ title, updated, children }) {
  return (
    <section className="border-b border-hairline bg-paper-soft">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <p className="font-data text-xs font-semibold tracking-[.18em] text-accent-deep">VISHYX TECHIE · LEGAL</p>
        <h1 className="mt-3 font-headline text-4xl text-ink md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-faint">Last updated: {updated}</p>
        <div className="prose-legal mt-10 space-y-5 leading-7 text-ink-mute [&_h2]:mt-10 [&_h2]:font-headline [&_h2]:text-2xl [&_h2]:leading-tight [&_h2]:text-ink [&_strong]:font-semibold [&_strong]:text-ink">{children}</div>
      </div>
    </section>
  );
}
