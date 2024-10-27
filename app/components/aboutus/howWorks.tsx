"use client";
import WorksOne from "@/public/aboutPageAssets/wordingProcessIcon.svg";
import WorksTwo from "@/public/aboutPageAssets/wordingIcon.svg";
import WorkThree from "@/public/aboutPageAssets/meetClients.svg";
import useAnimateOnScroll from "@/app/hooks/useAnimateOnScroll";

const HowWorks = () => {
  const sectionRef = useAnimateOnScroll("animate-slide-up-fade");
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <>
      <section className="md:px-28 px-10 py-10" ref={sectionRef}>
        <div className="text-center mb-12">
          <h4
            className="hover-border mt-6 font-bold text-2xl md:text-5xl text-customBlue1"
            ref={headingRef}
          >
            How it Works
          </h4>
        </div>

        {/* Steps Section */}
        <div className="container text-center mb-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center max-w-xs text-center">
              <div className="step bg-customBlue1 text-white font-semibold rounded-full py-6 px-10">
                Create the Invoice
              </div>
              <p className="text-base mt-4">
                Prepare an accurate invoice with all necessary details to
                streamline payment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center max-w-xs text-center">
              <div className="step bg-customBlue2 text-white font-semibold rounded-full py-6 px-10">
                Send the Invoice
              </div>
              <p className="text-base mt-4">
                Send invoices promptly via automated or manual methods.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center max-w-xs text-center">
              <div className="step bg-customBlue3 text-white font-semibold rounded-full py-6 px-10">
                Collect and Track Payments
              </div>
              <p className="text-base mt-4">
                Use billing software to manage payment collection and tracking.
              </p>
            </div>
          </div>
        </div>

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
                key={benefit.number}
                className="flex flex-col md:flex-row items-start gap-4 py-3 px-2 md:px-6 rounded-full border border-customBlue2 text-customBlue1"
              >
                <div className="flex md:flex-row flex-col gap-2 md:gap-5">
                  <div className="flex gap-1 md:gap-5">
                    <div className="w-8 h-8 flex items-center justify-center bg-customBlue1 text-white rounded-full font-bold">
                      {benefit.number}
                    </div>
                    <div className="text-lg font-bold">
                      <h4>{benefit.title}</h4>
                    </div>
                  </div>
                  <p className="text-lg font-medium">{benefit.description}</p>
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
