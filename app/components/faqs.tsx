"use client";

import React, { useState, useRef } from "react";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  // State to track which question is open
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  // Function to toggle questions
  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "How can outsourcing RCM improve my practice's revenue cycle?",
      answer:
        "Outsourcing RCM can improve your practice's revenue cycle by leveraging advanced technology and expertise to ensure accurate coding, timely claim submissions, and effective follow-up on unpaid claims, leading to faster reimbursements and reduced denials.",
    },
    {
      question: "What services do you offer as part of your RCM solutions?",
      answer:
        "Our RCM solutions include comprehensive patient intake, precise medical billing and coding, credentialing and compliance management, and efficient front and back office operations, all supported by cutting-edge technology.",
    },
    {
      question: "How do you ensure compliance with healthcare regulations?",
      answer:
        "We use specialized software and stay updated with the latest healthcare regulations to ensure that all processes, from credentialing to billing, comply with industry standards and reduce the risk of compliance issues.",
    },
    {
      question: "What kind of reporting capabilities do you offer?",
      answer:
        "We provide detailed reporting through Power BI dashboards, offering real-time insights into your practice's financial performance, claim status, and key metrics, enabling data-driven decision-making and transparency.",
    },
    {
      question:
        "How do you handle denied claims and improve claim acceptance rates?",
      answer:
        "Our team uses sophisticated denial management tools to analyze and address the reasons for claim denials, resubmit corrected claims promptly, and implement strategies to improve future claim acceptance rates. We also provide ongoing training and updates to ensure our coding practices align with the latest industry standards, further reducing the likelihood of denials.",
    },
  ];

  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <section id="faq" className="md:px-28 px-10" ref={sectionRef}>
      <div className="text-center">
        <p className="animate-slide-up-fade text-center  font-bold text-2xl md:text-5xl mb-1 md:mb-5">
          What People
        </p>
        <h3
          ref={headingRef}
          className="animate-slide-up-fade text-center hover-border font-bold text-2xl md:text-5xl mb-4 md:mb-5"
        >
          Usually Asked
        </h3>
      </div>

      <div className="px-1 md:px-24">
        {faqs.map((faq, index: number) => (
          <div
            key={index}
            ref={headingRef}
            className="mb-5 border-gray-300 rounded-3xl"
          >
            <div
              onClick={() => toggleQuestion(index)}
              className="cursor-pointer flex justify-between items-center p-4 rounded-3xl hover:bg-gray-100 border-b border-gray-300"
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              <span className="text-2xl">
                {openQuestion === index ? "-" : "+"}
              </span>
            </div>
            <div
              ref={(el) => {
                contentRef.current[index] = el;
              }}
              style={{
                maxHeight:
                  openQuestion === index
                    ? contentRef.current[index]?.scrollHeight
                    : 0,
                opacity: openQuestion === index ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.5s ease, opacity 0.5s ease",
              }}
            >
              <div className="mt-2 rounded-3xl p-8 bg-blue-100 text-gray-700">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
