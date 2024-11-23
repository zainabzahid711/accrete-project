"use client";
import React, { useEffect, useRef, useState } from "react";
import billingProcess from "@/public/homePage/billingProcess.png";

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
    <section className="p-10 mx-10 md:mx-28 2xl:mx-52 rounded-3xl bg-hero-gradient">
      <div className="text-center">
        <h3 className="animate-slide-up-fade hover-border mt-6 font-bold text-2xl md:text-5xl mb-8">
          Our Medical Billing Process and Services
        </h3>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 items-center justify-between">
        {/* ------image area */}
        <div className="flex justify-center w-full mb-6 md:mb-0">
          <div className="relative md:w-[48%] lg:w-[50%] z-50">
            <img
              ref={imageRef}
              src={billingProcess.src}
              alt="Billing Process"
              className={`half-circle ${
                hasRotated ? "rotate-animation" : "no-rotate"
              }`}
            />
          </div>
        </div>

        {/* ---text area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl:gap-12">
          <div className="flex flex-col gap-2">
            <p>
              <strong>
                Comprehensive Patient Intake and Front Office Operation:
              </strong>
              Utilizes advanced software to manage patient registration,
              insurance verification, scheduling, and front office tasks,
              ensuring accurate information and smooth processes through
              automation.
            </p>
            <p>
              <strong> Precise Medical Billing and Coding: </strong> Employs
              cutting-edge technology to handle coding, submit claims, and
              follow up on unpaid claims, improving accuracy and speeding up
              reimbursements.
            </p>
          </div>
          <div className="flex flex-col gap-7">
            <p>
              <strong>Credentialing and Compliance: </strong>Uses specialized
              software to manage the credentialing process, ensuring providers
              meet all qualifications and compliance standards efficiently.
            </p>
            <p>
              <strong>Efficient Back Office Operations: </strong>Implements
              robust technology solutions to manage administrative tasks and
              maintain medical records, streamlining operations and reducing
              manual workload.
            </p>
          </div>
        </div>
        <p className="flex flex-col justify-start md:justify-center md:items-center w-full md:w-2/3 p-0">
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
