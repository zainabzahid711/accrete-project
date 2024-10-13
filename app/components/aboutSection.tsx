"use client";

import React from "react";
import Button from "./button";
import Image, { StaticImageData } from "next/image";

interface AboutProps {
  image: string | StaticImageData;
  text: string;
}

const AboutSection: React.FC<AboutProps> = ({ image, text }) => {
  return (
    <section className="about-container flex md:flex-row flex-col md:pl-40 md:pr-40 pt-8 p-10 gap-12 relative group">
      <div className="absolute inset-0 z-0 bg-gray-100"></div>
      <div className="relative max-w-full sm:max-w-lg mx-auto">
        <Image
          src={image}
          alt="About our company"
          className="w-full transition-transform duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-black"
        />
      </div>
      <div className="mt-10 fade-in z-10 relative">
        <h1 className="text-4xl md:text-5xl mt-10 transition duration-300 ease-in-out group-hover:text-blue-400">
          <span className="inline-block md:border-b-2 md:border-orange-500 pb-2 md:pb-4">
            {text}
          </span>
        </h1>

        <p className="mt-16 transition duration-300 ease-in-out">
          <span className="font-bold">Boost Collections, Cut Costs:</span> Our
          specialized services in medical billing, data analytics, and custom
          technical solutions are designed to increase your revenue while
          significantly reducing operational expenses.
        </p>
        <p className="mt-10 transition duration-300 ease-in-out">
          <span className="font-bold">Concierge-Style Onboarding:</span>{" "}
          Experience seamless integration into our services with our
          concierge-style onboarding process, ensuring a smooth transition and
          immediate impact on your practices efficiency and bottom line.
        </p>
        <p className="mt-10 mb-9 transition duration-300 ease-in-out">
          <span className="font-bold">Tech-Driven Efficiency:</span> Embrace the
          future with our advanced systems and software, designed for seamless
          integration and maximum impact on your practices financial health.
        </p>
        <div className="flex justify-center items-center">
          <Button text="Book a Demo Call" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
