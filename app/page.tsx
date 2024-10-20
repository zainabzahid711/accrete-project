import About from "./about/page";
import Homepage from "./home/page";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Homepage />

      <About />
    </main>
  );
}
