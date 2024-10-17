"use client";
import { useEffect, useState, useRef } from "react";

interface CardProps {
  icon: { src: string };
  text: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, text, description }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
      className={`md:w-[40%] w-[100%] rounded-3xl shadow-2xl p-10 transition-opacity duration-700 transform border-x-2 border-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex gap-3 items-center cursor-pointer  transform transition-all duration-300 w-full rounded-3xl p-4 hover:bg-blue-400 hover:-translate-y-2">
        <div className="bg-blue-500 rounded-full p-2">
          <img src={icon.src} className="w-8" aria-label={text} />
        </div>
        <h5 className="font-medium md:text-lg text-sm">{text}</h5>
      </div>
      <div className=" text-gray-400">{description}</div>
    </div>
  );
};

export default Card;
