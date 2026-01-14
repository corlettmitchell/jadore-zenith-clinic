import { motion } from "framer-motion";
import { Calendar, TestTube, UserCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    step: "01",
    title: "Book Consultation",
    description: "Schedule your initial consultation to discuss your health goals and concerns.",
  },
  {
    icon: TestTube,
    step: "02",
    title: "Advanced Lab Testing",
    description: "Comprehensive diagnostic testing to understand your unique biology.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Meet Your Provider",
    description: "Review your results with a specialist and co-create your treatment plan.",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Start Your Plan",
    description: "Begin your personalized protocol with ongoing support and monitoring.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold-light mb-4">
            Getting Started
          </span>
          <h2 className="heading-section text-ivory">
            Your Journey to Optimal Health
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-charcoal-light/50 border border-ivory/10 rounded-sm p-8 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 relative">
                    <step.icon size={28} className="text-gold" />
                    <span className="absolute -top-2 -right-2 w-8 h-8 bg-gold text-charcoal text-sm font-sans font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-ivory mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ivory/60 text-sm font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
