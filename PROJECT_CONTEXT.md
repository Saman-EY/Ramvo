# Project Context for Agents

Read this file before changing the UI component system, API client, React Query setup, or feature data hooks. It describes the structure that exists in this repository and a portable baseline for extending it.

## Stack and project conventions

- Next.js App Router, React 19, TypeScript, Tailwind CSS 4, and Turbopack.
- `app/` owns routes, layouts, and global styles. Route-specific reusable UI lives under `components/`.
- The site is Persian and right-to-left by default (`lang="fa"`, `dir="rtl"` in `app/layout.tsx`). Preserve this when adding forms, dialogs, and shadcn components.
- Aliases use `@/`; see `tsconfig.json` and `components.json` before choosing an import path.
- When changing Next.js APIs, first read the relevant guide shipped with the installed version under `node_modules/next/dist/docs/`. This project may use APIs that differ from older Next.js examples.

## shadcn/ui structure

- `components.json` configures shadcn with the `radix-nova` style, RTL enabled, CSS variables, Lucide icons, and `app/globals.css` as the stylesheet.
- shadcn primitives and generated components belong in `components/ui/` (for example `button.tsx` and `dialog.tsx`). Treat these as shared building blocks; compose them in feature components rather than copying primitive markup into pages.
- Site and feature components belong in `components/ramvo/`.
- Shared design tokens and global styles live in `app/globals.css`.
- The Button uses `class-variance-authority` variants and Radix Slot for `asChild`. Prefer its existing variants and sizes before introducing one-off button styles.
- The current `cn` helper is re-exported from the `cn` package in `lib/utils.ts`, and UI components import from `cn`. `components.json` aliases `utils` to `@/lib/utils`; keep the alias and imports consistent if changing this arrangement.
- `components.json` currently maps the `hooks` alias to `@/hooks`, but this repository stores application hooks in `lib/hooks/`. Use the actual folder unless the project structure is intentionally changed.

## React Query and API structure today

```text
app/layout.tsx
  └─ lib/Providers.tsx                 client-side QueryClientProvider

lib/
  ├─ api/axios.ts                      shared Axios instances
  └─ hooks/
     ├─ queries/                       query hooks (currently commented examples)
     └─ mutations/                     mutation hooks
```

- `app/layout.tsx` wraps the site shell and route content in `lib/Providers.tsx`. The provider is a Client Component and creates one `QueryClient` per mounted provider using lazy `useState`; preserve this lifecycle so clients are not shared across server requests.
- QueryClient currently uses library defaults (`new QueryClient({})`). Do not assume custom retries, stale times, or error handling exist.
- `lib/api/axios.ts` exports `publicApi` with `NEXT_PUBLIC_API_URL` as its base URL. Private API setup and auth interceptors are commented out; do not treat them as active authentication behavior.
- Mutations live in `lib/hooks/mutations/`. `useSubmitConsulting` posts to `/api/v1/callback-requests/` through `publicApi`.
- Query hook examples in `lib/hooks/queries/others.queries.ts` are commented out. There is no active project-wide query-key factory or query convention yet.
- `lib/functions.ts` includes `handleErrorToastOnMutation` for toast-based API error display. `react-hot-toast`'s `Toaster` is mounted in the root layout.
- Keep request and response types near the hook or move shared API types into a deliberate shared types module. The consultation mutation currently declares its own payload type; avoid creating competing payload definitions for the same feature.

## Portable feature pattern

For a new API-backed feature, follow this flow:

```text
components/<feature>/       feature UI; no raw Axios calls
lib/hooks/queries/           useQuery hooks and query keys
lib/hooks/mutations/         useMutation hooks and cache updates
lib/api/                     shared Axios configuration
lib/<feature>-schema.ts      shared validation and input/output types when needed
components/ui/               shared shadcn primitives only
```

Suggested conventions when adding code (these are a baseline, not all implemented yet):

1. Put the endpoint call in a feature hook under `lib/hooks/queries/` or `lib/hooks/mutations/`; have the UI call the hook, not Axios directly.
2. Give each query a stable key that includes every variable affecting its result. Keep keys near the query hooks until the feature has enough queries to justify a dedicated key module.
3. Type API payloads and responses. Reuse schema-derived types when a Zod schema already defines the contract.
4. After a successful mutation, invalidate or update the related query keys. Use `onSuccess`/`onError` at the hook or call site based on whether the behavior is feature-wide or specific to one screen.
5. Show user-facing failures with the existing toast helper when appropriate; keep field validation errors inline in forms.
6. Use `components/ui/` for shared primitives and `components/<feature>/` (currently `components/ramvo/`) for composition and domain-specific behavior.
7. Do not add a second QueryClientProvider inside a page or feature. The root provider already covers the application.

Example shape for a new query hook:

```ts
export const featureKeys = {
  all: ["feature"] as const,
  list: (filters: FeatureFilters) => [...featureKeys.all, "list", filters] as const,
};

export function useFeatureList(filters: FeatureFilters) {
  return useQuery({
    queryKey: featureKeys.list(filters),
    queryFn: async () => {
      const { data } = await publicApi.get<Feature[]>("/api/v1/features/", { params: filters });
      return data;
    },
  });
}
```

Example mutation shape:

```ts
export function useCreateFeature() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateFeatureInput) => {
      const { data } = await publicApi.post<Feature>("/api/v1/features/", payload);
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: featureKeys.all }),
  });
}
```

## Notes for reuse in another project

Copy the layering and boundaries, not Ramvo-specific names or assumptions. Before reusing it, update the route/component names, API base URL and auth policy, query defaults, toast behavior, locale/direction, and generated shadcn aliases. Confirm whether the destination uses Next.js App Router and a compatible React Query version before copying provider code. Keep only conventions the destination project actually adopts.
