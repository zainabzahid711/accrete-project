"use client";

import React, { useState } from "react";
// import emailjs from "emailjs-com";
import { sendFormCardData } from "../../lib/contact";
import { CircularProgress } from "@mui/material"; // Import Material UI spinner for loading

const FormCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !name,
      email: !email,
      message: !message,
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      setIsLoading(true); // Start loading

      // Prepare data to send
      const formCardData = {
        name,
        email,
        message,
      };
      try {
        const response = await sendFormCardData(formCardData);

        if (response.success) {
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 5000); // Auto close after 5 seconds
        } else {
          alert("Failed to send email.");
        }
      } catch (error) {
        console.error("Email send error: ", error);
        alert("Failed to send email.");
      } finally {
        setIsLoading(false); // Stop loading
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-[70%] md:mx-28 md:px-36 p-5 md:p-20 bg-gray-100 shadow-2xl rounded-lg">
        {isSubmitted ? (
          <div className="text-center p-8">
            <div className="text-green-500 text-6xl mb-4">✓</div>{" "}
            {/* Success checkmark */}
            <h2 className="text-2xl font-semibold text-green-600">
              Thank you!
            </h2>
            <p className="text-gray-700 mt-4">
              Email sent successfully. Thank you so much for contacting us!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row md:gap-10 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                  className={`rounded-full w-full md:w-72 h-14 border px-6 py-6 outline-blue-400 focus:border-blue-500 transition-all duration-300 
                ${
                  errors.name
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="email@test.domain"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-full w-full md:w-72 h-14 border px-6 py-6 outline-blue-400 focus:border-blue-500 transition-all duration-300 
                ${
                  errors.email
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
                className={`rounded-2xl border w-[100%] h-60 px-6 py-6 outline-blue-400 focus:border-blue-500 transition-all duration-300 
                ${
                  errors.message
                    ? "border-red-500 animate-shake"
                    : "border-gray-300"
                }`}
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-4 py-4 w-52 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-full mt-4 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 relative flex items-center justify-center group"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" /> // Loading spinner
                ) : (
                  <>
                    <span className="mr-2">Submit</span>
                    <span className="transition-transform transform translate-x-0 group-hover:translate-x-2 duration-200">
                      &#x2192;
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormCard;
