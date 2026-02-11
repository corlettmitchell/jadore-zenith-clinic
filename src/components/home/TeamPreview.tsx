import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

const team = [
  {
    name: "Dr. [Name]",
    role: "Medical Director",
    credentials: "MD, Board Certified",
    specialty: "Hormone Optimization & Regenerative Medicine",
  },
  {
    name: "[Name]",
    role: "Nurse Practitioner",
    credentials: "NP-C, MSN",
    specialty: "Peptide Therapy & Weight Management",
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
            Meet The Experts
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
                {/* Silhouette Placeholder */}
                <div className="relative aspect-[3/4] overflow-hidden bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                      <User size={64} className="text-muted-foreground/40" />
                    </div>
                    <p className="text-xs text-muted-foreground/60 font-sans uppercase tracking-wider">
                      Photo Coming Soon
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
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
                  <p className="text-sm font-sans text-muted-foreground">
                    <span className="text-gold font-medium">Specialty:</span>{" "}
                    {member.specialty}
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
