import doctor from "@/public/homePage/doctor.png";
import patients from "@/public/homePage/patents.png";
import feedBack from "@/public/homePage/feedBack.png";

const HeroSection = () => {
  return (
    <>
      <section className=" bg-hero-bg bg-cover bg-center bg-background pl-12 pr-12 md:pl-20 md:pr-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between pt-20 px-4 md:px-12">
          <div className="text-textColor md:w-1/2 -mt-0 md:-mt-28">
            <h1 className="font-bold text-2xl md:text-6xl">
              Leading with Care, Committed to You
            </h1>
            <p className="font-medium mt-8">
              Accrete Conicegare offers trusted, comprehensive medical care with
              a focus on accuracy, compassion, and personalized treatment for
              every patient.
            </p>

            <button
              className="mt-10 px-6 py-3 bg-gradient-to-r from-[#284E6E] via-[#3B82B1] to-[#82C0EC] text-white rounded-lg group hover:from-[#1C3A51] hover:via-[#2E6284] hover:to-[#5EA6D7]
              animate-bounce-slow"
            >
              Book an Appointment
            </button>
          </div>
          <div className="relative md:w-1/2 flex items-center justify-center md:justify-end mt-6 md:mt-0">
            <img
              className="w-48 h-16 -mr-14 z-10"
              src={patients.src}
              alt="recovers"
            />
            <img
              src={doctor.src}
              alt="Doctor"
              className="w-full h-auto max-w-md"
            />
            <div className="absolute -top-20 -right-32 hidden md:flex justify-start items-start">
              <img src={feedBack.src} alt="nothing" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
