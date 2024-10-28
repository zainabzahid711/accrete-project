import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIconProps
import AccreteLogo from "@/public/homePage/accreteLogo.png";
import FooterBg from "@/public/homePage/svg/footerBg.svg";
import phoneIcon from "@/public/homePage/svg/mobile.svg";
import location from "@/public/homePage/svg/pin.svg";
import mail from "@/public/homePage/svg/mail.svg";
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
  <div className="bg-gray-500 rounded-full flex items-center justify-center h-8 w-8 cursor-pointer">
    <FontAwesomeIcon icon={icon} className="text-white w-3" />
  </div>
);

const Footer = () => {
  return (
    <>
      <section className="text-white pb-8 md:pb-0 flex flex-col relative">
        <img
          src={AccreteLogo.src}
          className="md:w-32 w-20 mx-auto z-10"
          alt="healthlogo"
        />
        <div className="text-textColor md:px-28 md:py-12 px-10 flex md:flex-row flex-col z-10">
          <div>
            <h2 className="font-bold text-2xl mt-12">ACCERETE CONCIERGE</h2>
            <p className="font-medium mt-5">
              Empowering your practices financial health with precision and
              care.
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-1 ">
                <div className="p-2 bg-blue-400 rounded-full">
                  <img
                    className="w-3 text-white"
                    src={phoneIcon.src}
                    alt="phones"
                  />
                </div>
                <p className="font-medium">
                  <a href="tel:+14708024555" className="font-medium">
                    +1-470-802-4555
                  </a>
                </p>
              </div>
              <div className="flex gap-1 ">
                <div className="p-2 bg-blue-400 rounded-full">
                  <img
                    className="w-3 text-white"
                    src={location.src}
                    alt={"phones"}
                  />
                </div>
                <p className="font-medium">Cumming, GA</p>
              </div>
              <div className="flex gap-1 ">
                <div className="p-2 bg-blue-400 rounded-full">
                  <img
                    className="w-3 text-white"
                    src={mail.src}
                    alt={"phones"}
                  />
                </div>
                <p className="font-medium">
                  <a
                    href="mailto:Christinal@accreteconcierge.net"
                    className="font-medium"
                  >
                    Christinal@accreteconcierge.net
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <h2 className="font-bold mb-5 mt-12">Useful Links</h2>
            <div className="flex gap-20 md:gap-32">
              <ul className="cursor-pointer flex flex-col gap-7">
                <li>
                  <Link href="/about" className="flex items-center">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/home#departments" className="flex items-center">
                    Experties
                  </Link>
                </li>
                <li>
                  <Link href="/shedule-demo" className="flex items-center">
                    Appointment
                  </Link>
                </li>
              </ul>
              <ul className="cursor-pointer flex flex-col gap-7">
                <li>
                  <Link href="/contact" className="flex items-center">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/home#faq" className="flex items-center">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/home#review" className="flex items-center">
                    Client Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src={FooterBg.src}
            alt="FooterBackground"
            className="w-[100%] h-[100%] object-cover"
          />
        </div>
      </section>

      <div className="bg-[#307BC4] px-10 md:px-28 flex p-3 flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row gap-4 mt-2 items-center">
          <h3 className="text-white">Follow us</h3>
          <div className="flex gap-4">
            {socialMediaIcons.map(({ icon, id }) => (
              <SocialMediaIcon key={id} icon={icon} />
            ))}
          </div>
          <div className="bg-gray-500 rounded-full flex items-center justify-center h-8 w-8 cursor-pointer">
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
        <div className="md:ml-auto mt-8 md:mt-0">
          <h5 className="font-thin text-sm text-white">
            ©2023 Accrete Concierge. All Rights Reserved.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
