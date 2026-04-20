"use client";

import { useState } from "react";
import { Play, Youtube } from "lucide-react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Videos() {
  const t = useTranslations("videos");

  const CATEGORY_NAMES = {
    all: t("allCategories"),
    tutorials: "Tutorials",
    dsa: "DSA",
    career: "Career",
    opinions: "Opinions",
  };

  const CATEGORIES = [
    { key: "all", label: CATEGORY_NAMES.all },
    { key: "tutorials", label: CATEGORY_NAMES.tutorials },
    { key: "dsa", label: CATEGORY_NAMES.dsa },
    { key: "career", label: CATEGORY_NAMES.career },
    { key: "opinions", label: CATEGORY_NAMES.opinions },
  ];

  const VIDEOS = [
    {
      title: "لماذا البرمجة في 2026",
      category: "opinions",
      thumb: "/momarzouq.jpg",
      link: "https://www.youtube.com/@momarzouq",
    },
    {
      title: "المقابلات التقنية — دليلك الكامل",
      category: "career",
      thumb: "/momarzouq.jpg",
      link: "https://www.youtube.com/@momarzouq",
    },
    {
      title: "تعلم البرمجة من الصفر",
      category: "tutorials",
      thumb: "/momarzouq.jpg",
      link: "https://www.youtube.com/@momarzouq",
    },
    {
      title: "Data Structures & Algorithms",
      category: "dsa",
      thumb: "/momarzouq.jpg",
      link: "https://www.youtube.com/@momarzouq",
    },
  ];

  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? VIDEOS : VIDEOS.filter((v) => v.category === active);

  return (
    <section
      id="videos"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-10">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1]">
            <span className="block text-foreground">{t("title")}</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg">
            From DSA deep-dives to career advice and honest opinions — all in
            Arabic.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((video, i) => (
            <Link
              key={video.title}
              href={video.link}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                  width={400}
                  height={225}
                  src={video.thumb}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
