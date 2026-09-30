import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PACKAGES } from "@/lib/constants";

export function PricingSection() {
  return (
    <section id="pricing" className="py-28 section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <SectionLabel>Transparent Pricing</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Honest <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            No upsells, no surprises. Pick the package that fits your needs and we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={cn(
                "relative rounded-2xl p-7 flex flex-col gap-6 transition-all duration-300",
                pkg.highlighted
                  ? "bg-brand-500/10 border-2 border-brand-500/50 shadow-glow-md scale-[1.02]"
                  : "bg-surface-card border border-surface-border hover:border-brand-500/30 hover:shadow-glow-sm"
              )}
            >
              {/* Popular badge */}
              {pkg.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 bg-brand-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-glow-sm">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                  {pkg.name}
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display text-5xl font-black text-white">${pkg.price}</span>
                  <span className="text-slate-500 text-sm mb-1.5">{pkg.unit}</span>
                </div>
                <p className="text-xs text-slate-500">{pkg.description}</p>
              </div>

              {/* Divider */}
              <div className={cn("h-px", pkg.highlighted ? "bg-brand-500/20" : "bg-surface-border")} />

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check
                      className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        pkg.highlighted ? "text-brand-400" : "text-slate-500"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.highlighted ? "primary" : "secondary"}
                size="md"
                className="w-full"
                href="#contact"
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Member promo */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-500">
            Save 20% with a monthly membership.{" "}
            <a href="#contact" className="text-brand-400 hover:underline">
              Ask about our plans →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
