## Plan: Dr. Oleg Founder Video on About Page

Replace the "J'" placeholder card on the About page with a vertical 9:16 video player featuring Dr. Oleg's intro, hosted on Lovable Cloud Storage.

### Steps

1. **Enable Lovable Cloud** — required to provision storage. No external accounts needed.

2. **Create a public `videos` storage bucket** via SQL migration with public-read RLS so the file can be embedded directly via its public URL.

3. **Create `src/components/about/FounderVideo.tsx`** — a self-contained vertical video player:
   - `aspect-[9/16]` container, max-height ~560px, max-width ~315px, gold ring + premium shadow
   - Native HTML5 `<video>` with `autoPlay muted loop playsInline preload="metadata"`
   - Floating gold mute/unmute toggle button (Volume2 / VolumeX icons) in the bottom-right
   - Subtle bottom gradient so the control stays legible against any frame
   - Tap-to-play fallback overlay (gold play button) shown if the browser blocks autoplay
   - "A Message from Our Founder" gold uppercase eyebrow + "Dr. Oleg Ryabinin, MD" caption underneath
   - Graceful "Video coming soon" placeholder until the URL constant is filled in

4. **Edit `src/pages/About.tsx`**:
   - Import the new `FounderVideo` component
   - Replace the existing `aspect-square` placeholder card (the "J'" letter and quote) with `<FounderVideo />`
   - Keep the decorative offset accent block, but switch its tint from teal to `bg-gold/10` (the codebase has phased out teal — already in core memory)

5. **You upload the video** — once Cloud is on, drop the MP4 into the `videos` bucket through the Cloud panel. I'll plug the public URL into the `VIDEO_SRC` constant in `FounderVideo.tsx`. Ideal spec: 1080x1920 H.264, 5-15 MB. If your file is larger I can compress it.

### Notes

- Autoplay-muted is allowed by every browser; tapping unmute is a single user gesture that satisfies audio policies on iOS/Safari.
- `playsInline` keeps the video in-place on iPhones rather than going fullscreen.
- No teal colors used (per project memory).