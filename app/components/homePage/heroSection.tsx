"use client";

import React, { useState } from "react";
import VerticleCard from "../card/verticleCard";
import doctor from "@/public/homePage/doctor.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection: React.FC = () => {
  const [showCursor, setShowCursor] = useState(false);
  return (
    <>
      <section className="relative">
        <div className="bg-hero-bg bg-blue-400">
          <div className="md:px-28 px-10 p-10 flex justify-between md:flex-row flex-col">
            <div className="flex flex-col justify-center">
              <h1 className="hover-border font-bold text-5xl w-[80%]">
                <Typewriter
                  words={["Medical Billing Services we Offer"]}
                  loop={1} // Set loop to `1` for typing the sentence once
                  cursor={showCursor} // Control cursor visibility
                  // cursorStyle="|" // Cursor style
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={() => setShowCursor(false)} // Hide cursor after typing is done
                />
              </h1>
              <p className="color-changing font-medium mt-8 w-[70%]">
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
