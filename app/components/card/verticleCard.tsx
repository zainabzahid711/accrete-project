import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver"; // Import the hook
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
  <div className="flex items-center justify-center md:gap-3 gap-4 w-[100%]">
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
    description: "1234 Main St, California USA",
  },
];

const VerticleCard: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3, // Start animation when 30% of the card is visible
  });

  return (
    <section
      ref={ref} // Attach the ref to the section to monitor visibility
      className="absoulte transform transition-all duration-300 md:-translate-y-[41%] -translate-y-[16%] z-40 shadow-3xl w-[85%] mx-auto gap-6 md:gap-0 flex flex-col md:flex-row justify-around items-center md:p-16 p-8 rounded-3xl bg-gray-100"
    >
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className=" cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
          initial={{ opacity: 0, y: 50 }} // Animation starts hidden
          animate={{
            opacity: isIntersecting ? 1 : 0,
            y: isIntersecting ? 0 : 50,
          }} // Animate when the section is visible
          transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation for each card
        >
          <CardItem
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default VerticleCard;
