import classes from "../../styles/singlePageStyles/SingleProjects.module.css";
import bootstrap from "../../gifs/bootstrap.png";
import clickOutside from "../../gifs/clickOutside.png";
import clock from "../../gifs/clock.png";
import cssVariables from "../../gifs/cssVariables.png";
import drumKit from "../../gifs/drumKit.png";
import etchsketch from "../../gifs/etch-sketch.png";
import flexGallery from "../../gifs/flexGallery.png";
import googleLayout from "../../gifs/googleLayout.png";
import indeed from "../../gifs/indeed.png";
import JMCF from "../../gifs/JMCF.png";
import ourbmx from "../../gifs/ourbmx.png";
import spotify from "../../gifs/spotify.png";
import tabs from "../../gifs/tabs.png";
import tomorrowBank from "../../gifs/tomorrowBank.png";
import cimicWebsite from "../../gifs/cimicWebsite.png";

export default function SingleProjects() {
  return (
    <>
      <section class={classes.projectsSection} id="projects">
        <div className={classes.projects}>
          <div class={classes.sectionHeading}>
            <h5 className={classes.doneHomework}>
              I'VE DONE
              <br />
              THE HOMEWORK
            </h5>
            <h4 className={classes.checkProjects}>
              CHECK SOME OF <br></br> MY PROJECTS!
            </h4>
          </div>
          <div class={classes.sectionText} id="projectText">
            <p>
              The best way to learn is with the hands on deck. <br></br>
              <br></br>I'm a strong believer that practice is what makes
              perfection and what teaches me how to really things work,
              specially in Web Development.<br></br>
              <br></br> Here are some projects that I've been creating with my
              own code as a Freelancer and while assisting to Front-End
              Development online courses.
              <br></br>
              <br></br>
              Click on them and get the codes! .
            </p>
          </div>
        </div>
        <div className={classes.ProjectsGroup}>
          <div className={classes.project}>
            <img
              src={cimicWebsite}
              alt="Cimic Wordpress Website"
              width="100%"
            />
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
            <img src={ourbmx} alt="Our BMX layout" width="100%" />
            <h1>Our BMX Website Layout</h1>
            <h2>CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/Website-BmxBlog"
              target="_blank"
              rel="noreferrer"
              alt="our bmx website layout"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={googleLayout} alt="Google Layout" width="100%" />
            <h1>Google Website Layout</h1>
            <h2>JAVASCRIPT - CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/GoogleSearch-LAYOUT"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={drumKit} alt="Drumkit" width="100%" />
            <h1>Drum Kit Sound - Game</h1>
            <h2>JAVASCRIPT - CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-DrumKit"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={tomorrowBank} alt="Tomorrow Bank Layout" width="100%" />
            <h1>Tomorrow Bank Website Layout</h1>
            <h2>CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/Website-MobileBanking"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={indeed} alt="Indeed Layout" width="100%" />
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
            <img src={JMCF} alt="Jmcf website Layout" width="100%" />
            <h1>JMCF CONSTRUCTION - React Website </h1>
            <h2>REACT JS - JAVASCRIPT - CSS - HTML</h2>
            <a
              href="https://jmcfconstruction.com/"
              target="_blank"
              rel="noreferrer"
            >
              GO TO LIVE WEBSITE
            </a>
          </div>
          <div className={classes.project}>
            <img src={bootstrap} alt="Bootstrap Website Layout" width="100%" />
            <h1>Bootstrap Website Layout</h1>
            <h2>BOOTSTRAP - CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/Bootstrap-Practicing"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={spotify} alt="Spotify Layout" width="100%" />
            <h1>Spotify App Layout</h1>
            <h2>CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/spotifyApp-Layout"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={flexGallery} alt="Flex Gallery Layout" width="100%" />
            <h1>Flex Gallery Panel</h1>
            <h2>CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-CSS-FlexPanels"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={etchsketch} alt="Etch a sketch" width="100%" />
            <h1>Etch a Sketch</h1>
            <h2>JAVASCRIPT - CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-etch-a-sketch"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={clock} alt="Javascript clock" width="100%" />
            <h1>JS Clock</h1>
            <h2>JAVASCRIPT - CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-CSS-CLOCK"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={tabs} alt="Tabs" width="100%" />
            <h1>Javascript Tabs</h1>
            <h2>CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-Tabs"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={clickOutside} alt="Click outside" width="100%" />
            <h1>JS Modals</h1>
            <h2>JAVASCRIPT - CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-Modal-clickOutside"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
          <div className={classes.project}>
            <img src={cssVariables} alt="CSS Variables" width="100%" />
            <h1>Updating CSS Variables</h1>
            <h2>CSS - HTML</h2>
            <a
              href="https://github.com/nicolasmartinezm/JS-PlayingWithCssVariables"
              target="_blank"
              rel="noreferrer"
            >
              CHECK THE CODES
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
