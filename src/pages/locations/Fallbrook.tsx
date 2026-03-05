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

const FallbrookPage = () => {
  return (
    <Layout>
      <SEO {...seoData.fallbrook} />
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
                Serving Fallbrook, CA
              </span>
            </div>
            <h1 className="heading-display text-ivory mb-6">
              Rural Wellness<br />for Fallbrook
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Just 30 minutes from the "Avocado Capital of the World," J'adore Wellness 
              brings advanced hormone therapy, regenerative medicine, and wellness services 
              to support Fallbrook's agricultural community and rural lifestyle.
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
              <h3 className="heading-card mb-3">Rural Access</h3>
              <p className="body-regular">
                1763 Oceanside Blvd, Suite B<br />
                Scenic drive via Mission Road<br />
                30 minutes from downtown Fallbrook
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
              <h3 className="heading-card mb-3">Farm-Friendly Hours</h3>
              <p className="body-regular">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Early morning appointments<br />
                Agricultural schedule accommodations
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
              <h3 className="heading-card mb-3">Rural Healthcare</h3>
              <p className="body-regular">
                Specialized rural health understanding<br />
                Agricultural injury recovery support<br />
                Land-worker wellness programs
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
              Supporting Fallbrook's Agricultural Heritage
            </h2>
            <p className="body-large mb-8">
              Fallbrook's agricultural community works hard to feed America, and that demanding 
              lifestyle requires optimal health and recovery. Whether you're managing avocado groves, 
              working in nurseries, or running agricultural businesses, J'adore Wellness understands 
              the unique physical demands you face. Our treatments focus on reducing inflammation from 
              physical labor, optimizing recovery, and maintaining the energy and strength needed 
              for rural living. We bring cutting-edge wellness to the countryside.
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
              Wellness Solutions for Fallbrook
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
                Why Fallbrook Residents Choose J'adore Wellness
              </h2>
              <div className="space-y-6 body-large">
                <div>
                  <h3 className="heading-card mb-2">Rural Health Expertise</h3>
                  <p>
                    We understand the unique health challenges of agricultural work 
                    and rural living, from sun exposure to physical labor demands.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Recovery Optimization</h3>
                  <p>
                    Specialized protocols for reducing inflammation, enhancing 
                    recovery, and maintaining strength for demanding physical work.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Practical Wellness</h3>
                  <p>
                    Down-to-earth approach that fits your agricultural schedule 
                    and budget, without compromising on quality of care.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Community Understanding</h3>
                  <p>
                    Respect for the agricultural lifestyle and the hard-working 
                    spirit that defines Fallbrook's community.
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
              <h3 className="heading-section mb-6">Strengthen Your Foundation</h3>
              <p className="body-large mb-6">
                Your body is your most important tool. Keep it running strong with 
                personalized wellness protocols designed for the demands of agricultural life.
              </p>
              <ul className="space-y-3 mb-8 body-regular">
                <li>✓ Labor-focused health assessment</li>
                <li>✓ Anti-inflammatory protocols</li>
                <li>✓ Strength and energy optimization</li>
                <li>✓ Injury prevention strategies</li>
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
              Cultivate Your Health
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Just as you tend your crops and land, tend to your health with the same 
              dedication. Discover how wellness optimization supports your rural lifestyle.
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
                  Learn More
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

export default FallbrookPage;