"use client";
import billingCoding from "@/public/homePage/billingCoding.png";
import accounts from "@/public/homePage/accounts.png";
import contracting from "@/public/homePage/contracting.png";
import verification from "@/public/homePage/verification.png";
import negotiation from "@/public/homePage/negotiation.png";
import rcm from "@/public/homePage/rcm.png";

import ServiceCard from "./card/imageCard";

const services = [
  {
    id: 1,
    image: billingCoding.src,
    text: "Medical Billing and Coding Specialist",
    description:
      "Manages accurate claims submission, assigns correct codes, and ensures timely billing to maximize reimbursement.",
  },
  {
    id: 2,
    image: accounts.src,
    text: "Accounts Receivable (AR) Specialist",
    description:
      "Handles unpaid claims, follows up with payers, and resolves payment issues to optimize cash flow and revenue.",
  },
  {
    id: 3,
    image: contracting.src,
    text: "Patient Support/Customer Service Representative",
    description:
      "Assists patients with billing inquiries, payment plans, and insurance questions, promoting clear communication and satisfaction.",
  },
  {
    id: 4,
    image: negotiation.src,
    text: "Verification of Benefits and Prior Authorization Specialist",
    description:
      "Verifies patients' insurance coverage, obtains prior authorizations, and ensures that procedures are covered to prevent claim denials.",
  },
  {
    id: 5,
    image: verification.src,
    text: "Revenue Cycle Analyst",
    description:
      "Analyzes financial data, identifies trends, and provides actionable insights to improve revenue cycle efficiency and profitability.",
  },
  {
    id: 6,
    image: rcm.src,
    text: "Credentialing Specialist",
    description:
      "Manages provider enrollment and credentialing with insurance companies, ensuring compliance and minimizing claim denials.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="md:px-28 px-10 2xl:px-52">
      <div className="text-center">
        <h1 className="hover-border cursor-pointer flex text-center mb-12 md:text-5xl text-3xl font-bold">
          Medical Billing Services we Offer
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-3 mb-3">
        {services.slice(0, 3).map((service) => (
          <ServiceCard
            key={service.id}
            index={service.id}
            image={service.image}
            text={service.text}
            description={service.description}
          />
        ))}
      </div>
      <div className="flex md:flex-row flex-col gap-3">
        {services.slice(3).map((service) => (
          <ServiceCard
            key={service.id}
            index={service.id}
            image={service.image}
            text={service.text}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
