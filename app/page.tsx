import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import MedicalPractice from "./components/medicalPractice";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CardValues from "./components/cardWrapValues";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <HeroSection />
      <CardValues />
      <MedicalPractice />
      <Contact />
      <Footer />
    </main>
  );
}
