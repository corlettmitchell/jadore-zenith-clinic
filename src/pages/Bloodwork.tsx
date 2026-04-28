import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Loader2,
  Droplet,
  Stethoscope,
  ClipboardList,
  CalendarCheck,
  MapPin,
  Phone,
  UserRound,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import { toast } from "@/hooks/use-toast";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyGV_Hl1g0nJePL-ARIEsMIPHXOwcu0-tpW2tGo1rF3Pv6KtWE-4J0JOl7Xjso8QFhcJA/exec";

const scrollToForm = () => {
  const el = document.getElementById("bloodwork-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const LeadForm = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    preferredTime: "",
  });

  const update = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      toast({
        title: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.name.trim(),
          lastName: "",
          email: form.email.trim(),
          phone: form.phone.trim(),
          serviceInterest: "Bloodwork + Consultation",
          message: form.preferredTime
            ? `Preferred appointment time: ${form.preferredTime}`
            : "Bloodwork landing page lead",
        }),
      });
      setSubmitted(true);
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const labelClass =
    variant === "dark"
      ? "block text-xs font-sans uppercase tracking-[0.15em] text-ivory/80 mb-2"
      : "block text-xs font-sans uppercase tracking-[0.15em] text-foreground/80 mb-2";

  const inputClass =
    variant === "dark"
      ? "bg-charcoal/40 border-gold/30 text-ivory placeholder:text-ivory/40 focus:border-gold"
      : "bg-card border-border focus:border-gold";

  if (submitted) {
    return (
      <div
        className={
          variant === "dark"
            ? "bg-charcoal/40 border border-gold/30 rounded-sm p-10 text-center"
            : "bg-secondary/50 border border-gold/20 rounded-sm p-10 text-center"
        }
      >
        <CheckCircle size={44} className="text-gold mx-auto mb-4" />
        <h3
          className={`font-serif text-2xl mb-2 ${
            variant === "dark" ? "text-ivory" : "text-foreground"
          }`}
        >
          Thank You
        </h3>
        <p
          className={
            variant === "dark"
              ? "text-ivory/75 text-sm"
              : "body-regular text-sm"
          }
        >
          A member of our team will reach out shortly to confirm your
          appointment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Name *</label>
        <Input
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Phone *</label>
          <Input
            required
            type="tel"
            maxLength={20}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 555-5555"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <Input
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Preferred appointment time{" "}
          <span className="opacity-60 normal-case tracking-normal">
            (optional)
          </span>
        </label>
        <Input
          maxLength={120}
          value={form.preferredTime}
          onChange={(e) => update("preferredTime", e.target.value)}
          placeholder="e.g. Weekday mornings"
          className={inputClass}
        />
      </div>

      <Button
        type="submit"
        variant="gold"
        size="xl"
        className="w-full"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get Started"
        )}
      </Button>

      <p
        className={`text-xs text-center ${
          variant === "dark" ? "text-ivory/60" : "text-muted-foreground"
        }`}
      >
        We'll reach out to confirm your appointment and answer any questions.
      </p>
    </form>
  );
};

