
# Change "Why Choose Us" Section to Brown Color Scheme

## Overview
Update the WhyJadore component to use brown/gold tones instead of teal while keeping the same diagonal stripe pattern.

---

## Current Implementation
- **Background**: `bg-teal` (deep teal green)
- **Stripe Pattern**: 45-degree diagonal stripes using ivory color at 10% opacity
- **Text Colors**: Ivory text, gold accents

---

## Proposed Changes

### Color Approach
Use the existing gold-dark color as the base background with lighter gold stripes to create a warm, luxurious brown-striped effect that matches the site's design system.

### Changes to `src/components/home/WhyJadore.tsx`

**Line 29** - Change background from teal to gold-dark:
```
bg-teal → bg-gold-dark
```

**Line 32** - Update stripe color to use a lighter gold for contrast:
```
hsl(var(--ivory)) → hsl(var(--gold-light))
```

This creates a warm brown background with subtle lighter brown/gold stripes, maintaining the exact same 45-degree diagonal pattern and 60px stripe size.

---

## Visual Result
- **Base Color**: Deep warm brown/gold (`--gold-dark`: 38 60% 40%)
- **Stripe Color**: Lighter gold (`--gold-light`: 42 70% 65%) at 10% opacity
- **Same Pattern**: 45-degree diagonal stripes at 60px intervals
- **Text**: Remains ivory with gold accents for good contrast

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/home/WhyJadore.tsx` | Update background class and stripe color |
