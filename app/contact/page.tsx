import contactMain from "@/public/contactAssets/contactMain.png";
import HeroSection from "../components/homePage/heroSection";
import ContactAssete from "../components/utils/contactAssete";
import FormCard from "../components/card/formCard";
import mobile from "@/public/homePage/svg/mobile.svg";
import location from "@/public/homePage/svg/pin.svg";
import email from "@/public/homePage/svg/mail.svg";

const ContactItem = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="cursor-pointer bg-blue-300 w-64 p-4 rounded-2xl flex gap-4 items-center hover:bg-blue-400 transition-all duration-200">
    <img className="w-7" src={icon} alt={`${title} icon`} />
    <div className="flex flex-col text-white">
      <h5 className="font-medium text-xl">{title}</h5>
      <p>{text}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <HeroSection
        mainText="Get in Touch for Quick Support and Hassle-Free Assistance!"
        subText="We're Here to Help – Contact Us for Instant Support!"
        mainImage={contactMain.src}
        animateAsset={
          <ContactAssete bottom={36} left={-16} translateX={2} translateY={6} />
        }
      />

      {/* Form Section */}
      <FormCard />

      {/* Find Us Section */}
      <div className="md:mx-28 p-10">
        <h3 className="text-4xl font-bold mb-8 text-center md:text-left">
          Find Us Here
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
          <ContactItem icon={mobile.src} title="Phone" text="123 456 789" />
          <ContactItem icon={location.src} title="Location" text="New Delhi" />
          <ContactItem
            icon={email.src}
            title="Email"
            text="accrete@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;