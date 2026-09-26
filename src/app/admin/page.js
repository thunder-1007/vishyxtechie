import Link from "next/link";

const cards = [
  { href: "/admin/about", label: "About page", desc: "Edit the About Us body copy.", ready: true },
  { href: "/admin/services", label: "Services", desc: "Edit service titles and summaries.", ready: true },
  { href: "#", label: "Packages", desc: "Build next — see Admin Panel Spec §3.", ready: false },
  { href: "#", label: "Products", desc: "Build next — see Admin Panel Spec §3.", ready: false },
  { href: "#", label: "Blog", desc: "Build next — see Admin Panel Spec §3.", ready: false },
  { href: "#", label: "FAQ", desc: "Build next — see Admin Panel Spec §3.", ready: false },
  { href: "#", label: "Submissions", desc: "Contact form entries.", ready: false },
  { href: "#", label: "Waitlist", desc: "Product waitlist entries.", ready: false },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-headline text-2xl text-ink">Dashboard</h1>
      <p className="mt-1 text-ink-mute">
        Two screens are wired up as a working pattern (About, Services).
        The rest follow the same CRUD shape once Supabase is connected —
        see the build order in Vishyx-Techie-Admin-Panel-Spec.md §6.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className={`rounded-lg border p-5 ${
              card.ready
                ? "border-hairline bg-paper-soft hover:border-accent"
                : "cursor-default border-dashed border-hairline-strong opacity-60"
            }`}
          >
            <p className="font-semibold text-ink">{card.label}</p>
            <p className="mt-1 text-sm text-ink-mute">{card.desc}</p>
            {!card.ready && (
              <span className="mt-2 inline-block text-xs font-medium text-accent-deep">
                Not built yet
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
