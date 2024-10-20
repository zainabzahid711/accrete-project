"use client";

import React from "react";
import VerticleCard from "../card/verticleCard";
import doctor from "@/public/homePage/doctor.png";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative">
        <div className="bg-hero-bg bg-blue-400">
          <div className="md:px-28 px-10 p-10 flex justify-between md:flex-row flex-col">
            <div className="flex flex-col justify-center">
              <h1 className="hover-border font-bold text-5xl w-[80%]">
                Accurate and Efficient Medical Billing
              </h1>
              <p className="mt-12 w-[70%]">
                Streamline your medical billing with precision, ensuring every
                calculation is accounted for.
              </p>
            </div>
            <div className="z-auto">
              <img className="w-96" src={doctor.src} />
            </div>
          </div>
        </div>
        <div className="relative">
          <VerticleCard />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
