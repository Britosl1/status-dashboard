# Status Dashboard

Mock service health dashboard built with Next.js.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Purpose |
|---------|---------|
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Technical decisions

- **Next.js 16 (App Router)** — `src/app` for routes; mock data via `src/app/api/route.ts` (`GET /api`).
- **Feature folder** — Dashboard domain lives in `src/features/dashboard` (components, entities, services, utils).
- **Client data loading** — `StatusGrid` fetches from `/api` on mount (loading skeletons, empty/error states with Sonner).
- **UI** — shadcn/ui + Radix on **Tailwind CSS v4**; shared primitives in `src/components/ui`, app shell in `src/components/common`.

## Improvements
- Use Jest for testing
- Implement pagination for Status (if it returns more data)
- Improve layout overall
- Add navigation
