import classes from "../../styles/homePageStyles/Skillset.module.css";
export default function Skillset() {
  return (
    <section className={classes.Skillset}>
      <div className={classes.SkillsetHeader}>
        <h1>WHAT I WORK WITH</h1>
        <h2>MY SKILLSET</h2>
      </div>
      <div className={classes.Skills}>
        <p>ReactJS - Javascript - HTML - CSS</p>
        <p> Bootstrap - Sass - WordPress - PHP</p>
        <p>GIT - CPanel - Figma - Photoshop.</p>
      </div>
      <div className={classes.SkillsMobile}>
        <p>ReactJS - Javascript </p>
        <p>HTML - CSS</p>
        <p> Bootstrap - Sass</p>
        <p>WordPress - PHP</p>
        <p>GIT - CPanel</p>
        <p>Figma - Photoshop.</p>
      </div>
    </section>
  );
}
