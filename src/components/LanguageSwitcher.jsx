"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale) => {
    // Replace the locale segment in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/");
    router.push(newPathname);
  };

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
