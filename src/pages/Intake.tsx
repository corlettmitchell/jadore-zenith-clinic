import { motion } from "framer-motion";
import { Shield, Lock, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";
import logo from "@/assets/jadore-logo.png";

const Intake = () => {
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

      {/* Intake Form Placeholder */}
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

            {/* Form Sections Preview */}
            <div className="space-y-8">
              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  1. Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                </div>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  2. Medical History
                </h3>
                <div className="space-y-4">
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                  <div className="h-24 bg-secondary/50 rounded-sm animate-pulse" />
                </div>
              </div>

              <div className="border-b border-border pb-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  3. Current Symptoms & Goals
                </h3>
                <div className="space-y-4">
                  <div className="h-24 bg-secondary/50 rounded-sm animate-pulse" />
                  <div className="h-24 bg-secondary/50 rounded-sm animate-pulse" />
                </div>
              </div>

              <div className="pb-4">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  4. Insurance & Consent
                </h3>
                <div className="space-y-4">
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                  <div className="h-10 bg-secondary/50 rounded-sm animate-pulse" />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-gold/10 text-gold px-6 py-4 rounded-sm">
                <Lock size={20} />
                <span className="font-sans">
                  Secure form submission coming soon
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                For immediate assistance, please call us at (502) 555-0123 
                or email info@jadorewellness.com
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Intake;
