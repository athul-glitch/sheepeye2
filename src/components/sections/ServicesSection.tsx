import { Zap, Wind, Sparkles, Shield, ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, LucideIcon> = { Zap, Wind, Sparkles, Shield };

const BADGE_VARIANT: Record<string, "default" | "accent" | "outline"> = {
  Popular: "default",
  "Best Value": "accent",
  Premium: "accent",
};

// Stunning Unsplash photos for each service
const SERVICE_IMAGES: Record<string, string> = {
  express:
    "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&q=80",
  interior:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  full:
    "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80",
  ceramic:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
};

export function ServicesSection() {
  return (
    <section id="services" className="py-28 section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Every Car Deserves<br />
            <span className="text-gradient">Expert Care</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From a quick exterior rinse to a full concours-level detail — we have the right service for every vehicle and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div
                key={service.id}
                className={cn(
                  "group relative rounded-2xl overflow-hidden border border-surface-border",
                  "hover:border-brand-500/40 hover:shadow-glow-sm transition-all duration-300",
                  "flex flex-col min-h-[340px]"
                )}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Background photo */}
                <div className="absolute inset-0">
                  <img
                    src={SERVICE_IMAGES[service.id]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                </div>

                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant={BADGE_VARIANT[service.badge] ?? "default"}>
                      {service.badge}
                    </Badge>
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-4 p-6 mt-auto">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center group-hover:bg-brand-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-brand-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 mb-2">{service.duration}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* CTA hint */}
                  <div className="flex items-center gap-1 text-xs text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
