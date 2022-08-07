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
          <h1>LW</h1>
        </Link>
      </div>
      <div className="nav-right">
        <nav>
          <ul>
            <li>
              <Link
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

            <li>
              <Link
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
            <li>
              <Link
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
            <li className="resume-button">
              <LinkButton hrefProp={`/resume.pdf`} bodyProp={"CV"} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
