import SectionLabel from "./SectionLabel";
import { getTranslations } from "next-intl/server";

export default async function About() {
  const t = await getTranslations("about");

  const STATS = [
    {
      value: t("stats.build"),
      label: t("stats.products"),
      color: "text-primary",
    },
    {
      value: t("stats.mentor"),
      label: t("stats.developers"),
      color: "text-primary",
    },
    {
      value: t("stats.teach"),
      label: t("stats.content"),
      color: "text-brand-yellow font-cairo",
    },
    {
      value: t("stats.manage"),
      label: t("stats.systems"),
      color: "text-foreground",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionLabel>{t("label")}</SectionLabel>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1] mb-6">
            <span className="block text-foreground">{t("title1")}</span>
            <span className="block text-brand-yellow">{t("title2")}</span>
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed max-w-lg">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-colors group overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className={`relative text-4xl sm:text-5xl font-black tracking-tight ${stat.color}`}
              >
                {stat.value}
              </div>
              <div className="relative mt-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
