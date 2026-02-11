import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewsPlaceholder = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-gold/40" />
            ))}
          </div>
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Patient Reviews
          </span>
          <h2 className="heading-section mb-4">
            Reviews Coming Soon
          </h2>
          <p className="body-regular">
            We're collecting verified patient reviews. Check back soon to hear 
            from our patients about their experience at J'adore Wellness.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsPlaceholder;
