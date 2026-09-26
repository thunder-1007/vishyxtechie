export default function LegalPage({ title, updated, children }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-headline text-3xl text-ink">{title}</h1>
      <p className="mt-2 text-sm text-ink-faint">Last updated: {updated}</p>
      <div className="prose-legal mt-8 space-y-4 text-ink-mute">{children}</div>
    </section>
  );
}
