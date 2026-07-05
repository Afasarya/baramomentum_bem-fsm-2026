"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import Magnetic from "@/components/ui/Magnetic";
import { Icons } from "@/components/ui/Icons";
import { SITE } from "@/data/site";

/** Banner slides for the marquee. Swap labels/images with real banners. */
const BANNERS = [
  { label: "Bara Semangat", tone: "from-bara-orange-lt to-bara-red" },
  { label: "Momentum Perubahan", tone: "from-bara-red to-bara-maroon" },
  { label: "Kebermanfaatan Nyata", tone: "from-bara-gold to-bara-orange" },
  { label: "Soliditas & Sinergi", tone: "from-bara-ember to-bara-maroon" },
  { label: "Progresif & Inklusif", tone: "from-bara-orange to-bara-red" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...BANNERS, ...BANNERS];
  return (
    <div
      className="marquee-track gap-5"
      style={reverse ? { animationDirection: "reverse" } : undefined}
    >
      {items.map((b, i) => (
        <div
          key={i}
          className={`relative grid h-40 w-[320px] shrink-0 place-items-center overflow-hidden rounded-3xl bg-gradient-to-br ${b.tone} shadow-ember sm:h-48 sm:w-[420px]`}
        >
          <div className="absolute inset-0 bg-noise opacity-10" />
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-bara-gold-lt/30 blur-2xl" />
          <Icons.flame className="absolute left-5 top-5 h-7 w-7 text-bara-cream/70" />
          <span className="px-6 text-center font-display text-2xl text-bara-cream drop-shadow-lg sm:text-3xl">
            {b.label}
          </span>
          <span className="absolute bottom-4 right-5 text-[11px] uppercase tracking-[0.25em] text-bara-cream/70">
            BEM FSM 2026
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-bara-orange/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-bara-gold/20 blur-[100px]" />

      {/* Headline */}
      <div className="container-bara relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass-panel px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-bara-gold-lt"
        >
          <span className="h-2 w-2 rounded-full bg-bara-orange-lt animate-flicker" />
          {SITE.cabinet} · BEM FSM UNDIP 2026
        </motion.div>

        <h1 className="font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          <SplitText
            text="Bara Berdaya,"
            trigger="mount"
            delay={0.5}
            className="block text-bara-cream"
          />
          <SplitText
            text="Momentum Berkarya"
            trigger="mount"
            delay={0.9}
            className="block text-gradient-gold"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-bara-cream/75 sm:text-lg"
        >
          Menyalakan bara semangat dalam momentum perubahan untuk menghadirkan
          kebermanfaatan nyata bagi mahasiswa FSM Undip, Undip, dan masyarakat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <Link href="/tentang" className="btn-bara">
              Kenali Kabinet
              <Icons.arrow className="h-4 w-4" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link href="/informasi" className="btn-ghost">
              Lihat Informasi
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      {/* Infinite seamless marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        className="relative z-10 mt-16 space-y-5"
      >
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow />
        </div>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow reverse />
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="mx-auto mt-12 flex flex-col items-center gap-2 text-bara-cream/50"
      >
        <span className="text-[11px] uppercase tracking-[0.3em]">Gulir</span>
        <span className="h-9 w-5 rounded-full border border-bara-cream/30 p-1">
          <span className="block h-2 w-full rounded-full bg-bara-gold-lt" />
        </span>
      </motion.div>
    </section>
  );
}
