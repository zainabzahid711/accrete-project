import aboutImage from "@/public/original.jpg";

const TechMeets = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col md:pl-40 md:pr-40 pt-8 p-10 gap-12">
        <div className="w-[100%]">
          <img className="w-[100%]" src={aboutImage.src} />
        </div>
        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl mt-10 font-bold">
            Where Technology Meets Care
          </h1>
          <div className="mt-9 mb-4">
            <div className="border-t-2 w-48 border-grey-600"></div>
          </div>

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
          <div className="mt-9 mb-4">
            <div className="border-t-2 w-32 border-orange-600"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechMeets;
