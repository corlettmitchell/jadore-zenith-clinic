import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container-luxury relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Our Philosophy
            </span>
            <h2 className="heading-section mb-6">
              Normal Isn't Optimal.
            </h2>
            <p className="body-large mb-6">
              At J'adore Wellness, we don't settle for "normal" lab results or 
              cookie-cutter treatments. We believe you deserve to feel extraordinary—not 
              just acceptable.
            </p>
            <p className="body-regular mb-6">
              Our approach combines cutting-edge diagnostics with personalized medicine, 
              treating the root cause of your symptoms rather than masking them. Every 
              protocol is crafted around your unique biology, goals, and lifestyle.
            </p>
            <p className="text-sm text-muted-foreground italic">
              J'adore Wellness operates under a consulting partnership with OptimizeU, 
              a nationally recognized hormone optimization organization.
            </p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
              <div className="absolute inset-4 border border-gold/30 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-7xl md:text-8xl font-serif text-gold/20">J'</span>
                  <p className="text-muted-foreground font-serif italic text-lg mt-4">
                    "Personalized medicine,<br />not one-size-fits-all."
                  </p>
                </div>
              </div>
            </div>
            {/* Overlapping accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-gold/20 to-gold/5 rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
