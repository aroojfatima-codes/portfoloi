# Arooj Fatima — Portfolio

A dark-themed personal portfolio website for Arooj Fatima, a Computer Science student and aspiring Software Engineer.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **shadcn/ui** (UI components)
- **React Hook Form** + **Zod** (contact form)
- **React Icons** (skill icons)
- **Wouter** (routing)

## Sections

- Hero — animated title, floating tags, spinning rings
- About — bio, education card
- Skills — tabbed grid filter by category
- Projects — 6 project cards with gradient thumbnails
- Journey — alternating timeline
- Certifications
- Resume — download / view CV
- Contact — validated contact form

## Getting Started

### Prerequisites

- **Node.js 18+** — https://nodejs.org
- **npm** (comes with Node.js) or **pnpm** / **yarn**

### Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

The site opens at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

Output goes to `dist/`. You can serve it with:

```bash
npm run preview
```

## Adding Your Resume

Place your PDF at `public/AroojFatimaCV.pdf`. The "Download CV" button will automatically serve it for download.

## Customisation

| What to change | File |
|---|---|
| Name, bio, social links | `src/components/Hero.tsx`, `src/components/About.tsx` |
| Skills list | `src/components/Skills.tsx` |
| Projects | `src/components/Projects.tsx` |
| Timeline milestones | `src/components/Journey.tsx` |
| Colours / fonts | `src/index.css` (CSS variables at `:root`) |

## Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#04040e` | Page background |
| `--cyan` | `#00e5ff` | Primary accent |
| `--purple` | `#8b5cf6` | Secondary accent |
| `--orange` | `#ff6b22` | CTA buttons |
| `--txt` | `#f0f0ff` | Primary text |
