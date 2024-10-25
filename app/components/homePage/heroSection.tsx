"use client";

import React, { useState } from "react";
import VerticleCard from "../card/verticleCard";
import { Typewriter } from "react-simple-typewriter";

interface HeroSectionProps {
  mainText: string;
  subText: string;
  mainImage: string;
  animateAsset: JSX.Element;
  extraAnimateAsset?: JSX.Element; // Optional prop for extra animation in the About page
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainText,
  subText,
  mainImage,
  animateAsset,
  extraAnimateAsset,
}) => {
  const [showCursor, setShowCursor] = useState(false);
  return (
    <>
      <section className="relative max-h-full">
        <div className="bg-hero-bg bg-blue-400 h-[600px]">
          <div className="md:px-28 px-10 p-12 flex md:flex-row flex-col">
            <div className="flex flex-col mt-5 md:mt-14 w-full">
              <h1 className="text-ellipsis hover-border font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl w-[100%] md:w-[100%]">
                <Typewriter
                  words={[mainText]}
                  loop={1}
                  cursor={showCursor}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={() => setShowCursor(false)}
                />
              </h1>
              <p className="color-changing font-medium mt-8 w-[100%] md:w-[70%] xl:w-[100%] xl:text-lg">
                {subText}
              </p>
            </div>
            <div className="relative mt-2 md:mt-0 z-auto ml-1 md:ml-auto">
              <img
                className="w-[100%] md:w-[50rem] xl:w-[60rem]"
                src={mainImage}
                alt="Main"
              />

              {/* AnimateAsset positioned on top of mainImage */}
              <div className="absolute w-full">{animateAsset}</div>

              {/* Conditionally render extra animate asset if passed */}
              {extraAnimateAsset && (
                <div className="absolute top-5 -right-4 md:right-10">
                  {extraAnimateAsset}
                </div>
              )}
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
