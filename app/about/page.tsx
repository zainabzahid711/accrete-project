import HeroSection from "../components/homePage/heroSection";
import aboutUs from "@/public/aboutPageAssets/aboutUs.png";
import HeartAssete from "../components/utils/heartAssete";
import AboutAccrete from "../components/aboutus/aboutAccrete";
import HowWorks from "../components/aboutus/howWorks";
import OfferingsComponent from "../components/aboutus/offer";
import iconShedule from "@/public/homePage/iconScheduleDemo.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <HeroSection
        mainText="Streamline Your Practice, Optimize Operations..."
        subText="Elevate your medical practice by streamlining operations and optimizing performance with our expert administrative solutions."
        mainImage={aboutUs.src}
        backgroundImage="/heroBg.jpg"
        extraAnimateAsset={<HeartAssete />} // This will only be shown on the About page
      />
      <AboutAccrete />
      <HowWorks />
      <OfferingsComponent />

      <section className="md:px-28 px-10 p-8 md:pb-10">
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

export default About;
