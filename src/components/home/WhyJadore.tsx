import { motion } from "framer-motion";
import { Award, Star, FileCheck, Users } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "25+",
    label: "Years Combined Medical Experience",
  },
  {
    icon: Star,
    value: "50+",
    label: "Five-Star Reviews",
  },
  {
    icon: FileCheck,
    value: "100%",
    label: "Personalized Treatment Plans",
  },
  {
    icon: Users,
    value: "VIP",
    label: "Concierge-Style Care",
  },
];

const WhyJadore = () => {
  return (
    <section className="section-padding bg-gold-dark relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_hsl(var(--gold-light))_25%,_hsl(var(--gold-light))_50%,_transparent_50%,_transparent_75%,_hsl(var(--gold-light))_75%)] bg-[length:60px_60px]" />
      </div>

      <div className="container-luxury relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold-light mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-section text-ivory">
            The J'adore Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ivory/10 rounded-full mb-4">
                <metric.icon size={28} className="text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-serif text-ivory mb-2">
                {metric.value}
              </div>
              <p className="text-ivory/70 text-sm font-sans">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJadore;
