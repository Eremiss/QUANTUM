# Repository Guidelines

## Project Structure & Module Organization
- `src/app`: Next.js App Router pages, layouts, and route segments (e.g., `src/app/page.tsx`, `src/app/blog/page.tsx`).
- `src/components`: Reusable UI components (header/footer, CTA, blog UI, animation helpers).
- `src/content`: Static content sources such as `posts.ts` for blog data.
- `src/i18n`: Language provider and translation dictionary (`LanguageProvider.tsx`, `strings.ts`).
- `public`: Static assets served at the site root (logos, blog images, videos).
- `src/app/globals.css`: Global styles, Tailwind layers, CSS variables, and shared UI styles.

## Build, Test, and Development Commands
- `npm run dev`: start the local Next.js dev server.
- `npm run build`: production build (SSR/SSG output).
- `npm run start`: run the production server after `build`.
- `npm run lint`: run ESLint checks.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for TS/TSX and CSS.
- React/Next: functional components; App Router pages use default exports.
- Naming: `PascalCase` for components/files, `camelCase` for variables and helpers.
- Styling: Tailwind v4 via `@import "tailwindcss"` and `@layer` in `globals.css`.
- i18n: add new strings to `src/i18n/strings.ts` and consume via `useI18n()` to keep RU/EN parity.

## Content & Asset Workflow
- Blog posts live in `src/content/posts.ts` with `slug`, `title`, `excerpt`, and `body`.
- Add images to `public/blog/` and reference them on the post object as `image`.
- Keep slugs and filenames lowercase and dash-separated (example: `solana-kak-yavlenie.jpg`).

## Testing Guidelines
No testing framework is set up yet. If tests are added, document the framework choice (Jest/Vitest/Playwright) and add the npm script in `package.json`.

## Commit & Pull Request Guidelines
There is no Git history in this directory, so no commit convention is defined. Suggested defaults:
- Commits: short, descriptive messages (e.g., `feat: add blog card image`).
- PRs: include a short description, link to a task if available, and screenshots for visual changes.

## Configuration Tips
- Custom fonts are loaded via `next/font` (see `README.md`).
- Import aliases use `@/` for `src` (example: `@/components/FadeIn`).
