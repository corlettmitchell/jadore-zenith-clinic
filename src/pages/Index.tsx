import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import SymptomGrid from "@/components/home/SymptomGrid";
import CoreServices from "@/components/home/CoreServices";
import WhyJadore from "@/components/home/WhyJadore";
import CareModel from "@/components/home/CareModel";
import ProcessSection from "@/components/home/ProcessSection";
import TeamPreview from "@/components/home/TeamPreview";
import ReviewsPlaceholder from "@/components/home/ReviewsPlaceholder";
import CTASection from "@/components/home/CTASection";
import SEO from "@/components/seo/SEO";
import { seoData } from "@/lib/seo-data";

const Index = () => {
  return (
    <Layout>
      <SEO {...seoData.home} />
      <Hero />
      <IntroSection />
      <SymptomGrid />
      <CoreServices />
      <WhyJadore />
      <CareModel />
      <ProcessSection />
      <TeamPreview />
      <ReviewsPlaceholder />
      <CTASection />
    </Layout>
  );
};

export default Index;
