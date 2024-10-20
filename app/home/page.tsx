import CardValues from "../components/homePage/cardWrapValues";
import ChooseAccrete from "../components/homePage/choiceSection";
import Department from "../components/homePage/departments";
import HeroSection from "../components/homePage/heroSection";
import Services from "../components/services";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CardValues />
      <ChooseAccrete />
      <Services />
      <Department />
    </>
  );
};

export default Homepage;
