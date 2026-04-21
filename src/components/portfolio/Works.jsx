import { Code2, Layers, Sparkles, GitBranch } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { getTranslations } from "next-intl/server";

export default async function Work() {
  const t = await getTranslations("work");

  const SKILLS = [
    {
      icon: Code2,
      title: t("fullStack"),
      desc: t("fullStackDesc"),
    },
    {
      icon: Layers,
      title: t("systemDesign"),
      desc: t("systemDesignDesc"),
    },
    {
      icon: Sparkles,
      title: t("ai"),
      desc: t("aiDesc"),
    },
    {
      icon: GitBranch,
      title: t("mentorship"),
      desc: t("mentorshipDesc"),
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1]">
            <span className="text-foreground">{t("title1")}</span>{" "}
            <span className="text-primary">{t("title2")}</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:-translate-y-1 duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
