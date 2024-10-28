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
      question: "What is medical billing and why is it important?",
      answer:
        "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services provided. Accurate billing ensures that healthcare providers are properly compensated and that patients' insurance claims are processed smoothly.",
    },
    {
      question: "How do I know if my insurance covers a particular service?",
      answer:
        "To confirm if your insurance covers a specific service, please contact our billing department or your insurance provider directly. We can assist with verifying coverage details before your appointment to ensure a smooth billing process.",
    },
    {
      question: "What documents should I bring for the billing process?",
      answer:
        "Please bring your insurance card, a form of identification, and any referral paperwork if required. Having these documents will help expedite the billing and registration process.",
    },
    {
      question: "How can I pay my medical bills?",
      answer:
        "We offer multiple payment options, including online payments through our patient portal, credit or debit card payments, and checks. You can also contact our billing office to arrange a payment plan if needed.",
    },
    {
      question: "Who should I contact if I have questions about my bill?",
      answer:
        "For questions about your bill, please reach out to our billing department. Our team is here to help clarify charges, insurance payments, and any remaining balances.",
    },
  ];

  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <section id="faq" className="md:px-28 px-10" ref={sectionRef}>
      <div className="text-center">
        <p className="text-lg md:text-xl mb-1 md:mb-4">What People</p>
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
