"use client";

import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"; // Import the hook
import rate from "@/public/homePage/fastRate.png";
import revenue from "@/public/homePage/revenue.png";
import hoursClaim from "@/public/homePage/clock.png";
import accounts from "@/public/homePage/accounting.png";
import why from "@/public/homePage/why.jpg";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";
import StatCard from "../card/stateCard";
import React from "react";
import Image from "next/image";

const ChooseAccrete: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3, // Adjust the threshold value to control when the animation starts
  });

  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <section
      ref={ref}
      className="animate-slide-up-fade rounded-3xl mx-10 my-8 p-8 md:mx-28 md:my-28 md:p-10 2xl:mx-52 flex flex-col gap-5 md:gap-20"
      style={{
        backgroundImage: `url(/homePage/heroBg.jpeg)`,
      }}
    >
      {/* Container for the text section */}
      <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h3
            ref={headingRef}
            className="text-center hover-border hover:text-blue-800  transform hover:scale-105 hover:rotate-2 hover:shadow-blue-400 font-bold text-3xl md:text-5xl"
          >
            Why Choose Accrete Concierge?
          </h3>
          <p className="mt-2 md:mt-10">
            We combine cutting-edge technology with a commitment to integrity,
            accountability, and personalized support. With Accrete Concierge,
            expect seamless billing, maximum revenue, and a partner who puts
            your success first.
          </p>
        </div>
        <div className="relative w-96 h-96 flex items-center justify-center">
          <div
            className="absolute w-[18rem] h-[18rem] md:w-[30rem] md:h-[25rem] border-8 border-blue-700 rounded-full border-gradient-to-r from-orange-400 via-black to-blue-800
               shadow-lg transition-transform duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-blue-700/50"
          ></div>

          <div className="relative w-[15rem] h-[15rem] md:w-[31rem] md:h-[21rem] rounded-full shadow-xl overflow-hidden transition-transform duration-300 transform hover:scale-105">
            <Image
              src={why.src}
              alt="Why"
              layout="fill" // This fills the container dynamically
              objectFit="cover" // Ensures the image covers the container dimensions
              ref={sectionRef}
            />
          </div>
        </div>
      </div>

      {/* Container for the numbers ----------*/}
      <div className="bg-blue-300 animate-slide-up-fade rounded-3xl w-[100%] md:w-[100%] opacity-80 p-3 md:p-10 items-center justify-center flex flex-col md:flex-row gap-10 md:gap-16">
        {isIntersecting && ( // Trigger animation only when in view
          <>
            {[
              {
                src: rate.src,
                alt: "Client success metrics",
                targetValue: 90,
                description: "Client success metrics",
                showPercentage: true,
              },
              {
                src: revenue.src,
                alt: "Increase in Revenue",
                targetValue: 30,
                description: "Increase in Revenue",
                showPercentage: true,
              },
              {
                src: hoursClaim.src,
                alt: "Hours claimed",
                targetValue: 24,
                description: "Hours claimed",
              },
              {
                src: accounts.src,
                alt: "Days in A/R",
                targetValue: 25,
                description: "Days in A/R",
                showGreaterThan: true,
              },
            ].map((item, index) => (
              <StatCard
                key={index}
                src={item.src}
                alt={item.alt}
                targetValue={item.targetValue}
                description={item.description}
                showPercentage={item.showPercentage}
                showGreaterThan={item.showGreaterThan}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default ChooseAccrete;
