import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIconProps

// Define a type for the social media icons
type SocialMediaIconType = {
  icon: FontAwesomeIconProps["icon"];
  id: string;
};

// Define the social media icons data
const socialMediaIcons: SocialMediaIconType[] = [
  { icon: faFacebookF, id: "facebook" },
  { icon: faTwitter, id: "twitter" },
  { icon: faLinkedinIn, id: "linkedin" },
  { icon: faGlobe, id: "globe" },
  { icon: faInstagram, id: "instagram" },
];

// Define the props for the SocialMediaIcon component
type SocialMediaIconProps = {
  icon: FontAwesomeIconProps["icon"];
};

// Create the SocialMediaIcon component with props
const SocialMediaIcon = ({ icon }: SocialMediaIconProps) => (
  <div className="bg-gray-800 rounded-full flex items-center justify-center h-10 w-10 cursor-pointer">
    <FontAwesomeIcon icon={icon} className="text-white w-4" />
  </div>
);

const Footer = () => {
  return (
    <>
      <section className="bg-footerBackground text-white md:p-20 p-10 flex md:flex-row flex-col md:gap-56 gap-20">
        <div>
          <h2 className="font-bold text-2xl">ACCERETE CONCIERGE SERVICES</h2>
          <p className="font-bold mt-5">
            Empowering your practices financial health with precision and care.
          </p>
          <div className="flex gap-4 mt-28">
            {/* Social Media Icons */}
            {socialMediaIcons.map(({ icon, id }) => (
              <SocialMediaIcon key={id} icon={icon} />
            ))}
          </div>
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
      </section>
      <div className="bg-footerSecond text-white p-4 md:pl-20 pl-10">
        <h5 className="font-bold">
          ©2023 Accrete Concierge. All Rights Reserved.
        </h5>
      </div>
    </>
  );
};

export default Footer;
