

# Replace Navigation Logo with New Round Logo

## Changes

### 1. Copy the uploaded logo into the project
- Copy `user-uploads://Jadore_Round_Logo_-_New-removebg.png` → `src/assets/jadore-logo-round.png`

### 2. Update `src/components/layout/Navigation.tsx`
- **Line 6**: Change import from `jadore-logo-full.png` to `jadore-logo-round.png`
- **Line 79**: Increase logo size from `h-14 md:h-16` to `h-20 md:h-24` (roughly 40-50% larger) while keeping the overflow-hidden container approach for clean header presentation

This is a 2-line change in one file plus copying the asset.

