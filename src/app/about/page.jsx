import AboutDetail from "@/components/about/AboutDetail";
import AboutHero from "@/components/about/AboutHero";
import Detail from "@/components/about/Detail";
import TeamGrid from "@/components/about/Teamgrid";
import TractionSection from "@/components/about/Tractionsection";
import HeroDecarbonizationSection from "@/components/home/HeroDecarbonizationSection";
import { createPageMetadata } from "@/lib/seo";

const AboutPage = () => {
  return (
    <>
     <AboutHero />
     <AboutDetail />
     <Detail />
     <TractionSection/>
     <TeamGrid />
      <HeroDecarbonizationSection/>
    </>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
