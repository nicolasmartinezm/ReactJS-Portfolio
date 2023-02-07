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
import expensesApp from "../../gifs/expensesApp.png";
import classes from "../../styles/singlePageStyles/SingleProjects.module.css";
import Project from "./Project";

export default function SingleProjects() {

  const projects = [
    {
        title:'Wordpress Live Website',
        imgSource: {cimicWebsite},
        alt: 'Cimic Wordpress Website',
        tags:'WORDPRESS - PHP - ELEMENTOR - CSS',
        href:'https://www.cimic.cl/',
        isLive: true,
     },
     {
        title:'Our BMX Website Layout',
        imgSource: {ourbmx},
        alt: 'Our BMX layout',
        tags:'CSS - HTML',
        href:'https://github.com/nicolasmartinezm/Website-BmxBlog',
        isLive: false,
     },
     {
        title:'Google Website Layout',
        imgSource: {googleLayout},
        alt: 'Google Layout',
        tags:'JAVASCRIPT - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/GoogleSearch-LAYOUT',
        isLive: false,
     },
     {
        title:'Indeed Website Layout',
        imgSource: {indeed},
        alt: 'Indeed Layout',
        tags:'JAVASCRIPT - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/indeed',
        isLive: false,
     },
     
     {
        title:'Tomorrow Bank Website Layout',
        imgSource: {tomorrowBank},
        alt: 'Tomorrow Bank Layout',
        tags:'CSS - HTML',
        href:'https://github.com/nicolasmartinezm/Website-MobileBanking',
        isLive: false,
     },
     {
        title:'JMCF Construction - React.JS Website',
        imgSource: {JMCF},
        alt: 'Jmcf website Layout',
        tags:'REACT JS - JAVASCRIPT - CSS - HTML',
        href:'https://jmcfconstruction.com/',
        isLive: true,
     },
     {
      title:'Practicing React.JS - Expenses App',
      imgSource: {expensesApp},
      alt: 'Expenses React App',
      tags:'REACT JS - JAVASCRIPT - CSS - HTML',
      href:'https://github.com/nicolasmartinezm/react-practice-expenses',
      isLive: false,
   },
     
     {
        title:'Bootstrap Website Layout',
        imgSource: {bootstrap},
        alt: 'Bootstrap Website Layout',
        tags:'BOOTSTRAP - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/Bootstrap-Practicing',
        isLive: false,
     },
     {
        title:'Spotify App Layout',
        imgSource: {spotify},
        alt: 'Spotify App Layout',
        tags:'CSS - HTML',
        href:'https://github.com/nicolasmartinezm/spotifyApp-Layout',
        isLive: false,
     },
     {
        title:'Drum Kit Sound - Game',
        imgSource: {drumKit},
        alt: 'Drumkit app',
        tags:'JAVASCRIPT - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-DrumKit',
        isLive: false,
     },
     {
        title:'Flex Gallery Panel',
        imgSource: {flexGallery},
        alt: 'Flex Gallery Panel Layout',
        tags:'CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-CSS-FlexPanels',
        isLive: false,
     },
     {
        title:'Etch a Sketch',
        imgSource: {etchsketch},
        alt: 'Etch a Sketch',
        tags:'JAVASCRIPT - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-etch-a-sketch',
        isLive: false,
     },
     {
        title:'JavaScript Clock',
        imgSource: {clock},
        alt: 'Javascript clock',
        tags:'JAVASCRIPT - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-CSS-CLOCK',
        isLive: false,
     },
     {
        title:'Javascript Tabs',
        imgSource: {tabs},
        alt: 'Javascript Tabs',
        tags:'CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-Tabs',
        isLive: false,
     },
     {
        title:'JavaScript Modals',
        imgSource: {clickOutside},
        alt: 'JS Modals',
        tags:'JAVASCRIPT - CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-Modal-clickOutside',
        isLive: false,
     },
     {
        title:'Updating CSS Variables',
        imgSource: {cssVariables},
        alt: 'CSS Variables',
        tags:'CSS - HTML',
        href:'https://github.com/nicolasmartinezm/JS-PlayingWithCssVariables',
        isLive: false,
     },
]

  return (
    <>
      <section className={classes.projectsSection} id="projects">
        <div className={classes.projects}>
          <div className={classes.sectionHeading}>
            <h5 className={classes.doneHomework}>
              I'VE DONE
              <br />
              THE HOMEWORK
            </h5>
            <h4 className={classes.checkProjects}>
              CHECK SOME OF <br></br> MY PROJECTS!
            </h4>
          </div>
          <div className={classes.sectionText} id="projectText">
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
        {projects.map((project)=>{
            return <Project data={projects} key={project.title} title={project.title} imgSource={project.imgSource} alt={project.alt} tags={project.tags} href={project.href} isLive={project.isLive} />
        })}
        </div>
      </section>
    </>
  );
}
