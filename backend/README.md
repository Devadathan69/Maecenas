# Backend

This folder owns the Mecenas domain logic:

- agent planning, scouting, scoring, budget allocation, synthesis, and trace events
- JSON-backed local persistence and seed data
- x402/Gateway-shaped payment executor
- shared domain types and utilities
- API response helpers

Next.js API route files still live in `app/api/`, but they should stay thin and import orchestration logic from `backend/`.

Backend-safe areas:

```txt
backend/agent/
backend/api/
backend/db/
backend/payments/
backend/utils/
backend/types.ts
app/api/
```
