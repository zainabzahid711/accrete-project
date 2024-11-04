// department card
import React from "react";
import Image from "next/image";

interface IconCardProps {
  icon: { src: string };
  text: string;
  description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, text, description }) => {
  return (
    <div className="cursor-pointer w-56 md:w-60 md:h-64 p-5 md:p-0 rounded-2xl flex flex-col items-center justify-center transform hover:-translate-y-2 bg-gray-100 hover:bg-blue-400 hover:text-black">
      <Image
        width={60}
        height={60}
        // className="w-20"
        src={icon.src}
        alt={text}
      />
      <div className="text-center flex flex-col gap-3">
        <h3 className="mt-3 font-medium flex items-center justify-center text-center text-lg hover:text-white">
          {text}
        </h3>
        <p className="text-sm text-gray-400 hover:text-white">{description}</p>
      </div>
      <style jsx>{`
        div:hover h3 {
          color: white; /* Change title color on card hover */
        }
        div:hover p {
          color: white; /* Change description color on card hover */
        }
      `}</style>
    </div>
  );
};

export default IconCard;
