import { Link } from "react-scroll";
import LinkButton from "../LinkButton/LinkButton";
import "./navbar.scss";

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
          {/* <h1>LW</h1> */}
          <img
            className="logo-image"
            src="Images/ProfileLogo.png"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="nav-right">
        <nav>
          <ul className="nav-list-container">
            <li className="nav-list-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="about-section-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
            </li>

            <li className="nav-list-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="projects-section-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-list-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact-header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-list-item">
              <LinkButton
                className="nav-link"
                hrefProp={`Resume/ResumeLeoWall.pdf`}
                bodyProp={"CV"}
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
