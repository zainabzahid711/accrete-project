import healthCare from "@/public/logoSlider/healthCare.jpg";
import healthWealth from "@/public/logoSlider/healthWealth.png";
import priority from "@/public/logoSlider/priority.png";
import medicleCore from "@/public/logoSlider/medicleCore.png";
import medicleCenter from "@/public/logoSlider/medicleCenter.png";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";

const MedicalPractice = () => {
  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <section className="md:pl-40 md:pr-40 pt-8 p-10" ref={sectionRef}>
      <div className="flex justify-center mt-4 mb-6">
        <div className="border-t-2 w-52 border-orange-500"></div>
      </div>
      <h1
        ref={headingRef}
        className="text-2xl md:text-5xl font-bold text-center"
      >
        We help medical practices focus on their patients while improving their
        Revenue Cycle Management
      </h1>

      <div className="flex justify-center mt-7 mb-6">
        <div className="border-t-2 w-52 border-orange-500"></div>
      </div>

      <div className="flex justify-center overflow-hidden">
        <div className="logo_slider scrolling-images">
          {/* Duplicate the images to create an infinite effect */}
          <div className="scrolling-images">
            {/* Original images */}
            <img className="w-32" src={healthCare.src} alt="Health Care" />
            <img className="w-32" src={healthWealth.src} alt="Health Wealth" />
            <img className="w-32" src={priority.src} alt="Priority" />
            <img className="w-32" src={medicleCore.src} alt="Medicle Core" />
            <img
              className="w-32"
              src={medicleCenter.src}
              alt="Medicle Center"
            />
            {/* Duplicated images for seamless effect */}
            <img className="w-32" src={healthCare.src} alt="Health Care" />
            <img className="w-32" src={healthWealth.src} alt="Health Wealth" />
            <img className="w-32" src={priority.src} alt="Priority" />
            <img className="w-32" src={medicleCore.src} alt="Medicle Core" />
            <img
              className="w-32"
              src={medicleCenter.src}
              alt="Medicle Center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalPractice;
