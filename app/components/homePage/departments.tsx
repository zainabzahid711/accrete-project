"use client";

import { useState, useRef, useEffect } from "react";
import IconCard from "../card/iconCard";

import departmentBG from "@/public/homePage/heroBg.jpeg";

import depOne from "@/public/homePage/svg/departmentIcon1.svg";
import depTwo from "@/public/homePage/svg/departmentIcon2.svg";
import depThree from "@/public/homePage/svg/departmentIcon3.svg";
import depFour from "@/public/homePage/svg/departmentIcon4.svg";
import depFive from "@/public/homePage/svg/departmentIcon5.svg";
import depSix from "@/public/homePage/svg/departmentIcon6.svg";

const Department = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  const departments = [
    { icon: depOne, text: "emergency" },
    { icon: depTwo, text: "pediatric" },
    { icon: depThree, text: "gynecology" },
    { icon: depFour, text: "cardiology" },
    { icon: depFive, text: "neurology" },
    { icon: depSix, text: "psychiatry" },
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
      className="animate-slide-up-fade group rounded-3xl md:px-28 px-10 p-16 bg-cover bg-center md:mx-28 mx-8 my-20 md:mt-28 mb-52 relative"
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
              <IconCard icon={dep.icon} text={dep.text} />
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
