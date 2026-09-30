import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="bg-carbon-800 border-b border-carbon-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-carbon-700">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="py-10 px-8 text-center group hover:bg-carbon-700/50 transition-colors duration-300"
            >
              <p className="font-display text-4xl md:text-5xl font-black text-gold-500 mb-1 group-hover:text-shimmer transition-all">
                {stat.value}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-carbon-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
