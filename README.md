# Sunny Saini — Developer Portfolio

A responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**. It showcases my projects, skills, academic journey, and contact information in a minimal **Forest Noir** design.

<p align="center">
  <a href="https://sunnysaini-portfolio-git-main-sunny-264f.vercel.app/">🌐 Live Portfolio</a> ·
  <a href="https://github.com/sunnysaini2004/sunnysainiPortfolio">💻 GitHub Repository</a>
</p>

## Overview

The portfolio uses reusable React components and responsive layouts for mobile, tablet, and desktop. Its Forest Noir palette combines deep greens, charcoal black, muted sage-grey, and warm ivory, with compact typography and restrained spacing.

## Features

- Responsive layout for mobile and desktop
- Forest Noir theme with reusable CSS variables
- Modular React components for each portfolio section
- Active navigation highlighting while scrolling
- Profile card with social links
- Project cards with screenshots, technology tags, live demos, and source repositories
- Skills grouped by category
- Academic background and development journey
- EmailJS-powered contact form with loading, success, and error feedback
- Minimal footer with developer credit and dynamic copyright year

## Tech Stack

- **React** — component-based user interface
- **Vite** — development server and production build
- **Tailwind CSS v4** — utility-first responsive styling
- **JavaScript (ES6+)** — application logic
- **EmailJS** — contact form email delivery
- **Git and GitHub** — version control and source hosting
- **Vercel** — deployment

## Featured Projects

| Project | Description | Live Demo | Source Code |
|---|---|---|---|
| **CineScope** | Movie discovery app to search films, view details, and manage a personal watchlist. | [Open app](https://cine-scope-jet.vercel.app/) | [GitHub](https://github.com/sunnysaini2004/cine-Scope) |
| **NotesWebApp** | Notes app for creating and managing notes with browser storage. | [Open app](https://sunnysaini2004.github.io/NotesWebApp/) | [GitHub](https://github.com/sunnysaini2004/NotesWebApp) |
| **Weather WebApp** | Responsive weather app to search for a city and view current weather information. | [Open app](https://sunnysaini2004.github.io/weather-WebApp/) | [GitHub](https://github.com/sunnysaini2004/weather-WebApp) |

## Portfolio Sections

- **Home** — introduction, profile card, and social links
- **About** — principles and approach to building software
- **Projects** — selected projects with screenshots and links
- **Skills** — technologies grouped by category
- **Academic** — education and development journey
- **Contact** — contact details and EmailJS-powered message form

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- An EmailJS account if you want the contact form to send emails

### 1. Clone the repository

```bash
git clone https://github.com/sunnysaini2004/sunnysainiPortfolio.git
cd sunnysainiPortfolio/Portfolio-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure EmailJS

Create a `.env.local` file in the `Portfolio-website` directory, alongside `package.json`:

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace the placeholders with the values from your EmailJS dashboard. The email template should use `{{name}}`, `{{email}}`, `{{subject}}`, and `{{message}}`.

> **Security note:** Variables prefixed with `VITE_` are included in the client-side bundle. Use only the EmailJS public key here; never put a private key or server-side secret in a `VITE_` variable. The `.gitignore` excludes local `.local` files, but confirm `.env.local` is not committed.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal.

### 5. Build and check the project

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Project Structure

```text
Portfolio-website/
├── public/
│   └── images/
│       └── projects/
│           ├── cinescope.png
│           ├── noteswebapp.png
│           └── weather-app.png
├── src/
│   ├── assets/                 # Profile image and imported assets
│   ├── components/
│   │   └── layout/
│   │       ├── SiteHeader.jsx
│   │       └── SiteFooter.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── SelectedWork.jsx
│   │   ├── Tools.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Deployment

The portfolio is deployed on Vercel:

**Live URL:** https://sunnysaini-portfolio-git-main-sunny-264f.vercel.app/

For a Vercel deployment from this repository, set `Portfolio-website` as the root directory, use `npm run build` as the build command, and `dist` as the output directory. Add the three EmailJS variables in the Vercel project's environment-variable settings and redeploy for the contact form to work in production.

## Author

**Sunny Saini** — MCA student and aspiring full-stack developer.

- GitHub: [@sunnysaini2004](https://github.com/sunnysaini2004)
- Portfolio: [Live website](https://sunnysaini-portfolio-git-main-sunny-264f.vercel.app/)

---

⭐ Thanks for checking out my portfolio!
