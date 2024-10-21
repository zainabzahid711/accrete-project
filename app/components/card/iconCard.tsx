// department card
import React from "react";

interface IconCardProps {
  icon: { src: string };
  text: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, text }) => {
  return (
    <div className="cursor-pointer w-[100%] md:w-[20%] p-16 md:p-10 rounded-2xl flex flex-col items-center justify-center transform hover:-translate-y-2 bg-gray-100 hover:bg-blue-400">
      <img className="w-20" src={icon.src} alt={text} />
      <h3 className="mt-3 font-medium flex items-center justify-center text-center text-lg hover:text-white">
        {text}
      </h3>
    </div>
  );
};

export default IconCard;
