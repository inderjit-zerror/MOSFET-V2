import CementEmissionsSection from "@/components/home/CementEmissionsSection";
import CementProcessSlider from "@/components/home/CementProcessSlider";
import WithOrWithoutMosfet from "@/components/home/WithOrWithoutMosfet";
import DragCompareSection from "@/components/home/DragCompareSection";
import Hero from "@/components/home/Hero";
import HeroDecarbonizationSection from "@/components/home/HeroDecarbonizationSection";
import HeroScrollSection from "@/components/home/HeroScrollSection";
import NewsPress from "@/components/home/NewsPress";
import PartnersCollaborators from "@/components/home/PartnersCollaborators";
import FuturePlansSection from "@/components/home/FuturePlansSection";
import SoftwarePlatformSection from "@/components/home/SoftwarePlatformSection";
import MoreProfitableSection from "@/components/home/MoreProfitableSection";
import MoreDependableSection from "@/components/home/MoreDependableSection";
import { createPageMetadata } from "@/lib/seo";
const HomePage = () => {
  return (
    <>
      <Hero />
      <CementEmissionsSection />
      <HeroScrollSection />
      <CementProcessSlider />
      <PartnersCollaborators />
      <NewsPress />
      <DragCompareSection />
      <WithOrWithoutMosfet />
      <SoftwarePlatformSection />
      <MoreProfitableSection />
      <MoreDependableSection />
      <FuturePlansSection />
      <HeroDecarbonizationSection />
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
