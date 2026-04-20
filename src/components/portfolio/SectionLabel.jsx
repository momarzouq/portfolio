export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="h-px w-8 bg-primary" />
      <span className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
        {children}
      </span>
    </div>
  );
}
