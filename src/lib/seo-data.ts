export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  keywords: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: "J'adore Wellness - Hormone Therapy & Wellness Clinic Oceanside CA",
    description:
      "Premium hormone therapy, aesthetics, and wellness services in Oceanside, CA. Personalized HRT, peptide therapy, weight care, cold plunge, infrared sauna, and aesthetic medicine.",
    canonical: "/",
    keywords:
      "hormone therapy Oceanside, HRT San Diego, testosterone therapy, wellness clinic California, hormone optimization, anti-aging clinic",
  },
  hormoneTherapy: {
    title: "Hormone Replacement Therapy (HRT) - J'adore Wellness Oceanside",
    description:
      "Personalized bioidentical hormone replacement therapy in Oceanside, CA. Testosterone, estrogen, thyroid optimization for men and women. Restore vitality and balance.",
    canonical: "/hormone-therapy",
    keywords:
      "hormone replacement therapy, HRT Oceanside, testosterone therapy San Diego, bioidentical hormones, TRT, menopause treatment, hormone optimization",
  },
  peptideTherapy: {
    title: "Peptide Therapy - J'adore Wellness Oceanside CA",
    description:
      "Physician-supervised peptide protocols in Oceanside tailored to cellular regeneration, recovery, and performance.",
    canonical: "/services/peptide-therapy",
    keywords:
      "peptide therapy Oceanside, regenerative medicine Oceanside, peptide therapy San Diego, peptide protocols",
  },
  weightLoss: {
    title: "Weight Care - J'adore Wellness Oceanside CA",
    description:
      "Medical weight care programs in Oceanside using evidence-based, physician-supervised protocols. Achieve sustainable results with personalized metabolic care.",
    canonical: "/services/weight-loss",
    keywords:
      "medical weight care Oceanside, medical weight management Oceanside, metabolic optimization San Diego, weight care clinic California",
  },
  coldPlunge: {
    title: "Cold Plunge Therapy - J'adore Wellness Oceanside CA",
    description:
      "Experience cold water immersion therapy in Oceanside. Boost metabolism, reduce inflammation, enhance mental clarity and recovery with cold plunge.",
    canonical: "/cold-plunge",
    keywords:
      "cold plunge Oceanside, cold water therapy San Diego, ice bath therapy, cryotherapy, inflammation reduction, athletic recovery",
  },
  infraredSauna: {
    title: "Infrared Sauna Therapy - J'adore Wellness Oceanside CA",
    description:
      "Far-infrared sauna therapy in Oceanside for deep detoxification, pain relief, and relaxation. Experience healing heat at comfortable temperatures.",
    canonical: "/infrared-sauna",
    keywords:
      "infrared sauna Oceanside, far infrared therapy San Diego, detox sauna, pain relief sauna, wellness spa California",
  },
  compression: {
    title: "Compression Therapy - J'adore Wellness Oceanside CA",
    description:
      "Professional NormaTec compression therapy in Oceanside. Enhance circulation, reduce muscle soreness, and accelerate recovery like elite athletes.",
    canonical: "/services/compression",
    keywords:
      "compression therapy Oceanside, NormaTec San Diego, lymphatic drainage, muscle recovery, athletic recovery therapy",
  },
  hyperbaricOxygen: {
    title: "Hyperbaric Oxygen Therapy - J'adore Wellness Oceanside CA",
    description:
      "Hyperbaric oxygen therapy (HBOT) in Oceanside. Accelerate healing, reduce inflammation, and enhance recovery with pressurized oxygen therapy.",
    canonical: "/services/hyperbaric-oxygen",
    keywords:
      "hyperbaric oxygen therapy Oceanside, HBOT San Diego, oxygen therapy, wound healing, recovery therapy California",
  },
  floatSpa: {
    title: "Float Spa - Sensory Deprivation Therapy - J'adore Wellness Oceanside CA",
    description:
      "Float spa and sensory deprivation therapy in Oceanside. Experience deep relaxation, stress relief, and pain management in our float tanks.",
    canonical: "/services/float-spa",
    keywords:
      "float spa Oceanside, sensory deprivation San Diego, float tank therapy, REST therapy, Epsom salt float California",
  },
  services: {
    title: "Wellness Services - J'adore Wellness Oceanside CA",
    description:
      "Comprehensive wellness services in Oceanside including peptide therapy, weight care, compression therapy, cold plunge, and infrared sauna. Optimize your health and recovery.",
    canonical: "/services",
    keywords:
      "wellness services Oceanside, recovery therapies San Diego, health optimization, regenerative treatments California",
  },
  aesthetics: {
    title: "Aesthetic Medicine - Botox, Fillers, Microneedling - J'adore Wellness",
    description:
      "Premium aesthetic treatments in Oceanside. Botox, dermal fillers, lip enhancement, microneedling, chemical peels, and body sculpting. Natural-looking results.",
    canonical: "/aesthetics",
    keywords:
      "Botox Oceanside, dermal fillers San Diego, lip fillers, microneedling, chemical peels, aesthetic medicine California",
  },
  about: {
    title: "About J'adore Wellness - Our Mission & Values",
    description:
      "Learn about J'adore Wellness, a premium medical wellness clinic in Oceanside, CA. Discover our mission, values, and commitment to personalized patient care.",
    canonical: "/about",
    keywords:
      "about J'adore Wellness, wellness clinic Oceanside, personalized medicine, integrative health, medical spa California",
  },
  team: {
    title: "Our Medical Team - J'adore Wellness Oceanside",
    description:
      "Meet the expert medical team at J'adore Wellness in Oceanside. Board-certified physicians and nurse practitioners dedicated to your wellness journey.",
    canonical: "/team",
    keywords:
      "wellness doctors Oceanside, hormone therapy physicians, medical team San Diego, nurse practitioners California",
  },
  contact: {
    title: "Contact J'adore Wellness - Schedule Your Consultation",
    description:
      "Contact J'adore Wellness in Oceanside, CA to schedule your consultation. Located at 1763 Oceanside Blvd, Suite B. Start your wellness journey today.",
    canonical: "/contact",
    keywords:
      "contact J'adore Wellness, book consultation Oceanside, wellness appointment San Diego, hormone therapy consultation",
  },
  intake: {
    title: "Patient Intake Form - J'adore Wellness",
    description:
      "Complete your secure patient intake form for J'adore Wellness. HIPAA compliant new patient registration for hormone therapy and wellness services.",
    canonical: "/intake",
    keywords:
      "patient intake form, new patient registration, HIPAA compliant, wellness clinic intake",
  },
};
