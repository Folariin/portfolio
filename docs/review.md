# Portfolio review — 26 October 2026

Scope: `redesign/bright-portfolio`. All five primary pages retained. Main is not modified or merged.

## Highest-impact findings and fixes

1. **Competing visual systems:** dark-theme rules and successive bright-theme overrides made spacing, typography, and surfaces unpredictable. Replaced with one warm-white, violet, mint, and peach system with shared typography, spacing, radius, and component rules.
2. **Homepage repetition:** long project descriptions competed with the introduction and repeated the inner pages. Added concise project summaries, direct project anchors, a compact research/experience gateway, and an original CSS composition connecting engineering and human interaction.
3. **Misleading or poorly framed imagery:** fixed image cropping/distortion and removed the visible replacement instruction. The movie illustration incorrectly suggested Python and a graphical dashboard; replaced it with a schema/query illustration derived from the Java/SQL source, clearly labeled as an illustration.
4. **Research hierarchy:** replaced long undifferentiated prose with research questions, contributions, study facts, and a proposed-process diagram. Completed USRA work remains distinct from the unfinished honours study. No findings were invented.
5. **Recruiter scanning:** compact experience rows, clear dates, and semantic emphasis on 8 participants, 500+ records, 5,000+ maps, 20–30 daily inquiries, and 20+ weekly orders. Figures come from the existing portfolio and the user’s brief; they were preserved, not independently audited against employment or participant records.
6. **Navigation and accessibility:** shared site chrome in the root layout, correct heading hierarchy, one main landmark, focusable skip destination, visible focus rings, active-page indicators, Escape dismissal and focus return for the mobile menu. Unavailable resume/contact destinations are not advertised.
7. **Engineering:** removed the unused animated network, reveal wrapper, and starter SVGs. Shared project rendering and metadata avoid duplicated content. No runtime dependency was added. Corrected the resume fallback’s obsolete home-section anchor.

## Project evidence

Read README documentation and relevant implementation before revising claims:

- [Employee Scheduler](https://github.com/Folariin/employee-scheduler/tree/6fdde4b7dc5f375175a45b9b42afb31e6ca11007): Groq interprets staffing requests; a deterministic backend planner selects suggestions. Review, apply, and publish remain separate manager actions. React/TypeScript, Spring Boot, and PostgreSQL are documented in source. No claim of autonomous assignment or global optimization.
- [Grocery App](https://github.com/Folariin/grocery-app/tree/aa61de72b2bc42574e29a010ec29a9dbfb237481): React frontend, Spring Boot API, PostgreSQL, JWT, household membership, email-addressed invite tokens, and shared list/purchase tracking. Vercel, Render, and Neon deployment descriptions are documented. Invitations are not described as guaranteed outgoing email delivery.
- [Movie Data Analysis](https://github.com/Folariin/movie-data-analysis/tree/9d31370240916b6c10e487026dc2c1a28537edd1): Java/JDBC/SQL Server console implementation, 19 reports, relational entities, batch imports, and analytical SQL. Source-based diagram uses Movie, workedIn, People, and the highest-rated-movies query. Original university database availability and unverified local restoration are disclosed.

## Performance

The three original project images totaled 2,203,466 bytes. The delivered WebP screenshots plus source-based SVG total 41,820 bytes (about 98% smaller). This is an asset-size comparison, not a measured page-speed score. Image dimensions reserve layout space and previews preserve aspect ratios. All content pages remain server components; only navigation requires client state.

## Validation

- `npm run lint`, `npm run typecheck`, full `npm audit`, and production-only `npm audit --omit=dev` passed. A full production static export passed once on Next.js 16.4.3; repeated later build attempts intermittently returned Windows sandbox `EPERM` errors while creating `.next` route output directories. The preview server was stopped for build attempts.
- Updated Next.js and matching lint configuration to 16.4.3, then patched an advisory in transitive Zod using `npm audit fix`. Full `npm audit` and production-only audit both report zero vulnerabilities.
- Browser QA used Chromium headless via Playwright against the real Next.js development server. Every primary page returned HTTP 200 at 1440, 768, 390, and 320 pixel widths, with one H1, no missing images, no horizontal overflow after correction, and no JavaScript page errors.
- Full-page screenshots were visually inspected for all five pages at desktop and mobile widths. A rotated hero gradient initially overflowed on narrow screens; its geometry was corrected and rechecked.
- axe-core 4.10.3 WCAG 2 A/AA and WCAG 2.1 AA scans found zero automated violations across all five pages at all four widths. Automated checks do not replace screen-reader and human usability testing.
- Keyboard tests passed for mobile menu opening, Escape dismissal, focus return, menu closing after route navigation, skip-link focus, and skip-link activation.
- Reduced motion produced no hero animation and disabled smooth scrolling.
- Every page’s title, description, and Open Graph title were checked in the rendered DOM. Route-specific Twitter metadata uses the same helper.
- GitHub profile, all three project repositories, and the Grocery App demo returned HTTP 200. This confirms destination reachability, not the demo’s authenticated workflows or backend health.

## Remaining owner-supplied content

A resume PDF, email, LinkedIn URL, and confirmed public portfolio domain are still absent from the supplied data. No placeholders were turned into fake destinations. Add these when available. No social preview image existed; sharing text is configured, but a production sharing-card render cannot be verified without a deployed origin. The console project has no live demo, and the scheduler has no supplied deployment URL.
