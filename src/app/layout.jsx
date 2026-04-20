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
  title: "Mohamed Marzouq - Full-Stack Engineer, Mentor & Content Creator",
  description:
    "Full-stack software engineer specializing in system design, AI automation, and mentoring Arab developers. Learn from interviews to shipping production-grade applications.",
  authors: [{ name: "Mohamed Marzouq", url: "https://momarzouq.com" }],
  keywords: [
    "software engineer",
    "full-stack developer",
    "mentor",
    "react",
    "nodejs",
    "system design",
    "AI automation",
    "arab developers",
    "tech content creator",
    "coding tutorials",
    "career growth",
  ],
  creator: "Mohamed Marzouq",
  publisher: "Mohamed Marzouq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mohamed Marzouq - Full-Stack Engineer & Content Creator",
    description:
      "Full-stack engineer helping Arab developers level up through code, coaching, and content.",
    type: "website",
    url: "https://momarzouq.com",
    siteName: "Mohamed Marzouq Portfolio",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    images: [
      {
        url: "https://momarzouq.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Marzouq - Software Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Marzouq - Full-Stack Engineer",
    description: "Full-stack engineer helping Arab developers level up.",
    creator: "@momarzouq",
    images: ["https://momarzouq.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased ${locale === "ar" ? "font-cairo" : ""}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://momarzouq.com" />
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
