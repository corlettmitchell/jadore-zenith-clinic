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

const TemeculaPage = () => {
  return (
    <Layout>
      <SEO {...seoData.temecula} />
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
                Serving Temecula, CA
              </span>
            </div>
            <h1 className="heading-display text-ivory mb-6">
              Wine Country Wellness<br />for Temecula
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Located 45 minutes from Temecula's wine country, J'adore Wellness provides 
              advanced hormone therapy, regenerative medicine, and wellness services to support 
              the vibrant lifestyle of Riverside County's premier wine destination.
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
              <h3 className="heading-card mb-3">Wine Country Access</h3>
              <p className="body-regular">
                1763 Oceanside Blvd, Suite B<br />
                Scenic drive from Temecula Valley<br />
                45 minutes from Old Town Temecula
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
              <h3 className="heading-card mb-3">Lifestyle-Friendly Hours</h3>
              <p className="body-regular">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Wine country tour accommodations<br />
                Weekend consultation availability
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
              <h3 className="heading-card mb-3">Lifestyle Medicine</h3>
              <p className="body-regular">
                Wine country lifestyle support<br />
                Entertainment industry wellness<br />
                Age-gracefully protocols
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
              Premium Wellness for Wine Country Living
            </h2>
            <p className="body-large mb-8">
              Temecula represents the perfect blend of wine country sophistication and Southern 
              California lifestyle. Whether you're a winery owner, work in the entertainment 
              industry, or simply enjoy the refined pleasures of wine country living, J'adore 
              Wellness provides the premium healthcare that complements your elevated lifestyle. 
              Our treatments focus on maintaining the energy for your social calendar, optimizing 
              health for longevity, and supporting the active lifestyle that makes Temecula 
              such a desirable place to live and visit.
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
              Sophisticated Wellness for Temecula
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
                Why Temecula Residents Choose J'adore Wellness
              </h2>
              <div className="space-y-6 body-large">
                <div>
                  <h3 className="heading-card mb-2">Wine Country Sophistication</h3>
                  <p>
                    We understand the refined lifestyle of Temecula residents and 
                    provide healthcare that matches your sophisticated tastes.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Longevity Focus</h3>
                  <p>
                    Anti-aging and longevity protocols to help you age gracefully 
                    while maintaining the vitality to enjoy wine country living.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Liver Health Support</h3>
                  <p>
                    Specialized detoxification protocols and liver support for those 
                    who enjoy wine culture while maintaining optimal health.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Entertainment Industry Wellness</h3>
                  <p>
                    Support for entertainment professionals who call Temecula home, 
                    optimizing health for demanding career schedules.
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
              <h3 className="heading-section mb-6">Elevate Your Wine Country Lifestyle</h3>
              <p className="body-large mb-6">
                Maintain the energy, vitality, and health to fully enjoy everything 
                Temecula's wine country has to offer. Age gracefully while living fully.
              </p>
              <ul className="space-y-3 mb-8 body-regular">
                <li>✓ Comprehensive wellness assessment</li>
                <li>✓ Anti-aging and longevity protocols</li>
                <li>✓ Lifestyle-supporting treatments</li>
                <li>✓ Wine country wellness optimization</li>
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
              Age Like Fine Wine
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Join the Temecula residents who have discovered how to age gracefully 
              while maintaining the vitality to enjoy wine country's finest pleasures.
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

export default TemeculaPage;