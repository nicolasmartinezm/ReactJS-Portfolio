import classes from "../../styles/homePageStyles/Projects.module.css";
import JMCF from "../../gifs/JMCF.webp";
import indeedLayout from "../../gifs/indeed.webp";
import cimicWebsite from "../../gifs/cimicWebsite.webp";
import googleLayout from "../../gifs/googleLayout.webp";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Projects() {
  return (
    <section className={classes.Projects}>
      <div className={classes.ProjectsHeader}>
        <h1>PORTFOLIO</h1>
        <h2>LATEST PROJECTS</h2>
      </div>
      <div className={classes.ProjectsGroup}>
        <div className={classes.project}>
          <img src={JMCF} alt="Construction company's website" width="100%" />
          <h1>ReactJS Live Website</h1>
          <h2>REACT JS - JAVASCRIPT - CSS - HTML</h2>
          <a
            href="https://jmcfconstruction.com/"
            target="_blank"
            rel="noreferrer"
            alt="react"
          >
            GO TO LIVE WEBSITE
          </a>
        </div>
        <div className={classes.project}>
          <img src={cimicWebsite} alt="Cimic Wordpress Website" width="100%" />
          <h1>Wordpress Live Website</h1>
          <h2>WORDPRESS - PHP - ELEMENTOR - CSS</h2>
          <a
            href="https://www.cimic.cl/"
            target="_blank"
            rel="noreferrer"
            alt="react"
          >
            GO TO LIVE WEBSITE
          </a>
        </div>
        <div className={classes.project}>
          <img src={indeedLayout} alt="Indeed Layout" width="100%" />
          <h1>Indeed Website Layout</h1>
          <h2>JAVASCRIPT - CSS - HTML</h2>
          <a
            href="https://github.com/nicolasmartinezm/indeed"
            target="_blank"
            rel="noreferrer"
          >
            CHECK THE CODES
          </a>
        </div>
        <div className={classes.project}>
          <img src={googleLayout} alt="Google Layout" width="100%" />
          <h1>Google Website Layout</h1>
          <h2>CSS - HTML</h2>
          <a
            href="https://github.com/nicolasmartinezm/GoogleSearch-LAYOUT"
            target="_blank"
            rel="noreferrer"
          >
            CHECK THE CODES
          </a>
        </div>
      </div>
      <Link
        to="/projects"
        className={classes.seeMore}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        SEE MORE
      </Link>
    </section>
  );
}
