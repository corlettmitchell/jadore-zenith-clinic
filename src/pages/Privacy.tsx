import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";



const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information you provide directly to us when you complete intake forms, contact us, schedule a consultation, or otherwise communicate with J'adore Wellness. This may include your name, email address, phone number, date of birth, health history, and any details you choose to share in free-text fields.",
      "We also collect limited technical information automatically when you visit our website, such as your browser type, device information, referring pages, and general usage patterns through standard analytics tools.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information you provide to respond to inquiries, schedule and manage appointments, deliver and coordinate care, send appointment reminders or follow-ups, and improve our services. We do not sell your personal information.",
    ],
  },
  {
    title: "Information Sharing",
    body: [
      "We share your information only with members of our care team, with service providers who help us operate our practice (such as scheduling, email, and form processing tools), and when required by law. We do not share your information with advertisers.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use industry-standard safeguards, including SSL encryption for data transmitted through our website, and limit internal access to your information to authorized personnel. No method of transmission or storage is 100% secure, but we work to protect your information using reasonable administrative, technical, and physical measures.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information we hold about you, subject to applicable legal and recordkeeping requirements. To make a request, please contact us using the details below.",
      "If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how it is used, and the right to request deletion.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "Our website uses cookies and similar technologies to remember your preferences, understand how the site is used, and improve performance. You can control cookies through your browser settings; disabling cookies may affect site functionality.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Our intake and contact forms submit data through Google services so that our team can receive and review your information. By submitting a form, you acknowledge that information you provide will be transmitted to and stored by these third-party services in accordance with their respective privacy policies.",
      "Our website may also link to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to review their policies.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our services after changes are posted constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact Us",
    body: [
      "If you have questions about this Privacy Policy or how we handle your information, please contact us:",
      "J'adore Wellness\n1763 Oceanside Blvd, Suite B\nOceanside, CA 92054\nPhone: (442) 221-1138\nEmail: info@jadorewellness.com",
    ],
  },
];

const Privacy = () => {
  return (
    <Layout>
      <SEO {...seoData.privacy} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-luxury">
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4">
              Legal
            </span>
            <h1 className="heading-display text-ivory mb-6">Privacy Policy</h1>
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
              J'adore Wellness ("we," "us," or "our") respects your privacy
              and is committed to protecting the personal information you
              share with us. This Privacy Policy explains what information we
              collect, how we use it, and the choices you have.
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

export default Privacy;
