import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2 mb-4", className)}>
      <div className="h-px w-8 bg-brand-500/50" />
      <span className="text-brand-400 text-xs font-mono font-medium tracking-[0.2em] uppercase">
        {children}
      </span>
      <div className="h-px w-8 bg-brand-500/50" />
    </div>
  );
}
