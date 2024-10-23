import billingAbout from "@/public/aboutPageAssets/billingAbout.jpg";
import ServiceTwntyBySeven from "../utils/serviceAssete";

const AboutAccrete = () => {
  return (
    <>
      <section className="md:px-28 px-10 p-10">
        <div className="relative rounded-xl flex flex-col md:flex-row bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100">
          {/* Text Section with a gradient background */}
          <div className="relative md:p-12 p-5  text-white rounded-xl md:w-[60%]">
            <p className="text-lg font-semibold mb-4">About Us</p>
            <h1 className="text-4xl font-bold mb-6">
              Leading Experts in Medical Billing Solutions
            </h1>
            <p className="text-md mb-4">
              At Accrete, we are dedicated to streamlining the medical billing
              process, ensuring that healthcare providers can focus on what
              matters most: patient care. Our team of professionals specializes
              in accurate, efficient, and compliant billing solutions tailored
              to meet the unique needs of healthcare practices, clinics, and
              hospitals.
            </p>
            <p className="text-md">
              With years of experience in the industry, we understand the
              complexities of medical billing and the importance of timely
              reimbursements. Our cutting-edge technology and personalized
              services help reduce administrative burdens, increase revenue
              cycles, and improve overall practice efficiency.
            </p>
          </div>
          <div className="absolute top-[48rem] md:top-[29rem] left-0 md:left-auto md:right-80">
            {<ServiceTwntyBySeven />}
          </div>

          {/* Image Section */}
          <img
            className="w-full md:w-96 mt-10 md:mt-0 md:ml-20 rounded-xl object-cover"
            src={billingAbout.src}
            alt="Medical Billing"
          />
        </div>
      </section>
    </>
  );
};

export default AboutAccrete;
