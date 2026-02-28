import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import ivImage from "@/assets/service-iv.jpg";

const benefits = [
  "Physician-selected protocols",
  "Lab-guided dosing",
  "Structured monitoring",
  "Targeted clinical outcomes",
  "Safety-first approach",
  "Personalized to your physiology",
];

const PeptideTherapy = () => {
  return (
    <Layout>
      <SEO {...seoData.peptideTherapy} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ivImage}
            alt="Peptide therapy treatment"
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
              Regenerative Medicine
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Targeted Peptides, Chosen With Restraint
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl mb-8 leading-relaxed">
              Peptides can be powerful tools when used with precision. We deploy peptide therapy 
              selectively based on clear clinical reasoning and defined goals—with structured 
              monitoring to ensure safety, efficacy, and meaningful outcomes.
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
                eyebrow="Peptide Protocols"
                title="Peptide Protocols With Purpose"
                centered={false}
              />
              <p className="body-large mt-6 mb-8">
                Peptides are short chains of amino acids that act as signaling 
                molecules in your body—communicating with cells to perform specific 
                functions, from accelerating tissue repair to supporting hormone production. 
                We match the right tool to the right indication, with structured monitoring.
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
                <h3 className="heading-card mb-4">Is Peptide Therapy Right for You?</h3>
                <p className="body-regular mb-6">
                  Not every patient needs every peptide. Following a comprehensive 
                  consultation and laboratory evaluation, your physician will 
                  identify the appropriate peptide therapy—selected for a specific 
                  clinical indication and dosed with intention.
                </p>
                <p className="body-regular mb-6">
                  Every protocol is built around your lab work, health history, and 
                  wellness objectives, with structured monitoring to ensure safety 
                  and meaningful outcomes over time.
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

      {/* Protocols */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Our Protocols
            </span>
            <h2 className="heading-section mb-6">
              Targeted Peptide Protocols
            </h2>
            <p className="body-large">
              Each protocol is customized to your unique physiology, health history, and goals. 
              Following a comprehensive consultation and laboratory evaluation, your physician will 
              identify the appropriate peptide therapy—selected for a specific clinical indication, 
              dosed with intention, and monitored over time for both safety and meaningful outcomes.
            </p>
          </motion.div>
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
