// blog card

"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  text: string;
  description: string;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
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
      className={`w-full p-2 cursor-pointer border rounded-md transform transition duration-500 ease-in-out shadow-md 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
        hover:shadow-lg hover:-translate-y-2`}
      // Apply delay based on index for staggered effect
      style={{
        transitionDelay: `${index * 150}ms`, // 150ms delay between each card
      }}
    >
      {/* ----image------ */}
      <div
        className="inset-0 rounded-md overflow-hidden transition-all duration-500 ease-in-out z-30
           hover:opacity-90"
      >
        <Image
          src={image}
          alt={text}
          width={900}
          height={60}
          className="rounded-3xl opacity-80 transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* --------text---------- */}
      <div
        className="relative z-40 p-3 mt-3 bg-opacity-90 rounded-md transition-all duration-500 
          hover:bg-opacity-100 hover:bg-slate-200 hover:text-black"
      >
        <h3 className="font-bold my-6 text-2xl md:text-3xl hover:text-blue-600">
          {text}
        </h3>
        <p className="font-medium text-gray-600 w-[100%]">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
