import { motion } from "framer-motion";
import { Award, FileCheck, Users, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "25+",
    label: "Years Combined Medical Experience",
  },
  {
    icon: ShieldCheck,
    value: "Board",
    label: "Certified Providers",
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
    <section className="section-padding bg-secondary relative overflow-hidden">
      <div className="container-luxury relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-section text-foreground">
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                <metric.icon size={28} className="text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-serif text-foreground mb-2">
                {metric.value}
              </div>
              <p className="text-muted-foreground text-sm font-sans">
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
