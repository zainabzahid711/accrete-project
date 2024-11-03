// services card

"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ServiceCardProps {
  image: string;
  text: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  text,
  description,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`w-full p-4 cursor-pointer border-x border-y rounded-md transform transition duration-500 ease-in-out 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        hover:scale-95`}
      // Apply delay based on index for staggered effect
      style={{
        transitionDelay: `${index * 150}ms`, // 150ms delay between each card
      }}
    >
      {/* ----image------ */}
      <div className="items-center flex justify-center rounded-full">
        <Image
          src={image}
          alt={text}
          width={320} // Equivalent to Tailwind's w-80
          height={200} // Matches h-[200px]
          className="rounded-3xl opacity-80 object-cover"
        />
      </div>
      {/* --------text---------- */}
      <div>
        <h3 className="font-bold text-center my-3">{text}</h3>
        <p className="font-medium text-gray-400 w-[100%]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
