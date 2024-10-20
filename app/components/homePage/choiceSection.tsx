"use client";

import IncrementingNumber from "../utils/incrementingNums";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"; // Import the hook

const ChooseAccrete: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3, // Adjust the threshold value to control when the animation starts
  });

  return (
    <section
      ref={ref}
      className="md:px-28 md:py-28 p-10 flex flex-col md:flex-row gap-20"
    >
      {/* Container for the numbers ----------*/}
      <div className="bg-gray-100 rounded-3xl w-full md:w-3/5 p-10 flex flex-col gap-5">
        {isIntersecting && ( // Trigger animation only when in view
          <>
            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="font-bold md:text-6xl text-2xl">
                <IncrementingNumber
                  targetValue={99.9}
                  duration={2000}
                  showPercentage={true}
                />
              </p>
              <p className="text-black font-medium">First Pass rate</p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="font-bold md:text-6xl text-2xl">
                <IncrementingNumber
                  targetValue={30}
                  duration={2000}
                  showPercentage={true}
                />
              </p>
              <p className="text-black font-medium">Increase in Revenue</p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="font-bold md:text-6xl text-2xl">
                <IncrementingNumber targetValue={24} duration={2000} />
              </p>
              <p className="text-black font-medium">Hours claimed</p>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <p className="font-bold md:text-6xl text-2xl">
                <IncrementingNumber
                  targetValue={25}
                  duration={2000}
                  showGreaterThan={true}
                />
              </p>
              <p className="text-black font-medium">Days in A/R</p>
            </div>
          </>
        )}
      </div>

      {/* Container for the text section */}
      <div className="md:w-2/3 flex flex-col justify-center items-center">
        <h3 className="hover-border font-bold text-3xl md:text-5xl">
          Why Choose Accrete Concierge for your Services Provider?
        </h3>
        <p className="mt-12">
          As your dedicated medical billing services provider, we are an
          extension of your practice. Imagine us as your financial team. While
          you focus on patient care, we will handle the complex world of
          insurance claims, patient billing, and revenue collection. Together,
          we will ensure your practice runs smoothly and efficiently. Your
          healthcare facility is a complex system with many moving parts, all
          working together to deliver exceptional patient care. We at Right
          Medical Billing are proud to be a vital component of that system. As a
          trusted medical billing services provider, we handle the financial
          aspects of your practice, allowing your team to focus on what they do
          best: providing compassionate care.
        </p>
      </div>
    </section>
  );
};

export default ChooseAccrete;
