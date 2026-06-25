# Backend

This folder owns the standalone Node.js backend and Mecenas domain logic.

## Own These Areas

```txt
backend/server.ts
backend/http.ts
backend/agent/
backend/db/
backend/payments/
backend/utils/
backend/types.ts
scripts/seed.ts
```

## Responsibilities

- Node HTTP API server.
- Source registry APIs.
- Research agent orchestration.
- Query planning, source scouting, scoring, and budget allocation.
- 402/x402-shaped payment flow.
- Answer and receipt storage.
- Dashboard and leaderboard data.

## Run

```bash
npm run dev:backend
```

Default:

```txt
http://localhost:4000
```

Health:

```bash
curl http://localhost:4000/api/health
```

## API Boundary

The frontend calls this backend through `frontend/api.ts`.

Do not add new Next.js API routes in `app/api`. Backend APIs belong here in `backend/http.ts`.

## Current Persistence

Local JSON file:

```txt
data/db.json
```

Reset seed data:

```bash
npm run seed
```

## Production Notes

Main upgrades still needed:

```txt
Postgres
wallet auth
real Circle Gateway/x402 payments
source ownership verification
LLM answer adapter
background jobs / queue for longer research runs
```
