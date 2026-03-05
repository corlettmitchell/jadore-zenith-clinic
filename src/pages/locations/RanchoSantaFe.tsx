import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Phone, Heart, Beaker, Snowflake, Zap, Waves, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";

const services = [
  {
    icon: Heart,
    title: "Hormone Therapy",
    description: "Bioidentical hormone optimization including testosterone, estrogen, thyroid, and growth hormone protocols.",
  },
  {
    icon: Beaker,
    title: "Peptide Therapy",
    description: "Advanced regenerative peptide protocols for cellular optimization and anti-aging.",
  },
  {
    icon: Zap,
    title: "Weight Care",
    description: "Physician-supervised medical weight care with personalized metabolic protocols.",
  },
  {
    icon: Snowflake,
    title: "Cold Plunge",
    description: "Cold water immersion therapy to boost metabolism and reduce inflammation.",
  },
  {
    icon: Waves,
    title: "Infrared Sauna",
    description: "Far-infrared therapy for detoxification, pain relief, and relaxation.",
  },
  {
    icon: Dumbbell,
    title: "Compression Therapy",
    description: "Professional NormaTec compression for enhanced recovery and circulation.",
  },
];

const RanchoSantaFePage = () => {
  return (
    <Layout>
      <SEO {...seoData.ranchoSantaFe} />
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-luxury">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin size={20} className="text-gold-light" />
              <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold-light">
                Serving Rancho Santa Fe, CA
              </span>
            </div>
            <h1 className="heading-display text-ivory mb-6">
              Luxury Wellness<br />for Rancho Santa Fe
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Just 20 minutes from the prestigious enclave of Rancho Santa Fe, J'adore Wellness 
              provides world-class hormone therapy, regenerative medicine, and aesthetic 
              treatments that match the sophistication and excellence you demand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Info */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-luxury p-8 text-center"
            >
              <MapPin size={32} className="text-gold mx-auto mb-4" />
              <h3 className="heading-card mb-3">Prestigious Access</h3>
              <p className="body-regular">
                1763 Oceanside Blvd, Suite B<br />
                Elegant drive from the Ranch<br />
                20 minutes from Rancho Santa Fe village
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-luxury p-8 text-center"
            >
              <Clock size={32} className="text-gold mx-auto mb-4" />
              <h3 className="heading-card mb-3">Executive Scheduling</h3>
              <p className="body-regular">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                VIP appointment scheduling<br />
                Concierge-level service
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card-luxury p-8 text-center"
            >
              <Phone size={32} className="text-gold mx-auto mb-4" />
              <h3 className="heading-card mb-3">Luxury Medicine</h3>
              <p className="body-regular">
                White-glove patient experience<br />
                Cutting-edge treatment protocols<br />
                Privacy and discretion assured
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-section mb-6">
              Excellence Worthy of Rancho Santa Fe
            </h2>
            <p className="body-large mb-8">
              Rancho Santa Fe represents the pinnacle of luxury living, and your healthcare 
              should reflect that same standard of excellence. J'adore Wellness provides 
              the sophisticated, personalized medical care that discerning Rancho Santa Fe 
              residents expect. From Fortune 500 executives to celebrities to accomplished 
              professionals, we understand that your time is precious and your health is 
              paramount. Our concierge-level service and cutting-edge treatments ensure 
              you maintain peak performance in all aspects of your extraordinary life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Services
            </span>
            <h2 className="heading-section">
              Luxury Wellness for Rancho Santa Fe
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-8"
              >
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-teal" />
                </div>
                <h3 className="heading-card mb-3">{service.title}</h3>
                <p className="body-regular">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
                Why Elite Clients Choose J'adore Wellness
              </h2>
              <div className="space-y-6 body-large">
                <div>
                  <h3 className="heading-card mb-2">Concierge-Level Care</h3>
                  <p>
                    White-glove service from initial consultation through ongoing care, 
                    with direct provider access and personalized attention.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Cutting-Edge Protocols</h3>
                  <p>
                    Access to the latest in regenerative medicine, longevity science, 
                    and anti-aging treatments available nowhere else locally.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Executive Performance</h3>
                  <p>
                    Optimize cognitive function, energy, and physical performance 
                    for peak achievement in your professional and personal life.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Privacy & Discretion</h3>
                  <p>
                    Complete confidentiality and privacy protections that meet 
                    the standards expected by high-profile individuals.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card-luxury p-8"
            >
              <h3 className="heading-section mb-6">Experience Excellence</h3>
              <p className="body-large mb-6">
                Don't settle for ordinary healthcare. Experience the luxury wellness 
                service that matches your lifestyle and exceeds your expectations.
              </p>
              <ul className="space-y-3 mb-8 body-regular">
                <li>✓ VIP consultation experience</li>
                <li>✓ Executive health optimization</li>
                <li>✓ Concierge-level service</li>
                <li>✓ Complete privacy assurance</li>
              </ul>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="w-full gap-2">
                  Book VIP Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
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
              Elevate Your Health to New Heights
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Join the elite Rancho Santa Fe residents who have discovered the 
              transformative power of luxury wellness. Your extraordinary life 
              deserves extraordinary healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="luxury" size="xl" className="gap-2">
                  Schedule VIP Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="gap-2 border-ivory/20 text-ivory hover:bg-ivory/10">
                  Explore Premium Services
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RanchoSantaFePage;