import CardValues from "../components/homePage/cardWrapValues";
import ChooseAccrete from "../components/homePage/choiceSection";
import Department from "../components/homePage/departments";
import HeroSection from "../components/homePage/heroSection";
import Reviews from "../components/reviews";
import Services from "../components/services";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CardValues />
      <ChooseAccrete />
      <Services />
      <Department />
      <Reviews />
    </>
  );
};

export default Homepage;
