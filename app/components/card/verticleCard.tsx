import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver"; // Import the hook
import phoneIcon from "@/public/homePage/svg/mobile.svg";
import location from "@/public/homePage/svg/pin.svg";
import Image from "next/image";

interface Card {
  icon: { src: string };
  title: string;
  description: string;
  isSpecial?: boolean; // Flag for special styling
}

interface CardItemProps {
  icon: { src: string };
  title: string;
  description: string;
  isSpecial?: boolean; // Prop to identify special cards
}

// Reusable CardItem =------ card content
const CardItem: React.FC<CardItemProps> = ({
  icon,
  title,
  description,
  isSpecial,
}) => (
  <div
    className={`flex items-center justify-center md:gap-3 gap-2 w-[100%] ${
      isSpecial
        ? "bg-blue-500 text-white w-[100%] p-3 rounded-full relative"
        : ""
    }`}
  >
    <div
      className={`${
        isSpecial ? "bg-transparent" : "p-4 bg-blue-400 rounded-full"
      }`}
    >
      <Image
        className="w-6"
        width={24}
        height={24}
        src={icon.src}
        alt={`${title} icon`}
      />
    </div>
    <div>
      <h5
        className={`font-medium text-sm md:text-xl ${
          isSpecial ? "text-white" : "text-textColor"
        }`}
      >
        {title}
      </h5>
      <p
        className={`md:text-lg text-sm ${
          isSpecial ? "text-white " : "text-black font-serif"
        }`}
      >
        {description}
      </p>
    </div>
  </div>
);

// Card data array
const cardData: Card[] = [
  {
    icon: phoneIcon,
    title: "Customer Support",
    description: "470-802-4555",
  },
  {
    icon: location,
    title: "Head Office",
    description: "Cumming, GA",
  },
];

const VerticleCard: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3, // Start animation when 30% of the card is visible
  });

  return (
    <section
      ref={ref} // Attach the ref to the section to monitor visibility
      className="absoulte transform transition-all duration-300 md:-translate-y-[41%] -translate-y-[16%] z-40 shadow-2xl w-[70%] mx-auto gap-6 md:gap-4 flex flex-col md:flex-row justify-center md:justify-around items-center md:p-14 p-8 rounded-3xl bg-blue-100"
    >
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="cursor-pointer transform  transition-all duration-300 hover:-translate-y-2"
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
            isSpecial={card.isSpecial}
          />
        </motion.div>
      ))}
    </section>
  );
};

export default VerticleCard;
