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
    <section className="px-8 md:px-28 rounded-3xl py-4 md:py-10 bg-hero-gradient">
      <div className="text-center">
        <h3 className="animate-slide-up-fade hover-border mt-6 font-bold text-2xl md:text-5xl mb-8">
          Our Medical Billing Process
        </h3>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 items-center justify-between">
        {/* ------image area */}
        <div className="flex justify-center w-full mb-6 md:mb-0">
          <img
            ref={imageRef}
            className={`md:w-[48%] lg:w-[50%]  half-circle ${
              hasRotated ? "rotate-animation" : "no-rotate"
            }`}
            src={billingProcess.src}
            alt="Billing Process"
          />
        </div>

        {/* ---text area */}
        <div className="w-full text-justify leading-relaxed flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="w-full">
              <strong>Comprehensive Patient Intake:</strong> We begin by
              collecting and verifying all necessary patient information,
              including demographic data, insurance coverage details, and
              contact information. Accurate registration ensures that the
              medical billing process is smooth.
            </p>
            <p className="w-full">
              <strong>Capturing Medical Services:</strong> After the visit of
              the patient, we ensure all medical services provided are properly
              documented. This includes diagnoses, treatments, and procedures
              performed during the visit, which are critical for accurate claim
              submissions and reimbursement.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <p className="w-full">
              <strong>Precise Medical Coding for Services Rendered:</strong> Our
              team of certified medical coders accurately converts medical
              diagnoses, procedures, and services. This step is essential for
              compliance and ensures that healthcare providers receive the
              correct payments from insurers.
            </p>
            <p className="w-full">
              <strong>Accurate Claim Generation:</strong> Once the medical
              coding is complete, we create a detailed and accurate medical
              claim. This claim includes all necessary patient information,
              insurance details, and coded medical services. Our process
              minimizes errors and speeds up the approval process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingProcess;
