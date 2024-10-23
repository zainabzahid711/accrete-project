import HeroSection from "../components/homePage/heroSection";
import aboutMain from "@/public/homePage/aboutMain.png";
import HeartAssete from "../components/utils/heartAssete";
import HealthAssete from "../components/utils/healthAssete";

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
    </>
  );
};

export default About;
