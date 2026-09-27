"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      const choice = window.localStorage.getItem("vishyx-cookie-choice");
      setVisible(!choice);
    } catch {
      // localStorage unavailable — skip persisting, don't block the page
    }
  }, []);

  function choose(value) {
    try {
      window.localStorage.setItem("vishyx-cookie-choice", value);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/15 bg-primary/95 text-paper shadow-2xl backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-on-primary-mute">
          We use essential cookies to run this site and optional analytics cookies to improve it. You can change your choice at any time. Read our{" "}
          <Link href="/cookie-policy" className="font-semibold text-accent-soft underline underline-offset-4 hover:text-paper">Cookie Policy</Link>,{" "}
          <Link href="/privacy-policy" className="font-semibold text-accent-soft underline underline-offset-4 hover:text-paper">Privacy Policy</Link>, and{" "}
          <Link href="/terms-and-conditions" className="font-semibold text-accent-soft underline underline-offset-4 hover:text-paper">Terms &amp; Conditions</Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose("rejected")}
            className="btn-modern rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-paper hover:bg-white/10"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => choose("accepted")}
            className="btn-modern rounded-full bg-accent px-4 py-2 text-sm font-semibold text-primary hover:bg-accent-soft"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
