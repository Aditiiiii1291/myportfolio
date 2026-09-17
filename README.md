# Aditi's Adventure

Minimal React + Vite + TypeScript foundation. P2.1 is complete; illustrated scenes and project pages are not implemented yet.

## Run locally

Requires Node 20.19+ on the 20.x line, or 22.12+. Verified with Node 22.14.0 and npm 10.9.2.

```sh
npm install
npm run dev
npm run build
npm run preview
```

Build runs strict TypeScript checks and generates static files in `dist/`. Preview serves the built output locally, not as a production server. On Windows, use `npm.cmd` if PowerShell interferes with npm argument forwarding.

`src/App.tsx` holds the temporary root heading and unknown-route fallback. `src/content/projects.ts` stages small Pathwise metadata for later consumers; no chapter is rendered. `src/styles.css` contains minimal global CSS.

Future static hosting must support SPA fallback for valid client routes. Hosting/deployment, production artwork and test tooling are not included here. No backend is required.

See the [roadmap](docs/PORTFOLIO_MASTER_ROADMAP.md) and [history](docs/PROJECT_HISTORY.md). Next: **P2.2 — Implement Welcome**, not started.
