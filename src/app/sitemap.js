import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://momarzouq.com";

  const locales = ["en", "ar"];

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
