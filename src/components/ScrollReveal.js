"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

/**
 * Reveal component with scroll-triggered animations
 * Replaces the old Reveal component with more options
 */
export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up", // up, down, left, right, none
  duration = 0.5,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-100px 0px -100px 0px",
  });
  const prefersReducedMotion = useReducedMotion();

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
