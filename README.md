## Export Software Frontend

Built on top of [fe-zen-arch](git@github.com:shivamkj/fe-zen-arch.git) — the core shared architecture for B2B SaaS frontends.

### Libraries

- **React** [Docs](https://react.dev/reference/react)
- **Tailwind CSS** [Docs](https://tailwindcss.com/docs/installation)
- **React Query** [Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
- **React Hook Form** [Docs](https://www.react-hook-form.com/get-started)
- **Zustand** [Docs](https://zustand.docs.pmnd.rs/)

### Setup

```bash
pnpm install   # fe-zen-arch is included as a git submodule, init it first if missing
pnpm dev       # dev server on port 5173
pnpm lint      # prettier + tsc + eslint (fe-zen-arch lint pipeline)
pnpm build     # production build
```

### Notes

- `core`, `ui`, `auth`, `icons` are fe-zen-arch workspace packages, aliased via tsconfig paths & vite aliases.
- Forms are built directly with `useForm` from `core/form` + `Form` / `SubmitButton` from `core/form/components` — no generic form templates.
- Routing uses fe-zen-arch's zustand router: routes defined in `src/shared/routes.tsx`, paths in `src/shared/route-paths.ts`.
- Auth uses the fe-zen-arch auth module (routes, interceptors, login pages) out of the box.
- API base URL comes from `PUBLIC_API_URL` (`.env`).
- Don't use react-query mutation for react-hook-form submit handler.
- For HMR (hot refresh), the file must export only react component, and not any other constant or object.
- While most input elements use `...register('name')`, custom elements like select require `<Select<T> name="name" />` instead.

## AI Usage & Approach

### AI Tools Used

AI tools were used to understand the existing codebase, explore refactoring approaches, and troubleshoot development issues.

### Approach

- Refactored the Shipping Bill form into smaller, reusable components.
- Separated UI components from mock data access and service logic.
- Implemented asynchronous Promise-based mock services for party and port data.
- Preserved the existing application architecture and dependencies.

### Validation

- Ran TypeScript checks using `npx pnpm@9.15.9 exec tsc --noEmit`.
- Tested form submission and navigation between form sections.
- Verified that locally saved shipping bills appear in the dashboard.

### Learnings

Learned practical approaches to React component refactoring, service-layer separation, asynchronous data handling, and debugging an existing codebase.
