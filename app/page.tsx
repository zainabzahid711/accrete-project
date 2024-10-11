import NavBar from "./components/navBar";
import HeroSection from "./components/heroSection";

export default function Home() {
  return (
    // <div className="grid items-center justify-items-center p-8  font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col sm:items-start">
      <NavBar />
      <HeroSection />
    </main>

    // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    // </div>
  );
}
