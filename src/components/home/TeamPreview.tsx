import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import teamDoctor from "@/assets/team-doctor.jpg";
import teamNurse from "@/assets/team-nurse.jpg";

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Medical Director",
    credentials: "MD, Board Certified",
    image: teamDoctor,
    bio: "Specializing in hormone optimization and regenerative medicine with over 15 years of experience.",
  },
  {
    name: "Jennifer Adams",
    role: "Nurse Practitioner",
    credentials: "NP-C, MSN",
    image: teamNurse,
    bio: "Expert in aesthetic medicine and IV therapy with a focus on personalized patient care.",
  },
];

const TeamPreview = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
            Your Care Team
          </span>
          <h2 className="heading-section">
            Meet Our Experts
          </h2>
          <p className="body-large mt-6 max-w-2xl mx-auto">
            Our team combines decades of medical expertise with a genuine passion 
            for helping you achieve your wellness goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-luxury overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-ivory mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm font-sans mb-1">
                      {member.role}
                    </p>
                    <p className="text-ivory/60 text-sm font-sans">
                      {member.credentials}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="body-regular">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-gold font-sans hover:gap-3 transition-all"
          >
            View Full Team
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
