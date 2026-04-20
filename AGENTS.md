# Repository Instructions

## Product context

- Product: AI Adventure Lab
- Audience: children ages 8 to 12 first, parents or teachers second
- Tone: playful, reassuring, concise, child-friendly
- Primary rules: safety first, guided workflows over open-ended generation, no unnecessary child data

## Architecture notes

- Routes live in `src/app`
- Use App Router conventions only
- Prefer Server Components for page shells and data wiring
- Use Client Components for interaction-heavy surfaces like onboarding, lessons, games, builders, and mentor UI
- Shared state for the MVP currently lives in `src/features/adventure/store.tsx` and persists to local storage
- Supabase helpers exist in `src/lib/supabase`, but the live MVP still falls back to local demo persistence when env vars are missing

## AI and safety rules

- Never call OpenAI directly from the client
- Route all AI features through `src/app/api`
- Run `runSafetyCheck()` before generation
- Keep mentor responses structured as:
  - `yourIdea`
  - `steps`
  - `tryThisNext`
- Never ask children for private information
- Keep reminders that AI can make mistakes visible near generated output

## UI rules

- Large tap targets
- Bright but controlled color palette
- Mission-based copy, not corporate copy
- Prefer clear sections and strong typography over cluttered card grids
- Keep reading level simple

## When extending the MVP

- Add new lesson content in `src/content/lessons.ts`
- Add new mini-games in `src/content/activities.ts`
- Reuse `BuilderShell` for new creation flows
- Update SQL migrations and `supabase/seed.sql` together when the data model changes
- Preserve the fallback path so the app still runs without external keys
