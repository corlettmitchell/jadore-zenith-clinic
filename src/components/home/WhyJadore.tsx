import { motion } from "framer-motion";
import { Award, FileCheck, Users, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: Award,
    value: "50+",
    label: "Years Combined Clinical Experience",
  },
  {
    icon: ShieldCheck,
    value: "Board",
    label: "Certified Physician-Led Care",
  },
  {
    icon: FileCheck,
    value: "100%",
    label: "Data-Driven Treatment Plans",
  },
  {
    icon: Users,
    value: "VIP",
    label: "Concierge-Style Follow-Up",
  },
];

const WhyJadore = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-luxury relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Why J'adore Wellness
          </span>
          <h2 className="heading-section text-ivory">
            The J'adore Difference
          </h2>
          <p className="body-large text-ivory/70 mt-6 max-w-3xl mx-auto">
            Patients choose J'adore Wellness because they want clinical judgment, transparency, and 
            results that hold up over time. We combine a refined environment with the rigor of a medical 
            practice—careful evaluation, thoughtful dosing, and consistent follow-up grounded in measurable outcomes.
          </p>
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
