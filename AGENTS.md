# Repository Guidelines

## Project Structure & Module Organization
- `App.tsx` and `index.tsx` boot the React renderer; `index.css`/`tailwind.config.js` hold theme tokens.
- UI lives in `components/` (e.g., `AiChatPanel`, `NoteList`, `ExportModal`); keep shared types in `types.ts`.
- Domain utilities are in `services/` (`gemini.ts` for AI calls, `storage.ts` for localStorage, `exporters.ts` for PDF/image export).
- Desktop shell lives in `electron/`; release helpers in `scripts/`; icons in `resources/`; builds land in `dist/` and installers in `release/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the Vite dev server for the renderer.
- `npm run build` — create a production build in `dist/`.
- `npm run preview` — serve the built renderer locally for smoke tests.
- `npm run electron:dev` — build the renderer then launch Electron.
- `npm run electron:build` — clean `release/`, regenerate icons, build the renderer, and produce installers via electron-builder.
- `npm run icon:generate` — rebuild app icons from `resources/icon.png` before packaging.

## Coding Style & Naming Conventions
- TypeScript + React with 2-space indentation, single quotes, and semicolons.
- Components use PascalCase file names; helpers and hooks use camelCase; constants uppercase.
- Favor Tailwind utility classes over new CSS; extract reusable pieces into `components/`.
- No dedicated linter config; fix TypeScript/Vite warnings and avoid unused imports.

## Testing Guidelines
- No automated suite yet; run `npm run build` and sanity-check note CRUD, AI prompts (with a test key), and exports.
- If adding tests, use Vitest + React Testing Library as `*.test.tsx` near components; keep fixtures small and cover storage/localStorage boundaries.

## Commit & Pull Request Guidelines
- Follow the existing conventional prefixes (`fix:`, `chore:`, `style:`, `feat:`) with imperative, scoped summaries.
- PRs should include a brief summary, user impact, manual checks (browser + Electron), linked issues, and screenshots/GIFs for UI changes; call out platform-specific behavior (icons, menus, shortcuts).
- Keep changesets focused and update docs when adding commands, settings, or env requirements.

## Security & Configuration Tips
- AI calls use OpenAI-compatible endpoints; provide `API_KEY` via environment (`API_KEY=... npm run dev`) or in-app settings—never commit keys. Base URL defaults to the Gemini-compatible endpoint; override per provider.
- User data persists in `localStorage`; when touching `services/storage.ts`, add safe defaults/backfill to avoid breaking existing saves.
- Packaging relies on `electron-builder`; ensure assets under `resources/` are licensed and regenerated before release.
