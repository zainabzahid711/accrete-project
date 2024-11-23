"use client";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";

const HowWorks = () => {
  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <>
      <section className="2xl:px-52 md:px-28 px-8 py-10" ref={sectionRef}>
        {/* Benefits Section */}
        <div className="container text-center py-10 px-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-customBlue1 mb-8">
            Benefits with ACS Partnership
          </h2>
          <div className="flex flex-col gap-6">
            {/* Reusable Benefit Card */}
            {[
              {
                number: 1,
                title: "Increased Collections",
                description:
                  "ACS's effective billing strategies help boost revenue through timely payments.",
              },
              {
                number: 2,
                title: "Improved Cash Flow",
                description:
                  "Faster collections enhance cash flow and reduce receivable delays.",
              },
              {
                number: 3,
                title: "Access to Expertise",
                description:
                  "Gain billing professionals who understand complex regulations and optimize revenue.",
              },
              {
                number: 4,
                title: "Focus on Core Activities",
                description:
                  "Allows medical staff to prioritize patient care, improving productivity.",
              },
              {
                number: 5,
                title: "Scalability",
                description:
                  "ACS adapts to growing needs, supporting your practice's future growth.",
              },
              {
                number: 6,
                title: "Data-Driven Insights",
                description:
                  "Gain valuable analytics for informed decision-making and strategic planning.",
              },
            ].map((benefit) => (
              <div
                ref={headingRef}
                key={benefit.number}
                className="flex items-center py-3 px-2 md:px-6 rounded-full border border-customBlue2 text-customBlue1"
              >
                <div className="w-8 h-8 mr-2 flex items-center justify-center bg-customBlue1 text-white rounded-full font-bold">
                  {benefit.number}
                </div>
                <div className="w-full flex md:flex-row flex-col justify-between md:items-center items-start">
                  <div className="text-lg font-bold mb-2 md:mb-0 md:w-1/3">
                    <h4>{benefit.title}</h4>
                  </div>
                  <div className="text-base md:w-2/3 text-left">
                    <p className="text-sm md:text-lg font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
