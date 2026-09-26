import Link from "next/link";
import { siteSettings } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-primary text-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-headline text-lg">Vishyx Techie</p>
          <p className="mt-3 text-sm text-primary-soft">
            One team for websites, software, and apps.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-soft">
            <li>
              <Link href="/services" className="hover:text-accent">
                All services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-accent">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-accent">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-soft">
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-accent">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-primary-soft">
            <li>
              <Link href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="hover:text-accent">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/cookie-policy" className="hover:text-accent">
                Cookie Policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-accent">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-accent">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-soft/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-primary-soft md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Vishyx Techie. All rights reserved.</p>
          <p>
            {siteSettings.phone} &middot; {siteSettings.email}
          </p>
        </div>
      </div>
    </footer>
  );
}
