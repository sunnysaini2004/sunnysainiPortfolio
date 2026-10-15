
<div align="center">

# 🌲 Sunny Saini — Developer Portfolio

### Building ideas into digital experiences.

A modern, responsive personal portfolio built with React.js, Tailwind CSS, and Vite, featuring a minimal **Forest Noir** design.

<br />

<a href="https://sunny-portfolio-nine.vercel.app/">
  <img src="https://img.shields.io/badge/🌐_Live_Portfolio-Visit_Website-234A36?style=for-the-badge" alt="Live Portfolio" />
</a>
<a href="https://github.com/sunnysaini2004/sunnysainiPortfolio">
  <img src="https://img.shields.io/badge/GitHub-Source_Code-0B0F0C?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
</a>

<br /><br />

<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Vite-Frontend_Tooling-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
<img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/EmailJS-Contact_Form-234A36?style=flat-square" alt="EmailJS" />
<img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />

</div>

---

## ✨ About the Portfolio

My personal developer portfolio is designed to showcase my technical skills, development approach, academic journey, and selected work in one place.

Originally started as a basic HTML, CSS, and JavaScript website, the portfolio has evolved into a React-based application with reusable components, responsive layouts, and a more refined visual identity.

The goal was to create a portfolio that feels minimal, distinctive, accessible, and easy to navigate across different screen sizes.

## 🎨 Design System — Forest Noir

The portfolio follows a dark, nature-inspired design language using deep greens, charcoal black, muted grey-green tones, and warm ivory.

| Color | Hex Code | Purpose |
|:---|:---|:---|
| Obsidian Black | `#0B0F0C` | Main backgrounds |
| Deep Forest | `#13251B` | Secondary section backgrounds |
| Forest Green | `#234A36` | Accent surfaces and highlights |
| Moss Grey | `#687A61` | Subtle visual accents |
| Silver Sage | `#AEB7B0` | Borders and supporting details |
| Warm Ivory | `#F2EFE6` | Primary text and buttons |

## 🚀 Features

<table>
  <tr>
    <td width="50%">
      <h3>📱 Responsive Layout</h3>
      Adapts to mobile, tablet, and desktop screens with carefully adjusted spacing and typography.
    </td>
    <td width="50%">
      <h3>🧩 Modular Components</h3>
      Separate React components keep the interface organized and maintainable.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🧭 Active Navigation</h3>
      Highlights the current portfolio section while navigating and scrolling.
    </td>
    <td width="50%">
      <h3>💻 Selected Work</h3>
      Displays project screenshots, technology tags, live links, and source-code links.
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>📬 Working Contact Form</h3>
      Uses EmailJS to send messages, with loading, success, and error feedback.
    </td>
    <td width="50%">
      <h3>✨ Refined UI</h3>
      Minimal typography, subtle hover effects, and a consistent Forest Noir palette.
    </td>
  </tr>
</table>

## 🛠️ Tech Stack

| Technology | Purpose |
|:---|:---|
| React.js | Component-based user interface |
| JavaScript (ES6+) | Application logic and interactivity |
| Tailwind CSS v4 | Responsive styling and UI design |
| Vite | Development server and production builds |
| EmailJS | Contact form email delivery |
| Git & GitHub | Version control and source management |
| Vercel | Deployment and hosting |

## 🧭 Portfolio Sections

| Section | Overview |
|:---|:---|
| **Home** | Profile card, introduction, and social links |
| **About** | Personal principles and development mindset |
| **Projects** | Selected work with previews and useful links |
| **Skills** | Technologies organized into categories |
| **Academic** | Education and development journey |
| **Contact** | Contact information and an interactive message form |
| **Footer** | Developer credit and copyright |

## 📂 Project Structure

The React application is located inside the `Portfolio-website` directory.

```text
sunnysainiPortfolio/
└── Portfolio-website/
    ├── public/
    │   └── images/
    │       └── projects/
    ├── src/
    │   ├── assets/
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

## ⚙️ Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- npm
- An EmailJS account to configure the contact form

### 1. Clone the repository

```bash
git clone https://github.com/sunnysaini2004/sunnysainiPortfolio.git
```

### 2. Navigate to the portfolio directory

```bash
cd sunnysainiPortfolio/Portfolio-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure EmailJS

Create a `.env.local` file inside `Portfolio-website`, alongside `package.json`.

```env
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Replace the example values with your EmailJS configuration.

The EmailJS template should use the following variables:

- `{{name}}`
- `{{email}}`
- `{{subject}}`
- `{{message}}`

**Security note:** Use only the EmailJS public key in the frontend. Never expose a private key or server-side secret. Keep `.env.local` out of your Git commits.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### 6. Create a production build

```bash
npm run build
```

### 7. Preview the production build

```bash
npm run preview
```

### 8. Run ESLint

```bash
npm run lint
```

## ☁️ Deployment

The portfolio is deployed on Vercel.

<div align="center">

<a href="https://sunny-portfolio-nine.vercel.app/">
  <img src="https://img.shields.io/badge/OPEN_LIVE_WEBSITE-234A36?style=for-the-badge&logo=vercel&logoColor=white" alt="Open Live Website" />
</a>

**Live URL:** https://sunny-portfolio-nine.vercel.app/

</div>

For deployment from this repository, configure `Portfolio-website` as the Vercel root directory, use `npm run build` as the build command, and set `dist` as the output directory.

Add the three EmailJS environment variables in Vercel's project settings and redeploy to ensure the contact form works in production.

## 👨‍💻 Developer

**Sunny Saini**  
MCA Student | Aspiring Full-Stack Developer

I enjoy learning through practical development, building responsive web interfaces, and improving my skills one project at a time.

- 🌐 Portfolio: [Visit Website](https://sunny-portfolio-nine.vercel.app/)
- 💻 GitHub: [@sunnysaini2004](https://github.com/sunnysaini2004)
- 📧 Email: [Contact Me](mailto:sainisunny2004a@gmail.com)

---

<div align="center">

### Thanks for visiting! 🌲

*Learn. Build. Improve.*

**Designed & developed by Sunny Saini**

</div>
