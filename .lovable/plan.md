
# Comprehensive SEO Optimization Plan for J'adore Wellness

## Overview
This plan implements a complete SEO optimization strategy for the J'adore Wellness website, including static HTML fallback content for crawlers, structured data (JSON-LD), and dynamic meta tag management using `react-helmet-async`.

---

## Phase 1: Static HTML Fallback in index.html

Add static content inside `<div id="root">` that search engine crawlers can read before React hydrates the page.

### Static Content Structure
```text
<div id="root">
  <header>
    <h1>J'adore Wellness - Premium Hormone Therapy & Wellness Clinic in Oceanside, CA</h1>
    <nav>Navigation links for all pages</nav>
  </header>
  
  <main>
    <h2>Services Overview</h2>
    <article>Hormone Replacement Therapy</article>
    <article>Peptides & IV Therapy</article>
    <article>Cold Plunge Therapy</article>
    <article>Infrared Sauna</article>
    <article>Compression Therapy</article>
    <article>Aesthetic Medicine</article>
    
    <h2>About J'adore Wellness</h2>
    <p>Business description and location info</p>
    
    <h3>Contact Information</h3>
    <address>Full address, phone, email, hours</address>
  </main>
  
  <footer>Copyright and legal links</footer>
</div>
```

---

## Phase 2: Structured Data (JSON-LD Schema)

Add comprehensive schema.org structured data to `index.html`:

### Schema Types to Implement

1. **MedicalBusiness** (primary schema)
   - Business name, description, URL, logo
   - Address (street, city, state, zip)
   - Telephone and email
   - Geo coordinates (latitude/longitude for Oceanside, CA)
   - Opening hours specification
   - Area served
   - Price range

2. **Service** (for each wellness service)
   - Hormone Replacement Therapy
   - Peptides & IV Therapy
   - Cold Plunge Therapy
   - Infrared Sauna Therapy
   - Compression Therapy
   - Aesthetic Medicine (Botox, Fillers, Microneedling)

3. **WebSite** schema
   - Site name, URL, search action potential

4. **Organization** schema
   - sameAs links for social media profiles

---

## Phase 3: Install and Configure react-helmet-async

### Installation
Add `react-helmet-async` package to the project.

### Provider Setup
Wrap the application in `HelmetProvider` in `main.tsx`.

---

## Phase 4: Create SEO Components

### 4.1 SEO Component (`src/components/seo/SEO.tsx`)
A reusable component that accepts:
- `title` - Page title
- `description` - Meta description
- `canonical` - Canonical URL
- `type` - Open Graph type (website, article, etc.)
- `image` - OG image URL
- `noindex` - Optional noindex flag

### 4.2 Service SEO Data (`src/lib/seo-data.ts`)
Centralized SEO metadata for all pages:
- Home page
- Hormone Therapy
- All service pages (Cold Plunge, Infrared Sauna, Compression, IV Therapy)
- Aesthetics
- About
- Team
- Contact

---

## Phase 5: Implement Page-Specific SEO

Update each page component to include the SEO component with optimized metadata:

| Page | Title | Focus Keywords |
|------|-------|----------------|
| Home | J'adore Wellness - Hormone Therapy & Wellness Clinic Oceanside CA | hormone therapy, wellness clinic, Oceanside |
| Hormone Therapy | Hormone Replacement Therapy (HRT) - J'adore Wellness Oceanside | testosterone therapy, hormone optimization |
| Cold Plunge | Cold Plunge Therapy - J'adore Wellness Oceanside CA | cold water therapy, ice bath, recovery |
| Infrared Sauna | Infrared Sauna Therapy - J'adore Wellness Oceanside CA | infrared sauna, detox, relaxation |
| Compression | Compression Therapy - J'adore Wellness Oceanside CA | compression therapy, lymphatic drainage, recovery |
| IV Therapy | Peptides & IV Therapy - J'adore Wellness Oceanside CA | IV therapy, peptides, vitamin infusion |
| Aesthetics | Aesthetic Medicine - Botox, Fillers - J'adore Wellness | botox, dermal fillers, microneedling |
| About | About J'adore Wellness - Our Mission & Values | wellness clinic, personalized care |
| Team | Our Medical Team - J'adore Wellness Oceanside | medical staff, doctors, wellness experts |
| Contact | Contact J'adore Wellness - Schedule Your Consultation | appointment, consultation, contact |

---

## Phase 6: Enhanced Meta Tags in index.html

Update existing meta tags and add additional SEO-critical tags:

### Additional Meta Tags
- `robots` - index, follow
- `googlebot` - index, follow
- `geo.region` - US-CA
- `geo.placename` - Oceanside
- Canonical link tag
- Enhanced Open Graph tags (og:site_name, og:locale, og:url)
- Twitter card enhancements

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `index.html` | Modify | Add static HTML, JSON-LD schema, enhanced meta tags |
| `package.json` | Modify | Add react-helmet-async dependency |
| `src/main.tsx` | Modify | Wrap app with HelmetProvider |
| `src/components/seo/SEO.tsx` | Create | Reusable SEO component |
| `src/lib/seo-data.ts` | Create | Centralized SEO metadata |
| `src/pages/Index.tsx` | Modify | Add SEO component |
| `src/pages/HormoneTherapy.tsx` | Modify | Add SEO component |
| `src/pages/Services.tsx` | Modify | Add SEO component |
| `src/pages/ColdPlunge.tsx` | Modify | Add SEO component |
| `src/pages/InfraredSauna.tsx` | Modify | Add SEO component |
| `src/pages/Compression.tsx` | Modify | Add SEO component |
| `src/pages/IVTherapy.tsx` | Modify | Add SEO component |
| `src/pages/Aesthetics.tsx` | Modify | Add SEO component |
| `src/pages/About.tsx` | Modify | Add SEO component |
| `src/pages/Team.tsx` | Modify | Add SEO component |
| `src/pages/Contact.tsx` | Modify | Add SEO component |

---

## Technical Details

### JSON-LD Schema Structure
```text
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "J'adore Wellness",
      "url": "https://jadore-zenith-clinic.lovable.app",
      "logo": "/favicon.png",
      "image": "/favicon.png",
      "description": "Premium hormone therapy, aesthetics, and wellness services...",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1763 Oceanside Blvd, Suite B",
        "addressLocality": "Oceanside",
        "addressRegion": "CA",
        "postalCode": "92054",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.1959,
        "longitude": -117.3795
      },
      "telephone": "(xxx) xxx-xxxx",
      "email": "info@jadorewellness.com",
      "openingHoursSpecification": [...],
      "areaServed": [...],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wellness Services",
        "itemListElement": [...]
      }
    },
    {
      "@type": "WebSite",
      "name": "J'adore Wellness",
      "url": "..."
    }
  ]
}
```

### SEO Component Props Interface
```text
interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
  keywords?: string;
}
```

---

## Expected Outcomes

1. **Improved Crawler Accessibility** - Static HTML ensures content is readable before JavaScript loads
2. **Rich Search Results** - JSON-LD schema enables rich snippets (business info, services, ratings)
3. **Better Local SEO** - Geo coordinates and local business schema improve local search visibility
4. **Dynamic Meta Management** - react-helmet-async enables page-specific meta tags that update on navigation
5. **Social Sharing** - Enhanced Open Graph tags improve link previews on social platforms

---

## Notes

- The phone number placeholder `(xxx) xxx-xxxx` will remain as-is per user preference
- Social media links in `sameAs` will be placeholders until actual profiles are provided
- Geo coordinates use approximate location for Oceanside Blvd, Oceanside, CA
