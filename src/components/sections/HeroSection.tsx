import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const TRUST_ITEMS = ["No hidden fees", "Same-day appointments", "Eco-friendly products"];

export  function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background layers */}
      <div className="absolute inset-0 bg-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 bg-neutral-900 border border-neutral-800">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-neutral-300 tracking-wider uppercase">
            Now Open 7 Days • 7 AM - 9 PM
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6 text-white">
          <span>SheepEye.</span>
          <br />
          <span className="text-emerald-400">Car Wash.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed">
          Premium car wash & detailing. Where precision meets passion — and your car gets the treatment it deserves.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="px-8 py-4 rounded-xl font-medium bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 w-full sm:w-auto transition-colors">
            Book Your Wash <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 rounded-xl font-medium border border-neutral-800 text-white hover:bg-neutral-900 flex items-center justify-center gap-2 w-full sm:w-auto transition-colors">
            <Play className="w-4 h-4 fill-current" /> See Our Services
          </button>
        </div>

        {/* Trust features */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-neutral-400">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
