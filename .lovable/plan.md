Create a standard Privacy Policy page for J'adore Wellness.

## What we'll build

A new `/privacy` route and page component (`src/pages/Privacy.tsx`) styled consistently with the rest of the site, plus the necessary wiring in `App.tsx` and `src/lib/seo-data.ts`.

## Page structure

- **Hero**: Dark gradient hero with gold eyebrow and ivory heading ("Privacy Policy"), matching the About/Team page hero pattern.
- **Content**: Clean, readable long-form sections covering standard privacy topics:
  - Information We Collect
  - How We Use Your Information
  - Information Sharing
  - Data Security
  - Your Rights
  - Cookies & Tracking
  - Third-Party Services (Google Sheets / Google Apps Script)
  - Changes to This Policy
  - Contact Us
- **Styling**: Uses `container-luxury`, `section-padding`, serif headings, muted body text — consistent with existing page layouts. No cards or complex layout needed.

## SEO

Add `privacy` entry to `src/lib/seo-data.ts` with appropriate title, description, canonical `/privacy`, and keywords.

## Routing

Register `<Route path="/privacy" element={<Privacy />} />` in `src/App.tsx`.

## Out of scope (noted)

The footer also links to `/terms` which currently 404s. This plan addresses only the Privacy Policy page as requested.