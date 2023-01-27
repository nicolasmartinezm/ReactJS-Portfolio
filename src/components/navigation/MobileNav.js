import MobileNavLinks from "./MobileNavLinks";
import classes from "./NavBar.module.css";
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <ImMenu
      className={classes.Hamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <AiOutlineClose
      className={classes.CloseHamburger}
      size="40px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={classes.MobileNavigation}>
      <ul className={classes.logo}>
        <li>
          <a href="/">NM</a>
        </li>
      </ul>
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
      )}
    </nav>
  );
};

export default MobileNavigation;
