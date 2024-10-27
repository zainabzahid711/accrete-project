import FAQs from "../components/faqs";
import BillingProcess from "../components/homePage/billingProcess";
import CardValues from "../components/homePage/cardWrapValues";
import ChooseAccrete from "../components/homePage/choiceSection";
import Department from "../components/homePage/departments";
import HeroSection from "../components/homePage/heroSection";
import Reviews from "../components/reviews";
import Services from "../components/services";
import iconShedule from "@/public/homePage/iconScheduleDemo.png";
import mainLogo from "@/public/homePage/accreteLogo.png";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <HeroSection
        mainText="We Fight for every dollar You Deserve..." // JSX elements
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
          <div className="md:w-[50%]">
            <h4 className="font-medium mb-4 text-3xl">start now</h4>
            <p className="">tools and resources to help your practice</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Image
              className="w-12 h-12"
              src={iconShedule}
              alt="Schedule Icon"
            />
            <Link href="/shedule-demo">
              <button className="animate-bounce-slow bg-gradient-to-tr bg-blue-300 p-4 rounded-full cursor-pointer hover:text-blue-700">
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
