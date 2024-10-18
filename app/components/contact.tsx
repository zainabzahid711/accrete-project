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
    <section className="md:px-28 px-10 p-16 flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        Our Partners
      </h2>

      <div className="flex justify-center gap-10 w-[100%] md:gap-12 overflow-hidden">
        <div className="logo_slider scrolling-images">
          {/* Duplicate the images to create an infinite effect */}
          <div className="scrolling-images">
            {/* Original images */}
            <img className="w-32 h-20" src={brandOne.src} alt="Brand One" />
            <img className="w-32 h-20" src={brandTwo.src} alt="Brand Two" />
            <img className="w-32 h-20" src={brandThree.src} alt="Brand Three" />
            <img className="w-32 h-20" src={brandFour.src} alt="Brand Four" />
            <img className="w-32 h-20" src={brandFive.src} alt="Brand Five" />
            <img className="w-32 h-20" src={brandSix.src} alt="Brand Six" />
            <img className="w-32 h-20" src={brandSeven.src} alt="Brand Seven" />
            <img className="w-32 h-20" src={brandEight.src} alt="Brand Eight" />
            {/* Duplicated images for seamless effect */}
            <img className="w-32 h-20" src={brandOne.src} alt="Brand One" />
            <img className="w-32 h-20" src={brandTwo.src} alt="Brand Two" />
            <img className="w-32 h-20" src={brandThree.src} alt="Brand Three" />
            <img className="w-32 h-20" src={brandFour.src} alt="Brand Four" />
            <img className="w-32 h-20" src={brandFive.src} alt="Brand Five" />
            <img className="w-32 h-20" src={brandSix.src} alt="Brand Six" />
            <img className="w-32 h-20" src={brandSeven.src} alt="Brand Seven" />
            <img className="w-32 h-20" src={brandEight.src} alt="Brand Eight" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
