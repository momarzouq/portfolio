import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import "./globals.css";
import { JsonLdScripts } from "@/components/JsonLdScripts";
import DotGrid from "@/components/DotGrid";

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
  title: "Mohamed Marzouq | Full-Stack Engineer",
  description:
    "Full-stack software engineer specializing in system design, AI automation, and mentoring Arab developers. Learn from interviews to shipping production-grade applications.",

  authors: [{ name: "Mohamed Marzouq", url: "https://momarzouq.vercel.app" }],

  creator: "Mohamed Marzouq",
  publisher: "Mohamed Marzouq",

  openGraph: {
    title: "Mohamed Marzouq | Full-Stack Engineer",
    description:
      "Full-stack engineer helping Arab developers level up through code, coaching, and content.",
    type: "website",
    url: "https://momarzouq.vercel.app",
    siteName: "Mohamed Marzouq Portfolio",
    images: [
      {
        url: "https://momarzouq.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Marzouq - Software Engineer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohamed Marzouq | Full-Stack Engineer",
    description: "Full-stack engineer helping Arab developers level up.",
    creator: "@momarzouq",
    images: ["https://momarzouq.vercel.app/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "-I6hSFR-6xi8hpif9y82fbVa-r2LcO2EuvE7XlwL1YA",
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased ${
        locale === "ar" ? "font-cairo" : ""
      }`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://momarzouq.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a2e" />

        <JsonLdScripts />
      </head>

      <body className="min-h-full flex flex-col relative">
        <NextIntlClientProvider>
          <DotGrid />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
