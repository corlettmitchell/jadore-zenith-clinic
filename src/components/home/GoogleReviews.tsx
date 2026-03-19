import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface Review {
  name: string;
  text: string;
  date: string;
}

const reviews: Review[] = [
  { name: "Reviewer 1", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 2", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 3", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 4", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 5", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 6", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 7", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 8", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 9", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 10", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 11", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 12", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 13", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 14", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 15", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 16", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
  { name: "Reviewer 17", text: "Placeholder review text. Replace with your actual Google review.", date: "2024" },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/J'adore+Wellness"; // Replace with your actual Google Business URL

const GoogleReviews = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            {/* Google "G" logo */}
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-sans text-muted-foreground ml-1">
              5.0 · {reviews.length} reviews
            </span>
          </div>

          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Patient Reviews
          </span>
          <h2 className="heading-section">
            What Our Patients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-sm border border-border bg-card p-6 flex flex-col shadow-luxury">
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="body-regular text-foreground/80 italic flex-1 mb-4 line-clamp-5">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="font-sans text-sm font-medium text-foreground">
                        {review.name}
                      </span>
                      <span className="text-xs text-muted-foreground font-sans">
                        {review.date}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 border-gold/30 text-gold hover:bg-gold hover:text-charcoal" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 border-gold/30 text-gold hover:bg-gold hover:text-charcoal" />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans text-gold hover:text-gold-light transition-colors tracking-wide uppercase"
          >
            See All Reviews on Google
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;
