import { motion } from "framer-motion";
import { 
  Battery, 
  Scale, 
  Brain, 
  Moon, 
  Heart, 
  Frown, 
  Activity,
  Zap,
  Flame,
  Clock
} from "lucide-react";

const symptoms = [
  { icon: Battery, label: "Low energy" },
  { icon: Scale, label: "Weight gain" },
  { icon: Brain, label: "Brain fog" },
  { icon: Moon, label: "Poor sleep" },
  { icon: Heart, label: "Low libido" },
  { icon: Frown, label: "Mood changes" },
  { icon: Activity, label: "Hormonal imbalance" },
  { icon: Zap, label: "Chronic fatigue" },
  { icon: Flame, label: "Inflammation" },
  { icon: Clock, label: "Poor recovery" },
];

const SymptomGrid = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(var(--gold))_1px,_transparent_1px)] bg-[length:40px_40px]" />
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
            Recognize These Symptoms?
          </span>
          <h2 className="heading-section text-ivory">
            Are You Living at Your Best?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {symptoms.map((symptom, index) => (
            <motion.div
              key={symptom.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-charcoal-light/50 border border-ivory/10 rounded-sm p-6 text-center hover:border-gold/40 hover:bg-charcoal-light transition-all duration-300"
            >
              <symptom.icon 
                size={28} 
                className="mx-auto mb-3 text-gold/70 group-hover:text-gold transition-colors" 
              />
              <p className="text-ivory/80 text-sm font-sans group-hover:text-ivory transition-colors">
                {symptom.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 text-2xl md:text-3xl font-serif text-ivory/90 italic"
        >
          "You don't have to live this way."
        </motion.p>
      </div>
    </section>
  );
};

export default SymptomGrid;
