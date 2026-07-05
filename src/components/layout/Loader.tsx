"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icons } from "@/components/ui/Icons";
import { SITE } from "@/data/site";

/**
 * Full-screen fire loader shown on first load. Mounts once per session.
 */
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("bara-loaded")) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("bara-loaded", "1");
    }, 2100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bara-bg-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 animate-pulse-ring rounded-full bg-bara-orange/40" />
            <Icons.flame className="h-20 w-20 animate-flicker text-bara-gold-lt drop-shadow-[0_0_25px_rgba(255,131,36,0.8)]" />
          </motion.div>

          <motion.p
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 font-display text-2xl text-gradient-gold"
          >
            {SITE.cabinet}
          </motion.p>

          <div className="mt-5 h-[3px] w-44 overflow-hidden rounded-full bg-bara-maroon/60">
            <motion.div
              className="h-full bg-gradient-to-r from-bara-gold-lt to-bara-orange"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
