"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { getSession, logout } from "@/lib/adminAuth";

// NOTE: this gate is client-side and for local preview only. Before
// deploying, protect /admin/* with server-side middleware that checks a
// real Appwrite session (Vishyx-Techie-Admin-Panel-Spec.md §5).

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/about", label: "About page" },
  { href: "/admin/services", label: "Services" },
  { href: "/admin/manage/products", label: "Products" },
  { href: "/admin/manage/blog", label: "Blog" },
  { href: "/admin/manage/faq", label: "FAQ" },
  { href: "/admin/manage/submissions", label: "Submissions" },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setReady(true);
      return;
    }
    const session = getSession();
    if (!session) {
      router.replace("/admin/login");
    } else {
      setReady(true);
    }
  }, [isLoginPage, router]);

  if (isLoginPage) return children;
  if (!ready) return null;

  return (
    <div className="min-h-screen bg-paper">
      <div className="flex min-h-screen">
        <aside className="w-56 shrink-0 border-r border-hairline bg-primary text-paper">
          <div className="px-5 py-5 font-headline text-lg">Vishyx Admin</div>
          <nav className="flex flex-col gap-1 px-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm hover:bg-primary-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => {
              logout();
              router.push("/admin/login");
            }}
            className="mx-3 mt-6 rounded-md border border-primary-soft px-3 py-2 text-left text-sm hover:bg-primary-soft"
          >
            Log out
          </button>
        </aside>
        <div className="flex-1 px-8 py-8">{children}</div>
      </div>
    </div>
  );
}
