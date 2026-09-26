"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/adminAuth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email")?.toString().trim();
    const password = form.get("password")?.toString();

    if (!email || !password) {
      setError("Enter both an email and password");
      return;
    }

    // MOCK — accepts any non-empty credentials.
    // TODO: replace with supabase.auth.signInWithPassword({ email, password })
    login(email);
    router.push("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm rounded-lg border border-hairline bg-paper-soft p-8">
        <h1 className="font-headline text-2xl text-ink">Admin login</h1>
        <p className="mt-1 text-sm text-ink-mute">
          Vishyx Techie content management
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-hairline-strong bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-ink">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="w-full rounded-md border border-hairline-strong bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
            />
          </div>
          {error && <p className="text-sm text-error">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-paper transition-colors duration-150 hover:bg-primary-deep"
          >
            Log in
          </button>
        </form>

        <p className="mt-6 text-xs text-ink-faint">
          Demo mode: any email + password logs you in. Wire up Supabase
          Auth per Vishyx-Techie-Admin-Panel-Spec.md before real use.
        </p>
      </div>
    </div>
  );
}
