"use client";

import { motion } from "framer-motion";
import { Compass, Target, Sparkles, ArrowRight, Flame } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { VISI_TEXT, MISI_LIST, STATS } from "@/lib/data";

export default function TentangPage() {
  return (
    <div className="relative pt-32 pb-20">
      <motion.div
        aria-hidden
        className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full bg-bara-orange/15 blur-[120px]"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <section className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-bara-orange mb-4">
            Tentang Kabinet
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Kabinet <span className="italic gradient-text">Bara Momentum</span>
          </h1>
          <p className="mt-8 text-white/50 text-lg max-w-2xl leading-relaxed">
            Sebuah kabinet yang lahir dari keyakinan: setiap mahasiswa FSM UNDIP
            memiliki bara potensi yang layak dinyalakan, dan setiap momentum yang
            terbangun layak dijaga hingga menjadi karya nyata.
          </p>
        </motion.div>

        {/* Stats inline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bento-card rounded-2xl p-6">
              <p className="font-display text-3xl md:text-4xl gradient-text font-semibold">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-white/40 mt-2">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Visi */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 text-bara-gold mb-4">
              <Compass className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em]">Visi</span>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
              <Flame className="w-5 h-5 text-bara-orange" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-8"
          >
            <p className="font-display text-3xl md:text-4xl leading-[1.3] text-white/90">
              "{VISI_TEXT}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misi */}
      <section className="relative max-w-7xl mx-auto px-6 md:px-10 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <div className="inline-flex items-center gap-2 text-bara-gold mb-4">
              <Target className="w-4 h-4" />
              <span className="text-xs uppercase tracking-[0.25em]">Misi</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl">
              Empat pilar yang menjaga bara tetap <span className="italic gradient-text">menyala.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MISI_LIST.map((m, i) => (
            <motion.div
              key={m.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bento-card rounded-3xl p-8 group"
            >
              <div className="flex items-start gap-5">
                <span className="font-display text-4xl text-white/20 group-hover:text-bara-orange transition-colors duration-500">
                  {m.no}
                </span>
                <div>
                  <h3 className="font-display text-2xl mb-3">{m.title}</h3>
                  <p className="text-white/50 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative max-w-4xl mx-auto px-6 md:px-10 mt-32 text-center">
        <Sparkles className="w-8 h-8 text-bara-gold mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl leading-tight">
          Ingin tahu bagaimana kami <span className="italic gradient-text">mengeksekusinya?</span>
        </h2>
        <div className="mt-8">
          <MagneticButton
            href="/bidang"
            className="bg-gradient-to-r from-bara-orange to-bara-red text-white border border-bara-orange/30 hover:shadow-[0_0_50px_-5px_rgba(242,92,5,0.6)]"
          >
            Lihat Bidang & Biro
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}