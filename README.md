# Global Solutions for Training and Education

A modern, multilingual marketing website for **Global Solutions for Training and Education** — showcasing ATHE-accredited qualifications, programs, testimonials, and a registration form. Built with Next.js 13, TypeScript, and full Arabic/English support with RTL.

![Next.js](https://img.shields.io/badge/Next.js-13-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=flat-square&logo=tailwind-css)

---

## Features

- **Multilingual (i18n)** — Arabic and English with [next-intl](https://next-intl-docs.vercel.app/)
- **RTL support** — Automatic direction and layout for Arabic
- **Responsive UI** — Mobile-first layout with Tailwind CSS
- **Sections** — Header, About Us, Qualifications/Education, Advantages/Services, Testimonials, Requirements, Registration Form
- **Registration form** — React Hook Form + EmailJS for submissions and toast notifications
- **Animations** — Framer Motion and Swiper for carousels and scroll effects
- **SEO** — Metadata, sitemap, robots.txt, and canonical/alternate language URLs
- **Dynamic loading** — Key sections loaded with `next/dynamic` for better performance

---

## Tech Stack

| Category      | Technologies |
|---------------|--------------|
| Framework     | Next.js 13 (App Router) |
| Language      | TypeScript, JavaScript |
| Styling       | Tailwind CSS, PostCSS |
| i18n          | next-intl |
| Forms         | react-hook-form, @emailjs/browser |
| UI / Motion   | Framer Motion, Swiper, Radix UI (Dialog), Heroicons |
| Feedback      | react-toastify |
| Utilities     | react-scroll, react-countup, rtl-detect |

---

## Project Structure

```
golabel-translate/
├── app/
│   ├── [locale]/           # Locale-based routes (/ar, /en)
│   │   ├── layout.tsx      # Root layout (NavBar, Footer, Toast)
│   │   ├── page.tsx        # Home page sections
│   │   └── not-found.tsx
│   ├── globals.css
│   ├── icon.tsx
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap.xml
├── components/
│   ├── custom/             # Shared components & hooks
│   │   ├── component/      # TopHead, CustomButton, MyScrollToTop, etc.
│   │   └── hooks/          # useScroll, useTextDirection
│   ├── mainLayout/
│   │   ├── footer/
│   │   └── navbar/
│   └── mainSections/       # Header, AboutUs, Education, Servcies, Testomoinal, Requests, RegesterForm
├── messages/               # i18n JSON (ar.json, en.json)
├── providers/              # ToastClinte
├── public/                 # Static assets, images, video
├── i18n.ts                 # next-intl config
└── middleware.ts           # Locale routing (default: ar)
```

---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm**, **yarn**, or **pnpm**

---

## Getting Started

### 1. Clone and install

```bash
git clone https://github.com/your-username/golabel-translate.git
cd golabel-translate
npm install
```

### 2. Run in development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The default locale is **Arabic** (`/ar`). Use `/en` for English.

### 3. Build and run in production

```bash
npm run build
npm start
```

---

## Available Scripts

| Command       | Description |
|---------------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start`   | Start production server |
| `npm run lint` | Run ESLint |

---

## Configuration

### EmailJS (Registration form)

The registration form uses [EmailJS](https://www.emailjs.com/). Configure your EmailJS service and template, then set your keys (e.g. in environment variables or in the form component) so submissions are sent to your inbox.

### Locales and default language

- Supported locales: `ar`, `en`
- Default locale: `ar` (see `middleware.ts`)
- Translation files: `messages/ar.json`, `messages/en.json`

### Sitemap and robots

- Update `app/sitemap.ts` and `app/robots.ts` with your production base URL (replace `http://localhost:3000`).

---

## Deployment

The app can be deployed to [Vercel](https://vercel.com) (recommended for Next.js), Netlify, or any Node-compatible host.

1. Connect your GitHub repository to the platform.
2. Set build command: `npm run build`
3. Set output directory: `.next` (or use the platform’s Next.js preset).
4. Optionally set environment variables for EmailJS or other services.

---

## License

This project is private. All rights reserved.

---

## Author

**Muhammad Samir** — *Global Solutions for Training and Education*
