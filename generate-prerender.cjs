#!/usr/bin/env node
/**
 * Pre-render static HTML for all J'adore Wellness routes
 */
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://jadore-wellness.com';
const SITEMAP = path.join(__dirname, 'public', 'sitemap.xml');
const INDEX_HTML = path.join(__dirname, 'index.html');

const sitemapXml = fs.readFileSync(SITEMAP, 'utf8');
const routes = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map(m => m[1].replace(BASE_URL, ''))
  .filter(r => r && r !== '/');

const baseHtml = fs.readFileSync(INDEX_HTML, 'utf8');

function cityName(slug) {
  const special = {
    'san-marcos': 'San Marcos', 'rancho-santa-fe': 'Rancho Santa Fe',
    'del-mar': 'Del Mar', 'camp-pendleton': 'Camp Pendleton'
  };
  return special[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

const pageMeta = {
  '/about': {
    title: "About J'adore Wellness | Premium Health Optimization Clinic",
    desc: "Learn about J'adore Wellness in Oceanside, CA. We specialize in hormone therapy, peptide treatments, weight management, and recovery services for optimal health.",
    h1: "About J'adore Wellness",
    content: "<p>J'adore Wellness is a premium health optimization clinic in Oceanside, California. We help clients achieve peak performance through personalized hormone therapy, peptide treatments, weight management programs, and advanced recovery services.</p><p>Our team of medical professionals takes a science-based approach to wellness, creating customized treatment plans for every client.</p>"
  },
  '/services': {
    title: "Wellness Services | J'adore Wellness Oceanside CA",
    desc: "Explore our wellness services: hormone therapy, peptide therapy, GLP-1 weight loss, cold plunge, infrared sauna, compression therapy, hyperbaric oxygen, and float spa.",
    h1: "Our Wellness Services",
    content: "<p>J'adore Wellness offers a comprehensive suite of health optimization services including hormone replacement therapy, peptide therapy, medical weight loss, cold plunge, infrared sauna, compression therapy, hyperbaric oxygen therapy, and float spa experiences.</p><p><a href='/hormone-therapy'>Hormone Therapy</a> | <a href='/services/peptide-therapy'>Peptide Therapy</a> | <a href='/services/weight-loss'>Weight Loss</a> | <a href='/services/cold-plunge'>Cold Plunge</a></p>"
  },
  '/team': {
    title: "Our Team | J'adore Wellness Oceanside",
    desc: "Meet the J'adore Wellness team. Our medical professionals specialize in hormone optimization, peptide therapy, and wellness treatments in Oceanside, CA.",
    h1: "Meet Our Team",
    content: "<p>The J'adore Wellness team includes experienced medical professionals dedicated to helping you optimize your health. We bring expertise in hormone therapy, functional medicine, and advanced wellness treatments.</p>"
  },
  '/contact': {
    title: "Contact J'adore Wellness | Book Your Visit",
    desc: "Contact J'adore Wellness in Oceanside, CA. Schedule a consultation for hormone therapy, peptide treatments, weight management, or recovery services.",
    h1: "Contact Us",
    content: "<p>Ready to start your wellness journey? Contact J'adore Wellness to schedule a consultation. We're located in Oceanside, CA and serve clients throughout North County San Diego.</p>"
  },
  '/hormone-therapy': {
    title: "Hormone Therapy (HRT) | J'adore Wellness Oceanside CA",
    desc: "Personalized hormone replacement therapy at J'adore Wellness. Bioidentical HRT for men and women in Oceanside, CA. Optimize your hormones, energy, and vitality.",
    h1: "Hormone Replacement Therapy (HRT)",
    content: "<p>J'adore Wellness offers personalized bioidentical hormone replacement therapy for men and women. Our HRT programs are designed to restore hormonal balance, increase energy, improve mood, and enhance overall quality of life.</p><p>Every treatment plan starts with comprehensive lab work and a detailed consultation with our medical team.</p>"
  },
  '/services/peptide-therapy': {
    title: "Peptide Therapy | J'adore Wellness Oceanside CA",
    desc: "Advanced peptide therapy at J'adore Wellness. Therapeutic peptides for recovery, anti-aging, muscle growth, and immune support. Oceanside, CA.",
    h1: "Peptide Therapy",
    content: "<p>Peptide therapy uses targeted amino acid chains to support recovery, promote anti-aging benefits, enhance muscle growth, and boost immune function. J'adore Wellness offers a range of therapeutic peptides customized to your health goals.</p>"
  },
  '/services/weight-loss': {
    title: "Medical Weight Loss & GLP-1 | J'adore Wellness",
    desc: "Medical weight loss programs including GLP-1 medications at J'adore Wellness. Science-based weight management with physician oversight in Oceanside, CA.",
    h1: "Medical Weight Loss Programs",
    content: "<p>J'adore Wellness offers medically supervised weight loss programs including GLP-1 receptor agonist medications. Our physician-guided approach combines medication, nutrition guidance, and lifestyle optimization for sustainable results.</p>"
  },
  '/services/cold-plunge': {
    title: "Cold Plunge Therapy | J'adore Wellness Oceanside",
    desc: "Cold plunge therapy at J'adore Wellness. Reduce inflammation, boost recovery, and improve mental clarity with cold water immersion in Oceanside, CA.",
    h1: "Cold Plunge Therapy",
    content: "<p>Cold plunge therapy at J'adore Wellness helps reduce inflammation, accelerate recovery, boost metabolism, and improve mental clarity. Our cold plunge pools are maintained at optimal temperatures for maximum therapeutic benefit.</p>"
  },
  '/services/infrared-sauna': {
    title: "Infrared Sauna | J'adore Wellness Oceanside CA",
    desc: "Infrared sauna sessions at J'adore Wellness. Detoxify, reduce pain, improve circulation, and relax with full-spectrum infrared sauna therapy in Oceanside.",
    h1: "Infrared Sauna Therapy",
    content: "<p>Our full-spectrum infrared saunas deliver deep-penetrating heat that promotes detoxification, pain relief, improved circulation, and deep relaxation. Unlike traditional saunas, infrared heat works at a cellular level for maximum therapeutic benefit.</p>"
  },
  '/services/compression': {
    title: "Compression Therapy | J'adore Wellness Oceanside",
    desc: "Compression therapy at J'adore Wellness. Normatec-style pneumatic compression for faster recovery, reduced muscle soreness, and improved circulation.",
    h1: "Compression Therapy",
    content: "<p>Compression therapy uses pneumatic pressure to enhance blood flow, accelerate recovery, and reduce muscle soreness. Popular with athletes and anyone recovering from intense physical activity.</p>"
  },
  '/services/hyperbaric-oxygen': {
    title: "Hyperbaric Oxygen Therapy | J'adore Wellness",
    desc: "Hyperbaric oxygen therapy (HBOT) at J'adore Wellness. Accelerate healing, reduce inflammation, and boost cognitive function with pressurized oxygen therapy.",
    h1: "Hyperbaric Oxygen Therapy (HBOT)",
    content: "<p>Hyperbaric oxygen therapy delivers pure oxygen in a pressurized chamber, increasing oxygen levels in your blood and tissues. HBOT accelerates healing, reduces inflammation, and supports cognitive function.</p>"
  },
  '/services/float-spa': {
    title: "Float Spa & Sensory Deprivation | J'adore Wellness",
    desc: "Float spa therapy at J'adore Wellness. Sensory deprivation float tanks for deep relaxation, stress relief, pain management, and mental clarity in Oceanside, CA.",
    h1: "Float Spa & Sensory Deprivation",
    content: "<p>Our float spa offers sensory deprivation experiences in temperature-controlled float tanks filled with Epsom salt solution. Floating promotes deep relaxation, stress relief, pain management, and enhanced mental clarity.</p>"
  }
};

// Generate location page meta
function getLocationMeta(slug) {
  const city = cityName(slug);
  return {
    title: `${city} Wellness Clinic | J'adore Wellness`,
    desc: `J'adore Wellness serves ${city}, CA with hormone therapy, peptide treatments, weight loss, cold plunge, sauna, and recovery services. Premium wellness near ${city}.`,
    h1: `Wellness & Hormone Therapy Near ${city}`,
    content: `<p>J'adore Wellness proudly serves clients in ${city}, California. Located in nearby Oceanside, we offer hormone replacement therapy, peptide treatments, medical weight loss, cold plunge, infrared sauna, compression therapy, hyperbaric oxygen, and float spa services.</p><p>Schedule a consultation to start your wellness journey. We're just a short drive from ${city}.</p><p><a href="/services">View all services</a> | <a href="/contact">Book a visit</a></p>`
  };
}

function getMeta(route) {
  if (pageMeta[route]) return pageMeta[route];
  const parts = route.split('/').filter(Boolean);
  if (parts[0] === 'locations' && parts[1]) return getLocationMeta(parts[1]);
  return {
    title: `J'adore Wellness | Oceanside CA`,
    desc: `Premium wellness and health optimization services at J'adore Wellness in Oceanside, California.`,
    h1: 'J\'adore Wellness',
    content: '<p>Premium wellness services in Oceanside, CA.</p>'
  };
}

function generateHtml(route, meta) {
  let html = baseHtml;
  html = html.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${meta.desc}" />`);
  
  // OG/Twitter tags if they exist
  html = html.replace(/<meta property="og:title" content=".*?" \/>/g, `<meta property="og:title" content="${meta.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/g, `<meta property="og:description" content="${meta.desc}" />`);
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/g, `<meta name="twitter:title" content="${meta.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/g, `<meta name="twitter:description" content="${meta.desc}" />`);
  
  // Canonical
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${BASE_URL}${route}" />`);
  } else {
    html = html.replace('</head>', `    <link rel="canonical" href="${BASE_URL}${route}" />\n  </head>`);
  }

  const noscriptBlock = `
    <noscript>
      <div style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;">
        <h1>${meta.h1}</h1>
        ${meta.content}
        <p><strong>J'adore Wellness</strong> — Premium Health Optimization Clinic | Oceanside, CA</p>
        <nav><a href="/">Home</a> | <a href="/services">Services</a> | <a href="/about">About</a> | <a href="/contact">Contact</a></nav>
      </div>
    </noscript>
    `;
  html = html.replace('<div id="root"></div>', noscriptBlock + '<div id="root"></div>');

  return html;
}

let count = 0;
for (const route of routes) {
  const meta = getMeta(route);
  const html = generateHtml(route, meta);
  const outDir = path.join(__dirname, 'public', ...route.split('/').filter(Boolean));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  count++;
}

console.log(`Generated ${count} pre-rendered pages for jadore-wellness.com`);
