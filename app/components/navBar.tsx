"use client";

import Image from "next/image";
import Logo from "@/public/logoFinal.png";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [active, setActive] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-around pt-6 w-full pb-6 items-center transition-colors duration-300 ${
        isScrolled ? "bg-blue-300 fixed top-0 left-0 z-20" : "bg-transparent"
      }`}
    >
      <Image
        src={Logo.src}
        alt="Logo"
        width={224}
        height={224}
        className="w-40 md:w-56"
      />
      <div className="md:hidden z-50">
        {isMenuOpen ? (
          <HiX
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <HiMenu
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      <ul
        className={`flex md:flex-row flex-col gap-3 z-20 justify-start items-start pl-8 absolute md:static top-[80px] left-0 h-screen md:h-auto w-full md:w-auto bg-blue-300 md:bg-transparent py-4 md:py-0 md:z-auto transition-all duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {navItems.map((item) => (
          <li
            key={item}
            className={`cursor-pointer font-bold hover:underline text-center md:text-left ${
              active === item ? "text-[#17A2B8]" : ""
            }`}
            style={{
              textDecorationThickness: "2px",
              textUnderlineOffset: "17px",
            }}
            onClick={() => {
              setActive(item);
              setIsMenuOpen(false);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
