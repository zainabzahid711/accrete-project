"use client";

import React, { useState, useEffect } from "react";
import VerticleCard from "../card/verticleCard";
import Image from "next/image";

interface HeroSectionProps {
  mainText: string;
  subText?: string;
  mainImage: string;
  animateAsset?: JSX.Element;
  extraAnimateAsset?: JSX.Element;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainText,
  subText,
  mainImage,
  animateAsset,
  extraAnimateAsset,
  backgroundImage,
}) => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  useEffect(() => {
    setBgImage(backgroundImage); // Set the background image after component mounts
  }, [backgroundImage]);
  return (
    <>
      <section className=" relative max-h-full bg-cover bg-center opacity-90 bg-no-repeat">
        <div
          // className="h-[560px] "
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : "none",
          }}
        >
          <div className="md:px-28 px-10 p-12 flex md:flex-row flex-col">
            <div className="flex flex-col mt-5 md:mt-14 w-full">
              <h1 className="animate-slide-up-fade text-ellipsis hover-border font-bold text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl w-[100%] md:w-[100%]">
                <span style={{ color: "black" }}>
                  {mainText.split(" ")[0]}{" "}
                </span>
                <span style={{ color: "#F3AD20" }}>
                  {mainText.split(" ")[1]}{" "}
                </span>
                <span style={{ color: "black" }}>
                  {mainText.split(" ")[2]}{" "}
                </span>
                <span style={{ color: "black" }}>
                  {mainText.split(" ")[3]}{" "}
                </span>
                <span style={{ color: "green" }}>
                  {mainText.split(" ")[4]}{" "}
                </span>
                <span style={{ color: "black" }}>
                  {mainText.split(" ")[5]}{" "}
                </span>
                <span style={{ color: "black" }}>
                  {mainText.split(" ")[6]}{" "}
                </span>
              </h1>
              <p className="color-changing font-bold mt-8 w-[100%] md:w-[70%] xl:w-[100%] xl:text-2xl">
                {subText}
              </p>
            </div>
            <div className="animate-bounce-slow relative mt-2 md:mt-0 z-auto ml-1 md:ml-auto">
              {/* <img
                className="w-[100%] md:w-[40rem] lg:w-[50rem]"
                src={mainImage}
                alt="Main"
              /> */}

              <div className="relative w-full md:w-[30rem]">
                <Image
                  src={mainImage}
                  alt="Main"
                  layout="responsive" // Makes the image responsive
                  width={800}
                  height={600}
                />
              </div>

              {extraAnimateAsset && (
                <>
                  <div className="absolute w-full">{animateAsset}</div>

                  <div className="absolute top-5 -right-4 md:right-10">
                    {extraAnimateAsset}
                  </div>
                </>
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
