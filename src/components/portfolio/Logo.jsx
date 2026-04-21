import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="momarzouq home"
    >
      <div className="leading-none">
        <div className="font-black text-foreground tracking-tight text-xl">
          Mohamed <span className="text-primary">Marzouq</span>
        </div>
        {/* <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-0.5">
          Software Engineer
        </div> */}
      </div>
    </Link>
  );
}
