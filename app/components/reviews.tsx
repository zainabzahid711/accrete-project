"use client";
import React, { useState } from "react";
import Image from "next/image";
import userOne from "@/public/homePage/user1.jpg";
import userTwo from "@/public/homePage/user2.jpg";
import qoutes from "@/public/homePage/svg/quote.svg";
import { StaticImageData } from "next/image";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

interface Testimonial {
  name: string;
  location: string;
  avatar: StaticImageData;
  text: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    name: "PAULO HUBERT",
    location: "New York, USA",
    avatar: userOne,
    text: "I recently had to bring my child to ProHealth for a minor injury, and I was so impressed with the care he received. The pediatrician was great with him and made him feel at ease, and the entire staff was kind and attentive.",
    rating: 90,
  },
  {
    name: "LAURENCE VENDETTA",
    location: "California, USA",
    avatar: userTwo,
    text: "Their service is amazing! Every time I visit, I leave satisfied with the care I receive. Definitely the best health care provider in the area.",
    rating: 80,
  },
];

const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set the default activeIndex to 1 (middle user)

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <section className="md:px-28 px-10 my-20" ref={sectionRef}>
      <div className="text-center mb-5">
        <h3
          ref={headingRef}
          className="animate-slide-up-fade hover-border font-bold text-2xl md:text-5xl mb-5"
        >
          Some Reviews
        </h3>
        <p className="text-lg md:text-xl">OF OUR CLIENTS</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Left side with users */}
        <div className="flex-1 flex items-center justify-center">
          <ul className="md:gap-5 gap-1 flex flex-row md:flex-col items-center justify-center">
            {testimonialsData.map((testimonial, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-8 p-3 md:p-5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gray-200 shadow-2xl scale-110"
                    : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Display the avatar */}
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className={`rounded-full transition-all duration-300 ${
                      index === activeIndex ? "border-4 border-blue-500" : ""
                    }`}
                    style={{ minWidth: 50, minHeight: 50 }}
                  />
                  {/* Display user's name and location */}
                  <div className="text-center mt-2 ml-3">
                    <h4 className="text-[12px] md:text-lg md:font-medium">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 md:block hidden">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Vertical line */}
        <div className="md:w-1 md:h-96 w-full h-1 bg-blue-500 mx-8 mb-10"></div>

        {/* Right side with the active testimonial */}
        <div className="flex-1 text-center md:text-left">
          <img src={qoutes.src} className="w-10" />
          <p className="text-xl md:ml-20 text-gray-400">
            {testimonialsData[activeIndex].text}
          </p>
          <div className="flex justify-center md:justify-start">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fa fa-star ${
                  i < Math.floor(testimonialsData[activeIndex].rating / 20)
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
              ></i>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
