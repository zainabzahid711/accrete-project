import React, { useState, useEffect } from "react";
import heroImage from "@/public/homePage/heroImage.png";
import Image from "next/image";

// Define the data type for carousel items
interface CarouselItem {
  backgroundImage: string;
  title: string;
  description: string;
}

const carouselData: CarouselItem[] = [
  {
    backgroundImage: "/homePage/billing.jpg",
    title: "Accurate and Efficient Medical Billing",
    description:
      "Streamline your medical billing with precision, ensuring every calculation is accounted for.",
  },
  {
    backgroundImage: "/homePage/lifeLine.jpg",
    title: "Care Meets Compliance",
    description:
      "Seamlessly connect healthcare services with billing processes to ensure a smooth experience.",
  },
  {
    backgroundImage: "/homePage/payment.jpg",
    title: "Secure Digital Payments",
    description:
      "Enable fast, secure payments and improve satisfaction with seamless digital billing solutions.",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Automatic slide change every 3-4 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden h-[600px]">
      {/* Background image wrapper */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${carouselData[currentIndex].backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: ".4", // Reduce opacity of background
        }}
      ></div>

      {/* Dark overlay (on top of background but below text) */}
      <div
        className="absolute inset-0 bg-blue-100"
        style={{ opacity: 0.5 }}
      ></div>

      {/* Content wrapper (Text) */}
      <div className="relative z-10 md:px-28 px-10 flex md:flex-row flex-col md:justify-between md:items-center h-full">
        <div className="text-black md:w-[60%] md:pt-0 pt-20">
          <h2 className="text-5xl font-bold">
            {carouselData[currentIndex].title}
          </h2>
          <p className="mt-4 text-lg">
            {carouselData[currentIndex].description}
          </p>
        </div>
        <div className="flex justify-end items-end ml-auto">
          <Image className="-z-10" src={heroImage.src} alt="heroimage" />
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-60 rounded-full p-2 shadow-lg z-20"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-opacity-60 rounded-full p-2 shadow-lg z-20"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &gt;
      </button>

      {/* Dots navigation */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
