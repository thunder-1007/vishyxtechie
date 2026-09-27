"use client";

import { motion } from "framer-motion";

/**
 * Skeleton loader components for various content types
 * Follows DESIGN.md - quiet pulse, no shimmer sweep
 */
export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 rounded bg-paper-soft"
          style={{
            width: i === lines - 1 ? "70%" : "100%",
          }}
          animate={{
            opacity: [1, 0.55, 1],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }) {
  return (
    <div className={`rounded-lg border border-hairline bg-paper-soft p-6 ${className}`}>
      <motion.div
        className="mb-4 h-6 w-3/4 rounded bg-hairline"
        animate={{
          opacity: [1, 0.55, 1],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <SkeletonText lines={3} />
    </div>
  );
}

export function SkeletonImage({ className = "" }) {
  return (
    <motion.div
      className={`aspect-video w-full rounded-lg border border-hairline bg-paper-soft ${className}`}
      animate={{
        opacity: [1, 0.55, 1],
      }}
      transition={{
        duration: 1.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function SkeletonLoader({ type = "text", ...props }) {
  switch (type) {
    case "card":
      return <SkeletonCard {...props} />;
    case "image":
      return <SkeletonImage {...props} />;
    default:
      return <SkeletonText {...props} />;
  }
}
