import HeroSection from "../components/homePage/heroSection";
import aboutMain from "@/public/homePage/aboutMain.png";
import HeartAssete from "../components/utils/heartAssete";
import HealthAssete from "../components/utils/healthAssete";
import AboutAccrete from "../components/aboutus/aboutAccrete";
import HowWorks from "../components/aboutus/howWorks";

const About = () => {
  return (
    <>
      <HeroSection
        mainText="Streamline your Payments for a Healthier Practice"
        subText="We specialize in medical billing services, providing expert care and precision."
        mainImage={aboutMain.src}
        animateAsset={<HealthAssete />}
        extraAnimateAsset={<HeartAssete />} // This will only be shown on the About page
      />
      <AboutAccrete />
      <HowWorks />
    </>
  );
};

export default About;
