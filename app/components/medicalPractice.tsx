import DotsImage from "@/public/headingDots.png";

const MedicalPractice = () => {
  return (
    <>
      <section className="md:pl-40 md:pr-40 pt-8 p-10">
        <div className="flex justify-center mt-4 mb-6">
          <div className="border-t-2 w-52 border-orange-500"></div>
        </div>
        <h1 className=" text-2xl md:text-5xl font-bold text-center">
          We help medical practices focus on their patients while improving
          their Revenue Cycle Management
        </h1>

        <div className="flex justify-center mt-7 mb-6">
          <div className="border-t-2 w-52 border-orange-500"></div>
        </div>
        <div className="flex justify-center flex-col md:flex-row mt-16 gap-60">
          <img src={DotsImage.src} alt="Dots" />
          <img src={DotsImage.src} alt="Dots" />
          <img src={DotsImage.src} alt="Dots" />
        </div>
      </section>
    </>
  );
};

export default MedicalPractice;
