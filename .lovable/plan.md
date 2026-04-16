

## Plan: Add Gold/Warm Tint Overlay to Hero

Add a subtle gold/yellow-tinted layer over the slideshow images to create better visual separation between the background and foreground text, while maintaining the warm, premium aesthetic.

### Changes

**Edit `src/components/home/Hero.tsx`** — Add a warm gold-tinted overlay div between the slideshow images and the charcoal gradients. A subtle `bg-[#C4A35A]/15` or `bg-gold/10` layer with `mix-blend-overlay` or simple opacity will create that hazy, warm separation that makes the ivory text and gold buttons pop.

The overlay will sit at line 47-48, right after the AnimatePresence images and before the first charcoal gradient, ensuring it applies evenly across all slideshow images while preserving the existing gradient structure above it.

