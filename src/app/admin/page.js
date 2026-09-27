import Link from "next/link";

const cards = [
  ["/admin/about", "Brand & story", "Company narrative, positioning, and trust signals.", "✦"],
  ["/admin/services", "Services", "Customer-facing services, offers, and descriptions.", "⌘"],
  ["/admin/manage/packages", "Packages", "Pricing packages and project planning notes.", "₹"],
  ["/admin/manage/products", "Products", "Product entries and early-access planning.", "◈"],
  ["/admin/manage/blog", "Editorial", "Prepare and manage blog content.", "✎"],
  ["/admin/manage/faq", "FAQ", "Maintain concise customer answers.", "?"],
  ["/admin/manage/submissions", "Inbox", "Review locally stored contact records.", "↓"],
  ["/admin/manage/waitlist", "Waitlist", "Review locally stored early-access records.", "↗"],
];

export default function AdminDashboard() {
  return <div className="mx-auto max-w-7xl">
    <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-8 text-paper shadow-xl md:px-9 md:py-10">
      <div className="hero-grid-bg absolute inset-0 opacity-30" />
      <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-data text-xs tracking-[.2em] text-accent-soft">VISHYX · CONTENT CONTROL</p><h1 className="mt-3 font-headline text-4xl md:text-5xl">Good morning, editor.</h1><p className="mt-3 max-w-xl text-on-primary-mute">Manage the public site with clear content areas and safer local previews.</p></div><Link href="/" className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold hover:bg-white/10">View public site ↗</Link></div>
    </section>
    <div className="mt-6 grid gap-4 sm:grid-cols-3"><Metric label="CONTENT AREAS" value="8" /><Metric label="PREVIEW MODE" value="Active" tone="text-success" /><Metric label="PUBLISHING" value="Connect CMS" /></div>
    <div className="mt-10"><p className="font-data text-xs tracking-[.16em] text-accent-deep">WORKSPACE</p><h2 className="mt-2 font-headline text-3xl text-ink">Choose an area to manage</h2></div>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{cards.map(([href, label, desc, icon]) => <Link key={label} href={href} className="group rounded-2xl border border-hairline bg-paper-soft p-5 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl"><div className="flex items-start justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 font-data text-lg text-accent-deep">{icon}</span><span className="text-sm text-ink-faint group-hover:text-accent-deep">Open →</span></div><p className="mt-5 font-headline text-2xl text-ink">{label}</p><p className="mt-2 text-sm leading-6 text-ink-mute">{desc}</p></Link>)}</div>
    <p className="mt-8 text-sm text-ink-faint">Changes are currently stored only in this browser. Connect Appwrite before relying on this workspace for production publishing.</p>
  </div>;
}

function Metric({ label, value, tone = "text-ink" }) { return <div className="rounded-2xl border border-hairline bg-paper-soft p-5"><p className="font-data text-xs text-ink-faint">{label}</p><p className={`mt-2 font-headline text-3xl ${tone}`}>{value}</p></div>; }
