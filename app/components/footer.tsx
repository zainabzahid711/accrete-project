import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIconProps
import HealthLogo from "@/public/homePage/logoIcon.svg";
import FooterBg from "@/public/homePage/footerBg.svg";

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
      <section className="text-white md:pr-20 md:pl-20 md:pb-20 p-10 pt-0 flex flex-col gap-5 relative">
        <img src={HealthLogo.src} className="w-52 mx-auto z-10" />
        <div className="text-textColor flex md:flex-row flex-col md:gap-56 gap-20 z-10">
          <div>
            <h2 className="font-bold text-2xl">ACCERETE CONCIERGE SERVICES</h2>
            <p className="font-bold mt-5">
              Empowering your practices financial health with precision and
              care.
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-10">Useful Links</h2>
            <div className="flex gap-20">
              <ul className="cursor-pointer flex flex-col gap-7">
                <li>Home</li>
                <li>Contact</li>
                <li>Resources</li>
              </ul>
              <ul className="cursor-pointer flex flex-col gap-7">
                <li>About</li>
                <li>Careers</li>
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
