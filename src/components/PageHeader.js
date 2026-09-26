export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="border-b border-hairline bg-paper-soft">
      <div className="mx-auto max-w-4xl px-6 py-16 text-left">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium text-accent-deep">{eyebrow}</p>
        )}
        <h1 className="font-headline text-4xl text-ink md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-ink-mute">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
