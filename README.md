# Irwanto - Professional Portfolio

A premium, highly-optimized, bilingual portfolio built for a Data Analyst & BI Developer. 
Hosted on Firebase Hosting (https://irwan-dev.web.app).

> Design Notice: 
> The visual architecture and layout of this portfolio are heavily inspired by the exceptional work of Brittany Chiang (v5). It has been customized, extended with new features, and populated with original data.

## Key Features & Upgrades

1. Bilingual System (EN/ID)
   - Default language is set to Indonesian (ID).
   - Instant language switching without page reloads.
   - All text contents (About, Experience, Projects) are centralized in a single dictionary file for easy maintenance.
2. Extreme Performance (100% Static)
   - Configured for Next.js output: 'export'.
   - Hosted on Firebase Hosting's free Spark plan (pure static edge delivery).
   - Near-perfect Google Lighthouse Scores (Performance, Accessibility, Best Practices, and SEO), fully leveraging next/image optimization.
3. Interactive Project Modals
   - Clickable project cards open elegant, scrollable popups containing deep-dive technical insights, problem/solution statements, and tech stacks.
4. Optimized 60FPS Animations
   - The interactive cursor spotlight effect uses React useRef directly mutating DOM styles. This entirely bypasses the React render cycle, completely eliminating scroll-jank.
5. Responsive & Accessible
   - Implemented "Skip to Content" for keyboard navigation.
   - Deeply integrated Open Graph and Meta Tags for premium link sharing.
   - Flawless mobile experience with proper layout adjustments and no horizontal scrolling.

## Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Animations: Framer Motion
- Deployment: Firebase Hosting (Web Frameworks Static Export)

## How to Update the Content

All the data (experiences, projects, about text) is fully decoupled from the UI. You do not need to touch the React components to update your resume.

1. **Initial Setup:** Rename `src/data/dictionary.template.ts` to `src/data/dictionary.ts`.
2. Open `src/data/dictionary.ts`.
3. Edit the English or Indonesian string values with your own data.
4. To add images to your projects:
   - Drop your image file into the `public/images/` or `public/projects/` folder.
   - In `dictionary.ts`, change `image: null` to your image path (e.g., `image: "/projects/scm-dashboard.png"`). The UI will automatically switch from a placeholder to your image.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the local development server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 with your browser to see the result.

## Deployment (Firebase)

Since this project is locked to output: 'export', it will not trigger paid Cloud Functions.

1. Build the static files:
   ```bash
   npm run build
   ```
   *(This will generate the out/ directory).*
2. Deploy to Firebase:
   ```bash
   firebase deploy --only hosting
   ```
