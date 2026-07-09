import CementEmissionsSection from "@/components/home/CementEmissionsSection";
import CementProcessSlider from "@/components/home/CementProcessSlider";
import Hero from "@/components/home/Hero";
import HeroDecarbonizationSection from "@/components/home/HeroDecarbonizationSection";
import HeroScrollSection from "@/components/home/HeroScrollSection";
import NewsPress from "@/components/home/NewsPress";
import PartnersCollaborators from "@/components/home/PartnersCollaborators";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <Hero />
    <CementEmissionsSection />
    <HeroScrollSection />
    <CementProcessSlider/>
    <PartnersCollaborators />
    <NewsPress />
    <HeroDecarbonizationSection/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
