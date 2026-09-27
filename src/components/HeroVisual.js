"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const terminalLines = [
  { text: "$ vishyx deploy --production", type: "cmd" },
  { text: "✓ Build passed — 0 errors, 0 warnings", type: "ok" },
  { text: "✓ Deployed to vishyxtechie.in", type: "ok" },
  { text: "# Your product, shipped by one team.", type: "info" },
];

const floatingBadges = [
  { label: "React", style: "left-[-6%] top-[10%]", delay: "0s" },
  { label: "Next.js", style: "right-[-4%] top-[4%]", delay: "0.8s" },
  { label: "Node.js", style: "left-[-8%] bottom-[18%]", delay: "1.6s" },
  { label: "Python", style: "right-[-6%] bottom-[28%]", delay: "2.4s" },
  { label: "AWS", style: "right-[14%] top-[-7%]", delay: "3.2s" },
];

function useTypewriter(enabled) {
  const [output, setOutput] = useState([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (!enabled) {
      setOutput(terminalLines);
      setCurrent("");
      return;
    }
    let line = 0, char = 0, cancelled = false, timer;
    const tick = () => {
      if (cancelled) return;
      const full = terminalLines[line].text;
      if (char <= full.length) {
        setCurrent(full.slice(0, char));
        char += 1;
        timer = setTimeout(tick, 52);
      } else {
        setOutput((prev) => [...prev, terminalLines[line]]);
        setCurrent("");
        char = 0;
        line += 1;
        if (line >= terminalLines.length) {
          line = 0;
          timer = setTimeout(() => { setOutput([]); tick(); }, 3200);
        } else {
          timer = setTimeout(tick, 650);
        }
      }
    };
    timer = setTimeout(tick, 500);
    return () => { cancelled = true; clearTimeout(timer); };
  }, [enabled]);

  return { output, current };
}

const lineColor = {
  cmd: "text-accent-soft",
  ok: "text-green-400",
  info: "text-on-primary-mute",
};

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const { output, current } = useTypewriter(!reduceMotion);
  const ref = useRef(null);

  // 3D tilt on mouse move
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 140, damping: 18 });
  const rotateY = useSpring(ry, { stiffness: 140, damping: 18 });

  const handleMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(-py * 10);
  };
  const handleLeave = () => { rx.set(0); ry.set(0); };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative aspect-[4/3] w-full"
      style={{ perspective: 1000 }}
    >
      {/* drifting mesh blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <div className={`absolute -left-10 -top-10 h-64 w-64 rounded-full bg-accent/25 blur-3xl ${reduceMotion ? "" : "animate-drift-a"}`} />
        <div className={`absolute -bottom-12 -right-10 h-72 w-72 rounded-full bg-primary-soft/60 blur-3xl ${reduceMotion ? "" : "animate-drift-b"}`} />
        <div className="hero-grid-bg absolute inset-0" />
      </div>

      {/* floating tech badges */}
      {floatingBadges.map((b) => (
        <div
          key={b.label}
          style={{ animationDelay: b.delay, animationPlayState: reduceMotion ? "paused" : "running" }}
          className={`absolute ${b.style} z-20 hidden rounded-full border border-accent/40 bg-primary-deep/80 px-4 py-2 font-data text-xs font-semibold text-accent-soft shadow-lg backdrop-blur md:block animate-float`}
        >
          {b.label}
        </div>
      ))}

      {/* glass terminal */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-x-6 top-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-primary-soft/60 bg-primary-deep/90 shadow-2xl backdrop-blur-md sm:inset-x-10"
      >
        <div className="flex items-center gap-2 border-b border-primary-soft/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-error/80" />
          <span className="h-3 w-3 rounded-full bg-accent/80" />
          <span className="h-3 w-3 rounded-full bg-success/80" />
          <span className="ml-3 font-data text-xs text-on-primary-mute">vishyx@deploy ~ zsh</span>
        </div>
        <div className="min-h-[190px] space-y-2 px-5 py-4 font-data text-sm sm:min-h-[210px]">
          {output.map((l, i) => (
            <p key={i} className={lineColor[l.type]}>{l.text}</p>
          ))}
          {current && <p className={lineColor[terminalLines[output.length]?.type ?? "cmd"]}>{current}</p>}
          <span className="caret-blink inline-block h-4 w-2 bg-accent-soft align-middle" />
        </div>
        <div className="flex items-center gap-2 border-t border-primary-soft/50 px-5 py-3">
          <span className="pulse-dot h-2 w-2 rounded-full bg-success" />
          <span className="font-data text-xs text-on-primary-mute">All systems operational</span>
        </div>
      </motion.div>
    </div>
  );
}
