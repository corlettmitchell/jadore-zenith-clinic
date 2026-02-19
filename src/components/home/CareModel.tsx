import { motion } from "framer-motion";
import { Stethoscope, Heart, BarChart3, Leaf } from "lucide-react";

const careModels = [
  {
    icon: Stethoscope,
    title: "Clinician-Led",
    description: "Every treatment is supervised by licensed medical professionals with specialized training.",
  },
  {
    icon: Heart,
    title: "Patient-Focused",
    description: "Your goals and wellbeing drive every decision. We listen first, then customize.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven",
    description: "Advanced diagnostics and regular monitoring ensure optimal outcomes.",
  },
  {
    icon: Leaf,
    title: "Holistic & Preventative",
    description: "We address root causes and optimize overall health, not just symptoms.",
  },
];

const CareModel = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Our Approach
          </span>
          <h2 className="heading-section">
            Built on Data, Refined by Experience
          </h2>
          <p className="body-large mt-6 max-w-2xl mx-auto">
            We begin with a comprehensive understanding of your baseline—symptoms, goals, lifestyle, 
            and laboratory data—then build a plan designed to be both effective and sustainable. 
            The goal is not "more" of anything, but the right intervention, at the right dose, 
            for the right individual—with structured monitoring to protect both results and long-term health.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border/50 rounded-sm p-8 hover:border-gold/30 hover:shadow-luxury transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-full flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <model.icon size={24} className="text-gold" />
                </div>
                <div>
                  <h3 className="heading-card mb-3 group-hover:text-gold transition-colors">
                    {model.title}
                  </h3>
                  <p className="body-regular">
                    {model.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareModel;
