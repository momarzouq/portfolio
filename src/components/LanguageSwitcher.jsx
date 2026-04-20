"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    if (savedLocale) setLocale(savedLocale);
    setMounted(true);
  }, []);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    window.location.reload();
  };

  if (!mounted) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/40 bg-card/30 backdrop-blur">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <select
        value={locale}
        onChange={(e) => switchLanguage(e.target.value)}
        className="bg-transparent text-sm font-medium cursor-pointer outline-none"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
}
