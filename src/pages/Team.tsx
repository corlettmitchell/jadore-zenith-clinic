import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/shared/SectionHeading";
import teamDoctor from "@/assets/team-doctor.jpg";
import teamNurse from "@/assets/team-nurse.jpg";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Medical Director",
    credentials: "MD, Board Certified in Internal Medicine",
    image: teamDoctor,
    bio: "Dr. Mitchell brings over 15 years of experience in hormone optimization and regenerative medicine. After witnessing the limitations of conventional medicine, she founded J'adore Wellness to provide the personalized, proactive care her patients deserve. She is passionate about helping patients achieve optimal health through evidence-based protocols tailored to individual needs.",
    specialties: ["Hormone Optimization", "Regenerative Medicine", "Preventive Care"],
  },
  {
    name: "Jennifer Adams",
    role: "Nurse Practitioner",
    credentials: "NP-C, MSN, Board Certified",
    image: teamNurse,
    bio: "Jennifer specializes in aesthetic medicine and IV therapy, combining her nursing expertise with advanced training in cosmetic procedures. She is known for her gentle technique and artistic eye, helping patients achieve natural-looking results. Her approach focuses on enhancing each patient's unique features while prioritizing safety and comfort.",
    specialties: ["Aesthetic Medicine", "IV Therapy", "Injectables"],
  },
];

const Team = () => {
  return (
    <Layout>
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

      {/* Team Members */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="space-y-24">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
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
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-luxury-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  </div>
                  {/* Decorative */}
                  <div className={`absolute -top-4 ${index % 2 === 1 ? "-left-4" : "-right-4"} w-24 h-24 border-2 border-gold/30 rounded-sm -z-10`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <span className="inline-block text-sm font-sans uppercase tracking-[0.15em] text-gold mb-2">
                    {member.role}
                  </span>
                  <h2 className="heading-section mb-2">{member.name}</h2>
                  <p className="text-muted-foreground text-sm mb-6">{member.credentials}</p>
                  
                  <p className="body-large mb-6">{member.bio}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-serif text-lg text-foreground mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link to="/contact">
                      <Button variant="gold" size="lg" className="gap-2">
                        Book with {member.name.split(" ")[0]}
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
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
