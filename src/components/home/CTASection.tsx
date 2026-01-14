import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />
      
      <div className="container-luxury relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Ready to Begin?
          </span>
          <h2 className="heading-section mb-6">
            Start Your Transformation Today
          </h2>
          <p className="body-large mb-10">
            Take the first step toward optimal health and vitality. 
            Schedule your consultation and discover what personalized 
            medicine can do for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="xl" className="gap-2">
                Book Your Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/intake">
              <Button variant="luxury-outline" size="xl">
                New Patient? Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
