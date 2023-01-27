import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import { motion } from "framer-motion";

const MobileNavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul className={classes.MobileNavLinks}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          HOME
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/projects"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          PROJECTS
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/aboutMe"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          ABOUT ME
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link
          to="/contactMe"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          CONTACT
        </Link>
      </motion.li>
    </ul>
  );
};
export default MobileNavLinks;
