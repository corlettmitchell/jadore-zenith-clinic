import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";

const sections = [
  {
    title: "Agreement to Terms",
    body: [
      "By accessing and using the J'adore Wellness website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
    ],
  },
  {
    title: "Services Description",
    body: [
      "J'adore Wellness provides wellness and medical services including hormone replacement therapy, peptide therapy, weight care programs, and recovery therapies. Our services are provided by licensed medical professionals and are subject to professional standards and applicable laws.",
      "All services require a consultation and medical evaluation. We reserve the right to refuse service to anyone for medical or other appropriate reasons.",
    ],
  },
  {
    title: "Medical Disclaimer",
    body: [
      "The information on this website is for informational purposes only and does not constitute medical advice. Our services are not intended to diagnose, treat, cure, or prevent any disease. Always seek the advice of a qualified healthcare provider with any questions you may have regarding a medical condition.",
      "Individual results may vary. Testimonials and before-and-after results are not guarantees of similar outcomes.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on this website, including text, graphics, logos, images, and software, is the property of J'adore Wellness or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.",
    ],
  },
  {
    title: "User Conduct",
    body: [
      "You agree to use our website and services only for lawful purposes. You may not use our site in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of the website.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, J'adore Wellness and its officers, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website or services.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any dispute arising under these terms shall be subject to the exclusive jurisdiction of the courts located in San Diego County, California.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms of Service from time to time. Any changes will be posted on this page. Your continued use of our website and services after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about these Terms of Service, please contact us:",
      "J'adore Wellness\n1763 Oceanside Blvd, Suite B\nOceanside, CA 92054\nPhone: (442) 221-1138\nEmail: info@jadorewellness.com",
    ],
  },
];

const Terms = () => {
  return (
    <Layout>
      <SEO {...seoData.terms} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-luxury">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="heading-display text-ivory mb-6">Terms of Service</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="body-large mb-12"
            >
              Please read these Terms of Service carefully before using the
              J'adore Wellness website or engaging our services. These terms
              govern your access to and use of our website and services.
            </motion.p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.body.map((paragraph, i) => (
                      <p
                        key={i}
                        className="body-regular whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
