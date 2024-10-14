"use client";

import React, { ReactNode } from "react";
import Button from "./button";
import Image, { StaticImageData } from "next/image";

interface AboutProps {
  image: string | StaticImageData;
  text: string;
  buttonText: string;
  paragraphs: ReactNode[];
  reverse?: boolean;
}

const AboutSection: React.FC<AboutProps> = ({
  image,
  text,
  buttonText,
  paragraphs,
  reverse = false,
}) => {
  return (
    <section
      className={`about-container flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col md:pl-40 md:pr-40 pt-8 p-10 gap-12 relative group`}
    >
      <div className="absolute inset-0 z-0 bg-gray-100"></div>

      <div className="md:mt-28 mt-0 fade-in z-10 relative">
        <h1 className="text-3xl font-bold md:text-4xl mt-10 transition duration-300 ease-in-out group-hover:text-blue-400">
          <span className="inline-block pb-2 md:pb-4">{text}</span>
        </h1>

        {paragraphs.map((para, index) => (
          <p key={index} className="mt-3 transition duration-300 ease-in-out">
            {para}
          </p>
        ))}

        <div className="flex mt-8 justify-center items-center">
          <Button text={buttonText} />
        </div>
      </div>
      <div className="relative max-w-full sm:max-w-lg mx-auto">
        <Image
          src={image}
          alt="About our company"
          className="w-full transition-transform duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-black"
        />
      </div>
    </section>
  );
};

export default AboutSection;
