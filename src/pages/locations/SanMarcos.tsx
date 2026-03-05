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

const SanMarcosPage = () => {
  return (
    <Layout>
      <SEO {...seoData.sanMarcos} />
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
                Serving San Marcos, CA
              </span>
            </div>
            <h1 className="heading-display text-ivory mb-6">
              Revolutionary Wellness<br />for San Marcos
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Just 20 minutes from CSUSM and downtown San Marcos, J'adore Wellness 
              provides advanced hormone therapy, regenerative treatments, and wellness 
              services to support the vibrant San Marcos community's pursuit of optimal health.
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
              <h3 className="heading-card mb-3">Accessible Location</h3>
              <p className="body-regular">
                1763 Oceanside Blvd, Suite B<br />
                Easy drive from San Marcos via 78<br />
                Close to CSUSM and Lake San Marcos
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
              <h3 className="heading-card mb-3">Student-Friendly Hours</h3>
              <p className="body-regular">
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Appointments to fit class schedules<br />
                Graduate & faculty discounts available
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
              <h3 className="heading-card mb-3">Personalized Approach</h3>
              <p className="body-regular">
                Individual treatment planning<br />
                Lifestyle-focused protocols<br />
                Performance optimization support
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
              Optimizing Health for San Marcos Living
            </h2>
            <p className="body-large mb-8">
              San Marcos is a city on the rise, home to Cal State San Marcos, thriving businesses, 
              and families who value health and wellness. Whether you're a college student looking 
              to optimize performance, a professional balancing career and family, or someone focused 
              on healthy aging, J'adore Wellness provides the advanced medical treatments and personalized 
              care you need to thrive in this dynamic community.
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
              Advanced Wellness for San Marcos
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
                Why San Marcos Chooses J'adore Wellness
              </h2>
              <div className="space-y-6 body-large">
                <div>
                  <h3 className="heading-card mb-2">Academic Excellence Standards</h3>
                  <p>
                    Like CSUSM, we maintain the highest standards in everything we do, 
                    from research-backed protocols to exceptional patient outcomes.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Performance Optimization</h3>
                  <p>
                    Whether you're a student, athlete, or professional, we help optimize 
                    your cognitive and physical performance for peak achievement.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Preventive Focus</h3>
                  <p>
                    Don't wait until you feel bad. Start optimizing your health now 
                    for better energy, mood, and longevity throughout your life.
                  </p>
                </div>
                <div>
                  <h3 className="heading-card mb-2">Family-Centered Care</h3>
                  <p>
                    We understand the busy family lifestyle in San Marcos and provide 
                    treatments that support your role as parents and professionals.
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
              <h3 className="heading-section mb-6">Transform Your Health Today</h3>
              <p className="body-large mb-6">
                Don't settle for feeling "okay." Discover what optimal health feels like 
                with personalized protocols designed around your unique needs and goals.
              </p>
              <ul className="space-y-3 mb-8 body-regular">
                <li>✓ Comprehensive biomarker analysis</li>
                <li>✓ Personalized treatment protocols</li>
                <li>✓ Performance and energy optimization</li>
                <li>✓ Long-term health monitoring</li>
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
              Reach Your Full Potential
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Join the growing San Marcos community that's discovered the power of 
              personalized wellness. Your optimal health journey starts now.
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

export default SanMarcosPage;