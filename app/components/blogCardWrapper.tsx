"use client";
import maxcash from "@/public/blogPage/maxCash.jpg";
import patientEng from "@/public/blogPage/patientEng.jpg";
import automation from "@/public/blogPage/medicalAuto.jpg";
import remote from "@/public/blogPage/remotePatient.jpg";
import auth from "@/public/blogPage/authrize.jpg";
import bill from "@/public/blogPage/medicalBilll.jpg";
import improve from "@/public/blogPage/medicalbilling.jpg";
import billingcode from "@/public/blogPage/billingCoding.webp";
import negotiate from "@/public/blogPage/negotiate.jpg";
import revenue from "@/public/blogPage/REVENUECycle.jpg";

import BlogCard from "./card/blogCard";

const services = [
  {
    id: 1,
    image: maxcash.src,
    text: "Ways To Maximize Your Medical Practice Cash Flow",
    description:
      "Each company's cash flow is its lifeblood. Suppose your practice is experiencing a tight cash flow due to any reason. In that case, it's either the latest policy compliance or any government program enrolment, after which you don't get the best payments. The cash flow of the medical practice depends on many factors that directly influence the practice's overall performance.",
  },
  {
    id: 2,
    image: patientEng.src,
    text: "Strategies for Optimizing Patient Engagement",
    description:
      "The attraction and retention of patients are challenging for most physicians and hospitals. The explanation for the decline may be patients without inefficient and untrained front desk assistance or patients frustrated by the payment process for healthcare organizations and more. That's why it is easier to outsourcing RCM from your medical practice to a reputable organization to take the pressure away and concentrate on quality care.",
  },
  {
    id: 3,
    image: automation.src,
    text: "What is Medical Billing Automation?",
    description:
      "We understand that the ability to effectively and quickly turn claims into cash is the lifeblood of any practice or facility. When a billing error is submitted, the likelihood of payers paying out decreases, so it is critical to get this step right. Although medical billing automation is critical when dealing with complex, high-volume medical billing.",
  },
  {
    id: 4,
    image: remote.src,
    text: "What is Remote Patient Monitoring?",
    description:
      "A healthy population is the foundation of any country. If you are healthy, you can work for more hours, provide for yourself and your families and contribute to your country's GDP. The outbreak of Covid-19 is sufficient to demonstrate how harmful it can be for a country to declining population health. The use of technological advances has therefore become an absolute necessity for the healthcare industry. If people's health is poor, then shops are closed, and companies are shut down, and jobs are reduced.",
  },
  {
    id: 5,
    image: auth.src,
    text: "How to Streamline the Prior Authorization Process",
    description:
      "Streamlining the prior authorization process could be a transition factor in health care in 2021 that eventually changes patient consequences. Based on a review directed by the American Medical Association of 1,000 physicians, nearly 64% of physicians described that they had long delay times for payers to choose the prior authorization that harmed patient outcomes.",
  },
  {
    id: 6,
    image: negotiate.src,
    text: "Tips for Effective Contract Negotiation for Physician Practices",
    description:
      "Physicians have to choose between opting for private practice and entering hospitals OR other health associations in a challenging process. This decision is a turning point in their medical career so before taking a final decision, they have to consider the advantages and disadvantages of both. They select one of them after a detailed cost-benefit study.",
  },
  {
    id: 7,
    image: improve.src,
    text: "Ways to Improve Your Medical Billing Process by Outsourcing to Accrete Concierge",
    description:
      "Medical billing is the backbone of any successful healthcare practice. Streamlining this process ensures timely payments and reduces the chances of errors that could impact your revenue. While many practices consider handling billing in-house, outsourcing to a professional medical billing service like Right Medical Billing can provide significant advantages. Here are ten ways to enhance your medical billing process by partnering with us.",
  },
  {
    id: 8,
    image: bill.src,
    text: "Medical Billing Advocates: The Complete Guide",
    description:
      "Navigating the world of healthcare billing can be a daunting task, especially for those who are not familiar with the complexities of the system. The process can be overwhelming, confusing, and time-consuming, and it can be frustrating to try to understand the bills and insurance claims. That's where medical billing advocates come in.",
  },
  {
    id: 9,
    image: billingcode.src,
    text: "Strategies to Boost Medical Billing and Coding Efficiency",
    description:
      "Due to the new assault and variations throughout this work situation, various adjustments and improvements have been made in the Healthcare and Medical Billing sectors. By analyzing changes in medical billing rules and insurance plans, mentoring your employees on recent code-related variations, and making sure that adjustments and updates are followed effectively, you can achieve the desired results down the track.",
  },
  {
    id: 10,
    image: revenue.src,
    text: "How to Effectively Review Your Revenue Cycle Process?",
    description:
      "Healthcare businesses are no newcomers to insurance claim reimbursements being postponed or refused. Because it is believed that about 25% of denied claims are never reimbursed at all, practices dealing with this problem are at a high chance of losing revenue throughout the year. If your firm's rejection rates are exceptionally high, this is an issue that must be addressed and handled so that your practice can continue to treat clients and generate money.",
  },
];

const BlogWrapper = () => {
  return (
    <section className="md:px-28 px-10 my-12 grid gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.slice(0, 4).map((service, index) => (
          <BlogCard
            key={service.id}
            image={service.image}
            text={service.text}
            description={service.description}
            index={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.slice(4).map((service, index) => (
          <BlogCard
            key={service.id}
            image={service.image}
            text={service.text}
            description={service.description}
            index={index + 4}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogWrapper;
