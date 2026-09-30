import { SectionLabel } from "@/components/ui/SectionLabel";
import { StarRating } from "@/components/ui/StarRating";
import { REVIEWS } from "@/lib/constants";

// Duplicate for infinite scroll
const TRACK = [...REVIEWS, ...REVIEWS];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-28 overflow-hidden relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <SectionLabel>Customer Reviews</SectionLabel>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Don&apos;t Take Our Word <span className="text-gradient">For It</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Thousands of satisfied customers across Los Angeles trust us with their vehicles every week.
        </p>
      </div>

      {/* Scrolling track — CSS infinite scroll animation */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

        <div className="flex gap-5 animate-slide-left" style={{ width: "max-content" }}>
          {TRACK.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="w-72 shrink-0 rounded-2xl bg-surface-card border border-surface-border p-5 hover:border-brand-500/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-brand-500/15 border border-brand-500/20 flex items-center justify-center text-sm font-semibold text-brand-300">
                  {review.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{review.name}</div>
                  <div className="text-xs text-slate-600">{review.handle}</div>
                </div>
                <StarRating rating={review.rating} className="ml-auto" />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
