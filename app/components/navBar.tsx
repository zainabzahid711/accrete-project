"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  // indicator for dropdown
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Logo from "@/public/logoFinal.png";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SocialMediaIconType = {
  icon: FontAwesomeIconProps["icon"];
  id: string;
};

const socialMediaIcons: SocialMediaIconType[] = [
  { icon: faFacebookF, id: "facebook" },
  { icon: faTwitter, id: "twitter" },
  { icon: faGlobe, id: "globe" },
  { icon: faInstagram, id: "instagram" },
];

type SocialMediaIconProps = {
  icon: FontAwesomeIconProps["icon"];
};

const SocialMediaIcon = ({ icon }: SocialMediaIconProps) => (
  <div className="bg-gray-500 rounded-full flex items-center justify-center h-6 w-6 cursor-pointer">
    <FontAwesomeIcon icon={icon} className="text-white w-3" />
  </div>
);

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "HOME", route: "/home" },
    { name: "ABOUT", route: "/about" },
    { name: "SERVICES", route: "/services" },
    { name: "CONTACT", route: "/contact" },
  ];

  // const serviceItems = [
  //   { name: "Billing and Coding", route: "/services/billing-and-coding" },
  //   {
  //     name: "Credentials and Contracting",
  //     route: "/services/credentials-and-contracting",
  //   },
  //   { name: "Accounts Management", route: "/services/accounts-management" },
  //   { name: "Network Negotiation", route: "/services/network-negotiation" },
  //   {
  //     name: "Eligibility and Benefits",
  //     route: "/services/eligibility-and-benefits",
  //   },
  //   { name: "Complete RCM", route: "/services/complete-rcm" },
  // ];

  useEffect(() => {
    setIsMenuOpen(false);
    // setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // const handleServicesToggle = () => {
  //   if (window.innerWidth < 768) {
  //     setIsServicesOpen(!isServicesOpen);
  //   }
  // };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ------header------------ */}
      <div className="flex md:flex-row flex-col gap-6 p-2 px-10 md:px-28 bg-[#91cbdd]">
        <div className="flex md:flex-row flex-col md:gap-5 gap-2">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-white w-4" icon={faPhone} />
            <a href="tel:+14708024555" className="font-medium text-sm">
              +1-470-802-4555
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-white w-4" icon={faEnvelope} />
            <a
              href="mailto:Christinal@accreteconcierge.net"
              className="font-medium text-sm"
            >
              Christina@accreteconcierge.com
            </a>
          </div>
        </div>
        <div className="flex gap-2 justify-start items-start md:justify-end md:items-end md:ml-auto">
          {socialMediaIcons.map(({ icon, id }) => (
            <SocialMediaIcon key={id} icon={icon} />
          ))}
          <div className="bg-gray-500 rounded-full flex items-center justify-center h-6 w-6 cursor-pointer">
            <a
              className=" flex justify-center items-center"
              href="https://www.linkedin.com/company/accrete-concierge/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-white text-center w-3"
              />
            </a>
          </div>
        </div>
      </div>

      {/* -------navBar----------- */}
      <div
        className={`z-10 relative flex gap-16 md:gap-0 px-10 md:px-28 py-4 w-full items-center transition-colors duration-300 ${
          isScrolled ? "bg-blue-300 fixed top-0 left-0" : "bg-transparent"
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
          className={`flex md:flex-row flex-col md:gap-16 gap-3 justify-start items-start md:justify-end md:items-end md:ml-auto pl-8 absolute md:static top-[80px] left-0 h-screen md:h-auto w-full md:w-auto bg-blue-300 md:bg-transparent py-4 md:py-0 md:z-auto transition-all duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          {navItems.map(({ name, route }, index) => (
            <li
              key={index}
              className={`cursor-pointer font-medium px-2 py-1 border-b-2 border-transparent relative ${
                pathname === route
                  ? "text-[#6BD4F4] border-[#6BD4F4]"
                  : "text-gray-600"
              } hover:text-[#6BD4F4] hover:border-[#6BD4F4]`}
              // onMouseEnter={() =>
              //   name === "SERVICES" && setIsServicesOpen(true)
              // } // Open dropdown on hover
              // onMouseLeave={() =>
              //   name === "SERVICES" && setIsServicesOpen(false)
              // } // Close dropdown on leave
            >
              <Link
                href={route}
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
                {/* Add a dropdown indicator icon
                {name === "SERVICES" && (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-sm ml-1 w-3"
                  />
                )} */}
              </Link>

              {/* Dropdown for Services
              {name === "SERVICES" && isServicesOpen && (
                <ul
                  className="absolute top-8 left-0 bg-blue-50 shadow-lg rounded-md mt-1 py-2 w-64"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {serviceItems.map((service, index) => (
                    <li
                      onClick={() => {
                        handleServicesToggle();
                        setIsServicesOpen(false);
                        setIsMenuOpen(false);
                      }} // Handle click on mobile
                      onMouseEnter={() =>
                        name === "SERVICES" && setIsServicesOpen(true)
                      }
                      onMouseLeave={() =>
                        name === "SERVICES" && setIsServicesOpen(false)
                      }
                      key={index}
                      className="p-5 text-gray-800 py-1 rounded-md hover:bg-[#91cbdd]"
                    >
                      <Link
                        href={service.route}
                        onClick={() => {
                          setIsMenuOpen(false); // Close the main menu if open
                        }}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))} 
                </ul>
              )}*/}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
