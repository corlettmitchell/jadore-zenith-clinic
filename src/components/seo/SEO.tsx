import { Helmet } from "react-helmet-async";

const BASE_URL = "https://jadore-zenith-clinic.lovable.app";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: "website" | "article";
  image?: string;
  noindex?: boolean;
  keywords?: string;
}

const SEO = ({
  title = "J'adore Wellness - Hormone Therapy & Wellness Clinic Oceanside CA",
  description = "Premium hormone therapy, aesthetics, and wellness services in Oceanside, CA. Offering HRT, IV therapy, cold plunge, infrared sauna, compression therapy, and aesthetic medicine.",
  canonical,
  type = "website",
  image = "/favicon.png",
  noindex = false,
  keywords,
}: SEOProps) => {
  const fullTitle = title.includes("J'adore") ? title : `${title} | J'adore Wellness`;
  const fullImage = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  const fullCanonical = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content="J'adore Wellness" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
