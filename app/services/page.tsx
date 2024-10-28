import ServicesSection from "../components/services";
// import serviceImage from "@/public/homePage/serviceImage.jpg";

const Services = () => {
  return (
    <>
      <section className="py-12 relative">
        {/* <div
          className="relative bg-cover bg-center rounded-lg mb-12"
          style={{
            backgroundImage: `url(${serviceImage.src})`,
            height: "300px", // Set height for the section
            overflow: "hidden",
          }}
        >
          <div className="absolute inset-0 bg-blue-300 opacity-50"></div>{" "}
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
            <div>
              <h2 className="text-xl font-bold">
                Medical Billing Services we offer
              </h2>
              <ul className="mt-4 space-y-2">
                <li>Medical Billing and Coding</li>
                <li>Accounts Management</li>
                <li>Credentialing and Contracting</li>
                <li>Our Network Negotiation</li>
                <li>Eligibility and Benefits Verification</li>
                <li>Complete RCM Services</li>
              </ul>
            </div>
          </div>
        </div> */}

        <ServicesSection />
      </section>
    </>
  );
};

export default Services;
