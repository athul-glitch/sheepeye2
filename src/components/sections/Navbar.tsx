"use client";

import { useState, useEffect } from "react";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-carbon-950/95 backdrop-blur-md border-b border-gold-500/20 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <span className="w-8 h-8 bg-gold-500 flex items-center justify-center font-display font-bold text-carbon-950 text-sm clip-corner">
            A
          </span>
          <span className="font-display font-bold text-lg tracking-wider text-carbon-50 group-hover:text-gold-500 transition-colors">
            {SITE.name}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-wider text-carbon-300 hover:text-gold-500 transition-colors uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15550102030" className="font-mono text-xs text-carbon-400 hover:text-gold-500 transition-colors">
            {SITE.phone}
          </a>
          <a href="#pricing" className="btn-gold text-xs py-2.5 px-5">
            Book Now
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-6 bg-carbon-50 transition-transform duration-300 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block h-px w-6 bg-carbon-50 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-carbon-50 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-carbon-950/98 border-t border-gold-500/20 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4 mb-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-sm tracking-wider text-carbon-300 hover:text-gold-500 transition-colors uppercase py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#pricing" className="btn-gold w-full justify-center">
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
