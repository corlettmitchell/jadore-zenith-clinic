import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import teamDoctor from "@/assets/team-doctor.jpg";
import teamNurse from "@/assets/team-nurse.jpg";

const team = [
  {
    name: "Dr. [Name]",
    role: "Medical Director",
    credentials: "MD, Board Certified",
    image: teamDoctor,
    bio: "[Bio placeholder - Add your medical director's background, experience, and passion for wellness medicine here. Include their journey to founding J'adore Wellness and their approach to patient care.]",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
  },
  {
    name: "[Name]",
    role: "Nurse Practitioner",
    credentials: "NP-C, MSN",
    image: teamNurse,
    bio: "[Bio placeholder - Add your nurse practitioner's experience, areas of expertise, and approach to patient care here. Highlight their training and what makes them passionate about helping patients.]",
    specialties: ["Specialty 1", "Specialty 2", "Specialty 3"],
  },
];

const Team = () => {
  return (
    <Layout>
      <SEO {...seoData.team} />
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
              Our Experts
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Meet Your Care Team
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Our team combines decades of medical expertise with a genuine 
              commitment to your health and wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Coming Soon */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="body-large text-muted-foreground">
              Our team profiles are coming soon. In the meantime, reach out to us directly — we'd love to connect.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button variant="gold" size="lg" className="gap-2">
                  Contact Us
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </motion.div>
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
              Ready to Meet Your Provider?
            </h2>
            <p className="body-large mb-8">
              Schedule your consultation and start your journey to 
              optimal health with our expert team.
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

export default Team;
