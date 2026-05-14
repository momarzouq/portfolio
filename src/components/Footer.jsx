import Logo from "./Logo";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-0 md:mx-10 px-6 lg:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} @momarzouq · {t("copyright")}
        </p>
      </div>

      {/* Hidden SEO block — all name variants indexed, visually hidden but crawlable */}
      <div className="sr-only" aria-hidden="false">
        <h2>Mohamed Marzouq — محمد مرزوق — Software Engineer Portfolio</h2>
        <p>
          Mohamed Marzouq, محمد مرزوق, Mohamed Marzok, Mohamed Marzouk, محمد أبو
          مرزوق, Abo Marzouq, abo marzouq, أبو مرزوق, ابو مرزوق, مهندس محمد
          مرزوق, momarzouq — Software Engineer, mentor and content creator.
          Portfolio, projects, videos and community for Arab developers.
        </p>
      </div>
    </footer>
  );
}
