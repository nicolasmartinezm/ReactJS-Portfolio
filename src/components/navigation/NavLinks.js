import { Fragment } from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            NM
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="/aboutMe"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
            to="/contactMe"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default NavLinks;
