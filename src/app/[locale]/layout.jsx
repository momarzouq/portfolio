import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono, Cairo } from "next/font/google";

import DotGrid from "@/components/DotGrid";
import { JsonLdScripts } from "@/components/JsonLdScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Mohamed Marzouq | محمد مرزوق",
  description:
    "Helping developers improve their technical skills through content, mentoring, and courses",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  setRequestLocale(locale);

  const messages = await getMessages();

  const isArabic = locale === "ar";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${cairo.variable}
        min-h-screen
        antialiased
        ${isArabic ? "font-cairo" : ""}
      `}
      suppressHydrationWarning
    >
      <JsonLdScripts />

      <NextIntlClientProvider messages={messages}>
        <DotGrid />
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
