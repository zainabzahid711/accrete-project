import supportIcon from "@/public/aboutPageAssets/supportIcon.svg";
import Image from "next/image";

const ServiceTwntyBySeven = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 rounded-full bg-white p-3 md:p-5 animate-bounce-slow">
        {/* <div>
          <img src={supportIcon.src} className="md:w-10 md:h-10 h-8 w-8" />
        </div> */}
        <div className="flex justify-center items-center">
          <Image
            src={supportIcon.src}
            alt="Support Icon"
            width={32} // Width for small screens (8 * 4px = 32px)
            height={32} // Height for small screens (8 * 4px = 32px)
            className="md:w-10 md:h-10 w-8 h-8" // Tailwind classes can still apply for styling
            style={{ width: "2rem", height: "2rem" }} // Adjust for small screens
          />
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
