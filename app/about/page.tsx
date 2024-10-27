import HeroSection from "../components/homePage/heroSection";
import aboutUs from "@/public/aboutPageAssets/aboutUs.png";
import HeartAssete from "../components/utils/heartAssete";
import AboutAccrete from "../components/aboutus/aboutAccrete";
import HowWorks from "../components/aboutus/howWorks";
import Backseat from "../components/aboutus/backseat";
import WhoWeAre from "../components/aboutus/whoWeAre";

const About = () => {
  return (
    <>
      <HeroSection
        mainText="Streamline your Payments for a Healthier Practice..."
        subText="We specialize in medical billing services, providing expert care and precision."
        mainImage={aboutUs.src}
        backgroundImage="/homePage/heroBg.jpg"
        extraAnimateAsset={<HeartAssete />} // This will only be shown on the About page
      />
      <AboutAccrete />
      <HowWorks />
      <WhoWeAre />
      <Backseat />
    </>
  );
};

export default About;
