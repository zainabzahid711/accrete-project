import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIconProps
import HealthLogo from "@/public/homePage/svg/logoIcon.svg";
import FooterBg from "@/public/homePage/svg/footerBg.svg";
import phoneIcon from "@/public/homePage/svg/mobile.svg";
import location from "@/public/homePage/svg/pin.svg";
import mail from "@/public/homePage/svg/mail.svg";

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
  <div className="bg-gray-800 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer">
    <FontAwesomeIcon icon={icon} className="text-white w-4" />
  </div>
);

const Footer = () => {
  return (
    <>
      <section className="text-white md:px-28 px-16 md:pb-20 p-10 pt-0 flex flex-col gap-5 relative">
        <img
          src={HealthLogo.src}
          className="w-52 mx-auto z-10"
          alt="healthlogo"
        />
        <div className="text-textColor flex md:flex-row flex-col md:gap-56 gap-20 z-10">
          <div>
            <h2 className="font-bold text-2xl">ACCERETE CONCIERGE SERVICES</h2>
            <p className="font-bold mt-5">
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
                <p className="font-medium">123 - 456 - 7890</p>
              </div>
              <div className="flex gap-1 ">
                <div className="p-2 bg-blue-400 rounded-full">
                  <img
                    className="w-3 text-white"
                    src={location.src}
                    alt={"phones"}
                  />
                </div>
                <p className="font-medium">123 anywhere USA</p>
              </div>
              <div className="flex gap-1 ">
                <div className="p-2 bg-blue-400 rounded-full">
                  <img
                    className="w-3 text-white"
                    src={mail.src}
                    alt={"phones"}
                  />
                </div>
                <p className="font-medium">accreteConcierge@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-bold mb-10">Useful Links</h2>
            <div className="flex gap-20">
              <ul className="cursor-pointer flex flex-col gap-7">
                <li>About Us</li>
                <li>Departments</li>
                <li>Doctors</li>
                <li>TimeTable</li>
                <li>Appointemnt</li>
                <li>Testimonials</li>
              </ul>
              <ul className="cursor-pointer flex flex-col gap-7">
                <li>Blog</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Terms&Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <img
            src={FooterBg.src}
            alt="FooterBackground"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className="bg-[#307BC4] flex p-5 flex-col md:flex-row items-center justify-around">
        <div className="flex gap-4 mt-2 items-center">
          <h3>Follow us</h3>
          {socialMediaIcons.map(({ icon, id }) => (
            <SocialMediaIcon key={id} icon={icon} />
          ))}
        </div>
        <div>
          <h5 className="font-thin">
            ©2023 Accrete Concierge. All Rights Reserved.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Footer;
