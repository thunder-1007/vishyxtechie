"use client";

import { useEffect, useState } from "react";
import { services as defaultServices } from "@/lib/content";

const STORAGE_KEY = "vishyx-admin-services";

export default function AdminServicesPage() {
  const [items, setItems] = useState(null);
  const [editingSlug, setEditingSlug] = useState(null);
  const [draft, setDraft] = useState({ title: "", summary: "" });

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setItems(stored ? JSON.parse(stored) : defaultServices);
  }, []);

  function persist(next) {
    setItems(next);
    // TODO: replace with
    //   supabase.from("services").update({ title, summary, updated_at }).eq("id", id)
    // per Vishyx-Techie-Admin-Panel-Spec.md §2–3.
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function startEdit(service) {
    setEditingSlug(service.slug);
    setDraft({ title: service.title, summary: service.summary });
  }

  function saveEdit(slug) {
    const next = items.map((s) =>
      s.slug === slug ? { ...s, title: draft.title, summary: draft.summary } : s
    );
    persist(next);
    setEditingSlug(null);
  }

  if (!items) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton h-16 rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <h1 className="font-headline text-2xl text-ink">Services</h1>
      <p className="mt-1 text-ink-mute">
        Edit the title and summary shown on the public Services pages.
      </p>

      <div className="mt-6 divide-y divide-hairline rounded-lg border border-hairline bg-paper-soft">
        {items.map((service) => (
          <div key={service.slug} className="p-5">
            {editingSlug === service.slug ? (
              <div className="space-y-3">
                <input
                  value={draft.title}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, title: e.target.value }))
                  }
                  className="w-full rounded-md border border-hairline-strong bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
                />
                <textarea
                  value={draft.summary}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, summary: e.target.value }))
                  }
                  rows={2}
                  className="w-full rounded-md border border-hairline-strong bg-paper px-3 py-2 text-ink outline-none focus:border-accent"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => saveEdit(service.slug)}
                    className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-primary hover:bg-accent-deep hover:text-paper"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingSlug(null)}
                    className="rounded-md border border-hairline-strong px-4 py-2 text-sm text-ink hover:border-primary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-ink">{service.title}</p>
                  <p className="mt-1 text-sm text-ink-mute">{service.summary}</p>
                </div>
                <button
                  onClick={() => startEdit(service)}
                  className="shrink-0 rounded-md border border-hairline-strong px-3 py-1.5 text-sm text-ink hover:border-accent"
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-ink-faint">
        Demo mode: changes save to your browser&apos;s local storage, not
        the public site. Wire up Supabase per the Admin Panel Spec to make
        this drive the real Services pages.
      </p>
    </div>
  );
}
