import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Pill, Activity, ClipboardCheck, HeartPulse, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import weightlossImage from "@/assets/service-weightloss.jpg";

const approaches = [
  {
    icon: Pill,
    title: "Semaglutide (GLP-1)",
    description: "FDA-approved GLP-1 receptor agonist that reduces appetite, slows gastric emptying, and supports sustainable weight loss.",
  },
  {
    icon: TrendingDown,
    title: "Tirzepatide",
    description: "Dual GIP/GLP-1 agonist for enhanced metabolic support and significant, clinically proven weight reduction.",
  },
  {
    icon: Activity,
    title: "Metabolic Optimization",
    description: "Comprehensive lab work and hormone evaluation to identify metabolic barriers preventing weight loss.",
  },
  {
    icon: HeartPulse,
    title: "Peptide Protocols",
    description: "Targeted peptides like CJC-1295/Ipamorelin to support fat metabolism and preserve lean muscle mass.",
  },
  {
    icon: Salad,
    title: "Nutritional Guidance",
    description: "Personalized dietary strategies and meal planning to complement your medical weight loss protocol.",
  },
  {
    icon: ClipboardCheck,
    title: "Ongoing Monitoring",
    description: "Regular check-ins, lab work, and dose adjustments to ensure safe, effective, and lasting results.",
  },
];

const benefits = [
  "Physician-supervised protocols",
  "Personalized to your metabolism",
  "Sustainable, long-term results",
  "Preserve lean muscle mass",
  "Improved energy and vitality",
  "Reduced cravings and appetite",
];

const WeightLoss = () => {
  return (
    <Layout>
      <SEO {...seoData.weightLoss} />
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-luxury">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold-light mb-4">
              Medical Weight Management
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Weight Loss Optimization
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Achieve sustainable weight loss with physician-supervised protocols 
              including Semaglutide, Tirzepatide, and personalized metabolic 
              optimization — tailored to your body and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Medical Weight Loss */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section mb-6">
                Why Medical Weight Loss?
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Weight loss is more than calories in, calories out. Hormonal 
                  imbalances, metabolic dysfunction, and genetic factors all play 
                  a role in why traditional diets fail.
                </p>
                <p>
                  Our medical weight loss programs address the root causes of 
                  weight gain through advanced pharmaceuticals like Semaglutide 
                  and Tirzepatide, combined with comprehensive metabolic testing 
                  and personalized treatment plans.
                </p>
                <p>
                  Every protocol is physician-supervised, ensuring safe, effective 
                  results that last — not quick fixes that rebound.
                </p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg">
                <img
                  src={weightlossImage}
                  alt="Weight Loss Optimization consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Our Approach
            </span>
            <h2 className="heading-section">
              Comprehensive Weight Loss Solutions
            </h2>
            <p className="body-large mt-4 max-w-2xl mx-auto">
              We combine the latest medical advancements with personalized care 
              to create a weight loss program that works for your unique body.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-8"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <approach.icon size={24} className="text-teal" />
                </div>
                <h3 className="heading-card mb-3">{approach.title}</h3>
                <p className="body-regular">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-luxury">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-section text-ivory mb-6">
              Start Your Weight Loss Journey
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Schedule a consultation to discuss which weight loss protocol 
              is right for you. Your transformation starts here.
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="gap-2">
                Schedule Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WeightLoss;
