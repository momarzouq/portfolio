"use client";

import { ArrowRight, Youtube, Linkedin, Instagram, Github } from "lucide-react";
import { Button } from "@/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  const SOCIALS = [
    {
      label: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@momarzouq",
      color: "hover:text-red-500 hover:border-red-500/40",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/momarzouq/",
      color: "hover:text-blue-500 hover:border-blue-500/40",
    },
    {
      label: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/momarzouq/",
      color: "hover:text-pink-500 hover:border-pink-500/40",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/momarzouq",
      color: "hover:text-gray-300 hover:border-gray-300/40",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 sm:py-40 border-t border-border/60 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1]">
          <span className="block text-foreground">{t("title1")}</span>
          <span className="block text-primary">{t("title2")}</span>
        </h2>

        <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        <div className="mt-10">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base shadow-xl shadow-primary/30"
          >
            <Link
              href="mailto:hello@momarzouq.com"
              className="inline-flex items-center gap-2"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.label}
                href={s.href}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-semibold text-muted-foreground transition-colors ${s.color}`}
              >
                <Icon className="w-4 h-4" />
                {s.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
