import Contact from "./components/contact";
import Gears from "./components/gears";
import Hero from "./components/hero-section";
import TimeLine from "./components/timeline";

export default function Home() {
  return (
    <div>
      <Hero />
      <TimeLine />
      <Gears />
      <Contact />
    </div>
  );
}
