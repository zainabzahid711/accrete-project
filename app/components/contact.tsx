import brandOne from "@/public/homePage/brandOne.png";
import brandTwo from "@/public/homePage/brandTwo.png";
import brandThree from "@/public/homePage/brandThree.png";
import brandFour from "@/public/homePage/brandFour.png";
import brandFive from "@/public/homePage/brandFive.png";
import brandSix from "@/public/homePage/brandSix.png";
import brandSeven from "@/public/homePage/brandSeven.png";
import brandEight from "@/public/homePage/brandEight.png";

const Contact = () => {
  return (
    <section className="md:px-28 px-10 p-16 flex flex-col gap-10 justify-center items-center">
      <div className="flex md:flex-row flex-col gap-28">
        <img className="w-32 h-20" src={brandOne.src} alt="brands" />
        <img className="w-32 h-20" src={brandTwo.src} alt="brands" />
        <img className="w-32 h-20" src={brandThree.src} alt="brands" />
        <img className="w-32 h-20" src={brandFour.src} alt="brands" />
      </div>
      <div className="flex md:flex-row flex-col gap-28">
        <img className="w-32 h-20" src={brandFive.src} alt="brands" />
        <img className="w-32 h-20" src={brandSix.src} alt="brands" />
        <img className="w-32 h-20" src={brandSeven.src} alt="brands" />
        <img className="w-32 h-20" src={brandEight.src} alt="brands" />
      </div>
    </section>
  );
};

export default Contact;
