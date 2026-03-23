<h1 align="center">Community Foundation</h1>
<p align="center"><strong>A modern nonprofit website built with React, TypeScript, and Tailwind CSS</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License" />
</p>

---

## Preview

> Run locally with `npm run dev` to see the full site in action.

---

## Key Features

- 🏠 **Hero Section** — Full-viewport hero with gradient overlays and animated orbs
- 🎯 **About & Mission** — Value pillars with scroll-triggered animations
- 📊 **Impact Stats** — Animated counters for families supported, funds raised, and more
- 📚 **Programs Showcase** — Education Access, Community Health, and Economic Empowerment cards
- 📝 **Contact Form** — Floating-label inputs with client-side validation and toast notifications
- 📱 **Fully Responsive** — Mobile-first design with smooth navigation
- 🎬 **Scroll Animations** — IntersectionObserver-powered reveal effects
- 💎 **Glass Morphism** — Modern card effects and premium hover interactions

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Language | TypeScript 5.5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Components | shadcn/ui (Radix primitives) |
| Routing | React Router DOM 6 |
| Data Fetching | TanStack React Query 5 |
| Forms | React Hook Form + Zod |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

---

## Project Structure

```
src/
  components/
    Header.tsx           # Fixed nav with smooth scrolling
    Hero.tsx             # Full-viewport hero section
    About.tsx            # Mission statement & value pillars
    Stats.tsx            # Animated impact counters
    FeaturedCauses.tsx   # Program cards (Education, Health, Economic)
    ContactForm.tsx      # Validated contact form with floating labels
    Footer.tsx           # Footer with links, contact info, and socials
    ui/                  # shadcn/ui components
  pages/
    Index.tsx            # Home page
  hooks/                 # Custom React hooks
  lib/
    utils.ts             # Utility functions
```

---

## License

[MIT](LICENSE)

---

<div align="center">
  <p>Made with 💛 by Sean G</p>
</div>
