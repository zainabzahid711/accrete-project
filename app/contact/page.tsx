import contactMain from "@/public/contactAssets/contactMain.png";
import contactvert from "@/public/contactAssets/contactVert.jpeg";
import HeroSection from "../components/homePage/heroSection";
import ContactAssete from "../components/utils/contactAssete";
import FormCard from "../components/card/formCard";

const Contact = () => {
  return (
    <>
      <section>
        <HeroSection
          mainText="Contact us"
          subText="Reach us to get the fastest responce and your money payback."
          mainImage={contactMain.src}
          animateAsset={
            <ContactAssete
              bottom={36}
              left={-16}
              translateX={2}
              translateY={6}
            />
          }
        />
        <FormCard />
      </section>
    </>
  );
};

export default Contact;
