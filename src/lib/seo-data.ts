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
    title: "Peptide Therapy Oceanside CA - Advanced Peptide Protocols | J'adore Wellness",
    description:
      "Physician-supervised peptide therapy in Oceanside, CA. BPC-157, TB-500, CJC-1295, and more. Targeted protocols for recovery, anti-aging, muscle growth, and cellular regeneration. Serving North San Diego County.",
    canonical: "/services/peptide-therapy",
    keywords:
      "peptide therapy Oceanside, peptide therapy San Diego, BPC-157 Oceanside, peptide injections Carlsbad, regenerative peptides, anti-aging peptides, peptide therapy near me, peptide clinic North County San Diego",
  },
  weightLoss: {
    title: "Medical Weight Loss Oceanside CA - GLP-1 & Semaglutide Programs | J'adore Wellness",
    description:
      "Physician-supervised medical weight loss in Oceanside, CA. GLP-1 receptor agonists, semaglutide, tirzepatide, and metabolic optimization. Sustainable weight loss results. Serving Carlsbad, Vista, San Marcos.",
    canonical: "/services/weight-loss",
    keywords:
      "medical weight loss Oceanside, GLP-1 weight loss Oceanside, semaglutide Oceanside, tirzepatide Carlsbad, weight loss clinic San Diego, medical weight loss near me, GLP-1 injections North County, weight loss doctor Oceanside CA",
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
  // Location Pages
  carlsbad: {
    title: "Hormone Therapy & Wellness Near Carlsbad CA - J'adore Wellness",
    description:
      "Premium hormone therapy and wellness services for Carlsbad residents. Just 10 minutes from Carlsbad Village. Testosterone therapy, peptide therapy, cold plunge, and more.",
    canonical: "/locations/carlsbad",
    keywords:
      "hormone therapy Carlsbad, HRT Carlsbad CA, testosterone therapy Carlsbad, wellness clinic near Carlsbad, bioidentical hormones Carlsbad Village",
  },
  vista: {
    title: "Hormone Therapy & Wellness Near Vista CA - J'adore Wellness", 
    description:
      "Advanced wellness center serving Vista, CA. Hormone optimization, regenerative medicine, and wellness services just 15 minutes from downtown Vista.",
    canonical: "/locations/vista",
    keywords:
      "hormone therapy Vista, wellness clinic Vista CA, testosterone therapy Vista, HRT near Vista, regenerative medicine Vista",
  },
  sanMarcos: {
    title: "Hormone Therapy & Wellness Near San Marcos CA - J'adore Wellness",
    description:
      "Revolutionary wellness for San Marcos residents. Hormone therapy, peptide protocols, and performance optimization near CSUSM and Lake San Marcos.",
    canonical: "/locations/san-marcos",
    keywords:
      "hormone therapy San Marcos, wellness clinic San Marcos CA, HRT near CSUSM, testosterone therapy San Marcos, peptide therapy San Marcos",
  },
  encinitas: {
    title: "Hormone Therapy & Wellness Near Encinitas CA - J'adore Wellness",
    description:
      "Coastal wellness for Encinitas residents. Holistic hormone therapy, regenerative treatments, and mindful medicine just 15 minutes from downtown Encinitas.",
    canonical: "/locations/encinitas",
    keywords:
      "hormone therapy Encinitas, wellness clinic Encinitas CA, holistic medicine Encinitas, bioidentical hormones Encinitas, coastal wellness",
  },
  escondido: {
    title: "Hormone Therapy & Wellness Near Escondido CA - J'adore Wellness",
    description:
      "Premium wellness services for Escondido residents. Hormone optimization, weight care, and regenerative medicine serving North County's largest city.",
    canonical: "/locations/escondido",
    keywords:
      "hormone therapy Escondido, wellness clinic Escondido CA, testosterone therapy Escondido, HRT Escondido, weight loss Escondido",
  },
  fallbrook: {
    title: "Hormone Therapy & Wellness Near Fallbrook CA - J'adore Wellness",
    description:
      "Rural wellness for Fallbrook's agricultural community. Hormone therapy, recovery optimization, and wellness services for the Avocado Capital of the World.",
    canonical: "/locations/fallbrook",
    keywords:
      "hormone therapy Fallbrook, wellness clinic Fallbrook CA, rural healthcare Fallbrook, testosterone therapy Fallbrook, agricultural wellness",
  },
  ranchoSantaFe: {
    title: "Luxury Wellness Near Rancho Santa Fe CA - J'adore Wellness",
    description:
      "World-class hormone therapy and luxury wellness for Rancho Santa Fe residents. Concierge-level care, cutting-edge treatments, and executive health optimization.",
    canonical: "/locations/rancho-santa-fe",
    keywords:
      "hormone therapy Rancho Santa Fe, luxury wellness Rancho Santa Fe, executive health Rancho Santa Fe, VIP medical care, elite wellness",
  },
  delMar: {
    title: "Hormone Therapy & Wellness Near Del Mar CA - J'adore Wellness",
    description:
      "Coastal elegance and sophisticated wellness for Del Mar residents. Premium hormone therapy, aesthetic medicine, and boutique healthcare near the village and racetrack.",
    canonical: "/locations/del-mar",
    keywords:
      "hormone therapy Del Mar, wellness clinic Del Mar CA, aesthetic medicine Del Mar, coastal wellness, boutique healthcare Del Mar",
  },
  campPendleton: {
    title: "Hormone Therapy & Wellness Near Camp Pendleton - J'adore Wellness",
    description:
      "Elite performance medicine for Marines and military families. Specialized hormone therapy, recovery optimization, and tactical wellness near Camp Pendleton.",
    canonical: "/locations/camp-pendleton",
    keywords:
      "hormone therapy Camp Pendleton, military wellness, Marine health optimization, veterans hormone therapy, tactical medicine",
  },
  temecula: {
    title: "Hormone Therapy & Wellness Near Temecula CA - J'adore Wellness",
    description:
      "Wine country wellness for Temecula residents. Sophisticated hormone therapy, anti-aging protocols, and luxury wellness in Riverside County's wine destination.",
    canonical: "/locations/temecula",
    keywords:
      "hormone therapy Temecula, wellness clinic Temecula CA, wine country wellness, anti-aging Temecula, longevity medicine Temecula",
  },
};
