"use client";

import React from "react";
import VerticleCard from "./card/verticleCard";
import Carousel from "./carousal/carousal"; // Import the Carousel

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="relative">
        <Carousel />
        <div className="relative">
          <VerticleCard />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
