"use client";
import shedule from "@/public/homePage/shedule.png";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const ScheduleDemo = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);

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

  // Country list array
  const countryList = [
    "United States",
    "Canada",
    "Other",
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "British Indian Ocean Territory",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Côte d’Ivoire",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong S.A.R.",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao S.A.R.",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Korea",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestinian Territory",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "U.S. Virgin Islands",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican",
    "Venezuela",
    "Vietnam",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  useEffect(() => {
    setCountries(countryList);
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedServices((prev) =>
      prev.includes(value)
        ? prev.filter((service) => service !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Selected Services:", selectedServices);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:px-20 px-2">
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
          <h3 className="text-xl font-medium mb-4">Request a Demo</h3>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            {[
              {
                label: "Practice or Company Name",
                type: "text",
                required: true,
              },
              { label: "First Name", type: "text", required: true },
              { label: "Last Name", type: "text", required: true },
              { label: "Email", type: "email", required: true },
              { label: "Phone Number", type: "tel", required: true },
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

            {/* Job Title Dropdown */}
            <div>
              <label className="text-gray-400">Job Title*</label>
              <select
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
              <label className="text-gray-400">Country*</label>
              <select
                required
                className="border p-2 rounded-lg border-gray-300 w-full"
              >
                <option value="" className="text-gray-200">
                  Select Country
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemo;
