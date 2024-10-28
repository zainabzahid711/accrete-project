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
    text: "Billing and Coding",
    description:
      "The single most important element to guarantee reimbursements is proper medical billing and coding. Billing is essential for healthcare providers; however, they can get in the way of providing patients with quality care. Medical billing and coding are a full-time job.",
  },
  {
    id: 2,
    image: accounts.src,
    text: "Accounts Management",
    description:
      "Accounts Receivables process ensures that companies receive their payments within a particular time frame, enhances their collection rates, and processes invoices more quickly, contributing to income. It also includes an examination of insurance contracts to ensure healthcare providers are adequately reimbursed.",
  },
  {
    id: 3,
    image: contracting.src,
    text: "Credentialing and Contracting",
    description:
      "Credentialing and Contracting are the basis of starting a clinic or healthcare facility. They also lay the root for your relationships with insurance companies and patients. Accrete Concierge credentialing services help you be part of insurance networks with beneficial contracts.",
  },
  {
    id: 4,
    image: negotiation.src,
    text: "Our Network Negotiation",
    description:
      "Negotiating Out of Network claims is crucial for hospitals. Our Negotiation Settlement team at Accrete Concierge has decades of expertise in medical billing, coding, and Revenue Cycle Management, particularly for Hospitals and Free Standing Emergency Rooms.",
  },
  {
    id: 5,
    image: verification.src,
    text: "Eligibility and Benefits Verification",
    description:
      "Eligibility and insurance benefits verification are critical to receiving accurate information about insurance coverage and reimbursement. Healthcare facilities need to verify patient eligibility and benefits to ensure they receive payment for services rendered.",
  },
  {
    id: 6,
    image: rcm.src,
    text: "Complete RCM Services",
    description:
      "Accrete Concierge offers complete revenue cycle management, from the moment your patient walks in the door until payment for services is received. We manage and educate your staff on compliance, streamline workflows, and maximize productivity, acting as an extension of your team.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="md:px-28 px-10">
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
