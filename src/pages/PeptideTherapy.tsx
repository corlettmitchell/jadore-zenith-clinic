import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Brain, Shield, Sparkles, Battery, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import ivImage from "@/assets/service-iv.jpg";

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

const PeptideTherapy = () => {
  return (
    <Layout>
      <SEO {...seoData.peptideTherapy} />
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
              Regenerative Medicine
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Peptide Therapy
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Harness the power of targeted peptide protocols to optimize healing, 
              performance, and longevity. Our medical team customizes every protocol 
              to your unique health goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Are Peptides */}
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
                What Are Peptides?
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Peptides are short chains of amino acids that act as signaling 
                  molecules in your body. They communicate with cells to perform 
                  specific functions — from accelerating tissue repair to optimizing 
                  hormone production.
                </p>
                <p>
                  Unlike synthetic drugs, peptides work with your body's natural 
                  processes, making them a safe and effective option for a wide 
                  range of health goals including anti-aging, fat loss, muscle 
                  recovery, cognitive enhancement, and immune support.
                </p>
                <p>
                  Our physician-supervised peptide protocols are tailored to your 
                  lab work, health history, and wellness objectives for optimal results.
                </p>
              </div>
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
                  src={ivImage}
                  alt="Peptide Therapy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Peptide Protocols */}
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
              Our Protocols
            </span>
            <h2 className="heading-section">
              Targeted Peptide Protocols
            </h2>
            <p className="body-large mt-4 max-w-2xl mx-auto">
              Each peptide protocol is customized to address your unique health 
              goals and optimize your body's natural processes.
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
              Schedule a consultation to discuss which peptide protocol 
              is right for your wellness goals.
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

export default PeptideTherapy;
