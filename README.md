<div align="center">
  <h1>Giveback — Community Foundation</h1>
  <p><strong>A modern nonprofit platform built to inspire action, showcase impact, and connect communities with causes that matter.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 18" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 5" />
    <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
  </p>

  <br />
  <a href="https://giveback.vercel.app"><strong>View Live Site →</strong></a>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#getting-started"><strong>Run Locally →</strong></a>
</div>

---

## Overview

**Giveback** is a fully responsive, single-page nonprofit website designed to communicate mission, build donor trust, and drive community engagement. It features scroll-driven animations, glass morphism design, animated impact statistics, and a validated contact form — all delivered at blazing speed via Vite and deployed globally on Vercel.

Whether you're building a foundation's web presence or adapting this for your own cause, Giveback provides a polished, production-ready starting point.

---

## Screenshots

> _Screenshots coming soon. Visit [giveback.vercel.app](https://giveback.vercel.app) to see the live site._

<!-- Add screenshots below once captured -->
<!-- ![Hero Section](./docs/screenshots/hero.png) -->
<!-- ![Impact Stats](./docs/screenshots/stats.png) -->
<!-- ![Programs](./docs/screenshots/programs.png) -->

---

## Features

- **Hero Section** — Full-viewport layout with gradient overlays and animated ambient orbs that draw visitors in immediately
- **Animated Impact Statistics** — Scroll-triggered counters showcasing families supported, funds raised, and community reach
- **Program Showcase** — Dedicated cards for Education Access, Community Health, and Economic Empowerment initiatives
- **Contact Form** — Floating-label inputs with client-side validation (React Hook Form + Zod) and toast notifications
- **Scroll Animations** — IntersectionObserver-powered reveal effects applied throughout the page for a premium feel
- **Glass Morphism UI** — Modern frosted-glass card effects with smooth hover interactions
- **Fully Responsive** — Mobile-first layout with fluid typography and seamless section navigation
- **Accessible Components** — Built on Radix UI primitives for keyboard navigation and screen reader support

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5.5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Components | shadcn/ui (Radix UI primitives) |
| Routing | React Router DOM 6 |
| Data Fetching | TanStack React Query 5 |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Notifications | Sonner |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm, pnpm, or bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/giveback.git
cd giveback

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
  components/
    Header.tsx           # Fixed navigation with smooth scroll links
    Hero.tsx             # Full-viewport hero with animated orbs
    About.tsx            # Mission statement and value pillars
    Stats.tsx            # Animated impact counters
    FeaturedCauses.tsx   # Program showcase cards
    ContactForm.tsx      # Validated contact form with toast feedback
    Footer.tsx           # Footer with links and social icons
    ui/                  # shadcn/ui base components
  pages/
    Index.tsx            # Home page (single-page layout)
  hooks/                 # Custom React hooks
  lib/
    utils.ts             # Shared utility functions
```

---

## Deployment

This project is deployed on **[Vercel](https://vercel.com)** and available at [giveback.vercel.app](https://giveback.vercel.app).

### Deploy Your Own

1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new) and import your fork
3. Vercel will auto-detect Vite and configure the build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy** — your site will be live in under a minute

Every push to `main` triggers an automatic redeployment via Vercel's Git integration.

---

## Contributing

Contributions, ideas, and feedback are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please keep PRs focused and ensure code passes linting before submitting.

---

---

<p align="center">Made with 💛 by <a href="https://www.seanguillermo.com"><strong>Sean G</strong></a></p>
