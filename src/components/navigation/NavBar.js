import classes from "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNav";
const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};
export default NavBar;
