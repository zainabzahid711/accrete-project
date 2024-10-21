"use client";
import React, { useState } from "react";

import userOne from "@/public/homePage/user1.jpg";
import userTwo from "@/public/homePage/user2.jpg";
import userThree from "@/public/homePage/user3.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const AnimateAssete = () => {
  const [showCursor, setShowCursor] = useState(false);

  return (
    <>
      <div className="relative border-white border-l-2 border-t-2 rounded-full p-4 md:w-72 animate-bounce-slow">
        {/* Background layer with blur */}
        <div className="absolute border-x-2 border-y-2 -inset-1 blur-3xl bg-[#5eaae7] rounded-full"></div>

        {/* Foreground content */}
        <div className="relative z-10 flex">
          <div className="flex -space-x-4">
            <img
              className="rounded-full border-2 w-12 h-12"
              src={userOne.src}
            />
            <img
              className="rounded-full border-2 w-12 h-12"
              src={userTwo.src}
            />
            <img
              className="rounded-full border-2 w-12 h-12"
              src={userThree.src}
            />
          </div>
          <div className="flex flex-col ml-2 relative">
            <h1 className="opacity-80 text-2xl font-medium text-white">
              <Typewriter
                words={["100K+"]}
                loop={1}
                cursor={showCursor}
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={() => setShowCursor(false)}
              />
            </h1>
            <p className="opacity-80 text-white">Doctors Available</p>
            <div className="absolute -top-5 -right-4">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-white w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add the animation in the CSS section */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px); /* Move up by 10px */
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default AnimateAssete;
