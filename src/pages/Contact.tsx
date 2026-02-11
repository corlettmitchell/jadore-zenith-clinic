import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Google Sheet
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEO {...seoData.contact} />
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
              Contact Us
            </span>
            <h1 className="heading-display text-ivory mb-6">
              Begin Your Journey
            </h1>
            <p className="text-ivory/80 text-lg md:text-xl leading-relaxed">
              Ready to experience personalized wellness care? Reach out to 
              schedule your consultation or ask any questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-section mb-6">Get In Touch</h2>
              <p className="body-regular mb-8">
                Fill out the form below and a member of our team will 
                contact you shortly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-secondary/50 border border-gold/20 rounded-sm p-12 text-center"
                >
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-foreground mb-2">
                    Thank You
                  </h3>
                  <p className="body-regular">
                    A member of our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-sans text-foreground mb-2">
                        First Name *
                      </label>
                      <Input 
                        required
                        placeholder="First name" 
                        className="bg-card border-border focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-sans text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input 
                        required
                        placeholder="Last name" 
                        className="bg-card border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">
                      Email *
                    </label>
                    <Input 
                      required
                      type="email"
                      placeholder="your@email.com" 
                      className="bg-card border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      required
                      type="tel"
                      placeholder="(555) 555-5555" 
                      className="bg-card border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">
                      Service Interest
                    </label>
                    <select className="w-full h-10 px-3 bg-card border border-border rounded-md text-sm focus:border-gold focus:outline-none">
                      <option value="">Select a service...</option>
                      <option value="hormone">Hormone Therapy</option>
                      <option value="peptide">Peptide Therapy</option>
                      <option value="weight-loss">Weight Loss</option>
                      <option value="cold-plunge">Cold Plunge Therapy</option>
                      <option value="sauna">Infrared Sauna</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your health goals..."
                      rows={4}
                      className="bg-card border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="xl" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="heading-section mb-6">Visit Our Clinic</h2>
              <p className="body-regular mb-8">
                Our clinic is designed for your comfort and privacy. 
                We look forward to welcoming you.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-sm">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      1763 Oceanside Blvd, Suite B<br />
                      Oceanside, CA 92054
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-sm">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">(xxx) xxx-xxxx</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-sm">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@jadorewellness.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary/50 rounded-sm">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
