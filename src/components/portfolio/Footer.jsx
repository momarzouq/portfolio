import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Mohamed Marzouq · محمد مرزوق · All rights
          reserved.
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
