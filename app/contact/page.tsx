import contactMain from "@/public/contactAssets/contactMain.png";
import HeroSection from "../components/homePage/heroSection";
import FormCard from "../components/card/formCard";
import mobile from "@/public/homePage/svg/mobile.svg";
import location from "@/public/homePage/svg/pin.svg";
import email from "@/public/homePage/svg/mail.svg";
import Image from "next/image";
import iconShedule from "@/public/homePage/iconScheduleDemo.png";
import Link from "next/link";

const ContactItem = ({
  icon,
  title,
  text,
  href,
}: {
  icon: string;
  title: string;
  text: string;
  href?: string;
}) => {
  const Content = (
    <div className="cursor-pointer bg-blue-300 w-80 p-4 rounded-2xl flex gap-4 items-center hover:bg-blue-400 transition-all duration-200">
      <Image
        className="w-6"
        width={24}
        height={24}
        src={icon}
        alt={`${title} icon`}
      />
      <div className="flex flex-col text-white font-serif">
        <h5 className="font-medium text-xl">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {Content}
    </a>
  ) : (
    Content
  );
};

const Contact = () => {
  return (
    <>
      {/* <section className="space-y-16"> */}
      {/* Hero Section */}
      <HeroSection
        mainText="Connect with us for reliable support..."
        subText="Contact us anytime for quick and friendly support!"
        mainImage={contactMain.src}
        backgroundImage="/heroBg.jpg"
      />

      {/* Form Section */}
      <FormCard />

      {/* Find Us Section */}
      <div className="md:mx-28 p-10 flex flex-col items-center">
        <h3 className="text-4xl font-bold mb-8 text-center md:text-left">
          Find Us Here
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
          <ContactItem
            icon={mobile.src}
            title="Phone"
            text="470-802-4555"
            href="tel:470-802-4555"
          />
          <ContactItem
            icon={location.src}
            title="Location"
            text=" Cumming, GA"
          />
          <ContactItem
            icon={email.src}
            title="Email"
            text="ChristinaL@accreteconcierge.net"
            href="mailto:ChristinaL@accreteconcierge.net"
          />
        </div>
      </div>
      {/* </section> */}

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

export default Contact;
