import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroImage}
          alt="J'adore Wellness luxury clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/60 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="inline-block text-gold text-sm font-sans uppercase tracking-[0.3em] mb-6">
            Hormone Optimization · Regenerative Medicine · Recovery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-ivory leading-[1.05] mb-8 max-w-5xl mx-auto"
        >
          Clinical Rigor.
          <br />
          <span className="text-gradient-gold">Human Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-ivory/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed"
        >
          J'adore Wellness is a physician-led clinic in Oceanside delivering hormone optimization, 
          peptide therapy, and recovery modalities—grounded in diagnostics, refined in execution, 
          and tailored to real life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <Button variant="gold" size="xl">
              Book Your Consultation
            </Button>
          </Link>
          <Link to="/services">
            <Button variant="gold-outline" size="xl">
              Explore Our Services
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-ivory/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
