import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import SymptomGrid from "@/components/home/SymptomGrid";
import CoreServices from "@/components/home/CoreServices";
import AestheticsSection from "@/components/home/AestheticsSection";
import WhyJadore from "@/components/home/WhyJadore";
import CareModel from "@/components/home/CareModel";
import ProcessSection from "@/components/home/ProcessSection";
import TeamPreview from "@/components/home/TeamPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <IntroSection />
      <SymptomGrid />
      <CoreServices />
      <AestheticsSection />
      <WhyJadore />
      <CareModel />
      <ProcessSection />
      <TeamPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
