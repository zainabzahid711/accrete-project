import health from "@/public/homePage/mentalAbout.png";
import Image from "next/image";

interface AnimateProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  translateX?: number;
  translateY?: number;
}

const HealthAssete: React.FC<AnimateProps> = ({
  top,
  bottom,
  left,
  right,
  translateX,
  translateY,
}) => {
  return (
    <>
      <div
        className={`absolute ${top ? `top-${top}` : ""} ${
          bottom ? `bottom-${bottom}` : ""
        } 
                  ${left ? `left-${left}` : ""} ${
          right ? `right-${right}` : ""
        } 
                  transform ${translateX ? `translate-x-${translateX}` : ""} ${
          translateY ? `translate-y-${translateY}` : ""
        }  md:bottom-12 md:-left-32 lg:bottom-20`}
      >
        <div className="animate-bounce-slow w-32 md:w-40 lg:w-48">
          <Image
            width={10}
            height={10}
            alt="icon"
            className="opacity-70"
            src={health.src}
          />
        </div>
      </div>
    </>
  );
};

export default HealthAssete;
