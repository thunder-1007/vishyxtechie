import Link from "next/link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-headline text-xl tracking-tight">
          Vishyx Techie
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-150 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-accent-deep hover:text-paper md:inline-block"
        >
          Talk to us
        </Link>
      </div>
    </header>
  );
}
