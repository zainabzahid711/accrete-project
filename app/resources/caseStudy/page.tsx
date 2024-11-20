"use client";

import bgImage from "@/public/homePage/heroBg.jpeg";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import CaseStudyCard from "@/app/components/card/caseStudy";
const caseStudies = [
  {
    count: 1,
    text: "Pediatric Urgent Care Group",
    description:
      "How Accrete Concierge helped “Pediatric Urgent Care Group” in improving Collections within 6 months?",
  },
  {
    count: 2,
    text: "Free Standing Emergency Room",
    description:
      "How Accrete Concierge improved reimbursement per encounter and out of network negotiations for a “Free Standing ER” in Texas?",
  },
  {
    count: 3,
    text: "Credentialing & Contracting",
    description:
      "How Accrete Concierge Credentialing team assisted Hospitals, Emergency Rooms, Urgent care Centers, Physicians Groups and Specialty Clinics?",
  },
  {
    count: 4,
    text: "Inpatient DRG Review & AR Recovery",
    description:
      "Inpatient DRG Review and AR Recovery for a Hospital located in Texas.",
  },
];

const CaseStudy = () => {
  const headingRef = useAnimateOnScroll("animate-slide-up-fade");

  return (
    <>
      <section className="my-10">
        <div
          className="text-center justify-center flex items-center bg-cover bg-center "
          style={{ backgroundImage: `url(${bgImage.src})`, height: "250px" }}
        >
          <h3
            ref={headingRef}
            className="animate-slide-up-fade hover-border font-bold w-72 md:w-full text-xl md:text-5xl"
          >
            Accrete Concierge Case Studies
          </h3>
        </div>
        <div className="mx-10 mt-10 md:mx-40 gap-12 flex justify-center items-center flex-col">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index} // Use unique keys if possible, such as an id.
              count={study.count}
              text={study.text}
              description={study.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudy;
