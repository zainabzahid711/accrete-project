"use client";
import React, { useEffect, useRef, useState } from "react";
import billingProcess from "@/public/homePage/billingProcess.png";
import Image from "next/image";

const BillingProcess = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [hasRotated, setHasRotated] = useState(false); // Track if the image has already rotated

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRotated) {
            setHasRotated(true); // Mark as rotated once it comes into view
            observer.unobserve(entry.target); // Stop observing after it rotates
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    if (imageRef.current) {
      observer.observe(imageRef.current); // Start observing the image
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Cleanup observer
      }
    };
  }, [hasRotated]);
  return (
    <section className="px-8 md:px-28 rounded-3xl py-4 md:py-10 bg-hero-gradient">
      <div className="text-center">
        <h3 className="animate-slide-up-fade hover-border mt-6 font-bold text-2xl md:text-5xl mb-8">
          Our Medical Billing Process and Services
        </h3>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 items-center justify-between">
        {/* ------image area */}
        <div className="flex justify-center w-full mb-6 md:mb-0">
          <div className="relative md:w-[48%] lg:w-[50%]">
            <Image
              ref={imageRef}
              src={billingProcess.src}
              alt="Billing Process"
              layout="responsive" // Makes the image responsive within the container
              width={100} // Set arbitrary dimensions for layout="responsive"
              height={100} // Keeps aspect ratio, actual size is controlled by the container
              className={`half-circle ${
                hasRotated ? "rotate-animation" : "no-rotate"
              }`}
            />
          </div>
        </div>

        {/* ---text area */}
        <div className="w-full text-justify leading-relaxed flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="w-full">
              <strong>
                Comprehensive Patient Intake and Front Office Operations:
              </strong>
              Utilizes advanced software to manage patient registration,
              insurance verification, scheduling, and front office tasks,
              ensuring accurate information and smooth processes through
              automation.
            </p>
            <p className="w-full">
              <strong> Precise Medical Billing and Coding:</strong> Employs
              cutting-edge technology to handle coding, submit claims, and
              follow up on unpaid claims, improving accuracy and speeding up
              reimbursements.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="w-full">
              <strong>Credentialing and Compliance:</strong>Uses specialized
              software to manage the credentialing process, ensuring providers
              meet all qualifications and compliance standards efficiently.
            </p>
            <p className="w-full">
              <strong>Efficient Back Office Operations: </strong>Implements
              robust technology solutions to manage administrative tasks and
              maintain medical records, streamlining operations and reducing
              manual workload.
            </p>
          </div>
        </div>
        <p className="flex flex-col justify-center items-center w-full md:w-2/3">
          <strong>Patient Intake and Front Office Operations: </strong>
          Utilizes advanced software to manage patient registration, insurance
          verification, scheduling, and front office tasks, ensuring accurate
          information and smooth processes through automatilements robust
          technology solutions to manage administrative tasks and maintain
          medical records, streamlining operations and reducing manual work
        </p>
      </div>
    </section>
  );
};

export default BillingProcess;
