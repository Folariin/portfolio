# Farouk Amusat — Portfolio

A bright, five-page portfolio for a final-year Computer Science student at the University of Manitoba, combining full-stack projects and human-computer interaction research.

## Run

Node.js 22.13+ (Node 24 recommended) and npm:

```sh
npm ci
npm run dev
```

Open the local URL printed by Next.js. Validation:

```sh
npm run lint
npm run typecheck
npm run build
```

The build uses the supported webpack builder and two static-generation workers. Keep the development server stopped while building so both commands do not write to Next.js shared build directory.

The static production site is written to `out/`. Serve that directory with a static host supporting directory index files. `next start` is not used with static export. No API keys or runtime services are required. Stop `next dev` before running the production build because both commands share `.next`. On Windows, retry if the sandbox reports `EPERM` while creating a build output directory.

## Structure

- `src/app/`: Home, Projects, Experience, Research, About, and a noindex resume fallback.
- `src/app/globals.css`: shared palette, type hierarchy, spacing tokens, components, and responsive rules.
- `src/components/`: shared navigation, footer, page introduction, project presentation, and experience list.
- `src/data/projects.ts`: verified project summaries, technical detail, links, image dimensions, and alt text.
- `src/data/experience.ts`: original roles, dates, accomplishments, and focus areas.
- `src/data/profile.ts`: personal links and skills.
- `src/lib/metadata.ts`: route-specific search and social-sharing metadata.
- `public/projects/`: compact WebP application screenshots and a source-based SVG database illustration.
- `docs/review.md`: audit findings, evidence sources, verification, and remaining content gaps.

## Customize

Update profile and content data rather than duplicating it in components. Research narrative lives in `src/app/research/page.tsx`; preserve the distinction between completed USRA work and ongoing honours research.

Add a real PDF to `public/resume.pdf` and set `profile.resume` to `/resume.pdf` to show the navigation link. Email and LinkedIn remain omitted while their values are blank; no personal contact information has been invented.

Edit the CSS tokens to adjust the bright palette, radius, spacing, or font stack. Inter is self-hosted through Fontsource. The hero artwork is CSS-only; navigation is the sole authored client component. Reduced-motion preferences disable animation, hover motion, and smooth scrolling.

Images use their real intrinsic dimensions, contain-fit previews, descriptive alternative text, lazy loading, and links to their full-size originals. Optimized assets are pre-generated because static export has no runtime image optimizer.

## Publishing

Upload `out/` to your chosen static host. Add a verified deployment domain before configuring absolute canonical URLs, sitemap origins, or social-image URLs. Page-specific Open Graph and Twitter text metadata is already present; no unverified site URL or sharing image is declared. The ignored `.openai/` folder belongs to an earlier hosting setup and is not part of this GitHub project.
