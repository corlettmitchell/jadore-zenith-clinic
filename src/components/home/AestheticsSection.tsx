import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import aestheticsImage from "@/assets/service-aesthetics.jpg";

const treatments = [
  {
    title: "Injectables",
    description: "Botox, fillers, and neurotoxins for natural rejuvenation.",
  },
  {
    title: "Microneedling",
    description: "Stimulate collagen production for radiant skin.",
  },
  {
    title: "Chemical Peels",
    description: "Professional-grade peels for skin renewal.",
  },
  {
    title: "Body Sculpting",
    description: "Non-invasive treatments for targeted fat reduction.",
  },
];

const AestheticsSection = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-luxury-lg">
              <img
                src={aestheticsImage}
                alt="Aesthetic treatment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-sm -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/10 rounded-sm -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Aesthetic Medicine
            </span>
            <h2 className="heading-section mb-6">
              Enhance Your Natural Beauty
            </h2>
            <p className="body-large mb-8">
              Our aesthetic treatments blend artistry with medical precision, 
              delivering subtle, refined results that enhance your natural beauty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-card p-4 rounded-sm border border-border/50 hover:border-gold/30 transition-colors"
                >
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {treatment.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {treatment.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/aesthetics"
              className="inline-flex items-center gap-2 text-gold font-sans hover:gap-3 transition-all"
            >
              View All Aesthetic Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AestheticsSection;
