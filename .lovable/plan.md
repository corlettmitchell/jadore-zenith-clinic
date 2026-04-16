

## Plan: Hero Slideshow with Uploaded Clinic Photos

Replace the single static hero image with a rotating slideshow of the 6 uploaded clinic photos, crossfading every 18 seconds with a smooth transition. The existing warm overlay gradients stay intact so the text and buttons remain legible.

### Changes

**Copy 6 uploaded images to `src/assets/`**
- `hero-lobby-1.jpg` (DSC00717 - reception with circular wall art)
- `hero-lobby-2.jpg` (DSC00742 - entrance/front desk view)
- `hero-cold-plunge.jpg` (DSC00811 - cold plunge room)
- `hero-sauna.jpg` (DSC00863 - infrared sauna room)
- `hero-float.jpg` (DSC00820 - float spa room)
- `hero-hyperbaric.jpg` (DSC00841 - hyperbaric chamber room)

**Edit `src/components/home/Hero.tsx`**
- Import all 6 images into an array
- Add a `useState` for the active slide index and a `useEffect` with an `setInterval` cycling every 18 seconds
- Render all images stacked absolutely; use `AnimatePresence` + `motion.img` with `opacity` animation (fade in/out over ~1.5s) for the active image
- Keep the existing charcoal gradient overlays on top so text remains readable
- Remove the old single `heroImage` import and asset

### Technical Detail

The slideshow uses framer-motion's `AnimatePresence` with `key={activeIndex}` to crossfade. Each image gets `initial={{ opacity: 0 }}`, `animate={{ opacity: 1 }}`, `exit={{ opacity: 0 }}` with a ~1.5s transition. A subtle `scale` animation (1.05 to 1) on each new slide adds a gentle Ken Burns effect. The interval resets on unmount via cleanup.

