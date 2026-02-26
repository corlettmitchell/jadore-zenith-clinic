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
              Our Approach
            </span>
            <h2 className="heading-section mb-6">
              Built on Data, Refined by Experience
            </h2>
            <p className="body-large mb-6">
              We begin with a comprehensive understanding of your baseline—symptoms, goals, lifestyle, 
              and laboratory data—then build a plan designed to be both effective and sustainable. The 
              goal is not 'more' of anything, but the right intervention, at the right dose, for the 
              right individual—with structured monitoring to protect both results and long-term health.
            </p>
            <p className="body-regular mb-6">
              As a proud subsidiary of OptimizeU, our team benefits from a nationally recognized 
              education platform and a collaborative clinical network. Every week, our providers 
              participate in structured education and case review—drawing on over 50 years of 
              combined experience across physicians and advanced practice clinicians. When your 
              case is nuanced, we don't guess—we confer, refine, and get it right.
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
