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
        <div className="bg-hero-bg bg-blue-400">
          <div className="md:px-28 px-10 p-12 flex md:flex-row flex-col">
            <div className="flex flex-col mt-16 md:mt-36 w-full">
              <h1 className="text-ellipsis hover-border font-bold text-3xl md:text-5xl w-[100%] md:w-[90%]">
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
              <p className="color-changing font-medium mt-8 w-[100%] md:w-[70%]">
                {subText}
              </p>
            </div>
            <div className="relative mt-10 md:mt-0 z-auto ml-1 md:ml-auto">
              <img
                className="w-[100%] md:w-[50rem]"
                src={mainImage}
                alt="Main"
              />

              {/* AnimateAsset positioned on top of mainImage */}
              <div className="absolute bottom-20 -left-16 md:bottom-28 md:-left-64 transform translate-x-6 translate-y-6">
                {animateAsset}
              </div>

              {/* Conditionally render extra animate asset if passed */}
              {extraAnimateAsset && (
                <div className="absolute top-5 -right-5">
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
