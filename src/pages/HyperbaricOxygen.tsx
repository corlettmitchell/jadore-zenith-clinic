import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wind, Brain, Heart, Zap, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";

const benefits = [
  {
    icon: Wind,
    title: "Enhanced Oxygen Delivery",
    description: "Pressurized oxygen saturates your blood plasma, reaching tissues that red blood cells cannot easily access.",
  },
  {
    icon: Brain,
    title: "Cognitive Enhancement",
    description: "Increased oxygen to the brain supports improved focus, memory, and mental clarity.",
  },
  {
    icon: Heart,
    title: "Accelerated Healing",
    description: "Promote faster recovery from injuries, surgeries, and chronic wounds by stimulating tissue repair.",
  },
  {
    icon: Shield,
    title: "Immune System Boost",
    description: "Oxygen-rich environments enhance white blood cell function and support your body's natural defenses.",
  },
  {
    icon: Activity,
    title: "Reduced Inflammation",
    description: "HBOT has been shown to decrease systemic inflammation and support recovery from inflammatory conditions.",
  },
  {
    icon: Zap,
    title: "Athletic Recovery",
    description: "Elite athletes use hyperbaric therapy to reduce downtime and accelerate post-training recovery.",
  },
];

const HyperbaricOxygen = () => {
  return (
    <Layout>
      <SEO {...seoData.hyperbaricOxygen} />
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
              Recovery & Performance
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Hyperbaric Oxygen Therapy
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Breathe pure oxygen in a pressurized chamber to accelerate healing, 
              reduce inflammation, and enhance your body's natural recovery processes 
              at the cellular level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg bg-secondary flex items-center justify-center">
                <Wind size={80} className="text-gold/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal/10 rounded-sm -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section mb-6">
                The Science of Pressurized Healing
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Hyperbaric Oxygen Therapy (HBOT) involves breathing 100% pure oxygen 
                  inside a pressurized chamber, typically at 1.5 to 3 times normal atmospheric 
                  pressure. This allows your lungs to absorb significantly more oxygen, which 
                  is then carried throughout your body via the bloodstream.
                </p>
                <p>
                  Under pressure, oxygen dissolves directly into blood plasma, cerebrospinal 
                  fluid, and joint fluids — reaching areas with restricted blood flow that red 
                  blood cells may not easily access. This supercharged oxygen delivery 
                  stimulates the release of growth factors and stem cells, promoting healing 
                  at the cellular level.
                </p>
                <p>
                  HBOT has been used for decades in medical settings and is now widely 
                  embraced in the wellness and performance space for its profound recovery 
                  and anti-inflammatory benefits.
                </p>
              </div>
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
              Why Hyperbaric Oxygen?
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
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-teal" />
                </div>
                <h3 className="heading-card mb-3">{benefit.title}</h3>
                <p className="body-regular">{benefit.description}</p>
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
              Ready to Experience HBOT?
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Contact us to learn more about how hyperbaric oxygen therapy can 
              support your recovery and wellness goals.
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

export default HyperbaricOxygen;
