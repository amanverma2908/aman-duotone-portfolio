# Aman Verma Portfolio

A minimalist duotone portfolio built with React, Vite, Tailwind CSS, GSAP, and Motion. It presents a full-stack developer profile through animated sections, a project gallery, Medium-powered blog card[...]

## Features

- Responsive single-page portfolio layout
- Hero section with animated grid lines, portrait treatment, and scroll parallax
- About, skills, experience, selected works, blog, contact, and footer sections
- Project gallery with animated cards and modal detail views
- Medium RSS integration through `rss2json`
- Light/dark theme toggle with transition overlay
- Scroll-aware glassmorphism navbar
- Custom cursor experience on desktop
- Local static image support through the `public` directory

## Tech Stack

- React 19
- Vite 6
- TypeScript
- Tailwind CSS 4
- GSAP and `@gsap/react`
- Motion for React transitions
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

The app runs on:

```text
http://localhost:3000
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Check

```bash
npm run lint
```

## Project Structure

```text
src/
├── App.tsx
├── main.tsx
├── index.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Gallery.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── CustomCursor.tsx
│       └── ScrollToTop.tsx
├── context/
│   └── ThemeContext.tsx
└── lib/
    └── utils.ts
public/
├── aman-portrait.png
└── images/
    ├── project1-main.png
    ├── project1-info.png
    └── project2-main.png
```

## Customization

- Update hero content and portrait in `src/components/sections/Hero.tsx`.
- Replace `public/aman-portrait.png` with your portrait asset.
- Edit project data in `src/components/sections/Gallery.tsx`.
- Add project images to `public/images/` and reference them as `/images/file-name.png`.
- Update Medium username in `src/components/sections/Blog.tsx`.
- Update email and social links in `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`.
- Adjust theme colors and fonts in `src/index.css`.
- Tune navbar behavior in `src/components/layout/Header.tsx`.

## Current Projects

The gallery currently highlights:

- Codebase IDE: full-stack online coding platform using React, Monaco Editor, Express, MongoDB, and the Piston API.
- Tic Tac Toe: browser game built with HTML, CSS, JavaScript, and hosted on GitHub Pages.

## Deployment

This project builds to static assets with Vite, so it can be deployed to platforms like Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

For Vercel or Netlify, use:

```text
Build command: npm run build
Output directory: dist
```

## Contact

- Email: amanverma.works@gmail.com
- GitHub: https://github.com/amanverma2908
- LinkedIn: https://linkedin.com/in/midnightcoder
- Twitter: https://twitter.com/midnightcoder
- Medium: https://medium.com/@midnightcoder
