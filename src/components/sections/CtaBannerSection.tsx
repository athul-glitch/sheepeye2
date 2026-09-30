import { ArrowRight, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CtaBannerSection() {
  return (
    <section className="py-20 section-padding relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-surface-card border border-brand-500/20 p-10 sm:p-14 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-900/30 via-transparent to-brand-800/10 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-600/10 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mx-auto mb-6">
              <Droplets className="w-7 h-7 text-brand-400" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              Your Car Is <span className="text-gradient">Waiting</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-8">
              Join thousands of Los Angeles drivers who trust Aqua Luxe to keep their vehicles looking showroom-perfect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#pricing">
                Book Your Detail
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" href={`tel:+13105550192`}>
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
