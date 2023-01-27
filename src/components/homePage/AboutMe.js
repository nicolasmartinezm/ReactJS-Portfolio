import classes from "../../styles/homePageStyles/AboutMe.module.css";
import { Link } from "react-router-dom";
import githubPic from "../../imgs/github.webp";
import githubMobile from "../../imgs/githubMobile.webp";
export default function AboutMe() {
  return (
    <>
      <section className={classes.AboutMe}>
        <div className={classes.AboutMeHeader}>
          <h1>WHO I AM</h1>
          <h2>ABOUT ME</h2>
        </div>
        <div className={classes.AboutMeText}>
          <p>
            I have a{" "}
            <span>Bachelor's Degree in Marketing and Business Management </span>
            and a <span>Co-Op Diploma in Web Development</span>.<br></br>
            <br></br> During the last couple of years I've been perfecting my
            knowledge through <span>online courses and certificates</span>,
            <span> creating websites, </span>
            and working mainly with <span>Javascript</span>,{" "}
            <span>ReactJS</span>, <span>CSS/HTML</span> and{" "}
            <span>WordPress</span>. <br></br>
            <br></br>I'm currently <span>based in Brisbane QLD, Australia</span>{" "}
            working on projects and keeping my learning up to date.
          </p>
          <Link to="downloads/NicolasMartinezCV.pdf" target="_blank" download>
            Download CV
          </Link>
        </div>
      </section>
      <section className={classes.github} id="github">
        <h4 className={classes.githubTitle}>CHECK OUT MY GITHUB!</h4>
        <div className={classes.githubPic}>
          <a
            href="https://github.com/nicolasmartinezm"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubPic}
              alt="github profile"
              className={classes.imageDesktop}
            ></img>
            <img
              src={githubMobile}
              alt="github profile"
              className={classes.imageMobile}
              id="imageMobile"
            ></img>
          </a>
        </div>
      </section>
    </>
  );
}
