import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import teamDoctor from "@/assets/team-doctor.jpg";
import teamKaty from "@/assets/team-katy.png";

const founder = {
  name: "Dr. Oleg Ryabinin, MD",
  title: "Founder & Medical Director",
  image: teamDoctor,
  bio: [
    "Dr. Oleg Ryabinin is a board-certified general surgeon who completed seven years of rigorous post-graduate surgical training following medical school. His training includes extensive experience in bariatric and metabolic surgery, as well as endocrine surgery—providing a strong foundation in weight regulation, hormonal physiology, and metabolic health.",
    "Through this background, Dr. Ryabinin developed a deep understanding of the complex interplay between hormones, body composition, and long-term health—including the hypothalamic-pituitary-gonadal axis, thyroid function, and metabolic adaptation. This expertise forms the backbone of his clinical approach to hormone optimization and medical weight loss.",
    "After personally experiencing the physical toll of surgical training, including significant weight gain and injury, he applied these principles to his own health—successfully losing nearly 70 pounds through structured hormone optimization, GLP-1–based therapy, and targeted lifestyle interventions.",
    "Today, Dr. Ryabinin brings both clinical expertise and personal experience to J'adore Wellness, delivering evidence-based hormone therapy and medical weight loss programs designed to help patients restore energy, optimize performance, and achieve sustainable results.",
  ],
};

const teamMembers = [
  {
    name: "Dr. Jim O'Loughlin, DO",
    title: "Staff Physician",
    image: teamDoctor,
    bio: [
      "Dr. O'Loughlin is a board-certified surgeon whose extensive surgical training gave him a deep appreciation for the complexity of the human body and its remarkable capacity for recovery and optimization. With a clinical foundation rooted in anatomy, physiology, and metabolic health, Dr. O'Loughlin brings a surgeon's precision and evidence-based thinking to every patient interaction.",
      "Over the course of his career, Dr. O'Loughlin found himself increasingly drawn to a question that traditional medicine rarely stops to ask: what does it actually look like to feel your best? Guiding family and friends through their own health optimization journeys gave him a firsthand view of what becomes possible when hormonal balance, body composition, and lifestyle are addressed together — and it redirected the course of his practice.",
      "Today, Dr. O'Loughlin puts that experience to work at J'adore Wellness, where he specializes in personalized hormone therapy, peptide therapy, and medical weight optimization. He believes that while conventional medicine excels at treating disease, it isn't currently ideal at helping people thrive — and that the tools to do so are available for those ready to pursue them. His approach pairs clinical rigor with genuine curiosity about each patient's goals, helping them restore energy, reclaim vitality, and build a foundation for long-term health.",
    ],
  },
  {
    name: "Katy Ouellette",
    title: "General Manager",
    image: teamKaty,
    bio: [
      "With over 20 years of experience in medicine, Katy Ouellette brings extensive real-world experience in health, performance, and recovery to J'adore Wellness. A lifelong athlete, she has worked closely with professional bodybuilders and performance-driven individuals, gaining firsthand insight into what it takes to train hard, recover effectively, and achieve lasting results.",
      "Katy believes in a functional approach to medicine — focusing on identifying root causes and creating strategies that transform the body, not just manage symptoms. Her approach centers on helping individuals optimize their health, performance, and recovery so they can feel and function at their best.",
    ],
  },
];

const Team = () => {
  return (
    <Layout>
      <SEO {...seoData.team} />

      {/* Intro Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-luxury">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold mb-5">
              Meet the Team
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-medium leading-[1.1] tracking-tight text-foreground mb-6">
              The People Behind{" "}
              <span className="italic">J'adore Wellness</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              At J'adore Wellness, our team combines clinical expertise with a
              personalized, whole-body approach to health, recovery, and
              optimization. Get to know the professionals helping guide your
              wellness journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Founder */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="lg:order-1"
              >
                <div className="relative">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-28 h-28 border border-gold/20 rounded-xl -z-10" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="flex flex-col justify-center lg:order-2"
              >
                <div className="lg:py-4">
                  <h2 className="font-serif text-[2rem] md:text-[2.6rem] lg:text-[2.8rem] font-medium tracking-tight text-foreground mb-2 leading-[1.1]">
                    {founder.name}
                  </h2>
                  <p className="text-sm font-sans uppercase tracking-[0.18em] text-gold mb-8">
                    {founder.title}
                  </p>
                  <div className="space-y-5">
                    {founder.bio.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-base md:text-[1.05rem] leading-[1.8] text-muted-foreground font-sans"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center pb-20 md:pb-28">
        <div className="w-16 h-px bg-gold/30" />
      </div>

      {/* Team Members */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="container-luxury">
          <div className="space-y-20 md:space-y-32">
            {teamMembers.map((member, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                >
                  {/* Subtle top divider for second member onward */}
                  {index > 0 && (
                    <div className="flex justify-center mb-20 md:mb-32">
                      <div className="w-16 h-px bg-gold/30" />
                    </div>
                  )}

                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start ${
                      isReversed ? "lg:direction-rtl" : ""
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.15,
                        ease: "easeOut",
                      }}
                      className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                    >
                      <div className="relative">
                        <div className="aspect-[3/4] overflow-hidden rounded-xl">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-center"
                            loading={index === 0 ? "eager" : "lazy"}
                          />
                        </div>
                        {/* Subtle decorative accent */}
                        <div
                          className={`absolute -bottom-3 ${
                            isReversed ? "-left-3" : "-right-3"
                          } w-24 h-24 border border-gold/20 rounded-xl -z-10`}
                        />
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.25,
                        ease: "easeOut",
                      }}
                      className={`flex flex-col justify-center ${
                        isReversed ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="lg:py-4">
                        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-2">
                          {member.name}
                        </h2>
                        <p className="text-sm font-sans uppercase tracking-[0.18em] text-gold mb-8">
                          {member.title}
                        </p>
                        <div className="space-y-5">
                          {member.bio.map((paragraph, pIndex) => (
                            <p
                              key={pIndex}
                              className="text-base md:text-[1.05rem] leading-[1.8] text-muted-foreground font-sans"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
