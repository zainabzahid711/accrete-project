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
          Boost your practice’s success with a trusted partner in medical
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === CarouselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 9000);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <section
      className="relative z-0 md:pl-40 md:pr-40 pt-24 text-white p-10 bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${CarouselData[currentSlide].bg})` }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${CarouselData[currentSlide].bg})` }}
      />
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-6xl font-bold ">
          {CarouselData[currentSlide].content}
        </h1>
        <p className="font-extralight w-[100%] md:w-[60%] mt-5">
          {CarouselData[currentSlide].description}
        </p>
        {CarouselData[currentSlide].extraText}
        <div className="flex md:flex-row mt-8 flex-col w-[100%] md:w-[40%] gap-5">
          <Button text="Get in Touch with us" />
          <Button text="Talk to us" />
        </div>
      </div>

      {/* next prevoius Buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl text-white p-3"
        onClick={handlePrevious}
      >
        &lt;
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-2xl text-white p-3"
        onClick={handleNext}
      >
        &gt;
      </button>
    </section>
  );
};

export default HeroSection;
