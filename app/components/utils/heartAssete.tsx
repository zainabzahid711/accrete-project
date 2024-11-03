import heartIcon from "@/public/homePage/heroIcon.png";
import Image from "next/image";
const HeartAssete = () => {
  return (
    <>
      <div className="animate-heartbeat">
        <Image
          className="opacity-80 md:w-14" // Only use the opacity class here
          src={heartIcon.src}
          alt="Heart Icon"
          width={40} // Width in pixels for w-10 (2.5rem)
          height={40} // Height in pixels for a square icon
          style={{ width: "2.5rem", height: "2.5rem" }} // For small screens
        />
      </div>
    </>
  );
};

export default HeartAssete;
