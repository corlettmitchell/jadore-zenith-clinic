import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, TrendingDown, Snowflake, Sun } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import PartnerRedirectModal from "@/components/shared/PartnerRedirectModal";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import ivImage from "@/assets/service-iv.jpg";
import weightlossImage from "@/assets/service-weightloss.jpg";
import coldPlungeImage from "@/assets/service-coldplunge.jpg";
import saunaImage from "@/assets/service-sauna.jpg";

const services = [
  {
    id: "peptide-therapy",
    icon: Droplets,
    title: "Peptide Therapy",
    tagline: "Regenerative Medicine",
    description: "Advanced peptide protocols for cellular optimization, tissue healing, hormone support, and anti-aging. Our physician-supervised protocols are tailored to your unique health goals.",
    benefits: [
      "Enhanced cellular regeneration",
      "Improved immune function",
      "Increased energy and vitality",
      "Accelerated recovery",
      "Anti-aging support",
    ],
    image: ivImage,
    isPartner: false,
    link: "/services/peptide-therapy",
  },
  {
    id: "weight-loss",
    icon: TrendingDown,
    title: "Weight Loss",
    tagline: "Medical Weight Management",
    description: "Physician-supervised weight loss programs featuring Semaglutide, Tirzepatide, and personalized metabolic protocols for sustainable, lasting results.",
    benefits: [
      "Semaglutide & Tirzepatide protocols",
      "Personalized metabolic testing",
      "Appetite regulation",
      "Lean muscle preservation",
      "Ongoing physician monitoring",
    ],
    image: weightlossImage,
    isPartner: false,
    link: "/services/weight-loss",
  },
  {
    id: "cold-plunge",
    icon: Snowflake,
    title: "Cold Plunge Therapy",
    tagline: "Metabolic Activation",
    description: "Cold water immersion therapy to boost metabolism, reduce inflammation, and enhance mental clarity through controlled cold exposure.",
    benefits: [
      "Increased metabolism",
      "Reduced inflammation",
      "Enhanced mental clarity",
      "Improved mood",
      "Better sleep quality",
    ],
    image: coldPlungeImage,
    isPartner: true,
  },
  {
    id: "infrared-sauna",
    icon: Sun,
    title: "Infrared Sauna",
    tagline: "Deep Detoxification",
    description: "Far-infrared sauna sessions for deep tissue heating, detoxification, and relaxation without the extreme temperatures of traditional saunas.",
    benefits: [
      "Deep detoxification",
      "Pain relief",
      "Skin rejuvenation",
      "Stress reduction",
      "Cardiovascular support",
    ],
    image: saunaImage,
    isPartner: true,
  },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleBooking = (service: typeof services[0]) => {
    if (service.isPartner) {
      setSelectedService(service.title);
      setModalOpen(true);
    }
  };

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
              Comprehensive Wellness Therapies
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              From cutting-edge regenerative treatments to medical weight loss 
              and recovery therapies, discover our full range of wellness services 
              designed to optimize your health and performance.
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

                  {service.isPartner ? (
                    <Button 
                      variant="gold" 
                      size="lg" 
                      className="gap-2"
                      onClick={() => handleBooking(service)}
                    >
                      Book Session
                      <ArrowRight size={18} />
                    </Button>
                  ) : service.link ? (
                    <Link to={service.link}>
                      <Button variant="gold" size="lg" className="gap-2">
                        Learn More
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/contact">
                      <Button variant="gold" size="lg" className="gap-2">
                        Learn More
                        <ArrowRight size={18} />
                      </Button>
                    </Link>
                  )}
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
              Our team will help you determine which treatments are best suited 
              for your goals. Schedule a consultation to create your personalized 
              wellness plan.
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

      <PartnerRedirectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService}
        partnerUrl="https://bellalongevityspa.com/?srsltid=AfmBOopuTglJHLU1fbvYLJ4foozrYLrZfIYu0hy7ZiG-qvuFfv8XskE0"
      />
    </Layout>
  );
};

export default Services;
