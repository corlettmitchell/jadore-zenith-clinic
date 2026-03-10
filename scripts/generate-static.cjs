#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Generating static HTML files for J\'adore Wellness SEO...');

// SEO data per route — must match src/lib/seo-data.ts
const seoPages = {
  '/': {
    title: "J'adore Wellness - Hormone Therapy & Wellness Clinic Oceanside CA",
    description: "Premium hormone therapy, aesthetics, and wellness services in Oceanside, CA. Personalized HRT, peptide therapy, weight care, cold plunge, infrared sauna, and aesthetic medicine.",
    keywords: "hormone therapy Oceanside, HRT San Diego, testosterone therapy, wellness clinic California, hormone optimization, anti-aging clinic",
    h1: "J'adore Wellness - Premium Hormone Therapy & Wellness Clinic in Oceanside, CA",
    content: "J'adore Wellness is a premium medical wellness clinic located in Oceanside, California. We specialize in personalized hormone optimization, regenerative medicine, and aesthetic treatments designed to help you look, feel, and perform your best. Our services include hormone replacement therapy, peptide therapy, medical weight care, cold plunge, infrared sauna, compression therapy, hyperbaric oxygen therapy, float spa, and aesthetic medicine."
  },
  '/hormone-therapy': {
    title: "Hormone Replacement Therapy (HRT) - J'adore Wellness Oceanside",
    description: "Personalized bioidentical hormone replacement therapy in Oceanside, CA. Testosterone, estrogen, thyroid optimization for men and women. Restore vitality and balance.",
    keywords: "hormone replacement therapy, HRT Oceanside, testosterone therapy San Diego, bioidentical hormones, TRT, menopause treatment, hormone optimization",
    h1: "Hormone Replacement Therapy (HRT) in Oceanside, CA",
    content: "Personalized bioidentical hormone optimization for men and women at J'adore Wellness. Our comprehensive hormone therapy includes testosterone replacement, estrogen therapy, progesterone therapy, thyroid optimization, and growth hormone protocols. We use advanced diagnostics and data-driven protocols to restore hormonal balance and vitality. Serving Oceanside, Carlsbad, Vista, San Marcos, Encinitas, and North San Diego County."
  },
  '/services': {
    title: "Wellness Services - J'adore Wellness Oceanside CA",
    description: "Comprehensive wellness services in Oceanside including peptide therapy, weight care, compression therapy, cold plunge, and infrared sauna. Optimize your health and recovery.",
    keywords: "wellness services Oceanside, recovery therapies San Diego, health optimization, regenerative treatments California",
    h1: "Wellness & Recovery Services in Oceanside, CA",
    content: "Explore our comprehensive wellness services at J'adore Wellness in Oceanside. We offer peptide therapy, medical weight care, compression therapy, cold plunge therapy, infrared sauna, hyperbaric oxygen therapy, float spa, and aesthetic medicine. Each treatment is physician-supervised and personalized to your health goals."
  },
  '/services/peptide-therapy': {
    title: "Peptide Therapy Oceanside CA - Advanced Peptide Protocols | J'adore Wellness",
    description: "Physician-supervised peptide therapy in Oceanside, CA. BPC-157, TB-500, CJC-1295, and more. Targeted protocols for recovery, anti-aging, muscle growth, and cellular regeneration. Serving North San Diego County.",
    keywords: "peptide therapy Oceanside, peptide therapy San Diego, BPC-157 Oceanside, peptide injections Carlsbad, regenerative peptides, anti-aging peptides, peptide therapy near me, peptide clinic North County San Diego",
    h1: "Peptide Therapy in Oceanside, CA - Advanced Regenerative Protocols",
    content: "J'adore Wellness offers physician-supervised peptide therapy in Oceanside, California. Our advanced peptide protocols include BPC-157, TB-500, CJC-1295/Ipamorelin, and other research-backed peptides for cellular regeneration, injury recovery, anti-aging, muscle growth, and immune optimization. Every protocol is lab-guided, individually dosed, and monitored by our medical team. We serve patients from Oceanside, Carlsbad, Vista, San Marcos, Encinitas, Escondido, and throughout North San Diego County. Schedule your peptide therapy consultation today."
  },
  '/services/weight-loss': {
    title: "Medical Weight Loss Oceanside CA - GLP-1 & Semaglutide Programs | J'adore Wellness",
    description: "Physician-supervised medical weight loss in Oceanside, CA. GLP-1 receptor agonists, semaglutide, tirzepatide, and metabolic optimization. Sustainable weight loss results. Serving Carlsbad, Vista, San Marcos.",
    keywords: "medical weight loss Oceanside, GLP-1 weight loss Oceanside, semaglutide Oceanside, tirzepatide Carlsbad, weight loss clinic San Diego, medical weight loss near me, GLP-1 injections North County, weight loss doctor Oceanside CA",
    h1: "Medical Weight Loss in Oceanside, CA - GLP-1 & Metabolic Optimization",
    content: "J'adore Wellness provides physician-supervised medical weight loss programs in Oceanside, California. Our evidence-based approach includes GLP-1 receptor agonists (semaglutide, tirzepatide), comprehensive metabolic testing, hormone evaluation, peptide protocols for fat metabolism, nutritional guidance, and ongoing monitoring. We address the root causes of weight gain — metabolic resistance, hormonal imbalances, and insulin sensitivity — not just symptoms. Achieve sustainable, long-term weight loss while preserving lean muscle mass. Serving Oceanside, Carlsbad, Vista, San Marcos, Encinitas, and North San Diego County."
  },
  '/services/cold-plunge': {
    title: "Cold Plunge Therapy - J'adore Wellness Oceanside CA",
    description: "Experience cold water immersion therapy in Oceanside. Boost metabolism, reduce inflammation, enhance mental clarity and recovery with cold plunge.",
    keywords: "cold plunge Oceanside, cold water therapy San Diego, ice bath therapy, cryotherapy, inflammation reduction, athletic recovery",
    h1: "Cold Plunge Therapy in Oceanside, CA",
    content: "Cold water immersion therapy at J'adore Wellness in Oceanside. Boost metabolism, reduce inflammation, enhance mental clarity, and improve recovery with science-backed cold exposure. Our controlled cold plunge sessions are guided by trained professionals for maximum benefit and safety."
  },
  '/services/infrared-sauna': {
    title: "Infrared Sauna Therapy - J'adore Wellness Oceanside CA",
    description: "Far-infrared sauna therapy in Oceanside for deep detoxification, pain relief, and relaxation. Experience healing heat at comfortable temperatures.",
    keywords: "infrared sauna Oceanside, far infrared therapy San Diego, detox sauna, pain relief sauna, wellness spa California",
    h1: "Infrared Sauna Therapy in Oceanside, CA",
    content: "Far-infrared sauna therapy at J'adore Wellness in Oceanside. Unlike traditional saunas, infrared technology penetrates deep into tissues at comfortable temperatures for detoxification, pain relief, improved circulation, and deep relaxation."
  },
  '/services/compression': {
    title: "Compression Therapy - J'adore Wellness Oceanside CA",
    description: "Professional NormaTec compression therapy in Oceanside. Enhance circulation, reduce muscle soreness, and accelerate recovery like elite athletes.",
    keywords: "compression therapy Oceanside, NormaTec San Diego, lymphatic drainage, muscle recovery, athletic recovery therapy",
    h1: "Compression Therapy in Oceanside, CA",
    content: "Professional-grade pneumatic compression therapy at J'adore Wellness in Oceanside. Using NormaTec technology trusted by elite athletes to enhance blood flow, reduce muscle soreness, promote lymphatic drainage, and accelerate recovery."
  },
  '/services/hyperbaric-oxygen': {
    title: "Hyperbaric Oxygen Therapy - J'adore Wellness Oceanside CA",
    description: "Hyperbaric oxygen therapy (HBOT) in Oceanside. Accelerate healing, reduce inflammation, and enhance recovery with pressurized oxygen therapy.",
    keywords: "hyperbaric oxygen therapy Oceanside, HBOT San Diego, oxygen therapy, wound healing, recovery therapy California",
    h1: "Hyperbaric Oxygen Therapy (HBOT) in Oceanside, CA",
    content: "Hyperbaric oxygen therapy at J'adore Wellness in Oceanside. HBOT delivers pure oxygen at increased atmospheric pressure to accelerate healing, reduce inflammation, enhance cognitive function, and support recovery from injury and surgery."
  },
  '/services/float-spa': {
    title: "Float Spa - Sensory Deprivation Therapy - J'adore Wellness Oceanside CA",
    description: "Float spa and sensory deprivation therapy in Oceanside. Experience deep relaxation, stress relief, and pain management in our float tanks.",
    keywords: "float spa Oceanside, sensory deprivation San Diego, float tank therapy, REST therapy, Epsom salt float California",
    h1: "Float Spa & Sensory Deprivation Therapy in Oceanside, CA",
    content: "Float spa therapy at J'adore Wellness in Oceanside. Our sensory deprivation float tanks provide deep relaxation, stress relief, pain management, and enhanced mental clarity through weightless floating in Epsom salt solution."
  },
  '/about': {
    title: "About J'adore Wellness - Our Mission & Values",
    description: "Learn about J'adore Wellness, a premium medical wellness clinic in Oceanside, CA. Discover our mission, values, and commitment to personalized patient care.",
    keywords: "about J'adore Wellness, wellness clinic Oceanside, personalized medicine, integrative health, medical spa California",
    h1: "About J'adore Wellness",
    content: "J'adore Wellness was founded on the belief that you deserve to feel extraordinary. We provide truly personalized care combining advanced diagnostics, cutting-edge treatments, and genuine attention to each patient's unique needs in Oceanside, California."
  },
  '/team': {
    title: "Our Medical Team - J'adore Wellness Oceanside",
    description: "Meet the expert medical team at J'adore Wellness in Oceanside. Board-certified physicians and nurse practitioners dedicated to your wellness journey.",
    keywords: "wellness doctors Oceanside, hormone therapy physicians, medical team San Diego, nurse practitioners California",
    h1: "Our Medical Team",
    content: "Meet the expert physicians, nurse practitioners, and wellness professionals at J'adore Wellness in Oceanside, CA. Our team is dedicated to providing personalized, evidence-based care for your health and wellness journey."
  },
  '/contact': {
    title: "Contact J'adore Wellness - Schedule Your Consultation",
    description: "Contact J'adore Wellness in Oceanside, CA to schedule your consultation. Located at 1763 Oceanside Blvd, Suite B. Start your wellness journey today.",
    keywords: "contact J'adore Wellness, book consultation Oceanside, wellness appointment San Diego, hormone therapy consultation",
    h1: "Contact J'adore Wellness",
    content: "Schedule your consultation at J'adore Wellness. Located at 1763 Oceanside Blvd, Suite B, Oceanside, CA 92054. Phone: (xxx) xxx-xxxx. Email: info@jadorewellness.com. Hours: Monday - Friday, 9:00 AM - 5:00 PM."
  },
  '/intake': {
    title: "Patient Intake Form - J'adore Wellness",
    description: "Complete your secure patient intake form for J'adore Wellness. HIPAA compliant new patient registration for hormone therapy and wellness services.",
    keywords: "patient intake form, new patient registration, HIPAA compliant, wellness clinic intake",
    h1: "Patient Intake Form",
    content: "Complete your secure, HIPAA-compliant patient intake form for J'adore Wellness. New patient registration for hormone therapy, peptide therapy, weight care, and wellness services."
  },
  // Location pages
  '/locations/carlsbad': {
    title: "Hormone Therapy & Wellness Near Carlsbad CA - J'adore Wellness",
    description: "Premium hormone therapy, peptide therapy, and medical weight loss for Carlsbad residents. Just 10 minutes from Carlsbad Village. GLP-1, semaglutide, cold plunge, and more.",
    keywords: "hormone therapy Carlsbad, peptide therapy Carlsbad, weight loss Carlsbad, GLP-1 Carlsbad, wellness clinic near Carlsbad, semaglutide Carlsbad",
    h1: "Hormone Therapy & Wellness Services Near Carlsbad, CA",
    content: "J'adore Wellness serves Carlsbad residents with premium hormone therapy, peptide therapy, medical weight loss (GLP-1, semaglutide), cold plunge, infrared sauna, and aesthetic medicine. Located just 10 minutes from Carlsbad Village in Oceanside."
  },
  '/locations/vista': {
    title: "Hormone Therapy & Wellness Near Vista CA - J'adore Wellness",
    description: "Advanced hormone therapy, peptide protocols, and medical weight loss serving Vista, CA. Just 15 minutes from downtown Vista.",
    keywords: "hormone therapy Vista, peptide therapy Vista, weight loss Vista CA, wellness clinic Vista, GLP-1 Vista",
    h1: "Hormone Therapy & Wellness Services Near Vista, CA",
    content: "J'adore Wellness serves Vista residents with advanced hormone optimization, peptide therapy, medical weight loss, and wellness services. Located just 15 minutes from downtown Vista in Oceanside."
  },
  '/locations/san-marcos': {
    title: "Hormone Therapy & Wellness Near San Marcos CA - J'adore Wellness",
    description: "Hormone therapy, peptide protocols, and medical weight loss for San Marcos residents. Near CSUSM and Lake San Marcos.",
    keywords: "hormone therapy San Marcos, peptide therapy San Marcos, weight loss San Marcos, wellness clinic San Marcos CA",
    h1: "Hormone Therapy & Wellness Services Near San Marcos, CA",
    content: "J'adore Wellness provides hormone therapy, peptide therapy, medical weight loss, and wellness services to San Marcos residents. Conveniently located near CSUSM and Lake San Marcos in Oceanside."
  },
  '/locations/encinitas': {
    title: "Hormone Therapy & Wellness Near Encinitas CA - J'adore Wellness",
    description: "Coastal wellness for Encinitas residents. Hormone therapy, peptide therapy, medical weight loss, and regenerative treatments. 15 minutes from downtown Encinitas.",
    keywords: "hormone therapy Encinitas, peptide therapy Encinitas, weight loss Encinitas, wellness clinic Encinitas CA",
    h1: "Hormone Therapy & Wellness Services Near Encinitas, CA",
    content: "J'adore Wellness offers coastal wellness for Encinitas residents including hormone therapy, peptide therapy, medical weight loss (GLP-1, semaglutide), and regenerative treatments. Just 15 minutes from downtown Encinitas."
  },
  '/locations/escondido': {
    title: "Hormone Therapy & Wellness Near Escondido CA - J'adore Wellness",
    description: "Premium wellness services for Escondido residents. Hormone optimization, peptide therapy, medical weight loss, and recovery therapies.",
    keywords: "hormone therapy Escondido, peptide therapy Escondido, weight loss Escondido, wellness clinic Escondido CA",
    h1: "Hormone Therapy & Wellness Services Near Escondido, CA",
    content: "J'adore Wellness serves Escondido residents with hormone optimization, peptide therapy, medical weight loss, cold plunge, infrared sauna, and compression therapy. Serving North County's largest city from Oceanside."
  },
  '/locations/fallbrook': {
    title: "Hormone Therapy & Wellness Near Fallbrook CA - J'adore Wellness",
    description: "Wellness services for Fallbrook residents. Hormone therapy, peptide therapy, medical weight loss, and recovery optimization.",
    keywords: "hormone therapy Fallbrook, peptide therapy Fallbrook, weight loss Fallbrook CA, wellness clinic Fallbrook",
    h1: "Hormone Therapy & Wellness Services Near Fallbrook, CA",
    content: "J'adore Wellness provides hormone therapy, peptide therapy, medical weight loss, and recovery services to Fallbrook residents from our Oceanside clinic."
  },
  '/locations/rancho-santa-fe': {
    title: "Luxury Wellness Near Rancho Santa Fe CA - J'adore Wellness",
    description: "World-class hormone therapy, peptide therapy, and medical weight loss for Rancho Santa Fe residents. Concierge-level care and executive health optimization.",
    keywords: "hormone therapy Rancho Santa Fe, luxury wellness Rancho Santa Fe, peptide therapy Rancho Santa Fe, weight loss Rancho Santa Fe",
    h1: "Luxury Wellness Services Near Rancho Santa Fe, CA",
    content: "J'adore Wellness offers world-class hormone therapy, peptide therapy, medical weight loss, and luxury wellness services to Rancho Santa Fe residents. Concierge-level care with cutting-edge treatments."
  },
  '/locations/del-mar': {
    title: "Hormone Therapy & Wellness Near Del Mar CA - J'adore Wellness",
    description: "Sophisticated wellness for Del Mar residents. Premium hormone therapy, peptide therapy, medical weight loss, and aesthetic medicine.",
    keywords: "hormone therapy Del Mar, peptide therapy Del Mar, weight loss Del Mar CA, wellness clinic Del Mar",
    h1: "Hormone Therapy & Wellness Services Near Del Mar, CA",
    content: "J'adore Wellness provides premium hormone therapy, peptide therapy, medical weight loss, and aesthetic medicine to Del Mar residents from our Oceanside clinic."
  },
  '/locations/camp-pendleton': {
    title: "Hormone Therapy & Wellness Near Camp Pendleton - J'adore Wellness",
    description: "Elite performance medicine for Marines and military families. Hormone therapy, peptide protocols, and recovery optimization near Camp Pendleton.",
    keywords: "hormone therapy Camp Pendleton, military wellness, Marine health optimization, veterans hormone therapy, peptide therapy military",
    h1: "Wellness Services for Camp Pendleton Marines & Military Families",
    content: "J'adore Wellness offers specialized hormone therapy, peptide therapy, medical weight management, and recovery optimization for Marines, active duty service members, and military families near Camp Pendleton."
  },
  '/locations/temecula': {
    title: "Hormone Therapy & Wellness Near Temecula CA - J'adore Wellness",
    description: "Wine country wellness for Temecula residents. Hormone therapy, peptide protocols, medical weight loss, and anti-aging treatments.",
    keywords: "hormone therapy Temecula, peptide therapy Temecula, weight loss Temecula CA, wellness clinic Temecula",
    h1: "Hormone Therapy & Wellness Services Near Temecula, CA",
    content: "J'adore Wellness serves Temecula residents with hormone therapy, peptide therapy, medical weight loss (GLP-1, semaglutide), and anti-aging treatments from our Oceanside clinic."
  }
};

