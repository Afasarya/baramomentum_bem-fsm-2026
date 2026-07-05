"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  /** Animate when in view (default) or immediately on mount. */
  trigger?: "view" | "mount";
};

const container: Variants = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.03, delayChildren: delay },
  }),
};

const letter: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Reveals a headline letter by letter from below. Splits on words so
 * line-breaks stay natural; spaces are preserved.
 *
 * Both "mount" and "view" triggers use whileInView with once:true so the
 * animation fires exactly once and text stays visible on scroll-back.
 * "mount" uses a large positive margin so it triggers instantly.
 */
export default function SplitText({
  text,
  className,
  delay = 0,
  trigger = "view",
}: SplitTextProps) {
  const words = text.split(" ");

  // Use whileInView + once:true for BOTH triggers.
  // "mount" → large margin so it fires the moment the element enters the
  //           intersection observer (essentially immediately on page load).
  // "view"  → standard scroll-triggered animation.
  const animateProps =
    trigger === "mount"
      ? {
          whileInView: "show" as const,
          viewport: { once: true, margin: "200px" },
        }
      : {
          whileInView: "show" as const,
          viewport: { once: true, margin: "-60px" },
        };

  return (
    <motion.span
      variants={container}
      custom={delay}
      initial="hidden"
      {...animateProps}
      className={cn("inline-block", className)}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {Array.from(word).map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden">
              <motion.span variants={letter} className="inline-block">
                {char}
              </motion.span>
            </span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}
