import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Heart, Sparkles, Droplets, ThermometerSun, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import saunaImage from "@/assets/service-sauna.jpg";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Detoxification",
    description: "Infrared heat penetrates deep into tissues, promoting sweating that eliminates toxins at the cellular level.",
  },
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description: "Regular sessions can improve circulation, lower blood pressure, and support overall heart health.",
  },
  {
    icon: Sparkles,
    title: "Skin Rejuvenation",
    description: "Increased blood flow and sweating helps clear pores, improve skin tone, and promote a healthy glow.",
  },
  {
    icon: ThermometerSun,
    title: "Pain & Muscle Relief",
    description: "Deep tissue heating reduces muscle tension, joint pain, and promotes faster recovery from exercise.",
  },
  {
    icon: Activity,
    title: "Stress Reduction",
    description: "The gentle warmth promotes relaxation, reduces cortisol levels, and helps you unwind from daily stress.",
  },
  {
    icon: Sun,
    title: "Immune Support",
    description: "Artificial fever induced by infrared heat stimulates immune response and helps fight off illness.",
  },
];

const InfraredSauna = () => {
  return (
    <Layout>
      <SEO {...seoData.infraredSauna} />
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
              Detoxification & Relaxation
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Heat Therapy, Elevated
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Infrared sauna supports circulation, relaxation, and recovery in a comfortable, 
              controlled environment—a complementary modality for patients focused on 
              performance, sleep quality, and stress management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
                Deep Warmth. Better Recovery.
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Infrared sauna delivers therapeutic heat that penetrates deeper into 
                  tissue than conventional heat—supporting circulation, muscle relaxation, 
                  and a meaningful reduction in perceived stress at comfortable temperatures.
                </p>
                <p>
                  As a recovery and restoration modality, it pairs particularly well with 
                  patients managing high training loads, elevated cortisol, or disrupted 
                  sleep. The physiological response is consistent and well-supported in 
                  the literature.
                </p>
                <p>
                  Sessions are available through our on-site wellness partner and can 
                  be incorporated as part of a structured recovery protocol designed 
                  alongside your primary treatment plan.
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
                  src={saunaImage}
                  alt="Infrared Sauna"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
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
              Benefits
            </span>
            <h2 className="heading-section">
              Why Infrared Sauna?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-luxury p-8"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-gold" />
                </div>
                <h3 className="heading-card mb-3">{benefit.title}</h3>
                <p className="body-regular">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Notice */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="card-luxury p-8 md:p-12 border-gold/20">
              <Sun size={48} className="text-gold mx-auto mb-6" />
              <h2 className="heading-section mb-4">
                Book Your Sauna Session
              </h2>
              <p className="body-large mb-8">
                Infrared Sauna sessions are available through our on-site wellness partner. 
                Click below to schedule your session and experience the deep healing 
                benefits of infrared therapy.
              </p>
              <a
                href="https://bellalongevityspa.com/?srsltid=AfmBOopuTglJHLU1fbvYLJ4foozrYLrZfIYu0hy7ZiG-qvuFfv8XskE0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="gold" size="xl" className="gap-2">
                  Book Session
                  <ArrowRight size={18} />
                </Button>
              </a>
            </div>
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
              Ready to Detoxify & Relax?
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Contact us to learn more about how infrared sauna therapy can be 
              integrated into your personalized wellness plan.
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

export default InfraredSauna;