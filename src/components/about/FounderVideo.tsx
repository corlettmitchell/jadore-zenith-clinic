import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

// Once the MP4 is uploaded to the `videos` storage bucket, paste its public URL here.
// Format: https://<project>.supabase.co/storage/v1/object/public/videos/<filename>.mp4
const VIDEO_SRC = "https://kjaaztqprlvmvkslspyj.supabase.co/storage/v1/object/public/videos//Dr%20Oleg%20Introduction%20Reel.mp4";
const POSTER_SRC = ""; // optional: still-frame URL

const FounderVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !VIDEO_SRC) return;
    v.muted = true;
    v.play().catch(() => {
      // Autoplay was blocked — the tap-to-play overlay will handle it.
    });
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (v.paused) {
      v.play().catch(() => {});
      setHasPlayed(true);
    }
  };

  const handleManualPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
    setHasPlayed(true);
  };

  return (
    <div className="relative">
      <div className="relative mx-auto aspect-[9/16] max-h-[560px] w-full max-w-[315px] overflow-hidden rounded-sm bg-charcoal shadow-luxury-lg ring-1 ring-gold/30">
        {VIDEO_SRC ? (
          <>
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={POSTER_SRC || undefined}
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onPlay={() => setHasPlayed(true)}
            />

            {/* Subtle bottom gradient for control legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/70 to-transparent" />

            {/* Mute / unmute toggle */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/70 text-gold ring-1 ring-gold/40 backdrop-blur-sm transition hover:bg-charcoal/90 hover:text-gold-light"
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>

            {/* Tap-to-play affordance shown if browser blocked autoplay */}
            {!hasPlayed && (
              <button
                type="button"
                onClick={handleManualPlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition hover:bg-charcoal/40"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 text-charcoal shadow-luxury-lg">
                  <Play size={26} className="ml-1" fill="currentColor" />
                </span>
              </button>
            )}
          </>
        ) : (
          // Placeholder shown until VIDEO_SRC is configured
          <div className="flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold/70">
              Founder Message
            </span>
            <p className="mt-3 font-serif text-base italic text-ivory/70">
              Video coming soon.
            </p>
          </div>
        )}
      </div>

      <p className="mt-5 text-center text-xs font-sans uppercase tracking-[0.25em] text-gold">
        A Message from Our Founder
      </p>
      <p className="mt-2 text-center font-serif text-sm italic text-muted-foreground">
        Dr. Oleg Ryabinin, MD
      </p>
    </div>
  );
};

export default FounderVideo;
