import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import SectionLabel from "./SectionLabel";

const CATEGORIES = ["All", "Tutorials", "DSA", "Career", "Opinions"];

const VIDEOS = [
  {
    title: "لماذا البرمجة في 2026",
    category: "Opinions",
    thumb:
      "https://media.base44.com/images/public/69e55523a14d1d322b141bdb/70068fb09_generated_123e8f60.png",
  },
  {
    title: "المقابلات التقنية — دليلك الكامل",
    category: "Career",
    thumb:
      "https://media.base44.com/images/public/69e55523a14d1d322b141bdb/4ce6adc81_generated_6da9534a.png",
  },
  {
    title: "تعلم البرمجة من الصفر",
    category: "Tutorials",
    thumb:
      "https://media.base44.com/images/public/69e55523a14d1d322b141bdb/f16758b14_generated_d8fff99d.png",
  },
  {
    title: "Data Structures & Algorithms",
    category: "DSA",
    thumb:
      "https://media.base44.com/images/public/69e55523a14d1d322b141bdb/e0878fa88_generated_ea28cdf8.png",
  },
];

export default function Videos() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === active);

  return (
    <section
      id="videos"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <SectionLabel>YouTube</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1]"
          >
            <span className="block text-foreground">Content for the</span>
            <span className="block text-brand-yellow">
              Arab tech community.
            </span>
          </motion.h2>
          <p className="mt-6 text-muted-foreground max-w-lg">
            From DSA deep-dives to career advice and honest opinions — all in
            Arabic.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((video, i) => (
            <motion.a
              key={video.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <img
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3
                  className="font-arabic text-base font-bold text-foreground leading-snug line-clamp-2 text-right"
                  dir="rtl"
                >
                  {video.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Youtube className="w-3.5 h-3.5 text-red-500" />
                  YouTube
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
