import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Snowflake, ThermometerSnowflake, Brain, Heart, Zap, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import coldPlungeImage from "@/assets/service-coldplunge.jpg";

const benefits = [
  {
    icon: ThermometerSnowflake,
    title: "Pain & Inflammation Relief",
    description: "Cold exposure reduces inflammation and provides natural pain relief for sore muscles and joints.",
  },
  {
    icon: Zap,
    title: "Increased Metabolism",
    description: "Activate brown fat and boost your metabolic rate for enhanced calorie burning throughout the day.",
  },
  {
    icon: Brain,
    title: "Mental Clarity & Focus",
    description: "Cold immersion triggers the release of norepinephrine, improving focus, mood, and cognitive function.",
  },
  {
    icon: Heart,
    title: "Improved Circulation",
    description: "Cold water therapy promotes blood flow and cardiovascular health through vascular constriction and dilation.",
  },
  {
    icon: Snowflake,
    title: "Immune System Support",
    description: "Regular cold exposure has been shown to increase white blood cell count and strengthen immune response.",
  },
  {
    icon: Moon,
    title: "Better Sleep Quality",
    description: "Cold plunging helps regulate your body temperature and nervous system for deeper, more restorative sleep.",
  },
];

const ColdPlunge = () => {
  return (
    <Layout>
      <SEO {...seoData.coldPlunge} />
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
              Cold Plunge Therapy
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Unlock the power of controlled cold exposure to reduce inflammation, 
              boost metabolism, and enhance mental clarity. Experience the invigorating 
              benefits of cold water immersion therapy.
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
                  src={coldPlungeImage}
                  alt="Cold Plunge Therapy"
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
                The Science of Cold Therapy
              </h2>
              <div className="space-y-4 body-large">
                <p>
                  Cold plunge therapy, also known as cold water immersion, has been used for 
                  centuries to promote healing and enhance performance. Modern science has 
                  validated what ancient cultures knew: controlled cold exposure triggers 
                  powerful physiological responses that benefit your entire body.
                </p>
                <p>
                  When you immerse yourself in cold water, your body activates its natural 
                  healing mechanisms. Blood vessels constrict, reducing inflammation and 
                  flushing metabolic waste. The cold triggers the release of endorphins and 
                  norepinephrine, improving mood and mental clarity.
                </p>
                <p>
                  Our cold plunge sessions are guided by trained professionals who ensure 
                  you get the maximum benefit while staying safe. Whether you're an athlete 
                  looking to accelerate recovery or simply seeking to boost your overall 
                  wellness, cold plunge therapy offers profound benefits.
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
              Why Cold Plunge?
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
              <Snowflake size={48} className="text-gold mx-auto mb-6" />
              <h2 className="heading-section mb-4">
                Book Your Cold Plunge Session
              </h2>
              <p className="body-large mb-8">
                Cold Plunge sessions are available through our on-site wellness partner. 
                Click below to schedule your session and experience the transformative 
                power of cold therapy.
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
              Ready to Transform Your Recovery?
            </h2>
            <p className="text-ivory/80 text-lg mb-8">
              Contact us to learn more about how cold plunge therapy can be 
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

export default ColdPlunge;