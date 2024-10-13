import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import MedicalPractice from "./components/medicalPractice";
import Contact from "./components/contact";
import Footer from "./components/footer";
import aboutImage from "@/public/aboutImagee.jpg";
import TechMeets from "@/public/original.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <HeroSection />
      <AboutSection image={aboutImage} text="We Are Here to Help!" />
      <MedicalPractice />
      <AboutSection image={TechMeets} text="Where Technology Meets Care" />
      <Contact />
      <Footer />
    </main>
  );
}
