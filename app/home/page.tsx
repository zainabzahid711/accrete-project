import FAQs from "../components/faqs";
import BillingProcess from "../components/homePage/billingProcess";
import CardValues from "../components/homePage/cardWrapValues";
import ChooseAccrete from "../components/homePage/choiceSection";
import Department from "../components/homePage/departments";
import HeroSection from "../components/homePage/heroSection";
import Reviews from "../components/reviews";
import Services from "../components/services";
import iconShedule from "@/public/homePage/iconScheduleDemo.png";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <CardValues />
      <ChooseAccrete />
      <Services />
      <Department />
      <BillingProcess />
      <Reviews />
      <FAQs />
      <section className="md:px-28 px-10 p-10 md:p-20">
        <div className="md:px-72 px-1 items-center justify-center flex flex-col md:flex-row gap-10">
          <div className="md:w-[50%]">
            <h4 className="font-medium mb-4 text-3xl">start now</h4>
            <p className="">tools and resources to help your practice</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img className="w-12 h-12" src={iconShedule.src} />
            <h5 className="cursor-pointer">Shedule a Demo</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
