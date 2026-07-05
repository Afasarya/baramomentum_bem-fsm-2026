"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquareHeart,
  Trophy,
  Briefcase,
  GraduationCap,
  Handshake,
  CalendarRange,
  Play,
  ArrowUpRight,
  Sparkles,
  Quote,
  ArrowRight,
  Flame,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import SplitText from "@/components/ui/SplitText";
import InstagramSection from "@/components/home/InstagramSection";
import { DATABASE_CARDS, STATS, MARQUEE_ITEMS } from "@/lib/data";

const iconMap: Record<string, any> = {
  MessageSquareHeart,
  Trophy,
  Briefcase,
  GraduationCap,
  Handshake,
  CalendarRange,
};

const colSpanMap: Record<string, string> = {
  lg: "md:col-span-3 md:row-span-2",
  md: "md:col-span-3",
  sm: "md:col-span-2",
};

export default function Home() {
  const { scrollY } = useScroll();
  const orbOneY = useTransform(scrollY, [0, 800], [0, 220]);
  const orbTwoY = useTransform(scrollY, [0, 800], [0, -160]);
  const orbThreeY = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <div className="relative">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 pb-24">
        {/* Glowing orbs */}
        <motion.div
          aria-hidden
          style={{ y: orbOneY }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-bara-orange/20 blur-[120px]"
          animate={{
            x: [0, 60, 0],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          style={{ y: orbTwoY }}
          className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-bara-red/15 blur-[140px]"
          animate={{
            x: [0, -50, 0],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          style={{ y: orbThreeY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bara-gold/10 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,10,6,0.5)_75%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-bara-gold animate-ping opacity-75" />
              <span className="relative rounded-full bg-bara-gold w-2 h-2" />
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-white/60">
              Periode Kepengurusan 2026
            </span>
          </motion.div>

          <h1 className="font-display text-[3.25rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7.5rem] leading-[0.95] tracking-tight max-w-5xl">
            <SplitText
              text="Bara Berdaya,"
              trigger="mount"
              delay={0.3}
              className="block text-white"
            />
            <SplitText
              text="Momentum Berkarya"
              trigger="mount"
              delay={0.6}
              className="block gradient-text italic font-medium"
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed font-light">
              Kabinet <span className="text-white/80">Bara Momentum</span> hadir
              sebagai katalis perubahan — menyalakan potensi mahasiswa Fakultas
              Sains dan Matematika UNDIP untuk menghasilkan karya nyata yang
              berdampak.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                href="/tentang"
                className="bg-gradient-to-r from-bara-orange to-bara-red text-white border border-bara-orange/30 hover:shadow-[0_0_50px_-5px_rgba(242,92,5,0.6)]"
              >
                Jelajahi Kabinet
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                href="/informasi"
                className="bg-white/[0.03] border border-white/10 text-white hover:border-white/30"
              >
                Database Informasi
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Infinite Marquee — absolute bottom */}
        <div className="absolute bottom-0 left-0 right-0 py-5 border-y border-white/[0.06] bg-bara-bg-darker/30 backdrop-blur-sm overflow-hidden">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="mx-8 font-display text-xl md:text-2xl text-white/30 flex items-center gap-8 italic"
              >
                {item}
                <Sparkles className="w-4 h-4 text-bara-orange/50 not-italic" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== DATABASE INFORMASI ===================== */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-bara-orange mb-3">
                01 — Database Informasi
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
                Pusat informasi yang
                <span className="italic text-white/70"> menyala </span>
                untuk mahasiswa.
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              Enam kanal informasi terkurasi yang dijalankan langsung oleh
              Kabinet Bara Momentum untuk mahasiswa FSM UNDIP.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]"
          >
            {DATABASE_CARDS.map((card) => {
              const Icon = iconMap[card.icon];
              return (
                <motion.div
                  key={card.title}
                  variants={{
                    hidden: { opacity: 0, y: 24, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`bento-card group rounded-3xl p-6 md:p-7 flex flex-col ${colSpanMap[card.size]}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-bara-orange group-hover:border-bara-orange/30 group-hover:bg-bara-orange/5 transition-all duration-500">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                      {card.badge}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-5">
                      {card.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {card.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] text-white/40 px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/informasi"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm text-white/40 group-hover:text-bara-orange transition-colors"
                    >
                      Pelajari lebih lanjut
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== VIDEO PROFILE ===================== */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-bara-orange mb-3">
                02 — Video Profile
              </p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
                Mengenal Kabinet <span className="italic gradient-text">Bara Momentum</span>
              </h2>
            </div>
            <p className="text-white/40 text-sm max-w-sm leading-relaxed">
              Cerita, visi, dan tim di balik kabinet — dalam satu video profil
              yang menyala.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent group cursor-pointer"
          >
            {/* Layered background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bara-maroon/40 via-bara-bg-dark to-bara-bg-dark" />
            <div className="absolute inset-0 noise-overlay opacity-[0.15]" />
            <motion.div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-bara-orange/25 blur-[110px]"
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Large faded "BARA" text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-display text-[12rem] md:text-[18rem] text-white/[0.04] italic leading-none select-none">
                BARA
              </span>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-bara-orange group-hover:border-bara-orange transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-full bg-bara-orange/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1 relative z-10" />
              </motion.div>
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-bara-bg-dark via-bara-bg-dark/60 to-transparent">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
                    Profile Kabinet • 2026
                  </p>
                  <h3 className="font-display text-xl md:text-2xl">
                    Bara Momentum — Official Profile
                  </h3>
                </div>
                <span className="text-xs text-white/40 font-mono whitespace-nowrap">02:46</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== TEASER VISI MISI ===================== */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-bara-orange/10 blur-[150px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 mb-8"
          >
            <Quote className="w-6 h-6 text-bara-gold" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight"
          >
            "Menyalakan <span className="italic gradient-text">bara</span> potensi,
            menjaga <span className="italic gradient-text">momentum</span> karya, untuk
            mahasiswa FSM yang <span className="italic text-white/80">berdaya dan berkarya.</span>"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-14 flex flex-col items-center gap-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl md:text-4xl gradient-text font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <MagneticButton
              href="/tentang"
              className="bg-gradient-to-r from-bara-orange to-bara-red text-white border border-bara-orange/30 hover:shadow-[0_0_50px_-5px_rgba(242,92,5,0.6)]"
            >
              Baca Visi & Misi Lengkap
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* ===================== INSTAGRAM POSTS ===================== */}
      <InstagramSection />

      {/* Closing strip */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bento-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/barmon.webp"
                  alt="Logo Bara Momentum"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl">Siap menjadi bagian dari bara?</p>
                <p className="text-white/50 text-sm mt-1">Ikuti seluruh program kerja Kabinet Bara Momentum 2026.</p>
              </div>
            </div>
            <MagneticButton
              href="/informasi"
              className="bg-white text-bara-bg-dark border border-white hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]"
            >
              Lihat Program Kerja
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}