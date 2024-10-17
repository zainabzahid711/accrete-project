// Carousel.tsx
"use client";
import React, { useState } from "react";

// Define an interface for the carousel item
interface CarouselItem {
  backgroundImage: string;
}

// Define the props for the Carousel component
interface CarouselProps {
  carouselData: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ carouselData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <div
        className="h-full transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="h-full"
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={prevSlide}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        onClick={nextSlide}
      >
        &#10095; {/* Right Arrow */}
      </button>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-4">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
