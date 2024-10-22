"use client";
import shedule from "@/public/homePage/shedule.png";
import { FaCheckCircle } from "react-icons/fa"; // Import check icon
import { useState } from "react"; // Import useState for managing checkbox state

const ScheduleDemo = () => {
  // Define the type for selectedServices as string[]
  const [selectedServices, setSelectedServices] = useState<string[]>([]); // State to manage selected checkboxes

  // Services array for checkboxes
  const services = [
    "Revenue Cycle Management / Medical Billing",
    "Electronic Health Records / Practice Management",
    "Patient Engagement Software",
    "Chronic Care Management",
    "Credentialing / Provider Enrollment",
    "Medical Coding",
    "Workforce Augmentation",
    "Healthcare Analytics",
    "Other Software or Services",
  ];

  // Handler for checkbox changes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedServices(
      (prev) =>
        prev.includes(value)
          ? prev.filter((service) => service !== value) // Remove if already selected
          : [...prev, value] // Add if not selected
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:px-20 px-10">
        {/* Left Section */}
        <div className="w-full md:w-[75%] flex flex-col items-center justify-center p-10">
          <h2 className="text-3xl font-medium text-[#44abca] mb-6">
            <span className="text-3xl font-bold">Concierge Care</span> — Where
            Convenience Meets Customized Support
          </h2>
          <img
            className="w-[80%] my-12 rounded-2xl shadow-2xl"
            src={shedule.src}
            alt="Schedule Demo"
          />

          {/* Content with check icons */}
          <div className="font-thin text-lg">
            <h1 className="font-medium mb-4">
              WITH ACCRETE CONCIERGE, YOU CAN TAILOR THE SERVICES AND SOLUTIONS
              THAT BEST FIT YOUR PRACTICE, INCLUDING:
            </h1>
            <ul className="space-y-3">
              {[
                {
                  title: "Personalized Technology Integration",
                  description:
                    "Enjoy seamless revenue cycle management powered by your existing platforms, designed to enhance efficiency and drive revenue.",
                },
                {
                  title:
                    "Comprehensive Electronic Health Record (EHR) Solutions",
                  description:
                    "Access integrated practice management software and dedicated services tailored to your practice’s unique needs.",
                },
                {
                  title: "Enhanced Patient Engagement Tools",
                  description:
                    "Utilize state-of-the-art tools to optimize the patient experience, whether integrated with your own EHR or our robust platform.",
                },
                {
                  title: "Insightful Performance Analytics",
                  description:
                    "Leverage customizable dashboards for financial transparency, connected to your existing EHR or our advanced analytics tools.",
                },
                {
                  title: "Flexible Outsourced Services",
                  description:
                    "Choose from outsourced solutions based on a percentage of revenue, full-time employee needs, or a co-sourced model tailored to your practice.",
                },
              ].map((service, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-green-500 mr-2 mt-1 w-5" />
                  <div className="text-sm">
                    <strong>{service.title}:</strong> {service.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-gray-200 rounded-2xl p-8 border-2 border-gray-300 mt-10 md:mt-16 md:w-[25%]">
          <h3 className="text-xl font-medium mb-4">Request a Demo</h3>
          <form className="flex flex-col gap-3">
            {[
              {
                label: "Practice or Company Name",
                type: "text",
                required: true,
              },
              { label: "First Name", type: "text", required: true },
              { label: "Last Name", type: "text", required: true },
              { label: "Job Title", type: "text", required: true },
              { label: "Email", type: "email", required: true },
              { label: "Phone Number", type: "tel", required: true },
              { label: "Country", type: "text", required: true },
            ].map((input, index) => (
              <div key={index}>
                <label className="text-gray-400">{input.label}*</label>
                <input
                  type={input.type}
                  className="border p-2 rounded-lg border-gray-300 w-full"
                  required={input.required}
                />
              </div>
            ))}

            {/* Checkbox Section for Areas of Interest */}
            <div>
              <label className="text-gray-400 mb-2">
                Areas of Interest (Please select the services as per your
                choice) *
              </label>
              <div className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <label
                    key={index}
                    className="text-gray-500 text-sm flex items-center"
                  >
                    <input
                      type="checkbox"
                      value={service}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemo;
