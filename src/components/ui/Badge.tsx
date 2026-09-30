import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
        variant === "default" && "bg-brand-500/15 text-brand-300 border border-brand-500/20",
        variant === "accent"  && "bg-accent/15 text-accent-light border border-accent/20",
        variant === "outline" && "border border-surface-border text-slate-400",
        className
      )}
    >
      {children}
    </span>
  );
}
