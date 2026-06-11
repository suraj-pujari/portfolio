# Suraj Pujari — Portfolio

React-based portfolio with fully separated component architecture.

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   ├── Education/
│   │   ├── Education.jsx
│   │   └── Education.css
│   ├── Skills/
│   │   ├── Skills.jsx
│   │   ├── SkillCard.jsx
│   │   └── Skills.css
│   ├── Projects/
│   │   ├── Projects.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Projects.css
│   ├── Achievements/
│   │   ├── Achievements.jsx
│   │   └── Achievements.css
│   ├── Certifications/
│   │   ├── Certifications.jsx
│   │   ├── CertCard.jsx
│   │   ├── CertModal.jsx
│   │   └── Certifications.css
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── shared/
│       ├── RevealSection.jsx
│       └── RevealSection.css
├── constants/
│   ├── colors.js       ← All color variables
│   └── data.js         ← All content data (skills, projects, certs, etc.)
├── hooks/
│   └── index.js        ← useTyping, useScrollReveal
├── styles/
│   └── globals.css     ← Global styles + animations
├── App.jsx
└── main.jsx
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Key Notes

- **No inline styles** — all styling is in dedicated `.css` files per component
- **Data centralized** in `src/constants/data.js` — update content from one place
- **Colors centralized** in `src/constants/colors.js`
- **Hooks** in `src/hooks/index.js` — `useTyping` and `useScrollReveal`
- All **animations** (orbDrift, blink, ringPulse, etc.) are in `globals.css`
