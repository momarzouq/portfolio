import React from "react";

export default function Logo({ className = "" }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="momarzouq home"
    >
      <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-emerald-400 flex items-center justify-center shadow-lg shadow-primary/20">
        <span className="text-primary-foreground font-black text-sm tracking-tight">
          mo
        </span>
      </div>
      <div className="leading-none">
        <div className="font-black text-foreground tracking-tight text-lg">
          mo<span className="text-primary">marzouq</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
          Software Engineer
        </div>
      </div>
    </a>
  );
}