const distPath = path.join(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, 'utf8');

let successCount = 0;
const BASE_URL = 'https://jadore-wellness.com';

Object.entries(seoPages).forEach(([route, seo]) => {
  try {
    const routePath = route === '/' ? '/index' : route;
    const filePath = path.join(distPath, `${routePath}.html`);
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Replace title
    let html = indexHtml.replace(
      /<title>[^<]*<\/title>/,
      `<title>${seo.title}</title>`
    );

    // Replace meta title
    html = html.replace(
      /<meta name="title" content="[^"]*" \/>/,
      `<meta name="title" content="${seo.title}" />`
    );

    // Replace meta description
    html = html.replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${seo.description}" />`
    );

    // Replace meta keywords
    html = html.replace(
      /<meta name="keywords" content="[^"]*" \/>/,
      `<meta name="keywords" content="${seo.keywords}" />`
    );

    // Replace canonical
    html = html.replace(
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${BASE_URL}${route === '/' ? '' : route}" />`
    );

    // Replace OG url
    html = html.replace(
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${BASE_URL}${route === '/' ? '' : route}" />`
    );

    // Replace OG title
    html = html.replace(
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${seo.title}" />`
    );

    // Replace OG description
    html = html.replace(
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${seo.description}" />`
    );

    // Replace Twitter url
    html = html.replace(
      /<meta name="twitter:url" content="[^"]*" \/>/,
      `<meta name="twitter:url" content="${BASE_URL}${route === '/' ? '' : route}" />`
    );

    // Replace Twitter title
    html = html.replace(
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${seo.title}" />`
    );

    // Replace Twitter description
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${seo.description}" />`
    );

    // Replace the static HTML fallback content inside #root
    // Find the hidden div with static content and replace it
    const staticFallback = `<div style="position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;">
      <header>
        <h1>${seo.h1}</h1>
        <nav aria-label="Main Navigation">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/hormone-therapy">Hormone Therapy</a>
          <a href="/services/peptide-therapy">Peptide Therapy</a>
          <a href="/services/weight-loss">Medical Weight Loss</a>
          <a href="/services/cold-plunge">Cold Plunge</a>
          <a href="/services/infrared-sauna">Infrared Sauna</a>
          <a href="/services/compression">Compression Therapy</a>
          <a href="/services/hyperbaric-oxygen">Hyperbaric Oxygen</a>
          <a href="/services/float-spa">Float Spa</a>
          <a href="/team">Our Team</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main>
        <section>
          <h2>${seo.title}</h2>
          <p>${seo.content}</p>
        </section>
        <section>
          <h3>Contact J'adore Wellness</h3>
          <address>
            <strong>J'adore Wellness</strong><br/>
            1763 Oceanside Blvd, Suite B, Oceanside, CA 92054<br/>
            Email: info@jadorewellness.com
          </address>
          <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </section>
        <section>
          <h3>Areas We Serve</h3>
          <p>Serving Oceanside, Carlsbad, Vista, San Marcos, Encinitas, Escondido, Fallbrook, Rancho Santa Fe, Del Mar, Camp Pendleton, Temecula, and all of North San Diego County.</p>
          <nav aria-label="Location Pages">
            <a href="/locations/carlsbad">Carlsbad</a>
            <a href="/locations/vista">Vista</a>
            <a href="/locations/san-marcos">San Marcos</a>
            <a href="/locations/encinitas">Encinitas</a>
            <a href="/locations/escondido">Escondido</a>
            <a href="/locations/fallbrook">Fallbrook</a>
            <a href="/locations/rancho-santa-fe">Rancho Santa Fe</a>
            <a href="/locations/del-mar">Del Mar</a>
            <a href="/locations/camp-pendleton">Camp Pendleton</a>
            <a href="/locations/temecula">Temecula</a>
          </nav>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 J'adore Wellness. All rights reserved.</p>
      </footer>
      </div>`;

    // Replace everything between <div id="root"> and </body>
    html = html.replace(
      /<div id="root">[\s\S]*?<\/div>\s*<\/div>\s*<\/body>/,
      `<div id="root">${staticFallback}</div>\n  </body>`
    );

    fs.writeFileSync(filePath, html);
    console.log(`✅ ${route} -> ${routePath}.html`);
    successCount++;
  } catch (error) {
    console.error(`❌ Failed to create ${route}:`, error.message);
  }
});

console.log(`\n🎉 Generated ${successCount} static HTML files with unique SEO content!`);
console.log('✨ Each page now has its own title, description, and static fallback for Google.');
