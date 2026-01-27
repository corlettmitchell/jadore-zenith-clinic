import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import aestheticsImage from "@/assets/service-aesthetics.jpg";

const treatments = [
  {
    category: "Injectables",
    items: [
      {
        name: "Botox & Dysport",
        description: "Smooth fine lines and wrinkles with precision neurotoxin treatments.",
      },
      {
        name: "Dermal Fillers",
        description: "Restore volume and contour with premium hyaluronic acid fillers.",
      },
      {
        name: "Lip Enhancement",
        description: "Natural-looking lip augmentation for subtle or dramatic results.",
      },
    ],
  },
  {
    category: "Skin Treatments",
    items: [
      {
        name: "Microneedling",
        description: "Stimulate collagen production for smoother, firmer skin.",
      },
      {
        name: "Chemical Peels",
        description: "Professional-grade peels for skin renewal and clarity.",
      },
      {
        name: "PRP Facials",
        description: "Harness your body's healing power for natural rejuvenation.",
      },
    ],
  },
  {
    category: "Body Treatments",
    items: [
      {
        name: "Body Sculpting",
        description: "Non-invasive fat reduction for targeted body contouring.",
      },
      {
        name: "Skin Tightening",
        description: "Radiofrequency treatments for firmer, more youthful skin.",
      },
      {
        name: "Cellulite Reduction",
        description: "Advanced treatments to smooth and firm problem areas.",
      },
    ],
  },
];

const Aesthetics = () => {
  return (
    <Layout>
      <SEO {...seoData.aesthetics} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aestheticsImage}
            alt="Aesthetic treatment"
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
              Aesthetic Medicine
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Enhance Your Natural Beauty
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl mb-8 leading-relaxed">
              Our aesthetic treatments blend medical precision with artistry, 
              delivering natural, refined results that enhance your unique features.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="gap-2">
                Book Aesthetic Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
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
                eyebrow="Our Approach"
                title="Subtle Enhancement, Remarkable Results"
                centered={false}
              />
              <p className="body-large mt-6 mb-6">
                We believe in enhancing what makes you uniquely beautiful. 
                Our aesthetic philosophy centers on natural-looking results 
                that refresh and rejuvenate without appearing overdone.
              </p>
              <p className="body-regular">
                Every treatment is tailored to your facial anatomy, skin type, 
                and personal goals. We take time to understand your vision and 
                work together to achieve results you'll love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-secondary/50 p-8 rounded-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <Sparkles size={24} className="text-gold" />
                  </div>
                  <h3 className="heading-card">The J'adore Difference</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2" />
                    <span className="text-muted-foreground">Physician-supervised treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2" />
                    <span className="text-muted-foreground">Premium, FDA-approved products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2" />
                    <span className="text-muted-foreground">Customized treatment plans</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2" />
                    <span className="text-muted-foreground">Natural-looking results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2" />
                    <span className="text-muted-foreground">Complimentary consultations</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Our Treatments"
            title="Premium Aesthetic Services"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {treatments.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              >
                <h3 className="font-serif text-2xl text-gold mb-6 pb-4 border-b border-ivory/10">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name}>
                      <h4 className="font-serif text-lg text-ivory mb-2">
                        {item.name}
                      </h4>
                      <p className="text-ivory/60 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
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
              Ready for Your Aesthetic Journey?
            </h2>
            <p className="body-large mb-8">
              Schedule a complimentary consultation to discuss your goals and 
              create a personalized treatment plan.
            </p>
            <Link to="/contact">
              <Button variant="gold" size="xl" className="gap-2">
                Book Free Consultation
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Aesthetics;
