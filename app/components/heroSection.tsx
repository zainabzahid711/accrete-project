const HeroSection = () => {
  return (
    <>
      <section className="z-0 md:pl-40 md:pr-40 pt-24 text-white p-10 bg-[url('/bgHeroSec.webp')] bg-cover bg-center w-full">
        <h1 className="text-3xl md:text-6xl font-bold ">
          Reclaim your Revenue: Transform Uncollected Claims into Financial
          Success
        </h1>
        <p className="font-bold mt-9 mb-5">
          We enable you to boost Your Collections, Lower Costs, Empower Patient
          Care
        </p>
        <p className="font-extralight w-[100%] md:w-[60%]">
          Transform your medical practice with Accrete Concierges specialized
          administrative and billing solutions. Trusted by healthcare providers
          for our excellence in boosting collections and reducing operational
          costs, we enable you to concentrate on patient care.
        </p>
        <div className="flex md:flex-row mt-4 flex-col w-[100%] md:w-[40%] gap-5">
          <button className="bg-btnBackground text-white p-4 font-bold rounded-sm">
            Get in Touch with us
          </button>
          <button className="bg-btnBackground text-white p-4 font-bold rounded-sm">
            Talk to us
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
