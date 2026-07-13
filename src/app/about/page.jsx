import AboutDetail from "@/components/about/AboutDetail";
import AboutHero from "@/components/about/AboutHero";
import TractionSection from "@/components/about/Tractionsection";
import HeroDecarbonizationSection from "@/components/home/HeroDecarbonizationSection";
import { createPageMetadata } from "@/lib/seo";

const AboutPage = () => {
  return (
    <>
     <AboutHero />
     <AboutDetail />
     <TractionSection/>
      <HeroDecarbonizationSection/>
    </>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
