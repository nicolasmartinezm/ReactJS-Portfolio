import "../../styles/app.css";
import "animate.css/animate.min.css";
import Hero from "./Hero";
import Projects from "./Projects";
import Skillset from "./Skillset";
import AboutMe from "./AboutMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="website">
        <Projects />
        <Skillset />
        <AboutMe />
      </div>
    </>
  );
}
