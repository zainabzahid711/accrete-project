"use client";

import IncrementingNumber from "../utils/incrementingNums";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"; // Import the hook
import rate from "@/public/homePage/fastRate.png";
import revenue from "@/public/homePage/revenue.png";
import hoursClaim from "@/public/homePage/clock.png";
import accounts from "@/public/homePage/accounting.png";
import why from "@/public/homePage/why.jpg";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";
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
      className="animate-slide-up-fade rounded-3xl mx-10 my-8 p-8 md:mx-28 md:my-28 md:p-10 flex flex-col gap-5 md:gap-20"
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
      <div
        className="bg-blue-300 animate-slide-up-fade rounded-3xl w-[100%] md:w-[100%] opacity-80 p-3 md:p-10 items-center justify-center flex flex-col md:flex-row gap-10 md:gap-16"
        // style={{
        //     // backgroundImage: `url(/homePage/heroBg.jpg)`,
        //   }}
      >
        {isIntersecting && ( // Trigger animation only when in view
          <>
            <div className="flex justify-center items-center gap-5">
              {/* <Image className="w-8 md:w-12 opacity-70" src={rate.src} /> */}
              <div className="relative w-8 md:w-12">
                <Image
                  src={rate.src}
                  alt="choice"
                  layout="responsive"
                  width={32} // Base width for w-8
                  height={32} // Base height for a square aspect ratio
                  className="opacity-70"
                />
              </div>
              <div className="flex flex-col md:gap-4 justify-center items-center">
                <p className="font-bold md:text-6xl text-2xl">
                  <IncrementingNumber
                    targetValue={90}
                    duration={2000}
                    showPercentage={true}
                  />
                </p>
                <p className="text-black font-medium">Client success metrics</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              {/* <Image className="w-8 md:w-12 opacity-70" src={revenue.src} /> */}
              <div className="relative w-8 md:w-12">
                <Image
                  src={revenue.src}
                  alt="choice"
                  layout="responsive"
                  width={32} // Base width for w-8
                  height={32} // Base height for a square aspect ratio
                  className="opacity-70"
                />
              </div>
              <div className="flex flex-col md:gap-4 justify-center items-center">
                <p className="font-bold md:text-6xl text-2xl">
                  <IncrementingNumber
                    targetValue={30}
                    duration={2000}
                    showPercentage={true}
                  />
                </p>
                <p className="text-black font-medium">Increase in Revenue</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              {/* <img className="w-8 md:w-12 opacity-70" src={hoursClaim.src} /> */}
              <div className="relative w-8 md:w-12">
                <Image
                  src={hoursClaim.src}
                  alt="choice"
                  layout="responsive"
                  width={32} // Base width for w-8
                  height={32} // Base height for a square aspect ratio
                  className="opacity-70"
                />
              </div>
              <div className="flex flex-col md:gap-4 justify-center items-center">
                <p className="font-bold md:text-6xl text-2xl">
                  <IncrementingNumber targetValue={24} duration={2000} />
                </p>
                <p className="text-black font-medium">Hours claimed</p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-5">
              <div className="relative w-8 md:w-12">
                <Image
                  src={accounts.src}
                  alt="choice"
                  layout="responsive"
                  width={32} // Base width for w-8
                  height={32} // Base height for a square aspect ratio
                  className="opacity-70"
                />
              </div>
              <div className="flex flex-col md:gap-4 justify-center items-center">
                <p className="font-bold md:text-6xl text-2xl">
                  <IncrementingNumber
                    targetValue={25}
                    duration={2000}
                    showGreaterThan={true}
                  />
                </p>
                <p className="text-black font-medium">Days in A/R</p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ChooseAccrete;
