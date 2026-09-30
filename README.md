# Aqua Luxe — Car Wash Website

A modern, production-ready car wash website built with **Next.js 14**, **React 18**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Home page (assembles sections)
│   └── globals.css         # Global styles, CSS variables, animations
│
├── components/
│   ├── ui/                 # ← Drop Skiper UI components here
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   └── StarRating.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ServicesSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── PricingSection.tsx
│       ├── ReviewsSection.tsx
│       ├── ContactSection.tsx
│       └── CtaBannerSection.tsx
│
└── lib/
    ├── constants.ts        # All site data (services, packages, reviews…)
    └── utils.ts            # cn() helper — Skiper UI compatible
```

## Adding Skiper UI

1. Install Skiper UI per their docs
2. Replace or wrap components in `src/components/ui/`
3. The `cn()` utility in `src/lib/utils.ts` already uses `clsx` + `tailwind-merge` — fully compatible

## Customising Content

All text, prices, and data live in `src/lib/constants.ts`. No need to touch the component files for content updates.

## Design Tokens

Design tokens are defined in `tailwind.config.ts` under `theme.extend`:
- `colors.brand` — primary blue palette
- `colors.accent` — gold/amber accent
- `colors.surface` — dark background layers
- Custom animations: `fade-up`, `float`, `shimmer`, `slide-left`
- Custom shadows: `glow-sm`, `glow-md`, `glow-lg`
