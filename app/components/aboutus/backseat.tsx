"use client";
import React from "react";
import backseatImage from "@/public/aboutPageAssets/GlobalHealth.jpg";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";

const Backseat = () => {
  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");
  return (
    <section
      ref={sectionRef}
      className="-mb-44 relative bg-center bg-cover bg-white mx-10 p-4 md:p-20 lg:mx-28 rounded-3xl h-[700px] flex justify-center items-center"
      style={{ backgroundImage: `url(${backseatImage.src})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-transparent to-transparent opacity-70 rounded-3xl"></div>

      <div className="text-black flex flex-col justify-center text-center w-[100%] md:w-[70%]">
        <h2
          className="text-ellipsis hover-border font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl w-[100%] md:w-[100%]"
          ref={headingRef}
        >
          Do not Let Your Health take a backseat!
        </h2>
        <p className="color-changing font-medium text-xl">
          Schedule an appointment with one of our experienced medical
          professionals today!
        </p>
      </div>
    </section>
  );
};

export default Backseat;
