"use client";
import mission from "@/public/aboutPageAssets/mission.png";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";

const WhoWeAre = () => {
  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");
  return (
    <>
      <section
        className="rounded-2xl md:rounded-full md:mx-28 mx-10 my-0 mb-12 md:my-20 bg-cover bg-no-repeat p-8 md:p-20 opacity-80"
        style={{
          backgroundImage: `url(/aboutPageAssets/missionMain.jpg)`,
        }}
        ref={sectionRef}
      >
        <div className="text-center">
          <h1
            className="text-ellipsis hover-border font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl "
            ref={headingRef}
          >
            Who We Are?
          </h1>
        </div>
        <div className="flex items-center justify-between md:flex-row flex-col">
          <div className="md:w-2/3 my-8 md:my-20">
            <p className="mb-5 text-xl">
              <span className="font-bold">Accrete -</span> Grow Together
              Organically
            </p>
            <p className="text-xl">
              <span className="font-bold">Concierge -</span> Provide while glove
              assistance&partnership
            </p>
            <p className="md:w-[80%] w-[100%] mt-12">
              Our mission is to help healthCare providers enhance their revenue
              cycle through innovative technology solutions and insightful data
              analysis. Our goal is to optimize revenue and improve financial
              outcomes for our clients.
            </p>
          </div>
          <div className="animate-bounce-slow md:w-[70%] w-[22rem]">
            <img src={mission.src} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
