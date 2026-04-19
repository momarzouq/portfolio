import React from "react";
import { motion } from "framer-motion";
import { Star, Youtube } from "lucide-react";
import SectionLabel from "./SectionLabel";

const TESTIMONIALS = [
  {
    name: "Abdulghani",
    initials: "AB",
    date: "Nov 2025",
    rating: 5,
    body: "جزاك الله كل خير أستاذ محمد على كل ما تقدمه من خبرة لنا و على برنامج بودكاست رائع.",
    platform: "youtube",
  },
  {
    name: "Omar",
    initials: "OM",
    date: "Aug 2024",
    rating: 5,
    body: "أفضل وأقوى دورة وعن تجربة. المحاضر رائع وشرحه علمي وممتع ومفهوم وصراحة أنصح بالدورة للجميع.",
  },
  {
    name: "Ahmed Soliman",
    initials: "AS",
    date: "Jan 2026",
    rating: 5,
    body: "ما شاء الله عليك حضرتك بجد أنا بتعلم منك كتير، واستفدت من تجارب ونصائح حضرتك وكل عام وحضرتك بخير.",
    platform: "youtube",
  },
  {
    name: "Mohamed Fathy",
    initials: "MF",
    date: "Dec 2023",
    rating: 5,
    body: "I don't know what to say — this course is really amazing. Thank you for your effort and great content.",
  },
  {
    name: "Jamal Mohafil",
    initials: "JM",
    date: "May 2025",
    rating: 5,
    body: "مشاركة قيمة والنصائح والمعلومات اللي فيها هتفرق مع أي developer جديد في السوق.",
    platform: "youtube",
  },
  {
    name: "Ahmed",
    initials: "AH",
    date: "Apr 2022",
    rating: 5,
    body: "دورة رائعة ومختصرة لمسيرة كبيرة جداً — شكراً جزيلاً على الشرح الممتاز.",
  },
  {
    name: "Mohammad Sallal",
    initials: "MS",
    date: "Mar 2025",
    rating: 5,
    body: "جزاك الله عني خيراً على كل معلومة قيمة، المحتوى حقيقي غير مسار تفكيري.",
  },
  {
    name: "Mohammed ALJabouri",
    initials: "MA",
    date: "July 2024",
    rating: 5,
    body: "من أفضل المحتويات العربية عن هندسة البرمجيات — أستمر يا بشمهندس.",
  },
];

function TestimonialCard({ t, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
      className="bg-card/60 backdrop-blur border border-border rounded-2xl p-5 hover:border-primary/40 transition-colors h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs">
            {t.initials}
          </div>
          <div>
            <div className="font-semibold text-foreground text-sm">
              {t.name}
            </div>
            <div className="text-xs text-muted-foreground">{t.date}</div>
          </div>
        </div>
        {t.platform === "youtube" && (
          <Youtube className="w-4 h-4 text-red-500/80" />
        )}
      </div>

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, idx) => (
          <Star
            key={idx}
            className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow"
          />
        ))}
      </div>

      <p
        className="text-sm text-muted-foreground leading-relaxed font-arabic text-right line-clamp-5"
        dir="rtl"
      >
        {t.body}
      </p>
    </motion.div>
  );
}

export default function Community() {
  return (
    <section
      id="community"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="absolute inset-0 dots-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-14">
          <SectionLabel>Community</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1]"
          >
            <span className="block text-foreground">Hear from Mohameds</span>
            <span className="block text-primary">community.</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name + i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
