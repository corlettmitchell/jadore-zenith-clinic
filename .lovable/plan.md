

# Replace IntroSection Placeholder with Uploaded Image

## Changes

### 1. Copy uploaded image to project
- Copy `user-uploads://hf_20260226_030129_cde6cf66-fdc2-4347-8c59-88d1932ed990.jpeg` to `src/assets/clinic-lobby.jpg`

### 2. Update `src/components/home/IntroSection.tsx`
- Add an import for the new image at the top of the file
- **Lines 47-57**: Replace the placeholder content (the `J'` text and quote) with an `<img>` tag using the imported image, keeping:
  - The `aspect-[4/5]` container with `overflow-hidden`
  - The thin gold border inset overlay (`inset-4 border border-gold/30`)
  - The bottom-left decorative square accent (line 59, already kept)
- Remove the centered text/quote div entirely

The result will show the clinic lobby photo with the elegant thin gold border inset and the overlapping accent square in the bottom left.

