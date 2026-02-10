

# Update All URLs to Use Custom Domain (jadore-wellness.com)

## Problem
Google is indexing the site under the Lovable staging domain (`jadore-zenith-clinic.lovable.app`) instead of your custom domain (`jadore-wellness.com`). This is because all canonical URLs, Open Graph tags, and structured data currently point to the Lovable domain.

## Solution
Replace every instance of `https://jadore-zenith-clinic.lovable.app` with `https://jadore-wellness.com` across the codebase. This tells Google that the custom domain is the authoritative version of the site.

---

## Files to Modify

### 1. `src/components/seo/SEO.tsx`
- Change `BASE_URL` from `https://jadore-zenith-clinic.lovable.app` to `https://jadore-wellness.com`

### 2. `index.html`
Update all references to the Lovable domain in:
- Canonical link tag
- Open Graph `og:url` and `og:image` tags
- Twitter card URL and image tags
- JSON-LD structured data (`@id`, `url`, `logo`, `image`, publisher references, search action target)

Total: approximately 15-20 URL replacements in index.html.

---

## Why This Fixes the Google Issue
- **Canonical tags** tell Google which URL is the "official" version of each page
- **Structured data URLs** reinforce which domain Google should associate with the business
- Once updated and republished, Google will gradually shift to showing `jadore-wellness.com` in search results

## Note
Make sure your custom domain is connected and active in Lovable project settings (Settings > Domains) before publishing. If not already done, you will need to add DNS records pointing to Lovable's IP address (185.158.133.1).

