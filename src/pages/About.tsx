import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Heart, Target, Microscope } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import heroImage from "@/assets/hero-wellness.jpg";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards of medical care and patient outcomes.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Every patient is treated with genuine care, respect, and understanding.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Data-driven protocols tailored to your unique biology and goals.",
  },
  {
    icon: Microscope,
    title: "Innovation",
    description: "Continuously advancing our methods with the latest in medical science.",
  },
];

const About = () => {
  return (
    <Layout>
      <SEO {...seoData.about} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="J'adore Wellness clinic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50" />
        </div>
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Our Story
            </span>
            <h1 className="heading-display text-ivory mb-6">
              About J'adore Wellness
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              A private medical institute dedicated to personalized wellness, 
              hormone optimization, and regenerative medicine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                eyebrow="Our Mission"
                title="Redefining What's Possible in Personal Wellness"
                centered={false}
              />
              <p className="body-large mt-6 mb-6">
                J'adore Wellness was founded on a simple belief: you deserve 
                to feel extraordinary, not just "normal." We reject the 
                one-size-fits-all approach of conventional medicine.
              </p>
              <p className="body-regular mb-6">
                Our mission is to provide truly personalized care—combining 
                advanced diagnostics, cutting-edge treatments, and genuine 
                attention to each patient's unique needs and goals.
              </p>
              <p className="body-regular">
                We're not a franchise clinic or a quick-fix solution. We're 
                your partners in long-term health optimization, committed to 
                helping you look, feel, and perform at your best.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-secondary/50 rounded-sm p-8 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl font-serif text-gold/30">J'</span>
                  <p className="text-muted-foreground font-serif italic text-xl mt-4 max-w-xs mx-auto">
                    "Where science meets personal wellness."
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal/10 rounded-sm -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Values"
            title="What Guides Us"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-ivory/10 rounded-full mb-6">
                  <value.icon size={28} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl text-ivory mb-3">
                  {value.title}
                </h3>
                <p className="text-ivory/60 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-section mb-6">
              Experience the Difference
            </h2>
            <p className="body-large mb-8">
              Discover what truly personalized wellness care feels like. 
              Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="gold" size="xl" className="gap-2">
                  Book Consultation
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/team">
                <Button variant="luxury-outline" size="xl">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
