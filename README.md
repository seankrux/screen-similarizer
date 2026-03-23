# Nonprofit Template

**A modern React website template for nonprofit organizations**

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-000000?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

A clean, responsive website template built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. Designed for nonprofits and foundations, featuring a hero section, animated stats counters, featured cause cards, and a validated contact form.

## Features

- Responsive header with smooth-scroll navigation
- Hero section with background image overlay and call-to-action
- Animated stats counters (triggered on scroll via IntersectionObserver)
- Featured cause card grid with hover effects
- Contact form with client-side validation and toast notifications
- Dark mode support via CSS custom properties
- Toast notifications (Radix + Sonner)
- Fully typed with TypeScript

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Language | TypeScript 5.5 |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3.4 |
| Components | shadcn/ui (Radix primitives) |
| Routing | React Router DOM 6 |
| Data Fetching | TanStack React Query 5 |
| Forms | React Hook Form + Zod |

## Project Structure

```
src/
  components/
    Header.tsx           # Fixed navigation with smooth scrolling
    Hero.tsx             # Hero section with background image
    Stats.tsx            # Animated counters with IntersectionObserver
    FeaturedCauses.tsx   # Cause card grid
    ContactForm.tsx      # Validated contact form
    Footer.tsx           # Site footer
    ui/                  # shadcn/ui components
  pages/
    Index.tsx            # Home page
  hooks/                 # Custom React hooks
  lib/
    utils.ts             # Utility functions (cn)
```

## License

MIT

---

Made with 💛 by Sean G
