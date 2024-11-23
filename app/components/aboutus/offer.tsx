import React from "react";

const OfferingsComponent = () => {
  const offerings = [
    {
      title: "Personalized Technology Solutions",
      description:
        "Enhance efficiency and drive revenue with our tailored technology solutions designed specifically for your practice. Our systems streamline administrative tasks, reduce errors, and improve workflow, allowing your team to focus more on delivering exceptional patient care.",
    },
    {
      title: "Insightful Performance Analytics",
      description:
        "Utilize customizable Power BI dashboards to achieve real-time financial transparency and make data-driven decisions. Our analytics offer deep insights into your practice's financial health, helping you identify trends, optimize operations, and strategize effectively.",
    },
    {
      title: "Flexible Outsourced Services",
      description:
        "Select from a variety of outsourced solutions, including revenue-based models, full-time employee support, or co-sourced arrangements tailored to meet your practice's specific needs. Whether you require comprehensive revenue cycle management (RCM) services or focused administrative support, we can customize our offerings to suit your requirements.",
    },
    {
      title: "Advanced Reporting Capabilities",
      description:
        "Access detailed, real-time reports that provide insights into your financial performance, operational efficiency, and patient demographics, empowering you to make informed decisions.",
    },
    {
      title: "Customizable Workflow Solutions",
      description:
        "Tailor workflows to align with your practice's unique needs, enhancing productivity and ensuring seamless operations for your team.",
    },
    {
      title: "Dedicated Account Management",
      description:
        "Experience personalized support with a dedicated account manager who understands the unique needs and goals of your practice, providing guidance and assistance whenever needed.",
    },
    {
      title: "Scalable Services",
      description:
        "Easily adjust services as your practice grows and evolves, ensuring you always have the right level of support to meet changing requirements.",
    },
    {
      title: "Enhanced Data Security",
      description:
        "Protect your sensitive information with our robust security measures and compliance with industry standards, ensuring the highest level of data protection for your practice.",
    },
  ];

  return (
    <div className="md:mx-28 2xl:mx-52 mx-8 p-2 mt-10 mb-10">
      <div className="text-center">
        <h3 className="hover-border cursor-pointer font-bold text-center text-2xl md:text-3xl mb-8">
          Our EHRs
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="bg-blue-200 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-4">{offering.title}</h2>
            <p className="text-gray-700">{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferingsComponent;
