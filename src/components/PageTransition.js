"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Page transition wrapper — simple opacity fade only.
 * No vertical (y) movement: the header sits outside this wrapper and stays
 * fixed/sticky, so animating y here would move page content out of sync
 * with the header during the transition. Respects prefers-reduced-motion
 * by skipping straight to the end state with no animation.
 */
export default function PageTransition({ children }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: prefersReducedMotion ? 0 : 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
