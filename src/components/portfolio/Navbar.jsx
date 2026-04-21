"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import Logo from "./Logo";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const NAV_LINKS = [
    { label: t("about"), href: `/#about` },
    { label: t("work"), href: `/#skills` },
    { label: t("videos"), href: `/#videos` },
    { label: t("community"), href: `/#community` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLanguage = (newLocale) => {
    router.replace(`/${newLocale}${pathname}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-0 md:mx-10 px-6 lg:px-6 h-20 flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className=" text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-2 items-center justify-center transition-colors"
          >
            {t("contact")}
          </Link>

          <div className="hidden sm:flex items-center bg-secondary/60 border border-border rounded-full p-1.5">
            {["en", "ar"].map((l) => (
              <button
                key={l}
                onClick={() => switchLanguage(l)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  locale === l
                    ? "bg-background text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-primary font-semibold py-2"
            >
              {t("consultation")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
