import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Waves, Brain, Moon, Heart, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import floatSpaImage from "@/assets/service-floatspa.webp";

const benefits = [
  {
    icon: Brain,
    title: "Deep Mental Relaxation",
    description: "Sensory deprivation allows your brain to enter a theta state, promoting profound relaxation and stress relief.",
  },
  {
    icon: Moon,
    title: "Improved Sleep",
    description: "Float sessions reset your nervous system and promote deeper, more restorative sleep patterns.",
  },
  {
    icon: Heart,
    title: "Pain & Tension Relief",
    description: "Effortless floating in Epsom salt water relieves joint pressure, muscle tension, and chronic pain.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Creativity",
    description: "Free from external stimulation, your mind unlocks heightened creativity, problem-solving, and mental clarity.",
  },
  {
    icon: Shield,
    title: "Magnesium Absorption",
    description: "The high concentration of Epsom salt provides transdermal magnesium, supporting muscle recovery and relaxation.",
  },
  {
    icon: Waves,
    title: "Reduced Cortisol",
    description: "Floating has been clinically shown to significantly lower cortisol levels and reduce overall stress response.",
  },
];

const FloatSpa = () => {
  return (
    <Layout>
      <SEO {...seoData.floatSpa} />
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
              Float Spa
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Experience weightlessness in our sensory deprivation float tanks. 
              Dissolve stress, relieve pain, and unlock deep relaxation as you 
              float effortlessly in warm, mineral-rich water.
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
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg">
                <img src={floatSpaImage} alt="Float Spa therapy session" className="w-full h-full object-cover" />
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
                The Art of Floating
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Float therapy, also known as sensory deprivation or REST (Restricted 
                  Environmental Stimulation Therapy), involves floating effortlessly in a 
                  tank filled with body-temperature water saturated with over 1,000 pounds 
                  of Epsom salt.
                </p>
                <p>
                  The high salt concentration creates buoyancy that supports your entire 
                  body, eliminating the effects of gravity on muscles and joints. Combined 
                  with the absence of light, sound, and external stimulation, your nervous 
                  system shifts into a deeply restorative parasympathetic state.
                </p>
                <p>
                  Whether you're seeking relief from chronic pain, looking to reduce 
                  anxiety, or simply wanting to experience one of the most deeply 
                  relaxing therapies available, float spa sessions offer a unique 
                  and transformative wellness experience.
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
              Why Float Therapy?
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
              Ready to Float?
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Contact us to book your float spa session and discover the 
              profound benefits of sensory deprivation therapy.
            </p>
            <Link to="/contact">
              <Button variant="luxury" size="xl" className="gap-2">
                Schedule Session
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FloatSpa;
