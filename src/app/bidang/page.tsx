"use client";

import { motion } from "framer-motion";
import {
  Crown, Briefcase, Users, BookOpen, Megaphone, Globe,
  HeartHandshake, FlaskConical, ShieldCheck, type LucideIcon,
} from "lucide-react";
import { BIDANG_LIST } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Crown, Briefcase, Users, BookOpen, Megaphone, Globe,
  HeartHandshake, FlaskConical, ShieldCheck,
};

export default function BidangPage() {
  return (
    <div className="relative pt-32 pb-20">
      <motion.div
        aria-hidden
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-bara-red/12 blur-[120px]"
      />

      <section className="relative max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-bara-orange mb-4">
            Struktur Kabinet
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            Sembilan bidang, <span className="italic gradient-text">satu bara.</span>
          </h1>
          <p className="mt-8 text-white/50 text-lg max-w-2xl leading-relaxed">
            Setiap bidang dan biro dirancang untuk saling menguatkan — dari hulu
            pengembangan SDM hingga hilir eksekusi program kerja yang berdampak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {BIDANG_LIST.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bento-card group rounded-3xl p-7"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 group-hover:text-bara-orange group-hover:border-bara-orange/30 group-hover:bg-bara-orange/5 transition-all duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10">
                    {b.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-3">{b.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}