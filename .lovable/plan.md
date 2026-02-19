
# Fix Google Search Favicon

## The Problem

Google Search does not always use the favicon declared in `<link rel="icon">`. It crawls the site independently and often defaults to `/favicon.ico` — the file sitting at the root of the domain. In this project, `public/favicon.ico` is still the default Lovable heart icon, so Google finds and caches that instead of the custom `favicon.png`.

## What Needs to Change

### 1. Replace `public/favicon.ico` with the J'adore favicon

The `public/favicon.ico` file needs to be replaced with the J'adore logo. The cleanest way to do this is to copy the existing `public/favicon.png` (which is already the correct logo) and overwrite `public/favicon.ico` with it. Since `.ico` format is a container, modern browsers and crawlers also accept a PNG file saved with the `.ico` extension — this is widely supported.

### 2. Strengthen the `index.html` favicon declarations

Add additional `<link>` tags to be explicit with crawlers. Google's documentation recommends including both `icon` and `shortcut icon` rel types, plus an `apple-touch-icon` for completeness:

```html
<!-- Favicon -->
<link rel="icon" href="/favicon.png" type="image/png" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" href="/favicon.png" />
```

## Technical Notes

- Google re-crawls favicons on its own schedule (can take days to weeks to update in search results after the fix is deployed). The fix itself is straightforward — the delay is on Google's side.
- No changes are needed to the SEO component or any React pages; this is purely a static asset + `index.html` fix.
- After publishing, you can submit the URL to Google Search Console's "URL Inspection" tool to request a re-crawl and speed up the favicon update.

## Files to Change

| File | Change |
|---|---|
| `public/favicon.ico` | Overwrite with the J'adore logo (copy from `favicon.png`) |
| `index.html` | Add `shortcut icon` and `apple-touch-icon` link tags |
