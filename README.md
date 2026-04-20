# AI Adventure Lab

AI Adventure Lab is a playful MVP web app for ages 8 to 12 that teaches what
AI is, how to use it safely, and how to create with a guided AI mentor.

## MVP included

- Onboarding flow for parent-led child profiles
- Learn Zone with 5 reusable lesson-engine lessons
- Play Zone with 4 mini prompt and safety games
- Build Zone with a working Story Builder end to end
- Guided Poster Builder and Invention Builder
- Parent Dashboard with progress, projects, and safety notes
- Child-safe API routes for mentor help, story generation, and safety checks
- Supabase migration and seed files for future persistence rollout

## Tech stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Supabase client helpers and SQL schema
- OpenAI SDK with safe fallback behavior when no API key is configured

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and add any keys you want to use:

```bash
cp .env.example .env.local
```

3. Start the dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Environment variables

The app runs without Supabase or OpenAI keys by falling back to seeded local
demo data and mock AI responses.

- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `OPENAI_MODEL`

## Project structure

- `src/app`: routes and API handlers
- `src/components`: UI, shell, mentor, builders, onboarding, parent dashboard
- `src/content`: seed lesson, activity, interest, badge, and demo state content
- `src/features`: local persistence and safety logic
- `src/lib`: env helpers, utility helpers, Supabase and OpenAI clients
- `src/server`: server-side AI orchestration helpers
- `src/types`: shared contracts
- `supabase/migrations`: schema and RLS
- `supabase/seed.sql`: starter badge and content seed examples

## Safety notes

- All AI requests go through the server
- Input is checked for privacy and unsafe topics before generation
- Risky or private topics trigger a rewrite, block, or ask-an-adult fallback
- Mentor responses are forced into a child-safe coaching style
- Story output always reminds kids that AI can make mistakes

## Current persistence model

- Child-facing progress currently persists locally in browser storage so the MVP
  works without external services
- Supabase schema and helpers are already included for the next rollout phase

## Build and checks

```bash
npm run lint
npm run build
```
