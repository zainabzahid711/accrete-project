import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";
import Contact from "./components/contact";
import Footer from "./components/footer";
import CardValues from "./components/cardWrapValues";
import ChooseAccrete from "./components/choiceSection";
import Services from "./components/services";
import Department from "./components/departments";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <HeroSection />
      <CardValues />
      <ChooseAccrete />
      <Services />
      <Department />
      <Contact />
      <Footer />
    </main>
  );
}
