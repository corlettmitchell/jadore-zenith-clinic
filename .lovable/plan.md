

## Plan: Add Brown Hero Header to /team Page

Replace the current plain intro section on the `/team` page with a dark hero header matching the pattern used on other pages (Services, About, etc.).

### Changes

**Edit `src/pages/Team.tsx`**

Replace the current intro `<section>` (plain `bg-background` with centered text) with a hero section using `bg-gradient-luxury` — the same charcoal/brown gradient used on the Services page:

- Same padding: `pt-32 pb-20 md:pt-40 md:pb-28`
- `bg-gradient-luxury` background
- Gold eyebrow text (`text-gold-light`)
- Ivory heading and body text (`text-ivory`, `text-ivory/80`)
- Keep the same "Meet the Team" eyebrow, heading, and paragraph content
- Keep the existing framer-motion animation

This matches the Services page hero pattern exactly and gives the Team page the same premium dark header as the rest of the site.

