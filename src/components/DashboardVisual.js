"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function DashboardVisual() {
  const reduced = useReducedMotion();
  const bars = [42, 68, 55, 86, 74, 96, 82];
  return (
    <div className="relative h-full min-h-72 overflow-hidden rounded-2xl border border-primary-soft/50 bg-primary-deep p-5 shadow-2xl" aria-label="Example business intelligence dashboard visual" role="img">
      <div className="absolute inset-0 hero-grid-bg opacity-30" />
      <div className="relative flex items-center justify-between text-xs text-on-primary-mute"><div><span className="font-data">FINANCE COMMAND CENTER</span><p className="mt-1 text-[10px] text-on-primary-mute/70">FY 2026 · Consolidated view</p></div><span className="rounded-full bg-success/20 px-2 py-1 text-green-400">● Live</span></div>
      <div className="relative mt-5 grid grid-cols-3 gap-3">
        {["Revenue", "Orders", "Margin"].map((label, index) => <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3"><p className="text-[10px] text-on-primary-mute">{label}</p><p className="mt-1 font-data text-lg text-paper">{["₹8.4L", "1,284", "31.6%"][index]}</p><p className="mt-1 text-[10px] text-green-400">↑ 12.4%</p></div>)}
      </div>
      <div className="relative mt-4 grid gap-3 lg:grid-cols-[1.35fr_.65fr]"><div className="rounded-xl border border-white/10 bg-white/5 p-4"><div className="flex items-center justify-between"><p className="text-xs text-on-primary-mute">Revenue trajectory</p><span className="font-data text-[10px] text-accent-soft">+₹92k this month</span></div><svg viewBox="0 0 280 86" className="mt-3 h-20 w-full overflow-visible" aria-hidden="true"><defs><linearGradient id="financeLine" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d9ae63" stopOpacity=".42" /><stop offset="1" stopColor="#d9ae63" stopOpacity="0" /></linearGradient></defs><path d="M0 72 L38 58 L75 61 L112 38 L150 45 L188 20 L226 29 L280 7 L280 86 L0 86Z" fill="url(#financeLine)" /><path d="M0 72 L38 58 L75 61 L112 38 L150 45 L188 20 L226 29 L280 7" fill="none" stroke="#d9ae63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="280" cy="7" r="4" fill="#f5dfad" /></svg><div className="mt-1 flex justify-between font-data text-[9px] text-on-primary-mute"><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span></div></div><div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-on-primary-mute">Cash position</p><p className="mt-2 font-data text-2xl text-paper">₹2.16L</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"><span className="block h-full w-[76%] rounded-full bg-success" /></div><p className="mt-2 text-[10px] text-green-400">76% of monthly target</p></div></div>
      <div className="relative mt-3 rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-on-primary-mute">Monthly performance</p><div className="mt-3 flex h-16 items-end gap-2">{bars.map((height, index) => <motion.span key={index} initial={{ height: 0 }} animate={{ height: `${height}%` }} transition={{ duration: reduced ? 0 : .65, delay: reduced ? 0 : index * .07 }} className="flex-1 rounded-t bg-gradient-to-t from-accent-deep to-accent" />)}</div></div>
    </div>
  );
}
