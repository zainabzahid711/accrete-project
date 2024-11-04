"use client";

import { useState, useRef, useEffect } from "react";
import IconCard from "../card/iconCard";

import departmentBG from "@/public/homePage/heroBg.jpeg";

import painMng from "@/public/homePage/svg/painMang.png";
import orthopadics from "@/public/homePage/svg/orthopedics.png";
import pain from "@/public/homePage/svg/pain.png";
import behavoiur from "@/public/homePage/svg/behavioral.png";
import primaryCare from "@/public/homePage/svg/primaryCare.png";
import dermis from "@/public/homePage/svg/dermis.png";
import gyne from "@/public/homePage/svg/gyne.png";
import internalMed from "@/public/homePage/svg/medicine.png";

const Department = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const departments = [
    {
      icon: painMng,
      text: "Pain Management",
      description:
        "Expertise in handling complex billing for various pain management treatments and procedures.",
    },
    {
      icon: orthopadics,
      text: "Orthopedics",
      description:
        "Specialized in managing billing for orthopedic surgeries and treatments, ensuring accurate coding and timely reimbursements.",
    },
    {
      icon: pain,
      text: "Interventional Pain",
      description:
        "Proficient in billing for interventional pain procedures like nerve blocks and spinal injections.",
    },
    {
      icon: behavoiur,
      text: "Behavioral Health",
      description:
        "Skilled in navigating the intricate billing codes and regulations specific to behavioral health services.",
    },
    {
      icon: primaryCare,
      text: "Primary Care",
      description:
        "Efficient in managing high patient volumes and streamlining the revenue cycle for primary care practices.",
    },
    {
      icon: dermis,
      text: "Dermatology",
      description:
        "Experienced in handling billing for dermatological services, including treatments and cosmetic procedures.",
    },
    {
      icon: gyne,
      text: "OB/GYN",
      description:
        "Knowledgeable in the specific codes and frequent updates required for obstetrics and gynecology billing.",
    },
    {
      icon: internalMed,
      text: "Internal Medicine",
      description:
        "Capable of managing the broad range of services and procedures in internal medicine with expert billing support.",
    },
  ];

  useEffect(() => {
    const updateCardWidth = () => {
      const firstCard = scrollRef.current?.querySelector(
        ".flex-shrink-0"
      ) as HTMLDivElement;
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      // left: cardWidth,
      // behavior: "smooth",
      scrollRef.current.scrollLeft += cardWidth;
    }
  };

  // Handling infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      // Reset to the start if scrolled beyond the last set of cards
      if (scrollLeft < 0) {
        scrollRef.current.scrollLeft = scrollWidth / 2 - clientWidth; // Jump to the middle set of cards
      } else if (scrollLeft > maxScrollLeft - cardWidth) {
        scrollRef.current.scrollLeft = scrollWidth / 2 - clientWidth; // Jump to the middle set of cards
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref) {
        ref.removeEventListener("scroll", handleScroll);
      }
    };
  }, [cardWidth]);

  return (
    <section
      id="departments"
      className="animate-slide-up-fade group rounded-3xl md:px-28 px-10 p-16 bg-cover bg-center md:mx-28 mx-8 my-20 md:mt-28 mb-64 relative"
      style={{ backgroundImage: `url(${departmentBG.src})`, height: "250px" }}
    >
      <div className="text-center">
        <h3 className="hover-border cursor-pointer font-bold text-center text-2xl md:text-3xl mb-8">
          Experties
        </h3>
      </div>

      <button
        onClick={scrollLeft}
        className="z-50 group-hover:flex items-center justify-center text-center text-5xl p-2 mr-4 bg-white text-blue-400 rounded-full shadow hover:bg-blue-300 absolute -bottom-12 md:-bottom-10 md:left-12 -left-6"
      >
        &#8592;
      </button>

      <div className="flex items-center justify-center w-full relative">
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{
            scrollSnapType: "x mandatory",
          }}
        >
          {/* Duplicate content for infinite scroll illusion */}
          {[...departments, ...departments].map((dep, index) => (
            <div
              className="flex-shrink-0"
              key={index}
              style={{ scrollSnapAlign: "center" }}
            >
              <IconCard
                icon={dep.icon}
                text={dep.text}
                description={dep.description}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollRight}
        className="z-50 group-hover:flex text-5xl p-2 ml-4 bg-white text-blue-400 rounded-full shadow hover:bg-blue-300 absolute top-60 md:top-52 md:right-12 -right-2"
      >
        &#8594;
      </button>
    </section>
  );
};

export default Department;
