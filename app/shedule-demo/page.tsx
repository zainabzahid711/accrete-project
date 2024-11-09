"use client";
import shedule from "@/public/homePage/shedule.png";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Image from "next/image";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";
// import { NextResponse } from "next/server";
import { sendData } from "../lib/api";

const ScheduleDemo = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

  const [loading, setLoading] = useState(false); // Loading state
  const [message, setMessage] = useState<string | null>(null); // Success/Error message

  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  const services = [
    "RCM Solutions: Comprehensive Patient Intake,",
    "Medical Billing and Coding, Denial Management, ",
    "Claim Follow-Up, and Back Office Operations",
    "Credentialing and Compliance Management",
    "Prior Authorizations",
    "Patient Scheduling",
    "Insightful Performance Analytics and Reporting",
    "Personalized Technology Solutions",
    "Flexible Outsourced Services",
    "Dedicated Account Management",
    "Scalable Services",
    "Enhanced Data Security",
    "Free Financial Health Check of Practice",
  ];

  // Country list array
  const stateList = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  useEffect(() => {
    setCountries(stateList);
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((service) => service !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Email User:", process.env.EMAIL_USER); // This will be undefined
    console.log("Email Pass:", process.env.EMAIL_PASS); // This will be undefined
    console.log("Selected Services:", selectedServices);

    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const form = event.currentTarget;

    const formData = {
      jobTitle: form.jobTitle.value,
      purpose: "Requesting a demo", // customize this value
      state: form.state.value,
      practiceName: form.practiceName.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phoneNumber: form.phoneNumber.value,
      selectedServices: selectedServices,
    };

    try {
      const response = await sendData(formData);
      console.log("Data sent successfully:", response);
      setMessage("Demo request sent successfully!");
      form.reset(); // Reset form fields
      setSelectedServices([]); // Reset checkboxes
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(
        "There was an error submitting your request. Please try again."
      );
      // Optionally handle error feedback here
    } finally {
      setLoading(false); // End loading state after submission
    }
  };

  // --------------------------fecth dataa-----------------------------------------
  return (
    <>
      <div className="flex flex-col md:flex-row md:px-20 px-2">
        <div className="w-full md:w-[75%] flex flex-col items-center p-10">
          <h3
            ref={headingRef}
            className="mb-10 text-[#44abca] animate-slide-up-fade hover-border font-bold text-2xl md:text-5xl"
          >
            Request a Demo
          </h3>

          <h2 className="text-3xl font-medium text-[#44abca]">
            <span className="text-3xl font-bold">Concierge Care</span> — Where
            Convenience Meets Customized Support
          </h2>

          <div className="relative my-10">
            {/* Ensure the container takes full width */}
            <Image
              src={shedule.src}
              alt="Schedule Demo"
              width={400} // Set an arbitrary width; adjust as needed
              height={400} // Set height to maintain aspect ratio (example: 16:9)
              className="rounded-2xl shadow-2xl" // Apply Tailwind classes for styling
            />
          </div>

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

        <div className="bg-gray-200 rounded-2xl p-8 border-2 border-gray-300 mt-10 md:mt-16 md:w-[25%]">
          <h3 className="text-xl font-medium">Request a Demo</h3>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {[
              {
                label: "Practice or Company Name",
                type: "text",
                required: true,
                name: "practiceName",
              },
              {
                label: "First Name",
                type: "text",
                required: true,
                name: "firstName",
              },
              {
                label: "Last Name",
                type: "text",
                required: true,
                name: "lastName",
              },
              { label: "Email", type: "email", required: true, name: "email" },
              {
                label: "Phone Number",
                type: "tel",
                required: true,
                name: "phoneNumber",
              },
            ].map((input, index) => (
              <div key={index}>
                <label className="text-gray-400">{input.label}*</label>
                <input
                  name={input.name}
                  type={input.type}
                  className="border p-2 rounded-lg border-gray-300 w-full"
                  required={input.required}
                />
              </div>
            ))}

            {/* Job Title Dropdown */}
            <div>
              <label className="text-gray-400">Job Title*</label>
              <select
                name="jobTitle"
                required
                className="border p-2 rounded-lg border-gray-300 w-full"
              >
                <option value="">Select Job Title</option>
                <option value="Physician">Physician</option>
                <option value="Healthcare Provider/Nurse">
                  Healthcare Provider/Nurse
                </option>
                <option value="Practice Management/Operations">
                  Practice Management/Operations
                </option>
                <option value="IT/Systems Management">
                  IT/Systems Management
                </option>
                <option value="C-Level Executive">C-Level Executive</option>
                <option value="In-house Billing">In-house Billing</option>
                <option value="Administrative/Front Desk">
                  Administrative/Front Desk
                </option>
                <option value="Other Practice Staff">
                  Other Practice Staff
                </option>
                <option value="Consultant">Consultant</option>
                <option value="Billing Service Provider">
                  Billing Service Provider
                </option>
                <option value="Potential Partner/Integrator">
                  Potential Partner/Integrator
                </option>
                <option value="Insurance Provider">Insurance Provider</option>
                <option value="Patient/Resident/Educator/Student">
                  Patient/Resident/Educator/Student
                </option>
                <option value="Media/Press">Media/Press</option>
                <option value="Job Applicant">Job Applicant</option>
              </select>
            </div>

            {/* Country Dropdown */}
            <div>
              <label className="text-gray-400">State*</label>
              <select
                name="state"
                required
                className="border p-2 rounded-lg border-gray-300 w-full"
              >
                <option value="" className="text-gray-200">
                  Select State
                </option>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

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
              {loading ? "Sending..." : "Submit"}
            </button>
            {message && (
              <div
                className={`mt-4 p-3 text-center ${
                  message.includes("successfully")
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                } rounded-lg`}
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemo;
