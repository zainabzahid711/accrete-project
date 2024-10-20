// values card

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
      className={`md:w-[40%] w-[100%] transition-all duration-300 rounded-3xl shadow-2xl p-10 transform border-x-2 hover:-translate-y-2 border-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex gap-3 items-center cursor-pointer w-full rounded-3xl p-4 transition-all duration-300 hover:bg-blue-400">
        <div className="rounded-full p-2 transition-all duration-300 bg-blue-500">
          <img src={icon.src} className="w-8" aria-label={text} />
        </div>
        <h5 className="font-medium md:text-lg text-sm">{text}</h5>
      </div>
      <div className="text-gray-400">{description}</div>
    </div>
  );
};

export default Card;
