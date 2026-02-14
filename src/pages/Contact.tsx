import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import { toast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyGV_Hl1g0nJePL-ARIEsMIPHXOwcu0-tpW2tGo1rF3Pv6KtWE-4J0JOl7Xjso8QFhcJA/exec";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  });

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.phone.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          serviceInterest: form.serviceInterest,
          message: form.message.trim(),
        }),
      });
      setSubmitted(true);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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
                        maxLength={100}
                        value={form.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
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
                        maxLength={100}
                        value={form.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
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
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
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
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(555) 555-5555"
                      className="bg-card border-border focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">
                      Service Interest
                    </label>
                    <select
                      value={form.serviceInterest}
                      onChange={(e) => updateField("serviceInterest", e.target.value)}
                      className="w-full h-10 px-3 bg-card border border-border rounded-md text-sm focus:border-gold focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="hormone">Hormone Therapy</option>
                      <option value="peptide">Peptide Therapy</option>
                      <option value="weight-loss">Weight Care</option>
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
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      maxLength={1000}
                      placeholder="Tell us about your health goals..."
                      rows={4}
                      className="bg-card border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button type="submit" variant="gold" size="xl" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
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
                    <p className="text-muted-foreground"><a href="tel:+14422211138" className="hover:text-gold transition-colors">(442) 221-1138</a></p>
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
