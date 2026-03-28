

## Plan: Add Top Padding to Founder Section

The Featured Founder section (`<section className="pb-20 md:pb-28 bg-background">`) has no top padding, so it sits flush against the brown hero header.

### Change

**Edit `src/pages/Team.tsx` line 75** — Add top padding to the founder section:

Change `pb-20 md:pb-28` to `pt-16 pb-20 md:pt-24 md:pb-28` to create comfortable spacing between the hero header and Dr. Oleg's profile.

