# Architecture Overview

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GitHub
- Vercel (planned deployment)

## Why This Stack

I chose Next.js because it provides simple routing, good performance, and easy deployment with Vercel. TypeScript helps reduce bugs by providing type safety. Tailwind CSS allows rapid UI development without writing large CSS files.

## System Flow

```mermaid
graph TD

A[User Opens Website]
--> B[Fills Audit Form]

B --> C[Audit Engine]

C --> D[Generate Savings Recommendation]

D --> E[Display Results Dashboard]

E --> F[Future: Save Report to Database]

F --> G[Future: Shareable Public URL]


CURRENT APPLICATION STRUCTURE
src/
 ├── app/
 │    ├── page.tsx
 │    └── audit/
 │         └── page.tsx
 │
 ├── lib/
 │    └── auditEngine.ts

Audit Logic Flow
User selects AI tool, spend, and team size
Form data is stored in React state
Audit engine compares spending against predefined pricing rules
Recommended plan and savings are calculated
Results are dynamically displayed on the page

Future Improvements

If the application needed to support 10k+ audits per day, I would:

Move audit logic into backend API routes
Add database indexing
Add caching for repeated calculations
Add authentication and rate limiting
Use server-side analytics and monitoring