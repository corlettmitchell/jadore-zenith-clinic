import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Activity, ClipboardCheck, HeartPulse, Salad } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import weightlossImage from "@/assets/service-weightloss.jpg";

const approaches = [
  {
    icon: Activity,
    title: "Metabolic Optimization",
    description: "Comprehensive lab work and hormone evaluation to identify metabolic barriers preventing weight management.",
  },
  {
    icon: HeartPulse,
    title: "Peptide Protocols",
    description: "Targeted peptide therapy to support fat metabolism and preserve lean muscle mass, selected based on individual clinical evaluation.",
  },
  {
    icon: Salad,
    title: "Nutritional Guidance",
    description: "Personalized dietary strategies and meal planning to complement your medical weight care protocol.",
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={weightlossImage}
            alt="Medical weight care consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        </div>
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Medical Weight Management
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Weight Care
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl mb-8 leading-relaxed">
              Achieve sustainable weight care through physician-supervised, 
              data-driven protocols tailored to your physiology and goals.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="gap-2">
                Schedule Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                eyebrow="Medical Weight Care"
                title="Why Medical Weight Care?"
                centered={false}
              />
              <p className="body-large mt-6 mb-8">
                Weight management is more than calories in, calories out. Hormonal 
                imbalances, metabolic dysfunction, and genetic factors all play 
                a role in why traditional diets fail. Our programs address the root causes 
                through evidence-based medical interventions and personalized treatment plans.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-gold" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-secondary/50 p-8 md:p-12 rounded-sm">
                <h3 className="heading-card mb-4">Is Medical Weight Care Right for You?</h3>
                <p className="body-regular mb-6">
                  If you've struggled with weight despite diet and exercise, 
                  underlying metabolic or hormonal factors could be the cause. 
                  Our comprehensive evaluation includes advanced testing to 
                  uncover what's holding you back.
                </p>
                <p className="body-regular mb-6">
                  Every protocol is physician-supervised, ensuring safe, effective 
                  results that last — not quick fixes that rebound.
                </p>
                <Link to="/intake">
                  <Button variant="luxury" size="lg">
                    Start Your Evaluation
                  </Button>
                </Link>
              </div>
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
              Comprehensive Weight Care Solutions
            </h2>
            <p className="body-large mt-4 max-w-2xl mx-auto">
              We combine the latest medical advancements with personalized care 
              to create a weight care program that works for your unique body.
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
              Start Your Weight Care Journey
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Schedule a consultation to discuss which weight care protocol 
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
