"use client";
import React, { useEffect, useRef, useState } from "react";
import billingProcess from "@/public/homePage/billingProcess.png";

const BillingProcess = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isRotated, setIsRotated] = useState(false); // State to track if the image has rotated

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const { top, bottom } = imageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the image is in the viewport
        if (top >= 0 && bottom <= windowHeight && !isRotated) {
          setIsRotated(true); // Set to rotated when in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Call the function initially to check if in view on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRotated]); // Add isRotated to dependencies

  return (
    <section className="px-8 md:px-28 py-4 md:py-10">
      <div className="text-center">
        <h3 className="hover-border mt-6 font-bold text-2xl md:text-5xl mb-8">
          Our Medical Billing Process
        </h3>
      </div>

      <div className="flex flex-col md:gap-12 gap-8 md:flex-row items-center justify-between">
        {/* ------image area */}
        <div className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img
            ref={imageRef}
            className={`md:max-w-[500px] half-circle ${
              isRotated ? "rotate-animation" : ""
            }`} // Apply rotation class based on state
            src={billingProcess.src}
            alt="Billing Process"
          />
        </div>

        {/* ---text area */}
        <div className="w-full md:w-1/2 text-justify leading-relaxed">
          <p>
            <strong>Comprehensive Patient Intake:</strong> We begin by
            collecting and verifying all necessary patient information,
            including demographic data, insurance coverage details, and contact
            information. Accurate registration ensures that the medical billing
            process is smooth and error-free from the start.
          </p>
          <p className="mt-4">
            <strong> Capturing Medical Services and Documentation:</strong>{" "}
            After a patient's visit, we ensure all medical services provided are
            properly documented. This includes diagnoses, treatments, and
            procedures performed during the visit, which are critical for
            accurate claim submissions and reimbursement.
          </p>
          <p className="mt-4">
            <strong> Precise Medical Coding for Services Rendered:</strong> Our
            team of certified medical coders accurately converts medical
            diagnoses, procedures, and services into the correct codes (ICD-10,
            CPT, and HCPCS). This step is essential for compliance and ensures
            that healthcare providers receive the correct payments from
            insurers.
          </p>
          <p className="mt-4">
            <strong> Accurate Claim Generation:</strong> Once the medical coding
            is complete, we create a detailed and accurate medical claim. This
            claim includes all necessary patient information, insurance details,
            and coded medical services. Our process minimizes errors and speeds
            up the approval process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BillingProcess;
