"use client";

import Image from "next/image";
import Logo from "@/public/logoFinal.png";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [active, setActive] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

  return (
    <div className="flex justify-around pt-16 w-full pb-8 items-center relative">
      <Image
        src={Logo.src}
        alt="Logo"
        width={224}
        height={224}
        className="w-40 md:w-56"
      />
      <div className="md:hidden z-20">
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
        className={`md:flex gap-6  justify-center text-center items-center absolute md:static top-0 left-0 h-screen md:h-auto w-full md:w-auto bg-white md:bg-transparent py-4 md:py-0 md:z-auto z-10 transition-all duration-500 ease-in-out ${
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
