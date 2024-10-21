"use client";

import React, { useState, useRef } from "react";

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
      question: "What services does Accrete Concierge provide?",
      answer:
        "We provide a variety of services including personal concierge, travel arrangements, lifestyle management, and much more. Our aim is to make your life easier.",
    },
    {
      question: "How do I schedule my appointment with Accrete Concierge?",
      answer:
        "You can schedule your appointment through our website or by calling our customer service. We are here to assist you 24/7.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept a range of insurance providers. Please contact us for more details regarding coverage.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "For your appointment, please bring any relevant documents such as identification, insurance information, and any necessary medical records.",
    },
    {
      question: "How do I request a prescription?",
      answer:
        "You can request a prescription through our online portal or by contacting our support team directly.",
    },
  ];

  return (
    <section className="md:px-28 px-10">
      <div className="text-center mb-5">
        <h3 className="font-bold text-2xl md:text-5xl mb-5">Some Reviews</h3>
        <p className="text-lg md:text-xl">OF OUR CLIENTS</p>
      </div>

      <div className="px-1 md:px-24">
        {faqs.map((faq, index: number) => (
          <div key={index} className="mb-5 border-gray-300 rounded-3xl">
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
