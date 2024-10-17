import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import MedicalPractice from "./components/medicalPractice";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CardValues from "./components/cardWrapValues";
import ChooseAccrete from "./components/choiceSection";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <HeroSection />
      <CardValues />
      <ChooseAccrete />
      <MedicalPractice />
      <Contact />
      <Footer />
    </main>
  );
}
