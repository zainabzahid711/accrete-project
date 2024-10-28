import HeroSection from "../components/homePage/heroSection";
import aboutUs from "@/public/aboutPageAssets/aboutUs.png";
import HeartAssete from "../components/utils/heartAssete";
import AboutAccrete from "../components/aboutus/aboutAccrete";
import HowWorks from "../components/aboutus/howWorks";

const About = () => {
  return (
    <>
      <HeroSection
        mainText="Streamline your Payments for Healthier Practice..."
        mainImage={aboutUs.src}
        backgroundImage="/homePage/heroBg.jpg"
        extraAnimateAsset={<HeartAssete />} // This will only be shown on the About page
      />
      <AboutAccrete />
      <HowWorks />
    </>
  );
};

export default About;
