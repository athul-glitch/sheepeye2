import { SectionLabel } from "@/components/ui/SectionLabel";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute inset-0 bg-surface-card/30" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Effortless From <span className="text-gradient">Start to Shine</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            We've made the whole experience as smooth as your freshly polished hood.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className="relative text-center group">
                {/* Step circle */}
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-brand-500/10 border border-brand-500/20 group-hover:bg-brand-500/15 group-hover:border-brand-500/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-3xl font-black text-gradient opacity-80">
                      {item.step}
                    </span>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-brand-500/10 scale-110 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>

                {/* Arrow (mobile) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2 text-surface-border">
                    <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
