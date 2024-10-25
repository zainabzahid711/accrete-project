"use client";
import React, { useState } from "react";
import happyIcon from "@/public/contactAssets/laugh.png";
import { Typewriter } from "react-simple-typewriter";

interface AnimateProps {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  translateX?: number;
  translateY?: number;
}

const ContactAssete: React.FC<AnimateProps> = ({
  top,
  bottom,
  left,
  right,
  translateX,
  translateY,
}) => {
  const [showCursor, setShowCursor] = useState(false);

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
        } md:bottom-64 md:-left-52`}
      >
        <div className="absolute rounded-full bg-white p-4 flex items-center animate-bounce-slow gap-2 w-56">
          <img className="w-10 h-10" src={happyIcon.src} />
          <div>
            <h6 className="text-xl font-bold">
              <Typewriter
                words={["1260+"]}
                loop={1}
                cursor={showCursor}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => setShowCursor(false)}
              />
            </h6>
            <p className="font-medium">Happy Customers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAssete;
