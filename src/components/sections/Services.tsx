import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-carbon-950 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">What We Offer</p>
          <h2 className="font-display text-5xl md:text-6xl font-black text-carbon-50">
            Every Service,
            <br />
            <span className="text-shimmer italic">Perfected.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-carbon-700">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              className="glass bg-carbon-900 p-8 group hover:bg-carbon-800 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="text-4xl mb-5">{service.icon}</div>

              <h3 className="font-display text-xl font-bold text-carbon-50 mb-3 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>

              <p className="font-body text-sm text-carbon-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gold-500 uppercase tracking-widest">
                  {service.duration}
                </span>
                <svg
                  className="w-4 h-4 text-carbon-600 group-hover:text-gold-500 group-hover:translate-x-1 transition-all duration-200"
                  viewBox="0 0 16 16" fill="none"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Hover accent */}
              <div className="h-px bg-gold-500 mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
