import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Syringe, Droplets, Sparkles, Gauge, Snowflake, Sun } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import PartnerRedirectModal from "@/components/shared/PartnerRedirectModal";
import hormoneImage from "@/assets/service-hormone.jpg";
import ivImage from "@/assets/service-iv.jpg";
import aestheticsImage from "@/assets/service-aesthetics.jpg";
import compressionImage from "@/assets/service-compression.jpg";
import coldPlungeImage from "@/assets/service-coldplunge.jpg";
import saunaImage from "@/assets/service-sauna.jpg";

const services = [
  {
    title: "Hormone Replacement Therapy",
    description: "Restore optimal hormone levels for renewed vitality and wellness.",
    icon: Syringe,
    image: hormoneImage,
    link: "/hormone-therapy",
    isPartner: false,
  },
  {
    title: "Peptides & IV Therapy",
    description: "Advanced regenerative protocols for cellular optimization.",
    icon: Droplets,
    image: ivImage,
    link: "/services",
    isPartner: false,
  },
  {
    title: "Aesthetics",
    description: "Premium aesthetic treatments for natural, refined results.",
    icon: Sparkles,
    image: aestheticsImage,
    link: "/aesthetics",
    isPartner: false,
  },
  {
    title: "Compression Therapy",
    description: "Accelerate recovery and enhance circulation.",
    icon: Gauge,
    image: compressionImage,
    link: "/services",
    isPartner: false,
  },
  {
    title: "Cold Plunge",
    description: "Boost metabolism and reduce inflammation naturally.",
    icon: Snowflake,
    image: coldPlungeImage,
    link: "/services/cold-plunge",
    isPartner: true,
  },
  {
    title: "Infrared Sauna",
    description: "Deep detoxification and relaxation therapy.",
    icon: Sun,
    image: saunaImage,
    link: "/services/sauna",
    isPartner: true,
  },
];

const CoreServices = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleServiceClick = (service: typeof services[0], e: React.MouseEvent) => {
    if (service.isPartner) {
      e.preventDefault();
      setSelectedService(service.title);
      setModalOpen(true);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Wellness Solutions"
          description="From hormone optimization to cutting-edge aesthetics, discover treatments designed to transform how you look and feel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                onClick={(e) => handleServiceClick(service, e)}
                className="group block card-luxury h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                  <service.icon
                    size={32}
                    className="absolute bottom-4 left-4 text-gold"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-card text-foreground group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="body-regular mt-2 mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-sans text-gold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <PartnerRedirectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        serviceName={selectedService}
      />
    </section>
  );
};

export default CoreServices;
