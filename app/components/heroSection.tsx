"use client";

import { useState, useEffect } from "react";
import Button from "./button";

const CarouselData = [
  {
    id: 1,
    content: "Innovative Medical Technology",
    description:
      "We leverage cutting-edge technology to improve medical billing processes and streamline administrative tasks for healthcare providers.",
    extraText: (
      <>
        <p className="font-bold mt-9 mb-5">
          Stay ahead of the curve with our AI-driven solutions and advanced
          tools.
        </p>
        <p className="font-extralight w-[100%] md:w-[60%]">
          We empower healthcare providers to automate administrative workflows,
          resulting in enhanced efficiency and patient care.
        </p>
      </>
    ),
    bg: "/homePage/medicalTech.jpg",
  },
  {
    id: 2,
    content: "Global Healthcare Solutions",
    description:
      "Our services are available across the globe, enabling healthcare providers to deliver efficient care to patients no matter where they are located.",
    extraText: (
      <>
        <p className="font-bold mt-9 mb-5">
          We help you break geographical boundaries to offer seamless patient
          services.
        </p>
        <p className="font-extralight w-[100%] md:w-[60%]">
          With Accrete Concierge, extend your healthcare services globally while
          optimizing costs and focusing on your core mission—improving lives.
        </p>
      </>
    ),
    bg: "/homePage/entireGlobe.jpg",
  },
  {
    id: 3,
    content: "Satisfied Customers",
    description:
      "Thousands of healthcare providers trust us for our exceptional service, helping them focus on delivering top-notch patient care while we handle the rest.",
    extraText: (
      <>
        <p className="font-bold mt-9 mb-5">
          Boost your practices success with a trusted partner in medical
          billing.
        </p>
        <p className="font-extralight w-[100%] md:w-[60%]">
          Our commitment to satisfaction has enabled healthcare providers to
          focus on what truly matters—patients—while we handle the
          administrative burdens.
        </p>
      </>
    ),
    bg: "/homePage/satisfiedCustomers.jpg",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = CarouselData[currentSlide].bg;
    img.onload = () => {
      setImageLoaded(true);
      setLoading(false);
    };
  }, [currentSlide]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === CarouselData.length - 1 ? 0 : prevSlide + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === CarouselData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? CarouselData.length - 1 : prevSlide - 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <section
      className="relative z-0 md:pl-40 md:pr-40 pt-24 text-white p-10 bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${CarouselData[currentSlide].bg})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Carousel Section"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Loading Indicator */}
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center text-xl text-white">
          Loading...
        </div>
      )}

      {/* Content with Smooth Transition */}
      <div
        className={`relative z-10 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-6xl font-bold fade-in">
          {CarouselData[currentSlide].content}
        </h1>
        <p className="font-extralight w-[100%] md:w-[60%] mt-5">
          {CarouselData[currentSlide].description}
        </p>
        {CarouselData[currentSlide].extraText}
        <div className="flex flex-col md:flex-row mt-8 w-[100%] md:w-[40%] gap-5">
          <Button text="Get in Touch with us" />
          <Button text="Talk to us" />
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {CarouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next and Previous Buttons */}
      <button
        className="absolute md:left-5 left-0 top-1/2 transform -translate-y-1/2 text-2xl text-white p-3"
        onClick={handlePrevious}
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        className="absolute md:right-5 right-0 top-1/2 transform -translate-y-1/2 text-2xl text-white p-3"
        onClick={handleNext}
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </section>
  );
};

export default HeroSection;
