"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "vishyx-admin-about-body";

const DEFAULT_BODY = `Vishyx Techie is a service-and-product technology company. We build and maintain the digital foundation businesses run on — websites, e-commerce platforms, SaaS products, custom software, and mobile apps — and back it with digital marketing that actually brings customers in.`;

export default function AdminAboutPage() {
  const [body, setBody] = useState("");
  const [saved, setSaved] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setBody(stored ?? DEFAULT_BODY);
    setLoaded(true);
  }, []);

  function handleSave(e) {
    e.preventDefault();
    // TODO: replace with
    //   databases.updateDocument(DB_ID, "site_settings", documentId, { body })
    // per Vishyx-Techie-Admin-Panel-Spec.md §2–3.
    window.localStorage.setItem(STORAGE_KEY, body);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  if (!loaded) {
    return <div className="skeleton h-40 rounded-lg" />;
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-headline text-2xl text-ink">About page</h1>
      <p className="mt-1 text-ink-mute">
        This edits the intro paragraph shown on the public About page.
      </p>

      <form onSubmit={handleSave} className="mt-6 space-y-4">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={8}
          className="w-full rounded-md border border-hairline-strong bg-paper-soft px-3 py-2 text-ink outline-none focus:border-accent"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={!body.trim()}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors duration-150 hover:bg-accent-deep hover:text-paper disabled:opacity-50"
          >
            Save
          </button>
          {saved && <span className="text-sm text-success">Saved.</span>}
        </div>
      </form>

      <p className="mt-8 text-xs text-ink-faint">
        Demo mode: saved to your browser&apos;s local storage only. Wire up
        Appwrite to persist this for real and drive the public About page
        from it.
      </p>
    </div>
  );
}
