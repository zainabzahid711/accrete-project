"use client";

import React, { useState } from "react";
import VerticleCard from "../card/verticleCard";
import doctor from "@/public/homePage/doctor.png";
import { Typewriter } from "react-simple-typewriter";
import AnimateAssete from "../utils/animatedAssete";

const HeroSection: React.FC = () => {
  const [showCursor, setShowCursor] = useState(false);
  return (
    <>
      <section className="relative">
        <div className="bg-hero-bg bg-blue-400">
          <div className="md:px-28 px-10 p-12 flex md:flex-row flex-col">
            <div className="flex flex-col justify-center">
              <h1 className="hover-border font-bold text-3xl md:text-5xl w-[100%] md:w-[80%]">
                <Typewriter
                  words={["Medical Billing Services we Offer"]}
                  loop={1}
                  cursor={showCursor} // Control cursor visibility
                  // cursorStyle="|" // Cursor style
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={() => setShowCursor(false)}
                />
              </h1>
              <p className="color-changing font-medium mt-8 w-[100%] md:w-[70%]">
                Streamline your medical billing with precision, ensuring every
                calculation is accounted for.
              </p>
            </div>
            <div className="relative mt-10 md:mt-0 z-auto ml-1 md:ml-auto">
              <img className=" w-[100%] md:w-96" src={doctor.src} />

              {/* AnimateAssete positioned on top of doctor image */}
              <div className="absolute bottom-20 -left-16 md:bottom-28 md:-left-64 transform translate-x-6 translate-y-6">
                <AnimateAssete />
              </div>
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
