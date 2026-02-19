import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Zap, Heart, Activity, Timer, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import compressionImage from "@/assets/service-compression.jpg";

const benefits = [
  {
    icon: Zap,
    title: "Faster Recovery",
    description: "Accelerate muscle recovery after intense workouts or athletic events with dynamic compression technology.",
  },
  {
    icon: Heart,
    title: "Enhanced Circulation",
    description: "Improve blood flow and oxygen delivery to muscles, promoting faster healing and nutrient transport.",
  },
  {
    icon: Activity,
    title: "Reduced Muscle Soreness",
    description: "Decrease delayed onset muscle soreness (DOMS) and get back to training faster.",
  },
  {
    icon: Gauge,
    title: "Lymphatic Drainage",
    description: "Promote lymphatic flow to eliminate metabolic waste and reduce swelling.",
  },
  {
    icon: Timer,
    title: "Increased Flexibility",
    description: "Improve range of motion and reduce muscle stiffness for better overall performance.",
  },
  {
    icon: Trophy,
    title: "Athletic Performance",
    description: "Used by elite athletes worldwide to maintain peak performance and prevent overtraining.",
  },
];

const Compression = () => {
  return (
    <Layout>
      <SEO {...seoData.compression} />
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
              Compression Therapy for Faster Recovery
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Pneumatic compression promotes circulation and lymphatic flow to reduce soreness 
              and support recovery—particularly during periods of increased training, travel, 
              or high workload.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg">
                <img
                  src={compressionImage}
                  alt="Compression Therapy with NormaTec"
                  className="w-full h-full object-cover"
                />
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
                Recover Like You Train
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Pneumatic compression delivers sequential pressure to promote 
                  lymphatic flow and venous return—reducing soreness, swelling, 
                  and the systemic fatigue that accumulates with repeated high-output 
                  effort or prolonged inactivity.
                </p>
                <p>
                  It's a straightforward modality with a consistent, well-documented 
                  effect: better circulation, less soreness, faster return to training 
                  or daily function. Sessions are brief, passive, and effective.
                </p>
                <p>
                  Compression therapy is particularly useful during periods of elevated 
                  training load, post-travel recovery, or as part of a structured 
                  post-procedure protocol—and integrates cleanly with your broader 
                  wellness plan.
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
              Why Compression Therapy?
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
              Ready to Optimize Your Recovery?
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Contact us to schedule a compression therapy session and experience 
              the difference professional-grade recovery can make.
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

export default Compression;