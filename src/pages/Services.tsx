import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Syringe, Droplets, TrendingDown, FlaskConical } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import hormoneImage from "@/assets/service-hormone.jpg";
import ivImage from "@/assets/service-iv.jpg";
import weightlossImage from "@/assets/service-weightloss.jpg";
import clinicLobbyImage from "@/assets/clinic-lobby.jpg";

const services = [
  {
    id: "hormone-therapy",
    icon: Syringe,
    title: "Hormone Replacement Therapy",
    tagline: "HRT · Physician-Led",
    description:
      "Bioidentical hormone optimization for men and women, overseen by board-certified physicians. Built on diagnostics, refined dosing, and structured follow-up.",
    benefits: [
      "Comprehensive hormone panel review",
      "Personalized protocols for men and women",
      "Physician-led dosing and titration",
      "Ongoing labs and follow-up visits",
      "Energy, mood, and body composition support",
    ],
    image: hormoneImage,
    link: "/hormone-therapy",
  },
  {
    id: "peptide-therapy",
    icon: Droplets,
    title: "Peptide Therapy",
    tagline: "Regenerative Consultation",
    description:
      "Advanced peptide protocols for cellular optimization, tissue healing, hormone support, and longevity. Physician-supervised and tailored to your health goals.",
    benefits: [
      "Enhanced cellular regeneration",
      "Improved immune function",
      "Increased energy and vitality",
      "Accelerated recovery",
      "Longevity and performance support",
    ],
    image: ivImage,
    link: "/services/peptide-therapy",
  },
  {
    id: "weight-loss",
    icon: TrendingDown,
    title: "Weight Care",
    tagline: "Medical Weight Management",
    description:
      "Physician-supervised weight management using evidence-based medical protocols, personalized metabolic testing, and ongoing physician monitoring.",
    benefits: [
      "Physician-prescribed medical protocols",
      "Personalized metabolic testing",
      "Appetite regulation",
      "Lean muscle preservation",
      "Ongoing physician monitoring",
    ],
    image: weightlossImage,
    link: "/services/weight-loss",
  },
  {
    id: "bloodwork",
    icon: FlaskConical,
    title: "In-House Bloodwork",
    tagline: "Diagnostics + Consultation",
    description:
      "Comprehensive blood panels and physician consultation, performed in-clinic. The clearest first step toward understanding your health.",
    benefits: [
      "Comprehensive blood panel",
      "Physician-led results review",
      "Clear next-step recommendations",
      "In-clinic, no extra lab visit",
      "Foundation for any wellness program",
    ],
    image: clinicLobbyImage,
    link: "/bloodwork",
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO {...seoData.services} />
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
              Our Services
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Physician-Led Wellness Programs
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Hormone therapy, medically guided weight care, peptide consultation,
              and in-house bloodwork — all built on diagnostics and structured
              physician follow-up.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center">
                      <service.icon size={24} className="text-charcoal" />
                    </div>
                  </div>
                  <div className={`absolute -bottom-4 ${index % 2 === 1 ? "-right-4" : "-left-4"} w-32 h-32 bg-gold/5 rounded-sm -z-10`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="inline-block text-sm font-sans uppercase tracking-[0.15em] text-gold mb-2">
                    {service.tagline}
                  </span>
                  <h2 className="heading-section mb-4">{service.title}</h2>
                  <p className="body-large mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={service.link}>
                    <Button variant="gold" size="lg" className="gap-2">
                      Learn More
                      <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-section mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="body-large mb-8">
              Our physicians will help you determine which program fits your
              goals. Schedule a consultation to build your personalized plan.
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

export default Services;
