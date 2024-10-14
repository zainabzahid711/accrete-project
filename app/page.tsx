import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import MedicalPractice from "./components/medicalPractice";
import Contact from "./components/contact";
import Footer from "./components/footer";
import surgeryImage from "@/public/homePage/surgery.jpg";
import microscopeImage from "@/public/homePage/microscopee.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <HeroSection />
      <AboutSection
        image={surgeryImage}
        text="Where care meets precision."
        buttonText="Learn More"
        paragraphs={[
          <span key="optimize-revenue" className="font-bold">
            Optimize Revenue, Minimize Costs:
          </span>,
          <span key="optimize-description">
            With our expert medical billing, advanced data analytics, and
            customized technical solutions, we streamline your operations,
            maximizing collections while reducing overhead expenses.
          </span>,
          <span key="effortless-integration" className="font-bold">
            Effortless Integration:
          </span>,
          <span key="integration-description">
            Our concierge-style onboarding ensures a seamless and efficient
            transition, allowing your practice to experience enhanced efficiency
            and financial impact from day one.
          </span>,
        ]}
        reverse={false}
      />

      <AboutSection
        image={microscopeImage}
        text="Where Technology Meets Care"
        buttonText="Why choose Accrete"
        paragraphs={[
          <span key="transforming-healthcare" className="font-bold">
            Transforming Healthcare with Technology:
          </span>,
          <span key="healthcare-description">
            Our advanced technological solutions improve patient care and
            streamline processes for healthcare professionals.
          </span>,
          <span key="innovative-data-solutions" className="font-bold">
            Innovative Data Solutions:
          </span>,
          <span key="data-description">
            Leverage cutting-edge analytics and custom software to elevate your
            practice and enhance patient outcomes.
          </span>,
        ]}
        reverse={true}
      />

      <MedicalPractice />
      <Contact />
      <Footer />
    </main>
  );
}
