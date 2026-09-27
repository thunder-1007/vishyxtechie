"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * An illustrated, motion-safe replacement for decorative stock photography.
 * Callers keep their existing sized wrapper; `alt` is used to select a useful
 * visual cue, so the visual remains intentional across service and product pages.
 */
export default function AnimatedImage({ alt = "Digital product visual", className = "" }) {
  const reduceMotion = useReducedMotion();
  const icon = /mobile|app/i.test(alt) ? "📱" : /commerce|shop|product|pos/i.test(alt) ? "🛍️" : /team|about/i.test(alt) ? "🤝" : "✦";
  const float = reduceMotion ? {} : { y: [0, -10, 0], rotate: [0, 2, 0] };

  return (
    <div className={`absolute inset-0 grid place-items-center overflow-hidden bg-primary-deep ${className}`} role="img" aria-label={alt}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(184,134,59,.42),transparent_30%),radial-gradient(circle_at_82%_80%,rgba(89,116,159,.5),transparent_35%)]" />
      <div className="hero-grid-bg absolute inset-0 opacity-50" />
      <motion.div animate={float} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 grid h-[58%] w-[58%] place-items-center rounded-[2rem] border border-white/20 bg-white/10 text-6xl shadow-2xl backdrop-blur-xl sm:text-7xl">
        <span aria-hidden="true">{icon}</span>
        <span className="absolute -bottom-3 -right-3 rounded-full border border-accent/40 bg-primary px-3 py-1 font-data text-[10px] text-accent-soft shadow-lg">LIVE</span>
      </motion.div>
      {["⚡", "⌘", "●"].map((item, index) => (
        <motion.span key={item} aria-hidden="true" animate={reduceMotion ? {} : { y: [0, -14, 0], x: [0, index % 2 ? 8 : -8, 0] }} transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }} className={`absolute z-10 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-primary/80 text-sm shadow-lg backdrop-blur ${index === 0 ? "left-[14%] top-[18%]" : index === 1 ? "right-[12%] top-[28%]" : "bottom-[17%] left-[20%]"}`}>
          {item}
        </motion.span>
      ))}
    </div>
  );
}
