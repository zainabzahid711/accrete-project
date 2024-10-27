import contactMain from "@/public/contactAssets/contactMain.png";
import HeroSection from "../components/homePage/heroSection";
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
  <div className="cursor-pointer bg-blue-300 w-72 p-4 rounded-2xl flex gap-4 items-center hover:bg-blue-400 transition-all duration-200">
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
        mainText="Reach out now for fast, friendly support."
        subText="We're Here to Help - Contact Us for Instant Support!"
        mainImage={contactMain.src}
        backgroundImage="/homePage/heroBg.jpg"
      />

      {/* Form Section */}
      <FormCard />

      {/* Find Us Section */}
      <div className="md:mx-28 p-10">
        <h3 className="text-4xl font-bold mb-8 text-center md:text-left">
          Find Us Here
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
          <ContactItem icon={mobile.src} title="Phone" text="470-802-4555" />
          <ContactItem
            icon={location.src}
            title="Location"
            text=" Cumming, GA"
          />
          <ContactItem
            icon={email.src}
            title="Email"
            text="accreteconcierge@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
