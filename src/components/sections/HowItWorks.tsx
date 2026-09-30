import { STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-carbon-900 py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="section-label mb-4">The Process</p>
            <h2 className="font-display text-5xl md:text-6xl font-black text-carbon-50">
              Simple by Design.
              <br />
              <span className="text-shimmer italic">Flawless in Execution.</span>
            </h2>
          </div>
          <p className="font-body text-carbon-400 text-sm max-w-sm leading-relaxed">
            We built our process around your time — fast booking, transparent communication, and exceptional results.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-0" />

          {STEPS.map((step, i) => (
            <div key={step.step} className="relative z-10">
              {/* Number bubble */}
              <div className="w-16 h-16 border border-gold-500/40 flex items-center justify-center mb-6 bg-carbon-950 group hover:bg-gold-500 transition-colors duration-300 cursor-default"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                <span className="font-mono text-sm font-bold text-gold-500 group-hover:text-carbon-950 transition-colors">
                  {step.step}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-carbon-50 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-carbon-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
