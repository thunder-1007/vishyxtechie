export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="border-b border-hairline bg-gradient-to-br from-paper-soft to-paper">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 text-center md:py-20">
        {eyebrow && (
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent-deep">{eyebrow}</p>
        )}
        <h1 className="font-headline text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-ink-mute">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
