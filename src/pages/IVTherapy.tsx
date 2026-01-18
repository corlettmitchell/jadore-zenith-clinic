import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Zap, Brain, Shield, Sparkles, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ivImage from "@/assets/service-iv.jpg";

const ivMenu = [
  {
    name: "Anti-Aging Drip",
    description: "Powerful antioxidants and nutrients to combat cellular aging and promote youthful vitality.",
    benefits: ["Glutathione", "Vitamin C", "B-Complex", "NAD+"],
  },
  {
    name: "Immune Boost",
    description: "Strengthen your immune system with high-dose vitamins and minerals.",
    benefits: ["Vitamin C", "Zinc", "B-Vitamins", "Selenium"],
  },
  {
    name: "Hangover Recovery",
    description: "Rapid rehydration and symptom relief to get you back on your feet.",
    benefits: ["Hydration", "Anti-nausea", "Pain Relief", "B-Complex"],
  },
  {
    name: "Focus & Clarity",
    description: "Enhance cognitive function, mental clarity, and sustained energy.",
    benefits: ["B-12", "Amino Acids", "Magnesium", "Taurine"],
  },
  {
    name: "NAD+ Therapy",
    description: "Cellular regeneration and anti-aging at the molecular level.",
    benefits: ["Cellular Energy", "DNA Repair", "Mental Clarity", "Longevity"],
  },
  {
    name: "Athletic Performance",
    description: "Optimize performance, enhance recovery, and reduce muscle fatigue.",
    benefits: ["Amino Acids", "Electrolytes", "B-Vitamins", "Magnesium"],
  },
];

const peptides = [
  {
    icon: Zap,
    title: "BPC-157",
    description: "Promotes tissue healing, reduces inflammation, and supports gut health.",
  },
  {
    icon: Battery,
    title: "CJC-1295 / Ipamorelin",
    description: "Stimulates growth hormone release for muscle gain, fat loss, and recovery.",
  },
  {
    icon: Brain,
    title: "Semax / Selank",
    description: "Cognitive enhancement, neuroprotection, and anxiety reduction.",
  },
  {
    icon: Shield,
    title: "Thymosin Alpha-1",
    description: "Immune modulation and enhanced immune system function.",
  },
  {
    icon: Sparkles,
    title: "PT-141",
    description: "Supports sexual health and function in both men and women.",
  },
  {
    icon: Droplets,
    title: "Semaglutide",
    description: "Medical weight management through appetite regulation and metabolic support.",
  },
];

const IVTherapy = () => {
  return (
    <Layout>
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
              Cellular Optimization
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Peptides & IV Therapy
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Experience the next level of wellness with targeted peptide protocols 
              and intravenous nutrient therapy. Bypass your digestive system for 
              maximum absorption and immediate results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why IV Therapy */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section mb-6">
                Why IV Therapy?
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  When you take vitamins orally, only a fraction is actually absorbed 
                  by your body. IV therapy delivers nutrients directly into your 
                  bloodstream, bypassing the digestive system for 100% bioavailability.
                </p>
                <p>
                  This means faster results, higher concentrations of beneficial 
                  nutrients, and more effective treatment for a variety of conditions. 
                  From boosting immunity to enhancing athletic performance, IV therapy 
                  offers benefits that oral supplements simply can't match.
                </p>
                <p>
                  Our IV treatments are administered by licensed medical professionals 
                  in a relaxing, spa-like environment. Each protocol is customized to 
                  your specific health goals and needs.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg">
                <img
                  src={ivImage}
                  alt="IV Therapy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* IV Menu */}
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
              IV Menu
            </span>
            <h2 className="heading-section">
              Our IV Therapy Options
            </h2>
            <p className="body-large mt-4 max-w-2xl mx-auto">
              Choose from our carefully crafted IV formulations, each designed 
              to address specific wellness goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ivMenu.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-6"
              >
                <h3 className="heading-card text-gold mb-2">{item.name}</h3>
                <p className="body-regular mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs font-sans px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Peptides */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Peptide Therapy
            </span>
            <h2 className="heading-section">
              Targeted Peptide Protocols
            </h2>
            <p className="body-large mt-4 max-w-2xl mx-auto">
              Peptides are short chains of amino acids that signal your body to 
              perform specific functions. Our medical team customizes peptide 
              protocols to address your unique health goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peptides.map((peptide, index) => (
              <motion.div
                key={peptide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-8"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <peptide.icon size={24} className="text-teal" />
                </div>
                <h3 className="heading-card mb-3">{peptide.title}</h3>
                <p className="body-regular">{peptide.description}</p>
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
              Ready to Optimize Your Health?
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Schedule a consultation to discuss which IV therapy or peptide 
              protocol is right for your wellness goals.
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

export default IVTherapy;