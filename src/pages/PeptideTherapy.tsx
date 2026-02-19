import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import ivImage from "@/assets/service-iv.jpg";

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
              Targeted Peptides, Chosen With Restraint
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Peptides can be powerful tools when used with precision. We deploy peptide therapy 
              selectively based on clear clinical reasoning and defined goals—with structured 
              monitoring to ensure safety, efficacy, and meaningful outcomes.
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
                Peptide Protocols With Purpose
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Peptides are short chains of amino acids that act as signaling 
                  molecules in your body—communicating with cells to perform specific 
                  functions, from accelerating tissue repair to supporting hormone production.
                </p>
                <p>
                  We deploy peptide therapy selectively, based on clear clinical reasoning 
                  and defined goals. Not every patient needs every peptide—and we're deliberate 
                  about matching the right tool to the right indication.
                </p>
                <p>
                  Every protocol is built around your lab work, health history, and wellness 
                  objectives, with structured monitoring to ensure safety, efficacy, and 
                  meaningful outcomes over time.
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
