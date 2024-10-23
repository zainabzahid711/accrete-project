import WorksOne from "@/public/aboutPageAssets/wordingProcessIcon.svg";
import WorksTwo from "@/public/aboutPageAssets/wordingIcon.svg";
import WorkThree from "@/public/aboutPageAssets/meetClients.svg";
import WorkFour from "@/public/aboutPageAssets/followUp.svg";
import WorkFive from "@/public/aboutPageAssets/lastStep.svg";
const HowWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Book Appointment",
      description:
        "You can book an appointment with us by calling our office, filling out an online form, or using our mobile app.",
      icon: WorksOne.src,
    },
    {
      id: "02",
      title: "Visit Our Facility",
      description:
        "Visit our state-of-the-art facility and meet with our team of experts in person to discuss your needs.",
      icon: WorksTwo.src,
    },
    {
      id: "03",
      title: "Meet Our Clients",
      description:
        "Meet our satisfied clients and learn more about how we have helped them achieve their goals.",
      icon: WorkThree.src,
    },
    {
      id: "04",
      title: "Follow Up",
      description:
        "We ensure proper follow-up to monitor your progress and provide ongoing support for the best results.",
      icon: WorkFour.src,
    },
    {
      id: "05",
      title: "Insurance and Billing",
      description:
        "We provide assistance with insurance and billing so that the process is seamless and stress-free.",
      icon: WorkFive.src,
    },
  ];

  return (
    <>
      <section className="md:px-28 px-10 p-10">
        <div>
          <div className="text-center">
            <h4 className="hover-border mt-6 font-bold text-2xl md:text-5xl mb-8">
              How it Works
            </h4>
          </div>
          {/* Timeline-like structure */}
          <div className="flex justify-center">
            <div className="relative flex items-start">
              {/* Vertical border */}
              <div className="hidden md:block border-l-2 border-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></div>
              <div className="space-y-10 px-4 md:px-8">
                {/* Control horizontal space */}
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`flex flex-col md:flex-row items-center gap-2 md:gap-60 relative group ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    } `}
                  >
                    {/* Icon Section */}
                    <div className="flex-shrink-0">
                      <div className="rounded-full ml-40 bg-blue-200 w-24 p-5 flex items-center justify-center transition duration-300 ease-in-out group-hover:bg-blue-600">
                        <img
                          className="text-blue-300"
                          src={step.icon}
                          alt={`Step ${step.id} icon`}
                        />
                      </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-80 flex flex-col gap-3 md:ml-10 p-4 group-hover:border-b-2 border-blue-600">
                      <h4 className="text-xl font-medium">
                        <span className="text-gray-200 text-4xl mr-6 md:text-6xl md:mr-12">
                          {step.id}
                        </span>
                        {step.title}
                      </h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
