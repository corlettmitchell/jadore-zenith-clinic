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

const EncinitasPage = () => {
  return (
    <Layout>
      <SEO {...seoData.encinitas} />
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
                Serving Encinitas, CA
              </span>
            </div>
            <h1 className="heading-display text-ivory mb-6">
              Coastal Wellness<br />for Encinitas
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Just 15 minutes from downtown Encinitas and the Self-Realization Fellowship, 
              J'adore Wellness brings holistic hormone therapy, regenerative treatments, 
              and wellness services to support Encinitas' mindful, health-conscious community.
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
              <h3 className="heading-card mb-3">Coastal Convenience</h3>
              <p className="body-regular">
                1763 Oceanside Blvd, Suite B<br />
                Quick coastal drive from Encinitas<br />
                15 minutes from downtown & beaches
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
              <h3 className="heading-card mb-3">Mindful Scheduling</h3>
              <p className="body-regular">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Meditation & yoga-friendly times<br />
                Surf session scheduling available
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
              <h3 className="heading-card mb-3">Holistic Approach</h3>
              <p className="body-regular">
                Mind-body wellness integration<br />
                Natural treatment preferences<br />
                Lifestyle-centered protocols
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
              Wellness in Harmony with Encinitas Values
            </h2>
            <p className="body-large mb-8">
              Encinitas embodies the perfect blend of coastal living, spiritual awareness, 
              and health consciousness. Our wellness center aligns with these values, offering 
              cutting-edge medical treatments that complement your mindful lifestyle. Whether 
              you're a surfer seeking optimal recovery, a meditation practitioner wanting enhanced 
              vitality, or a wellness entrepreneur optimizing your health span, we provide 
              personalized care that honors your holistic approach to well-being.
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
              Holistic Wellness for Encinitas
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
                Why Encinitas Residents Choose J'adore Wellness
              </h2>
              <div className="space-y-6 body-large">
                <div>
                  <h3 className="heading-card mb-2">Mindful Medicine</h3>
                  <p>
                    We approach wellness with the same consciousness that defines 
                    Encinitas, integrating advanced medicine with mindful care.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Natural Optimization</h3>
                  <p>
                    Focus on bioidentical hormones and natural therapies that work 
                    in harmony with your body's innate wisdom.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Active Lifestyle Support</h3>
                  <p>
                    Whether you're surfing, practicing yoga, or hiking the coastal 
                    trails, we optimize your energy and recovery.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Spiritual Wellness Integration</h3>
                  <p>
                    Understanding that true health encompasses mind, body, and spirit, 
                    we support your complete wellness journey.
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
              <h3 className="heading-section mb-6">Begin Your Wellness Journey</h3>
              <p className="body-large mb-6">
                Align your physical vitality with your spiritual practice. Schedule 
                your holistic consultation and discover how optimal health enhances 
                every aspect of your conscious living.
              </p>
              <ul className="space-y-3 mb-8 body-regular">
                <li>✓ Holistic health assessment</li>
                <li>✓ Natural hormone optimization</li>
                <li>✓ Lifestyle integration planning</li>
                <li>✓ Ongoing wellness support</li>
              </ul>
              <Link to="/contact">
                <Button variant="gold" size="xl" className="w-full gap-2">
                  Book Consultation
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
              Elevate Your Coastal Living
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Join the Encinitas community that's discovered how optimal health 
              amplifies the joy of conscious coastal living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="luxury" size="xl" className="gap-2">
                  Schedule Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="gap-2 border-ivory/20 text-ivory hover:bg-ivory/10">
                  Discover Services
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

export default EncinitasPage;