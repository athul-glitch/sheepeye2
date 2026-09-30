import { Droplets, MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-brand-400" />
              </div>
              <span className="font-display font-bold text-lg text-white">{SITE.name}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Premium car care for those who take pride in what they drive. Because your car deserves the best.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {["Express Wash", "Interior Detail", "Full Detail", "Ceramic Coat", "Membership Plans", "Fleet Services"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-500 hover:text-brand-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-brand-500 mt-0.5 shrink-0" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-brand-400 transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-400 transition-colors">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-500">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
