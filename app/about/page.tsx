import HeroSection from "../components/homePage/heroSection";
import aboutUs from "@/public/aboutPageAssets/aboutUs.png";
import HeartAssete from "../components/utils/heartAssete";
import AboutAccrete from "../components/aboutus/aboutAccrete";
import HowWorks from "../components/aboutus/howWorks";
import OfferingsComponent from "../components/aboutus/offer";

const About = () => {
  return (
    <>
      <HeroSection
        mainText="Streamline Your Practice, Optimize Operations..."
        subText="Elevate your medical practice by streamlining operations and optimizing performance with our expert administrative solutions."
        mainImage={aboutUs.src}
        backgroundImage="/homePage/heroBg.jpg"
        extraAnimateAsset={<HeartAssete />} // This will only be shown on the About page
      />
      <AboutAccrete />
      <HowWorks />
      <OfferingsComponent />
    </>
  );
};

export default About;
