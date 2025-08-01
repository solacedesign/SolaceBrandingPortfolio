import Image from "next/image";
import HomeHeroSection from "./components/HomeHeroSection/HomeHeroSection";
import HomeAboutSection from "./components/HomeAboutSection/HomeAboutSection";
import HomeProjectsSection from "./components/HomeProjectsSection/HomeProjectsSection";
import HomeVideoSection from "./components/HomeVideoSection/HomeVideoSection";
import HomeLogoSlider from "./components/HomeLogoSlider/HomeLogoSlider";
import HomeExtraProjects from "./components/HomeExtraProjects/HomeExtraProjects";
import HomeFinalCall from "./components/HomeFinalCall/HomeFinalCall";

export default function Home() {
  return (
    <>
      <HomeHeroSection/>
      <HomeAboutSection/>
      <HomeProjectsSection/>
      <HomeVideoSection/>
      <HomeLogoSlider/>
      <HomeExtraProjects/>
      <HomeFinalCall/>
    </>
  );
}
