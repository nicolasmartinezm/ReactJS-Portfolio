import { Link } from "react-router-dom";
import classes from "../../styles/footerStyles/GetInTouch.module.css";
import arrowRight from "../../imgs/right-arrow.png";

export default function GetInTouch() {
  return (
    <section className={classes.getInTouch}>
      <p>
        GET IN <br></br> TOUCH
      </p>
      <img src={arrowRight} className={classes.arrow1} alt="right arrow"></img>
      <Link
        to="/contactMe"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        CONTACT ME HERE!
      </Link>
    </section>
  );
}