const Bloodwork = () => {
  return (
    <Layout>
      <SEO
        title="Bloodwork & Physician Consultation - J'adore Wellness Oceanside"
        description="Comprehensive in-person bloodwork and physician consultation at our Oceanside, CA clinic. Real answers, clear next steps. Introductory pricing available."
        canonical="/bloodwork"
        keywords="bloodwork Oceanside, blood panel San Diego, physician consultation, lab work North County, comprehensive blood panel"
      />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-luxury overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(var(--gold)) 0, transparent 40%), radial-gradient(circle at 80% 70%, hsl(var(--gold)) 0, transparent 40%)",
          }}
        />
        <div className="container-luxury relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold-light mb-5">
                Introductory Bloodwork + Consultation
              </span>
              <h1 className="heading-display text-ivory mb-6">
                Still Feel Off?{" "}
                <span className="text-gradient-gold">Get Real Answers</span> —
                In Person
              </h1>
              <p className="text-ivory/80 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                Comprehensive bloodwork and a physician consultation at our
                Oceanside clinic. No guesswork, no generic reports — just clear
                guidance from a real medical team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button
                  variant="gold"
                  size="xl"
                  onClick={scrollToForm}
                  className="w-full sm:w-auto"
                >
                  Get Started
                </Button>
                <a
                  href="tel:+14422211138"
                  className="text-ivory/80 hover:text-gold transition-colors text-sm font-sans inline-flex items-center gap-2"
                >
                  <Phone size={16} className="text-gold" />
                  (442) 221-1138
                </a>
              </div>

              <p className="mt-5 text-ivory/60 text-sm max-w-md">
                Local to North County San Diego. Our team will follow up to
                schedule your visit.
              </p>
            </motion.div>

            {/* Hero form */}
            <motion.div
              id="bloodwork-form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="bg-ivory/5 backdrop-blur-sm border border-gold/30 rounded-sm p-7 md:p-8 shadow-luxury-lg">
                <div className="mb-5 text-center">
                  <span className="inline-block text-[11px] font-sans uppercase tracking-[0.25em] text-gold mb-2">
                    Request Your Visit
                  </span>
                  <h2 className="font-serif text-2xl text-ivory">
                    Claim Your Bloodwork
                  </h2>
                </div>
                <LeadForm variant="dark" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DIFFERENTIATION */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">
                The Difference
              </span>
              <h2 className="heading-section mb-6">
                Not Another Online Lab Report
              </h2>
              <p className="body-regular">
                Most bloodwork services send you results and leave you to
                figure things out on your own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <p className="body-regular mb-6">At J'adore Wellness, you'll:</p>
              <ul className="space-y-4 mb-8">
                {[
                  "Have your labs drawn in person",
                  "Sit down with a physician to review your results",
                  "Get clear next steps based on your goals",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 p-4 bg-secondary/40 border border-border/60 rounded-sm"
                  >
                    <CheckCircle
                      size={20}
                      className="text-gold flex-shrink-0 mt-0.5"
                    />
                    <span className="text-foreground font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-serif italic text-lg text-foreground/80">
                No back-and-forth emails. No guessing what your results mean.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHY THIS MATTERS */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">
              Why It Matters
            </span>
            <h2 className="heading-section mb-6">
              A More Personal, More Accurate Approach
            </h2>
            <p className="body-large mb-4">
              Many people are told their labs are "normal" — even when they
              don't feel their best.
            </p>
            <p className="body-regular">
              We take a closer, more individualized look at your results so you
              can better understand what's actually going on and what to do
              next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — THE OFFER */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">
                The Offer
              </span>
              <h2 className="heading-section mb-6">Start With the Right Data</h2>
              <p className="body-regular max-w-2xl mx-auto">
                Your first step is a comprehensive blood panel paired with a
                one-on-one consultation. This allows our team to better
                understand what's going on internally and guide you toward the
                right next steps.
              </p>
            </div>

            <div className="relative bg-card border border-gold/30 rounded-sm p-8 md:p-12 shadow-luxury-lg">
              <div
                aria-hidden
                className="absolute -inset-px rounded-sm pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--gold) / 0.4), transparent 40%, transparent 60%, hsl(var(--gold) / 0.4))",
                  WebkitMask:
                    "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: 1,
                }}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-gold mb-5">
                    What's Included
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Droplet, text: "Comprehensive blood panel" },
                      {
                        icon: Stethoscope,
                        text: "In-person consultation with a physician",
                      },
                      {
                        icon: ClipboardList,
                        text: "Review of results and next steps",
                      },
                    ].map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <span className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                          <Icon size={16} className="text-gold" />
                        </span>
                        <span className="text-foreground font-sans pt-1.5">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center md:border-l md:border-border/60 md:pl-10">
                  <span className="text-xs font-sans uppercase tracking-[0.25em] text-gold mb-3">
                    Introductory Pricing
                  </span>
                  <p className="font-serif text-3xl md:text-4xl text-foreground mb-3">
                    $99 – $149
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Depending on program selection.
                  </p>
                  <Button variant="gold" size="lg" onClick={scrollToForm}>
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS */}
      <section className="py-20 md:py-24 bg-secondary/40">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">
              The Process
            </span>
            <h2 className="heading-section">Simple, Guided Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Submit Your Information",
                body: "Tell us a bit about yourself to get started.",
              },
              {
                icon: CalendarCheck,
                title: "We Schedule Your Visit",
                body: "Our team will contact you to coordinate your visit.",
              },
              {
                icon: MapPin,
                title: "Visit the Clinic",
                body: "Come into our Oceanside location for your bloodwork.",
              },
              {
                icon: ClipboardList,
                title: "Review Your Results",
                body: "Sit down with a physician to go over your results and next steps.",
              },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-background border border-border/60 rounded-sm p-6 hover:border-gold/40 transition-colors"
              >
                <span className="absolute top-4 right-5 font-serif text-sm text-gold/60 tracking-widest">
                  0{i + 1}
                </span>
                <span className="inline-flex w-12 h-12 rounded-full bg-gold/10 border border-gold/30 items-center justify-center mb-5">
                  <step.icon size={20} className="text-gold" />
                </span>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — TRUST / AUTHORITY */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-gold mb-4">
              Physician-Led Care
            </span>
            <h2 className="heading-section mb-6">
              Local, Physician-Led Care in Oceanside
            </h2>
            <p className="body-regular">
              J'adore Wellness is a physician-led clinic serving North County
              San Diego, focused on helping patients better understand their
              health through structured, in-person care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Oleg Ryabinin, MD",
                blurb:
                  "Board-certified physician with a background in surgical and metabolic health.",
              },
              {
                name: "Dr. Jim O'Loughlin, DO",
                blurb:
                  "Board-certified physician focused on hormone health and performance optimization.",
              },
            ].map((doc) => (
              <div
                key={doc.name}
                className="bg-secondary/40 border border-border/60 rounded-sm p-7 flex items-start gap-5 hover:border-gold/40 transition-colors"
              >
                <span className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0 border border-gold/30">
                  <UserRound size={24} className="text-gold" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-gold" />
              1763 Oceanside Blvd, Suite B · Oceanside, CA 92054
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="relative py-20 md:py-28 bg-gradient-luxury overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, hsl(var(--gold)) 0, transparent 50%)",
          }}
        />
        <div className="container-luxury relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="heading-section text-ivory mb-6">
              Start With <span className="text-gradient-gold">Clarity</span>
            </h2>
            <p className="text-ivory/80 text-lg leading-relaxed mb-8">
              Take the first step toward understanding your health with a simple
              blood panel and consultation.
            </p>
            <Button variant="gold" size="xl" onClick={scrollToForm}>
              Claim Your Bloodwork
            </Button>
            <p className="mt-5 text-ivory/60 text-sm">
              Our team will follow up shortly to schedule your visit.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Bloodwork;
