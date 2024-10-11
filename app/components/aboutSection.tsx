import aboutImage from "@/public/aboutImagee.jpg";

const AboutSection = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col md:pl-40 md:pr-40 pt-8 p-10 gap-12">
        <div>
          <img className="w-[100%]" src={aboutImage.src} alt="about" />
        </div>
        <div className="mt-10">
          <button className="bg-prupleColor rounded-3xl p-2 md:w-[20%] w-[100%] text-white">
            about us
          </button>
          <h1 className="text-4xl md:text-5xl mt-10">
            <span className="inline-block md:border-b-2 md:border-orange-500 pb-2 md:pb-4">
              We Are
            </span>{" "}
            <span className="inline-block">Here to</span>
            <span className="font-bold ml-1 md:ml-3">Help!</span>
          </h1>

          <p className="mt-16">
            <span className="font-bold">Boost Collections, Cut Costs:</span> Our
            specialized services in medical billing, data analytics, and custom
            technical solutions are designed to increase your revenue while
            significantly reducing operational expenses.
          </p>
          <p className="mt-10">
            <span className="font-bold"> Concierge-Style Onboarding:</span>{" "}
            Experience seamless integration into our services with our
            concierge-style onboarding process, ensuring a smooth transition and
            immediate impact on your practices efficiency and bottom line
          </p>
          <p className="mt-10">
            <span className="font-bold"> Tech-Driven Efficiency:</span> Embrace
            the future with our advanced systems and software, designed for
            seamless integration and maximum impact on your practices financial
            health.
          </p>
          <div className="flex justify-center items-center">
            <button className="bg-btnBackground mt-10 text-white p-4 font-bold rounded-sm">
              Book a demo call
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
