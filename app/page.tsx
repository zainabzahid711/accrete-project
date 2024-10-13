import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import MedicalPractice from "./components/medicalPractice";
import TechMeets from "./components/techMeets";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <MedicalPractice />
      <TechMeets />
      <Contact />
      <Footer />
    </main>
  );
}
