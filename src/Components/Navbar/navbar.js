import { Link } from "react-scroll";
import "./navbar.scss";
import NavDesktop from "./NavDesktop/NavDesktop";

function Navbar() {
  return (
    <div className="header">
      <div className="navlogo">
        <Link
          activeClass="active"
          to="intro-section"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          <img
            className="logo-image"
            src="Images/ProfileLogoCropped.png"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-right">
        <NavDesktop />
      </div>
    </div>
  );
}
export default Navbar;


//NAVBAR - burger menu plan
// Display Burger menu icon
// Display menu modal
// add onclick functionality to icon
// add media queries to display icon only in mobile 
// add links to modal
// add onclick functionality to links - when section links are clicked, modal dissapears automatically
