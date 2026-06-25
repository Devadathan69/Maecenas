# Frontend

This folder owns the Mecenas user experience.

The frontend is Next.js App Router + React + TypeScript + Tailwind. The root `app/` folder still contains page routes because Next.js requires that convention, but reusable UI and client-side interaction code should live here.

## Own These Areas

```txt
frontend/components/
frontend/api.ts
app/**/page.tsx
app/layout.tsx
app/globals.css
tailwind.config.ts
```

## Avoid Unless Coordinated

```txt
backend/
scripts/
data/
```

## API Boundary

Use `frontend/api.ts` for backend calls. Do not hardcode backend URLs in components.

Default backend:

```txt
http://localhost:4000
```

Controlled by:

```txt
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

## UX Direction

- Chat-first landing page.
- Feels like an autonomous research agent, not a static dashboard.
- Black/marble/cream/stone visual system.
- No yellow/gold glow.
- Show structured agent state: planning, scouting, scoring, budget allocation, 402 payment, evidence unlocked, receipt saved.
- Keep receipts and budget trail highly visible.

## Run

Frontend only:

```bash
npm run dev:frontend
```

Full app:

```bash
npm run dev
```

Checks:

```bash
npm run lint
npm run typecheck
npm run build
```
