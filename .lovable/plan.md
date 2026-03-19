

## Plan: Manual Google Reviews Carousel

Replace the placeholder with a polished carousel showcasing 17 five-star reviews, matching the site's luxury aesthetic.

### What you'll need to do
After I build the component with placeholder text, you'll paste in the actual reviewer names and review text for all 17 reviews. I'll use "5 stars" for all of them since they're all 5-star reviews.

### Steps

1. **Create `src/components/home/GoogleReviews.tsx`**
   - Array of 17 review objects (placeholder names/text for now)
   - Embla carousel (already installed) with auto-scroll, showing 1–3 cards depending on screen size
   - Gold stars, serif headings, Google "G" branding
   - "See All Reviews on Google" link to your Google Business profile
   - Framer Motion entrance animations matching existing sections

2. **Update `src/pages/Index.tsx`**
   - Replace `ReviewsPlaceholder` with `GoogleReviews`

3. **Delete `src/components/home/ReviewsPlaceholder.tsx`**

