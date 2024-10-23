import supportIcon from "@/public/aboutPageAssets/supportIcon.svg";

const ServiceTwntyBySeven = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 rounded-full bg-white p-3 md:p-5 animate-bounce-slow">
        <div>
          <img src={supportIcon.src} className="md:w-10 md:h-10 h-8 w-8" />
        </div>
        <div className="flex flex-col">
          <h5 className="text-black font-medium text-lg">24/7 service</h5>
          <p>We are available when you want</p>
        </div>
      </div>
    </>
  );
};

export default ServiceTwntyBySeven;
