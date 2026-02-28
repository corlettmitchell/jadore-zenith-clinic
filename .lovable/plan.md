

## Observation

The **Hormone Therapy** page has a distinct layout that differs from Weight Care and Peptide Therapy:

**Hormone Therapy (preferred layout):**
1. **Hero** — Full-width background image with overlay, left-aligned text (eyebrow, headline, description), and "Schedule Consultation" button
2. **Benefits section** — Two-column layout: left side has eyebrow + heading + benefit checklist; right side has a card ("Is HRT Right for You?") with text and CTA
3. **Therapies grid** — Dark background, 3-column card grid
4. **CTA** — Final call-to-action

**Weight Care & Peptide Therapy (current layout):**
1. **Hero** — Plain gradient background (no image), center-aligned text
2. **Content section** — Two-column with image on right side as a standalone photo (not in hero)
3. **Approaches/protocols** — Card grid
4. **CTA**

## Plan

Restructure **Weight Care** and **Peptide Therapy** pages to match the Hormone Therapy page pattern:

### 1. Update `src/pages/WeightLoss.tsx`
- **Hero**: Replace plain gradient hero with full-width background image (`service-weightloss.jpg`) + dark overlay, left-aligned text with eyebrow, headline, description, and "Schedule Consultation" button — matching the Hormone Therapy hero structure
- **Benefits section**: Convert to two-column layout — left side with eyebrow, heading, description, and benefit checklist with gold check icons; right side with a card panel ("Is Medical Weight Care Right for You?") containing descriptive text and a CTA button
- Keep the approaches grid and final CTA sections as-is

### 2. Update `src/pages/PeptideTherapy.tsx`
- **Hero**: Replace plain gradient hero with full-width background image (`service-iv.jpg`) + dark overlay, left-aligned text with eyebrow, headline, description, and "Schedule Consultation" button
- **Content section**: Convert to two-column layout — left side with eyebrow, heading, description text; right side with a card panel ("Is Peptide Therapy Right for You?") with text and CTA
- Keep the protocols section and final CTA as-is

Both pages will follow the exact same component structure and class names used in `HormoneTherapy.tsx`.

