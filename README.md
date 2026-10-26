# Personal portfolio

A minimal, responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, and self-hosted Inter. Original canvas network and SVG project illustrations; no animation or component libraries.

## Run locally

Use Node.js **22.13+** (Node 24 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Next.js.

```sh
npm run lint
npm run typecheck
npm run build
```

The production build creates `out/`, ready for a static hosting provider. Upload the entire directory. Because this project uses static export, `next start` is not the production serving method; serve `out/` through your static host. No environment variables or backend services are required.

## Structure

```text
src/app/                 Routes, metadata, global design tokens, favicon
src/components/          Navigation, network, project sections, scroll reveals
src/data/profile.ts      Name, email, social links, resume, skills
src/data/projects.ts     Typed project content and destinations
src/data/experience.ts   Roles, organizations, dates, focus areas
public/projects/         Original placeholder SVG illustrations
```

## Customize

- Replace `Your Name`, sample email, and social usernames in `src/data/profile.ts`.
- Add your PDF at `public/resume.pdf`, then set `profile.resume` to `/resume.pdf`. Until then the Resume button opens a truthful placeholder route.
- Replace the illustrative projects in `src/data/projects.ts`. Each supports number, category, title, description, technologies, local image, descriptive imageAlt, githubUrl, and liveUrl. Null URLs hide unavailable links. Remove the sample note in `src/app/page.tsx` when real projects are added.
- Replace sample roles in `src/data/experience.ts`. All experience descriptions are explicitly marked as samples.
- Put project screenshots in `public/projects/`, update image paths and alt text, and keep a roughly 800:620 aspect ratio. The alternating desktop layout follows array order; mobile always shows text before imagery.
- Typography, palette, spacing, and breakpoints live in `src/app/globals.css`. Change `--font-portfolio` and replace the font import in `src/app/layout.tsx` to use another typeface. Inter is bundled locally and makes no request to Google Fonts.
- Update metadata in `src/app/layout.tsx` and replace `src/app/icon.svg` if desired.

## Accessibility and performance

Semantic sections, a skip link, keyboard focus indicators, native anchor navigation, and an accessible mobile navigation disclosure. External links use `noopener noreferrer`. The decorative canvas has a descriptive accessible name; all labels are also included there. Pointer proximity highlights nodes without making content dependent on mouse use.

Canvas resolution is capped at 2× device pixel ratio. Its 64-node animation pauses when offscreen or the tab is hidden, and becomes static under `prefers-reduced-motion`. Scroll reveals progressively enhance visible server-rendered content and reduced motion disables transitions and smooth scrolling. Images reserve their dimensions and are lazy-loaded. Most of the page remains server components.

There are no contact form submissions, analytics, or invented project metrics.

## Validation in the authoring environment

`npm run lint` and `npm run typecheck` passed. `npm run build` compiled successfully with Turbopack, then the Windows execution environment denied child-process creation (`spawn EPERM`) at Next.js's TypeScript stage. The development server was blocked by the same restriction. A complete production build and browser verification could not be completed here. Run the commands above in a normal terminal before deployment.

The dependency audit reports five transitive development-tool findings through `eslint-config-next` and `braces`; no production dependency findings were reported. The suggested automatic fix downgrades Next's lint configuration across major versions, so it was not applied blindly.

## Before publishing your own portfolio

Replace sample personal details, projects, experience, social URLs, and resume. Check links and read the page on mobile. `.openai/hosting.json` belongs to the Sites deployment created for this project; omit it when deploying independently.
