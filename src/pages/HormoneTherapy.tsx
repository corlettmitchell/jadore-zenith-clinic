import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import hormoneImage from "@/assets/service-hormone.jpg";

const benefits = [
  "Increased energy and vitality",
  "Improved mental clarity and focus",
  "Better sleep quality",
  "Enhanced libido and sexual function",
  "Reduced body fat and increased muscle mass",
  "Improved mood and emotional balance",
  "Stronger bones and reduced joint pain",
  "Better cardiovascular health",
];

const therapies = [
  {
    title: "Testosterone Replacement",
    description: "Restore optimal testosterone levels for improved energy, strength, and vitality.",
    forMen: true,
    forWomen: true,
  },
  {
    title: "Estrogen Therapy",
    description: "Balance estrogen levels to alleviate menopause symptoms and support bone health.",
    forMen: false,
    forWomen: true,
  },
  {
    title: "Progesterone Therapy",
    description: "Optimize progesterone for better sleep, mood, and hormonal balance.",
    forMen: false,
    forWomen: true,
  },
  {
    title: "Thyroid Optimization",
    description: "Address thyroid imbalances affecting metabolism, energy, and weight.",
    forMen: true,
    forWomen: true,
  },
  {
    title: "DHEA & Pregnenolone",
    description: "Support adrenal function and hormone production at the foundational level.",
    forMen: true,
    forWomen: true,
  },
  {
    title: "Growth Hormone Optimization",
    description: "Enhance cellular regeneration, metabolism, and anti-aging processes.",
    forMen: true,
    forWomen: true,
  },
];

const HormoneTherapy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hormoneImage}
            alt="Hormone therapy treatment room"
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
              Core Treatment
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Hormone Replacement Therapy
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl mb-8 leading-relaxed">
              Restore hormonal balance and reclaim your vitality with personalized 
              hormone optimization protocols designed for your unique biology.
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
                eyebrow="Why HRT?"
                title="Transform How You Feel Every Day"
                centered={false}
              />
              <p className="body-large mt-6 mb-8">
                Hormonal decline is a natural part of aging, but its effects don't 
                have to be. Our bioidentical hormone replacement therapy helps restore 
                optimal levels, addressing symptoms at their source.
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
                <h3 className="heading-card mb-4">Is HRT Right for You?</h3>
                <p className="body-regular mb-6">
                  If you're experiencing symptoms like fatigue, weight gain, 
                  low libido, brain fog, or mood changes, hormone imbalance 
                  could be the underlying cause.
                </p>
                <p className="body-regular mb-6">
                  Our comprehensive evaluation includes advanced blood testing 
                  to measure your current hormone levels and identify opportunities 
                  for optimization.
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

      {/* Therapies */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Protocols"
            title="Comprehensive Hormone Therapies"
            description="We offer a full spectrum of hormone optimization treatments tailored to your individual needs."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {therapies.map((therapy, index) => (
              <motion.div
                key={therapy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-light/50 border border-ivory/10 rounded-sm p-6 hover:border-gold/30 transition-colors"
              >
                <h3 className="font-serif text-xl text-ivory mb-3">
                  {therapy.title}
                </h3>
                <p className="text-ivory/60 text-sm mb-4">
                  {therapy.description}
                </p>
                <div className="flex gap-2">
                  {therapy.forMen && (
                    <span className="text-xs bg-teal/20 text-teal-light px-2 py-1 rounded">
                      Men
                    </span>
                  )}
                  {therapy.forWomen && (
                    <span className="text-xs bg-gold/20 text-gold-light px-2 py-1 rounded">
                      Women
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-section mb-6">
              Ready to Optimize Your Hormones?
            </h2>
            <p className="body-large mb-8">
              Schedule a consultation to discuss your symptoms and discover 
              how hormone optimization can transform your health.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="gap-2">
                Book Your Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HormoneTherapy;
