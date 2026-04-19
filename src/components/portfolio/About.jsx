import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const STATS = [
  { value: "8+", label: "Years Engineering", color: "text-primary" },
  { value: "10K+", label: "Developers Reached", color: "text-primary" },
  {
    value: "عربي",
    label: "Content Language",
    color: "text-brand-yellow font-arabic",
  },
  { value: "FAANG", label: "Level Experience", color: "text-foreground" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>About</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1] mb-6"
          >
            <span className="block text-foreground">Building things.</span>
            <span className="block text-brand-yellow">Giving back.</span>
          </motion.h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-lg">
            <p>
              Im
              <span className="text-foreground font-semibold">
                Mohamed Marzouq
              </span>
              (<span className="font-arabic">محمد مرزوق</span>) — a software
              engineer with a deep love for clean code and craft. I build
              products, mentor engineers and create Arabic tech content that
              makes complex engineering accessible.
            </p>
            <p>
              Through coaching, tutorials and honest conversations about the
              tech industry, I help developers across the Arab world land jobs
              at top companies and navigate their careers with confidence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-colors group overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className={`relative text-4xl sm:text-5xl font-black tracking-tight ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="relative mt-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
