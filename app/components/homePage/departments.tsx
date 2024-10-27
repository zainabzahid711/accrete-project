"use client";

import { useRef, useEffect } from "react";
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200, // Adjust this value for scroll distance
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200, // Adjust this value for scroll distance
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollWidth = scrollRef.current.scrollWidth;
        const scrollLeft = scrollRef.current.scrollLeft;
        const clientWidth = scrollRef.current.clientWidth;

        // If scrolled to the end, reset to the beginning
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        }
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
  }, []);

  return (
    <>
      <section
        className="animate-slide-up-fade group rounded-3xl md:px-28 px-10 p-16 bg-cover bg-center md:mx-28 mx-8 my-20 md:mt-28 mb-52  relative"
        style={{ backgroundImage: `url(${departmentBG.src})`, height: "250px" }}
      >
        <div className="text-center">
          <h3 className="hover-border cursor-pointer font-bold text-center text-2xl md:text-3xl mb-8">
            Experties
          </h3>
        </div>

        <div className="flex items-center justify-center w-[100%] relative">
          <button
            onClick={scrollLeft}
            className="z-10 hidden group-hover:flex items-center justify-center text-center text-5xl p-2 mr-4 bg-white text-blue-400 rounded-full shadow hover:bg-blue-300 absolute md:left-0 -left-16"
          >
            &#8592;
          </button>

          <div
            ref={scrollRef}
            className="flex md:gap-10 gap-7 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollSnapType: "x mandatory",
              scrollSnapAlign: "start",
            }}
          >
            {/* Duplicate content for infinite scroll illusion */}
            {[...Array(2)].map((_, idx) => (
              <div className="flex gap-10" key={idx}>
                <IconCard icon={depOne} text="emergency experties" />
                <IconCard icon={depTwo} text="pediatric experties" />
                <IconCard icon={depThree} text="gynecology experties" />
                <IconCard icon={depFour} text="cardiology experties" />
                <IconCard icon={depFive} text="neurology experties" />
                <IconCard icon={depSix} text="psychiatry experties" />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="z-10 hidden group-hover:flex text-5xl p-2 ml-4 bg-white text-blue-400 rounded-full shadow hover:bg-blue-300 absolute md:right-0 -right-16"
          >
            &#8594;
          </button>
        </div>
      </section>
    </>
  );
};

export default Department;
