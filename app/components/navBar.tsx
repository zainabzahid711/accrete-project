"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Logo from "@/public/logoFinal.png";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

type SocialMediaIconType = {
  icon: FontAwesomeIconProps["icon"];
  id: string;
};

const socialMediaIcons: SocialMediaIconType[] = [
  { icon: faFacebookF, id: "facebook" },
  { icon: faTwitter, id: "twitter" },
  { icon: faLinkedinIn, id: "linkedin" },
  { icon: faGlobe, id: "globe" },
  { icon: faInstagram, id: "instagram" },
];

type SocialMediaIconProps = {
  icon: FontAwesomeIconProps["icon"];
};

const SocialMediaIcon = ({ icon }: SocialMediaIconProps) => (
  <div className="bg-gray-800 rounded-full flex items-center justify-center h-6 w-6 cursor-pointer">
    <FontAwesomeIcon icon={icon} className="text-white w-3" />
  </div>
);

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
    <>
      {/* ------header------------ */}
      <div className="flex md:flex-row flex-col gap-6 p-2 px-10 md:px-28 bg-[#23BFEF]">
        <div className="flex md:flex-row flex-col md:gap-5 gap-2">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-white w-4" icon={faPhone} />
            <p className="font-bold">(871 432-0034)</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-white w-4" icon={faEnvelope} />
            <p className="font-bold">accreteconcierge@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 justify-start items-start md:justify-end md:items-end md:ml-auto">
          {socialMediaIcons.map(({ icon, id }) => (
            <SocialMediaIcon key={id} icon={icon} />
          ))}
        </div>
      </div>
      {/* -------navBar----------- */}
      <div
        className={`flex gap-16 md:gap-0 px-10 md:px-28 pt-6 w-full pb-6 items-center transition-colors duration-300 ${
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
          className={`flex md:flex-row flex-col gap-3 z-20 justify-start items-start md:justify-end md:items-end md:ml-auto pl-8 absolute md:static top-[80px] left-0 h-screen md:h-auto w-full md:w-auto bg-blue-300 md:bg-transparent py-4 md:py-0 md:z-auto transition-all duration-500 ease-in-out ${
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
    </>
  );
};

export default NavBar;
