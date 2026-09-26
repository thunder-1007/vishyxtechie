"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = window.localStorage.getItem("vishyx-cookie-choice");
      if (!choice) setVisible(true);
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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-paper-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-mute">
          We use cookies to run this site and understand how it&apos;s used.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={() => choose("rejected")}
            className="rounded-md border border-hairline-strong px-4 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:border-primary"
          >
            Reject non-essential
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-paper transition-colors duration-150 hover:bg-primary-deep"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
