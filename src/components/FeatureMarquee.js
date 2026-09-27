"use client";

import { motion } from "framer-motion";

const features = [
  "Fast Integration",
  "24/7 Support",
  "Secure Payment",
  "Cloud Hosting",
  "API Ready",
  "Mobile First",
  "SEO Optimized",
  "Auto Scaling",
  "Real-time Updates",
  "Data Encryption",
  "Custom Domain",
  "Analytics Dashboard",
  "Backup & Recovery",
  "Performance Monitoring",
  "Team Collaboration",
];

/**
 * Reverse infinite marquee - moves left to right like a train
 * Showcases features instead of fake stats
 */
export default function FeatureMarquee() {
  // Duplicate features for seamless loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <div className="relative overflow-hidden bg-primary py-6">
      <div className="flex">
        <motion.div
          className="flex shrink-0 gap-8"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div
              key={`${feature}-${index}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-accent/30 bg-primary-deep px-6 py-3"
            >
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="whitespace-nowrap text-sm font-semibold text-paper">
                {feature}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
