"use client";

import { useEffect, useState } from "react";

const defaults = { packages: ["Starter", "Growth", "Scale"], products: ["Fomriva", "Billing & POS Software"], blog: ["No posts yet"], faq: ["Manage FAQs from the public FAQ page"], submissions: ["No contact submissions stored locally"], waitlist: ["No waitlist entries stored locally"] };

export default function AdminCollectionManager({ section }) {
  const key = `vishyx-admin-${section}`;
  const [items, setItems] = useState([]);
  const [draft, setDraft] = useState("");
  useEffect(() => { const stored = localStorage.getItem(key); setItems(stored ? JSON.parse(stored) : defaults[section] ?? []); }, [key, section]);
  const save = (next) => { setItems(next); localStorage.setItem(key, JSON.stringify(next)); };
  const title = section[0].toUpperCase() + section.slice(1);
  return <div className="max-w-3xl"><p className="text-sm font-semibold text-accent-deep">Content manager</p><h1 className="mt-1 font-headline text-3xl text-ink">{title}</h1><p className="mt-2 text-ink-mute">Manage this collection locally during preview. Connect Appwrite before publishing changes to visitors.</p><form className="mt-6 flex gap-3" onSubmit={(event) => { event.preventDefault(); if (draft.trim()) { save([...items, draft.trim()]); setDraft(""); } }}><input value={draft} onChange={(event) => setDraft(event.target.value)} className="min-w-0 flex-1 rounded-md border border-hairline-strong bg-paper px-3 py-2 text-ink" placeholder={`Add ${section} item`} /><button className="rounded-md bg-accent px-4 py-2 font-semibold text-primary">Add</button></form><div className="mt-5 divide-y divide-hairline rounded-xl border border-hairline bg-paper-soft">{items.map((item, index) => <div key={`${item}-${index}`} className="flex items-center justify-between gap-4 p-4"><span className="text-ink">{item}</span><button onClick={() => save(items.filter((_, i) => i !== index))} className="rounded-md border border-hairline-strong px-3 py-1.5 text-sm text-ink hover:border-error hover:text-error">Remove</button></div>)}</div></div>;
}
