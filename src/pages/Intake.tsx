import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/jadore-logo.png";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyGV_Hl1g0nJePL-ARIEsMIPHXOwcu0-tpW2tGo1rF3Pv6KtWE-4J0JOl7Xjso8QFhcJA/exec";

const Intake = () => {
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
      <SEO {...seoData.intake} />
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-luxury">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <img src={logo} alt="J'adore Wellness" className="h-16 mx-auto mb-8" />
            <h1 className="heading-display text-ivory mb-4">
              Secure Patient Intake
            </h1>
            <p className="text-ivory/80 text-lg leading-relaxed">
              Welcome to J'adore Wellness. Please complete the intake form below 
              to begin your wellness journey with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-6 bg-charcoal-light/30 border-y border-ivory/10">
        <div className="container-luxury">
          <div className="flex flex-wrap items-center justify-center gap-8 text-ivory/60 text-sm">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-gold" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={18} className="text-gold" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-gold" />
              <span>Protected Health Information</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section className="section-padding bg-background">
        <div className="container-luxury max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-sm p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="heading-section mb-4">New Patient Registration</h2>
              <p className="body-regular max-w-xl mx-auto">
                Please provide the following information to help us prepare for 
                your consultation. All information is kept strictly confidential.
              </p>
            </div>

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
                  Your intake form has been submitted. A member of our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-border pb-8">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    1. Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-sans text-foreground mb-2">First Name *</label>
                      <Input required maxLength={100} value={form.firstName} onChange={(e) => updateField("firstName", e.target.value)} placeholder="First name" className="bg-card border-border focus:border-gold" />
                    </div>
                    <div>
                      <label className="block text-sm font-sans text-foreground mb-2">Last Name *</label>
                      <Input required maxLength={100} value={form.lastName} onChange={(e) => updateField("lastName", e.target.value)} placeholder="Last name" className="bg-card border-border focus:border-gold" />
                    </div>
                    <div>
                      <label className="block text-sm font-sans text-foreground mb-2">Email *</label>
                      <Input required type="email" maxLength={255} value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="your@email.com" className="bg-card border-border focus:border-gold" />
                    </div>
                    <div>
                      <label className="block text-sm font-sans text-foreground mb-2">Phone *</label>
                      <Input required type="tel" maxLength={20} value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="(555) 555-5555" className="bg-card border-border focus:border-gold" />
                    </div>
                  </div>
                </div>

                <div className="border-b border-border pb-8">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    2. Service Interest
                  </h3>
                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">Which service are you interested in?</label>
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
                </div>

                <div className="pb-4">
                  <h3 className="font-serif text-xl text-foreground mb-4">
                    3. Current Symptoms & Goals
                  </h3>
                  <div>
                    <label className="block text-sm font-sans text-foreground mb-2">Tell us about your health goals and any symptoms</label>
                    <Textarea
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      maxLength={1000}
                      placeholder="Describe your health goals, current symptoms, or anything you'd like us to know..."
                      rows={5}
                      className="bg-card border-border focus:border-gold resize-none"
                    />
                  </div>
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Intake Form"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Intake;
