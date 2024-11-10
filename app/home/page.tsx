import FAQs from "../components/homePage/faqs";
import BillingProcess from "../components/homePage/billingProcess";
import ChooseAccrete from "../components/homePage/choiceSection";
import Department from "../components/homePage/departments";
import HeroSection from "../components/homePage/heroSection";
import Reviews from "../components/homePage/reviews";
import Services from "../components/services";
import iconShedule from "@/public/homePage/iconScheduleDemo.png";
import mainLogo from "@/public/homePage/accreteLogo.png";
import CardValues from "../components/homePage/cardWrapValues";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <HeroSection
        mainText="We Fight for every Dollar You deserve..."
        subText="Streamline your medical billing with precision."
        mainImage={mainLogo.src}
        backgroundImage="/homePage/heroBg.jpg"
      />
      <CardValues />
      <ChooseAccrete />
      <Services />
      <Department />
      <BillingProcess />
      <Reviews />
      <FAQs />
      <section className="md:px-28 px-10 p-10 md:p-20">
        <div className="md:px-72 px-1 items-center justify-center flex flex-col md:flex-row gap-10">
          <div className="flex justify-center items-center gap-3">
            <Image
              className="w-12 h-12"
              src={iconShedule}
              alt="Schedule Icon"
            />
            <Link href="/shedule-demo">
              <button
                className="
                  bg-gradient-to-tr from-blue-200 to-blue-400
                text-blue-900 font-semibold p-4 px-6 rounded-full 
                  cursor-pointer shadow-md transition-all duration-300 ease-in-out 
                hover:from-blue-300 hover:to-blue-500 hover:scale-105 hover:text-blue-800 
                  active:scale-95 focus:ring-4 focus:ring-blue-200"
              >
                Schedule a Demo
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
