# Refinement Pass — Physician-Led Refocus

A surgical refinement, not a redesign. Premium black/ivory/gold aesthetic, fonts, and layouts stay intact.

## 1. Hide recovery from navigation
**File:** `src/components/layout/Navigation.tsx`
- Drop the entire `Recovery Services` dropdown entry from `navLinks`. Leave the `recoverySubLinks` array file-untouched if convenient, but remove the nav item (desktop + mobile share `navLinks`, so one change covers both).
- Rename `Vitality Services` → `Services` (cleaner now that there's only one services group).

## 2. Homepage services grid: drop recovery, add HRT-forward order
**File:** `src/components/home/CoreServices.tsx`
- Remove the three recovery cards (Cold Plunge, Infrared Sauna, Hyperbaric Oxygen).
- Final cards (in order): **Hormone Replacement Therapy (HRT)**, **Peptide Therapy**, **Weight Care**, **In-House Bloodwork** (links to `/bloodwork`).
- Grid stays `lg:grid-cols-3` — 4 cards wrap cleanly; or switch to a 2×2 on `md` and 4-across on `lg`. I'll use `lg:grid-cols-4` for a clean single row.
- Use existing `service-hormone.jpg`, `service-iv.jpg`, `service-weightloss.jpg`, and `clinic-lobby.jpg` for the bloodwork card.
- Remove `PartnerRedirectModal` usage since no partner services remain.

## 3. Services page (`/services`)
**File:** `src/pages/Services.tsx`
- Replace the services array with: HRT, Peptide Therapy, Weight Care, In-House Bloodwork. Remove cold plunge / sauna entries and `PartnerRedirectModal`.
- Update hero subhead from "...recovery therapies..." → physician-led wording.

## 4. Hero copy + visuals
**File:** `src/components/home/Hero.tsx`
- Eyebrow: `Hormone Therapy · Weight Care · Peptide Consultation · In-House Bloodwork`
- Subhead replacement:
  > "J'adore Wellness is a physician-led clinic in Oceanside delivering hormone therapy, medically guided weight care, peptide consultation, and in-house bloodwork — built on diagnostics, refined dosing, and structured follow-up."
- Image slideshow array trimmed to clinic-only: `hero-lobby-1`, `hero-lobby-2`, `clinic-lobby`. Cold plunge, sauna, float, and HBOT removed from the rotation (fixes the mobile recovery imagery issue).

## 5. Footer
**File:** `src/components/layout/Footer.tsx`
- **Services list:** replace with HRT, Peptide Therapy, Weight Care, In-House Bloodwork, Patient Intake (remove Cold Plunge / Infrared Sauna).
- **Quick Links:** unchanged (already physician-focused).
- **Brand line:** swap "regenerative therapies, and medical weight management" → "medically guided weight care, and in-house bloodwork."
- **Logo:** swap `jadore-logo.png` → `jadore-logo-round-full.png` (the round black/gold mark used in nav) for consistency.
- **Social icons:** add an Instagram link to `https://www.instagram.com/jadore.wellness/` using the lucide `Instagram` icon, gold-on-hover. Facebook is omitted (no URL provided).

## 6. Review count
**File:** `src/components/home/GoogleReviews.tsx`
- Replace the inline count `5.0 · {reviews.length} reviews` with a hard-coded `5.0 · 31 reviews`. The marquee still loops the actual review cards we have.

## 7. IntroSection copy
**File:** `src/components/home/IntroSection.tsx`
- Soften the "recovery, and performance" line → "hormonal health, weight regulation, and performance" so it aligns with the new focus.

## 8. Team page sanity check
**File:** `src/pages/Team.tsx`
- No structural changes. Verify `team-oloughlin.png` renders in preview (per your answer).
- One small copy tweak: remove "recovery" from the intro paragraph → "personalized, whole-body approach to health, hormone optimization, and longevity."

## 9. Memory + content keepers
- Maintain the existing memory rules (no pharma names, "Weight Care" wording, jadore-wellness.com canonicals).
- No SEO/sitemap/llms.txt churn beyond what's needed; recovery URLs remain crawlable since pages stay live.

## What is **not** changing
- Recovery routes in `src/App.tsx` and recovery page files remain in place (easy re-enable later).
- Design tokens, typography, navbar logo behavior, button styles, animations.
- Forms / Google Apps Script wiring.
- Locations pages, About page, Bloodwork page, SEO architecture.

## Technical notes
- Drop unused imports as cards/services are removed to keep ESLint clean.
- `PartnerRedirectModal` import + state will be removed from `CoreServices.tsx` and `Services.tsx`.
- Footer Instagram link uses `target="_blank" rel="noopener noreferrer"`.
- Hero array reduction is the source of the "mobile HBOT carousel" fix — same array drives all viewports.

Summary after build will list exactly what shipped.
