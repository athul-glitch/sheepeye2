import { SITE } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-carbon-950 pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-carbon-950 via-carbon-900 to-carbon-950" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center w-full">

        {/* Label */}
        <p className="section-label mb-6 animate-fade-up font-sans text-[#00b31e] text-sm tracking-widest uppercase">
          Premium Auto Spa
        </p>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.1] mb-8 animate-fade-up delay-100 flex flex-col items-center">
          <span className="text-white">SheepEye.</span>
          <span className="text-[#00b31e] tracking-tight font-display">
            Car Wash.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="font-body text-carbon-300 text-base md:text-lg max-w-xl leading-relaxed mb-10 animate-fade-up delay-200">
          Premium car wash & detailing. Where precision meets passion — and
          your car gets the treatment it deserves.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300 justify-center items-center w-full max-w-md">
          <Link
            href="#services"
            className="px-8 py-4 border border-carbon-700 hover:border-[#0ea5e9] text-white hover:text-[#0ea5e9] font-medium rounded-md flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>▶</span> See Our Services
          </Link>
        </div>

      </div>
    </section>
  );
}