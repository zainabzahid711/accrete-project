import React from "react";
import phoneIcon from "@/public/homePage/svg/mobile.svg";
import stethoScope from "@/public/homePage/svg/ambulance.svg";
import location from "@/public/homePage/svg/pin.svg";

interface Card {
  icon: { src: string };
  title: string;
  description: string;
}

interface CardItemProps {
  icon: { src: string };
  title: string;
  description: string;
}

// Reusable CardItem =------ card content
const CardItem: React.FC<CardItemProps> = ({ icon, title, description }) => (
  <div className="flex items-center justify-center md:gap-3 gap-4">
    <div className="p-4 bg-blue-400 rounded-full">
      <img className="w-6 text-white" src={icon.src} alt={`${title} icon`} />
    </div>
    <div>
      <h5 className="font-medium text-lg md:text-xl text-textColor">{title}</h5>
      <p className="text-gray-400 md:text-lg text-sm">{description}</p>
    </div>
  </div>
);

// Card data array
const cardData: Card[] = [
  {
    icon: phoneIcon,
    title: "Customer Support",
    description: "800-123-4567",
  },
  {
    icon: stethoScope,
    title: "Emergency Services",
    description: "911 or 800-654-3210",
  },
  {
    icon: location,
    title: "Head Office",
    description: "1234 Main St, New York, USA",
  },
];

const VerticleCard: React.FC = () => {
  return (
    <section className="absoulte transform -translate-y-[50%] z-40 shadow-3xl w-[85%] mx-auto gap-6 md:gap-0 flex flex-col md:flex-row justify-around items-center md:p-16 p-8 rounded-3xl bg-gray-100">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
        >
          <CardItem
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </section>
  );
};

export default VerticleCard;
